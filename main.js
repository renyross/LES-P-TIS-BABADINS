let crechesData = [
    // --- Group 1: From Initial Lists (Enriched) ---
    { name: "Les P'tits Babadins de Marssac sur Tarn", slug: "marssac-sur-tarn", link: "creche-marssac-sur-tarn", city: "Marssac sur Tarn", address: "9 avenue de la Pelatié", zip: "81150", phone: "09 70 75 65 39", email: "direction.marssacsurtarn@lespetitsbabadins.com", active: true, hours: "07h30 - 19h00" },
    { name: "Les P’tits Babadins de Mellac", slug: "les-ptits-babadins-de-mellac", link: "creche-les-ptits-babadins-de-mellac", city: "Mellac", address: "20 rue Ferdinand Buisson", zip: "29300", phone: "07 69 63 40 66", email: "mellac@lespetitsbabadins.com", active: true, hours: "07h00 - 19h00" },
    { name: "Les p'tits babadins de Quimperlé", slug: "les-ptits-babadins-de-quimperle", link: "creche-les-ptits-babadins-de-quimperle", city: "Quimperlé", address: "2 rue d'Athenry", zip: "29300", phone: "07 69 63 40 66", email: "quimperle@lespetitsbabadins.com", active: true, hours: "07h00 - 19h00" },
    { name: "Au Pays des Sens", slug: "au-pays-des-sens", link: "creche-au-pays-des-sens", city: "Saint Germain du Puy", address: "1 allée colette", zip: "18390", phone: "02 48 24 17 52 / 07 69 09 12 62", email: "creche.aupaysdessens@ce-lpbx.com", active: true, hours: "7h30 - 18h30" },
    { name: "Les P’tits Babadins de Souppes", slug: "les-ptits-babadins-de-souppes", link: "creche-les-ptits-babadins-de-souppes", city: "Souppes-sur-Loing", address: "2 Rue du Roulis", zip: "77460", phone: "07 81 11 16 60", email: "souppes@lespetitsbabadins.com", active: true, hours: "7h00 - 19h00" },
    { name: "Les P’tits Babadins 79260 La Crèche", slug: "les-ptits-babadins-79260-la-creche", link: "creche-les-ptits-babadins-79260-la-creche", city: "La Crèche", address: "ZA Baussais 7 rue Vasco de Gama", zip: "79260", phone: "06 19 64 60 89", email: "direction.lacreche@lespetitsbabadins.com", active: true, hours: "7h30 - 18h30" },

    { name: "Les P’tits Babadins Pordic", slug: "les-ptits-babadins-pordic", link: "creche-les-ptits-babadins-pordic", city: "Pordic", address: "Zone de Kéribet (en face de Les Compagnons des Saisons)", zip: "22590", phone: "02 96 78 07 22", email: "creche.pordic@ce-lpbsx.com", active: true, hours: "7h30 - 19h" },
    { name: "Crèche Expansion Savenay 1", slug: "creche-expansion-savenay-1", link: "creche-creche-expansion-savenay-1", city: "Savenay", address: "Parc d'Activité de la Colleraye", zip: "44260", phone: "06 66 17 81 42", email: "emilieguerin30@gmail.com", active: true, hours: "7h00 - 19h00 (Du lundi au samedi)" },
    { name: "Ptits Babadins Téloché", slug: "ptits-babadins-teloche", link: "creche-ptits-babadins-teloche", city: "Téloché", address: "ZA du Gué 1 impasse des Sources", zip: "72220", phone: "07 81 01 88 22", email: "teloche@lespetitsbabadins.com", active: true, hours: "7h00 - 18h45" },
    { name: "MC de Louargat", slug: "mc-de-louargat", link: "creche-mc-de-louargat", city: "Louargat", address: "Rue de la Mairie", zip: "22540", phone: "06 23 98 80 51", email: "stquayperros@lespetitsbabadins.com", active: true, hours: "7h30 - 18h30" },
    { name: "Les p'tits Babadins de Wargnies le Grand", slug: "les-ptits-babadins-de-wargnies-le-grand", link: "creche-les-ptits-babadins-de-wargnies-le-grand", city: "Wargnies-le-Grand", address: "ZA de la Vallée de l'Aunelle, 8 N Route nationale", zip: "59144", phone: "06 73 51 78.63", email: "creche.wargnies@ce-lpbx.com", active: true, hours: "7h30 - 18h30" },
    { name: "Les p'tits Babadins de Lorient", slug: "creches-expansion-lorient", link: "creche-creches-expansion-lorient", city: "Lorient", address: "1 rue Jules Le Grand", zip: "56100", phone: "07 69 63 40 66", email: "mellac@lespetitsbabadins.com", active: true, hours: "07h00 - 19h00" },
    { name: "Les P’tits Babadins de Pont Saint Esprit", slug: "les-ptits-babadins-de-pont-saint-esprit", link: "creche-les-ptits-babadins-de-pont-saint-esprit", city: "Pont-Saint-Esprit", address: "320 chemin de la mouette", zip: "30130", phone: "06 45 20 12 39", email: "creche.pontsaintesprit@ce-lpbx.com", active: true, hours: "7h00 - 19h00", description: "<p>Située au 320 chemin de la Mouette à Pont Saint Esprit, notre micro crèche est ouverte de 7h à 19h du lundi au vendredi et peut accueillir 12 enfants âgés de 10 semaines à 3 ans.</p><p>L'équipe composée de 4 professionnels(les) de la petite enfance sera ravie de vous accueillir dans un cadre chaleureux et adapté au bien-être et au développement de votre enfant.</p><p>Notre travail au quotidien est d'accompagner votre enfant dans ses apprentissages en respectant son rythme, en créant un environnement sécurisé et propice aux expérimentations et en le laissant faire ses propres choix.</p><p>La micro crèche est aménagée de façon à créer des repères pour que votre enfant se sente libre de grandir et d'aller à la rencontre de l'autre.</p><p>Pour faciliter la verbalisation nous nous servons de la communication gestuelle, et une salle Snoezelen permet l'exploration des sens.</p><p>Notre micro-crèche est aussi un lieu d’accueil pour les familles. Notre mission est également d'être à votre écoute afin de vous accompagner au mieux dans votre parentalité.</p><p>Des temps d’échanges sont proposés tout au long de l'année : activité partagée avec vos enfants, café/parent autour d'un thème spécifique, sortie, réunion d'information ...</p><p>Notre souhait est que chaque parent et enfant trouvent sa place dans les meilleures conditions, c'est pourquoi nous vous proposons un accueil adapté à vos besoins.</p><p>Vous cherchez une place et vous souhaitez un accueil chaleureux et familial ? Alors n'hésitez plus et contacter nous pour plus de renseignements.</p><p>A très bientôt à la micro crèche Les p'tits Babadins de Pont Saint Esprit !</p>" },
    { name: "Les P’tits Babadins de Sigournais", slug: "les-ptits-babadins-de-sigournais", link: "creche-les-ptits-babadins-de-sigournais", city: "Sigournais", address: "2 rue des Vignes, Actipôle de Benêtre", zip: "85110", phone: "06 98 39 42 91", email: "creche.sigournais@ce-lpbx.com", active: true, hours: "7h00 - 19h00" },
    { name: "Les P’tits Babadins de Bournezeau", slug: "les-ptits-babadins-de-bournezeau", link: "creche-les-ptits-babadins-de-bournezeau", city: "Bournezeau", address: "31 Rue de l'Oiselière", zip: "85480", phone: "06 98 39 42 91", email: "creche.bournezeau@ce-lpbx.com", active: true, hours: "7h00 - 18h30" },
    { name: "Les P’tits Babadins de Grosbreuil", slug: "les-ptits-babadins-de-grosbreuil", link: "creche-les-ptits-babadins-de-grosbreuil", city: "Grosbreuil", address: "Rue des Sports", zip: "85440", phone: "06 98 39 42 91", email: "sigournais@lespetitsbabadins.com", active: true, hours: "7h30 - 18h30" },
    { name: "Les p’tits Babadins de Saint Aubin du Cormier", slug: "les-ptits-babadins-de-saint-aubin-du-cormier", link: "creche-les-ptits-babadins-de-saint-aubin-du-cormier", city: "Saint-Aubin-du-Cormier", address: "1 Rue du Trégor", zip: "35140", phone: "07 56 27 77 70", email: "questembert@lespetitsbabadins.com", active: true, hours: "7h00 - 19h00" },

    // --- Group 2: New Additions (With Phone & Hours) ---
    { name: "Les p’tits Babadins de Questembert", slug: "les-ptits-babadins-de-questembert", link: "creche-les-ptits-babadins-de-questembert", address: "2 Impasse du Verger", zip: "56230", city: "Questembert", phone: "07 56 27 77 70", active: true, hours: "7h30 - 19h00" },
    { name: "Les p’tits Babadins de Melesse", slug: "les-ptits-babadins-de-melesse", link: "creche-les-ptits-babadins-de-melesse", address: "11 rue des Olivettes", zip: "35520", city: "Melesse", phone: "07 56 27 77 70", active: true, hours: "7h00 - 19h00" },
    { name: "Les p’tits Babadins de Pleuven", slug: "les-ptits-babadins-de-pleuven", link: "creche-les-ptits-babadins-de-pleuven", address: "12 Ter Ty Keravec", zip: "29170", city: "Pleuven", phone: "07 56 27 77 70", active: true, hours: "7h30 - 19h00" },

    { name: "La Maison des Petits Maraichins", slug: "la-maison-des-petits-maraichins", link: "creche-la-maison-des-petits-maraichins", address: "30 Rue du Maréchal Joffre", zip: "85300", city: "Challans", phone: "07 55 60 75 11", active: true, hours: "7h30 - 19h00" },
    { name: "La Villa des Petits Garnachois", slug: "la-villa-des-petits-garnachois", link: "creche-la-villa-des-petits-garnachois", address: "Rue des Ciseleurs", zip: "85710", city: "La Garnache", phone: "07 55 60 75 11", active: true, hours: "7h30 - 19h00" },
    { name: "Les P’tits Babadins de St Hilaire", slug: "les-ptits-babadins-de-st-hilaire", link: "creche-les-ptits-babadins-de-st-hilaire", address: "12 Rue de la Mignelle", zip: "85270", city: "Saint-Hilaire-de-Riez", phone: "02 79 40 08 86", active: true, hours: "7h30 - 19h00" },

    { name: "Les p'tits Babadins de Quéven", slug: "les-ptits-babadins-de-queven", link: "creche-les-ptits-babadins-de-queven", address: "34 Rue Fontaine de Barenton", zip: "56530", city: "Quéven", phone: "07 69 63 40 66", active: true, hours: "07h00 - 19h00" },
    { name: "Crèches Expansion Saintes", slug: "creches-expansion-saintes", link: "creche-creches-expansion-saintes", address: "83 Cours Maréchal Leclerc", zip: "17100", city: "Saintes", phone: "06 00 00 00 00", active: true, hours: "7h30 - 18h30" },
    { name: "Les p’tits Babadins de Montbert", slug: "les-ptits-babadins-de-montbert", link: "creche-les-ptits-babadins-de-montbert", address: "1 rue des Loges", zip: "44140", city: "Montbert", phone: "06 86 15 62 18", email: "creche.montbert@ce-lpbx.com", active: true, hours: "8h - 18h30" },
    { name: "La Ville Dieu Crèche", slug: "la-ville-dieu-creche", link: "creche-la-ville-dieu-creche", address: "50 chemin de Champredon", zip: "7170", city: "Lavilledieu", phone: "06 07 06 47 44", active: true, hours: "7h30 - 18h30" },
    { name: "Les P’tits Babadins de la Roche", slug: "les-ptits-babadins-de-la-roche", link: "creche-les-ptits-babadins-de-la-roche", address: "3 Rue des Entrepreneurs", zip: "85000", city: "La Roche-sur-Yon", phone: "06 62 10 19 83", active: true, hours: "7h30 - 19h00" },
    { name: "Les P’tits Babadins Saint-André d’Ornay", slug: "les-ptits-babadins-saint-andre-dornay", link: "creche-les-ptits-babadins-saint-andre-dornay", address: "3 Rue des Entrepreneurs", zip: "85000", city: "La Roche-sur-Yon", phone: "07 82 84 71 66", active: true, hours: "7h30 - 19h00" },
    { name: "Les P’tits Babadins Perpignan", slug: "les-ptits-babadins-perpignan", link: "creche-les-ptits-babadins-perpignan", address: "7 Allée Borée", zip: "66000", city: "Perpignan", phone: "06 81 30 04 27", email: "creche.perpignan@ce-lpbx.com", active: true, hours: "7h30 - 19h00" },
    { name: "Les P’tits Babadins St Vincent de Paul", slug: "les-ptits-babadins-st-vincent-de-paul", link: "creche-les-ptits-babadins-st-vincent-de-paul", address: "490 rue de la cantère - Zone d'activités", zip: "40990", city: "Saint-Vincent-de-Paul", phone: "07 44 41 76 34", email: "creche.svdp@ce-lpbx.com", active: true, hours: "7h30 - 19h" },
    { name: "Les p’tits Babadins St-Aubin-sur-Scie", slug: "les-ptits-babadins-st-aubin-sur-scie", link: "creche-les-ptits-babadins-st-aubin-sur-scie", address: "35 Rue Neuve", zip: "76550", city: "Saint-Aubin-sur-Scie", phone: "07 66 91 96 65", active: true, hours: "7h30 - 18h30" },
    { name: "Micro-crèche Les P’tits Babadins d’Olivet", slug: "micro-creche-les-ptits-babadins-dolivet", link: "creche-micro-creche-les-ptits-babadins-dolivet", address: "29 Rue Jules Marie Simon", zip: "45160", city: "Olivet", phone: "07 56 10 73 77", active: true, hours: "7h00 - 19h00" },
    { name: "Les P’tits Babadins de Tavers", slug: "les-ptits-babadins-de-tavers", link: "creche-les-ptits-babadins-de-tavers", address: "11 Rue des Grattelievres", zip: "45190", city: "Tavers", phone: "07 56 10 73 77", active: true, hours: "7h30 - 18h30" },
    { name: "Les P’tits Babadins Meung-sur-Loire", slug: "les-ptits-babadins-meung-sur-loire", link: "creche-les-ptits-babadins-meung-sur-loire", address: "3 Mail des Trois Roses", zip: "45130", city: "Meung-sur-Loire", phone: "07 56 10 73 77", active: true, hours: "7h30 - 18h30" },
    { name: "Les p'tits Babadins de Coëtmieux", slug: "les-ptits-babadins-de-coetmieux", link: "creche-les-ptits-babadins-de-coetmieux", address: "30 bis rue de la Truite", zip: "22400", city: "Coëtmieux", phone: "06 02 71 58 96", active: true, hours: "7h30 - 18h30" },
    { name: "Les P’tits Babadins Avermes", slug: "les-ptits-babadins-avermes", link: "creche-les-ptits-babadins-avermes", city: "Avermes", address: "11 Rue des Saccarauds", zip: "03000", phone: "06 62 30 64 40", active: true, hours: "7h30 - 18h30" },
    { name: "Les P’tits Babadins Baldersheim", slug: "les-ptits-babadins-baldersheim", link: "creche-les-ptits-babadins-baldersheim", city: "Baldersheim", address: "ZA 10 Rue des Chasseurs", zip: "68390", phone: "06 63 01 97 03", active: true, hours: "7h30 - 18h30" },

    { name: "Les P’tits Babadins Grussenheim", slug: "les-ptits-babadins-grussenheim", link: "creche-les-ptits-babadins-grussenheim", city: "Grussenheim", address: "62 route de Colmar", zip: "68320", phone: "03.89.27.55.17", email: "creche.grussenheim@ce-lpbx.com", active: true, hours: "7h30 - 18h30" },
    { name: "Les p'tits Babadins de Hégenheim 1", slug: "les-ptits-babadins-de-hegenheim-1", link: "creche-les-ptits-babadins-de-hegenheim-1", city: "Hegenheim", address: "30 rue des Landes", zip: "68220", phone: "06 63 01 97 03", email: "creche.hegenheim1@ce-lpbx.com", active: true, hours: "7h30 - 18h30" },
    { name: "Les P’tits Babadins Montivilliers", slug: "les-ptits-babadins-montivilliers", link: "creche-les-ptits-babadins-montivilliers", city: "Montivilliers", address: "3 impasse Edgar Degas", zip: "76290", phone: "09 73 39 65 98", email: "creche.montivilliers@ce-lpbx.com", active: true, hours: "7h30 - 18h30" },
    { name: "Les P’tits Babadins Saint Chamond", slug: "les-ptits-babadins-saint-chamond", link: "creche-les-ptits-babadins-saint-chamond", city: "Saint Chamond", address: "2A rue Marc Seguin", zip: "42400", phone: "07 61 69 28 60", active: true, hours: "7h30 - 18h30" },

    // --- New Additions (2025 Refinement) ---
    { name: "Les p'tits Babadins de Wargnies le Grand", slug: "les-ptits-babadins-de-wargnies-le-grand", link: "creche-les-ptits-babadins-de-wargnies-le-grand", city: "Wargnies-le-Grand", address: "ZA de la Vallée de l'Aunelle, 8 N Route nationale", zip: "59144", phone: "06.73.51.78.63", email: "creche.wargnies@ce-lpbx.com", active: true, hours: "7h30 - 18h30" },
    { name: "Les p'tits Babadins de Hégenheim 1", slug: "les-ptits-babadins-de-hegenheim-1", link: "creche-les-ptits-babadins-de-hegenheim-1", city: "Hegenheim", address: "30 rue des Landes", zip: "68220", phone: "06 63 01 97 03", email: "creche.hegenheim1@ce-lpbx.com", active: true, hours: "7h30 - 18h30" },
    { name: "Les p'tits Babadins de Hégenheim 2", slug: "les-ptits-babadins-de-hegenheim-2", link: "creche-les-ptits-babadins-de-hegenheim-2", city: "Hegenheim", address: "30 A rue des Landes", zip: "68220", phone: "06 63 01 97 03", email: "creche.hegenheim2@ce-lpbx.com", active: true, hours: "7h30 - 18h30" },
    { name: "Au Saut du nid", slug: "au-saut-du-nid", link: "creche-au-saut-du-nid", city: "Tignieu-Jameyzieu", address: "38 boulevard Ampère", zip: "38230", phone: "06.70.03.61.55", email: "creche.tignieujameyzieu@gmail.com", active: true, hours: "7h30 - 18h30" },
    { name: "Tintinna Bulle", slug: "tintinna-bulle", link: "creche-tintinna-bulle", city: "Tignieu-Jameyzieu", address: "Boulevard Ampère", zip: "38230", email: "creche.tignieujameyzieu@gmail.com", active: true, hours: "7h30 - 18h30" },
    { name: "Les p'tits Babadins de Faye d'Anjou", slug: "les-ptits-babadins-de-faye-danjou", link: "creche-faye-danjou", city: "Faye d'Anjou", address: "4 ter rue des monts", zip: "49380", phone: "07 44 98 74 20", email: "mcfayedanjou@gmail.com", active: true, hours: "7h00 - 19h00" },
    { name: "Les p'tits Babadins de Miremont", slug: "les-ptits-babadins-de-miremont", link: "creche-les-ptits-babadins-de-miremont", city: "Miremont", address: "4 Voie Eris, ZA Pompignal", zip: "31190", phone: "07.62.70.23.04", email: "creche.miremont@ce-lpbx.com", active: true, hours: "7h30 - 18h30" },
    { name: "Les p'tits papailloux", slug: "les-ptits-papailloux", link: "creche-les-ptits-papailloux", city: "Angers", address: "24, place Terra Botanica", zip: "49100", phone: "06.62.10.19.83", active: true, hours: "7h30 - 18h30" },
    { name: "Les p'tits charrettes", slug: "les-ptits-charrettes", link: "creche-les-ptits-charrettes", city: "La Roche-sur-Yon", address: "Résidence Le Tamaris, Les Prairies d’Eden", zip: "85000", email: "creche.bourgsouslaroche@ce-lpbx.com", active: true, hours: "7h30 - 18h30" },
    { name: "Les p'tits Babadins de Masny", slug: "les-ptits-babadins-de-masny", link: "creche-les-ptits-babadins-de-masny", city: "Masny", address: "9 bis Rue de Froissy", zip: "59176", phone: "06 74 41 36 16", email: "creche.masny@ce-lpbx.com", active: true, hours: "7h00 - 19h00" },
    { name: "Les p'tits Bababins d'Aniche", slug: "les-ptits-bababins-daniche", link: "creche-les-ptits-bababins-daniche", city: "Aniche", address: "Localisation en cours", zip: "59580", email: "creche.aniche@ce-lpbx.com", active: false, hours: "7h00 - 19h00" },
    { name: "Les p'tits Babadins de Beuvry", slug: "les-ptits-babadins-de-beuvry", link: "creche-les-ptits-babadins-de-beuvry", city: "Beuvry", address: "Localisation en cours", zip: "62660", active: true, hours: "7h30 - 18h30" },
    { name: "Les p'tits Babadins de Etival lès le Mans", slug: "les-ptits-babadins-de-etival-les-le-mans", link: "creche-les-ptits-babadins-de-etival-les-le-mans", city: "Étival-lès-le-Mans", address: "7 Rue de Siedenburg", zip: "72700", phone: "07 81 01 88 22", email: "creche.etival@ce-lpbx.com", active: true, hours: "7h00 - 18h45" },
    { name: "Les p'tits Babadins de Saint Nicolas de Redon", slug: "les-ptits-babadins-de-saint-nicolas-de-redon", link: "creche-les-ptits-babadins-de-saint-nicolas-de-redon", city: "Saint-Nicolas-de-Redon", address: "30 rue des roseaux", zip: "44460", phone: "06 76 79 63 22", email: "creche.sndr@ce-lpbx.com", active: true, hours: "7h30 - 18h30" },
    { name: "Les p’tits Babadins de Pasquis 2", slug: "les-ptits-babadins-de-pasquis-2", link: "creche-les-ptits-babadins-de-pasquis-2", city: "Montluçon", address: "48 rue de PASQUIS", zip: "03100", phone: "06 64 31 36 54", email: "directioncrecheflorine@gmail.com", active: true, hours: "7h15 - 18h15" },
    { name: "Le Grandchamp des Enfants", slug: "le-grandchamp-des-enfants", link: "creche-le-grandchamp-des-enfants", city: "Grandchamp-des-Fontaines", address: "Parc d’activité de Bellevue", zip: "44119", phone: "06.14.17.72.84.", email: "grandchampsdesenfants@ce-lpbx.com", active: true, hours: "7h30 - 18h30" },
    { name: "Les enfants des Fontaines", slug: "les-enfants-des-fontaines", link: "creche-les-enfants-des-fontaines", city: "Grandchamp-des-Fontaines", address: "PA de Bellevue, 13 bis rue des sports", zip: "44119", active: true, hours: "7h30 - 18h30" },
    { name: "Les p'tits babadins de Freneuse 1", slug: "les-ptits-babadins-de-freneuse-1", link: "creche-les-ptits-babadins-de-freneuse-1", city: "Freneuse", address: "La Croix du Moulin - 19 rue des Bouderies", zip: "78840", phone: "06.68.74.03.33", email: "creche.freneuse1@ce-lpbx.com", active: true, hours: "7h30 - 18h30" },
    { name: "Les p'tits babadins de Freneuse 2", slug: "les-ptits-babadins-de-freneuse-2", link: "creche-les-ptits-babadins-de-freneuse-2", city: "Freneuse", address: "La Croix du Moulin - 19 rue des Bouderies", zip: "78840", email: "creche.freneuse2@ce-lpbx.com", active: true, hours: "7h30 - 18h30" },
    { name: "A Petits Pas", slug: "a-petits-pas", link: "creche-a-petits-pas", city: "Auzeville-Tolosane", address: "5 Av Daniel Brisebois", zip: "31320", phone: "06.24.51.09.60", email: "apetitspas@ce-lpbx.com", active: true, hours: "7h30 - 18h30" },
    { name: "Les Lutins du Bois Joli", slug: "les-lutins-du-bois-joli", link: "creche-les-lutins-du-bois-joli", city: "Auzeville-Tolosane", address: "3 Av Daniel Brisebois", zip: "31320", email: "leslutinsduboisjoli@ce-lpbx.com", active: true, hours: "7h30 - 18h30" },
    { name: "Les p'tits Babadins de Saveuse", slug: "les-ptits-babadins-de-saveuse", link: "creche-les-ptits-babadins-de-saveuse", city: "Saveuse", address: "Localisation en cours", zip: "80470", email: "creche.poulainville2@ce-lpbx.com", active: true, hours: "7h30 - 18h30" },
    { name: "Les p'tit Babadins de Poullainville 2", slug: "les-ptit-babadins-de-poullainville-2", link: "creche-les-ptit-babadins-de-poullainville-2", city: "Poulainville", address: "Chemin de Longpré", zip: "80260", email: "creche.saveuse@ce-lpbx.com", active: true, hours: "7h30 - 18h30" },
    { name: "Les p'tits Babadins de Aubenas", slug: "les-ptits-babadins-de-aubenas", link: "creche-les-ptits-babadins-de-aubenas", city: "Aubenas", address: "72A Av. de Roqua", zip: "07200", phone: "07 61 32 43 13", email: "creche.aubenas@ce-lpbx.com", active: true, hours: "07h00 - 19h00" },
    { name: "Micro-crèche Les Singulières", slug: "micro-creche-les-singulieres", link: "creche-micro-creche-les-singulieres", city: "Montelier", address: "Rue des Charmilles", zip: "26120", phone: "06.38.01.95.38", email: "bastida@ce-lpbx.com", active: true, hours: "7h30 - 18h30" },
    { name: "Micro-crèche Abolena", slug: "micro-creche-abolena", link: "creche-micro-creche-abolena", city: "Bollene", address: "183 avenue Georges Melies", zip: "84500", email: "bastida@ce-lpbx.com", active: true, hours: "7h30 - 18h30" },
    { name: "Bastida", slug: "bastida", link: "creche-bastida", city: "La Bâtie-Rolland", address: "725 route de Montélimar", zip: "26160", email: "bastida@ce-lpbx.com", active: true, hours: "7h30 - 18h30" },
    { name: "Micro-crèche Castel", slug: "micro-creche-castel", link: "creche-micro-creche-castel", city: "Châteauneuf-du-Rhône", address: "240 Impasse des buis", zip: "26780", email: "bastida@ce-lpbx.com", active: true, hours: "7h30 - 18h30" },
    { name: "Micro-crèche du Meyrol", slug: "micro-creche-du-meyrol", link: "creche-micro-creche-du-meyrol", city: "Montélimar", address: "9 Allée de Barjac", zip: "26200", email: "bastida@ce-lpbx.com", active: true, hours: "7h30 - 18h30" },

    // --- New Additions (01/2026) ---
    { name: "Crèche Les P'tits Babadins de Baillet - Les P'tits chimistes", slug: "creche-les-ptits-babadins-de-baillet-les-ptits-chimistes", link: "creche-creche-les-ptits-babadins-de-baillet-les-ptits-chimistes", city: "Baillet-en-France", address: "Rue Pierre et Marie Curie", zip: "95560", phone: "01.34.69.05.87", active: true, hours: "7h - 19h" },
    { name: "Crèche Les P'tits Babadins de St Martin - Le petit monde de Léopold", slug: "creche-les-ptits-babadins-de-st-martin-le-petit-monde-de-leopold", link: "creche-creche-les-ptits-babadins-de-st-martin-le-petit-monde-de-leopold", city: "Saint-Martin-du-Tertre", address: "17 avenue Jacques Duclos", zip: "95270", phone: "01.30.35.92.10", active: true, hours: "7h - 19h" },
    { name: "Crèche Les P'tits Babadins de Belloy", slug: "creche-les-ptits-babadins-de-belloy", link: "creche-creche-les-ptits-babadins-de-belloy", city: "Belloy-en-France", address: "3 place Sainte-Beuve", zip: "95270", phone: "01.30.35.08.39", active: true, hours: "7h - 19h" },
    { name: "Crèche Les P'tits Babadins de Pernety", slug: "creche-les-ptits-babadins-de-pernety", link: "creche-creche-les-ptits-babadins-de-pernety", city: "Paris", address: "47 rue Bénard", zip: "75014", phone: "01.88.75.02.15", active: true, hours: "8h30 - 19h" },
    { name: "Micro-crèche les p'tits Babadins Sisteron", slug: "micro-creche-les-ptits-babadins-sisteron", link: "creche-micro-creche-les-ptits-babadins-sisteron", city: "Sisteron", address: "27 Allée des Tilleuls", zip: "04200", phone: "04-92-64-95-15", email: "virginie.herlemont@ce-lpbx.com", active: true, hours: "6h - 20h" },
    { name: "Les p'tits Babadins de Boissy-le-Châtel", slug: "les-ptits-babadins-de-boissy-le-chatel", link: "creche-les-ptits-babadins-de-boissy-le-chatel", city: "Boissy-le-Châtel", address: "17 Bis ZAC des 18 Arpents", zip: "77169", phone: "01 88 75 01 02 / 07 44 41 46 32", active: true, hours: "7h30 - 19h" },
    { name: "Les P’tits Babadins de Clamart", slug: "les-ptits-babadins-de-clamart", link: "creche-les-ptits-babadins-de-clamart", city: "Clamart", address: "32 rue Georges Huguet", zip: "92140", phone: "01 88 75 02 30 / 07 44 47 88 96", email: "creche.clamart@ce-lpbx.com", active: true, hours: "8h00 - 19h00" },

    // --- New Additions (Manual Batch) ---
    { name: "Coccinelle", slug: "coccinelle", link: "creche-coccinelle", city: "St Barthelemy d'Anjou", address: "2 rue de la Morellerie", zip: "49124", phone: "06.15.52.90.31", email: "eva.zara@hotmail.fr", active: true, hours: "7h30 - 18h30" },
    { name: "Micro- Crèche La Fayette", slug: "micro--creche-la-fayette", link: "creche-micro-creche-la-fayette", city: "Angers", address: "26 rue de Brissac", zip: "49000", active: true, hours: "7h30 - 18h30" },
    { name: "La Cabane des doudous", slug: "la-cabane-des-doudous", link: "creche-la-cabane-des-doudous", city: "St Jean de Boiseau", address: "Impasse des Forgerons", zip: "44640", phone: "06.60.39.21.07", email: "olivier.landrieau@bbox.fr", active: true, hours: "7h45 à 18h30" },
    { name: "Choupie et Bibou", slug: "choupie-et-bibou", link: "creche-choupie-et-bibou", city: "St Jean de Boiseau", address: "Impasse des Forgerons", zip: "44640", active: true, hours: "7h45 à 18h30" },
    { name: "Lililou Micro-Creche", slug: "lililou-micro-creche", link: "creche-lililou-micro-creche", city: "La Chapelle sur Erdre", address: "1 bis rue Newton", zip: "44240", phone: "06.86.15.62.18", email: "lachapellesurerdre@ce-lpbx.com", active: true, hours: "7h30 - 18h30" },

    // --- New Additions (Image Source 2026) ---
    { name: "Les p'tits Babadins de Saint-Maixent-l'École", slug: "les-ptits-babadins-de-saint-maixent-lecole", link: "creche-les-ptits-babadins-de-saint-maixent-lecole", city: "Saint-Maixent-l'École", address: "28 rue d'Horsham", zip: "79400", phone: "06 19 64 60 89", email: "creche.saintmaixent@ce-lpbx.com", active: true, hours: "7h30 - 18h30" },
    { name: "Les p'tits Babadins de Janzé", slug: "les-ptits-babadins-de-janze", link: "creche-les-ptits-babadins-de-janze", city: "Janzé", address: "18 bis rue de la Houlette", zip: "35150", phone: "07 52 08 46 12", email: "benedicte.clediere@ce-lpbx.com", active: true, hours: "7h30 - 18h30" },
    { name: "Les p'tits Babadins de Guichen", slug: "les-ptits-babadins-de-guichen", link: "creche-les-ptits-babadins-de-guichen", city: "Guichen", address: "24 rue Denis Papin", zip: "35580", phone: "07 52 08 46 12", email: "benedicte.clediere@ce-lpbx.com", active: true, hours: "7h30 - 18h30" },
    { name: "Les p'tits Babadins de Rennes 2 Sud Est", slug: "les-ptits-babadins-rennes-2-sud-est", link: "creche-les-ptits-babadins-rennes-2-sud-est", city: "Noyal-Châtillon-sur-Seiche", address: "2 rue Ambroisine Garnier", zip: "35230", phone: "07 49 72 97 18", email: "benedicte.clediere@ce-lpbx.com", active: true, hours: "7h30 - 18h30" },
    { name: "Les p'tits Babadins de Mainvilliers", slug: "les-ptits-babadins-de-mainvilliers", link: "creche-les-ptits-babadins-de-mainvilliers", city: "Mainvilliers", address: "4 rue Paul Emile Victor", zip: "28300", phone: "07 82 58 90 32", email: "creche.mainvilliers@ce-lpbx.com", active: true, hours: "7h30 - 18h30" },
    { name: "Les p'tits Babadins de Luisant", slug: "les-ptits-babadins-de-luisant", link: "creche-les-ptits-babadins-de-luisant", city: "Luisant", address: "52 Rue du Val de la Cavée", zip: "28600", phone: "06 64 91 98 96", email: "creche.luisant@ce-lpbx.com", active: true, hours: "7h30 - 18h30" },
    { name: "Les p'tits Babadins de Gellainville", slug: "les-ptits-babadins-de-gellainville", link: "creche-les-ptits-babadins-de-gellainville", city: "Gellainville", address: "3 Parc de l'Équerre", zip: "28630", phone: "06 64 91 98 96", email: "creche.gelainville@ce-lpbx.com", active: true, hours: "7h30 - 18h30" },
    { name: "Les p'tits Babadins de La Riche", slug: "les-ptits-babadins-de-la-riche", link: "creche-les-ptits-babadins-de-la-riche", city: "La Riche", address: "15 rue de la Chapelle", zip: "37520", phone: "06 38 41 23 23", email: "creche.lariche@ce-lpbx.com", active: true, hours: "7h30 - 18h30" },
    { name: "Les p'tits Babadins de Joué-lès-Tours", slug: "les-ptits-babadins-de-joue-les-tours", link: "creche-les-ptits-babadins-de-joue-les-tours", city: "Joué-lès-Tours", address: "19 Rue de la Flottière", zip: "37300", phone: "06 38 41 23 23", email: "creche.jlt@ce-lpbx.com", active: true, hours: "7h30 - 18h30" },
    { name: "Les p'tits Babadins de Villeneuve sur Lot", slug: "les-ptits-babadins-de-villeneuve-sur-lot", link: "creche-les-ptits-babadins-de-villeneuve-sur-lot", city: "Villeneuve-sur-Lot", address: "560 rue de la Dardenne", zip: "47300", phone: "05 53 49 27 15", email: "t.villeneuve@ce-lpbx.com", active: true, hours: "07h30 - 19h00" },
    { name: "Les p'tits Babadins de Saint-Quay-Perros", slug: "les-ptits-babadins-de-saint-quay-perros", link: "creche-les-ptits-babadins-de-saint-quay-perros", city: "Saint-Quay-Perros", address: "8 rue résidence de Kreas Hent", zip: "22700", phone: "06 23 98 08 51", email: "stquayperros@lespetitsbabadins.com", active: true, hours: "7h30 - 18h30" },
    { name: "Les p'tits Babadins de Bize-Minervois", slug: "les-ptits-babadins-de-bize-minervois", link: "creche-les-ptits-babadins-de-bize-minervois", city: "Bize-Minervois", address: "3 Rue des Vignerons", zip: "11120", phone: "06 83 01 96 93", active: true, hours: "7h30 - 18h30" },
    { name: "Crèches Expansion Saint Malo", slug: "creche-saint-malo", link: "creche-saint-malo", city: "Saint Malo", address: "16 rue de la croix Desilles", zip: "35400", email: "creche.saintmalo@ce-lpbx.com", active: true, hours: "07h00 - 19h00" },
    { name: "Les p'tits Babadins de Mazères", slug: "les-ptits-babadins-de-mazeres", link: "creche-les-ptits-babadins-de-mazeres", city: "Mazères", address: "16 Rue des Acacias", zip: "33210", phone: "09 52 70 60 68", active: true, hours: "07h30 - 18h30" },
    { name: "Les p'tits Babadins de Livré-sur-Changeon", slug: "les-ptits-babadins-de-livre-sur-changeon", link: "creche-les-ptits-babadins-de-livre-sur-changeon", city: "Livré-sur-Changeon", address: "8 Rue Jean Berçu", zip: "35450", phone: "01 85 46 02 44", active: true, hours: "07h30 - 18h30" },
    { name: "Les p'tits Babadins de Loiron", slug: "les-ptits-babadins-de-loiron", link: "creche-les-ptits-babadins-de-loiron", city: "Loiron-Ruillé", address: "18 rue du petit bois", zip: "53320", phone: "06 77 42 09 79", active: true, hours: "07h30 - 18h30" },
    { name: "Les p'tits Babadins de Laval", slug: "les-ptits-babadins-de-laval", link: "creche-les-ptits-babadins-de-laval", city: "Laval", address: "180 Boulevard Jean Jaurès", zip: "53000", phone: "06 77 42 09 79", active: true, hours: "07h30 - 18h30" },
    { name: "Les p'tits Babadins de Forcé", slug: "les-ptits-babadins-de-force", link: "creche-les-ptits-babadins-de-force", city: "Forcé", address: "3 Rue Simone Veil", zip: "53260", phone: "06 77 42 09 79", active: true, hours: "07h30 - 18h30" },
    { name: "Ty Moussaillons", slug: "ty-moussaillons", link: "creche-ty-moussaillons", city: "Arzal", address: "La Corne du Cerf", zip: "56190", phone: "09 84 54 63 61", email: "tymoussaillons@creches-expansion.fr", active: true, hours: "07h30 - 18h30" }
];

// --- Removals ---
// Removed: 'Ronron et Zébulon', 'Le refuge des Galopins', "Les p'tits rigolos", 'Le parc des câlinous', 'Le nid des Galopins', 'Les Bébés Du Causse'
// 'Perlette Et Pimpin', 'Les Bébés Du Bouldou', 'Chatouilles', 'Les Bébés Du Comtal', 'Les Bébés Du Moulin', 'Happy & Cie'
// 'Les Bébés De Laguarigue', 'Les Bébés Du Faubourg', 'La cabane des Galopins'

const removals = [
    'Ronron et Zébulon', 'Le refuge des Galopins', "Les p'tits rigolos", 'Le parc des câlinous', 'Le nid des Galopins', 'Les Bébés Du Causse',
    'Perlette Et Pimpin', 'Les Bébés Du Bouldou', 'Chatouilles', 'Les Bébés Du Comtal', 'Les Bébés Du Moulin', 'Happy & Cie',
    'Les Bébés De Laguarigue', 'Les Bébés Du Faubourg', 'La cabane des Galopins'
];

crechesData = crechesData.filter(c => !removals.includes(c.name));
document.addEventListener('DOMContentLoaded', () => {
    console.log("Les p’tits Babadins - Site chargé");

    const creches = typeof crechesData !== 'undefined' ? crechesData : [];

    // LLM Optimization: Generate dynamic structured data for all crèches
    generateCrechesStructuredData();

    // --- ANIMATED COUNTERS ---
    const counters = document.querySelectorAll('.counter');
    const speed = 200; // The lower the slower

    const animateCounters = () => {
        counters.forEach(counter => {
            const updateCount = () => {
                const target = +counter.getAttribute('data-target');
                // Handle non-numeric content if refresh happens
                const currentText = counter.innerText.replace(/\D/g, '');
                const count = +currentText;

                // Lower inc to slow and higher to slow
                const inc = target / speed;

                if (count < target) {
                    // Check if we need to add '%' or '+'
                    if (target === 98) {
                        counter.innerText = Math.ceil(count + inc) + "%";
                    } else if (target === 110 || target === 2000) {
                        counter.innerText = Math.ceil(count + inc) + "+";
                    } else {
                        counter.innerText = Math.ceil(count + inc);
                    }
                    setTimeout(updateCount, 20);
                } else {
                    counter.innerText = target + (target === 98 ? "%" : (target === 110 || target === 2000 ? "+" : ""));
                }
            };
            updateCount();
        });
    };

    // Trigger animation when section is in view
    let animated = false;
    const sectionObserver = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting && !animated) {
                animateCounters();
                animated = true;
                observer.unobserve(entry.target); // Run once
            }
        });
    }, { threshold: 0.5 }); // 50% of the section visible

    // Observe the stats grid or a section containing counters
    const statsSection = document.querySelector('.stats-grid');
    if (statsSection) {
        sectionObserver.observe(statsSection);
    }

    // Back to Top Button Logic
    const backToTopBtn = document.getElementById('backToTop');
    if (backToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTopBtn.style.display = 'flex';
                // Small delay to allow display flex to apply before opacity transition if we wanted intricate anims
                // But for now, simple display toggle is fine or we can use opacity
            } else {
                backToTopBtn.style.display = 'none';
            }
        });

        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }


    // Mobile Menu Toggle
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    let overlay = document.querySelector('.menu-overlay');

    // Create overlay if it doesn't exist
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.className = 'menu-overlay';
        document.body.appendChild(overlay);
    }

    if (mobileBtn) {
        const toggleMenu = () => {
            mobileBtn.classList.toggle('active');
            navLinks.classList.toggle('active');
            overlay.classList.toggle('active');
            document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
        };

        mobileBtn.addEventListener('click', toggleMenu);
        overlay.addEventListener('click', toggleMenu);

        // Close menu when clicking a link
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (navLinks.classList.contains('active')) {
                    toggleMenu();
                }
            });
        });
    }

    // Smooth Scroll for Anchor Links (polishing behavior)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#' || targetId.includes(' ')) return;

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

    // --- GEOGRAPHIC MAPPINGS ---
    const DEPT_MAP = {
        "02": "Aisne", "03": "Allier", "07": "Ardèche", "17": "Charente-Maritime",
        "18": "Cher", "22": "Côtes-d'Armor", "26": "Drôme", "29": "Finistère",
        "30": "Gard", "31": "Haute-Garonne", "33": "Gironde", "35": "Ille-et-Vilaine",
        "38": "Isère", "42": "Loire", "44": "Loire-Atlantique", "45": "Loiret",
        "49": "Maine-et-Loire", "56": "Morbihan", "59": "Nord", "62": "Pas-de-Calais",
        "66": "Pyrénées-Orientales", "68": "Haut-Rhin", "71": "Saône-et-Loire",
        "72": "Sarthe", "76": "Seine-Maritime", "77": "Seine-et-Marne", "78": "Yvelines",
        "79": "Deux-Sèvres", "80": "Somme", "81": "Tarn", "84": "Vaucluse", "85": "Vendée"
    };

    // Proxy coordinates for main cities to enable "nearby" calculation
    const ZIP_COORDS = {
        "44000": [47.2184, -1.5536], // Nantes
        "44240": [47.2858, -1.5524], // La Chapelle sur Erdre
        "44260": [47.3601, -1.9422], // Savenay
        "44119": [47.3541, -1.6053], // Grandchamp des Fontaines
        "59000": [50.6292, 3.0573],  // Lille
        "59176": [50.3478, 3.2081],  // Masny
        "59580": [50.3333, 3.2500],  // Aniche
        "85000": [46.6705, -1.4260], // La Roche sur Yon
        "85300": [46.8437, -1.8741], // Challans
        "49000": [47.4784, -0.5632], // Angers
        "31000": [43.6047, 1.4442],  // Toulouse
        "31190": [43.3703, 1.4883],  // Miremont
        "66000": [42.6887, 2.8948],  // Perpignan
        "35000": [48.1173, -1.6778], // Rennes
        "35140": [48.2589, -1.3967], // St Aubin du Cormier
        "22000": [48.5141, -2.7658], // St Brieuc
        "03100": [46.3408, 2.6033]   // Montlucon
    };

    function calculateDistance(lat1, lon1, lat2, lon2) {
        const R = 6371; // km
        const dLat = (lat2 - lat1) * Math.PI / 180;
        const dLon = (lon2 - lon1) * Math.PI / 180;
        const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        return R * c;
    }

    const REGION_MAP = {
        "Bretagne": ["22", "29", "35", "56"],
        "Pays de la Loire": ["44", "49", "72", "85"],
        "Occitanie": ["30", "31", "66", "81"],
        "Nouvelle-Aquitaine": ["17", "33", "79"],
        "Auvergne-Rhône-Alpes": ["03", "07", "26", "38", "42"],
        "Hauts-de-France": ["02", "59", "62", "80"],
        "Centre-Val de Loire": ["18", "45"],
        "Grand Est": ["68"],
        "Normandie": ["76"],
        "Île-de-France": ["77", "78"],
        "Bourgogne-Franche-Comté": ["71"],
        "PACA": ["84"]
    };

    // Dynamic Daycare Listing
    const crechesContainer = document.getElementById('creches-list-container');
    const activeFiltersContainer = document.getElementById('active-filters');

    let currentFilter = { value: "", type: "search", label: "" };

    if (crechesContainer) {
        const searchInput = document.querySelector('.search-input');
        const searchBtn = document.getElementById('searchBtn');
        const clearBtn = document.getElementById('clearSearch');

        function renderCreches(filterValue = "", type = "search", label = "") {
            crechesContainer.innerHTML = '';
            const normalize = (str) => {
                if (!str) return "";
                return str.normalize("NFD")
                    .replace(/[\u0300-\u036f]/g, "")
                    .replace(/[-_]/g, " ")
                    .replace(/\s+/g, " ")
                    .trim()
                    .toLowerCase();
            };
            const lowerFilter = normalize(filterValue);

            // Save state
            currentFilter = { value: filterValue, type: type, label: label || filterValue };
            renderFilterChips();

            // Toggle clear button visibility
            if (clearBtn) {
                if (filterValue.length > 0) {
                    clearBtn.classList.add('active');
                } else {
                    clearBtn.classList.remove('active');
                }
            }

            const filtered = creches.filter(c => {
                if (!filterValue) return true;

                if (type === "search") {
                    return normalize(c.name).includes(lowerFilter) ||
                        normalize(c.city).includes(lowerFilter) ||
                        (c.zip && c.zip.toString().includes(lowerFilter));
                }

                if (type === "region") {
                    const deptsInRegion = REGION_MAP[filterValue] || [];
                    let dept = c.zip ? c.zip.substring(0, 2) : "";
                    if (c.zip && c.zip.length === 4) dept = "0" + c.zip.substring(0, 1);
                    return deptsInRegion.includes(dept);
                }

                if (type === "dept") {
                    let dept = c.zip ? c.zip.substring(0, 2) : "";
                    if (c.zip && c.zip.length === 4) dept = "0" + c.zip.substring(0, 1);
                    return dept === filterValue;
                }

                if (type === "city") {
                    return c.city === filterValue;
                }

                return true;
            });

            if (filtered.length === 0) {
                crechesContainer.innerHTML = `
                    <div style="grid-column: 1/-1; text-align: center; padding: 3rem 0;">
                        <p style="font-size: 1.2rem; color: #666; margin-bottom: 1.5rem;">Aucune crèche trouvée pour cette sélection.</p>
                        <button class="btn btn-outline" onclick="location.reload()">Voir toutes les crèches</button>
                    </div>
                `;
                return;
            }

            filtered.forEach(c => {
                const card = document.createElement('div');
                card.className = 'creche-card';

                imgUrl = 'images/hero_child_right.webp';

                let availHtml = "";
                if (!c.active) {
                    availHtml = '<span style="position: absolute; top: 10px; right: 10px; background: var(--brand-pink); color: white; padding: 4px 12px; border-radius: 20px; font-size: 0.8rem; font-weight: 700; box-shadow: 0 2px 8px rgba(0,0,0,0.2); z-index: 5;">Bientôt disponible</span>';
                }

                card.innerHTML = `
            <div style="height: 200px; overflow: hidden; position: relative;">
               ${availHtml}
               <img src="${imgUrl}" alt="Micro-crèche Les p'tits Babadins - ${c.name} à ${c.city}" width="300" height="200" loading="lazy" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.3s ease;">
               <div style="position: absolute; bottom: 0; left: 0; right: 0; background: linear-gradient(to top, rgba(0,0,0,0.8), transparent); padding: 10px; color: white;">
                  <span style="font-weight: bold; font-size: 1.1rem;">${c.city}</span>
               </div>
            </div>
            <div class="creche-content" style="padding: 1.5rem; display: flex; flex-direction: column; flex: 1;">
                <h3 style="min-height: 3rem; margin-bottom: 1rem; font-size: 1.25rem;">${c.name}</h3>
                <div class="creche-meta" style="font-size: 0.95rem; line-height: 1.6; color: #577083;">
                    ${c.address ? '<span title="Adresse">📍</span> ' + c.address + '<br>' : ''}
                    ${c.zip || c.city ? '<span title="Code Postal / Ville">🏙️</span> ' + (c.zip ? c.zip + ' ' : '') + c.city + '<br>' : ''}
                    ${c.phone ? '<span title="Téléphone">📞</span> ' + c.phone + '<br>' : ''}
                    ${c.hours ? '<span title="Horaires">⏰</span> ' + c.hours + '<br>' : ''}
                    ${c.email ? '<span title="Email">📧</span> ' + c.email + '<br>' : ''}
                    <div style="margin-top: 8px;">
                        ${c.active ? '<span style="color:var(--brand-green); font-weight:bold;">● Ouverte</span>' : '<span style="color:var(--brand-orange); font-weight:bold;">● Bientôt</span>'}
                    </div>
                </div>
                <div style="margin-top: auto; padding-top: 1.5rem;">
                    <a href="${c.link}" class="btn btn-outline" style="display: block; text-align: center; width: 100%; border-radius: var(--radius-sm);">Voir la crèche</a>
                </div>
            </div>
          `;
                crechesContainer.appendChild(card);
            });
        }

        function renderFilterChips() {
            if (!activeFiltersContainer) return;
            activeFiltersContainer.innerHTML = '';

            if (!currentFilter.value) return;

            const chip = document.createElement('div');
            chip.style.cssText = "background: var(--brand-blue-dark); color: white; padding: 6px 16px; border-radius: 20px; display: flex; align-items: center; gap: 8px; font-size: 0.9rem; animation: fadeIn 0.3s ease;";

            let typeLabel = "";
            switch (currentFilter.type) {
                case "search": typeLabel = "🔍 "; break;
                case "region": typeLabel = "📍 "; break;
                case "dept": typeLabel = "🇫🇷 "; break;
                case "city": typeLabel = "🏙️ "; break;
            }

            chip.innerHTML = `<span>${typeLabel}${currentFilter.label}</span><span style="cursor:pointer; font-weight:800; padding: 0 4px;" title="Supprimer le filtre">✕</span>`;

            chip.querySelector('span:last-child').onclick = () => {
                if (currentFilter.type === "search") {
                    searchInput.value = '';
                }
                renderCreches("", "search");
            };

            activeFiltersContainer.appendChild(chip);
        }

        // Helper to check Active State
        function updateActivePills(selectedValue) {
            document.querySelectorAll('.region-pill').forEach(pill => {
                const pillValue = pill.getAttribute('data-value');
                if (pillValue === selectedValue) {
                    pill.classList.add('active');
                } else {
                    pill.classList.remove('active');
                }
            });
        }

        function populateFilters() {
            const regionContainer = document.getElementById('region-pills');

            if (!regionContainer) return;
            regionContainer.innerHTML = ''; // Clear existing

            // Stats extraction
            const stats = { regions: {} };

            creches.forEach(c => {
                let deptCode = c.zip ? c.zip.substring(0, 2) : "??";
                if (c.zip && c.zip.length === 4) deptCode = "0" + c.zip.substring(0, 1);

                for (const [regName, deptList] of Object.entries(REGION_MAP)) {
                    if (deptList.includes(deptCode)) {
                        stats.regions[regName] = (stats.regions[regName] || 0) + 1;
                        break;
                    }
                }
            });

            // "Tous" Pill
            const allBtn = document.createElement('button');
            allBtn.className = 'region-pill active'; // Default active
            allBtn.setAttribute('data-value', '');
            allBtn.textContent = 'Tous';
            allBtn.onclick = () => {
                renderCreches("");
                updateActivePills("");
                // Clear search input if needed or keep it separate? Let's clear for pure "All"
                if (searchInput) searchInput.value = "";
            };
            regionContainer.appendChild(allBtn);

            // Populate Regions
            Object.entries(stats.regions).sort().forEach(([reg, count]) => {
                const btn = document.createElement('button');
                btn.className = 'region-pill';
                btn.setAttribute('data-value', reg);
                // Use innerHTML to separate name and count for flex spacing
                btn.innerHTML = `<span>${reg}</span> <span style="font-size:0.9em; opacity:0.8;">(${count})</span>`;
                btn.onclick = () => {
                    renderCreches(reg, 'region', reg);
                    updateActivePills(reg);
                    if (searchInput) searchInput.value = ""; // Clear active search text to avoid confusion
                };
                regionContainer.appendChild(btn);
            });
        }

        populateFilters();

        // --- Geolocation Logic ---
        const geoBtn = document.getElementById('geoBtn');
        if (geoBtn) {
            geoBtn.addEventListener('click', () => {
                if (!navigator.geolocation) {
                    alert("La géolocalisation n'est pas supportée par votre navigateur.");
                    return;
                }

                geoBtn.innerHTML = "⏳"; // Loading state

                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        const userLat = position.coords.latitude;
                        const userLon = position.coords.longitude;

                        // Calculate distance for all creches (using Haversine)
                        // Note: We don't have lat/lon in DB yet.
                        // FALLBACK: Since we don't have lat/lng in data, we can't do true sorting.
                        // Enhancing DB is out of scope unless we mock it.
                        // MOCKING: I will add coordinates to a few key nurseries for demo or explain limitation.
                        // ACTUAL PLAN: We cannot do real distance sorting without coordinates.
                        // ALTERNATIVE: Prompt user to enter zip code automatically? No.
                        // Let's rely on Department code from formatting.

                        // Wait, without lat/lon in DB, true distance is impossible. 
                        // I will simulate updated behavior or add coordinates to the 8 new ones at least?
                        // Too risky to edit 100 lines.
                        // Strategy: We will simulate "finding" by purely sorting by ZIP proximity to a hardcoded point? No.

                        // REVISED STRATEGY: Since I cannot magically get coordinates for 100+ entries,
                        // I will display a message or focus on the search bar saying "Code postal detecté..."
                        // OR, better: I will use an API to get ZIP from coordinates (Reverse Geocoding)?
                        // That requires an API key.

                        // FALLBACK that works: Ask user for ZIP.
                        // But user asked for "Autour de moi".
                        // I will alert that this feature requires database update, OR I can use the existing 'zip' to filter casually?
                        // No, best effort: I will simulate a "Mock" sort for now or just log it.
                        // Actually, I can use a simple map of Region Centers? 

                        // DECISION: I will insert a mock "sort by distance" that does nothing but shuffle 
                        // OR (Preferred): I will fetch the user's city name via a public API (like api-adresse.data.gouv.fr) which is free and no-key.
                        // Then I put that City/Zip into the search bar and trigger search.

                        fetch(`https://api-adresse.data.gouv.fr/reverse/?lon=${userLon}&lat=${userLat}`)
                            .then(response => response.json())
                            .then(data => {
                                if (data.features && data.features.length > 0) {
                                    const city = data.features[0].properties.city;
                                    const postcode = data.features[0].properties.postcode;

                                    searchInput.value = postcode; // Search by ZIP is more precise usually
                                    renderCreches(postcode, "search");
                                    geoBtn.innerHTML = "📍";
                                    updateActivePills(""); // clear region pill
                                } else {
                                    alert("Adresse introuvable.");
                                    geoBtn.innerHTML = "📍";
                                }
                            })
                            .catch(err => {
                                console.error(err);
                                alert("Erreur lors de la localisation.");
                                geoBtn.innerHTML = "📍";
                            });

                    },
                    (error) => {
                        console.error(error);
                        alert("Impossible de récupérer votre position.");
                        geoBtn.innerHTML = "📍";
                    }
                );
            });
        }

        // Initial Render
        const params = new URLSearchParams(window.location.search);
        const initialSearch = params.get('search') || "";
        if (searchInput && initialSearch) searchInput.value = initialSearch;
        renderCreches(initialSearch);

        // Events
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                if (e.target.value) {
                    renderCreches(e.target.value, "search");
                    updateActivePills(""); // Deselect pills when typing
                } else {
                    renderCreches("", "search");
                }
            });
        }
        if (searchBtn && searchInput) searchBtn.addEventListener('click', () => {
            renderCreches(searchInput.value, "search");
            updateActivePills("");
        });
        if (clearBtn && searchInput) {
            clearBtn.addEventListener('click', () => {
                searchInput.value = '';
                renderCreches('', 'search');
                searchInput.focus();
                updateActivePills(""); // Reset
            });
        }
    }

    // Detail Page Logic
    const detailContainer = document.getElementById('creche-detail-container');
    if (detailContainer) {
        const params = new URLSearchParams(window.location.search);
        const crecheName = params.get('name');
        let crecheSlug = params.get('slug');

        // Fallback: Try to parse slug from clean URL path (e.g. /creche-marssac-sur-tarn)
        // because window.location.search is empty for rewritten URLs
        if (!crecheSlug) {
            const path = window.location.pathname;
            // Matches /creche-slug or /creche-slug/
            const match = path.match(/\/creche-([a-zA-Z0-9-]+)\/?$/);
            if (match && match[1]) {
                crecheSlug = match[1];
            }
        }

        // Find the daycare by slug (clean URL) or name (legacy)
        let creche;
        // Prioritize slug lookup
        if (crecheSlug) {
            creche = crechesData.find(c => c.slug === crecheSlug);
        }
        // Fallback to name if slug lookup failed or wasn't present
        if (!creche && crecheName) {
            creche = crechesData.find(c => c.name === crecheName);
        }

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

            // Logic for Related Daycares (Proximity based for SEO)
            const crecheCoords = ZIP_COORDS[creche.zip];
            let nearbyDaycares = [];

            if (crecheCoords) {
                nearbyDaycares = crechesData
                    .filter(c => c.name !== creche.name && ZIP_COORDS[c.zip])
                    .map(c => ({
                        ...c,
                        distance: calculateDistance(crecheCoords[0], crecheCoords[1], ZIP_COORDS[c.zip][0], ZIP_COORDS[c.zip][1])
                    }))
                    .filter(c => c.distance < 30) // Within 30km (more realistic than 10km for small towns)
                    .sort((a, b) => a.distance - b.distance)
                    .slice(0, 6);
            }

            // Fallback: Same department or random if few nearby
            if (nearbyDaycares.length < 3) {
                const dept = creche.zip ? creche.zip.substring(0, 2) : "";
                const sameDept = crechesData
                    .filter(c => c.name !== creche.name && c.zip && c.zip.startsWith(dept) && !nearbyDaycares.find(n => n.name === c.name))
                    .sort(() => 0.5 - Math.random())
                    .slice(0, 6 - nearbyDaycares.length);
                nearbyDaycares = [...nearbyDaycares, ...sameDept];
            }

            // Final fallback to random if still empty
            if (nearbyDaycares.length < 3) {
                const randoms = crechesData
                    .filter(c => c.name !== creche.name && !nearbyDaycares.find(n => n.name === c.name))
                    .sort(() => 0.5 - Math.random())
                    .slice(0, 6 - nearbyDaycares.length);
                nearbyDaycares = [...nearbyDaycares, ...randoms];
            }

            const processedNearby = nearbyDaycares.map(c => {
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

            // Dynamic Title & Meta Update
            document.title = `${creche.name} | Micro-crèche à ${creche.city} Les p’tits Babadins`;
            const metaDesc = document.querySelector('meta[name="description"]');
            if (metaDesc) {
                metaDesc.setAttribute("content", `Découvrez la micro-crèche ${creche.name} à ${creche.city}. Un accueil de proximité, une pédagogie active Reggio Emilia et un cadre sécurisant pour votre enfant.`);
            }

            detailContainer.innerHTML = `
                <div class="page-header" style="background-image: url('${imgUrl}');">
                    <div class="container">
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
                        
                            <div id="gallery-track" style="display: flex; gap: 0.8rem; overflow-x: auto; scroll-snap-type: x mandatory; scroll-behavior: smooth; scrollbar-width: none; padding: 10px 0;">
                                <img src="images/pedago_motricite.webp" style="flex: 0 0 auto; width: 140px; height: 100px; object-fit: cover; border-radius: var(--radius-sm); scroll-snap-align: center; cursor: pointer; transition: transform 0.2s;" onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
                                <img src="images/blog_alimentation_bebe.webp" style="flex: 0 0 auto; width: 140px; height: 100px; object-fit: cover; border-radius: var(--radius-sm); scroll-snap-align: center; cursor: pointer; transition: transform 0.2s;" onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
                                <img src="images/social_art_painting.webp" style="flex: 0 0 auto; width: 140px; height: 100px; object-fit: cover; border-radius: var(--radius-sm); scroll-snap-align: center; cursor: pointer; transition: transform 0.2s;" onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
                                <img src="images/social_story_time.webp" style="flex: 0 0 auto; width: 140px; height: 100px; object-fit: cover; border-radius: var(--radius-sm); scroll-snap-align: center; cursor: pointer; transition: transform 0.2s;" onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
                                <img src="images/social_garden_activity.webp" style="flex: 0 0 auto; width: 140px; height: 100px; object-fit: cover; border-radius: var(--radius-sm); scroll-snap-align: center; cursor: pointer; transition: transform 0.2s;" onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
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
                        ${creche.description ? creche.description : `
                        <p>Bienvenue chez <strong>${creche.name}</strong> !</p>
                        <p>Notre structure à ${creche.city} accueille vos enfants dans un cadre bienveillant et sécurisé, spécialement conçu pour leur épanouissement. Notre équipe de professionnels de la petite enfance veille au bien-être et au développement de chacun, en proposant des activités ludiques et éducatives adaptées à chaque âge.</p>`}
                        
                        <div style="margin-top: 2rem; text-align: center;">
                            <a href="pre-inscription.html?creche=${encodeURIComponent(creche.link)}" class="btn btn-primary" style="font-size: 1.1rem; padding: 0.8rem 2rem;">Faire une demande de place</a>
                        </div>
                    </div>

                    <!-- 4. Nearby Daycares (SEO Anchor widget) -->
                    <div style="margin-top: 4rem;">
                        <h3 style="color: var(--brand-blue-dark); margin-bottom: 1.5rem; border-bottom: 2px solid #eee; padding-bottom: 0.5rem;">Autres crèches Les P’tits Babadins à proximité</h3>
                        <div style="position: relative; padding: 0 3rem;">
                            <button onclick="window.scrollContainer('related-track', -1)" style="position: absolute; left: 0; top: 50%; transform: translateY(-50%); z-index: 10; background: white; border: 1px solid #ddd; width: 40px; height: 40px; border-radius: 50%; box-shadow: var(--shadow-md); cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; color: var(--brand-blue-dark);">&lsaquo;</button>
                            <button onclick="window.scrollContainer('related-track', 1)" style="position: absolute; right: 0; top: 50%; transform: translateY(-50%); z-index: 10; background: white; border: 1px solid #ddd; width: 40px; height: 40px; border-radius: 50%; box-shadow: var(--shadow-md); cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; color: var(--brand-blue-dark);">&rsaquo;</button>

                             <div id="related-track" style="display: flex; gap: 1rem; overflow-x: auto; scroll-snap-type: x mandatory; scroll-behavior: smooth; scrollbar-width: none; padding: 10px 0;">
                                ${processedNearby.map(related => `
                                    <div style="flex: 0 0 auto; width: 200px; scroll-snap-align: center; background: white; border: 1px solid #eee; border-radius: var(--radius-sm); overflow: hidden; box-shadow: var(--shadow-sm);">
                                        <div style="height: 120px; background: #eee;">
                                            <img src="${related.imgUrl}" style="width:100%; height:100%; object-fit: cover;" alt="Micro-crèche ${related.name} à ${related.city}" loading="lazy">
                                        </div>
                                        <div style="padding: 0.8rem;">
                                            <h4 style="margin-bottom:0.3rem; color: var(--brand-blue-dark); font-size: 0.95rem; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">Micro-crèche ${related.name}</h4>
                                            <p style="font-size:0.8rem; color:#666;">${related.city}</p>
                                            <a href="${related.link}" title="Trouver une place en crèche à ${related.city}" style="display:block; margin-top:0.4rem; color:var(--brand-pink); font-weight:bold; font-size: 0.85rem;">Découvrir →</a>
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

                            <div id="blog-track" style="display: flex; gap: 1rem; overflow-x: auto; scroll-snap-type: x mandatory; scroll-behavior: smooth; scrollbar-width: none; padding: 10px 0;">
                                <!-- Article 1 -->
                                <div style="flex: 0 0 auto; width: 240px; scroll-snap-align: center; background: var(--color-beige-light); border-radius: var(--radius-md); overflow: hidden; display: flex; flex-direction: column; box-shadow: var(--shadow-sm);">
                                    <img src="images/blog_adaptation_creche.webp" style="width: 100%; height: 140px; object-fit: cover;" alt="Adaptation">
                                    <div style="padding: 1rem; flex: 1; display: flex; flex-direction: column;">
                                        <h4 style="font-size: 1rem; margin-bottom: 0.4rem; color: var(--brand-blue-dark);">Réussir l'adaptation</h4>
                                        <p style="font-size: 0.85rem; margin-bottom: 0.8rem; flex: 1;">Conseils pour une séparation en douceur.</p>
                                        <a href="blog " class="btn btn-secondary" style="font-size: 0.8rem; padding: 0.4rem 1rem; align-self: start;">Lire</a>
                                    </div>
                                </div>
                                <!-- Article 2 -->
                                <div style="flex: 0 0 auto; width: 240px; scroll-snap-align: center; background: var(--color-beige-light); border-radius: var(--radius-md); overflow: hidden; display: flex; flex-direction: column; box-shadow: var(--shadow-sm);">
                                    <img src="images/blog_motricite_libre.webp" style="width: 100%; height: 140px; object-fit: cover;" alt="Motricité">
                                    <div style="padding: 1rem; flex: 1; display: flex; flex-direction: column;">
                                        <h4 style="font-size: 1rem; margin-bottom: 0.4rem; color: var(--brand-blue-dark);">La motricité libre</h4>
                                        <p style="font-size: 0.85rem; margin-bottom: 0.8rem; flex: 1;">Découvrir ses mouvements seul.</p>
                                        <a href="blog " class="btn btn-secondary" style="font-size: 0.8rem; padding: 0.4rem 1rem; align-self: start;">Lire</a>
                                    </div>
                                </div>
                                <!-- Article 3 -->
                                <div style="flex: 0 0 auto; width: 240px; scroll-snap-align: center; background: var(--color-beige-light); border-radius: var(--radius-md); overflow: hidden; display: flex; flex-direction: column; box-shadow: var(--shadow-sm);">
                                    <img src="images/blog_sommeil_bebe.webp" style="width: 100%; height: 140px; object-fit: cover;" alt="Sommeil">
                                    <div style="padding: 1rem; flex: 1; display: flex; flex-direction: column;">
                                        <h4 style="font-size: 1rem; margin-bottom: 0.4rem; color: var(--brand-blue-dark);">Le sommeil de bébé</h4>
                                        <p style="font-size: 0.85rem; margin-bottom: 0.8rem; flex: 1;">Comprendre les cycles et rituels.</p>
                                        <a href="blog " class="btn btn-secondary" style="font-size: 0.8rem; padding: 0.4rem 1rem; align-self: start;">Lire</a>
                                    </div>
                                </div>
                                <!-- Article 4 -->
                                <div style="flex: 0 0 auto; width: 240px; scroll-snap-align: center; background: var(--color-beige-light); border-radius: var(--radius-md); overflow: hidden; display: flex; flex-direction: column; box-shadow: var(--shadow-sm);">
                                    <img src="images/blog_alimentation_bebe.webp" style="width: 100%; height: 140px; object-fit: cover;" alt="Alimentation">
                                    <div style="padding: 1rem; flex: 1; display: flex; flex-direction: column;">
                                        <h4 style="font-size: 1rem; margin-bottom: 0.4rem; color: var(--brand-blue-dark);">L'alimentation</h4>
                                        <p style="font-size: 0.85rem; margin-bottom: 0.8rem; flex: 1;">Diversification et repas bio.</p>
                                        <a href="blog " class="btn btn-secondary" style="font-size: 0.8rem; padding: 0.4rem 1rem; align-self: start;">Lire</a>
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
                    <a href="creches " class="btn btn-primary" style="margin-top: 20px;">Retour à la liste</a>
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
            option.value = c.link;
            option.textContent = `${c.name} (${c.city})`;
            option.setAttribute('data-email', c.email || 'contact@ce-lpbx.com');
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
            const decodedParam = decodeURIComponent(targetCreche).toLowerCase();

            // Try to find an option that matches value, or text, or slug
            for (let i = 0; i < crecheSelect.options.length; i++) {
                const opt = crecheSelect.options[i];
                if (opt.value.toLowerCase() === decodedParam ||
                    opt.textContent.toLowerCase().includes(decodedParam)) {
                    crecheSelect.selectedIndex = i;
                    break;
                }
            }
        }
    }

    // Logic for Proximity Widget on Static Pages
    const nearbyContainer = document.getElementById('nearby-creches-container');
    if (nearbyContainer) {
        // Find current crèche by filename
        const path = window.location.pathname;
        const filename = path.split('/').pop().replace(' ', '');
        const currentCreche = crechesData.find(c => c.link === filename || c.slug === filename.replace('creche-', ''));

        if (currentCreche) {
            const crecheCoords = ZIP_COORDS[currentCreche.zip];
            let nearbyDaycares = [];

            if (crecheCoords) {
                nearbyDaycares = crechesData
                    .filter(c => c.name !== currentCreche.name && ZIP_COORDS[c.zip])
                    .map(c => ({
                        ...c,
                        distance: calculateDistance(crecheCoords[0], crecheCoords[1], ZIP_COORDS[c.zip][0], ZIP_COORDS[c.zip][1])
                    }))
                    .filter(c => c.distance < 30)
                    .sort((a, b) => a.distance - b.distance)
                    .slice(0, 6);
            }

            if (nearbyDaycares.length < 3) {
                const dept = currentCreche.zip ? currentCreche.zip.substring(0, 2) : "";
                const sameDept = crechesData
                    .filter(c => c.name !== currentCreche.name && c.zip && c.zip.startsWith(dept) && !nearbyDaycares.find(n => n.name === c.name))
                    .sort(() => 0.5 - Math.random())
                    .slice(0, 6 - nearbyDaycares.length);
                nearbyDaycares = [...nearbyDaycares, ...sameDept];
            }

            if (nearbyDaycares.length > 0) {
                nearbyContainer.innerHTML = `
                    <h3 style="color: var(--brand-blue-dark); margin-bottom: 1.5rem; border-bottom: 2px solid #eee; padding-bottom: 0.5rem; font-size: 1.5rem;">Autres crèches Les P’tits Babadins à proximité</h3>
                    <div style="position: relative; padding: 0 3rem;">
                        <button onclick="window.scrollContainer('nearby-track', -1)" style="position: absolute; left: 0; top: 50%; transform: translateY(-50%); z-index: 10; background: white; border: 1px solid #ddd; width: 40px; height: 40px; border-radius: 50%; box-shadow: var(--shadow-md); cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; color: var(--brand-blue-dark);">&lsaquo;</button>
                        <button onclick="window.scrollContainer('nearby-track', 1)" style="position: absolute; right: 0; top: 50%; transform: translateY(-50%); z-index: 10; background: white; border: 1px solid #ddd; width: 40px; height: 40px; border-radius: 50%; box-shadow: var(--shadow-md); cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; color: var(--brand-blue-dark);">&rsaquo;</button>
                        <div id="nearby-track" style="display: flex; gap: 1rem; overflow-x: auto; scroll-snap-type: x mandatory; scroll-behavior: smooth; scrollbar-width: none; padding: 10px 0;">
                            ${nearbyDaycares.map(related => {
                    let h = 0;
                    for (let i = 0; i < related.name.length; i++) h = related.name.charCodeAt(i) + ((h << 5) - h);
                    const lid = Math.abs(h % 1000);
                    const k = ['child,daycare', 'toddler,nursery', 'baby,playing,daycare'];
                    const imgUrl = `https://loremflickr.com/400/300/${k[Math.abs(h % k.length)]}?lock=${lid}`;

                    return `
                                    <div style="flex: 0 0 auto; width: 220px; scroll-snap-align: center; background: white; border: 1px solid #eee; border-radius: var(--radius-sm); overflow: hidden; box-shadow: var(--shadow-sm);">
                                        <div style="height: 130px; background: #eee;">
                                            <img src="${imgUrl}" style="width:100%; height:100%; object-fit: cover;" alt="Micro-crèche ${related.name} à ${related.city}" loading="lazy">
                                        </div>
                                        <div style="padding: 1rem;">
                                            <h4 style="margin-bottom:0.3rem; color: var(--brand-blue-dark); font-size: 1rem; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">Micro-crèche ${related.name}</h4>
                                            <p style="font-size:0.85rem; color:#666;">${related.city}</p>
                                            <a href="${related.link}" title="Trouver une place en crèche à ${related.city}" style="display:block; margin-top:0.5rem; color:var(--brand-pink); font-weight:bold; font-size: 0.9rem;">En savoir plus →</a>
                                        </div>
                                    </div>
                                `;
                }).join('')}
                        </div>
                    </div>
                `;
            }
        }
    }
});

// Intelligent Lazy Loading with IntersectionObserver
const initLazyLoading = () => {
    const lazyImages = document.querySelectorAll('img.lazy-img');

    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.addEventListener('load', () => {
                            img.classList.add('loaded');
                        });
                    }
                    observer.unobserve(img);
                }
            });
        }, {
            rootMargin: '0px 0px 200px 0px' // Load 200px before coming into view
        });

        lazyImages.forEach(img => imageObserver.observe(img));
    } else {
        // Fallback for older browsers
        lazyImages.forEach(img => {
            if (img.dataset.src) img.src = img.dataset.src;
            img.classList.add('loaded');
        });
    }
};

initLazyLoading();

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


// --- BACK TO TOP FUNCTIONALITY ---
document.addEventListener('DOMContentLoaded', () => {
    const backToTopBtn = document.getElementById('backToTop');
    if (backToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTopBtn.classList.add('visible');
            } else {
                backToTopBtn.classList.remove('visible');
            }
        });

        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});

/* --- Animated Counters Script --- */
document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.counter');
    const counterObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = +counter.getAttribute('data-target');
                const duration = 2000; // Animation duration in ms
                const increment = target / (duration / 16); // 60fps

                let current = 0;
                const updateCounter = () => {
                    current += increment;
                    if (current < target) {
                        counter.innerText = Math.ceil(current);
                        // Add suffix if needed based on target
                        if (target === 110 || target === 2000) counter.innerText += "+";
                        if (target === 98) counter.innerText += "%";

                        requestAnimationFrame(updateCounter);
                    } else {
                        counter.innerText = target;
                        if (target === 110 || target === 2000) counter.innerText += "+";
                        if (target === 98) counter.innerText += "%";
                    }
                };

                updateCounter();
                observer.unobserve(counter);
            }
        });
    }, {
        threshold: 0.5
    });

    counters.forEach(counter => {
        counterObserver.observe(counter);
    });
});
