const crechesData = [
    // --- Group 1: From Initial Lists (Enriched) ---
    { name: "Marssac sur Tarn", link: "creche-marssac-sur-tarn.html", city: "Marssac sur Tarn", address: "1 Avenue d'Albi", zip: "81150", phone: "06 56 67 49 65", email: "direction.marssacsurtarn@lespetitsbabadins.com", active: true, hours: "7h30 - 18h30" },
    { name: "Les P’tits Babadins de Mellac", link: "creche-les-ptits-babadins-de-mellac.html", city: "Mellac", address: "ZA de Kervidanou 3", zip: "29300", phone: "07 69 63 40 66", email: "mellac@lespetitsbabadins.com", active: true, hours: "7h30 - 19h00" },
    { name: "Au Pays des Sens", link: "creche-au-pays-des-sens.html", city: "Saint Germain du Puy", address: "Rue des Vignes", zip: "18390", phone: "06 89 32 30 91", email: "aupaysdessens@lespetitsbabadins.com", active: true, hours: "7h30 - 18h30" },
    { name: "Les P’tits Babadins de Souppes", link: "creche-les-ptits-babadins-de-souppes.html", city: "Souppes-sur-Loing", address: "2 Rue du Roulis", zip: "77460", phone: "07 81 11 16 60", email: "souppes@lespetitsbabadins.com", active: true, hours: "7h00 - 19h00" },
    { name: "Les P’tits Babadins 79260 La Crèche", link: "creche-les-ptits-babadins-79260-la-creche.html", city: "La Crèche", address: "ZA Baussais 7 rue Vasco de Gama", zip: "79260", phone: "06 19 64 60 89", email: "direction.lacreche@lespetitsbabadins.com", active: true, hours: "7h30 - 18h30" },

    { name: "Les P’tits Babadins Pordic", link: "creche-les-ptits-babadins-pordic.html", city: "Pordic", address: "Rue de la Ville És Lan", zip: "22590", phone: "06 59 04 57 39", email: "pordic@lespetitsbabadins.com", active: true, hours: "7h30 - 18h30" },
    { name: "Crèche Expansion Savenay 2", link: "creche-creche-expansion-savenay-2.html", city: "Savenay", address: "Parc d'Activité de la Colleraye", zip: "44260", phone: "06 66 17 81 42", email: "emilieguerin30@gmail.com", active: true, hours: "7h30 - 19h00" },
    { name: "Crèche Expansion Montluçon", link: "creche-creche-expansion-montluon.html", city: "Montluçon", address: "217 Bis avenue John F Kennedy", zip: "03100", phone: "06 64 31 36 54", email: "montlucon@lespetitsbabadins.com", active: true, hours: "7h30 - 18h30" },
    { name: "Ptits Babadins Téloché", link: "creche-ptits-babadins-teloche.html", city: "Téloché", address: "ZA de la Bodinière", zip: "72220", phone: "07 81 01 88 22", email: "teloche@lespetitsbabadins.com", active: true, hours: "7h30 - 18h30" },
    { name: "MC de Louargat", link: "creche-mc-de-louargat.html", city: "Louargat", address: "Rue de la Mairie", zip: "22540", phone: "06 23 98 80 51", email: "stquayperros@lespetitsbabadins.com", active: true, hours: "7h30 - 18h30" },
    { name: "Les p'tits Babadins de Wargnies le Grand", link: "creche-wargnies-le-grand.html", city: "Wargnies-le-Grand", address: "ZA de la Vallée de l'Aunelle, 8 N Route nationale", zip: "59144", phone: "06 73 51 78.63", email: "creche.wargnies@ce-lpbx.com", active: true, hours: "7h30 - 18h30" },
    { name: "CRECHES EXPANSION Lorient", link: "creche-creches-expansion-lorient.html", city: "Lorient", address: "1 Rue Jules Legrand", zip: "56100", phone: "07 69 63 40 66", email: "mellac@lespetitsbabadins.com", active: true, hours: "7h30 - 19h00" },
    { name: "Les P’tits Babadins de Pont Saint Esprit", link: "creche-les-ptits-babadins-de-pont-saint-esprit.html", city: "Pont-Saint-Esprit", address: "Avenue du Général de Gaulle", zip: "30130", phone: "06 82 96 24 00", email: "pontsaintesprit@lespetitsbabadins.com", active: true, hours: "7h30 - 18h30" },
    { name: "Les P’tits Babadins de Sigournais", link: "creche-les-ptits-babadins-de-sigournais.html", city: "Sigournais", address: "2 rue des Vignes, Actipôle de Benêtre", zip: "85110", phone: "06 98 39 42 91", email: "sigournais@lespetitsbabadins.com", active: true, hours: "7h30 - 18h30" },
    { name: "Les P’tits Babadins de Bournezeau", link: "creche-les-ptits-babadins-de-bournezeau.html", city: "Bournezeau", address: "31 Rue de l'Oiselière", zip: "85480", phone: "06 98 39 42 91", email: "contact@lesptitsbabadins.com", active: true, hours: "7h30 - 18h30" },
    { name: "Les P’tits Babadins de Grosbreuil", link: "creche-les-ptits-babadins-de-grosbreuil.html", city: "Grosbreuil", address: "Rue des Sports", zip: "85440", phone: "06 98 39 42 91", email: "sigournais@lespetitsbabadins.com", active: true, hours: "7h30 - 18h30" },
    { name: "Les p’tits Babadins de Saint Aubin du Cormier", link: "creche-les-ptits-babadins-de-saint-aubin-du-cormier.html", city: "Saint-Aubin-du-Cormier", address: "ZA de la Motte", zip: "35140", phone: "07 56 27 77 70", email: "questembert@lespetitsbabadins.com", active: true, hours: "7h30 - 18h30" },

    // --- Group 2: New Additions (With Phone & Hours) ---
    { name: "Les p’tits Babadins de Questembert", link: "creche-les-ptits-babadins-de-questembert.html", address: "Rue des Fougères", zip: "56230", city: "Questembert", phone: "07 56 27 77 70", active: true, hours: "7h30 - 18h30" },
    { name: "Les p’tits Babadins d'Arzal", link: "creche-les-ptits-babadins-darzal.html", address: "Rue du Pont", zip: "56190", city: "Arzal", phone: "07 56 27 77 70", active: true, hours: "7h30 - 18h30" },
    { name: "Les p’tits Babadins de Melesse", link: "creche-les-ptits-babadins-de-melesse.html", address: "3 Rue du Tertre", zip: "35520", city: "Melesse", phone: "07 56 27 77 70", active: true, hours: "7h30 - 18h30" },
    { name: "Les p’tits Babadins de Pleuven", link: "creche-les-ptits-babadins-de-pleuven.html", address: "7 Rue de l'Odet", zip: "29170", city: "Pleuven", phone: "07 56 27 77 70", active: true, hours: "7h30 - 18h30" },
    { name: "Micro crèche St agathon", link: "creche-micro-creche-st-agathon.html", address: "12 Rue d'Armor", zip: "22200", city: "Saint-Agathon", phone: "06 23 98 80 51", active: true, hours: "7h30 - 18h30" },
    { name: "Micro crèche de Saint Quay Perros", link: "creche-micro-creche-de-saint-quay-perros.html", address: "Rue de la Liberté", zip: "22700", city: "Saint-Quay-Perros", phone: "07 57 59 33 56", active: true, hours: "7h30 - 18h30" },

    { name: "La Maison des Petits Maraichins", link: "creche-la-maison-des-petits-maraichins.html", address: "30 Rue du Maréchal Joffre", zip: "85300", city: "Challans", phone: "07 55 60 75 11", active: true, hours: "7h30 - 19h00" },
    { name: "La Villa des Petits Garnachois", link: "creche-la-villa-des-petits-garnachois.html", address: "Rue des Ciseleurs", zip: "85710", city: "La Garnache", phone: "07 55 60 75 11", active: true, hours: "7h30 - 19h00" },
    { name: "Les P’tits Babadins de St Hilaire", link: "creche-les-ptits-babadins-de-st-hilaire.html", address: "12 Rue de la Mignelle", zip: "85270", city: "Saint-Hilaire-de-Riez", phone: "02 79 40 08 86", active: true, hours: "7h30 - 19h00" },
    { name: "Les P’tits Babadins de St Jean de Monts", link: "creche-les-ptits-babadins-de-st-jean-de-monts.html", address: "11 Rue des Chevilles", zip: "85160", city: "Saint-Jean-de-Monts", phone: "07 55 60 75 11", active: true, hours: "7h30 - 19h30" },
    { name: "Les P’tits Babadins d’Aizenay", link: "creche-les-ptits-babadins-daizenay.html", address: "1 Rue Mgr Gendreau", zip: "85190", city: "Aizenay", phone: "07 55 60 75 11", active: true, hours: "7h30 - 19h00" },

    { name: "Les p'tits Babadins de Quéven", link: "creche-les-ptits-babadins-de-queven.html", address: "34 Rue Fontaine de Barenton", zip: "56185", city: "Quéven", phone: "07 69 63 40 66", active: true, hours: "7h30 - 19h00" },
    { name: "Crèches Expansion Saintes", link: "creche-creches-expansion-saintes.html", address: "83 Cours Maréchal Leclerc", zip: "17100", city: "Saintes", phone: "06 00 00 00 00", active: true, hours: "7h30 - 18h30" },
    { name: "Crèche Expansion Montbert", link: "creche-creche-expansion-montbert.html", address: "Rue du Stade", zip: "44140", city: "Montbert", phone: "06 86 15 62 18", active: true, hours: "7h30 - 18h30" },
    { name: "La Ville Dieu Crèche", link: "creche-la-ville-dieu-creche.html", address: "50 chemin de Champredon", zip: "7170", city: "Lavilledieu", phone: "06 07 06 47 44", active: true, hours: "7h30 - 18h30" },
    { name: "Les P’tits Babadins de la Roche", link: "creche-les-ptits-babadins-de-la-roche.html", address: "3 Rue des Entrepreneurs", zip: "85000", city: "La Roche-sur-Yon", phone: "06 62 10 19 83", active: true, hours: "7h30 - 19h00" },
    { name: "Les P’tits Babadins Saint-André d’Ornay", link: "creche-les-ptits-babadins-saint-andre-dornay.html", address: "3 Rue des Entrepreneurs", zip: "85000", city: "La Roche-sur-Yon", phone: "07 82 84 71 66", active: true, hours: "7h30 - 19h00" },
    { name: "Micro-crèche de La Roche (Wilson)", link: "creche-micro-creche-de-la-roche-wilson.html", address: "50 Rue du Président Wilson", zip: "85000", city: "La Roche-sur-Yon", phone: "06 62 10 19 83", active: true, hours: "7h30 - 19h00" },
    { name: "Les P’tits Babadins Perpignan", link: "creche-perpignan.html", address: "7 Allée Borée", zip: "66000", city: "Perpignan", phone: "06 81 30 04 27", email: "creche.perpignan@ce-lpbx.com", active: true, hours: "7h30 - 19h00" },
    { name: "Crèches Expansion Lorient", link: "creche-creches-expansion-lorient.html", address: "1 Rue Jules Legrand", zip: "56100", city: "Lorient", phone: "07 69 63 40 66", active: true, hours: "7h30 - 19h00" },
    { name: "Les P’tits Babadins St Vincent de Paul", link: "creche-les-ptits-babadins-st-vincent-de-paul.html", address: "23 Rue des Deux Sèvres", zip: "33440", city: "Saint-Vincent-de-Paul", phone: "07 44 40 52 60", active: true, hours: "7h30 - 18h30" },
    { name: "Les p’tits Babadins St-Aubin-sur-Scie", link: "creche-les-ptits-babadins-st-aubin-sur-scie.html", address: "35 Rue Neuve", zip: "76550", city: "Saint-Aubin-sur-Scie", phone: "07 66 91 96 65", active: true, hours: "7h30 - 18h30" },
    { name: "Micro-crèche de Souppes", link: "creche-micro-creche-de-souppes.html", address: "02 Rue du Roulis", zip: "77460", city: "Souppes-sur-Loing", phone: "07 81 11 16 60", active: true, hours: "7h00 - 19h00" },
    { name: "Micro-crèche Les P’tits Babadins d’Olivet", link: "creche-micro-creche-les-ptits-babadins-dolivet.html", address: "29 Rue Jules Marie Simon", zip: "45160", city: "Olivet", phone: "07 56 10 73 77", active: true, hours: "7h00 - 19h00" },
    { name: "Les P’tits Babadins de Tavers", link: "creche-les-ptits-babadins-de-tavers.html", address: "11 Rue des Grattelievres", zip: "45190", city: "Tavers", phone: "07 56 10 73 77", active: true, hours: "7h30 - 18h30" },
    { name: "Les P’tits Babadins Meung-sur-Loire", link: "creche-les-ptits-babadins-meung-sur-loire.html", address: "3 Mail des Trois Roses", zip: "45130", city: "Meung-sur-Loire", phone: "07 56 10 73 77", active: true, hours: "7h30 - 18h30" },
    { name: "Les P’tits Pirates", link: "creche-les-ptits-pirates.html", address: "74 bis Rue de la Déhanne", zip: "22400", city: "Lamballe", phone: "06 02 71 58 96", active: true, hours: "7h30 - 18h30" },
    { name: "Les p'tits Babadins de Coëtmieux", link: "creche-les-ptits-babadins-de-cotmieux.html", address: "30 bis rue de la Truite", zip: "22400", city: "Coëtmieux", phone: "06 02 71 58 96", active: true, hours: "7h30 - 18h30" },
    { name: "Les P’tits Babadins Avermes", link: "creche-les-ptits-babadins-avermes.html", city: "Avermes", address: "11 Rue des Saccarauds", zip: "03000", phone: "06 62 30 64 40", active: true, hours: "7h30 - 18h30" },
    { name: "Les P’tits Babadins Baldersheim", link: "creche-les-ptits-babadins-baldersheim.html", city: "Baldersheim", address: "ZA 10 Rue des Chasseurs", zip: "68390", phone: "06 63 01 97 03", active: true, hours: "7h30 - 18h30" },
    { name: "Les P’tits Babadins Belleu", link: "creche-les-ptits-babadins-belleu.html", city: "Belleu", address: "62 route de Fère en Tardenois", zip: "02200", phone: "07 68 31 79 07", active: true, hours: "7h30 - 18h30" },

    { name: "Les P’tits Babadins Grussenheim", link: "creche-les-ptits-babadins-grussenheim.html", city: "Grussenheim", address: "62 route de Colmar", zip: "68320", phone: "06 77 34 73 24", active: true, hours: "7h30 - 18h30" },
    { name: "Les p'tits Babadins de Hégenheim 1", link: "creche-hegenheim-1.html", city: "Hegenheim", address: "30 rue des Landes", zip: "68220", phone: "06 63 01 97 03", email: "creche.hegenheim1@ce-lpbx.com", active: true, hours: "7h30 - 18h30" },
    { name: "Les P’tits Babadins Montivilliers", link: "creche-les-ptits-babadins-montivilliers.html", city: "Montivilliers", address: "3 impasse Edgar Degas", zip: "76290", phone: "09 73 39 65 98", active: true, hours: "7h30 - 18h30" },
    { name: "Les P’tits Babadins Pavilly", link: "creche-les-ptits-babadins-pavilly.html", city: "Pavilly", address: "164 Boulevard Roger Fossé", zip: "76570", phone: "06 67 25 15 90", active: true, hours: "7h30 - 18h30" },
    { name: "Les P’tits Babadins Saint Chamond", link: "creche-les-ptits-babadins-saint-chamond.html", city: "Saint Chamond", address: "2A rue Marc Seguin", zip: "42400", phone: "07 61 69 28 60", active: true, hours: "7h30 - 18h30" },

    // --- New Additions (2025 Refinement) ---
    { name: "Les p'tits Babadins de Wargnies le Grand", link: "creche-wargnies-le-grand.html", city: "Wargnies-le-Grand", address: "ZA de la Vallée de l'Aunelle, 8 N Route nationale", zip: "59144", phone: "06.73.51.78.63", email: "creche.wargnies@ce-lpbx.com", active: true, hours: "7h30 - 18h30" },
    { name: "Les p'tits Babadins de Hégenheim 1", link: "creche-hegenheim-1.html", city: "Hegenheim", address: "30 rue des Landes", zip: "68220", phone: "06 63 01 97 03", email: "creche.hegenheim1@ce-lpbx.com", active: true, hours: "7h30 - 18h30" },
    { name: "Les p'tits Babadins de Hégenheim 2", link: "creche-hegenheim-2.html", city: "Hegenheim", address: "30 A rue des Landes", zip: "68220", phone: "06 63 01 97 03", email: "creche.hegenheim2@ce-lpbx.com", active: true, hours: "7h30 - 18h30" },
    { name: "Au Saut du nid", link: "creche-au-saut-du-nid.html", city: "Tignieu-Jameyzieu", address: "38 boulevard Ampère", zip: "38230", phone: "06.70.03.61.55", email: "ausautdunid@ce-lpbx.com", active: true, hours: "7h30 - 18h30" },
    { name: "Tintinna Bulle", link: "creche-tintinna-bulle.html", city: "Tignieu-Jameyzieu", address: "Boulevard Ampère", zip: "38230", email: "tintinnabulle@ce-lpbx.com", active: true, hours: "7h30 - 18h30" },
    { name: "Les p'tits Babadins de Faye d'Anjou", link: "creche-faye-danjou.html", city: "Faye d'Anjou", address: "4 ter rue des monts", zip: "49380", phone: "07 44 98 74 20", email: "creche.fayedanjou@ce-lpbx.com", active: true, hours: "7h30 - 18h30" },
    { name: "Les p'tits Babadins de Miremont", link: "creche-miremont.html", city: "Miremont", address: "4 Voie Eris ZA Pompignal", zip: "31190", phone: "07.62.70.23.04", email: "creche.miremont@ce-lpbx.com", active: true, hours: "7h30 - 18h30" },
    { name: "Les p'tits papailloux", link: "creche-les-ptits-papailloux.html", city: "Angers", address: "24, place Terra Botanica", zip: "49100", phone: "06.62.10.19.83", active: true, hours: "7h30 - 18h30" },
    { name: "Les p'tits charrettes", link: "creche-les-ptits-charrettes.html", city: "La Roche-sur-Yon", address: "Résidence Le Tamaris, Les Prairies d’Eden", zip: "85000", email: "creche.bourgsouslaroche@ce-lpbx.com", active: true, hours: "7h30 - 18h30" },
    { name: "Les p'tits Babadins de Masny", link: "creche-masny.html", city: "Masny", address: "9 bis Rue de Froissy", zip: "59176", phone: "06 74 41 36 16", email: "creche.masny@ce-lpbx.com", active: true, hours: "7h30 - 18h30" },
    { name: "Les p'tits Bababins d'Aniche", link: "creche-aniche.html", city: "Aniche", address: "Localisation en cours", zip: "59580", email: "creche.aniche@ce-lpbx.com", active: true, hours: "7h30 - 18h30" },
    { name: "Les p'tits Babadins de Beuvry", link: "creche-beuvry.html", city: "Beuvry", address: "Localisation en cours", zip: "62660", active: true, hours: "7h30 - 18h30" },
    { name: "Les p'tits Babadins de Etival lès le Mans", link: "creche-etival-les-le-mans.html", city: "Étival-lès-le-Mans", address: "7 Rue de Siedenburg", zip: "72700", phone: "07 81 01 88 22", email: "creche.etival@ce-lpbx.com", active: true, hours: "7h30 - 18h30" },
    { name: "Les p'tits Babadins de Saint Nicolas de Redon", link: "creche-st-nicolas-de-redon.html", city: "Saint-Nicolas-de-Redon", address: "30 rue des roseaux", zip: "44460", phone: "06 76 79 63 22", email: "creche.sndr@ce-lpbx.com", active: true, hours: "7h30 - 18h30" },
    { name: "Les p'tits Babadins de PASQUIS Montluçon 2", link: "creche-montlucon-pasquis.html", city: "Montluçon", address: "48 rue de PASQUIS", zip: "03100", phone: "06.64.31.36.54", email: "creche.montlucon2@ce-lpbx.com", active: true, hours: "7h30 - 18h30" },
    { name: "Le Grandchamp des Enfants", link: "creche-grandchamp-enfants.html", city: "Grandchamp-des-Fontaines", address: "Parc d’activité de Bellevue", zip: "44119", phone: "06.14.17.72.84.", email: "grandchampsdesenfants@ce-lpbx.com", active: true, hours: "7h30 - 18h30" },
    { name: "Les enfants des Fontaines", link: "creche-enfants-des-fontaines.html", city: "Grandchamp-des-Fontaines", address: "PA de Bellevue, 13 bis rue des sports", zip: "44119", active: true, hours: "7h30 - 18h30" },
    { name: "Les p'tits babadins de Freneuse 1", link: "creche-freneuse-1.html", city: "Freneuse", address: "La Croix du Moulin - 19 rue des Bouderies", zip: "78840", phone: "06.68.74.03.33", email: "creche.freneuse1@ce-lpbx.com", active: true, hours: "7h30 - 18h30" },
    { name: "Les p'tits babadins de Freneuse 2", link: "creche-freneuse-2.html", city: "Freneuse", address: "La Croix du Moulin - 19 rue des Bouderies", zip: "78840", email: "creche.freneuse2@ce-lpbx.com", active: true, hours: "7h30 - 18h30" },
    { name: "A Petits Pas", link: "creche-auzeville-a-petits-pas.html", city: "Auzeville-Tolosane", address: "5 Av Daniel Brisebois", zip: "31320", phone: "06.24.51.09.60", email: "apetitspas@ce-lpbx.com", active: true, hours: "7h30 - 18h30" },
    { name: "Les Lutins du Bois Joli", link: "creche-auzeville-lutins.html", city: "Auzeville-Tolosane", address: "3 Av Daniel Brisebois", zip: "31320", email: "leslutinsduboisjoli@ce-lpbx.com", active: true, hours: "7h30 - 18h30" },
    { name: "Les p'tits Babadins de Saveuse", link: "creche-saveuse.html", city: "Saveuse", address: "Localisation en cours", zip: "80470", email: "creche.poulainville2@ce-lpbx.com", active: true, hours: "7h30 - 18h30" },
    { name: "Les p'tit Babadins de Poullainville 2", link: "creche-poulainville-2.html", city: "Poulainville", address: "Chemin de Longpré", zip: "80260", email: "creche.saveuse@ce-lpbx.com", active: true, hours: "7h30 - 18h30" },
    { name: "Les p'tits Babadins de Aubenas", link: "creche-aubenas.html", city: "Aubenas", address: "72A Av. de Roqua", zip: "07200", email: "creche.aubenas@ce-lpbx.com", active: true, hours: "7h30 - 18h30" },
    { name: "Micro-crèche Les Singulières", link: "creche-montelier.html", city: "Montelier", address: "Rue des Charmilles", zip: "26120", phone: "06.38.01.95.38", email: "lessingulieres@ce-lpbx.com", active: true, hours: "7h30 - 18h30" },
    { name: "Micro-crèche Abolena", link: "creche-bollene.html", city: "Bollene", address: "183 avenue Georges Melies", zip: "84500", email: "abolena@ce-lpbx.com", active: true, hours: "7h30 - 18h30" },
    { name: "Bastida", link: "creche-bastida.html", city: "La Bâtie-Rolland", address: "725 route de Montélimar", zip: "26160", email: "bastida@ce-lpbx.com", active: true, hours: "7h30 - 18h30" },
    { name: "Micro-crèche Castel", link: "creche-chateauneuf-du-rhone.html", city: "Châteauneuf-du-Rhône", address: "240 Impasse des buis", zip: "26780", email: "castel@ce-lpbx.com", active: true, hours: "7h30 - 18h30" },
    { name: "Micro-crèche du Meyrol", link: "creche-montelimar.html", city: "Montélimar", address: "9 Allée de Barjac", zip: "26200", email: "meyrol@ce-lpbx.com", active: true, hours: "7h30 - 18h30" }

];


document.addEventListener('DOMContentLoaded', () => {
    console.log("Les p’tits Babadins - Site chargé");

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
        const creches = crechesData;
        const searchInput = document.querySelector('.search-input');
        const searchBtn = document.getElementById('searchBtn');
        const clearBtn = document.getElementById('clearSearch');

        function renderCreches(filterValue = "", type = "search", label = "") {
            crechesContainer.innerHTML = '';
            const normalize = (str) => str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
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
                        (c.zip && c.zip.includes(lowerFilter));
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

                let hash = 0;
                for (let i = 0; i < c.name.length; i++) {
                    hash = c.name.charCodeAt(i) + ((hash << 5) - hash);
                }
                const lockId = Math.abs(hash % 1000);

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
                    const keywords = ['child,daycare', 'toddler,nursery', 'baby', 'kids', 'playground'];
                    const keywordIndex = Math.abs(hash % keywords.length);
                    const category = keywords[keywordIndex];
                    imgUrl = `https://loremflickr.com/400/300/${category}?lock=${lockId}`;
                }

                // AI Simulated availability badge based on hash
                const availScore = hash % 10;
                let availHtml = "";
                if (c.active) {
                    if (availScore > 7) {
                        availHtml = '<span style="position: absolute; top: 10px; right: 10px; background: var(--brand-green); color: white; padding: 4px 12px; border-radius: 20px; font-size: 0.8rem; font-weight: 700; box-shadow: 0 2px 8px rgba(0,0,0,0.2); z-index: 5;">Places dispos</span>';
                    } else if (availScore > 4) {
                        availHtml = '<span style="position: absolute; top: 10px; right: 10px; background: var(--brand-orange); color: white; padding: 4px 12px; border-radius: 20px; font-size: 0.8rem; font-weight: 700; box-shadow: 0 2px 8px rgba(0,0,0,0.2); z-index: 5;">Dernières places</span>';
                    } else {
                        availHtml = '<span style="position: absolute; top: 10px; right: 10px; background: #666; color: white; padding: 4px 12px; border-radius: 20px; font-size: 0.8rem; font-weight: 700; box-shadow: 0 2px 8px rgba(0,0,0,0.2); z-index: 5;">Liste d\'attente</span>';
                    }
                } else {
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

        function populateFilters() {
            const regionContainer = document.getElementById('filter-regions');
            const deptContainer = document.getElementById('filter-depts');
            const cityContainer = document.getElementById('filter-cities');

            if (!regionContainer || !deptContainer || !cityContainer) return;

            // Stats extraction
            const stats = { regions: {}, depts: {}, cities: {} };

            creches.forEach(c => {
                // City
                stats.cities[c.city] = (stats.cities[c.city] || 0) + 1;

                // Dept
                let deptCode = c.zip ? c.zip.substring(0, 2) : "??";
                if (c.zip && c.zip.length === 4) deptCode = "0" + c.zip.substring(0, 1);
                stats.depts[deptCode] = (stats.depts[deptCode] || 0) + 1;

                // Region
                for (const [regName, deptList] of Object.entries(REGION_MAP)) {
                    if (deptList.includes(deptCode)) {
                        stats.regions[regName] = (stats.regions[regName] || 0) + 1;
                        break;
                    }
                }
            });

            const createFilterLink = (label, value, type) => {
                const a = document.createElement('a');
                a.href = "#";
                a.style.cssText = "color: #666; text-decoration: none; display: block; padding: 4px 8px; border-radius: 4px; transition: background 0.2s;";
                a.innerHTML = label;
                a.onmouseover = () => a.style.background = "#f8f9fa";
                a.onmouseout = () => a.style.background = "transparent";
                a.onclick = (e) => {
                    e.preventDefault();
                    // Extract clean label without count
                    const cleanLabel = label.split(' (')[0];
                    renderCreches(value, type, cleanLabel);
                    // Close details
                    const details = a.closest('details');
                    if (details) details.removeAttribute('open');
                    // Scroll to list
                    document.getElementById('creches-list-container').scrollIntoView({ behavior: 'smooth', block: 'start' });
                };
                return a;
            };

            // Populate Regions
            Object.entries(stats.regions).sort().forEach(([reg, count]) => {
                regionContainer.appendChild(createFilterLink(`${reg} (${count})`, reg, 'region'));
            });

            // Populate Depts
            Object.entries(stats.depts).sort().forEach(([code, count]) => {
                const name = DEPT_MAP[code] || "Inconnu";
                deptContainer.appendChild(createFilterLink(`${name} (${code}) (${count})`, code, 'dept'));
            });

            // Populate Cities
            Object.entries(stats.cities).sort().forEach(([city, count]) => {
                cityContainer.appendChild(createFilterLink(`${city} (${count})`, city, 'city'));
            });
        }

        populateFilters();

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
                } else {
                    renderCreches("", "search");
                }
            });
        }
        if (searchBtn && searchInput) searchBtn.addEventListener('click', () => renderCreches(searchInput.value, "search"));
        if (clearBtn && searchInput) {
            clearBtn.addEventListener('click', () => {
                searchInput.value = '';
                renderCreches('', 'search');
                searchInput.focus();
            });
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

                            <div id="related-track" style="display: flex; gap: 1rem; overflow-x: auto; scroll-snap-type: x mandatory; scroll-behavior: smooth; scrollbar-width: none; padding: 10px 0;">
                                ${relatedDaycares.map(related => `
                                    <div style="flex: 0 0 auto; width: 200px; scroll-snap-align: center; background: white; border: 1px solid #eee; border-radius: var(--radius-sm); overflow: hidden; box-shadow: var(--shadow-sm);">
                                        <div style="height: 120px; background: #eee;">
                                            <img src="${related.imgUrl}" style="width:100%; height:100%; object-fit: cover;" alt="${related.name}" loading="lazy">
                                        </div>
                                        <div style="padding: 0.8rem;">
                                            <h4 style="margin-bottom:0.3rem; color: var(--brand-blue-dark); font-size: 0.95rem; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${related.name}</h4>
                                            <p style="font-size:0.8rem; color:#666;">${related.city}</p>
                                            <a href="${creche.link}" style="display:block; margin-top:0.4rem; color:var(--brand-pink); font-weight:bold; font-size: 0.85rem;">Voir →</a>
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
                                        <a href="blog.html" class="btn btn-secondary" style="font-size: 0.8rem; padding: 0.4rem 1rem; align-self: start;">Lire</a>
                                    </div>
                                </div>
                                <!-- Article 2 -->
                                <div style="flex: 0 0 auto; width: 240px; scroll-snap-align: center; background: var(--color-beige-light); border-radius: var(--radius-md); overflow: hidden; display: flex; flex-direction: column; box-shadow: var(--shadow-sm);">
                                    <img src="images/blog_motricite_libre.webp" style="width: 100%; height: 140px; object-fit: cover;" alt="Motricité">
                                    <div style="padding: 1rem; flex: 1; display: flex; flex-direction: column;">
                                        <h4 style="font-size: 1rem; margin-bottom: 0.4rem; color: var(--brand-blue-dark);">La motricité libre</h4>
                                        <p style="font-size: 0.85rem; margin-bottom: 0.8rem; flex: 1;">Découvrir ses mouvements seul.</p>
                                        <a href="blog.html" class="btn btn-secondary" style="font-size: 0.8rem; padding: 0.4rem 1rem; align-self: start;">Lire</a>
                                    </div>
                                </div>
                                <!-- Article 3 -->
                                <div style="flex: 0 0 auto; width: 240px; scroll-snap-align: center; background: var(--color-beige-light); border-radius: var(--radius-md); overflow: hidden; display: flex; flex-direction: column; box-shadow: var(--shadow-sm);">
                                    <img src="images/blog_sommeil_bebe.webp" style="width: 100%; height: 140px; object-fit: cover;" alt="Sommeil">
                                    <div style="padding: 1rem; flex: 1; display: flex; flex-direction: column;">
                                        <h4 style="font-size: 1rem; margin-bottom: 0.4rem; color: var(--brand-blue-dark);">Le sommeil de bébé</h4>
                                        <p style="font-size: 0.85rem; margin-bottom: 0.8rem; flex: 1;">Comprendre les cycles et rituels.</p>
                                        <a href="blog.html" class="btn btn-secondary" style="font-size: 0.8rem; padding: 0.4rem 1rem; align-self: start;">Lire</a>
                                    </div>
                                </div>
                                <!-- Article 4 -->
                                <div style="flex: 0 0 auto; width: 240px; scroll-snap-align: center; background: var(--color-beige-light); border-radius: var(--radius-md); overflow: hidden; display: flex; flex-direction: column; box-shadow: var(--shadow-sm);">
                                    <img src="images/blog_alimentation_bebe.webp" style="width: 100%; height: 140px; object-fit: cover;" alt="Alimentation">
                                    <div style="padding: 1rem; flex: 1; display: flex; flex-direction: column;">
                                        <h4 style="font-size: 1rem; margin-bottom: 0.4rem; color: var(--brand-blue-dark);">L'alimentation</h4>
                                        <p style="font-size: 0.85rem; margin-bottom: 0.8rem; flex: 1;">Diversification et repas bio.</p>
                                        <a href="blog.html" class="btn btn-secondary" style="font-size: 0.8rem; padding: 0.4rem 1rem; align-self: start;">Lire</a>
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
