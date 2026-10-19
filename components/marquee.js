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
