// ========================================
// 40 INSTANCES DE LAYOUT
// ========================================

// Layout 1: Colonne unique
const layout1 = new Layout(
    `.single-column { display: flex; flex-direction: column; gap: 8px; padding: 10px; height: 100%; } .single-column .header { height: 20px; background-color: var(--primary-color); border-radius: 2px; } .single-column .content { flex: 1; background-color: var(--secondary-color); border-radius: 2px; } .single-column .media { height: 60px; background-color: #8ca8d0; border-radius: 2px; }`, {
        "id": 1,
        "name": "Colonne unique",
        "description": "Un seul flux vertical de contenu (titre → texte → médias).",
        "usage": "Articles de blog, pages de documentation, pages marketing mobiles-first.",
        "technique": "max-width centré, padding, flow normal. Très simple à rendre accessible.",
        "advantage": "Lisibilité optimale sur mobile.",
        "disadvantage": "Peu d'options latérales pour navigation/CTA.",
        "tags": [
                "Simple",
                "Mobile-first",
                "Accessible"
        ]
    },
    `<div class="preview-container single-column"> <div class="header"></div> <div class="content"></div> <div class="media"></div> </div>`
);

// Layout 2: Sidebar fixe
const layout2 = new Layout(
    `.sidebar-layout { display: flex; height: 100%; } .sidebar-layout .sidebar { width: 30%; background-color: var(--primary-color); padding: 10px; } .sidebar-layout .sidebar-item { height: 12px; background-color: rgba(255, 255, 255, 0.3); margin-bottom: 8px; border-radius: 2px; } .sidebar-layout .main-content { flex: 1; background-color: var(--secondary-color); padding: 10px; } .sidebar-layout .content-block { height: 15px; background-color: rgba(255, 255, 255, 0.3); margin-bottom: 8px; border-radius: 2px; }`, {
        "id": 2,
        "name": "Sidebar fixe",
        "description": "Contenu principal + barre latérale (navigation, filtres, widgets).",
        "usage": "Dashboards, panels d'administration, sites e-commerce avec filtres.",
        "technique": "CSS Grid / Flexbox ou position: sticky pour sidebar. Cacher ou basculer en off-canvas sur mobile.",
        "advantage": "Navigation facile et accès rapide aux fonctionnalités.",
        "disadvantage": "Peut réduire l'espace de contenu principal sur petits écrans.",
        "tags": [
                "Navigation",
                "Dashboard",
                "Responsive"
        ]
    },
    `<div class="preview-container sidebar-layout"> <div class="sidebar"> <div class="sidebar-item"></div> <div class="sidebar-item"></div> <div class="sidebar-item"></div> </div> <div class="main-content"> <div class="content-block"></div> <div class="content-block"></div> <div class="content-block"></div> </div> </div>`
);

// Layout 3: Trois colonnes
const layout3 = new Layout(
    `.three-columns { display: flex; height: 100%; } .three-columns .left { width: 20%; background-color: var(--primary-color); padding: 10px; } .three-columns .center { width: 60%; background-color: var(--secondary-color); padding: 10px; } .three-columns .right { width: 20%; background-color: #8ca8d0; padding: 10px; } .three-columns .menu-item, .three-columns .content-item, .three-columns .tool-item { height: 12px; background-color: rgba(255, 255, 255, 0.3); margin-bottom: 8px; border-radius: 2px; }`, {
        "id": 3,
        "name": "Trois colonnes",
        "description": "Menu / contenu principal / outils secondaires.",
        "usage": "IDE web, panneaux d'édition, portails d'info complexes.",
        "technique": "CSS Grid à 3 colonnes. Réduire à 1 ou 2 colonnes selon breakpoint.",
        "advantage": "Beaucoup d'information accessible simultanément.",
        "disadvantage": "Complexe à gérer sur petits écrans.",
        "tags": [
                "Complexe",
                "Productivité",
                "Multi-panneaux"
        ]
    },
    `<div class="preview-container three-columns"> <div class="left"> <div class="menu-item"></div> <div class="menu-item"></div> <div class="menu-item"></div> </div> <div class="center"> <div class="content-item"></div> <div class="content-item"></div> <div class="content-item"></div> </div> <div class="right"> <div class="tool-item"></div> <div class="tool-item"></div> </div> </div>`
);

// Layout 4: Layout en grille de cartes
const layout4 = new Layout(
    `.card-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 8px; padding: 10px; height: 100%; } .card-grid .card { background-color: var(--primary-color); border-radius: 4px; padding: 8px; } .card-grid .card-header { height: 10px; background-color: rgba(255, 255, 255, 0.3); margin-bottom: 6px; border-radius: 2px; } .card-grid .card-content { height: 20px; background-color: rgba(255, 255, 255, 0.2); border-radius: 2px; }`, {
        "id": 4,
        "name": "Layout en grille de cartes",
        "description": "Série de cartes (produits, posts, ressources) organisées en grille.",
        "usage": "Catalogue, galerie, blog index.",
        "technique": "grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)) pour responsive; gap pour espacement.",
        "advantage": "Présentation visuelle attractive et organisée.",
        "disadvantage": "Peut nécessiter beaucoup d'espace vertical.",
        "tags": [
                "Visuel",
                "Catalogue",
                "Responsive"
        ]
    },
    `<div class="preview-container card-grid"> <div class="card"> <div class="card-header"></div> <div class="card-content"></div> </div> <div class="card"> <div class="card-header"></div> <div class="card-content"></div> </div> <div class="card"> <div class="card-header"></div> <div class="card-content"></div> </div> <div class="card"> <div class="card-header"></div> <div class="card-content"></div> </div> </div>`
);

// Layout 5: Hero + contenu
const layout5 = new Layout(
    `.hero-layout { display: flex; flex-direction: column; height: 100%; } .hero-layout .hero { height: 40%; background-color: var(--primary-color); display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; } .hero-layout .sections { flex: 1; display: flex; flex-direction: column; gap: 8px; padding: 10px; } .hero-layout .section { flex: 1; background-color: var(--secondary-color); border-radius: 2px; }`, {
        "id": 5,
        "name": "Hero + contenu",
        "description": "Grand bandeau d'ouverture (image/CTA) suivi de sections modulaires.",
        "usage": "Landing pages, pages produit.",
        "technique": "vh pour hero; sections en container avec max-width.",
        "advantage": "Impact visuel fort et parcours utilisateur guidé.",
        "disadvantage": "Peut augmenter le temps de chargement.",
        "tags": [
                "Marketing",
                "Conversion",
                "Visuel"
        ]
    },
    `<div class="preview-container hero-layout"> <div class="hero">HERO</div> <div class="sections"> <div class="section"></div> <div class="section"></div> <div class="section"></div> </div> </div>`
);

// Layout 6: Split-screen
const layout6 = new Layout(
    `.split-screen { display: flex; height: 100%; } .split-screen .left-panel { width: 50%; background-color: var(--primary-color); display: flex; align-items: center; justify-content: center; color: white; } .split-screen .right-panel { width: 50%; background-color: var(--secondary-color); display: flex; align-items: center; justify-content: center; color: white; }`, {
        "id": 6,
        "name": "Split-screen",
        "description": "Page scindée en deux verticalement (texte vs image / deux produits).",
        "usage": "Présentation produit comparatif, page d'accueil créative.",
        "technique": "Flexbox ou Grid 50/50. Passer en colonne sur mobile.",
        "advantage": "Équilibre visuel et comparaison facile.",
        "disadvantage": "Peut être difficile à lire sur petits écrans.",
        "tags": [
                "Créatif",
                "Comparaison",
                "Visuel"
        ]
    },
    `<div class="preview-container split-screen"> <div class="left-panel">TEXTE</div> <div class="right-panel">IMAGE</div> </div>`
);

// Layout 7: Off-canvas menu
const layout7 = new Layout(
    `.off-canvas { display: flex; height: 100%; position: relative; overflow: hidden; } .off-canvas .main { flex: 1; background-color: var(--secondary-color); display: flex; align-items: center; justify-content: center; } .off-canvas .menu-toggle { position: absolute; top: 10px; left: 10px; width: 20px; height: 15px; background-color: rgba(0, 0, 0, 0.5); border-radius: 2px; } .off-canvas .drawer { position: absolute; top: 0; left: -60%; width: 60%; height: 100%; background-color: var(--primary-color); transition: left 0.3s ease; } .off-canvas:hover .drawer { left: 0; } .off-canvas .drawer-item { height: 12px; background-color: rgba(255, 255, 255, 0.3); margin: 10px; border-radius: 2px; }`, {
        "id": 7,
        "name": "Off-canvas menu",
        "description": "Menu caché hors écran, révélé par un bouton (hamburger).",
        "usage": "Apps mobiles, sites responsive avec beaucoup de navigation.",
        "technique": "transform: translateX(-100%) + transition. Toggle via JS.",
        "advantage": "Économise l'espace écran.",
        "disadvantage": "Navigation moins visible.",
        "tags": [
                "Mobile",
                "Navigation",
                "UX"
        ]
    },
    `<div class="preview-container off-canvas"> <div class="menu-toggle"></div> <div class="main">CONTENU</div> <div class="drawer"> <div class="drawer-item"></div> <div class="drawer-item"></div> <div class="drawer-item"></div> </div> </div>`
);

// Layout 8: App shell
const layout8 = new Layout(
    `.app-shell { display: flex; flex-direction: column; height: 100%; } .app-shell .header { height: 15%; background-color: var(--primary-color); display: flex; align-items: center; padding: 0 10px; } .app-shell .header .logo { width: 40px; height: 20px; background-color: rgba(255, 255, 255, 0.3); border-radius: 2px; } .app-shell .main-area { display: flex; flex: 1; } .app-shell .sidebar { width: 20%; background-color: #8ca8d0; padding: 10px; } .app-shell .sidebar-item { height: 12px; background-color: rgba(255, 255, 255, 0.3); margin-bottom: 8px; border-radius: 2px; } .app-shell .content { flex: 1; background-color: var(--secondary-color); padding: 10px; } .app-shell .content-item { height: 15px; background-color: rgba(255, 255, 255, 0.3); margin-bottom: 8px; border-radius: 2px; }`, {
        "id": 8,
        "name": "App shell",
        "description": "Header/footer fixes, contenu scrollable au centre (PWA pattern).",
        "usage": "Progressive Web Apps, applications web.",
        "technique": "position: fixed pour header/footer; overflow-y: auto pour main.",
        "advantage": "Navigation toujours accessible.",
        "disadvantage": "Réduit l'espace de contenu visible.",
        "tags": [
                "PWA",
                "Application",
                "Mobile"
        ]
    },
    `<div class="preview-container app-shell"> <div class="header"> <div class="logo"></div> </div> <div class="main-area"> <div class="sidebar"> <div class="sidebar-item"></div> <div class="sidebar-item"></div> <div class="sidebar-item"></div> </div> <div class="content"> <div class="content-item"></div> <div class="content-item"></div> <div class="content-item"></div> </div> </div> </div>`
);

// Layout 9: Masonry (Pinterest-like)
const layout9 = new Layout(
    `.masonry { display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; padding: 10px; height: 100%; grid-auto-rows: minmax(30px, auto); } .masonry .card { background-color: var(--primary-color); border-radius: 4px; padding: 8px; } .masonry .card:nth-child(1) { grid-row: span 2; } .masonry .card:nth-child(2) { grid-row: span 1; } .masonry .card:nth-child(3) { grid-row: span 3; } .masonry .card:nth-child(4) { grid-row: span 2; } .masonry .card:nth-child(5) { grid-row: span 1; } .masonry .card-content { height: 100%; background-color: rgba(255, 255, 255, 0.2); border-radius: 2px; }`, {
        "id": 9,
        "name": "Masonry (Pinterest-like)",
        "description": "Grille de cartes de hauteurs variables, sans espaces vides.",
        "usage": "Galeries d'images, portfolios, flux de contenu mixte.",
        "technique": "CSS column-count ou librairie JS (Masonry.js). CSS Grid masonry (expérimental).",
        "advantage": "Utilisation optimale de l'espace.",
        "disadvantage": "Ordre de lecture peut être perturbé.",
        "tags": [
                "Galerie",
                "Visuel",
                "Créatif"
        ]
    },
    `<div class="preview-container masonry"> <div class="card"><div class="card-content"></div></div> <div class="card"><div class="card-content"></div></div> <div class="card"><div class="card-content"></div></div> <div class="card"><div class="card-content"></div></div> <div class="card"><div class="card-content"></div></div> </div>`
);

// Layout 10: Magazine layout
const layout10 = new Layout(
    `.magazine { display: grid; grid-template-columns: repeat(4, 1fr); grid-template-rows: repeat(3, 1fr); gap: 8px; padding: 10px; height: 100%; } .magazine .featured { grid-column: span 2; grid-row: span 2; background-color: var(--primary-color); border-radius: 4px; padding: 8px; } .magazine .article { background-color: var(--secondary-color); border-radius: 4px; padding: 8px; } .magazine .article:nth-child(2) { grid-column: span 2; } .magazine .article-content { height: 100%; background-color: rgba(255, 255, 255, 0.2); border-radius: 2px; }`, {
        "id": 10,
        "name": "Magazine layout",
        "description": "Mise en page type magazine avec zones de tailles variées.",
        "usage": "Sites d'actualités, blogs lifestyle.",
        "technique": "CSS Grid avec grid-template-areas pour définir zones.",
        "advantage": "Hiérarchie visuelle forte.",
        "disadvantage": "Complexe à maintenir responsive.",
        "tags": [
                "Éditorial",
                "Complexe",
                "Visuel"
        ]
    },
    `<div class="preview-container magazine"> <div class="featured"><div class="article-content"></div></div> <div class="article"><div class="article-content"></div></div> <div class="article"><div class="article-content"></div></div> <div class="article"><div class="article-content"></div></div> <div class="article"><div class="article-content"></div></div> </div>`
);

// Layout 11: Dashboard layout
const layout11 = new Layout(
    `.dashboard { display: grid; grid-template-columns: repeat(2, 1fr); grid-template-rows: repeat(2, 1fr); gap: 8px; padding: 10px; height: 100%; } .dashboard .widget { background-color: var(--primary-color); border-radius: 4px; padding: 8px; } .dashboard .widget:nth-child(1) { grid-column: span 2; } .dashboard .widget-content { height: 100%; background-color: rgba(255, 255, 255, 0.2); border-radius: 2px; }`, {
        "id": 11,
        "name": "Dashboard layout",
        "description": "Widgets/cartes organisés en grille pour visualiser données.",
        "usage": "Tableaux de bord, analytics, monitoring.",
        "technique": "CSS Grid responsive avec cartes modulaires.",
        "advantage": "Vue d'ensemble rapide des métriques.",
        "disadvantage": "Peut être surchargé visuellement.",
        "tags": [
                "Data",
                "Business",
                "Productivité"
        ]
    },
    `<div class="preview-container dashboard"> <div class="widget"><div class="widget-content"></div></div> <div class="widget"><div class="widget-content"></div></div> <div class="widget"><div class="widget-content"></div></div> <div class="widget"><div class="widget-content"></div></div> </div>`
);

// Layout 12: Table-based layout
const layout12 = new Layout(
    `.table-layout { display: flex; flex-direction: column; height: 100%; padding: 10px; } .table-layout .table-header { display: flex; height: 15px; margin-bottom: 8px; } .table-layout .table-header .col { flex: 1; background-color: var(--primary-color); margin-right: 5px; border-radius: 2px; } .table-layout .table-row { display: flex; height: 12px; margin-bottom: 5px; } .table-layout .table-row .col { flex: 1; background-color: var(--secondary-color); margin-right: 5px; border-radius: 2px; }`, {
        "id": 12,
        "name": "Table-based layout",
        "description": "Données tabulaires avec tri, filtres, pagination.",
        "usage": "Admin panels, CRM, gestion de données.",
        "technique": "Table HTML + CSS responsive (scroll horizontal ou cartes sur mobile).",
        "advantage": "Idéal pour grandes quantités de données structurées.",
        "disadvantage": "Difficile à rendre responsive.",
        "tags": [
                "Data",
                "Admin",
                "Tableaux"
        ]
    },
    `<div class="preview-container table-layout"> <div class="table-header"> <div class="col"></div> <div class="col"></div> <div class="col"></div> </div> <div class="table-row"> <div class="col"></div> <div class="col"></div> <div class="col"></div> </div> <div class="table-row"> <div class="col"></div> <div class="col"></div> <div class="col"></div> </div> <div class="table-row"> <div class="col"></div> <div class="col"></div> <div class="col"></div> </div> </div>`
);

// Layout 13: Gallery grid
const layout13 = new Layout(
    `.gallery-layout { display: grid; grid-template-columns: repeat(3, 1fr); grid-template-rows: repeat(2, 1fr); gap: 8px; padding: 10px; height: 100%; } .gallery-layout .image { background-color: var(--primary-color); border-radius: 4px; display: flex; align-items: center; justify-content: center; color: white; font-size: 0.8rem; }`, {
        "id": 13,
        "name": "Gallery grid",
        "description": "Grille d'images uniformes avec lightbox au clic.",
        "usage": "Portfolios photo, galeries produits.",
        "technique": "Grid avec aspect-ratio fixe; modal JS pour agrandir.",
        "advantage": "Présentation claire et uniforme.",
        "disadvantage": "Peut rogner les images.",
        "tags": [
                "Images",
                "Portfolio",
                "Visuel"
        ]
    },
    `<div class="preview-container gallery-layout"> <div class="image">IMG</div> <div class="image">IMG</div> <div class="image">IMG</div> <div class="image">IMG</div> <div class="image">IMG</div> <div class="image">IMG</div> </div>`
);

// Layout 14: Timeline vertical
const layout14 = new Layout(
    `.timeline { display: flex; flex-direction: column; height: 100%; padding: 10px; position: relative; } .timeline::before { content: ''; position: absolute; left: 20%; top: 0; bottom: 0; width: 2px; background-color: var(--primary-color); } .timeline .event { display: flex; margin-bottom: 15px; position: relative; } .timeline .event::before { content: ''; position: absolute; left: 20%; top: 5px; width: 10px; height: 10px; background-color: var(--primary-color); border-radius: 50%; transform: translateX(-50%); } .timeline .event .date { width: 20%; padding-right: 10px; text-align: right; font-size: 0.7rem; } .timeline .event .content { width: 80%; padding-left: 10px; } .timeline .event .content .bar { height: 10px; background-color: var(--secondary-color); border-radius: 2px; margin-bottom: 3px; }`, {
        "id": 14,
        "name": "Timeline vertical",
        "description": "Événements chronologiques affichés verticalement.",
        "usage": "Historique, processus, storytelling.",
        "technique": "Flexbox vertical avec pseudo-éléments pour ligne centrale.",
        "advantage": "Narration claire et chronologique.",
        "disadvantage": "Peut être long sur mobile.",
        "tags": [
                "Storytelling",
                "Chronologie",
                "Visuel"
        ]
    },
    `<div class="preview-container timeline"> <div class="event"> <div class="date">2023</div> <div class="content"> <div class="bar"></div> <div class="bar" style="width: 80%"></div> </div> </div> <div class="event"> <div class="date">2022</div> <div class="content"> <div class="bar"></div> <div class="bar" style="width: 60%"></div> </div> </div> <div class="event"> <div class="date">2021</div> <div class="content"> <div class="bar"></div> <div class="bar" style="width: 70%"></div> </div> </div> </div>`
);

// Layout 15: Minimal landing
const layout15 = new Layout(
    `.minimal-landing { display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%; padding: 20px; text-align: center; } .minimal-landing .title { height: 20px; width: 80%; background-color: var(--primary-color); margin-bottom: 15px; border-radius: 2px; } .minimal-landing .subtitle { height: 12px; width: 60%; background-color: var(--secondary-color); margin-bottom: 20px; border-radius: 2px; } .minimal-landing .cta { height: 30px; width: 120px; background-color: var(--primary-color); border-radius: 4px; }`, {
        "id": 15,
        "name": "Minimal landing",
        "description": "Page d'atterrissage minimaliste (titre, CTA, peu de contenu).",
        "usage": "Coming soon, capture email, présentation produit simple.",
        "technique": "Centrage vertical/horizontal avec Flexbox.",
        "advantage": "Focus total sur le message principal.",
        "disadvantage": "Peu d'informations disponibles.",
        "tags": [
                "Minimaliste",
                "Conversion",
                "Simple"
        ]
    },
    `<div class="preview-container minimal-landing"> <div class="title"></div> <div class="subtitle"></div> <div class="cta"></div> </div>`
);

// Layout 16: Map-based layout
const layout16 = new Layout(
    `.map-layout { display: flex; height: 100%; } .map-layout .map { flex: 1; background-color: var(--primary-color); display: flex; align-items: center; justify-content: center; color: white; } .map-layout .panel { width: 30%; background-color: var(--secondary-color); padding: 10px; } .map-layout .panel-item { height: 12px; background-color: rgba(255, 255, 255, 0.3); margin-bottom: 8px; border-radius: 2px; }`, {
        "id": 16,
        "name": "Map-based layout",
        "description": "Carte interactive (Google Maps, Leaflet) + panneau d'infos.",
        "usage": "Localisateurs de magasins, apps de livraison, immobilier.",
        "technique": "Carte en plein écran ou split avec sidebar. API de cartographie.",
        "advantage": "Contexte géographique immédiat.",
        "disadvantage": "Dépendance à une API tierce.",
        "tags": [
                "Géolocalisation",
                "Interactif",
                "API"
        ]
    },
    `<div class="preview-container map-layout"> <div class="map">CARTE</div> <div class="panel"> <div class="panel-item"></div> <div class="panel-item"></div> <div class="panel-item"></div> </div> </div>`
);

// Layout 17: Full-bleed images
const layout17 = new Layout(
    `.full-bleed { display: flex; flex-direction: column; height: 100%; } .full-bleed .section { flex: 1; margin: 5px 0; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; } .full-bleed .section:nth-child(odd) { background-color: var(--primary-color); } .full-bleed .section:nth-child(even) { background-color: var(--secondary-color); }`, {
        "id": 17,
        "name": "Full-bleed images",
        "description": "Images pleine largeur sans marges, texte superposé.",
        "usage": "Portfolios créatifs, sites de mode, storytelling visuel.",
        "technique": "width: 100vw; height: 100vh; object-fit: cover.",
        "advantage": "Impact visuel maximal.",
        "disadvantage": "Accessibilité du texte à gérer (contraste).",
        "tags": [
                "Visuel",
                "Créatif",
                "Immersif"
        ]
    },
    `<div class="preview-container full-bleed"> <div class="section">SECTION 1</div> <div class="section">SECTION 2</div> <div class="section">SECTION 3</div> </div>`
);

// Layout 18: Parallax scrolling
const layout18 = new Layout(
    `.parallax { height: 100%; position: relative; overflow: hidden; } .parallax .layer { position: absolute; width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; } .parallax .background { background-color: var(--primary-color); transform: translateZ(-1px) scale(1.5); } .parallax .foreground { background-color: var(--secondary-color); opacity: 0.8; width: 80%; height: 60%; }`, {
        "id": 18,
        "name": "Parallax scrolling",
        "description": "Éléments de fond défilent à vitesse différente du contenu.",
        "usage": "Sites narratifs, landing pages créatives.",
        "technique": "transform: translateY() basé sur scroll position (JS).",
        "advantage": "Effet de profondeur et d'immersion.",
        "disadvantage": "Peut causer des problèmes de performance et d'accessibilité.",
        "tags": [
                "Animation",
                "Créatif",
                "Storytelling"
        ]
    },
    `<div class="preview-container parallax"> <div class="layer background">ARRIÈRE-PLAN</div> <div class="layer foreground">PREMIER PLAN</div> </div>`
);

// Layout 19: Asymmetric layout
const layout19 = new Layout(
    `.asymmetric { display: grid; grid-template-columns: 2fr 1fr; grid-template-rows: 1fr 1fr; gap: 8px; padding: 10px; height: 100%; } .asymmetric .main { grid-row: span 2; background-color: var(--primary-color); border-radius: 4px; } .asymmetric .side-top { background-color: var(--secondary-color); border-radius: 4px; } .asymmetric .side-bottom { background-color: #8ca8d0; border-radius: 4px; }`, {
        "id": 19,
        "name": "Asymmetric layout",
        "description": "Disposition volontairement déséquilibrée pour effet artistique.",
        "usage": "Portfolios créatifs, sites d'agence.",
        "technique": "CSS Grid avec colonnes/lignes de tailles variées.",
        "advantage": "Originalité et dynamisme visuel.",
        "disadvantage": "Peut nuire à la lisibilité.",
        "tags": [
                "Créatif",
                "Artistique",
                "Moderne"
        ]
    },
    `<div class="preview-container asymmetric"> <div class="main"></div> <div class="side-top"></div> <div class="side-bottom"></div> </div>`
);

// Layout 20: Modal-centric
const layout20 = new Layout(
    `.modal-layout { display: flex; align-items: center; justify-content: center; height: 100%; position: relative; } .modal-layout .background { width: 100%; height: 100%; background-color: var(--secondary-color); } .modal-layout .modal { position: absolute; width: 70%; height: 60%; background-color: var(--primary-color); border-radius: 8px; display: flex; flex-direction: column; padding: 15px; } .modal-layout .modal-header { height: 15px; background-color: rgba(255, 255, 255, 0.3); margin-bottom: 10px; border-radius: 2px; } .modal-layout .modal-content { flex: 1; background-color: rgba(255, 255, 255, 0.2); border-radius: 2px; }`, {
        "id": 20,
        "name": "Modal-centric",
        "description": "Contenu principal affiché dans des modals/overlays.",
        "usage": "Galeries, formulaires multi-étapes, wizards.",
        "technique": "position: fixed; z-index élevé; backdrop semi-transparent.",
        "advantage": "Focus sur une tâche à la fois.",
        "disadvantage": "Peut frustrer si mal implémenté (fermeture difficile).",
        "tags": [
                "UX",
                "Interactif",
                "Focus"
        ]
    },
    `<div class="preview-container modal-layout"> <div class="background"></div> <div class="modal"> <div class="modal-header"></div> <div class="modal-content"></div> </div> </div>`
);

// Layout 21: Accordion layout
const layout21 = new Layout(
    `.accordion-layout { display: flex; flex-direction: column; height: 100%; padding: 10px; } .accordion-layout .section { margin-bottom: 8px; border-radius: 4px; overflow: hidden; } .accordion-layout .section-header { height: 15px; background-color: var(--primary-color); margin-bottom: 2px; border-radius: 2px; } .accordion-layout .section-content { height: 25px; background-color: var(--secondary-color); border-radius: 2px; }`, {
        "id": 21,
        "name": "Accordion layout",
        "description": "Sections repliables pour organiser beaucoup de contenu.",
        "usage": "FAQ, documentation, menus de navigation.",
        "technique": "details/summary HTML ou div + JS toggle.",
        "advantage": "Économise l'espace vertical.",
        "disadvantage": "Contenu caché peut être manqué.",
        "tags": [
                "Organisation",
                "Mobile",
                "UX"
        ]
    },
    `<div class="preview-container accordion-layout"> <div class="section"> <div class="section-header"></div> <div class="section-content"></div> </div> <div class="section"> <div class="section-header"></div> <div class="section-content"></div> </div> <div class="section"> <div class="section-header"></div> <div class="section-content"></div> </div> </div>`
);

// Layout 22: Search-first layout
const layout22 = new Layout(
    `.search-layout { display: flex; flex-direction: column; height: 100%; padding: 10px; } .search-layout .search-bar { height: 25px; background-color: var(--primary-color); margin-bottom: 10px; border-radius: 4px; } .search-layout .results { flex: 1; display: flex; flex-direction: column; gap: 5px; } .search-layout .result-item { height: 12px; background-color: var(--secondary-color); border-radius: 2px; }`, {
        "id": 22,
        "name": "Search-first layout",
        "description": "Barre de recherche proéminente, résultats en temps réel.",
        "usage": "Sites e-commerce, bases de connaissances, annuaires.",
        "technique": "Input focus au chargement; AJAX pour résultats instantanés.",
        "advantage": "Accès rapide à l'information.",
        "disadvantage": "Nécessite une bonne indexation/recherche backend.",
        "tags": [
                "Recherche",
                "UX",
                "Performance"
        ]
    },
    `<div class="preview-container search-layout"> <div class="search-bar"></div> <div class="results"> <div class="result-item"></div> <div class="result-item"></div> <div class="result-item"></div> <div class="result-item"></div> </div> </div>`
);

// Layout 23: Multi-step form
const layout23 = new Layout(
    `.multi-step { display: flex; flex-direction: column; height: 100%; padding: 10px; } .multi-step .progress { height: 10px; background-color: var(--primary-color); margin-bottom: 15px; border-radius: 5px; } .multi-step .step { flex: 1; background-color: var(--secondary-color); margin-bottom: 8px; border-radius: 4px; display: flex; align-items: center; justify-content: center; color: white; }`, {
        "id": 23,
        "name": "Multi-step form",
        "description": "Formulaire divisé en étapes avec indicateur de progression.",
        "usage": "Checkout e-commerce, onboarding, questionnaires.",
        "technique": "Afficher/cacher sections via JS; progress bar.",
        "advantage": "Moins intimidant qu'un long formulaire.",
        "disadvantage": "Peut rallonger le processus perçu.",
        "tags": [
                "Formulaire",
                "UX",
                "Conversion"
        ]
    },
    `<div class="preview-container multi-step"> <div class="progress"></div> <div class="step">ÉTAPE 1</div> <div class="step">ÉTAPE 2</div> <div class="step">ÉTAPE 3</div> </div>`
);

// Layout 24: Embedded content layout
const layout24 = new Layout(
    `.embedded-layout { display: flex; flex-direction: column; height: 100%; } .embedded-layout .header { height: 15%; background-color: var(--primary-color); } .embedded-layout .content { flex: 1; display: flex; } .embedded-layout .sidebar { width: 20%; background-color: #8ca8d0; } .embedded-layout .embeds { flex: 1; background-color: var(--secondary-color); display: grid; grid-template-columns: 1fr 1fr; grid-template-rows: 1fr 1fr; gap: 5px; padding: 5px; } .embedded-layout .embed { background-color: rgba(255, 255, 255, 0.3); border-radius: 2px; display: flex; align-items: center; justify-content: center; font-size: 0.7rem; }`, {
        "id": 24,
        "name": "Embedded content layout",
        "description": "Intégration de contenu tiers (vidéos, tweets, cartes).",
        "usage": "Articles de blog, pages de ressources.",
        "technique": "iframe, embed, ou API widgets (YouTube, Twitter).",
        "advantage": "Enrichit le contenu facilement.",
        "disadvantage": "Dépendance externe, performance.",
        "tags": [
                "Contenu",
                "Intégration",
                "Médias"
        ]
    },
    `<div class="preview-container embedded-layout"> <div class="header"></div> <div class="content"> <div class="sidebar"></div> <div class="embeds"> <div class="embed">EMBED 1</div> <div class="embed">EMBED 2</div> <div class="embed">EMBED 3</div> <div class="embed">EMBED 4</div> </div> </div> </div>`
);

// Layout 25: Hybrid mobile/desktop
const layout25 = new Layout(
    `.hybrid-layout { display: flex; height: 100%; }
    .hybrid-layout .panel { width: 20%; background-color: var(--primary-color); padding: 5px; }
    .hybrid-layout .panel-item { height: 12px; background-color: rgba(255, 255, 255, 0.3); margin-bottom: 5px; border-radius: 2px; }
    .hybrid-layout .main { flex: 1; display: flex; flex-direction: column; }
    .hybrid-layout .main-header { height: 15%; background-color: var(--secondary-color); }
    .hybrid-layout .main-content { flex: 1; background-color: #8ca8d0; display: flex; }
    .hybrid-layout .content-panel { flex: 1; padding: 5px; }
    .hybrid-layout .content-item { height: 15px; background-color: rgba(255, 255, 255, 0.3); margin-bottom: 5px; border-radius: 2px; }`, {
        "id": 25,
        "name": "Hybrid mobile/desktop",
        "description": "Layout qui s'adapte radicalement entre mobile et desktop.",
        "usage": "Apps web complexes, sites e-commerce.",
        "technique": "Media queries + composants conditionnels.",
        "advantage": "Expérience optimale sur chaque device.",
        "disadvantage": "Complexité de développement et maintenance.",
        "tags": [
                "Responsive",
                "Adaptatif",
                "Complexe"
        ]
    },
    `<div class="preview-container hybrid-layout"><div class="panel"><div class="panel-item"></div><div class="panel-item"></div><div class="panel-item"></div></div><div class="main"><div class="main-header"></div><div class="main-content"><div class="content-panel"><div class="content-item"></div><div class="content-item"></div><div class="content-item"></div></div></div></div></div>`
);

// Layout 26: Glassmorphism
const layout26 = new Layout(
    `.glassmorphism { display: flex; flex-direction: column; height: 100%; padding: 15px; background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0)); -webkit-backdrop-filter: blur(10px); backdrop-filter: blur(10px); border-radius: 10px; border: 1px solid rgba(255, 255, 255, 0.2); } .glassmorphism .card { background: rgba(255, 255, 255, 0.2); border-radius: 8px; padding: 10px; margin-bottom: 8px; } .glassmorphism .card-header { height: 12px; background: rgba(255, 255, 255, 0.3); border-radius: 4px; margin-bottom: 6px; } .glassmorphism .card-content { height: 20px; background: rgba(255, 255, 255, 0.2); border-radius: 4px; }`, {
        "id": 26,
        "name": "Glassmorphism",
        "description": "Design utilisant des effets de transparence et de flou pour créer des interfaces modernes et aériennes.",
        "usage": "Applications modernes, dashboards, interfaces mobiles.",
        "technique": "backdrop-filter, rgba colors, gradients avec transparence.",
        "advantage": "Effet visuel moderne et élégant, sensation de profondeur.",
        "disadvantage": "Performance sur les anciens navigateurs, accessibilité des contrastes.",
        "tags": [
                "Moderne",
                "Transparent",
                "Profondeur"
        ]
    },
    `<div class="preview-container glassmorphism"> <div class="card"> <div class="card-header"></div> <div class="card-content"></div> </div> <div class="card"> <div class="card-header"></div> <div class="card-content"></div> </div> </div>`
);

// Layout 27: Neumorphism
const layout27 = new Layout(
    `.neumorphism { display: flex; flex-direction: column; height: 100%; padding: 15px; background: var(--background-color); } .neumorphism .element { background: var(--background-color); border-radius: 12px; margin-bottom: 10px; box-shadow: 8px 8px 16px rgba(0, 0, 0, 0.1), -8px -8px 16px rgba(255, 255, 255, 0.7); padding: 10px; } .neumorphism .element-content { height: 15px; background: var(--secondary-color); border-radius: 6px; opacity: 0.3; }`, {
        "id": 27,
        "name": "Neumorphism",
        "description": "Style qui simule des éléments extrudés avec des ombres douces pour un effet 3D subtil.",
        "usage": "Interfaces modernes, applications mobiles, boutons et cartes.",
        "technique": "Box-shadow avec ombres claires et sombres, couleurs de fond subtiles.",
        "advantage": "Look moderne et tactile, cohérence visuelle.",
        "disadvantage": "Problèmes de contraste et d'accessibilité.",
        "tags": [
                "3D",
                "Tactile",
                "Moderne"
        ]
    },
    `<div class="preview-container neumorphism"> <div class="element"> <div class="element-content"></div> </div> <div class="element"> <div class="element-content"></div> </div> <div class="element"> <div class="element-content"></div> </div> </div>`
);

// Layout 28: Brutalism
const layout28 = new Layout(
    `.brutalism { display: flex; flex-direction: column; height: 100%; padding: 10px; background: white; border: 3px solid black; } .brutalism .header { height: 25px; background: black; color: white; display: flex; align-items: center; padding: 0 10px; margin-bottom: 10px; font-size: 0.7rem; font-weight: bold; } .brutalism .content-block { height: 15px; background: var(--primary-color); margin-bottom: 8px; border: 2px solid black; } .brutalism .highlight { background: yellow; border: 2px solid black; }`, {
        "id": 28,
        "name": "Brutalism",
        "description": "Style intentionnellement brut et non poli, inspiré de l'architecture brutaliste.",
        "usage": "Sites artistiques, portfolios créatifs, marques audacieuses.",
        "technique": "Borders épaisses, couleurs vives, typographie forte, peu d'ornements.",
        "advantage": "Impact visuel fort, mémorable, chargé de personnalité.",
        "disadvantage": "Peut être perçu comme non professionnel, expérience utilisateur déroutante.",
        "tags": [
                "Audacieux",
                "Artistique",
                "Minimal"
        ]
    },
    `<div class="preview-container brutalism"> <div class="header">HEADER</div> <div class="content-block"></div> <div class="content-block highlight"></div> <div class="content-block"></div> </div>`
);

// Layout 29: Isometric
const layout29 = new Layout(
    `.isometric { display: flex; height: 100%; align-items: flex-end; justify-content: center; perspective: 1000px; } .isometric .cube { width: 40px; height: 40px; position: relative; transform-style: preserve-3d; transform: rotateX(60deg) rotateY(0deg) rotateZ(-45deg); } .isometric .face { position: absolute; width: 100%; height: 100%; background: var(--primary-color); border: 1px solid rgba(0, 0, 0, 0.1); } .isometric .front { transform: translateZ(20px); } .isometric .back { transform: translateZ(-20px); } .isometric .right { transform: rotateY(90deg) translateZ(20px); } .isometric .left { transform: rotateY(-90deg) translateZ(20px); } .isometric .top { transform: rotateX(90deg) translateZ(20px); } .isometric .bottom { transform: rotateX(-90deg) translateZ(20px); }`, {
        "id": 29,
        "name": "Isometric",
        "description": "Représentation en perspective isométrique pour des interfaces 3D sans point de fuite.",
        "usage": "Jeux, visualisations de données, interfaces créatives.",
        "technique": "Transformations CSS 3D, SVG, calculs de perspective.",
        "advantage": "Représentation spatiale claire, visuellement engageante.",
        "disadvantage": "Complexité de mise en œuvre, contraintes d'espace.",
        "tags": [
                "3D",
                "Spatial",
                "Créatif"
        ]
    },
    `<div class="preview-container isometric"> <div class="cube"> <div class="face front"></div> <div class="face back"></div> <div class="face right"></div> <div class="face left"></div> <div class="face top"></div> <div class="face bottom"></div> </div> </div>`
);

// Layout 30: Cyberpunk
const layout30 = new Layout(
    `.cyberpunk { display: flex; flex-direction: column; height: 100%; background: #0a0a12; padding: 10px; position: relative; overflow: hidden; } .cyberpunk::before { content: ''; position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: linear-gradient(45deg, transparent 49%, #00ffff 50%, transparent 51%); background-size: 10px 10px; opacity: 0.1; } .cyberpunk .neon { height: 20px; background: #ff00ff; margin-bottom: 8px; box-shadow: 0 0 10px #ff00ff, 0 0 20px #ff00ff; position: relative; z-index: 1; } .cyberpunk .grid { flex: 1; background: linear-gradient(90deg, transparent 49%, #00ffff 50%, transparent 51%), linear-gradient(0deg, transparent 49%, #00ffff 50%, transparent 51%); background-size: 20px 20px; opacity: 0.2; }`, {
        "id": 30,
        "name": "Cyberpunk",
        "description": "Style inspiré de la science-fiction cyberpunk avec néons, grilles et éléments futuristes.",
        "usage": "Jeux, sites technologiques, œuvres artistiques.",
        "technique": "Gradients néon, animations de lueur, motifs de grille.",
        "advantage": "Atmosphère immersive et futuriste, fort impact visuel.",
        "disadvantage": "Peut être surchargé, problèmes de lisibilité.",
        "tags": [
                "Futuriste",
                "Néon",
                "Immersif"
        ]
    },
    `<div class="preview-container cyberpunk"> <div class="neon"></div> <div class="neon"></div> <div class="grid"></div> </div>`
);

// Layout 31: Adaptive UI
const layout31 = new Layout(
    `.adaptive-ui { display: flex; flex-direction: column; height: 100%; padding: 10px; } .adaptive-ui .context-bar { height: 15px; background: var(--primary-color); margin-bottom: 8px; border-radius: 4px; transition: all 0.3s ease; } .adaptive-ui .content-area { flex: 1; display: grid; grid-template-columns: repeat(auto-fit, minmax(80px, 1fr)); gap: 8px; } .adaptive-ui .module { background: var(--secondary-color); border-radius: 4px; display: flex; align-items: center; justify-content: center; font-size: 0.6rem; text-align: center; padding: 5px; }`, {
        "id": 31,
        "name": "Adaptive UI",
        "description": "Interface qui s'adapte dynamiquement au contexte et aux préférences utilisateur.",
        "usage": "Applications intelligentes, interfaces contextuelles.",
        "technique": "CSS container queries, JavaScript contextuel, préférences utilisateur.",
        "advantage": "Expérience personnalisée, adaptabilité contextuelle.",
        "disadvantage": "Complexité de développement, maintenance accrue.",
        "tags": [
                "Adaptatif",
                "Intelligent",
                "Contextuel"
        ]
    },
    `<div class="preview-container adaptive-ui"> <div class="context-bar"></div> <div class="content-area"> <div class="module">A</div> <div class="module">B</div> <div class="module">C</div> <div class="module">D</div> </div> </div>`
);

// Layout 32: Voice UI
const layout32 = new Layout(
    `.voice-ui { display: flex; flex-direction: column; height: 100%; padding: 15px; align-items: center; justify-content: center; } .voice-ui .mic { width: 50px; height: 50px; background: var(--primary-color); border-radius: 50%; margin-bottom: 15px; display: flex; align-items: center; justify-content: center; position: relative; } .voice-ui .mic::after { content: ''; width: 20px; height: 20px; background: white; border-radius: 2px; } .voice-ui .waves { display: flex; gap: 5px; } .voice-ui .wave { width: 8px; height: 20px; background: var(--secondary-color); border-radius: 4px; animation: pulse 1.5s infinite ease-in-out; } .voice-ui .wave:nth-child(2) { animation-delay: 0.2s; } .voice-ui .wave:nth-child(3) { animation-delay: 0.4s; } .voice-ui .wave:nth-child(4) { animation-delay: 0.6s; } @keyframes pulse { 0%, 100% { transform: scaleY(1); } 50% { transform: scaleY(2); } }`, {
        "id": 32,
        "name": "Voice UI",
        "description": "Interface optimisée pour les interactions vocales et les assistants intelligents.",
        "usage": "Applications vocales, assistants, interfaces mains libres.",
        "technique": "Web Speech API, design conversationnel, retours visuels audio.",
        "advantage": "Accessibilité, interaction mains libres, moderne.",
        "disadvantage": "Reconnaissance vocale imparfaite, interface moins dense.",
        "tags": [
                "Vocal",
                "Accessible",
                "Moderne"
        ]
    },
    `<div class="preview-container voice-ui"> <div class="mic"></div> <div class="waves"> <div class="wave"></div> <div class="wave"></div> <div class="wave"></div> <div class="wave"></div> </div> </div>`
);

// Layout 33: AR/VR Ready
const layout33 = new Layout(
    `.ar-vr { display: flex; height: 100%; perspective: 1000px; } .ar-vr .viewport { flex: 1; background: var(--primary-color); margin: 10px; border-radius: 8px; transform-style: preserve-3d; transform: rotateY(15deg); display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; } .ar-vr .hud { position: absolute; top: 10px; left: 10px; right: 10px; display: flex; justify-content: space-between; } .ar-vr .hud-item { width: 20px; height: 20px; background: rgba(255, 255, 255, 0.2); border-radius: 4px; }`, {
        "id": 33,
        "name": "AR/VR Ready",
        "description": "Interface préparée pour la réalité augmentée ou virtuelle avec éléments 3D et HUD.",
        "usage": "Applications AR/VR, visualisations 3D, expériences immersives.",
        "technique": "WebXR API, CSS 3D, Canvas, WebGL.",
        "advantage": "Expérience immersive, avant-garde technologique.",
        "disadvantage": "Compatibilité limitée, courbe d'apprentissage raide.",
        "tags": [
                "Immersif",
                "3D",
                "Avant-garde"
        ]
    },
    `<div class="preview-container ar-vr"> <div class="viewport">3D VIEW</div> <div class="hud"> <div class="hud-item"></div> <div class="hud-item"></div> </div> </div>`
);

// Layout 34: Data Visualization
const layout34 = new Layout(
    `.data-viz { display: flex; flex-direction: column; height: 100%; padding: 10px; } .data-viz .chart-area { flex: 1; display: flex; align-items: flex-end; gap: 8px; padding: 10px; } .data-viz .bar { flex: 1; background: var(--primary-color); border-radius: 4px 4px 0 0; min-height: 10px; } .data-viz .bar:nth-child(1) { height: 70%; } .data-viz .bar:nth-child(2) { height: 40%; } .data-viz .bar:nth-child(3) { height: 90%; } .data-viz .bar:nth-child(4) { height: 30%; } .data-viz .bar:nth-child(5) { height: 60%; } .data-viz .legend { height: 15px; display: flex; gap: 10px; justify-content: center; } .data-viz .legend-item { width: 20px; height: 8px; background: var(--secondary-color); border-radius: 2px; }`, {
        "id": 34,
        "name": "Data Visualization",
        "description": "Layout centré sur la visualisation de données avec graphiques et indicateurs.",
        "usage": "Analytics, tableaux de bord, rapports interactifs.",
        "technique": "SVG, Canvas, bibliothèques de visualisation (D3.js, Chart.js).",
        "advantage": "Compréhension intuitive des données, décisions éclairées.",
        "disadvantage": "Peut devenir complexe, performance avec grandes quantités de données.",
        "tags": [
                "Données",
                "Analytique",
                "Interactif"
        ]
    },
    `<div class="preview-container data-viz"> <div class="chart-area"> <div class="bar"></div> <div class="bar"></div> <div class="bar"></div> <div class="bar"></div> <div class="bar"></div> </div> <div class="legend"> <div class="legend-item"></div> <div class="legend-item"></div> <div class="legend-item"></div> </div> </div>`
);

// Layout 35: Micro-interaction Heavy
const layout35 = new Layout(
    `.micro-interactions { display: flex; flex-direction: column; height: 100%; padding: 15px; gap: 10px; } .micro-interactions .interactive { height: 20px; background: var(--primary-color); border-radius: 10px; position: relative; overflow: hidden; } .micro-interactions .interactive::after { content: ''; position: absolute; top: 0; left: -100%; width: 100%; height: 100%; background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent); animation: shimmer 2s infinite; } @keyframes shimmer { 0% { left: -100%; } 100% { left: 100%; } } .micro-interactions .pulse { animation: pulse 2s infinite; }`, {
        "id": 35,
        "name": "Micro-interaction Heavy",
        "description": "Interface riche en micro-interactions et animations subtiles.",
        "usage": "Applications modernes, interfaces engageantes.",
        "technique": "CSS animations, Web Animations API, transitions complexes.",
        "advantage": "Expérience utilisateur engageante, feedback immédiat.",
        "disadvantage": "Performance, peut distraire si mal utilisé.",
        "tags": [
                "Animé",
                "Engageant",
                "Moderne"
        ]
    },
    `<div class="preview-container micro-interactions"> <div class="interactive"></div> <div class="interactive pulse"></div> <div class="interactive"></div> </div>`
);

// Layout 36: AI Assistant
const layout36 = new Layout(
    `.ai-assistant { display: flex; flex-direction: column; height: 100%; padding: 10px; } .ai-assistant .chat { flex: 1; display: flex; flex-direction: column; gap: 8px; } .ai-assistant .message { padding: 8px; border-radius: 12px; max-width: 80%; font-size: 0.7rem; } .ai-assistant .user { align-self: flex-end; background: var(--primary-color); color: white; } .ai-assistant .ai { align-self: flex-start; background: var(--secondary-color); } .ai-assistant .typing { display: flex; gap: 3px; padding: 8px; } .ai-assistant .dot { width: 6px; height: 6px; background: var(--primary-color); border-radius: 50%; animation: typing 1.4s infinite ease-in-out; } .ai-assistant .dot:nth-child(1) { animation-delay: -0.32s; } .ai-assistant .dot:nth-child(2) { animation-delay: -0.16s; } @keyframes typing { 0%, 80%, 100% { transform: scale(0); } 40% { transform: scale(1); } }`, {
        "id": 36,
        "name": "AI Assistant",
        "description": "Interface centrée sur l'interaction avec une intelligence artificielle.",
        "usage": "Assistants virtuels, chatbots, interfaces conversationnelles.",
        "technique": "Design conversationnel, traitement du langage naturel.",
        "advantage": "Interaction naturelle, automatisation des tâches.",
        "disadvantage": "Limites de compréhension, attentes utilisateur élevées.",
        "tags": [
                "IA",
                "Conversationnel",
                "Intelligent"
        ]
    },
    `<div class="preview-container ai-assistant"> <div class="chat"> <div class="message user">Bonjour</div> <div class="message ai">Comment puis-je vous aider?</div> <div class="typing"> <div class="dot"></div> <div class="dot"></div> <div class="dot"></div> </div> </div> </div>`
);

// Layout 37: Spatial Computing
const layout37 = new Layout(
    `.spatial { display: flex; height: 100%; perspective: 800px; transform-style: preserve-3d; } .spatial .object { flex: 1; margin: 15px; background: var(--primary-color); border-radius: 8px; transform: rotateX(15deg) rotateY(15deg); display: flex; align-items: center; justify-content: center; color: white; position: relative; } .spatial .object::before { content: ''; position: absolute; top: -5px; left: -5px; right: -5px; bottom: -5px; background: var(--secondary-color); border-radius: 10px; z-index: -1; opacity: 0.5; }`, {
        "id": 37,
        "name": "Spatial Computing",
        "description": "Interface qui exploite l'espace 3D pour l'organisation du contenu.",
        "usage": "Applications spatiales, visualisations complexes.",
        "technique": "WebGL, Three.js, transformations 3D avancées.",
        "advantage": "Utilisation naturelle de l'espace, représentations complexes.",
        "disadvantage": "Complexité, performance, accessibilité.",
        "tags": [
                "3D",
                "Spatial",
                "Avancé"
        ]
    },
    `<div class="preview-container spatial"> <div class="object">3D</div> </div>`
);

// Layout 38: Quantum UI
const layout38 = new Layout(
    `.quantum { display: flex; flex-direction: column; height: 100%; padding: 10px; background: radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%); } .quantum .qubit { width: 30px; height: 30px; background: var(--primary-color); border-radius: 50%; margin: 5px; position: relative; animation: quantum 3s infinite linear; } .quantum .state { position: absolute; width: 100%; height: 100%; border: 2px solid var(--secondary-color); border-radius: 50%; opacity: 0; animation: state 3s infinite ease-in-out; } @keyframes quantum { 0% { transform: translate(0, 0); } 25% { transform: translate(50px, 30px); } 50% { transform: translate(20px, 60px); } 75% { transform: translate(60px, 20px); } 100% { transform: translate(0, 0); } } @keyframes state { 0%, 100% { transform: scale(1); opacity: 0; } 50% { transform: scale(1.5); opacity: 0.5; } }`, {
        "id": 38,
        "name": "Quantum UI",
        "description": "Concept expérimental inspiré de la physique quantique avec états superposés.",
        "usage": "Interfaces expérimentales, art digital, projets conceptuels.",
        "technique": "Animations complexes, probabilités, états multiples.",
        "advantage": "Innovation pure, expérience unique.",
        "disadvantage": "Conceptuel, peu d'applications pratiques.",
        "tags": [
                "Expérimental",
                "Innovant",
                "Conceptuel"
        ]
    },
    `<div class="preview-container quantum"> <div class="qubit"> <div class="state"></div> </div> </div>`
);

// Layout 39: Biometric
const layout39 = new Layout(
    `.biometric { display: flex; flex-direction: column; height: 100%; padding: 15px; align-items: center; justify-content: center; } .biometric .scanner { width: 80px; height: 80px; border: 3px solid var(--primary-color); border-radius: 8px; position: relative; overflow: hidden; } .biometric .scan-line { position: absolute; top: 0; left: 0; right: 0; height: 3px; background: var(--secondary-color); animation: scan 2s infinite linear; } @keyframes scan { 0% { top: 0; } 100% { top: 100%; } } .biometric .metrics { display: flex; gap: 10px; margin-top: 15px; } .biometric .metric { width: 20px; height: 8px; background: var(--primary-color); border-radius: 2px; }`, {
        "id": 39,
        "name": "Biometric",
        "description": "Interface intégrant des éléments biométriques pour l'authentification et la personnalisation.",
        "usage": "Sécurité, santé, applications personnalisées.",
        "technique": "WebAuthn, capteurs biométriques, données de santé.",
        "advantage": "Sécurité renforcée, personnalisation poussée.",
        "disadvantage": "Vie privée, compatibilité limitée.",
        "tags": [
                "Sécurisé",
                "Personnalisé",
                "Santé"
        ]
    },
    `<div class="preview-container biometric"> <div class="scanner"> <div class="scan-line"></div> </div> <div class="metrics"> <div class="metric"></div> <div class="metric"></div> <div class="metric"></div> </div> </div>`
);

// Layout 40: Holographic
const layout40 = new Layout(
    `@media (max-width: 1024px) { .controls { grid-template-columns: 1fr; gap: 10px; } .search-container { justify-self: stretch; } .pagination { justify-self: center; } .palette-selector { justify-self: center; } } @media (max-width: 768px) { .page-btn { padding: 6px 12px; font-size: 0.8rem; } .page-info { padding: 5px 10px; font-size: 0.8rem; } .palette-btn { width: 25px; height: 25px; } }`, {
        "id": 40,
        "name": "Holographic",
        "description": "Style simulant des interfaces holographiques avec effets de lumière et transparence.",
        "usage": "Science-fiction, présentations futuristes, art digital.",
        "technique": "Effets de lueur, transparences, animations de lumière.",
        "advantage": "Effet futuriste spectaculaire, immersion.",
        "disadvantage": "Performance, accessibilité, utilisation pratique limitée.",
        "tags": [
                "Futuriste",
                "Immersif",
                "Artistique"
        ]
    },
    `<div class="preview-container holographic"> <div class="hologram"></div> <div class="glow"></div> </div>`
);

// Tableau de tous les layouts
const allLayouts = [layout1, layout2, layout3, layout4, layout5, layout6, layout7, layout8, layout9, layout10, layout11, layout12, layout13, layout14, layout15, layout16, layout17, layout18, layout19, layout20, layout21, layout22, layout23, layout24, layout25, layout26, layout27, layout28, layout29, layout30, layout31, layout32, layout33, layout34, layout35, layout36, layout37, layout38, layout39, layout40];