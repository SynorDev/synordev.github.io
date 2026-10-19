/**
 * OmniFlow Web Component: <omniflow-header>
 * Barra de navegación y marca responsiva
 */
(function () {
    'use strict';
    const templates = {
        "site-header": `
    <header id="comp-node" class="sticky top-0 z-50 omniflow-glassmorphism text-white border-b border-border shadow-lg transition ">
    <div class="max-w-7xl mx-auto px-6 py-3.5 flex items-center justify-center gap-4">
        <div class="flex items-center gap-6">
            <a href="inicio.html" class="flex items-center gap-2.5 group cursor-pointer hover:opacity-90 transition">
                <span class="w-7 h-7 rounded-lg bg-blue-600 inline-flex items-center justify-center font-bold text-xs text-white shadow-md shadow-blue-500/25">Ω</span>
                <span class="font-bold text-sm tracking-tight text-body group-hover:text-blue-400 transition-colors">Synor Cloud</span>
            </a>
            <nav class="hidden md:flex items-center gap-6">
                <a href="inicio.html" class="text-xs font-medium text-slate-300 hover:text-white transition flex items-center gap-1.5"><span>Inicio</span></a>
<a href="soluciones.html" class="text-xs font-medium text-slate-300 hover:text-white transition flex items-center gap-1.5"><span>Soluciones</span></a>
<a href="contacto.html" class="text-xs font-medium text-slate-300 hover:text-white transition flex items-center gap-1.5"><span>Contacto</span><span class="text-[9px] px-1.5 py-0.2 rounded bg-blue-500/20 text-blue-400 border border-blue-500/30 font-semibold">CTA</span></a>
<a href="login.html" class="text-xs font-medium text-slate-300 hover:text-white transition flex items-center gap-1.5"><span>Login</span><span class="text-[9px] px-1.5 py-0.2 rounded bg-blue-500/20 text-blue-400 border border-blue-500/30 font-semibold">Acceso</span></a>

            </nav>
        </div>
        <div class="flex items-center gap-3">
            
            <button onclick="document.getElementById('mobileNav_comp-node').classList.toggle('hidden')" class="md:hidden p-1 rounded bg-slate-800 text-slate-300 hover:text-white transition">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </button>
            
    <div class="relative group" id="userMenu_comp-node">
    <button type="button" class="flex items-center gap-2 p-1 rounded-lg hover:bg-slate-800/60 transition cursor-pointer text-left focus:outline-none" title="Menú de usuario">
        <div class="w-7 h-7 rounded-full bg-slate-700 border border-slate-600 flex items-center justify-center text-xs font-semibold text-slate-200 shadow-sm">OP</div>
        
        <svg class="w-3 h-3 text-slate-400 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
    </button>
    
    </div>
    
        </div>
    </div>
    </header>
    <div id="mobileNav_comp-node" class="hidden md:hidden p-4 bg-slate-950 border-b border-slate-800 flex flex-col gap-2">
    <a href="inicio.html" class="flex items-center justify-between text-xs py-1.5 text-slate-200 hover:text-white border-b border-slate-900"><div class="flex items-center gap-2"><span>Inicio</span></div></a>
<a href="soluciones.html" class="flex items-center justify-between text-xs py-1.5 text-slate-200 hover:text-white border-b border-slate-900"><div class="flex items-center gap-2"><span>Soluciones</span></div></a>
<a href="contacto.html" class="flex items-center justify-between text-xs py-1.5 text-slate-200 hover:text-white border-b border-slate-900"><div class="flex items-center gap-2"><span>Contacto</span></div><span class="text-[9px] px-1.5 py-0.2 rounded bg-blue-500/20 text-blue-400 border border-blue-500/30 font-semibold">CTA</span></a>
<a href="login.html" class="flex items-center justify-between text-xs py-1.5 text-slate-200 hover:text-white border-b border-slate-900"><div class="flex items-center gap-2"><span>Login</span></div><span class="text-[9px] px-1.5 py-0.2 rounded bg-blue-500/20 text-blue-400 border border-blue-500/30 font-semibold">Acceso</span></a>

    </div>
    
    `
    };

    class OmniflowHeader extends HTMLElement {
        connectedCallback() {
            if (this.dataset.rendered === "true") return;
            this.dataset.rendered = "true";
            const id = this.getAttribute("id");
            const html = (id && templates[id]) ? templates[id] : (Object.values(templates)[0] || "");
            this.innerHTML = html;
            if (typeof window.reInterpolateDynamicTexts === 'function') {
                window.reInterpolateDynamicTexts(this);
            }
        }
    }

    if (!customElements.get('omniflow-header')) {
        customElements.define('omniflow-header', OmniflowHeader);
    }
})();
