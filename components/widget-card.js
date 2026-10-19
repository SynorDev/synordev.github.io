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
