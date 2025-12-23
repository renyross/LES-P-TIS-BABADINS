const crechesData = [
    // --- Group 1: From Initial Lists (Enriched) ---
    { name: "Marssac sur Tarn", city: "Marssac sur Tarn", address: "1 Avenue d'Albi", zip: "81150", phone: "06 56 67 49 65", email: "direction.marssacsurtarn@lespetitsbabadins.com", active: true, hours: "7h30 - 18h30" },
    { name: "Les P’tits Babadins de Mellac", city: "Mellac", address: "ZA de Kervidanou 3", zip: "29300", phone: "07 69 63 40 66", email: "mellac@lespetitsbabadins.com", active: true, hours: "7h30 - 19h00" },
    { name: "Au Pays des Sens", city: "Saint Germain du Puy", address: "Rue des Vignes", zip: "18390", phone: "06 89 32 30 91", email: "aupaysdessens@lespetitsbabadins.com", active: true, hours: "7h30 - 18h30" },
    { name: "Les P’tits Babadins de Souppes", city: "Souppes-sur-Loing", address: "2 Rue du Roulis", zip: "77460", phone: "07 81 11 16 60", email: "souppes@lespetitsbabadins.com", active: true, hours: "7h00 - 19h00" },
    { name: "Les P’tits Babadins 79260 La Crèche", city: "La Crèche", address: "ZA Baussais 7 rue Vasco de Gama", zip: "79260", phone: "06 19 64 60 89", email: "direction.lacreche@lespetitsbabadins.com", active: true, hours: "7h30 - 18h30" },
    { name: "La MC de St Quay Perros", city: "Saint-Quay-Perros", address: "8 résidence de Kroas Hent", zip: "22700", phone: "07 57 59 33 56", email: "stquayperros@lespetitsbabadins.com", active: true, hours: "7h30 - 18h30" },
    { name: "Les P’tits Babadins Pordic", city: "Pordic", address: "Rue de la Ville És Lan", zip: "22590", phone: "06 59 04 57 39", email: "pordic@lespetitsbabadins.com", active: true, hours: "7h30 - 18h30" },
    { name: "Crèche Expansion Savenay 2", city: "Savenay", address: "Parc d'Activité de la Colleraye", zip: "44260", phone: "06 66 17 81 42", email: "emilieguerin30@gmail.com", active: true, hours: "7h30 - 19h00" },
    { name: "Crèche Expansion Montluçon", city: "Montluçon", address: "217 Bis avenue John F Kennedy", zip: "03100", phone: "06 64 31 36 54", email: "montlucon@lespetitsbabadins.com", active: true, hours: "7h30 - 18h30" },
    { name: "Ptits Babadins Téloché", city: "Téloché", address: "ZA de la Bodinière", zip: "72220", phone: "07 81 01 88 22", email: "teloche@lespetitsbabadins.com", active: true, hours: "7h30 - 18h30" },
    { name: "MC de Louargat", city: "Louargat", address: "Rue de la Mairie", zip: "22540", phone: "06 23 98 80 51", email: "stquayperros@lespetitsbabadins.com", active: true, hours: "7h30 - 18h30" },
    { name: "LPB Masny-Aniche", city: "Masny", address: "Rue de la Fabrique", zip: "59176", phone: "06 74 41 36 16", email: "masny@lespetitsbabadins.com", active: true, hours: "7h00 - 19h00" },
    { name: "CRECHES EXPANSION Lorient", city: "Lorient", address: "1 Rue Jules Legrand", zip: "56100", phone: "07 69 63 40 66", email: "mellac@lespetitsbabadins.com", active: true, hours: "7h30 - 19h00" },
    { name: "Les P’tits Babadins de Pont Saint Esprit", city: "Pont-Saint-Esprit", address: "Avenue du Général de Gaulle", zip: "30130", phone: "06 82 96 24 00", email: "pontsaintesprit@lespetitsbabadins.com", active: true, hours: "7h30 - 18h30" },
    { name: "Les P’tits Babadins de Sigournais", city: "Sigournais", address: "2 rue des Vignes, Actipôle de Benêtre", zip: "85110", phone: "06 98 39 42 91", email: "sigournais@lespetitsbabadins.com", active: true, hours: "7h30 - 18h30" },
    { name: "Les P’tits Babadins de Bournezeau", city: "Bournezeau", address: "31 Rue de l'Oiselière", zip: "85480", phone: "06 98 39 42 91", email: "contact@lesptitsbabadins.com", active: true, hours: "7h30 - 18h30" },
    { name: "Les P’tits Babadins de Grosbreuil", city: "Grosbreuil", address: "Rue des Sports", zip: "85440", phone: "06 98 39 42 91", email: "sigournais@lespetitsbabadins.com", active: true, hours: "7h30 - 18h30" },
    { name: "Les p’tits Babadins de Saint Aubin du Cormier", city: "Saint-Aubin-du-Cormier", address: "ZA de la Motte", zip: "35140", phone: "07 56 27 77 70", email: "questembert@lespetitsbabadins.com", active: true, hours: "7h30 - 18h30" },

    // --- Group 2: New Additions (With Phone & Hours) ---
    { name: "Les p’tits Babadins de Questembert", address: "Rue des Fougères", zip: "56230", city: "Questembert", phone: "07 56 27 77 70", active: true, hours: "7h30 - 18h30" },
    { name: "Les p’tits Babadins d'Arzal", address: "Rue du Pont", zip: "56190", city: "Arzal", phone: "07 56 27 77 70", active: true, hours: "7h30 - 18h30" },
    { name: "Les p’tits Babadins de Melesse", address: "3 Rue du Tertre", zip: "35520", city: "Melesse", phone: "07 56 27 77 70", active: true, hours: "7h30 - 18h30" },
    { name: "Les p’tits Babadins de Pleuven", address: "7 Rue de l'Odet", zip: "29170", city: "Pleuven", phone: "07 56 27 77 70", active: true, hours: "7h30 - 18h30" },
    { name: "Micro crèche St agathon", address: "12 Rue d'Armor", zip: "22200", city: "Saint-Agathon", phone: "06 23 98 80 51", active: true, hours: "7h30 - 18h30" },
    { name: "Micro crèche de Saint Quay Perros", address: "Rue de la Liberté", zip: "22700", city: "Saint-Quay-Perros", phone: "07 57 59 33 56", active: true, hours: "7h30 - 18h30" },
    { name: "La Maison des Petits Maraichins", address: "30 Rue du Maréchal Joffre", zip: "85300", city: "Challans", phone: "07 55 60 75 11", active: true, hours: "7h30 - 19h00" },
    { name: "La Villa des Petits Garnachois", address: "Rue des Ciseleurs", zip: "85710", city: "La Garnache", phone: "07 55 60 75 11", active: true, hours: "7h30 - 19h00" },
    { name: "Les P’tits Babadins de St Hilaire", address: "12 Rue de la Mignelle", zip: "85270", city: "Saint-Hilaire-de-Riez", phone: "02 79 40 08 86", active: true, hours: "7h30 - 19h00" },
    { name: "Les P’tits Babadins de St Jean de Monts", address: "11 Rue des Chevilles", zip: "85160", city: "Saint-Jean-de-Monts", phone: "07 55 60 75 11", active: true, hours: "7h30 - 19h30" },
    { name: "Les P’tits Babadins d’Aizenay", address: "1 Rue Mgr Gendreau", zip: "85190", city: "Aizenay", phone: "07 55 60 75 11", active: true, hours: "7h30 - 19h00" },
    { name: "Les p'tits Babadins de Quéven", address: "34 Rue Fontaine de Barenton", zip: "56185", city: "Quéven", phone: "07 69 63 40 66", active: true, hours: "7h30 - 19h00" },
    { name: "Crèches Expansion Saintes", address: "83 Cours Maréchal Leclerc", zip: "17100", city: "Saintes", phone: "06 00 00 00 00", active: true, hours: "7h30 - 18h30" },
    { name: "Crèche Expansion Montbert", address: "Rue du Stade", zip: "44140", city: "Montbert", phone: "06 86 15 62 18", active: true, hours: "7h30 - 18h30" },
    { name: "La Ville Dieu Crèche", address: "50 chemin de Champredon", zip: "7170", city: "Lavilledieu", phone: "06 07 06 47 44", active: true, hours: "7h30 - 18h30" },
    { name: "Les P’tits Babadins de la Roche", address: "3 Rue des Entrepreneurs", zip: "85000", city: "La Roche-sur-Yon", phone: "06 62 10 19 83", active: true, hours: "7h30 - 19h00" },
    { name: "Les P’tits Babadins Saint-André d’Ornay", address: "3 Rue des Entrepreneurs", zip: "85000", city: "La Roche-sur-Yon", phone: "07 82 84 71 66", active: true, hours: "7h30 - 19h00" },
    { name: "Micro-crèche de La Roche (Wilson)", address: "50 Rue du Président Wilson", zip: "85000", city: "La Roche-sur-Yon", phone: "06 62 10 19 83", active: true, hours: "7h30 - 19h00" },
    { name: "Les P’tits Babadins Perpignan", address: "7 Allée Borée", zip: "66000", city: "Perpignan", phone: "06 81 30 04 27", active: true, hours: "7h30 - 19h00" },
    { name: "Crèches Expansion Lorient", address: "1 Rue Jules Legrand", zip: "56100", city: "Lorient", phone: "07 69 63 40 66", active: true, hours: "7h30 - 19h00" },
    { name: "Les P’tits Babadins St Vincent de Paul", address: "23 Rue des Deux Sèvres", zip: "33440", city: "Saint-Vincent-de-Paul", phone: "07 44 40 52 60", active: true, hours: "7h30 - 18h30" },
    { name: "Les p’tits Babadins St-Aubin-sur-Scie", address: "35 Rue Neuve", zip: "76550", city: "Saint-Aubin-sur-Scie", phone: "07 66 91 96 65", active: true, hours: "7h30 - 18h30" },
    { name: "Micro-crèche de Souppes", address: "02 Rue du Roulis", zip: "77460", city: "Souppes-sur-Loing", phone: "07 81 11 16 60", active: true, hours: "7h00 - 19h00" },
    { name: "Micro-crèche Les P’tits Babadins d’Olivet", address: "29 Rue Jules Marie Simon", zip: "45160", city: "Olivet", phone: "07 56 10 73 77", active: true, hours: "7h00 - 19h00" },
    { name: "Les P’tits Babadins de Tavers", address: "11 Rue des Grattelievres", zip: "45190", city: "Tavers", phone: "07 56 10 73 77", active: true, hours: "7h30 - 18h30" },
    { name: "Les P’tits Babadins Meung-sur-Loire", address: "3 Mail des Trois Roses", zip: "45130", city: "Meung-sur-Loire", phone: "07 56 10 73 77", active: true, hours: "7h30 - 18h30" },
    { name: "Les P’tits Pirates", address: "74 bis Rue de la Déhanne", zip: "22400", city: "Lamballe", phone: "06 02 71 58 96", active: true, hours: "7h30 - 18h30" },
    { name: "Les p'tits Babadins de Coëtmieux", address: "30 bis rue de la Truite", zip: "22400", city: "Coëtmieux", phone: "06 02 71 58 96", active: true, hours: "7h30 - 18h30" },
    { name: "Les P’tits Babadins Avermes", city: "Avermes", address: "11 Rue des Saccarauds", zip: "03000", phone: "06 62 30 64 40", active: true, hours: "7h30 - 18h30" },
    { name: "Les P’tits Babadins Baldersheim", city: "Baldersheim", address: "ZA 10 Rue des Chasseurs", zip: "68390", phone: "06 63 01 97 03", active: true, hours: "7h30 - 18h30" },
    { name: "Les P’tits Babadins Belleu", city: "Belleu", address: "62 route de Fère en Tardenois", zip: "02200", phone: "07 68 31 79 07", active: true, hours: "7h30 - 18h30" },
    { name: "Les P’tits Babadins Grussenheim", city: "Grussenheim", address: "62 route de Colmar", zip: "68320", phone: "06 77 34 73 24", active: true, hours: "7h30 - 18h30" },
    { name: "Les P’tits Babadins Hegenheim", city: "Hegenheim", address: "30 rue des Landes", zip: "68220", phone: "06 63 01 97 03", active: true, hours: "7h30 - 18h30" },
    { name: "Les P’tits Babadins Montivilliers", city: "Montivilliers", address: "3 impasse Edgar Degas", zip: "76290", phone: "09 73 39 65 98", active: true, hours: "7h30 - 18h30" },
    { name: "Les P’tits Babadins Pavilly", city: "Pavilly", address: "164 Boulevard Roger Fossé", zip: "76570", phone: "06 67 25 15 90", active: true, hours: "7h30 - 18h30" },
    { name: "Les P’tits Babadins Saint Chamond", city: "Saint Chamond", address: "2A rue Marc Seguin", zip: "42400", phone: "07 61 69 28 60", active: true, hours: "7h30 - 18h30" }
];


document.addEventListener('DOMContentLoaded', () => {
    console.log("Les p’tits Babadins - Site chargé");

    // LLM Optimization: Generate dynamic structured data for all crèches
    generateCrechesStructuredData();


    // Mobile Menu Toggle
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (mobileBtn) {
        mobileBtn.addEventListener('click', () => {
            const isVisible = navLinks.style.display === 'flex';
            navLinks.style.display = isVisible ? 'none' : 'flex';

            // Basic styling for mobile menu when active
            if (!isVisible) {
                navLinks.style.position = 'absolute';
                navLinks.style.top = '100%';
                navLinks.style.left = '0';
                navLinks.style.right = '0';
                navLinks.style.flexDirection = 'column';
                navLinks.style.background = 'white';
                navLinks.style.padding = '2rem';
                navLinks.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
                navLinks.style.textAlign = 'center';
            } else {
                navLinks.style = ''; // Reset to css defaults
            }
        });
    }

    // Smooth Scroll for Anchor Links (polishing behavior)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#' || targetId.includes('.html')) return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault(); // Only prevent default if it's purely a scroll
                // Close mobile menu if open
                if (window.innerWidth <= 768 && navLinks) {
                    navLinks.style.display = 'none';
                }

                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Reveal animations on scroll
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.value-card, h2, .btn').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });

    // Add the visible class style dynamically
    const style = document.createElement('style');
    style.innerHTML = `
    .visible {
    opacity: 1!important;
    transform: translateY(0)!important;
}
`;
    document.head.appendChild(style);

    // Dynamic Daycare Listing
    const crechesContainer = document.getElementById('creches-list-container');
    if (crechesContainer) {
        const creches = crechesData; // Use localized variable
        const searchInput = document.querySelector('.search-input');
        const searchBtn = document.querySelector('.btn-primary'); // Search button

        function renderCreches(filter = "") {
            crechesContainer.innerHTML = '';
            const lowerFilter = filter.toLowerCase();

            const filtered = creches.filter(c =>
                c.name.toLowerCase().includes(lowerFilter) ||
                c.city.toLowerCase().includes(lowerFilter)
            );

            if (filtered.length === 0) {
                crechesContainer.innerHTML = '<p style="grid-column: 1/-1; text-align: center;">Aucune crèche trouvée pour votre recherche.</p>';
                return;
            }

            filtered.forEach(c => {
                const card = document.createElement('div');
                card.className = 'creche-card'; // Reuse style

                // Randomly select one of the available images
                const images = ['images/hero_child.webp']; // Ideally we would have more images here
                // Since we only have one image, we'll use it. 

                // Generate a deterministic hash from the name to get a consistent unique image
                // Generate a deterministic hash from the name to get a consistent unique image
                let hash = 0;
                for (let i = 0; i < c.name.length; i++) {
                    hash = c.name.charCodeAt(i) + ((hash << 5) - hash);
                }
                const lockId = Math.abs(hash % 1000);

                // Check for specific daycares that should keep the Hero image
                const specialDaycares = [
                    "CRECHES EXPANSION Lorient",
                    "Ptits Babadins Téloché",
                    "Crèche Expansion Savenay 2",
                    "Les P’tits Babadins 79260 La Crèche",
                    "Les P’tits Babadins d’Aizenay",
                    "Les p'tits Babadins de Quéven",
                    "Micro-crèche de La Roche (Wilson)"
                ];

                let imgUrl;
                if (specialDaycares.includes(c.name)) {
                    imgUrl = 'images/hero_child_right.webp';
                } else {
                    // Use keywords combining "child" AND "daycare context"
                    const keywords = ['child,daycare', 'toddler,nursery', 'baby,playing,daycare', 'kids,kindergarten', 'child,playgroup'];
                    const keywordIndex = Math.abs(hash % keywords.length);
                    const category = keywords[keywordIndex];
                    imgUrl = `https://loremflickr.com/400/300/${category}?lock=${lockId}`;
                }

                card.innerHTML = `
            <div style="height: 200px; overflow: hidden; position: relative;">
               <img src="${imgUrl}" alt="${c.name}" width="300" height="200" loading="lazy" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.3s ease;">
               <div style="position: absolute; bottom: 0; left: 0; right: 0; background: linear-gradient(to top, rgba(0,0,0,0.8), transparent); padding: 10px; color: white;">
                  <span style="font-weight: bold; font-size: 1.1rem;">${c.city}</span>
               </div>
            </div>
            <div class="creche-content">
                <h3 style="min-height: 3rem;">${c.name}</h3>
                <div class="creche-meta" style="font-size: 0.95rem; line-height: 1.6;">
                    ${c.address ? '📍 ' + c.address + '<br>' : ''}
                    ${c.zip || c.city ? (c.zip ? c.zip + ' ' : '') + c.city + '<br>' : ''}
                    ${c.phone ? '📞 ' + c.phone + '<br>' : ''}
                    ${c.hours ? '⏰ ' + c.hours + '<br>' : ''}
                    <div style="margin-top: 5px;">
                        ${c.active ? '<span style="color:var(--brand-green); font-weight:bold;">● Ouverte</span>' : '<span style="color:var(--brand-orange); font-weight:bold;">● Bientôt</span>'}
                    </div>
                </div>
                    <div style="margin-top: auto; padding-top: 1rem;">
                        <a href="creche-details.html?name=${encodeURIComponent(c.name)}" class="btn btn-outline" style="display: block; text-align: center; width: 100%;">Voir la crèche</a>
                    </div>
                </div>
            </div>
          `;
                crechesContainer.appendChild(card);
            });
        }

        // Initial Render
        // Check for search param from index page
        const params = new URLSearchParams(window.location.search);
        const initialSearch = params.get('search') || "";

        if (searchInput && initialSearch) {
            searchInput.value = initialSearch;
        }

        renderCreches(initialSearch);

        // Search Events
        if (searchInput) {
            searchInput.addEventListener('input', (e) => renderCreches(e.target.value));
        }
        if (searchBtn && searchInput) {
            searchBtn.addEventListener('click', () => renderCreches(searchInput.value));
        }
    }

    // Detail Page Logic
    const detailContainer = document.getElementById('creche-detail-container');
    if (detailContainer) {
        const params = new URLSearchParams(window.location.search);
        const crecheName = params.get('name');

        // Find the dayare
        // Note: crechesData must be available (defined in top of main.js or imported)
        // Since main.js runs and defines crechesData *before* this runs automatically, it works 
        // because crechesData is const at top level of file, available to this scope.
        const creche = crechesData.find(c => c.name === crecheName);

        if (creche) {
            // Re-generate the image to match the listing
            let hash = 0;
            for (let i = 0; i < creche.name.length; i++) {
                hash = creche.name.charCodeAt(i) + ((hash << 5) - hash);
            }
            const lockId = Math.abs(hash % 1000);

            // Check for specific daycares (same list as listing)
            const specialDaycares = [
                "CRECHES EXPANSION Lorient",
                "Ptits Babadins Téloché",
                "Crèche Expansion Savenay 2",
                "Les P’tits Babadins 79260 La Crèche",
                "Les P’tits Babadins d’Aizenay",
                "Les p'tits Babadins de Quéven",
                "Micro-crèche de La Roche (Wilson)"
            ];

            let imgUrl;
            if (specialDaycares.includes(creche.name)) {
                imgUrl = 'images/hero_child_right.webp';
            } else {
                const keywords = ['child,daycare', 'toddler,nursery', 'baby,playing,daycare', 'kids,kindergarten', 'child,playgroup'];

                const keywordIndex = Math.abs(hash % keywords.length);
                const category = keywords[keywordIndex];
                imgUrl = `https://loremflickr.com/800/400/${category}?lock=${lockId}`;
            }

            // Logic for Related Daycares (Random 6)
            const relatedDaycares = crechesData
                .filter(c => c.name !== creche.name)
                .sort(() => 0.5 - Math.random())
                .slice(0, 6)
                .map(c => {
                    let h = 0;
                    for (let i = 0; i < c.name.length; i++) h = c.name.charCodeAt(i) + ((h << 5) - h);
                    const lid = Math.abs(h % 1000);
                    let url;
                    if (specialDaycares.includes(c.name)) {
                        url = 'images/hero_child_right.webp';
                    } else {
                        const k = ['child,daycare', 'toddler,nursery', 'baby,playing,daycare'];
                        url = `https://loremflickr.com/400/300/${k[Math.abs(h % k.length)]}?lock=${lid}`;
                    }
                    return { ...c, imgUrl: url };
                });

            detailContainer.innerHTML = `
                <div class="details-hero" style="background-image: url('${imgUrl}');">
                    <div class="details-hero-content">
                        <h1>${creche.name}</h1>
                        <p>${creche.city}</p>
                    </div>
                </div>

                <div class="details-container">
                    
                    <!-- 1. Visite 360 & Galerie -->
                    <div style="margin-bottom: 3rem;">
                        <h2 style="color: var(--brand-blue-dark); text-align: center; margin-bottom: 1.5rem;">Découvrir la crèche</h2>
                        
                        <!-- Video 360 Placeholder -->
                        <div style="background: black; border-radius: var(--radius-lg); overflow: hidden; height: 350px; position: relative; margin-bottom: 2rem; box-shadow: var(--shadow-md);">
                            <img src="images/social_outdoor_play.webp" style="width: 100%; height: 100%; object-fit: cover; opacity: 0.7;">
                            <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); text-align: center; color: white;">
                                <div style="font-size: 4rem; margin-bottom: 0.5rem;">↻</div>
                                <span style="font-size: 1.2rem; font-weight: bold;">Visite Virtuelle 360°</span>
                                <button class="btn btn-primary" style="margin-top: 1rem;">Lancer la visite</button>
                            </div>
                        </div>

                        <!-- Photo Gallery (Carousel) -->
                        <div style="position: relative; padding: 0 3rem;">
                            <button onclick="window.scrollContainer('gallery-track', -1)" style="position: absolute; left: 0; top: 50%; transform: translateY(-50%); z-index: 10; background: white; border: 1px solid #ddd; width: 40px; height: 40px; border-radius: 50%; box-shadow: var(--shadow-md); cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; color: var(--brand-blue-dark);">&lsaquo;</button>
                            <button onclick="window.scrollContainer('gallery-track', 1)" style="position: absolute; right: 0; top: 50%; transform: translateY(-50%); z-index: 10; background: white; border: 1px solid #ddd; width: 40px; height: 40px; border-radius: 50%; box-shadow: var(--shadow-md); cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; color: var(--brand-blue-dark);">&rsaquo;</button>
                        
                            <div id="gallery-track" style="display: flex; gap: 1rem; overflow-x: auto; scroll-snap-type: x mandatory; scroll-behavior: smooth; scrollbar-width: none; padding: 10px 0;">
                                <img src="images/pedago_motricite.webp" style="flex: 0 0 auto; width: 200px; height: 150px; object-fit: cover; border-radius: var(--radius-md); scroll-snap-align: center; cursor: pointer; transition: transform 0.2s;" onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
                                <img src="images/blog_alimentation_bebe.webp" style="flex: 0 0 auto; width: 200px; height: 150px; object-fit: cover; border-radius: var(--radius-md); scroll-snap-align: center; cursor: pointer; transition: transform 0.2s;" onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
                                <img src="images/social_art_painting.webp" style="flex: 0 0 auto; width: 200px; height: 150px; object-fit: cover; border-radius: var(--radius-md); scroll-snap-align: center; cursor: pointer; transition: transform 0.2s;" onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
                                <img src="images/social_story_time.webp" style="flex: 0 0 auto; width: 200px; height: 150px; object-fit: cover; border-radius: var(--radius-md); scroll-snap-align: center; cursor: pointer; transition: transform 0.2s;" onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
                                <img src="images/social_garden_activity.webp" style="flex: 0 0 auto; width: 200px; height: 150px; object-fit: cover; border-radius: var(--radius-md); scroll-snap-align: center; cursor: pointer; transition: transform 0.2s;" onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
                            </div>
                        </div>
                    </div>

                    <!-- 2. Infos Pratiques (Grid) -->
                    <div class="info-grid">
                        <div class="info-card">
                            <h3>📍 Coordonnées</h3>
                            <p><strong>Adresse :</strong><br>${creche.address || 'Adresse non communiquée'}<br>${creche.zip || ''} ${creche.city}</p>
                            ${creche.phone ? `<p style="margin-top:1rem;"><strong>📞 Téléphone :</strong><br>${creche.phone}</p>` : ''}
                            ${creche.email ? `<p style="margin-top:1rem;"><strong>📧 Email :</strong><br><a href="mailto:${creche.email}">${creche.email}</a></p>` : ''}
                        </div>
                        <div class="info-card">
                            <h3>⏰ Horaires & Infos</h3>
                            <p><strong>Ouverture :</strong><br>${creche.hours || '7h30 - 18h30'}</p>
                            <p style="margin-top:1rem;"><strong>Statut :</strong><br>
                                ${creche.active ? '<span style="color:var(--brand-green); font-weight:bold;">● Ouverte</span>' : '<span style="color:var(--brand-orange); font-weight:bold;">● Ouverture Prochaine</span>'}
                            </p>
                            <p style="margin-top:1rem;"><strong>Capacité :</strong><br>12 Berceaux</p>
                        </div>
                    </div>

                    <!-- 3. À propos -->
                    <div class="info-card" style="margin-top: 2rem;">
                        <h3>À propos de la crèche</h3>
                        <p>Bienvenue chez <strong>${creche.name}</strong> !</p>
                        <p>Notre structure à ${creche.city} accueille vos enfants dans un cadre bienveillant et sécurisé, spécialement conçu pour leur épanouissement. Notre équipe de professionnels de la petite enfance veille au bien-être et au développement de chacun, en proposant des activités ludiques et éducatives adaptées à chaque âge (Montessori, Pikler...).</p>
                        
                        <div style="margin-top: 2rem; text-align: center;">
                            <a href="pre-inscription.html?creche=${encodeURIComponent(creche.name)}" class="btn btn-primary" style="font-size: 1.1rem; padding: 0.8rem 2rem;">Faire une demande de place</a>
                        </div>
                    </div>

                    <!-- 4. Related Daycares -->
                    <div style="margin-top: 4rem;">
                        <h3 style="color: var(--brand-blue-dark); margin-bottom: 1.5rem; border-bottom: 2px solid #eee; padding-bottom: 0.5rem;">Ces crèches pourraient aussi vous intéresser</h3>
                        <div style="position: relative; padding: 0 3rem;">
                            <button onclick="window.scrollContainer('related-track', -1)" style="position: absolute; left: 0; top: 50%; transform: translateY(-50%); z-index: 10; background: white; border: 1px solid #ddd; width: 40px; height: 40px; border-radius: 50%; box-shadow: var(--shadow-md); cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; color: var(--brand-blue-dark);">&lsaquo;</button>
                            <button onclick="window.scrollContainer('related-track', 1)" style="position: absolute; right: 0; top: 50%; transform: translateY(-50%); z-index: 10; background: white; border: 1px solid #ddd; width: 40px; height: 40px; border-radius: 50%; box-shadow: var(--shadow-md); cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; color: var(--brand-blue-dark);">&rsaquo;</button>

                            <div id="related-track" style="display: flex; gap: 1.5rem; overflow-x: auto; scroll-snap-type: x mandatory; scroll-behavior: smooth; scrollbar-width: none; padding: 10px 0;">
                                ${relatedDaycares.map(related => `
                                    <div style="flex: 0 0 auto; width: 280px; scroll-snap-align: center; background: white; border: 1px solid #eee; border-radius: var(--radius-md); overflow: hidden; box-shadow: var(--shadow-sm);">
                                        <div style="height: 150px; background: #eee;">
                                            <img src="${related.imgUrl}" style="width:100%; height:100%; object-fit: cover;" alt="${related.name}" loading="lazy">
                                        </div>
                                        <div style="padding: 1rem;">
                                            <h4 style="margin-bottom:0.5rem; color: var(--brand-blue-dark);">${related.name}</h4>
                                            <p style="font-size:0.9rem; color:#666;">${related.city}</p>
                                            <a href="creche-details.html?name=${encodeURIComponent(related.name)}" style="display:block; margin-top:0.5rem; color:var(--brand-pink); font-weight:bold;">Voir la fiche →</a>
                                        </div>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    </div>

                    <!-- 5. Blog Article Suggestion (Carousel) -->
                    <div style="margin-top: 4rem;">
                        <h3 style="color: var(--brand-blue-dark); margin-bottom: 1.5rem; border-bottom: 2px solid #eee; padding-bottom: 0.5rem;">À lire sur le blog</h3>
                        <div style="position: relative; padding: 0 3rem;">
                            <button onclick="window.scrollContainer('blog-track', -1)" style="position: absolute; left: 0; top: 50%; transform: translateY(-50%); z-index: 10; background: white; border: 1px solid #ddd; width: 40px; height: 40px; border-radius: 50%; box-shadow: var(--shadow-md); cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; color: var(--brand-blue-dark);">&lsaquo;</button>
                            <button onclick="window.scrollContainer('blog-track', 1)" style="position: absolute; right: 0; top: 50%; transform: translateY(-50%); z-index: 10; background: white; border: 1px solid #ddd; width: 40px; height: 40px; border-radius: 50%; box-shadow: var(--shadow-md); cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; color: var(--brand-blue-dark);">&rsaquo;</button>

                            <div id="blog-track" style="display: flex; gap: 1.5rem; overflow-x: auto; scroll-snap-type: x mandatory; scroll-behavior: smooth; scrollbar-width: none; padding: 10px 0;">
                                <!-- Article 1 -->
                                <div style="flex: 0 0 auto; width: 300px; scroll-snap-align: center; background: var(--color-beige-light); border-radius: var(--radius-lg); overflow: hidden; display: flex; flex-direction: column; box-shadow: var(--shadow-sm);">
                                    <img src="images/blog_adaptation_creche.webp" style="width: 100%; height: 180px; object-fit: cover;" alt="Adaptation">
                                    <div style="padding: 1.5rem; flex: 1; display: flex; flex-direction: column;">
                                        <h4 style="font-size: 1.1rem; margin-bottom: 0.5rem; color: var(--brand-blue-dark);">Réussir l'adaptation</h4>
                                        <p style="font-size: 0.9rem; margin-bottom: 1rem; flex: 1;">Conseils pour une séparation en douceur pour bébé et parents.</p>
                                        <a href="blog.html" class="btn btn-secondary" style="font-size: 0.9rem; align-self: start;">Lire l'article</a>
                                    </div>
                                </div>
                                <!-- Article 2 -->
                                <div style="flex: 0 0 auto; width: 300px; scroll-snap-align: center; background: var(--color-beige-light); border-radius: var(--radius-lg); overflow: hidden; display: flex; flex-direction: column; box-shadow: var(--shadow-sm);">
                                    <img src="images/blog_motricite_libre.webp" style="width: 100%; height: 180px; object-fit: cover;" alt="Motricité">
                                    <div style="padding: 1.5rem; flex: 1; display: flex; flex-direction: column;">
                                        <h4 style="font-size: 1.1rem; margin-bottom: 0.5rem; color: var(--brand-blue-dark);">La motricité libre</h4>
                                        <p style="font-size: 0.9rem; margin-bottom: 1rem; flex: 1;">Pourquoi laisser l'enfant découvrir ses mouvements seul ?</p>
                                        <a href="blog.html" class="btn btn-secondary" style="font-size: 0.9rem; align-self: start;">Lire l'article</a>
                                    </div>
                                </div>
                                <!-- Article 3 -->
                                <div style="flex: 0 0 auto; width: 300px; scroll-snap-align: center; background: var(--color-beige-light); border-radius: var(--radius-lg); overflow: hidden; display: flex; flex-direction: column; box-shadow: var(--shadow-sm);">
                                    <img src="images/blog_sommeil_bebe.webp" style="width: 100%; height: 180px; object-fit: cover;" alt="Sommeil">
                                    <div style="padding: 1.5rem; flex: 1; display: flex; flex-direction: column;">
                                        <h4 style="font-size: 1.1rem; margin-bottom: 0.5rem; color: var(--brand-blue-dark);">Le sommeil de bébé</h4>
                                        <p style="font-size: 0.9rem; margin-bottom: 1rem; flex: 1;">Comprendre les cycles et mettre en place des rituels.</p>
                                        <a href="blog.html" class="btn btn-secondary" style="font-size: 0.9rem; align-self: start;">Lire l'article</a>
                                    </div>
                                </div>
                                <!-- Article 4 -->
                                <div style="flex: 0 0 auto; width: 300px; scroll-snap-align: center; background: var(--color-beige-light); border-radius: var(--radius-lg); overflow: hidden; display: flex; flex-direction: column; box-shadow: var(--shadow-sm);">
                                    <img src="images/blog_alimentation_bebe.webp" style="width: 100%; height: 180px; object-fit: cover;" alt="Alimentation">
                                    <div style="padding: 1.5rem; flex: 1; display: flex; flex-direction: column;">
                                        <h4 style="font-size: 1.1rem; margin-bottom: 0.5rem; color: var(--brand-blue-dark);">L'alimentation</h4>
                                        <p style="font-size: 0.9rem; margin-bottom: 1rem; flex: 1;">Diversification menée par l'enfant (DME) et repas bio.</p>
                                        <a href="blog.html" class="btn btn-secondary" style="font-size: 0.9rem; align-self: start;">Lire l'article</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- 6. Newsletter -->
                    <div style="margin-top: 4rem; background: var(--brand-blue-dark); color: white; border-radius: var(--radius-lg); padding: 2rem; text-align: center;">
                        <h3 style="color: white; margin-bottom: 1rem;">Restez informés !</h3>
                        <p style="max-width: 600px; margin: 0 auto 1.5rem;">Inscrivez-vous à notre newsletter pour recevoir nos actualités et conseils d'experts.</p>
                        <form onsubmit="event.preventDefault(); alert('Merci pour votre inscription !');" style="display: flex; gap: 0.5rem; justify-content: center; max-width: 400px; margin: 0 auto;">
                            <input type="email" placeholder="Votre email" style="padding: 0.8rem; border-radius: var(--radius-sm); border: none; flex: 1;">
                            <button type="submit" class="btn btn-primary" style="background: var(--brand-orange); border: none;">S'inscrire</button>
                        </form>
                    </div>

                </div>
            `;
        } else {
            detailContainer.innerHTML = `
                <div class="container" style="padding: 100px 0; text-align: center;">
                    <h2>Crèche introuvable</h2>
                    <p>Désolé, nous ne trouvons pas la crèche demandée.</p>
                    <a href="creches.html" class="btn btn-primary" style="margin-top: 20px;">Retour à la liste</a>
                </div>
            `;
        }
    }

    // Pre-inscription Form Logic: Dynamic Population & Pre-selection
    const crecheSelect = document.getElementById('creche');
    if (crecheSelect && typeof crechesData !== 'undefined') {
        // Keep the first default option
        const defaultOption = crecheSelect.firstElementChild;
        const unknownOption = crecheSelect.querySelector('option[value="unknown"]');

        // Clear options but keep the default and 'Je ne sais pas encore' if possible, or just rebuild
        crecheSelect.innerHTML = '';
        if (defaultOption) crecheSelect.appendChild(defaultOption);

        // Sort creches alphabetically
        const sortedCreches = [...crechesData].sort((a, b) => a.name.localeCompare(b.name));

        sortedCreches.forEach(c => {
            const option = document.createElement('option');
            option.value = c.name;
            option.textContent = `${c.name} (${c.city})`;
            crecheSelect.appendChild(option);
        });

        // Add 'Je ne sais pas encore' at the end
        if (unknownOption) {
            crecheSelect.appendChild(unknownOption);
        } else {
            const opt = document.createElement('option');
            opt.value = "unknown";
            opt.textContent = "Je ne sais pas encore";
            crecheSelect.appendChild(opt);
        }

        // Pre-select if param exists
        const params = new URLSearchParams(window.location.search);
        const targetCreche = params.get('creche');
        if (targetCreche) {
            // Decode URI component isn't strictly necessary with logic above but good practice
            // We need to match the value exactly. 
            // The param might be just name.
            // Try to find the option with that value
            // decodeURIComponent is handled by URLSearchParams.get() automatically usually, but let's be safe
            // Actually URLSearchParams does decode usually.

            // Search for exact match or partial (if name varies slightly)
            // But our links generate exact names.
            crecheSelect.value = targetCreche;
        }
    }
});

// Generic scroll function for any container
window.scrollContainer = function (elementId, direction) {
    const track = document.getElementById(elementId);
    if (track) {
        const itemWidth = track.firstElementChild ? track.firstElementChild.getBoundingClientRect().width : 200;
        const scrollAmount = itemWidth + 20; // width + approximate gap
        track.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
    }
};

/**
 * LLM Optimization: Generates JSON-LD structured data for all crèches
 * This helps IA search engines understand the full network distribution.
 */
function generateCrechesStructuredData() {
    if (typeof crechesData === 'undefined' || !crechesData.length) return;

    const schema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "Liste des micro-crèches Les p’tits Babadins",
        "description": "Annuaire complet des micro-crèches du réseau Les p’tits Babadins en France.",
        "numberOfItems": crechesData.length,
        "itemListElement": crechesData.map((creche, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "item": {
                "@type": "ChildCare",
                "name": creche.name,
                "address": {
                    "@type": "PostalAddress",
                    "addressLocality": creche.city,
                    "postalCode": creche.zip || "",
                    "streetAddress": creche.address || "",
                    "addressCountry": "FR"
                },
                "telephone": creche.phone || "",
                "openingHours": creche.hours || "Mo-Fr 07:30-18:30"
            }
        }))
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);
}

