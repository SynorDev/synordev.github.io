/**
 * OmniFlow Web Component: <omniflow-hero-banner>
 * Banner Hero destacado
 */
(function () {
    'use strict';
    const templates = {
        "widget_layout_hero_banner_6": `
<div id="widget_layout_hero_banner_6" class="relative rounded-none overflow-hidden shadow-xl min-h-[320px] flex flex-col justify-center p-12 " style="grid-column: 1 / -1; width: 100%;">
    <img src="assets/gemini_generated_image_fqm6xafqm6xafqm6_asset_.webp" alt="Hero Background" class="absolute inset-0 w-full h-full object-cover z-0" />
    <div class="absolute inset-0 bg-black z-0 pointer-events-none" style="opacity: 0.85;"></div>
    <div class="relative z-10 w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8 w-full text-left" style="display: grid; grid-template-columns: 4fr 6fr; gap: 2rem; align-items: center;">
        
<div id="widget_typography-text-block_43uq7kjl" class="w-full md:flex-1 min-w-[200px] py-2 overflow-hidden">
    <div class="max-w-3xl text-left mr-auto space-y-1 w-full overflow-hidden break-words" style="word-break: break-word; overflow-wrap: anywhere;">
        <span class="inline-block text-xs font-mono font-bold uppercase tracking-wider text-primary dark:text-cyan-400 mb-1.5 break-words" style="word-break: break-word; overflow-wrap: anywhere;">INTEGRACIÓN & DESARROLLO MODULAR</span>
        <h1 class="text-3xl sm:text-4xl md:text-5xl font-extrabold text-body dark:text-white tracking-tight font-heading leading-tight break-words" style="word-break: break-word; overflow-wrap: anywhere;">Software e Integraciones a Medida que Crecen con tu Empresa</h1>
        <p class="text-base text-body/75 dark:text-slate-400 mt-2.5 leading-relaxed break-words" style="word-break: break-word; overflow-wrap: anywhere;">Conectamos tus herramientas, automatizamos las tareas repetitivas y creamos soluciones que se adaptan a tus necesidades de hoy y de mañana. Sin sistemas rígidos, sin pagar por lo que no usas.</p>
        
            <div class="pt-4 flex justify-start">
                <a href="contacto.html" class="inline-flex items-center justify-center transition-all duration-200 cursor-pointer bg-emerald-500 hover:bg-emerald-600 text-black font-bold shadow-lg shadow-emerald-500/20 px-5 py-2.5 text-sm rounded-xl gap-2 tracking-wide">
                    <span>Agendar una charla sin compromiso →</span>
                    <span class="font-mono text-xs">></span>
                </a>
            </div>
            
        
    </div>
</div>

    </div>
</div>
`
    };

    class OmniflowHeroBanner extends HTMLElement {
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

    if (!customElements.get('omniflow-hero-banner')) {
        customElements.define('omniflow-hero-banner', OmniflowHeroBanner);
    }
})();
