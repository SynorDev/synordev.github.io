/**
 * OmniFlow Web Component: <omniflow-footer>
 * Pie de página institucional y enlaces
 */
(function () {
    'use strict';
    const templates = {
        "site-footer": `<footer id="comp-node" class="w-full mt-auto transition-colors border-t border-border bg-surface border-border text-body py-8 px-6" style=" ">
    <div class="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div class="flex flex-col items-start text-left flex-1 w-full md:w-auto">
<div class="flex items-center inline-block" style="margin-bottom: 0px;"><img src="assets/logo_synor_logo_asset_.png" alt="Logo synor" class="object-contain transition-transform hover:opacity-95" style="width: 110px; height: 80px;" /></div>
<p class="leading-relaxed text-[11px] text-secondary text-slate-400 font-normal" style=" margin-bottom: 2px;">© 2026 OmniFlow Technologies Inc. Todos los derechos reservados.</p>
</div>
        <div class="flex flex-col items-center text-center flex-1 w-full md:w-auto">
<a href="/inicio" target="_self" class="inline-block transition-colors hover:text-white hover:underline text-[11px] text-secondary text-slate-400 font-normal" style=" margin-left: 8px; margin-right: 8px; margin-bottom: 4px;">Inicio</a>
<a href="/soluciones" target="_self" class="inline-block transition-colors hover:text-white hover:underline text-[11px] text-secondary text-slate-400 font-normal" style=" margin-left: 8px; margin-right: 8px; margin-bottom: 4px;">Soluciones</a>
<a href="/contacto" target="_self" class="inline-block transition-colors hover:text-white hover:underline text-[11px] text-secondary text-slate-400 font-normal" style=" margin-left: 8px; margin-right: 8px; margin-bottom: 4px;">Contacto</a>
</div>
        <div class="flex flex-col items-end text-right flex-1 w-full md:w-auto">
<div class="inline-flex items-center justify-center shrink-0 text-primary text-blue-400" style="width: 18px; height: 18px;  margin-left: 4px; margin-right: 4px; margin-bottom: 4px;"><svg class="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg></div>
<p class="leading-relaxed text-[11px] text-secondary text-slate-400 font-bold" style=" margin-bottom: 4px;">Synor Broadcast v3.0 — Verificado</p>
</div>
    </div>
</footer>`
    };

    class OmniflowFooter extends HTMLElement {
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

    if (!customElements.get('omniflow-footer')) {
        customElements.define('omniflow-footer', OmniflowFooter);
    }
})();
