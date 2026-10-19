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
