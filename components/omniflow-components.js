/**
 * OmniFlow Consolidated Web Components Bundle
 */

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


/**
 * OmniFlow Web Component: <omniflow-interactive-floating-button>
 * Widget modular
 */
(function () {
    'use strict';
    const templates = {
        "whatsapp-support_4xptb": `
<div id="whatsapp-support_4xptb" class="fixed bottom-6 right-6 z-50 flex items-center" style="bottom: 192px;">
  <a href="https://wa.me/+573165778674?text=%C2%A1Hola%21%20Me%20gustar%C3%ADa%20automatizar%20procesos%20en%20mi%20empresa%20con%20Synor%20Cloud." target="_blank"  rel="noopener noreferrer" 
     class="group/fab relative flex items-center gap-2.5 px-4 py-3 rounded-full text-white shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300 transform hover:scale-105 active:scale-95 select-none font-sans no-underline"
     style="background-color: #25D366; backdrop-filter: blur(8px);"
     title="¡Chatea con nosotros!">
    
    
    <span class="absolute -inset-1 rounded-full animate-ping pointer-events-none" style="background-color: #25D366; opacity: 0.35;"></span>
    

    
    <span class="absolute -top-1.5 -right-1.5 flex h-5 min-w-[20px] px-1.5 items-center justify-center rounded-full bg-rose-500 text-[10px] font-bold text-white shadow-md border-2 border-slate-900 animate-bounce leading-none">
      1
    </span>
    

    <div class="w-6 h-6 flex items-center justify-center shrink-0">
      <svg class="w-6 h-6 fill-current text-white" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
    </div>

    
    <span class="text-xs font-bold tracking-wide whitespace-nowrap drop-shadow-sm pr-1">
      Asesoría en Vivo
    </span>
    
  </a>
</div>
`,
        "widget_interactive-floating-button_2znqxtj0": `
<div id="widget_interactive-floating-button_2znqxtj0" class="fixed bottom-6 right-6 z-50 flex items-center" style="bottom: 24px;">
  <a href="https://wa.me/+573165778674?text=%C2%A1Hola%21%20Quisiera%20asesor%C3%ADa%20sobre%20las%20soluciones%20de%20Synor%20Cloud." target="_blank"  rel="noopener noreferrer" 
     class="group/fab relative flex items-center gap-2.5 px-4 py-3 rounded-full text-white shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300 transform hover:scale-105 active:scale-95 select-none font-sans no-underline"
     style="background-color: #25D366; backdrop-filter: blur(8px);"
     title="¡Chatea con nosotros!">
    
    
    <span class="absolute -inset-1 rounded-full animate-ping pointer-events-none" style="background-color: #25D366; opacity: 0.35;"></span>
    

    
    <span class="absolute -top-1.5 -right-1.5 flex h-5 min-w-[20px] px-1.5 items-center justify-center rounded-full bg-rose-500 text-[10px] font-bold text-white shadow-md border-2 border-slate-900 animate-bounce leading-none">
      1
    </span>
    

    <div class="w-6 h-6 flex items-center justify-center shrink-0">
      <svg class="w-6 h-6 fill-current text-white" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
    </div>

    
    <span class="text-xs font-bold tracking-wide whitespace-nowrap drop-shadow-sm pr-1">
      Asesoría en Vivo
    </span>
    
  </a>
</div>
`,
        "widget_contact_floating_wa": `
<div id="widget_contact_floating_wa" class="fixed bottom-6 right-6 z-50 flex items-center" style="bottom: 24px;">
  <a href="https://wa.me/+573165778674?text=%C2%A1Hola%21%20Quisiera%20informaci%C3%B3n%20comercial%20sobre%20Synor%20Cloud." target="_blank"  rel="noopener noreferrer" 
     class="group/fab relative flex items-center gap-2.5 px-4 py-3 rounded-full text-white shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300 transform hover:scale-105 active:scale-95 select-none font-sans no-underline"
     style="background-color: #25D366; backdrop-filter: blur(8px);"
     title="¡Chatea con nosotros!">
    
    
    <span class="absolute -inset-1 rounded-full animate-ping pointer-events-none" style="background-color: #25D366; opacity: 0.35;"></span>
    

    
    <span class="absolute -top-1.5 -right-1.5 flex h-5 min-w-[20px] px-1.5 items-center justify-center rounded-full bg-rose-500 text-[10px] font-bold text-white shadow-md border-2 border-slate-900 animate-bounce leading-none">
      1
    </span>
    

    <div class="w-6 h-6 flex items-center justify-center shrink-0">
      <svg class="w-6 h-6 fill-current text-white" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
    </div>

    
    <span class="text-xs font-bold tracking-wide whitespace-nowrap drop-shadow-sm pr-1">
      Asesoría en Vivo
    </span>
    
  </a>
</div>
`
    };

    class OmniflowInteractiveFloatingButton extends HTMLElement {
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

    if (!customElements.get('omniflow-interactive-floating-button')) {
        customElements.define('omniflow-interactive-floating-button', OmniflowInteractiveFloatingButton);
    }
})();


/**
 * OmniFlow Web Component: <omniflow-marquee>
 * Marquesina interactiva de marcas (Logo Cloud)
 */
(function () {
    'use strict';
    const templates = {
        "widget_layout_marquee_5": `
<div id="widget_layout_marquee_5" data-component-type="marquee" class="relative w-full overflow-hidden py-4 my-2 " style="grid-column: 1 / -1;">
    <style>
        
@keyframes marquee-scroll-widget_layout_marquee_5 {
    0% { transform: translateX(0%); }
    100% { transform: translateX(-100%); }
}
@keyframes marquee-scroll-widget_layout_marquee_5-reverse {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(0%); }
}

        #widget_layout_marquee_5 .omniflow-marquee-track {
            display: flex;
            align-items: center;
            flex-shrink: 0;
            width: max-content;
            gap: 48px;
            padding-right: 48px;
            animation: marquee-scroll-widget_layout_marquee_5 35s linear infinite;
            will-change: transform;
        }
        
#widget_layout_marquee_5 .omniflow-marquee-wrapper:hover .omniflow-marquee-track {
    animation-play-state: paused !important;
}

        
#widget_layout_marquee_5 .omniflow-marquee-item img {
    filter: grayscale(100%) opacity(0.55);
    transition: filter 0.3s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease, transform 0.3s ease;
}
#widget_layout_marquee_5 .omniflow-marquee-item:hover img {
    filter: grayscale(0%) opacity(1) !important;
}

    </style>
    
    <div class="omniflow-marquee-wrapper relative w-full overflow-hidden flex items-center" style="
mask-image: linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%);
-webkit-mask-image: linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%);
">
        
    <div class="absolute left-0 top-0 bottom-0 w-16 md:w-28 bg-gradient-to-r from-canvas to-transparent pointer-events-none z-10"></div>
    <div class="absolute right-0 top-0 bottom-0 w-16 md:w-28 bg-gradient-to-l from-canvas to-transparent pointer-events-none z-10"></div>

        <div class="omniflow-marquee-track" aria-hidden="false">
            
        <a href="https://www.python.org" target="_blank" rel="noopener noreferrer" class="omniflow-marquee-item group/logo flex items-center justify-center shrink-0 transition-transform duration-300 hover:scale-105 cursor-pointer no-underline" title="Python">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python Logo" class="w-auto object-contain select-none pointer-events-none" style="height: 36px; max-width: 160px;" loading="lazy" />
        </a>

        <a href="https://fastapi.tiangolo.com" target="_blank" rel="noopener noreferrer" class="omniflow-marquee-item group/logo flex items-center justify-center shrink-0 transition-transform duration-300 hover:scale-105 cursor-pointer no-underline" title="FastAPI">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" alt="FastAPI Logo" class="w-auto object-contain select-none pointer-events-none" style="height: 36px; max-width: 160px;" loading="lazy" />
        </a>

        <a href="https://www.docker.com" target="_blank" rel="noopener noreferrer" class="omniflow-marquee-item group/logo flex items-center justify-center shrink-0 transition-transform duration-300 hover:scale-105 cursor-pointer no-underline" title="Docker">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt="Docker Logo" class="w-auto object-contain select-none pointer-events-none" style="height: 36px; max-width: 160px;" loading="lazy" />
        </a>

        <a href="https://www.postgresql.org" target="_blank" rel="noopener noreferrer" class="omniflow-marquee-item group/logo flex items-center justify-center shrink-0 transition-transform duration-300 hover:scale-105 cursor-pointer no-underline" title="PostgreSQL">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" alt="PostgreSQL Logo" class="w-auto object-contain select-none pointer-events-none" style="height: 36px; max-width: 160px;" loading="lazy" />
        </a>

        <a href="https://redis.io" target="_blank" rel="noopener noreferrer" class="omniflow-marquee-item group/logo flex items-center justify-center shrink-0 transition-transform duration-300 hover:scale-105 cursor-pointer no-underline" title="Redis">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" alt="Redis Logo" class="w-auto object-contain select-none pointer-events-none" style="height: 36px; max-width: 160px;" loading="lazy" />
        </a>

        <a href="https://www.typescriptlang.org" target="_blank" rel="noopener noreferrer" class="omniflow-marquee-item group/logo flex items-center justify-center shrink-0 transition-transform duration-300 hover:scale-105 cursor-pointer no-underline" title="TypeScript">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript Logo" class="w-auto object-contain select-none pointer-events-none" style="height: 36px; max-width: 160px;" loading="lazy" />
        </a>

        <a href="https://tailwindcss.com" target="_blank" rel="noopener noreferrer" class="omniflow-marquee-item group/logo flex items-center justify-center shrink-0 transition-transform duration-300 hover:scale-105 cursor-pointer no-underline" title="TailwindCSS">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" alt="TailwindCSS Logo" class="w-auto object-contain select-none pointer-events-none" style="height: 36px; max-width: 160px;" loading="lazy" />
        </a>

        <a href="https://nodejs.org" target="_blank" rel="noopener noreferrer" class="omniflow-marquee-item group/logo flex items-center justify-center shrink-0 transition-transform duration-300 hover:scale-105 cursor-pointer no-underline" title="Node.js">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js Logo" class="w-auto object-contain select-none pointer-events-none" style="height: 36px; max-width: 160px;" loading="lazy" />
        </a>

        </div>
        <div class="omniflow-marquee-track" aria-hidden="true">
            
        <a href="https://www.python.org" target="_blank" rel="noopener noreferrer" class="omniflow-marquee-item group/logo flex items-center justify-center shrink-0 transition-transform duration-300 hover:scale-105 cursor-pointer no-underline" title="Python">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python Logo" class="w-auto object-contain select-none pointer-events-none" style="height: 36px; max-width: 160px;" loading="lazy" />
        </a>

        <a href="https://fastapi.tiangolo.com" target="_blank" rel="noopener noreferrer" class="omniflow-marquee-item group/logo flex items-center justify-center shrink-0 transition-transform duration-300 hover:scale-105 cursor-pointer no-underline" title="FastAPI">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" alt="FastAPI Logo" class="w-auto object-contain select-none pointer-events-none" style="height: 36px; max-width: 160px;" loading="lazy" />
        </a>

        <a href="https://www.docker.com" target="_blank" rel="noopener noreferrer" class="omniflow-marquee-item group/logo flex items-center justify-center shrink-0 transition-transform duration-300 hover:scale-105 cursor-pointer no-underline" title="Docker">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt="Docker Logo" class="w-auto object-contain select-none pointer-events-none" style="height: 36px; max-width: 160px;" loading="lazy" />
        </a>

        <a href="https://www.postgresql.org" target="_blank" rel="noopener noreferrer" class="omniflow-marquee-item group/logo flex items-center justify-center shrink-0 transition-transform duration-300 hover:scale-105 cursor-pointer no-underline" title="PostgreSQL">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" alt="PostgreSQL Logo" class="w-auto object-contain select-none pointer-events-none" style="height: 36px; max-width: 160px;" loading="lazy" />
        </a>

        <a href="https://redis.io" target="_blank" rel="noopener noreferrer" class="omniflow-marquee-item group/logo flex items-center justify-center shrink-0 transition-transform duration-300 hover:scale-105 cursor-pointer no-underline" title="Redis">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" alt="Redis Logo" class="w-auto object-contain select-none pointer-events-none" style="height: 36px; max-width: 160px;" loading="lazy" />
        </a>

        <a href="https://www.typescriptlang.org" target="_blank" rel="noopener noreferrer" class="omniflow-marquee-item group/logo flex items-center justify-center shrink-0 transition-transform duration-300 hover:scale-105 cursor-pointer no-underline" title="TypeScript">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript Logo" class="w-auto object-contain select-none pointer-events-none" style="height: 36px; max-width: 160px;" loading="lazy" />
        </a>

        <a href="https://tailwindcss.com" target="_blank" rel="noopener noreferrer" class="omniflow-marquee-item group/logo flex items-center justify-center shrink-0 transition-transform duration-300 hover:scale-105 cursor-pointer no-underline" title="TailwindCSS">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" alt="TailwindCSS Logo" class="w-auto object-contain select-none pointer-events-none" style="height: 36px; max-width: 160px;" loading="lazy" />
        </a>

        <a href="https://nodejs.org" target="_blank" rel="noopener noreferrer" class="omniflow-marquee-item group/logo flex items-center justify-center shrink-0 transition-transform duration-300 hover:scale-105 cursor-pointer no-underline" title="Node.js">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js Logo" class="w-auto object-contain select-none pointer-events-none" style="height: 36px; max-width: 160px;" loading="lazy" />
        </a>

        </div>
    </div>
</div>
`
    };

    class OmniflowMarquee extends HTMLElement {
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

    if (!customElements.get('omniflow-marquee')) {
        customElements.define('omniflow-marquee', OmniflowMarquee);
    }
})();


/**
 * OmniFlow Web Component: <omniflow-container>
 * Contenedor delimitador multimedia
 */
(function () {
    'use strict';
    const templates = {
        "seccion-proyectos-grid_hprrv": `
<section id="seccion-proyectos-grid_hprrv" class="w-full  rounded-2xl overflow-hidden p-6 border border-border/40 shadow-none transparent  relative" style="width: 1094px; max-width: none; grid-column: 1 / -1;">
    
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch w-full">
                
<article id="card-proyecto-1_9uzkw" class="w-full md:flex-1 min-w-[200px] w-full h-full min-h-0 rounded-2xl overflow-hidden p-6 border border-border/40 shadow-none bg-surface/30  relative">
    
            <div class="flex flex-col items-stretch space-y-6 w-full">
                
<div id="badge-p1_0od1j" class="w-full flex justify-start text-left py-1">
  <span class="inline-flex items-center font-semibold rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 px-2.5 py-1 text-xs select-none">
    
    <span class="relative flex h-2 w-2 mr-1.5 shrink-0">
      <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-current opacity-75"></span>
      <span class="relative inline-flex rounded-full h-2 w-2 bg-current"></span>
    </span>

    
    <span class="truncate">Media & Broadcast</span>
  </span>
</div>


<div id="text-p1_nfwrw" class="w-full md:flex-1 min-w-[200px] py-2 overflow-hidden">
    <div class="max-w-3xl text-left mr-auto space-y-1 w-full overflow-hidden break-words" style="word-break: break-word; overflow-wrap: anywhere;">
        
        <h3 class="text-xl sm:text-2xl md:text-3xl font-bold text-body dark:text-white tracking-tight font-heading leading-tight break-words" style="word-break: break-word; overflow-wrap: anywhere;">Ingesta y Gestión Audiovisual</h3>
        <p class="text-sm text-body/75 dark:text-slate-400 mt-2.5 leading-relaxed break-words" style="word-break: break-word; overflow-wrap: anywhere;">Sistema automatizado para recibir, organizar y respaldar grandes volúmenes de material multimedia en la nube, dejándolo listo para su uso inmediato sin pérdida de archivos.</p>
        
        
    </div>
</div>

            </div>
            
</article>


<article id="card-proyecto-2_z1zz4" class="w-full md:flex-1 min-w-[200px] w-full h-full min-h-0 rounded-2xl overflow-hidden p-6 border border-border/40 shadow-none bg-surface/30  relative">
    
            <div class="flex flex-col items-stretch space-y-6 w-full">
                
<div id="badge-p2_0hq3k" class="w-full flex justify-start text-left py-1">
  <span class="inline-flex items-center font-semibold rounded-full bg-blue-500/15 text-blue-400 border border-blue-500/30 px-2.5 py-1 text-xs select-none">
    
    
    <span class="truncate">ERP Modular</span>
  </span>
</div>


<div id="text-p2_uo9pt" class="w-full md:flex-1 min-w-[200px] py-2 overflow-hidden">
    <div class="max-w-3xl text-left mr-auto space-y-1 w-full overflow-hidden break-words" style="word-break: break-word; overflow-wrap: anywhere;">
        
        <h3 class="text-xl sm:text-2xl md:text-3xl font-bold text-body dark:text-white tracking-tight font-heading leading-tight break-words" style="word-break: break-word; overflow-wrap: anywhere;">Gestión Operativa y Personal</h3>
        <p class="text-sm text-body/75 dark:text-slate-400 mt-2.5 leading-relaxed break-words" style="word-break: break-word; overflow-wrap: anywhere;">Plataforma centralizada para controlar personal, turnos e inventarios en tiempo real. Diseñada para incorporar nuevas herramientas según la demanda futura de tu operación.</p>
        
        
    </div>
</div>

            </div>
            
</article>


<article id="card-proyecto-3_ovvl1" class="w-full md:flex-1 min-w-[200px] w-full h-full min-h-0 rounded-2xl overflow-hidden p-6 border border-border/40 shadow-none bg-surface/30  relative">
    
            <div class="flex flex-col items-stretch space-y-6 w-full">
                
<div id="badge-p3_wn8r6" class="w-full flex justify-start text-left py-1">
  <span class="inline-flex items-center font-semibold rounded-full bg-purple-500/15 text-purple-400 border border-purple-500/30 px-2.5 py-1 text-xs select-none">
    
    <span class="relative flex h-2 w-2 mr-1.5 shrink-0">
      <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-current opacity-75"></span>
      <span class="relative inline-flex rounded-full h-2 w-2 bg-current"></span>
    </span>

    
    <span class="truncate">Cloud Streaming</span>
  </span>
</div>


<div id="text-p3_rilp3" class="w-full md:flex-1 min-w-[200px] py-2 overflow-hidden">
    <div class="max-w-3xl text-left mr-auto space-y-1 w-full overflow-hidden break-words" style="word-break: break-word; overflow-wrap: anywhere;">
        
        <h3 class="text-xl sm:text-2xl md:text-3xl font-bold text-body dark:text-white tracking-tight font-heading leading-tight break-words" style="word-break: break-word; overflow-wrap: anywhere;">Switcher Cloud 24/7</h3>
        <p class="text-sm text-body/75 dark:text-slate-400 mt-2.5 leading-relaxed break-words" style="word-break: break-word; overflow-wrap: anywhere;">Centro de control en la nube para transmitir en vivo continuo hacia YouTube, Twitch o Kick, permitiendo convertir cualquier celular en una cámara remota inalámbrica.</p>
        
        
    </div>
</div>

            </div>
            
</article>

            </div>
            
</section>
`,
        "seccion-modular-explicacion_pog0j": `
<section id="seccion-modular-explicacion_pog0j" class="w-full  rounded-3xl overflow-hidden p-8 border border-border/40 shadow-none bg-surface/30  relative" style="width: 1085px; max-width: none; grid-column: 1 / -1;">
    
            <div class="flex flex-col items-stretch space-y-6 w-full">
                
<div id="text-modular-title_h6v8k" class="w-full md:flex-1 min-w-[200px] py-2 overflow-hidden">
    <div class="max-w-4xl text-center mx-auto space-y-1 w-full overflow-hidden break-words" style="word-break: break-word; overflow-wrap: anywhere;">
        <span class="inline-block text-xs font-mono font-bold uppercase tracking-wider text-primary dark:text-cyan-400 mb-1.5 break-words" style="word-break: break-word; overflow-wrap: anywhere;">ARQUITECTURA FLEXIBLE</span>
        <h2 class="text-2xl sm:text-3xl md:text-4xl font-extrabold text-body dark:text-white tracking-tight font-heading leading-tight break-words" style="word-break: break-word; overflow-wrap: anywhere;">Soluciones que Crecen al Ritmo de tu Empresa</h2>
        <p class="text-sm text-body/75 dark:text-slate-400 mt-2.5 leading-relaxed break-words" style="word-break: break-word; overflow-wrap: anywhere;">En Synor Cloud sabemos que ninguna empresa funciona igual a otra y que tus necesidades cambian con el tiempo. Diseñamos sistemas modulares: piezas de construcción que se adaptan, conectan y amplían a medida que tu negocio evoluciona.</p>
        
        
    </div>
</div>

            </div>
            
</section>
`,
        "widget_layout-container-div_wop5prw4": `
<section id="widget_layout-container-div_wop5prw4" class="max-w-5xl  rounded-3xl overflow-hidden p-8 border border-border/40 shadow-none bg-slate-900/60  relative" style="grid-column: 1 / -1;">
    
            <div class="flex flex-col items-stretch space-y-6 w-full">
                
<div id="widget_typography-text-block_jvca881l" class="w-full md:flex-1 min-w-[200px] py-2 overflow-hidden">
    <div class="max-w-3xl text-center mx-auto space-y-1 w-full overflow-hidden break-words" style="word-break: break-word; overflow-wrap: anywhere;">
        <span class="inline-block text-xs font-mono font-bold uppercase tracking-wider text-primary dark:text-cyan-400 mb-1.5 break-words" style="word-break: break-word; overflow-wrap: anywhere;">PORTAFOLIO DE SOLUCIONES</span>
        <h1 class="text-3xl sm:text-4xl md:text-5xl font-extrabold text-body dark:text-white tracking-tight font-heading leading-tight break-words" style="word-break: break-word; overflow-wrap: anywhere;">Elige la Tecnología que tu Empresa Necesita</h1>
        <p class="text-sm text-body/75 dark:text-slate-400 mt-2.5 leading-relaxed break-words" style="word-break: break-word; overflow-wrap: anywhere;">Nuestros sistemas están construidos bajo una arquitectura modular y escalable. Selecciona una categoría para conocer a fondo cómo integramos y automatizamos tus flujos de trabajo.</p>
        
        
    </div>
</div>

            </div>
            
</section>
`,
        "widget_layout-container-div_mjme5j60": `
<section id="widget_layout-container-div_mjme5j60" class="max-w-6xl  rounded-2xl overflow-hidden p-6 border border-border/40 shadow-none transparent  relative" style="grid-column: 1 / -1;">
    
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch w-full">
                
<article id="widget_layout-container-div_ahva2990" class="w-full md:flex-1 min-w-[200px] w-full h-full min-h-0 rounded-2xl overflow-hidden p-6 border border-border/40 shadow-none bg-surface/30  relative">
    
            <div class="flex flex-col items-stretch space-y-6 w-full">
                
<div id="widget_ui-badge_tukkybrf" class="w-full flex justify-start text-left py-1">
  <span class="inline-flex items-center font-semibold rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 px-2.5 py-1 text-xs select-none">
    
    <span class="relative flex h-2 w-2 mr-1.5 shrink-0">
      <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-current opacity-75"></span>
      <span class="relative inline-flex rounded-full h-2 w-2 bg-current"></span>
    </span>

    
    <span class="truncate">Media & Broadcast</span>
  </span>
</div>


<div id="widget_typography-text-block_eggm6k1k" class="w-full md:flex-1 min-w-[200px] py-2 overflow-hidden">
    <div class="max-w-3xl text-left mr-auto space-y-1 w-full overflow-hidden break-words" style="word-break: break-word; overflow-wrap: anywhere;">
        
        <h3 class="text-xl sm:text-2xl md:text-3xl font-bold text-body dark:text-white tracking-tight font-heading leading-tight break-words" style="word-break: break-word; overflow-wrap: anywhere;">Soluciones Broadcast (Flame & InTake)</h3>
        <p class="text-sm text-body/75 dark:text-slate-400 mt-2.5 leading-relaxed break-words" style="word-break: break-word; overflow-wrap: anywhere;">Automatización de ingesta audiovisual, control de calidad (QC) mediante análisis de luma/audio, renderizado acelerado por GPU NVENC y transmisión continua 24/7.</p>
        
            <div class="pt-4 flex justify-start">
                <a href="brodcast.html" class="inline-flex items-center justify-center transition-all duration-200 cursor-pointer bg-emerald-500 hover:bg-emerald-600 text-black font-bold shadow-lg shadow-emerald-500/20 px-5 py-2.5 text-sm rounded-xl gap-2 tracking-wide">
                    <span>Ver Solución Broadcast →</span>
                    <span class="font-mono text-xs">></span>
                </a>
            </div>
            
        
    </div>
</div>

            </div>
            
</article>


<article id="widget_layout-container-div_5d0qwsty" class="w-full md:flex-1 min-w-[200px] w-full h-full min-h-0 rounded-2xl overflow-hidden p-6 border border-border/40 shadow-none bg-surface/30  relative">
    
            <div class="flex flex-col items-stretch space-y-6 w-full">
                
<div id="widget_ui-badge_g6yyyr5w" class="w-full flex justify-start text-left py-1">
  <span class="inline-flex items-center font-semibold rounded-full bg-blue-500/15 text-blue-400 border border-blue-500/30 px-2.5 py-1 text-xs select-none">
    
    
    <span class="truncate">ERP & Operaciones</span>
  </span>
</div>


<div id="widget_typography-text-block_ai8w0eoc" class="w-full md:flex-1 min-w-[200px] py-2 overflow-hidden">
    <div class="max-w-3xl text-left mr-auto space-y-1 w-full overflow-hidden break-words" style="word-break: break-word; overflow-wrap: anywhere;">
        
        <h3 class="text-xl sm:text-2xl md:text-3xl font-bold text-body dark:text-white tracking-tight font-heading leading-tight break-words" style="word-break: break-word; overflow-wrap: anywhere;">Gestión Operativa (MediaHub)</h3>
        <p class="text-sm text-body/75 dark:text-slate-400 mt-2.5 leading-relaxed break-words" style="word-break: break-word; overflow-wrap: anywhere;">Plataforma centralizada para control de personal, turnos, calendarios con permisos avanzados, inventario técnico de equipos y reportes dinámicos configurables por JSON.</p>
        
            <div class="pt-4 flex justify-start">
                <a href="contacto.html" class="inline-flex items-center justify-center transition-all duration-200 cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-lg shadow-blue-500/20 px-5 py-2.5 text-sm rounded-xl gap-2 tracking-wide">
                    <span>Ver Gestión y Control →</span>
                    <span class="font-mono text-xs">></span>
                </a>
            </div>
            
        
    </div>
</div>

            </div>
            
</article>


<article id="widget_layout-container-div_rzpwp53g" class="w-full md:flex-1 min-w-[200px] w-full h-full min-h-0 rounded-2xl overflow-hidden p-6 border border-border/40 shadow-none bg-surface/30  relative">
    
            <div class="flex flex-col items-stretch space-y-6 w-full">
                
<div id="widget_ui-badge_xc1heplq" class="w-full flex justify-start text-left py-1">
  <span class="inline-flex items-center font-semibold rounded-full bg-purple-500/15 text-purple-400 border border-purple-500/30 px-2.5 py-1 text-xs select-none">
    
    <span class="relative flex h-2 w-2 mr-1.5 shrink-0">
      <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-current opacity-75"></span>
      <span class="relative inline-flex rounded-full h-2 w-2 bg-current"></span>
    </span>

    
    <span class="truncate">Cloud Streaming</span>
  </span>
</div>


<div id="widget_typography-text-block_ns6vd00x" class="w-full md:flex-1 min-w-[200px] py-2 overflow-hidden">
    <div class="max-w-3xl text-left mr-auto space-y-1 w-full overflow-hidden break-words" style="word-break: break-word; overflow-wrap: anywhere;">
        
        <h3 class="text-xl sm:text-2xl md:text-3xl font-bold text-body dark:text-white tracking-tight font-heading leading-tight break-words" style="word-break: break-word; overflow-wrap: anywhere;">Switcher Cloud y Cámaras Móviles</h3>
        <p class="text-sm text-body/75 dark:text-slate-400 mt-2.5 leading-relaxed break-words" style="word-break: break-word; overflow-wrap: anywhere;">Ecosistema de transmisión en vivo multidispositivo. Permite transformar cualquier smartphone en una cámara web HD remota y transmitir de forma continua a YouTube, Twitch o Kick.</p>
        
            <div class="pt-4 flex justify-start">
                <a href="contacto.html" class="inline-flex items-center justify-center transition-all duration-200 cursor-pointer bg-purple-600 hover:bg-purple-700 text-white font-semibold shadow-lg shadow-purple-500/20 px-5 py-2.5 text-sm rounded-xl gap-2 tracking-wide">
                    <span>Ver Streaming Cloud →</span>
                    <span class="font-mono text-xs">></span>
                </a>
            </div>
            
        
    </div>
</div>

            </div>
            
</article>

            </div>
            
</section>
`,
        "widget_contact_header_container": `
<section id="widget_contact_header_container" class="max-w-4xl  rounded-3xl overflow-hidden p-10 border border-slate-800/80 shadow-2xl backdrop-blur-md shadow-none bg-slate-900/60  relative" style="grid-column: 1 / -1;">
    
            <div class="flex flex-col items-stretch space-y-6 w-full">
                
<div id="widget_contact_intro_text" class="w-full md:flex-1 min-w-[200px] py-2 overflow-hidden">
    <div class="max-w-2xl text-center mx-auto space-y-1 w-full overflow-hidden break-words" style="word-break: break-word; overflow-wrap: anywhere;">
        <span class="inline-block text-xs font-mono font-bold uppercase tracking-wider text-primary dark:text-cyan-400 mb-1.5 break-words" style="word-break: break-word; overflow-wrap: anywhere;">CANAL DE ATENCIÓN DIRECTA</span>
        <h1 class="text-3xl sm:text-4xl md:text-5xl font-extrabold text-body dark:text-white tracking-tight font-heading leading-tight break-words" style="word-break: break-word; overflow-wrap: anywhere;">Hablemos de tus Desafíos Tecnológicos</h1>
        <p class="text-sm text-body/75 dark:text-slate-400 mt-2.5 leading-relaxed break-words" style="word-break: break-word; overflow-wrap: anywhere;">Nuestro equipo de ingeniería de soluciones está listo para responder tus dudas técnicas, cotizar integraciones a medida o brindarte una demostración personalizada.</p>
        
        
    </div>
</div>

            </div>
            
</section>
`,
        "widget_contact_cards_container": `
<section id="widget_contact_cards_container" class="max-w-4xl  rounded-2xl overflow-hidden p-6 border border-border/40 shadow-none transparent  relative" style="grid-column: 1 / -1;">
    
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch w-full">
                
<article id="widget_contact_card_chat" class="w-full md:flex-1 min-w-[200px] w-full h-full min-h-0 rounded-2xl overflow-hidden p-6 border border-slate-800 hover:border-emerald-500/40 transition shadow-none bg-slate-900/60  relative">
    
            <div class="flex flex-col items-stretch space-y-6 w-full">
                
<div id="widget_badge_chat" class="w-full flex justify-start text-left py-1">
  <span class="inline-flex items-center font-semibold rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 px-2.5 py-1 text-xs select-none">
    
    <span class="relative flex h-2 w-2 mr-1.5 shrink-0">
      <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-current opacity-75"></span>
      <span class="relative inline-flex rounded-full h-2 w-2 bg-current"></span>
    </span>

    
    <span class="truncate">Respuesta Rápida</span>
  </span>
</div>


<div id="widget_text_chat" class="w-full md:flex-1 min-w-[200px] py-2 overflow-hidden">
    <div class="max-w-3xl text-left mr-auto space-y-1 w-full overflow-hidden break-words" style="word-break: break-word; overflow-wrap: anywhere;">
        
        <h3 class="text-xl sm:text-2xl md:text-3xl font-bold text-body dark:text-white tracking-tight font-heading leading-tight break-words" style="word-break: break-word; overflow-wrap: anywhere;">Chat en Vivo WhatsApp</h3>
        <p class="text-sm text-body/75 dark:text-slate-400 mt-2.5 leading-relaxed break-words" style="word-break: break-word; overflow-wrap: anywhere;">Comunícate directamente con un especialista técnico en tiempo real para consultas inmediatas.</p>
        
            <div class="pt-4 flex justify-start">
                <a href="https://wa.me/573165778674" class="inline-flex items-center justify-center transition-all duration-200 cursor-pointer bg-emerald-500 hover:bg-emerald-600 text-black font-bold shadow-lg shadow-emerald-500/20 px-5 py-2.5 text-sm rounded-xl gap-2 tracking-wide">
                    <span>Abrir WhatsApp (+57 316 577 8674) →</span>
                    <span class="font-mono text-xs">></span>
                </a>
            </div>
            
        
    </div>
</div>

            </div>
            
</article>


<article id="widget_contact_card_email" class="w-full md:flex-1 min-w-[200px] w-full h-full min-h-0 rounded-2xl overflow-hidden p-6 border border-slate-800 hover:border-blue-500/40 transition shadow-none bg-slate-900/60  relative">
    
            <div class="flex flex-col items-stretch space-y-6 w-full">
                
<div id="widget_badge_email" class="w-full flex justify-start text-left py-1">
  <span class="inline-flex items-center font-semibold rounded-full bg-blue-500/15 text-blue-400 border border-blue-500/30 px-2.5 py-1 text-xs select-none">
    
    
    <span class="truncate">Proyectos & Licitaciones</span>
  </span>
</div>


<div id="widget_text_email" class="w-full md:flex-1 min-w-[200px] py-2 overflow-hidden">
    <div class="max-w-3xl text-left mr-auto space-y-1 w-full overflow-hidden break-words" style="word-break: break-word; overflow-wrap: anywhere;">
        
        <h3 class="text-xl sm:text-2xl md:text-3xl font-bold text-body dark:text-white tracking-tight font-heading leading-tight break-words" style="word-break: break-word; overflow-wrap: anywhere;">Correo Corporativo</h3>
        <p class="text-sm text-body/75 dark:text-slate-400 mt-2.5 leading-relaxed break-words" style="word-break: break-word; overflow-wrap: anywhere;">Envíanos los requerimientos detallados de tu proyecto para recibir una propuesta formal y SLA garantizado.</p>
        
            <div class="pt-4 flex justify-start">
                <a href="mailto:soporte@synorcloud.com" class="inline-flex items-center justify-center transition-all duration-200 cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-lg shadow-blue-500/20 px-5 py-2.5 text-sm rounded-xl gap-2 tracking-wide">
                    <span>soporte@synorcloud.com →</span>
                    <span class="font-mono text-xs">></span>
                </a>
            </div>
            
        
    </div>
</div>

            </div>
            
</article>

            </div>
            
</section>
`
    };

    class OmniflowContainer extends HTMLElement {
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

    if (!customElements.get('omniflow-container')) {
        customElements.define('omniflow-container', OmniflowContainer);
    }
})();


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


/**
 * OmniFlow Web Component: <omniflow-widget-card>
 * Widget modular
 */
(function () {
    'use strict';
    const templates = {
        "w_synor_login_box": `<div id="w_synor_login_box" class="w-full">

<div id="w_synor_login_hero" class="w-full rounded-token border border-border bg-surface text-body p-6 shadow-lg space-y-3" style="grid-column: span 1;">
    <div class="flex items-center justify-between border-b border-border/60 pb-2">
        <h3 class="text-base font-bold text-body">Acceso Seguro</h3>
        <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-primary/10 text-primary border border-primary/20">Plugin</span>
    </div>
    <p class="text-sm text-body/80 leading-relaxed">Servidor Cloud Gamma • Cluster Frankfurt</p>
    
    
</div>

</div>`
    };

    class OmniflowWidgetCard extends HTMLElement {
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

    if (!customElements.get('omniflow-widget-card')) {
        customElements.define('omniflow-widget-card', OmniflowWidgetCard);
    }
})();
