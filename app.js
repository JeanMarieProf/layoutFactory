// app.js
class Layout {
    constructor(data) {
        this.id = data.id;
        this.name = data.name;
        this.description = data.description;
        this.usage = data.usage;
        this.technique = data.technique;
        this.advantage = data.advantage;
        this.disadvantage = data.disadvantage;
        this.tags = data.tags;
        this.visualization = data.visualization;
    }

    generateCard() {
        return `
            <div class="layout-card" data-id="${this.id}">
                <div class="layout-preview">
                    <span class="layout-id">#${this.id}</span>
                    <div class="preview-mini">
                        ${this.generateVisualPreview()}
                    </div>
                </div>
                <div class="layout-info">
                    <h3 class="layout-name">${this.name}</h3>
                    <p class="layout-description">${this.description}</p>
                    <div class="layout-tags">
                        ${this.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                    </div>
                </div>
            </div>
        `;
    }

    generateDetailView() {
        return `
            <div class="detail-header">
                <h2 class="detail-title">${this.name}</h2>
                <p class="detail-description">${this.description}</p>
                <div class="detail-tags">
                    ${this.tags.map(tag => `<span class="detail-tag">${tag}</span>`).join('')}
                </div>
            </div>
            
            <div class="visual-preview">
                ${this.generateVisualPreview()}
            </div>
            
            <div class="detail-section">
                <h3>Usage</h3>
                <p>${this.usage}</p>
            </div>
            
            <div class="detail-section">
                <h3>Technique</h3>
                <p>${this.technique}</p>
            </div>
            
            <div class="detail-section">
                <h3>Avantage</h3>
                <p>${this.advantage}</p>
            </div>
            
            <div class="detail-section">
                <h3>Inconvénient</h3>
                <p>${this.disadvantage}</p>
            </div>
        `;
    }

    generateVisualPreview() {
        // Implémentation identique à la version précédente
        // avec switch sur this.visualization au lieu de this.id
        switch(this.visualization) {
            case 'single-column':
                return `<div class="preview-container single-column">...</div>`;
            // ... autres visualizations
            default:
                return `<div>Aperçu du layout ${this.id}</div>`;
        }
    }
}

class LayoutManager {
    constructor() {
        this.layouts = [];
        this.filteredLayouts = [];
        this.currentPage = 1;
        this.init();
    }

    async init() {
        await this.loadLayouts();
        this.setupEventListeners();
        this.renderLayouts();
    }

    async loadLayouts() {
        try {
            const response = await fetch('layouts.json');
            const data = await response.json();
            this.layouts = data.layouts.map(layoutData => new Layout(layoutData));
            this.filteredLayouts = [...this.layouts];
        } catch (error) {
            console.error('Erreur de chargement des layouts:', error);
        }
    }

    setupEventListeners() {
        // Recherche
        document.getElementById('search').addEventListener('input', (e) => {
            this.filterLayouts(e.target.value);
        });

        // Pagination
        document.querySelectorAll('.page-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.showPage(parseInt(e.target.dataset.page));
            });
        });

        // Palettes
        document.querySelectorAll('.palette-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.changePalette(e.target.dataset.palette);
            });
        });

        // Fermeture détail
        document.getElementById('close-detail').addEventListener('click', () => {
            this.hideDetail();
        });
    }

    filterLayouts(searchTerm) {
        const term = searchTerm.toLowerCase();
        this.filteredLayouts = this.layouts.filter(layout => 
            layout.name.toLowerCase().includes(term) ||
            layout.description.toLowerCase().includes(term) ||
            layout.tags.some(tag => tag.toLowerCase().includes(term))
        );
        this.renderLayouts();
    }

    showPage(pageNumber) {
        this.currentPage = pageNumber;
        
        // Mise à jour des boutons
        document.querySelectorAll('.page-btn').forEach(btn => {
            btn.classList.toggle('active', parseInt(btn.dataset.page) === pageNumber);
        });
        
        // Affichage des pages
        document.querySelectorAll('.page').forEach(page => {
            page.classList.toggle('active', page.id === `page-${pageNumber}`);
        });
        
        this.renderLayouts();
    }

    changePalette(palette) {
        document.body.className = palette;
        document.querySelectorAll('.palette-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.palette === palette);
        });
    }

    renderLayouts() {
        const container1 = document.getElementById('layouts-container-1');
        const container2 = document.getElementById('layouts-container-2');
        
        container1.innerHTML = '';
        container2.innerHTML = '';

        this.filteredLayouts.forEach(layout => {
            const container = layout.id <= 12 ? container1 : container2;
            container.innerHTML += layout.generateCard();
        });

        // Ajout des écouteurs pour les cartes
        document.querySelectorAll('.layout-card').forEach(card => {
            card.addEventListener('click', (e) => {
                const layoutId = parseInt(card.dataset.id);
                this.showDetail(layoutId);
            });
        });
    }

    showDetail(layoutId) {
        const layout = this.layouts.find(l => l.id === layoutId);
        if (layout) {
            document.getElementById('detail-content').innerHTML = layout.generateDetailView();
            document.getElementById('layout-detail').classList.add('active');
        }
    }

    hideDetail() {
        document.getElementById('layout-detail').classList.remove('active');
    }
}

// Initialisation
document.addEventListener('DOMContentLoaded', () => {
    new LayoutManager();
});