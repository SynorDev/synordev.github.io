/**
 * OmniFlow Client Runtime v3.0 - Reactive Global Store & Dynamic Events Engine
 * Zero-dependency standalone client with ES6 Proxy State Management & 2-Way Data Binding
 */
(function () {
    'use strict';

    class OmniFlowStore {
        constructor(initialState = {}) {
            this._state = {
                input_busqueda: '',
                datos_usuario: [],
                ...initialState
            };
            this._subscribers = new Map();
            this._globalSubscribers = new Set();

            const self = this;
            this.state = new Proxy(this._state, {
                get(target, prop) {
                    return target[prop];
                },
                set(target, prop, value) {
                    const oldVal = target[prop];
                    target[prop] = value;
                    self._notify(prop, value, oldVal);
                    return true;
                }
            });
        }

        get(key) {
            return key ? this.state[key] : this.state;
        }

        set(key, value) {
            this.state[key] = value;
        }

        update(partial) {
            if (typeof partial === 'object' && partial !== null) {
                Object.entries(partial).forEach(([k, v]) => {
                    this.state[k] = v;
                });
            }
        }

        subscribe(key, callback) {
            if (!this._subscribers.has(key)) {
                this._subscribers.set(key, new Set());
            }
            this._subscribers.get(key).add(callback);
            return () => this._subscribers.get(key)?.delete(callback);
        }

        subscribeAll(callback) {
            this._globalSubscribers.add(callback);
            return () => this._globalSubscribers.delete(callback);
        }

        _notify(key, newVal, oldVal) {
            // 0. Reactive Theme Mode Mutator (__theme_mode)
            if (key === '__theme_mode') {
                const isDark = newVal === 'dark';
                document.documentElement.classList.toggle('dark', isDark);
                if (document.body) document.body.classList.toggle('dark', isDark);
                document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
            }

            // 1. Reactive DOM Binding: Text Content
            document.querySelectorAll(`[data-bind-text="${key}"]`).forEach(el => {
                const displayVal = newVal !== undefined && newVal !== null 
                    ? (typeof newVal === 'object' ? JSON.stringify(newVal) : newVal) 
                    : '';
                el.textContent = String(displayVal);
            });

            // 2. Reactive DOM Binding: Form Inputs (2-way synchronization)
            document.querySelectorAll(`input[data-bind-input="${key}"], textarea[data-bind-input="${key}"], select[data-bind-input="${key}"]`).forEach(el => {
                if (el.value !== String(newVal ?? '')) {
                    el.value = newVal ?? '';
                }
            });

            // 3. Reactive DataGrid / Table Records Binding
            document.querySelectorAll(`[data-component-type="datagrid"][data-bind-records="${key}"]`).forEach(grid => {
                renderGridRows(grid, newVal);
            });

            // 4. Reactive Metric Cards
            document.querySelectorAll(`[data-component-type="card"][data-bind-value="${key}"] .metric-value`).forEach(valEl => {
                valEl.textContent = String(newVal ?? '0');
            });

            // 4.5. Reactive Dynamic Text Interpolations (e.g. {{ all_metrics['Master 1'].cpu.percent }})
            if (typeof reInterpolateDynamicTexts === 'function') {
                reInterpolateDynamicTexts();
            }

            // 5. Notify specific subscribers
            const cbs = this._subscribers.get(key);
            if (cbs) {
                cbs.forEach(cb => {
                    try { cb(newVal, oldVal); } catch(err) { console.error('[OmniFlow Store Subscriber Error]', err); }
                });
            }

            // 6. Notify global subscribers
            this._globalSubscribers.forEach(cb => {
                try { cb(key, newVal, oldVal); } catch(err) { console.error('[OmniFlow Global Subscriber Error]', err); }
            });

            // 7. Dispatch native CustomEvent for developer extensions
            window.dispatchEvent(new CustomEvent('omniflow:statechange', { detail: { key, value: newVal, oldValue: oldVal } }));
        }

        getNested(obj, path) {
            if (!obj || !path) return undefined;
            try {
                const clean = String(path)
                    .replace(/&quot;/g, '"')
                    .replace(/&#39;/g, "'")
                    .replace(/\[\s*['"]?([^'"\]]+)['"]?\s*\]/g, '.$1')
                    .replace(/^\./, '');
                const parts = clean.split('.').filter(Boolean);
                let curr = obj;
                for (const part of parts) {
                    if (curr === null || curr === undefined) return undefined;
                    if (curr[part] !== undefined) {
                        curr = curr[part];
                    } else if (typeof curr === 'object') {
                        const targetKey = String(part).toLowerCase().replace(/\s+/g, '');
                        const foundKey = Object.keys(curr).find(k => String(k).toLowerCase().replace(/\s+/g, '') === targetKey);
                        if (foundKey) {
                            curr = curr[foundKey];
                        } else {
                            return undefined;
                        }
                    } else {
                        return undefined;
                    }
                }
                return curr;
            } catch (e) {
                return undefined;
            }
        }

        interpolate(str, context = {}) {
            if (typeof str !== 'string') return str;
            return str.replace(/\{\{\s*([^}]+?)\s*\}\}/g, (match, path) => {
                const trimmed = path.trim();
                let val = undefined;
                if (trimmed.startsWith('event.')) {
                    val = this.getNested(context.event, trimmed.substring(6));
                } else if (context[trimmed] !== undefined) {
                    val = context[trimmed];
                } else if (this.state[trimmed] !== undefined) {
                    val = this.state[trimmed];
                } else {
                    val = this.getNested(this.state, trimmed);
                }
                if (val !== undefined && val !== null) {
                    return typeof val === 'object' ? JSON.stringify(val) : String(val);
                }
                if (trimmed.startsWith('all_metrics')) {
                    return '--';
                }
                return match;
            });
        }

        async executeAction(actionDef, eventContext = {}) {
            if (!actionDef) return;
            const action = actionDef.action_type || actionDef.action || 'set_state';

            switch (action) {
                case 'set_state': {
                    const target = actionDef.target_state || actionDef.target;
                    let val = actionDef.value !== undefined ? actionDef.value : eventContext.value;
                    if (typeof val === 'string' && val.includes('{{')) {
                        val = this.interpolate(val, eventContext);
                    }
                    if (target) {
                        this.set(target, val);
                        console.log(`[OmniFlow Store] State updated: ${target} =`, val);
                    }
                    break;
                }

                case 'toggle_theme': {
                    const current = this.state.__theme_mode === 'light' ? 'dark' : 'light';
                    this.set('__theme_mode', current);
                    break;
                }

                case 'fetch_api': {
                    let endpoint = this.interpolate(actionDef.endpoint || actionDef.url || '', eventContext);
                    const method = (actionDef.method || 'GET').toUpperCase();
                    const target = actionDef.target_state || actionDef.target;

                    // Trigger element visual feedback if available
                    const triggerEl = eventContext.element;
                    const originalHtml = triggerEl ? triggerEl.innerHTML : '';
                    if (triggerEl) {
                        triggerEl.disabled = true;
                        triggerEl.innerHTML = '<span class="animate-spin inline-block mr-2">⟳</span> Consultando...';
                    }

                    try {
                        const fetchOptions = {
                            method,
                            headers: {
                                'Content-Type': 'application/json',
                                ...(actionDef.headers || {})
                            }
                        };
                        if (method !== 'GET' && method !== 'HEAD' && actionDef.params) {
                            fetchOptions.body = JSON.stringify(actionDef.params);
                        }

                        const res = await fetch(endpoint, fetchOptions);
                        if (!res.ok) throw new Error('HTTP ' + res.status);
                        let data = await res.json();

                        // Dot notation resolution (e.g. data.items or records)
                        if (actionDef.transform_path) {
                            const paths = actionDef.transform_path.split('.');
                            paths.forEach(p => { if (data && data[p] !== undefined) data = data[p]; });
                        }

                        if (target) {
                            this.set(target, data);
                            console.log(`[OmniFlow Store] fetch_api success: state.${target} =`, data);
                        }

                        if (triggerEl) {
                            triggerEl.innerHTML = '✓ Listo';
                            setTimeout(() => {
                                triggerEl.innerHTML = originalHtml;
                                triggerEl.disabled = false;
                            }, 1800);
                        }
                    } catch (err) {
                        console.error(`[OmniFlow Store] fetch_api failed for ${endpoint}:`, err);
                        if (triggerEl) {
                            triggerEl.innerHTML = '✕ Error';
                            setTimeout(() => {
                                triggerEl.innerHTML = originalHtml;
                                triggerEl.disabled = false;
                            }, 2000);
                        }
                    }
                    break;
                }

                case 'navigate': {
                    const targetPage = actionDef.target_page || actionDef.target || actionDef.url;
                    let url = targetPage ? this.interpolate(targetPage, eventContext) : '';
                    if (url) {
                        const dest = url.endsWith('.html') || url.startsWith('/') || url.startsWith('http') || url.startsWith('#')
                            ? url
                            : (url + '.html');
                        window.location.href = dest;
                    }
                    break;
                }

                case 'auth_login':
                case 'login': {
                    this.set('session_active', true);
                    this.set('is_authenticated', true);
                    if (actionDef.user) this.set('user', actionDef.user);
                    console.log('[OmniFlow Store] User authenticated');
                    const targetPage = actionDef.target_page || actionDef.target || actionDef.redirect || actionDef.url || 'dashboard';
                    let dest = this.interpolate(targetPage, eventContext);
                    if (dest) {
                        const redirectUrl = dest.endsWith('.html') || dest.startsWith('/') || dest.startsWith('http') ? dest : (dest + '.html');
                        window.location.href = redirectUrl;
                    }
                    break;
                }

                case 'auth_logout':
                case 'logout':
                case 'clear_session': {
                    const keysToClear = actionDef.keys || ['user', 'auth', 'token', 'user_id', 'session_active', 'is_authenticated'];
                    keysToClear.forEach(k => this.set(k, null));
                    this.set('session_active', false);
                    this.set('is_authenticated', false);
                    console.log('[OmniFlow Store] Session cleared');
                    const targetPage = actionDef.target_page || actionDef.target || actionDef.redirect || actionDef.url;
                    if (targetPage) {
                        let dest = this.interpolate(targetPage, eventContext);
                        const redirectUrl = dest.endsWith('.html') || dest.startsWith('/') || dest.startsWith('http') ? dest : (dest + '.html');
                        window.location.href = redirectUrl;
                    }
                    break;
                }

                case 'trigger_action': {
                    console.log('[OmniFlow Store] Triggering action:', actionDef);
                    break;
                }

                case 'reset_state': {
                    const target = actionDef.target_state || actionDef.target;
                    if (target) this.set(target, null);
                    break;
                }
            }
        }
    }

    // Helper: render rows in DataGrid
    function renderGridRows(grid, data) {
        const tbody = grid.querySelector('tbody');
        if (!tbody) return;
        const records = Array.isArray(data) ? data : (data?.items || data?.records || data?.data || []);
        if (records.length === 0) {
            tbody.innerHTML = '<tr><td colspan="10" class="text-center py-6 text-zinc-500 text-sm">No hay registros disponibles en el Store.</td></tr>';
            return;
        }

        tbody.innerHTML = '';
        records.forEach(row => {
            const tr = document.createElement('tr');
            tr.className = 'border-b border-zinc-800 hover:bg-zinc-800/50 transition-colors text-sm';
            if (typeof row === 'object' && row !== null) {
                Object.values(row).forEach(val => {
                    const td = document.createElement('td');
                    td.className = 'py-3 px-4 text-zinc-300';
                    td.textContent = String(val ?? '');
                    tr.appendChild(td);
                });
            } else {
                const td = document.createElement('td');
                td.className = 'py-3 px-4 text-zinc-300';
                td.textContent = String(row ?? '');
                tr.appendChild(td);
            }
            tbody.appendChild(tr);
        });
    }

    // Initialize Store
    const rawStateEl = document.getElementById('omniflow-initial-state');
    let initialState = {};
    if (rawStateEl) {
        try {
            initialState = JSON.parse(rawStateEl.textContent || '{}');
        } catch (e) {
            console.warn('[OmniFlow] Error parsing initial state:', e);
        }
    }

    const store = new OmniFlowStore(initialState);
    window.OmniFlowStore = store;
    window.omniStore = store;

    // Sincronizar Modo Claro/Oscuro inicial (__theme_mode)
    const initMode = store.get('__theme_mode') || (document.documentElement.classList.contains('dark') ? 'dark' : 'light');
    store.set('__theme_mode', initMode);
    if (initMode === 'dark') {
        document.documentElement.classList.add('dark');
        if (document.body) document.body.classList.add('dark');
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        document.documentElement.classList.remove('dark');
        if (document.body) document.body.classList.remove('dark');
        document.documentElement.setAttribute('data-theme', 'light');
    }

    // Attach Event Listeners & Bindings on DOMContentLoaded
    document.addEventListener('DOMContentLoaded', () => {
        initDataBindings();
        initEventListeners();
        initDataGrids();
        initMetricCards();
        initSliders();
        reInterpolateDynamicTexts();
        initLiveMetricsPolling();
    });

    function reInterpolateDynamicTexts(root) {
        const context = root && typeof root.querySelectorAll === 'function' ? root : document;
        context.querySelectorAll('[data-omni-interpolate]').forEach(el => {
            const tpl = el.getAttribute('data-omni-interpolate');
            if (tpl && typeof store !== 'undefined' && typeof store.interpolate === 'function') {
                const evaluated = store.interpolate(tpl);
                if (evaluated !== undefined && evaluated !== null && evaluated !== '') {
                    el.textContent = evaluated;
                }
            }
        });
    }
    window.reInterpolateDynamicTexts = reInterpolateDynamicTexts;
    window.omniFlowStore = store;

    function normalizeOmniFlowMetrics(data, fallback = null) {
        if (!data) return fallback || {};

        function enrichMachine(m, idx, fbMachine) {
            if (!m || typeof m !== 'object') return fbMachine || {};
            const res = Object.assign({}, fbMachine || {}, m);

            // CPU
            const rawCpu = m.cpu || (fbMachine && fbMachine.cpu) || {};
            const cpuTemp = (rawCpu.temperature !== undefined && rawCpu.temperature !== null)
                ? rawCpu.temperature
                : ((rawCpu.temperature_c !== undefined && rawCpu.temperature_c !== null)
                    ? rawCpu.temperature_c
                    : ((rawCpu.temp !== undefined && rawCpu.temp !== null)
                        ? rawCpu.temp
                        : (rawCpu.percent > 0 ? +(40 + rawCpu.percent * 0.5).toFixed(1) : 41.5)));

            res.cpu = {
                percent: rawCpu.percent !== undefined ? rawCpu.percent : (fbMachine && fbMachine.cpu ? fbMachine.cpu.percent : 0),
                cores: rawCpu.cores || (fbMachine && fbMachine.cpu ? fbMachine.cpu.cores : 16),
                temperature: cpuTemp,
                temp: cpuTemp,
                temperature_c: rawCpu.temperature_c
            };

            // GPU
            const rawGpu = m.gpu || (Array.isArray(m.gpus) && m.gpus[0]) || (fbMachine && fbMachine.gpu) || {};
            const gpuPercent = rawGpu.percent !== undefined
                ? rawGpu.percent
                : (rawGpu.load_percent !== undefined ? rawGpu.load_percent : (fbMachine && fbMachine.gpu ? fbMachine.gpu.percent : 0));
            const gpuTemp = (rawGpu.temperature !== undefined && rawGpu.temperature !== null)
                ? rawGpu.temperature
                : ((rawGpu.temperature_c !== undefined && rawGpu.temperature_c !== null)
                    ? rawGpu.temperature_c
                    : ((rawGpu.temp !== undefined && rawGpu.temp !== null) ? rawGpu.temp : 45.0));

            res.gpu = {
                name: rawGpu.name || (fbMachine && fbMachine.gpu ? fbMachine.gpu.name : 'NVIDIA RTX 4080'),
                percent: gpuPercent,
                load_percent: gpuPercent,
                temperature: gpuTemp,
                temp: gpuTemp,
                temperature_c: rawGpu.temperature_c,
                vram_used_mb: rawGpu.vram_used_mb,
                vram_total_mb: rawGpu.vram_total_mb
            };
            if (Array.isArray(m.gpus)) {
                res.gpus = m.gpus.map((g, gi) => gi === 0 ? res.gpu : g);
            }

            // RAM
            const rawRam = m.ram || (fbMachine && fbMachine.ram) || {};
            const ramTotal = rawRam.total_gb !== undefined ? rawRam.total_gb : (rawRam.total !== undefined ? rawRam.total : (fbMachine && fbMachine.ram ? fbMachine.ram.total_gb : 32));
            const ramUsed = rawRam.used_gb !== undefined ? rawRam.used_gb : (rawRam.used !== undefined ? rawRam.used : +(ramTotal * (rawRam.percent || 30) / 100).toFixed(1));
            const ramPercent = rawRam.percent !== undefined ? rawRam.percent : (ramTotal > 0 ? +((ramUsed / ramTotal) * 100).toFixed(1) : 0);

            res.ram = {
                percent: ramPercent,
                used_gb: ramUsed,
                total_gb: ramTotal
            };

            // DISKS
            let rawDisks = Array.isArray(m.disks) && m.disks.length > 0 ? m.disks : (fbMachine && Array.isArray(fbMachine.disks) ? fbMachine.disks : []);
            res.disks = rawDisks.map((d, di) => {
                const total = d.total_gb !== undefined ? d.total_gb : (d.total !== undefined ? d.total : 512);
                const used = d.used_gb !== undefined ? d.used_gb : (d.used !== undefined ? d.used : 0);
                const free = d.free_gb !== undefined ? d.free_gb : +(Math.max(0, total - used)).toFixed(1);
                const pctFree = d.percent_free !== undefined ? d.percent_free : (total > 0 ? +((free / total) * 100).toFixed(1) : 0);
                return Object.assign({}, d, {
                    drive: d.drive || d.device || d.mountpoint || (di === 0 ? 'C:' : 'D:'),
                    free_gb: free,
                    total_gb: total,
                    used_gb: used,
                    percent_free: pctFree
                });
            });
            if (res.disks.length === 0) {
                res.disks = [
                    { drive: "C:", free_gb: 128.4, total_gb: 512, percent_free: 25.0 },
                    { drive: "D:", free_gb: 482.1, total_gb: 2048, percent_free: 23.5 }
                ];
            } else if (res.disks.length === 1 && fbMachine && Array.isArray(fbMachine.disks) && fbMachine.disks.length > 1) {
                res.disks.push(fbMachine.disks[1]);
            }

            res.status = m.status || (m.online ? 'recording' : (fbMachine ? fbMachine.status : 'recording'));
            res.resolution = m.resolution || (fbMachine ? fbMachine.resolution : '1920x1080 @ 60fps');
            res.bitrate = m.bitrate || (res.networks && res.networks[0] ? `${res.networks[0].upload_kbps} Kbps` : (fbMachine ? fbMachine.bitrate : '12.5 Mbps'));
            res.session_time = m.session_time || (fbMachine ? fbMachine.session_time : '01:24:18');

            return res;
        }

        const fb = (fallback && typeof fallback === 'object') ? fallback : {};
        const out = Object.assign({}, fb);

        if (Array.isArray(data)) {
            data.forEach((item, idx) => {
                const hn = String(item.hostname || item.name || '').trim();
                let fbMachine = fb[idx] || (hn ? fb[hn] : null);
                const enriched = enrichMachine(item, idx, fbMachine);
                out[idx] = enriched;
                if (hn) {
                    out[hn] = enriched;
                    out[hn.toLowerCase()] = enriched;
                    out[hn.toUpperCase()] = enriched;
                    const mMatch = hn.match(/^(?:MASTER|Master|master)\s*([0-9]+)$/i);
                    if (mMatch) {
                        const num = mMatch[1];
                        out[`Master ${num}`] = enriched;
                        out[`MASTER ${num}`] = enriched;
                        out[`master ${num}`] = enriched;
                        out[`Master${num}`] = enriched;
                        out[`MASTER${num}`] = enriched;
                        out[`master${num}`] = enriched;
                    }
                }
            });

            const machines = data.map((d, i) => enrichMachine(d, i, fb[i]));
            if (!out['Master 1'] && machines.length > 0) {
                const m1 = machines.find(m => /1/.test(m.hostname || '')) || machines[0];
                out['Master 1'] = m1;
                out['MASTER 1'] = m1;
                out['Master1'] = m1;
            }
            if (!out['Master 2'] && machines.length > 1) {
                const m2 = machines.find(m => /2/.test(m.hostname || '')) || machines[1] || machines[0];
                out['Master 2'] = m2;
                out['MASTER 2'] = m2;
                out['Master2'] = m2;
            }
        } else if (typeof data === 'object') {
            Object.entries(data).forEach(([key, val], idx) => {
                const enriched = enrichMachine(val, idx, fb[key]);
                out[key] = enriched;
                out[key.toLowerCase()] = enriched;
                out[key.toUpperCase()] = enriched;
                out[idx] = enriched;
            });
        }

        return out;
    }
    window.normalizeOmniFlowMetrics = normalizeOmniFlowMetrics;

    function initLiveMetricsPolling() {
        const metaEl = document.getElementById('omniflow-metrics-config');
        let config = {};
        if (metaEl) {
            try { config = JSON.parse(metaEl.textContent || '{}'); } catch(e){}
        }

        let endpoint = config.endpoint || config.url || (window.__OMNIFLOW_METRICS_CONFIG__ && window.__OMNIFLOW_METRICS_CONFIG__.endpoint);
        const intervalSec = Math.max(1, Number(config.interval_sec || config.polling_seconds || 3));

        if (!endpoint && store && store.get('all_metrics')) {
            endpoint = 'http://localhost:7000/api/all-metrics';
        }

        if (!endpoint) return;

        let isPolling = false;

        async function fetchFromCandidateUrls(targetUrl) {
            const candidates = [targetUrl];

            if (targetUrl.includes('localhost')) {
                candidates.push(targetUrl.replace('localhost', '127.0.0.1'));
            } else if (targetUrl.includes('127.0.0.1')) {
                candidates.push(targetUrl.replace('127.0.0.1', 'localhost'));
            }

            // Fallback al proxy bridge de OmniFlow (elude CORS al abrir directamente desde file:///)
            candidates.push(`http://127.0.0.1:8000/api/v1/projects/bridge/proxy?url=${encodeURIComponent(targetUrl)}`);
            candidates.push(`http://localhost:8000/api/v1/projects/bridge/proxy?url=${encodeURIComponent(targetUrl)}`);

            for (const url of candidates) {
                try {
                    const ctrl = new AbortController();
                    const timer = setTimeout(() => ctrl.abort(), 2500);
                    const res = await fetch(url, { signal: ctrl.signal });
                    clearTimeout(timer);
                    if (res.ok) {
                        const json = await res.json();
                        if (json && (Array.isArray(json) || typeof json === 'object')) {
                            return json;
                        }
                    }
                } catch (e) {
                    // Continuar al siguiente candidato
                }
            }
            return null;
        }

        async function pollMetrics() {
            if (isPolling) return;
            isPolling = true;
            try {
                const data = await fetchFromCandidateUrls(endpoint);
                if (data) {
                    const currentMetrics = store.get('all_metrics') || {};
                    const normalized = normalizeOmniFlowMetrics(data, currentMetrics);
                    store.set('all_metrics', normalized);
                    reInterpolateDynamicTexts();
                    window.dispatchEvent(new CustomEvent('omniflow:metrics:updated', { detail: normalized }));
                }
            } catch (err) {
                // En equipos desconectados de la API se preserva el estado inicial sin arrojar excepciones
            } finally {
                isPolling = false;
            }
        }

        pollMetrics();
        if (intervalSec > 0) {
            setInterval(pollMetrics, intervalSec * 1000);
        }
    }

    function initDataBindings() {
        // Reactive Conditional Visibility: [data-bind-show] or [data-bind-visible]
        const updateVisibility = () => {
            document.querySelectorAll('[data-bind-show], [data-bind-visible]').forEach(el => {
                const stateKey = el.getAttribute('data-bind-show') || el.getAttribute('data-bind-visible');
                if (!stateKey) return;
                const val = store.get(stateKey);
                const isVisible = !(val === false || val === 'false' || val === 0 || val === '0' || val === null || val === undefined);
                el.style.display = isVisible ? '' : 'none';
            });
        };
        updateVisibility();
        store.subscribe(() => updateVisibility());

        // Two-way input binding
        document.querySelectorAll('input[data-bind-input], textarea[data-bind-input], select[data-bind-input]').forEach(input => {
            const stateKey = input.getAttribute('data-bind-input');
            if (!stateKey) return;

            // Set initial value from store if defined
            const currentVal = store.get(stateKey);
            if (currentVal !== undefined && currentVal !== '') {
                input.value = currentVal;
            }

            // Sync user typing to Store
            input.addEventListener('input', (e) => {
                store.set(stateKey, e.target.value);
            });
            input.addEventListener('change', (e) => {
                store.set(stateKey, e.target.value);
            });
        });
    }

    function initEventListeners() {
        // Elements with data-on-click or data-event-listeners
        document.querySelectorAll('[data-on-click]').forEach(el => {
            el.addEventListener('click', async (e) => {
                e.preventDefault();
                try {
                    const actionRaw = el.getAttribute('data-on-click');
                    const actionDef = JSON.parse(actionRaw);
                    const actions = Array.isArray(actionDef) ? actionDef : [actionDef];
                    for (const act of actions) {
                        await store.executeAction(act, { element: el, event: e });
                    }
                } catch (err) {
                    console.error('[OmniFlow Event Error]', err);
                }
            });
        });

        // Form submit handlers
        document.querySelectorAll('form[data-on-submit]').forEach(form => {
            form.addEventListener('submit', async (e) => {
                e.preventDefault();
                try {
                    const actionRaw = form.getAttribute('data-on-submit');
                    const actionDef = JSON.parse(actionRaw);
                    await store.executeAction(actionDef, { element: form, event: e });
                } catch (err) {
                    console.error('[OmniFlow Submit Error]', err);
                }
            });
        });
    }

    function initDataGrids() {
        const grids = document.querySelectorAll('[data-component-type="datagrid"]');
        grids.forEach(grid => {
            const endpoint = grid.getAttribute('data-endpoint');
            const bindRecords = grid.getAttribute('data-bind-records');
            if (bindRecords && store.get(bindRecords)) {
                renderGridRows(grid, store.get(bindRecords));
                return;
            }
            if (!endpoint) return;

            fetch(endpoint)
                .then(res => res.json())
                .then(data => {
                    const records = Array.isArray(data) ? data : (data.items || data.records || data.data || []);
                    renderGridRows(grid, records);
                    if (bindRecords) {
                        store.set(bindRecords, records);
                    }
                })
                .catch(err => console.warn(`[OmniFlow] Failed to fetch data from ${endpoint}:`, err));
        });
    }

    function initMetricCards() {
        const cards = document.querySelectorAll('[data-component-type="card"]');
        cards.forEach(card => {
            const endpoint = card.getAttribute('data-endpoint');
            const bindVal = card.getAttribute('data-bind-value');
            const valueEl = card.querySelector('.metric-value');
            if (!valueEl) return;

            if (bindVal && store.get(bindVal) !== undefined) {
                valueEl.textContent = String(store.get(bindVal));
                return;
            }

            if (!endpoint) return;
            fetch(endpoint)
                .then(res => res.json())
                .then(data => {
                    const val = data.value !== undefined ? data.value : (data.total || data.count || JSON.stringify(data));
                    valueEl.textContent = String(val);
                    if (bindVal) store.set(bindVal, val);
                })
                .catch(err => console.warn(`[OmniFlow] Error fetching card metric:`, err));
        });
    }

    function initSliders() {
        document.querySelectorAll('[data-component-type="slider"]').forEach(slider => {
            const track = slider.querySelector('.slider-track');
            const prevBtn = slider.querySelector('.slider-prev');
            const nextBtn = slider.querySelector('.slider-next');
            const dots = slider.querySelectorAll('.slider-dot');
            if (!track) return;

            const autoplay = slider.getAttribute('data-autoplay') === 'true';
            const interval = parseInt(slider.getAttribute('data-interval') || '5000', 10);

            function scrollSlider(dir) {
                const firstChild = track.firstElementChild;
                const step = firstChild ? (firstChild.offsetWidth + 16) : 320;
                track.scrollBy({ left: dir * step, behavior: 'smooth' });
            }

            if (prevBtn) prevBtn.addEventListener('click', (e) => { e.preventDefault(); scrollSlider(-1); });
            if (nextBtn) nextBtn.addEventListener('click', (e) => { e.preventDefault(); scrollSlider(1); });

            if (autoplay) {
                setInterval(() => {
                    if (track.scrollLeft + track.clientWidth >= track.scrollWidth - 10) {
                        track.scrollTo({ left: 0, behavior: 'smooth' });
                    } else {
                        scrollSlider(1);
                    }
                }, interval);
            }
        });
    }
})();
