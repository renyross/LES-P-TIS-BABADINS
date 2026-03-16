let crechesData = [
    // --- Group 1: From Initial Lists (Enriched) ---
    { name: "Les P'tits Babadins de Marssac sur Tarn", slug: "marssac-sur-tarn", link: "creche-marssac-sur-tarn", city: "Marssac sur Tarn", address: "Zac Rieumas, 9 avenue de la Pelatié", zip: "81150", phone: "06.56.67.49.65", email: "creche.marssac@ce-lpbx.com", active: true, hours: "07h30 - 19h00" },
    { name: "Les P’tits Babadins de Mellac", slug: "les-ptits-babadins-de-mellac", link: "creche-les-ptits-babadins-de-mellac", city: "Mellac", address: "20 rue Ferdinand Buisson", zip: "29300", phone: "07 69 63 40 66", email: "mellac@lespetitsbabadins.com", active: true, hours: "07h00 - 19h00" },
    { name: "Les p'tits babadins de Quimperlé", slug: "les-ptits-babadins-de-quimperle", link: "creche-les-ptits-babadins-de-quimperle", city: "Quimperlé", address: "2 rue d'Athenry", zip: "29300", phone: "07 69 63 40 66", email: "quimperle@lespetitsbabadins.com", active: true, hours: "07h00 - 19h00" },
    { name: "Au Pays des Sens", slug: "au-pays-des-sens", link: "creche-au-pays-des-sens", city: "Saint Germain du Puy", address: "1 allée colette", zip: "18390", phone: "02 48 24 17 52 / 07 69 09 12 62", email: "creche.aupaysdessens@ce-lpbx.com", active: true, hours: "7h30 - 18h30" },
    { name: "Les P’tits Babadins de Souppes", slug: "les-ptits-babadins-de-souppes", link: "creche-les-ptits-babadins-de-souppes", city: "Souppes-sur-Loing", address: "2 Rue du Roulis", zip: "77460", phone: "07 81 11 16 60", email: "creche.souppes@ce-lpbx.com", active: true, hours: "7h00 - 19h00" },
    { name: "Les P’tits Babadins 79260 La Crèche", slug: "les-ptits-babadins-79260-la-creche", link: "creche-les-ptits-babadins-79260-la-creche", city: "La Crèche", address: "7 rue Vasco de Gama - ZA Baussais", zip: "79260", phone: "06 19 64 60 89", email: "lacreche@ce-lpbx.com", active: true, hours: "7h30 - 18h30" },

    { name: "Les P’tits Babadins Pordic", slug: "les-ptits-babadins-pordic", link: "creche-les-ptits-babadins-pordic", city: "Pordic", address: "Zone de Kéribet, en face de l'Intermarché", zip: "22590", phone: "02 96 78 07 22", email: "creche.pordic@ce-lpbx.com", active: true, hours: "7h30 - 19h" },
    { name: "Crèche Expansion Savenay 1", slug: "creche-expansion-savenay-1", link: "creche-creche-expansion-savenay-1", city: "Savenay", address: "Parc d'Activité de la Colleraye", zip: "44260", phone: "06 66 17 81 42", email: "emilieguerin30@gmail.com", active: true, hours: "7h00 - 19h00 (Du lundi au samedi)" },
    { name: "Ptits Babadins Téloché", slug: "ptits-babadins-teloche", link: "creche-ptits-babadins-teloche", city: "Téloché", address: "ZA du Gué 1 impasse des Sources", zip: "72220", phone: "07 81 01 88 22", email: "teloche@lespetitsbabadins.com", active: true, hours: "7h00 - 18h45" },
    { name: "MC de Louargat", slug: "mc-de-louargat", link: "creche-mc-de-louargat", city: "Louargat", address: "Rue de la Mairie", zip: "22540", phone: "06 23 98 80 51", email: "stquayperros@lespetitsbabadins.com", active: true, hours: "7h30 - 18h30" },
    { name: "Les p'tits Babadins de Wargnies le Grand", slug: "les-ptits-babadins-de-wargnies-le-grand", link: "creche-les-ptits-babadins-de-wargnies-le-grand", city: "Wargnies-le-Grand", address: "ZA de la Vallée de l'Aunelle, 8 N Route nationale", zip: "59144", phone: "06 73 51 78.63", email: "creche.wargnies@ce-lpbx.com", active: true, hours: "7h30 - 18h30" },
    { name: "Les p'tits Babadins de Lorient", slug: "creches-expansion-lorient", link: "creche-creches-expansion-lorient", city: "Lorient", address: "1 rue Jules Le Grand", zip: "56100", phone: "07 69 63 40 66", email: "mellac@lespetitsbabadins.com", active: true, hours: "07h00 - 19h00" },
    { name: "Les P’tits Babadins de Pont Saint Esprit", slug: "les-ptits-babadins-de-pont-saint-esprit", link: "creche-les-ptits-babadins-de-pont-saint-esprit", city: "Pont-Saint-Esprit", address: "320 chemin de la mouette", zip: "30130", phone: "06 45 20 12 39", email: "creche.pontsaintesprit@ce-lpbx.com", active: true, hours: "7h00 - 19h00", description: "<p>Située au 320 chemin de la Mouette à Pont Saint Esprit, notre micro crèche est ouverte de 7h à 19h du lundi au vendredi et peut accueillir 12 enfants âgés de 10 semaines à 3 ans.</p><p>L'équipe composée de 4 professionnels(les) de la petite enfance sera ravie de vous accueillir dans un cadre chaleureux et adapté au bien-être et au développement de votre enfant.</p><p>Notre travail au quotidien est d'accompagner votre enfant dans ses apprentissages en respectant son rythme, en créant un environnement sécurisé et propice aux expérimentations et en le laissant faire ses propres choix.</p><p>La micro crèche est aménagée de façon à créer des repères pour que votre enfant se sente libre de grandir et d'aller à la rencontre de l'autre.</p><p>Pour faciliter la verbalisation nous nous servons de la communication gestuelle, et une salle Snoezelen permet l'exploration des sens.</p><p>Notre micro-crèche est aussi un lieu d’accueil pour les familles. Notre mission est également d'être à votre écoute afin de vous accompagner au mieux dans votre parentalité.</p><p>Des temps d’échanges sont proposés tout au long de l'année : activité partagée avec vos enfants, café/parent autour d'un thème spécifique, sortie, réunion d'information ...</p><p>Notre souhait est que chaque parent et enfant trouvent sa place dans les meilleures conditions, c'est pourquoi nous vous proposons un accueil adapté à vos besoins.</p><p>Vous cherchez une place et vous souhaitez un accueil chaleureux et familial ? Alors n'hésitez plus et contacter nous pour plus de renseignements.</p><p>A très bientôt à la micro crèche Les p'tits Babadins de Pont Saint Esprit !</p>" },
    { name: "Les P’tits Babadins de Sigournais", slug: "les-ptits-babadins-de-sigournais", link: "creche-les-ptits-babadins-de-sigournais", city: "Sigournais", address: "2 rue des Vignes, Actipôle de Benêtre", zip: "85110", phone: "06 98 39 42 91", email: "creche.sigournais@ce-lpbx.com", active: true, hours: "7h00 - 19h00" },
    { name: "Les P’tits Babadins de Bournezeau", slug: "les-ptits-babadins-de-bournezeau", link: "creche-les-ptits-babadins-de-bournezeau", city: "Bournezeau", address: "31 Rue de l'Oiselière", zip: "85480", phone: "06 98 39 42 91", email: "creche.bournezeau@ce-lpbx.com", active: true, hours: "7h00 - 18h30" },
    { name: "Les P’tits Babadins de Grosbreuil", slug: "les-ptits-babadins-de-grosbreuil", link: "creche-les-ptits-babadins-de-grosbreuil", city: "Grosbreuil", address: "Rue des Sports", zip: "85440", phone: "06 98 39 42 91", email: "sigournais@lespetitsbabadins.com", active: true, hours: "7h30 - 18h30" },
    { name: "Les p’tits Babadins de Saint Aubin du Cormier", slug: "les-ptits-babadins-de-saint-aubin-du-cormier", link: "creche-les-ptits-babadins-de-saint-aubin-du-cormier", city: "Saint-Aubin-du-Cormier", address: "1 Rue du Trégor", zip: "35140", phone: "07 52 08 46 12", email: "questembert@lespetitsbabadins.com", active: true, hours: "7h00 - 19h00" },

    // --- Group 2: New Additions (With Phone & Hours) ---
    { name: "Les p’tits Babadins de Questembert", slug: "les-ptits-babadins-de-questembert", link: "creche-les-ptits-babadins-de-questembert", address: "2 Impasse du Verger", zip: "56230", city: "Questembert", phone: "07 56 27 77 70", email: "severine.eon@ce-lpbx.com", active: true, hours: "7h30 - 19h00" },
    { name: "Les p’tits Babadins de Melesse", slug: "les-ptits-babadins-de-melesse", link: "creche-les-ptits-babadins-de-melesse", address: "11 rue des Olivettes", zip: "35520", city: "Melesse", phone: "07 52 08 46 12", active: true, hours: "7h00 - 19h00" },
    { name: "Les p’tits Babadins de Pleuven", slug: "les-ptits-babadins-de-pleuven", link: "creche-les-ptits-babadins-de-pleuven", address: "12 Ter Ty Keravec", zip: "29170", city: "Pleuven", phone: "07 52 08 46 12", active: true, hours: "7h30 - 19h00" },

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
    { name: "Les P’tits Babadins de Tavers", slug: "les-ptits-babadins-de-tavers", link: "creche-les-ptits-babadins-de-tavers", address: "11 rue des Gratelièvres", zip: "45190", city: "Tavers", phone: "06 02 26 63 27", email: "creche.tavers@ce-lpbx.com", active: true, hours: "7h00 - 19h00" },
    { name: "Les P’tits Babadins Meung-sur-Loire", slug: "les-ptits-babadins-meung-sur-loire", link: "creche-les-ptits-babadins-meung-sur-loire", address: "3 mail des trois roses", zip: "45130", city: "Meung-sur-Loire", phone: "07.80.16.88.03", email: "creche.msl@ce-lpbx.com", active: true, hours: "7h00 - 19h00" },
    { name: "Les p'tits Babadins de Coëtmieux", slug: "les-ptits-babadins-de-coetmieux", link: "creche-les-ptits-babadins-de-coetmieux", address: "30 bis rue de la Truite", zip: "22400", city: "Coëtmieux", phone: "06 02 71 58 96", email: "creche.coetmieux@ce-lpbx.com", active: true, hours: "7h30 - 18h30" },
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
    { name: "Les p'tits Babadins de Faye d'Anjou", slug: "faye-danjou", link: "creche-faye-danjou", city: "Faye d'Anjou", address: "4 ter rue des monts", zip: "49380", phone: "07 44 98 74 20", email: "mcfayedanjou@gmail.com", active: true, hours: "7h00 - 19h00" },
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
    { name: "Micro-crèche les p'tits Babadins Sisteron", slug: "micro-creche-les-ptits-babadins-sisteron", link: "creche-micro-creche-les-ptits-babadins-sisteron", city: "Sisteron", address: "27 Allée des Tilleuls", zip: "04200", phone: "06 74 28 95 10", email: "mathilde.moreau@ce-lpbx.com", active: true, hours: "6h - 20h" },
    { name: "Les p'tits Babadins de Boissy-le-Châtel", slug: "les-ptits-babadins-de-boissy-le-chatel", link: "creche-les-ptits-babadins-de-boissy-le-chatel", city: "Boissy-le-Châtel", address: "Rue de la ZAC des 18 Arpents", zip: "77169", phone: "07.44.41.46.32", active: true, hours: "7h30 - 19h" },
    { name: "Les P’tits Babadins de Clamart", slug: "les-ptits-babadins-de-clamart", link: "creche-les-ptits-babadins-de-clamart", city: "Clamart", address: "32 rue Georges Huguet", zip: "92140", phone: "01 88 75 02 30 / 07 44 47 88 96", email: "creche.clamart@ce-lpbx.com", active: true, hours: "8h00 - 19h00" },

    // --- New Additions (Manual Batch) ---
    { name: "Coccinelle", slug: "coccinelle", link: "creche-coccinelle", city: "St Barthelemy d'Anjou", address: "2 rue de la Morellerie", zip: "49124", phone: "06.15.52.90.31", email: "eva.zara@hotmail.fr", active: true, hours: "7h30 - 18h30" },
    { name: "Micro- Crèche La Fayette", slug: "micro--creche-la-fayette", link: "creche-micro-creche-la-fayette", city: "Angers", address: "26 rue de Brissac", zip: "49000", active: true, hours: "7h30 - 18h30" },
    { name: "La Cabane des doudous", slug: "la-cabane-des-doudous", link: "creche-la-cabane-des-doudous", city: "St Jean de Boiseau", address: "Impasse des Forgerons", zip: "44640", phone: "06.60.39.21.07", email: "olivier.landrieau@bbox.fr", active: true, hours: "7h45 à 18h30" },
    { name: "Choupie et Bibou", slug: "choupie-et-bibou", link: "creche-choupie-et-bibou", city: "St Jean de Boiseau", address: "Impasse des Forgerons", zip: "44640", email: "olivier.landrieau@bbox.fr", active: true, hours: "7h45 à 18h30" },
    { name: "Lililou Micro-Creche", slug: "lililou-micro-creche", link: "creche-lililou-micro-creche", city: "La Chapelle sur Erdre", address: "1 bis rue Newton", zip: "44240", phone: "06.86.15.62.18", email: "lachapellesurerdre@ce-lpbx.com", active: true, hours: "7h30 - 18h30" },

    // --- New Additions (Image Source 2026) ---
    { name: "Les p'tits Babadins de Saint-Maixent-l'École", slug: "les-ptits-babadins-de-saint-maixent-lecole", link: "creche-les-ptits-babadins-de-saint-maixent-lecole", city: "Saint-Maixent-l'École", address: "28 rue d'Horsham", zip: "79400", phone: "06 19 64 60 89", email: "creche.saintmaixent@ce-lpbx.com", active: true, hours: "7h30 - 18h30" },
    { name: "Les p'tits Babadins de Janzé", slug: "les-ptits-babadins-de-janze", link: "creche-les-ptits-babadins-de-janze", city: "Janzé", address: "18 bis rue de la Houlette", zip: "35150", phone: "07 52 08 46 12", email: "Creche.janze1@ce-lpbx.com", active: true, hours: "7h30 - 19h" },
    { name: "Les p'tits Babadins de Guichen", slug: "les-ptits-babadins-de-guichen", link: "creche-les-ptits-babadins-de-guichen", city: "Guichen", address: "24 rue Denis Papin", zip: "35580", phone: "07 52 08 46 12", email: "Creche.guichen@ce-lpbx.com", active: true, hours: "7h30 - 19h" },
    { name: "Les p'tits Babadins de Noyal-Châtillon-sur-Seiche", slug: "les-ptits-babadins-noyal-chatillon-sur-seiche", link: "creche-les-ptits-babadins-noyal-chatillon-sur-seiche", city: "Noyal-Châtillon-sur-Seiche", address: "30 rue de saint Erblon", zip: "35230", phone: "07 52 08 46 12", email: "Creche.noyal@ce-lpbx.com", active: true, hours: "7h30 - 19h", capacity: 12 },
    { name: "Les p'tits Babadins de Rennes", slug: "les-ptits-babadins-de-rennes", link: "creche-les-ptits-babadins-de-rennes", city: "Rennes", address: "2 rue ambroisine Garnier Leray", zip: "35000", phone: "07 52 08 46 12", email: "Creche.rennes@ce-lpbx.com", active: true, hours: "7h30 - 19h" },
    { name: "Les p'tits Babadins de Janzé 2", slug: "les-ptits-babadins-de-janze-2", link: "creche-les-ptits-babadins-de-janze-2", city: "Janzé", address: "184 rue de la Houlette", zip: "35150", phone: "07.52.08.46.12/ 07.66.82.25.71", active: true, hours: "7h30 - 19h" },
    { name: "Les p'tits Babadins de Rennes ZI SUD EST", slug: "les-ptits-babadins-de-rennes-zi-sud-est", link: "creche-les-ptits-babadins-de-rennes-zi-sud-est", city: "Rennes", address: "2 rue Ambroisine Garnier Leray", zip: "35000", active: true, hours: "7h30 - 19h" },
    { name: "La Ronde de Carnelle", slug: "la-ronde-de-carnelle", link: "creche-la-ronde-de-carnelle", city: "Saint-Martin-du-Tertre", address: "Halte Garderie Val d'Oise", zip: "95270", email: "laure.bouniol@ce-lpbx.com", active: true, hours: "7h - 19h" },
    { name: "Les P'tits Babadins de St Agathon", slug: "les-ptits-babadins-de-st-agathon", link: "creche-les-ptits-babadins-de-st-agathon", city: "Saint-Agathon", address: "Chemin des écoliers", zip: "22200", phone: "07 44 44 31 84", active: true, hours: "7h30 - 18h30" },
    { name: "Les P'tits Pirates", slug: "les-ptits-pirates", link: "creche-les-ptits-pirates", city: "Lamballe", address: "74 Bis Rue de la Déhanne Maroué", zip: "22400", phone: "06 02 71 58 96", email: "creche.lamballe@ce-lpbx.com", active: true, hours: "7h30 - 18h30" },
    { name: "Les P'tits Babadins de St Yvi", slug: "les-ptits-babadins-de-st-yvi", link: "creche-les-ptits-babadins-de-st-yvi", city: "Saint-Yvi", zip: "29140", active: true, hours: "7h30 - 18h30" },
    { name: "Les p'tits Bababins de Puy l'évêque", slug: "les-ptits-bababins-de-puy-leveque", link: "creche-les-ptits-bababins-de-puy-leveque", city: "Puy-l'Évêque", zip: "46700", active: true, hours: "7h30 - 18h30" },
    { name: "Aizenay", slug: "aizenay", link: "creche-aizenay", city: "Aizenay", zip: "85190", active: true, hours: "7h30 - 18h30" },
    { name: "Les p'tits Babadins de Mainvilliers", slug: "les-ptits-babadins-de-mainvilliers", link: "creche-les-ptits-babadins-de-mainvilliers", city: "Mainvilliers", address: "4 rue Paul Emile Victor", zip: "28300", phone: "07 82 58 90 32", email: "creche.mainvilliers@ce-lpbx.com", active: true, hours: "7h30 - 18h30" },
    { name: "Les p'tits Babadins de Luisant", slug: "les-ptits-babadins-de-luisant", link: "creche-les-ptits-babadins-de-luisant", city: "Luisant", address: "52 Rue du Val de la Cavée", zip: "28600", phone: "06 64 91 98 96", email: "creche.luisant@ce-lpbx.com", active: true, hours: "7h30 - 18h30" },
    { name: "Les p'tits Babadins de Gellainville", slug: "les-ptits-babadins-de-gellainville", link: "creche-les-ptits-babadins-de-gellainville", city: "Gellainville", address: "3 Parc de l'Équerre", zip: "28630", phone: "06 64 91 98 96", email: "creche.gelainville@ce-lpbx.com", active: true, hours: "7h30 - 18h30" },
    { name: "Les p'tits Babadins de La Riche", slug: "les-ptits-babadins-de-la-riche", link: "creche-les-ptits-babadins-de-la-riche", city: "La Riche", address: "15 rue de la Chapelle", zip: "37520", phone: "06 38 41 23 23", email: "creche.lariche@ce-lpbx.com", active: true, hours: "7h30 - 18h30" },
    { name: "Les p'tits Babadins de Joué-lès-Tours", slug: "les-ptits-babadins-de-joue-les-tours", link: "creche-les-ptits-babadins-de-joue-les-tours", city: "Joué-lès-Tours", address: "19 Rue de la Flottière", zip: "37300", phone: "06 38 41 23 23", email: "creche.jlt@ce-lpbx.com", active: true, hours: "7h30 - 18h30" },
    { name: "Les p'tits Babadins de Villeneuve sur Lot", slug: "les-ptits-babadins-de-villeneuve-sur-lot", link: "creche-les-ptits-babadins-de-villeneuve-sur-lot", city: "Villeneuve-sur-Lot", address: "560 rue de la Dardenne", zip: "47300", phone: "05 53 49 27 15", email: "t.villeneuve@ce-lpbx.com", active: true, hours: "07h30 - 19h00" },
    { name: "Les p'tits Babadins de Saint-Quay-Perros", slug: "les-ptits-babadins-de-saint-quay-perros", link: "creche-les-ptits-babadins-de-saint-quay-perros", city: "Saint-Quay-Perros", address: "8 rue résidence de Kreas Hent", zip: "22700", phone: "06 23 98 08 51", email: "stquayperros@lespetitsbabadins.com", active: true, hours: "7h30 - 18h30" },
    { name: "Les p'tits Babadins de Bize-Minervois", slug: "les-ptits-babadins-de-bize-minervois", link: "creche-les-ptits-babadins-de-bize-minervois", city: "Bize-Minervois", address: "3 Rue des Vignerons", zip: "11120", phone: "06 83 01 96 93", active: true, hours: "7h30 - 18h30" },
    { name: "Crèches Expansion Saint Malo", slug: "creche-saint-malo", link: "creche-saint-malo", city: "Saint Malo", address: "16 rue de la croix Desilles", zip: "35400", email: "creche.saintmalo@ce-lpbx.com", active: true, hours: "07h00 - 19h00" },
    { name: "Les p'tits Babadins de Mazères", slug: "les-ptits-babadins-de-mazeres", link: "creche-les-ptits-babadins-de-mazeres", city: "Mazères", address: "16 Rue des Acacias", zip: "33210", phone: "07 49 89 35 94", active: true, hours: "07h30 - 18h30" },
    { name: "Crèches Expansion Livre sur Changeon", slug: "creches-expansion-livre-sur-changeon", link: "creche-creches-expansion-livre-sur-changeon", city: "Livré-sur-Changeon", address: "8 Rue Jean Berçu", zip: "35450", email: "creche.livresurchangeon@ce-lpbx.com", active: true, hours: "7h - 19h", capacity: 12 },
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
    'Les Bébés De Laguarigue', 'Les Bébés Du Faubourg', 'La cabane des Galopins',
    'Les P’tits Babadins de Mellac', 'Les p\'tits babadins de Quimperlé', 'Au Pays des Sens', 'Crèche Expansion Savenay 1', 'Ptits Babadins Téloché',
    'MC de Louargat', 'Les p\'tits Babadins de Wargnies le Grand', 'Les p\'tits Babadins de Lorient', 'Les P’tits Babadins de Pont Saint Esprit',
    'Les P’tits Babadins de Sigournais', 'Les P’tits Babadins de Bournezeau', 'Les P’tits Babadins de Grosbreuil', 'La Maison des Petits Maraichins',
    'La Villa des Petits Garnachois', 'Les P’tits Babadins de St Hilaire', 'Les p\'tits Babadins de Quéven', 'La Ville Dieu Crèche',
    'Les P’tits Babadins Perpignan', 'Les P’tits Babadins Avermes', 'Les P’tits Babadins Baldersheim', 'Les P’tits Babadins Grussenheim',
    'Les P’tits Babadins Montivilliers', 'Les P’tits Babadins Saint Chamond', 'Au Saut du nid', 'Tintinna Bulle', 'Les p\'tits charrettes',
    'Les p\'tits Babadins de Masny', 'Les p\'tits Bababins d\'Aniche', 'Les p\'tits Babadins de Beuvry', 'Les p\'tits Babadins de Etival lès le Mans',
    'Les p\'tits Babadins de Saint Nicolas de Redon', 'Les p’tits Babadins de Pasquis 2', 'Le Grandchamp des Enfants', 'Les enfants des Fontaines',
    'A Petits Pas', 'Les Lutins du Bois Joli', 'Les p\'tits Babadins de Saveuse', 'Les p\'tit Babadins de Poullainville 2', 'Les p\'tits Babadins de Aubenas',
    'Micro-crèche Les Singulières', 'Micro-crèche Abolena', 'Bastida', 'Micro-crèche Castel', 'Micro-crèche du Meyrol'
];

crechesData = crechesData.filter(c => !removals.includes(c.name));


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
        "49380": [47.2944, -0.5125], // Faye d'Anjou
        "49124": [47.4667, -0.4833], // St Barthelemy d'Anjou
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


document.addEventListener('DOMContentLoaded', () => {
    console.log('Les p’tits Babadins - Site chargé v20.0');

    // --- DYNAMIC DETAIL LOADER ---
    try {
        const detailContainer = document.getElementById('creche-detail-container');
        if (detailContainer) {
            const params = new URLSearchParams(window.location.search);
            let slug = params.get('slug') || params.get('creche');
            
            // Fallback: Parse from URL path if clean URLs are used
            if (!slug) {
                const pathParts = window.location.pathname.split('/');
                const lastPart = pathParts[pathParts.length - 1].replace('.html', '');
                if (lastPart.startsWith('creche-')) slug = lastPart.replace('creche-', '');
            }

            const creche = crechesData.find(c => 
                c.slug === slug || 
                c.link === slug || 
                c.link === `creche-${slug}.html` ||
                c.link === `creche-${slug}`
            );

            if (creche) {
                document.title = `${creche.name} | Les p’tits Babadins ${creche.city}`;
                detailContainer.innerHTML = `
                    <header class="page-header" style="background-image: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('images/hero_child_right.webp');">
                        <div class="container">
                            <h1>${creche.name}</h1>
                            <p>${creche.city} (${creche.zip || ''})</p>
                        </div>
                    </header>
                    <section class="section-padding">
                        <div class="container">
                            <div style="display: grid; grid-template-columns: 2fr 1fr; gap: 3rem;">
                                <div>
                                    <h2 class="text-brand-blue">Le bien-être de votre enfant est notre priorité</h2>
                                    <p>Située à ${creche.city}, notre micro-crèche accueille vos enfants dans un espace sécurisé, propice à la découverte et à l'éveil.</p>
                                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-top: 2rem;">
                                        <div class="feature-card-premium">
                                            <h3>⏰ Horaires Souples</h3>
                                            <p>${creche.hours || 'Ouverture de 07h30 à 19h00'} pour simplifier votre organisation.</p>
                                        </div>
                                        <div class="feature-card-premium">
                                            <h3>🍼 Équipe Experte</h3>
                                            <p>Des professionnels de la petite enfance formés à l'éducation bienveillante.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="sidebar">
                                    <div style="background: var(--color-beige-light); padding: 2rem; border-radius: 1.5rem;">
                                        <h3 class="text-brand-blue" style="margin-bottom: 1.5rem;">Contact & Infos</h3>
                                        <p><strong>📍 Adresse :</strong><br>${creche.address || 'Contactez-nous pour l\'adresse'}<br>${creche.zip || ''} ${creche.city}</p>
                                        <p style="margin-top: 1rem;"><strong>📞 Téléphone :</strong><br>${creche.phone || '01 00 00 00 00'}</p>
                                        <p style="margin-top: 1rem;"><strong>📧 Email :</strong><br>${creche.email || 'contact@lespetitsbabadins.com'}</p>
                                        <a href="pre-inscription.html?creche=${encodeURIComponent(creche.name)}" class="btn btn-primary" style="width: 100%; text-align: center; margin-top: 1.5rem; display: block;">Pré-inscription</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                `;
            } else {
                detailContainer.innerHTML = '<div class="container" style="padding:100px 0; text-align:center;"><h2>Crèche non trouvée</h2><p>Désolé, nous ne trouvons pas cette crèche.</p><a href="creches.html" class="btn btn-primary">Voir toutes nos crèches</a></div>';
            }
        }
    } catch (e) { console.error("Detail Loader Error:", e); }


    // --- PROXIMITY WIDGET FOR STATIC PAGES ---
    const nearbyContainer = document.getElementById('nearby-creches-container');
    if (nearbyContainer) {
        const path = window.location.pathname;
        const filename = path.split('/').pop().replace('.html', '');
        const currentCreche = crechesData.find(c => c.link === filename || c.link === filename + '.html' || c.slug === filename.replace('creche-', ''));
        
        if (currentCreche && ZIP_COORDS[currentCreche.zip]) {
            const coords = ZIP_COORDS[currentCreche.zip];
            const nearby = crechesData
                .filter(c => c.name !== currentCreche.name && ZIP_COORDS[c.zip])
                .map(c => ({...c, dist: calculateDistance(coords[0], coords[1], ZIP_COORDS[c.zip][0], ZIP_COORDS[c.zip][1])}))
                .filter(c => c.dist < 50)
                .sort((a,b) => a.dist - b.dist)
                .slice(0, 3);
                
            if (nearby.length > 0) {
                nearbyContainer.innerHTML = '<h3>Crèches à proximité</h3><div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap:1rem; margin-top:1.5rem;">' + 
                    nearby.map(n => `
                        <div class="feature-card-premium" style="padding:1rem;">
                            <h4>${n.name}</h4>
                            <p style="font-size:0.9rem;">${n.city} (${Math.round(n.dist)}km)</p>
                            <a href="${n.link}" style="color:var(--brand-pink); font-weight:bold; font-size:0.8rem;">Découvrir →</a>
                        </div>
                    `).join('') + '</div>';
            }
        }
    }

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



    // --- MOBILE MENU ---
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    if (mobileBtn && navLinks) {
        mobileBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            mobileBtn.classList.toggle('active');
        });
    }
});

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

