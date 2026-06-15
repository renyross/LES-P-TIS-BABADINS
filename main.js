let crechesData = [
    { name: "Les P'tits Babadins de Marssac sur Tarn", slug: "marssac-sur-tarn", link: "creche-marssac-sur-tarn", city: "Marssac sur Tarn", address: "Zac Rieumas", zip: "81150", phone: "06 56 67 49 65", email: "creche.marssac@ce-lpbx.com", active: true, hours: "07h30 - 18h30" },
    { name: "Les p'tits Babadins de Mellac 1", slug: "les-ptits-babadins-de-mellac", link: "creche-les-ptits-babadins-de-mellac", city: "Mellac", address: "20 Rue Ferdinand Buisson", zip: "29300", phone: "07.69.63.40.66", email: "creche.mellac1@ce-lpbx.com", active: true, hours: "07h00 - 19h00" },
    { name: "Les p'tits Babadins de Mellac 2", slug: "creche-mellac-2", link: "creche-mellac-2", city: "Mellac", address: "20 Rue Ferdinand Buisson", zip: "29300", email: "creche.mellac2@ce-lpbx.com", active: true, hours: "07h00 - 19h00" },
    { name: "Les p'tits Babadins de Quimperlé 1", slug: "les-ptits-babadins-de-quimperle", link: "creche-les-ptits-babadins-de-quimperle", city: "Quimperlé", address: "2 Rue d'Athenry", zip: "29300", phone: "07 69 63 40 66", email: "creche.quimperle1@ce-lpbx.com", active: true, hours: "07h00 - 19h00" },
    { name: "Les p'tits Babadins de Quimperlé 2", slug: "creche-quimperle-2", link: "creche-quimperle-2", city: "Quimperlé", address: "2 Rue bis d'Athenry", zip: "29300", phone: "07 69 63 40 66", email: "creche.quimperle2@ce-lpbx.com", active: true, hours: "07h00 - 19h00" },
    { name: "Au Pays des Sens", slug: "au-pays-des-sens", link: "creche-au-pays-des-sens", city: "Saint Germain du Puy", address: "1 allée colette", zip: "18390", phone: "02.48.24.17.52 / 06.89.32.30.91", email: "creche.aupaysdessens@ce-lpbx.com", active: true, hours: "7h30 - 18h30" },
    { name: "Les p’tits Babadins de Souppes", slug: "les-ptits-babadins-de-souppes", link: "creche-les-ptits-babadins-de-souppes", city: "Souppes-sur-Loing", address: "2 Rue du Roulis", zip: "77460", phone: "07 81 11 16 60", email: "creche.souppes@ce-lpbx.com", active: true, hours: "07h00 - 19h00" },
    { name: "Les p'tits Babadins de La Crèche", slug: "les-ptits-babadins-79260-la-creche", link: "creche-les-ptits-babadins-79260-la-creche", city: "La Crèche", address: "7 rue Vasco de Gama - ZA Baussais", zip: "79260", phone: "06 19 64 60 89", email: "lacreche@ce-lpbx.com", active: true, hours: "07h30 - 18h30" },
    { name: "Les p'tits babadins de Pordic", slug: "les-ptits-babadins-pordic", link: "creche-les-ptits-babadins-pordic", city: "Pordic", address: "ZONE DE KERIBET", zip: "22590", email: "creche.pordic@ce-lpbx.com", active: true, hours: "7h30 - 18h30" },
    { name: "Les p'tits Babadins de Savenay Ville", slug: "creche-expansion-savenay-1", link: "creche-creche-expansion-savenay-2", city: "Savenay", address: "139 rue robert geffriaud", zip: "44260", phone: "06.66.17.81.42", email: "creche.savenay1@ce-lpbx.com", active: true, hours: "7h00 - 19h00" },
    { name: "Ptits Babadins Téloché", slug: "ptits-babadins-teloche", link: "creche-ptits-babadins-teloche", city: "Téloché", address: "8 Rue du Gué", zip: "72220", phone: "07 81 01 88 22", email: "creche.teloche@ce-lpbx.com", active: true, hours: "7h00 - 18h45" },
    { name: "Les p'tits Babadins de Louargat", slug: "mc-de-louargat", link: "creche-mc-de-louargat", city: "Louargat", address: "Chemin de Kerroue", zip: "22540", phone: "07 44 44 31 84", email: "stquayperros@lespetitsbabadins.com", active: true, hours: "7h30 - 18h30" },
    { name: "Les p'tits Babadins de Wargnies le Grand", slug: "les-ptits-babadins-de-wargnies-le-grand", link: "creche-wargnies-le-grand", city: "Wargnies-le-Grand", address: "ZA de la Vallée de l'Aunelle", zip: "59144", phone: "06.73.51.78.63", email: "creche.wargnies@ce-lpbx.com", active: true, hours: "07h30 - 18h30" },
    { name: "Les p'tits Babadins de Lorient", slug: "creches-expansion-lorient", link: "creche-creches-expansion-lorient", city: "Lorient", address: "1 rue Jules Legrand", zip: "56100", phone: "07 69 63 40 66", email: "creche.lorient@ce-lpbx.com", active: true, hours: "07h00 - 19h00" },
    { name: "Les p'tits Babadins de Pont Saint Esprit", slug: "les-ptits-babadins-de-pont-saint-esprit", link: "creche-les-ptits-babadins-de-pont-saint-esprit", city: "Pont-Saint-Esprit", address: "320 Chemin de la Mouette", zip: "30130", phone: "06.82.96.24.00", email: "creche.pontsaintesprit@ce-lpbx.com", active: true, hours: "7h00 - 19h00" },
    { name: "Les P’tits Babadins de Sigournais", slug: "les-ptits-babadins-de-sigournais", link: "creche-les-ptits-babadins-de-sigournais", city: "Sigournais", address: "2 rue des Vignes", zip: "85110", phone: "06 98 39 42 91", email: "creche.sigournais@ce-lpbx.com", active: true, hours: "7h00 - 19h00" },
    { name: "Les P’tits Babadins de Bournezeau", slug: "les-ptits-babadins-de-bournezeau", link: "creche-les-ptits-babadins-de-bournezeau", city: "Bournezeau", address: "31 rue de l'oiseliere", zip: "85480", phone: "06 98 39 42 91", email: "creche.bournezeau@ce-lpbx.com", active: true, hours: "7h00 - 18h30" },
    { name: "Les p'tits Babadins de Saint Aubin du Cormier", slug: "les-ptits-babadins-de-saint-aubin-du-cormier", link: "creche-les-ptits-babadins-de-saint-aubin-du-cormier", city: "Saint-Aubin-du-Cormier", address: "1 bis rue de la Fréguenée", zip: "35140", phone: "06.02.71.58.96", email: "severine.eon@ce-lpbx.com", active: true, hours: "07h00 - 19h00" },
    { name: "Les p'tits Babadins de Montivilliers", slug: "les-ptits-babadins-montivilliers", link: "creche-les-ptits-babadins-montivilliers", city: "Montivilliers", address: "3 impasse Edgar Degas", zip: "76290", phone: "09 73 39 65 98", email: "creche.montivilliers@ce-lpbx.com", active: true, hours: "7h30 - 18h30" },
    { name: "Les p'tits Babadins de Questembert", slug: "les-ptits-babadins-de-questembert", link: "creche-les-ptits-babadins-de-questembert", city: "Questembert", address: "2 impasse du verger", zip: "56230", phone: "07 56 27 77 70", email: "severine.eon@ce-lpbx.com", active: true, hours: "07h30 - 19h00" },
    { name: "Les p'tits Babadins de Melesse", slug: "les-ptits-babadins-de-melesse", link: "creche-les-ptits-babadins-de-melesse", city: "Melesse", address: "11 rue des olivettes", zip: "35520", phone: "07 69 45 92 53", email: "severine.eon@ce-lpbx.com", active: true, hours: "07h00 - 19h00" },
    { name: "Les p'tits Babadins de Pleuven", slug: "les-ptits-babadins-de-pleuven", link: "creche-les-ptits-babadins-de-pleuven", city: "Pleuven", address: "12 Ter Ty Keravec", zip: "29170", phone: "07 69 63 40 66", email: "creche.pleuven@ce-lpbx.com", active: true, hours: "07h30 - 19h00" },
    { name: "La maison des petits maraîchins", slug: "la-maison-des-petits-maraichins", link: "creche-la-maison-des-petits-maraichins", city: "Challans", address: "30 Rue du Maréchal Joffre", zip: "85300", email: "rt.challans@ce-lpbx.com", active: true, hours: "7h30 - 19h00" },
    { name: "La Villa des Petits Garnachois", slug: "la-villa-des-petits-garnachois", link: "creche-la-villa-des-petits-garnachois", city: "La Garnache", address: "Rue des ciseleurs", zip: "85710", phone: "02 51 54 56 94", email: "rt.lagarnache@ce-lpbx.com", active: true, hours: "7h30 - 19h00" },
    { name: "Les p'tits Babadins de Saint Hilaire de Riez", slug: "les-ptits-babadins-de-st-hilaire", link: "creche-les-ptits-babadins-de-st-hilaire", city: "Saint-Hilaire-de-Riez", address: "12 rue de la Mignelle", zip: "85270", email: "rt.shdr@ce-lpbx.com", active: true, hours: "7h30 - 19h00" },
    { name: "Les p'tits Babadins de Quéven", slug: "les-ptits-babadins-de-queven", link: "creche-les-ptits-babadins-de-queven", city: "Quéven", address: "34 rue fontaine de Barenton 56185 lot 38", zip: "56530", phone: "07 69 63 40 66", email: "creche.queven@ce-lpbx.com", active: true, hours: "07h00 - 19h00" },
    { name: "Les p'tits Babadins de Saintes", slug: "creches-expansion-saintes", link: "creche-creches-expansion-saintes", city: "Saintes", address: "6 Bd de Vladimir", zip: "17100", phone: "06 19 64 60 89", email: "creche.saintes@ce-lpbx.com", active: true, hours: "7h30 - 18h30" },
    { name: "Les p'tits Babadins de Montbert", slug: "les-ptits-babadins-de-montbert", link: "creche-les-ptits-babadins-de-montbert", city: "Montbert", address: "1 Rue des loges", zip: "44140", phone: "06 86 15 62 18", email: "creche.montbert@ce-lpbx.com", active: true, hours: "08h00 - 18h30" },
    { name: "Les p'tits Babadins de Lavilledieu", slug: "la-ville-dieu-creche", link: "creche-la-ville-dieu-creche", city: "Lavilledieu", address: "50 chemin de Champredon", zip: "07170", phone: "06 07 06 47 44", email: "creche.lavilledieu@ce-lpbx.com", active: true, hours: "7h30 - 19h00" },
    { name: "Les p'tits Babadins de la Roche", slug: "les-ptits-babadins-de-la-roche", link: "creche-les-ptits-babadins-de-la-roche", city: "La Roche-sur-Yon", address: "58 rue Auguste Murail", zip: "85000", email: "creche.laroche@ce-lpbx.com", active: true, hours: "07h30 - 19h00" },
    { name: "Micro-crèche de La Roche (Wilson)", slug: "micro-de-la-roche-wilson", link: "creche-micro-creche-de-la-roche-wilson", city: "La Roche-sur-Yon", address: "36 rue du Président Wilson", zip: "85000", phone: "06 62 10 19 83", email: "creche.laroche@ce-lpbx.com", active: true, hours: "07h30 - 18h30" },
    { name: "Les P’tits Babadins Perpignan", slug: "les-ptits-babadins-perpignan", link: "creche-perpignan", city: "Perpignan", address: "7 Allée Borée", zip: "66000", phone: "06 81 30 04 27", email: "creche.perpignan@ce-lpbx.com", active: true, hours: "7h30 - 19h00" },
    { name: "Les p'tits Babadins de Saint-Vincent-de-Paul", slug: "les-ptits-babadins-st-vincent-de-paul", link: "creche-les-ptits-babadins-st-vincent-de-paul", city: "Saint-Vincent-de-Paul", address: "490 Rue de la Cantere", zip: "40990", phone: "07 44 41 76 34", email: "creche.svdp@ce-lpbx.com", active: true, hours: "07h30 - 19h00" },
    { name: "Les p'tits Babadins de Saint-Aubin-sur-Scie", slug: "les-ptits-babadins-st-aubin-sur-scie", link: "creche-les-ptits-babadins-st-aubin-sur-scie", city: "Saint-Aubin-sur-Scie", address: "35 Rue Neuve", zip: "76550", phone: "07 66 91 96 65", email: "creche.lmdc@ce-lpbx.com", active: true, hours: "07h30 - 18h30" },
    { name: "Micro-crèche Les p'tits Babadins d'Olivet", slug: "micro-creche-les-ptits-babadins-olivet", link: "creche-micro-creche-les-ptits-babadins-olivet", city: "Olivet", address: "29 rue Jules Marie Simon", zip: "45160", phone: "06 19 64 60 89", email: "creche.olivet@ce-lpbx.com", active: true, hours: "07h00 - 19h00" },
    { name: "Les p'tits Babadins de Tavers", slug: "les-ptits-babadins-de-tavers", link: "creche-les-ptits-babadins-de-tavers", city: "TAVERS", address: "9 rue de Grattelièvres", zip: "45190", phone: "02.79.40.11.54", email: "creche.tavers@ce-lpbx.com", active: true, hours: "07h00 - 19h00" },
    { name: "Les p'tits Babadins de Meung-sur-Loire", slug: "les-ptits-babadins-meung-sur-loire", link: "creche-les-ptits-babadins-meung-sur-loire", city: "MEUNG SUR LOIRE", address: "3 mail des trois roses", zip: "45130", phone: "06 19 64 60 89", email: "creche.msl@ce-lpbx.com", active: true, hours: "07h00 - 19h00" },
    { name: "Les p'tits Babadins de Coëtmieux", slug: "les-ptits-babadins-de-coetmieux", link: "creche-les-ptits-babadins-de-coetmieux", city: "Coëtmieux", address: "30 bis Rue de la Truite", zip: "22400", phone: "06 02 71 58 96", email: "creche.coetmieux@ce-lpbx.com", active: true, hours: "07h30 - 18h30" },
    { name: "Les P’tits Babadins Avermes", slug: "les-ptits-babadins-avermes", link: "creche-les-ptits-babadins-avermes", city: "Avermes", address: "11 rue des saccarauds", zip: "03000", phone: "06 62 30 64 40", email: "avermes@ce-lpbx.com", active: true, hours: "7h30 - 18h30" },
    { name: "Les P’tits Babadins Baldersheim", slug: "les-ptits-babadins-baldersheim", link: "creche-les-ptits-babadins-baldersheim", city: "Baldersheim", address: "10 rue des chasseurs", zip: "68390", phone: "06 63 01 97 03", email: "creche.baldersheim@ce-lpbx.com", active: true, hours: "7h30 - 18h30" },
    { name: "Les P’tits Babadins Grussenheim", slug: "les-ptits-babadins-grussenheim", link: "creche-les-ptits-babadins-grussenheim", city: "Grussenheim", address: "62 Rte de Colmar", zip: "68320", phone: "06 77 34 73 24", email: "creche.grussenheim@ce-lpbx.com", active: true, hours: "7h30 - 18h30" },
    { name: "Les p'tits Babadins de Hégenheim 1", slug: "hegenheim-1", link: "creche-hegenheim-1", city: "Hégenheim", address: "30 rue des Landes", zip: "68220", phone: "03 67 23 02 58", email: "creche.hegenheim1@ce-lpbx.com", active: true, hours: "07h30 - 18h30" },
    { name: "Les p'tits Babadins de Hégenheim 2", slug: "hegenheim-2", link: "creche-hegenheim-2", city: "Hégenheim", address: "30 A rue des Landes", zip: "68220", phone: "03 67 23 02 58", email: "creche.hegenheim2@ce-lpbx.com", active: true, hours: "07h30 - 18h30" },
    { name: "Les P’tits Babadins Saint Chamond", slug: "les-ptits-babadins-saint-chamond", link: "creche-les-ptits-babadins-saint-chamond", city: "Saint Chamond", address: "2A Rue Marc Seguin", zip: "42400", phone: "07 61 69 28 60", email: "creche.saintchamond@ce-lpbx.com", active: true, hours: "7h30 - 18h30" },
    { name: "Au Saut du nid", slug: "au-saut-du-nid", link: "creche-au-saut-du-nid", city: "Tignieu-Jameyzieu", address: "38 boulevard Ampère", zip: "38230", phone: "06.70.03.61.55", email: "ausautdunid@ce-lpbx.com", active: true, hours: "7h30 - 18h30" },
    { name: "Tintinna Bulle", slug: "tintinna-bulle", link: "creche-tintinna-bulle", city: "Tignieu-Jameyzieu", address: "Boulevard Ampère", zip: "38230", email: "tintinnabulle@ce-lpbx.com", active: true, hours: "7h30 - 18h30" },
    { name: "Les p'tits Babadins de Faye d'Anjou", slug: "faye-danjou", link: "creche-faye-danjou", city: "Faye d'Anjou", address: "4 ter rue des monts", zip: "49380", phone: "07 44 98 74 20", email: "creche.fayedanjou@ce-lpbx.com", active: true, hours: "● 07h00 - 19h00" },
    { name: "Les p'tits Babadins de Miremont", slug: "les-ptits-babadins-de-miremont", link: "creche-miremont", city: "Miremont", address: "4 Voie Eris", zip: "31190", phone: "07.62.70.23.04", email: "creche.miremont@ce-lpbx.com", active: true, hours: "7h30 - 18h30" },
    { name: "Les p'tits Papailloux", slug: "les-ptits-papailloux", link: "creche-les-ptits-papailloux", city: "Angers", address: "24", zip: "49100", phone: "06.62.10.19.83", email: "creche.angers@ce-lpbx.com", active: true, hours: "07h30 - 18h30" },
    { name: "Les p'tits charrettes", slug: "les-ptits-charrettes", link: "creche-les-ptits-charrettes", city: "La Roche-sur-Yon", address: "Résidence Le Tamaris", zip: "85000", email: "creche.bourgsouslaroche@ce-lpbx.com", active: true, hours: "7h30 - 18h30" },
    { name: "Les p'tits Babadins de Savenay Lac", slug: "creche-savenay-lac", link: "creche-savenay-lac", city: "Savenay", address: "Parc d'activité de la Colleraye", zip: "44260", email: "creche.savenay1@ce-lpbx.com", active: true, hours: "7h00 - 19h00" },
    { name: "Les p'tits Babadins de Grosbreuil", slug: "creche-grosbreuil", link: "creche-les-ptits-babadins-de-grosbreuil", city: "Grosbreuil", address: "Rue des Sports", zip: "85440", email: "grosbreuil@lespetitsbabadins.com", active: true, hours: "7h30 - 18h30" },
    { name: "Les p'tits Babadins de Masny", slug: "les-ptits-babadins-de-masny", link: "creche-masny", city: "Masny", address: "9 bis Rue de Froissy", zip: "59176", phone: "06 74 41 36 16", email: "creche.masny@ce-lpbx.com", active: true, hours: "7h00 - 19h00" },
    { name: "Les p'tits Bababins d'Aniche", slug: "les-ptits-bababins-daniche", link: "creche-aniche", city: "Aniche", address: "Localisation en cours", zip: "59580", email: "creche.aniche@ce-lpbx.com", active: false, hours: "7h00 - 19h00" },
    { name: "Les p'tits Babadins de Etival lès le Mans", slug: "les-ptits-babadins-de-etival-les-le-mans", link: "creche-etival-les-le-mans", city: "Étival-lès-le-Mans", address: "7 Rue de Siedenburg", zip: "72700", phone: "07 81 01 88 22", email: "creche.etival@ce-lpbx.com", active: true, hours: "7h00 - 18h45" },
    { name: "Les p'tits Babadins de Saint Nicolas de Redon", slug: "les-ptits-babadins-de-saint-nicolas-de-redon", link: "creche-st-nicolas-de-redon", city: "Saint-Nicolas-de-Redon", address: "30 rue des roseaux", zip: "44460", phone: "07 89 30 19 00", email: "creche.sndr@ce-lpbx.com", active: true, hours: "7h30 - 18h30" },
    { name: "Les p'tits Babadins de Montluçon 1", slug: "les-ptits-babadins-de-montlucon", link: "creche-creche-expansion-montluon", city: "Montluçon", address: "217 avenue John Fitzgerald Kennedy", zip: "03100", phone: "06.64.31.36.54", email: "creche.montlucon@ce-lpbx.com", active: true, hours: "7h15 - 18h15" },
    { name: "Les p’tits Babadins de Pasquis 2", slug: "les-ptits-babadins-de-pasquis-2", link: "creche-montlucon-pasquis", city: "Montluçon", address: "48 rue de PASQUIS", zip: "03100", phone: "06.64.31.36.54 / 07.64.44.47.62", email: "creche.montlucon2@ce-lpbx.com", active: true, hours: "7h15 - 18h15" },
    { name: "Le Grandchamp des Enfants", slug: "creche-grandchamp-enfants", link: "creche-grandchamp-enfants", city: "Grandchamp-des-Fontaines", address: "Parc d’activité de Bellevue", zip: "44119", phone: "06.14.17.72.84.", email: "grandchampsdesenfants@ce-lpbx.com", active: true, hours: "7h30 - 18h30" },
    { name: "Les enfants des Fontaines", slug: "les-enfants-des-fontaines", link: "creche-enfants-des-fontaines", city: "Grandchamp-des-Fontaines", address: "PA de Bellevue", zip: "44119", email: "lesenfantsdesfontaines@ce-lpx.com", active: true, hours: "7h30 - 18h30" },
    { name: "Les p'tits babadins de Freneuse 1", slug: "les-ptits-babadins-de-freneuse-1", link: "creche-freneuse-1", city: "Freneuse", address: "La Croix du Moulin - 19 rue des Bouderies", zip: "78840", phone: "06.68.74.03.33", email: "creche.freneuse1@ce-lpbx.com", active: true, hours: "7h30 - 18h30" },
    { name: "Les p'tits babadins de Freneuse 2", slug: "les-ptits-babadins-de-freneuse-2", link: "creche-freneuse-2", city: "Freneuse", address: "La Croix du Moulin - 19 rue des Bouderies", zip: "78840", email: "creche.freneuse2@ce-lpbx.com", active: true, hours: "7h30 - 18h30" },
    { name: "A Petits Pas", slug: "a-petits-pas", link: "creche-auzeville-a-petits-pas", city: "Auzeville-Tolosane", address: "5 Av Daniel Brisebois", zip: "31320", phone: "06.24.51.09.60", email: "apetitspas@ce-lpbx.com", active: true, hours: "7h30 - 18h30" },
    { name: "Les Lutins du Bois Joli", slug: "creche-auzeville-lutins", link: "creche-auzeville-lutins", city: "Auzeville-Tolosane", address: "3 Av Daniel Brisebois", zip: "31320", email: "leslutinsduboisjoli@ce-lpbx.com", active: true, hours: "7h30 - 18h30" },
    { name: "Les p'tits Babadins de Saveuse", slug: "les-ptits-babadins-de-saveuse", link: "creche-saveuse", city: "Saveuse", address: "Localisation en cours", zip: "80470", email: "creche.saveuse@ce-lpbx.com", active: true, hours: "7h30 - 18h30" },
    { name: "Les p'tits Babadins de Poulainville 2", slug: "les-ptits-babadins-de-poulainville-2", link: "creche-poulainville-2", city: "Poulainville", address: "Chemin de Longpré", zip: "80260", email: "creche.poulainville2@ce-lpbx.com", active: true, hours: "7h30 - 18h30" },
    { name: "Les p'tits Babadins de Poulainville 1", slug: "creche-poulainville-1", link: "creche-poulainville-1", city: "Poulainville", address: "Chemin de Longpré", zip: "80260", phone: "06 51 23 72 85", email: "creche.poulainville1@ce-lpbx.com", active: true, hours: "7h30 - 18h30" },
    { name: "Les p'tits Babadins de Aubenas", slug: "les-ptits-babadins-de-aubenas", link: "creche-aubenas", city: "Aubenas", address: "72A Av. de Roqua", zip: "07200", phone: "06 07 06 47 44", email: "creche.aubenas@ce-lpbx.com", active: true, hours: "07h00 - 19h00" },
    { name: "Micro-crèche Les Singulières", slug: "micro-creche-les-singulieres", link: "creche-micro-creche-les-singulieres", city: "Montelier", address: "Rue des Charmilles", zip: "26120", phone: "06.38.01.95.38", email: "bastida@ce-lpbx.com", active: true, hours: "7h30 - 18h30" },
    { name: "Micro-crèche Abolena", slug: "micro-creche-abolena", link: "creche-micro-creche-abolena", city: "Bollene", address: "183 avenue Georges Melies", zip: "84500", phone: "06.38.01.95.38", email: "bastida@ce-lpbx.com", active: true, hours: "7h30 - 18h30" },
    { name: "Bastida", slug: "bastida", link: "creche-bastida", city: "La Bâtie-Rolland", address: "725 route de Montélimar", zip: "26160", phone: "06.38.01.95.38", email: "bastida@ce-lpbx.com", active: true, hours: "7h30 - 18h30" },
    { name: "Micro-crèche Castel", slug: "micro-creche-castel", link: "creche-micro-creche-castel", city: "Châteauneuf-du-Rhône", address: "240 Impasse des buis", zip: "26780", phone: "06.38.01.95.38", email: "bastida@ce-lpbx.com", active: true, hours: "7h30 - 18h30" },
    { name: "Micro-crèche du Meyrol", slug: "micro-creche-du-meyrol", link: "creche-micro-creche-du-meyrol", city: "Montélimar", address: "9 Allée de Barjac", zip: "26200", phone: "06.38.01.95.38", email: "bastida@ce-lpbx.com", active: true, hours: "7h30 - 18h30" },
    { name: "Les p'tits Chimistes", slug: "les-ptits-chimistes", link: "creche-les-ptits-chimistes", city: "Baillet-en-France", address: "Rue Pierre et Marie Curie", zip: "95560", phone: "01 34 69 05 87", email: "laure.bouniol@ce-lpbx.com", active: true, hours: "07h00 - 19h00" },
    { name: "Les p'tits Babadins de Saint-Martin-du-Tertre", slug: "saint-martin-du-tertre", link: "creche-saint-martin-du-tertre", city: "Saint-Martin-du-Tertre", address: "17 avenue Jacques Duclos", zip: "95270", phone: "01 30 35 92 10", email: "laure.bouniol@ce-lpbx.com", active: true, hours: "07h00 - 19h00" },
    { name: "Les p'tits Babadins de Belloy", slug: "belloy", link: "creche-les-ptits-babadins-de-belloy", city: "Belloy-en-France", address: "3 Place Sainte-Beuve", zip: "95270", phone: "01 30 35 08 39", email: "laure.bouniol@ce-lpbx.com", active: true, hours: "07h00 - 19h00" },
    { name: "Les p'tits Babadins de Pernety", slug: "pernety", link: "creche-les-ptits-babadins-de-pernety", city: "Paris", address: "47 Rue Bénard", zip: "75014", phone: "01 88 75 02 15", email: "laure.bouniol@ce-lpbx.com", active: true, hours: "08h30 - 19h00" },
    { name: "Les p'tits Babadins de Sisteron", slug: "les-ptits-babadins-de-sisteron", link: "creche-micro-creche-les-ptits-babadins-sisteron", city: "Sisteron", address: "27 allée Tilleuls", zip: "04200", phone: "04 92 64 95 15", email: "mathilde.moreau@ce-lpbx.com", active: true, hours: "06h00 - 20h00" },
    { name: "Les p'tits Babadins de Boissy Le Châtel", slug: "les-ptits-babadins-de-boissy-le-chatel", link: "creche-les-ptits-babadins-de-boissy-le-chatel", city: "Boissy Le Châtel", address: "Rue de la ZAC des 18 Arpents", zip: "77169", phone: "07.44.41.46.32", email: "creche.blc@ce-lpbx.com", active: true, hours: "07h30 - 19h00" },
    { name: "Les p'tits Babadins de Clamart", slug: "les-ptits-babadins-de-clamart", link: "creche-les-ptits-babadins-de-clamart", city: "Clamart", address: "32 Rue Georges Huguet", zip: "92140", phone: "07 44 47 88 96", email: "laure.bouniol@ce-lpbx.com", active: true, hours: "08h00 - 19h00" },
    { name: "Coccinelle", slug: "coccinelle", link: "creche-coccinelle", city: "St Barthelemy d'Anjou", address: "2 rue de la Morellerie", zip: "49124", phone: "06.15.52.90.31", email: "eva.zara@hotmail.fr", active: true, hours: "7h30 - 18h30" },
    { name: "Micro- Crèche La Fayette", slug: "micro--creche-la-fayette", link: "creche-micro-creche-la-fayette", city: "Angers", address: "26 rue de Brissac", zip: "49000", email: "eva.zara@hotmail.fr", active: true, hours: "7h30 - 18h30" },
    { name: "La Cabane des doudous", slug: "la-cabane-des-doudous", link: "creche-la-cabane-des-doudous", city: "St Jean de Boiseau", address: "Impasse des Forgerons", zip: "44640", phone: "06.60.39.21.07", email: "olivier.landrieau@bbox.fr", active: true, hours: "7h45 à 18h30" },
    { name: "Choupie et Bibou", slug: "choupie-et-bibou", link: "creche-choupie-et-bibou", city: "St Jean de Boiseau", address: "Impasse des Forgerons", zip: "44640", email: "olivier.landrieau@bbox.fr", active: true, hours: "7h45 à 18h30" },
    { name: "Lililou Micro-Creche", slug: "lililou-micro-creche", link: "creche-lililou-micro-creche", city: "La Chapelle sur Erdre", address: "1 bis rue Newton", zip: "44240", phone: "06.86.15.62.18", email: "lachapellesurerdre@ce-lpbx.com", active: true, hours: "7h30 - 18h30" },
    { name: "Les p'tits Babadins de Saint-Maixent-l'Ecole", slug: "les-ptits-babadins-de-saint-maixent", link: "creche-les-ptits-babadins-de-saint-maixent", city: "Saint-Maixent-l'École", address: "28 rue d'Horsham - ZA Les Granges", zip: "79400", phone: "06 19 64 60 89", email: "creche.saintmaixent@ce-lpbx.com", active: true, hours: "07h30 - 18h30" },
    { name: "Les p'tits Babadins de Janzé", slug: "les-ptits-babadins-de-janze", link: "creche-les-ptits-babadins-de-janze", city: "Janzé", address: "183 rue de la Houlette", zip: "35150", phone: "07 66 35 79 55 / RE: 07 52 08 46 12", email: "benedicte.clediere@ce-lpbx.com", active: true, hours: "07h30 - 19h00" },
    { name: "Les p'tits Babadins de GUICHEN", slug: "les-ptits-babadins-de-guichen", link: "creche-les-ptits-babadins-de-guichen", city: "Guichen", address: "24 rue Denis Papin", zip: "35580", phone: "07 67 97 44 76 / RE: 07 52 08 46 12", email: "creche.guichen@ce-lpbx.com", active: true, hours: "07h30 - 19h00" },
    { name: "Les p'tits Babadins de Noyal-Châtillon-sur-Seiche", slug: "les-ptits-babadins-noyal-chatillon-sur-seiche", link: "creche-les-ptits-babadins-noyal-chatillon-sur-seiche", city: "Noyal-Châtillon-sur-Seiche", address: "30 rue de Saint-Erblon", zip: "35230", phone: "07 49 72 97 18 / RE: 07 52 08 46 12", email: "rtnoyalchatillon@gmail.com", active: true, hours: "07h30 - 19h00", capacity: 12 },
    { name: "Les p'tits Babadins de Rennes ZI Sud Est", slug: "les-ptits-babadins-de-rennes", link: "creche-les-ptits-babadins-de-rennes", city: "Rennes", address: "2 rue Ambroisine-Garnier Leray - RENNES", zip: "35000", phone: "07 49 58 05 68 / RE: 07 52 08 46 12", email: "creche.rennes@ce-lpbx.com", active: true, hours: "07h30 - 19h00" },
    { name: "Les p'tits Babadins de Janzé 2", slug: "les-ptits-babadins-de-janze-2", link: "creche-les-ptits-babadins-de-janze-2", city: "Janzé", address: "183 rue de la Houlette", zip: "35150", phone: "07 66 82 25 71 / RE: 07 52 08 46 12", email: "benedicte.clediere@ce-lpbx.com", active: true, hours: "07h30 - 19h00" },
    { name: "Les P'tits Pirates (Lamballe)", slug: "les-ptits-pirates", link: "creche-les-ptits-pirates", city: "Lamballe-Armor", address: "22 Rue de Dinard", zip: "22400", phone: "06 02 71 58 96", email: "creche.lamballe@ce-lpbx.com", active: true, hours: "07h30 - 19h00" },
    { name: "Les p'tits Babadins de Mainvilliers", slug: "les-ptits-babadins-de-mainvilliers", link: "creche-les-ptits-babadins-de-mainvilliers", city: "Mainvilliers", address: "4 rue Paul Emile Victor", zip: "28300", phone: "02 37 36 25 15", email: "creche.mainvilliers@ce-lpbx.com", active: true, hours: "07h30 - 18h30" },
    { name: "Les p'tits Babadins de Luisant", slug: "les-ptits-babadins-de-luisant", link: "creche-les-ptits-babadins-de-luisant", city: "Luisant", address: "52 Rue du Val de la Cavée", zip: "28600", phone: "02 37 26 45 48", email: "creche.luisant@ce-lpbx.com", active: true, hours: "07h30 - 18h30" },
    { name: "Les p'tits Babadins de Gellainville", slug: "les-ptits-babadins-de-gellainville", link: "creche-les-ptits-babadins-de-gellainville", city: "Gellainville", address: "3 Parc de l'Equerre de", zip: "28630", phone: "02 37 25 31 11", email: "creche.gellainville@ce-lpbx.com", active: true, hours: "07h30 - 18h30" },
    { name: "Les p'tits Babadins de La Riche", slug: "les-ptits-babadins-de-la-riche", link: "creche-les-ptits-babadins-de-la-riche", city: "La Riche", address: "15 rue de la Chapelle", zip: "37520", phone: "06 19 64 60 89", email: "creche.lariche@ce-lpbx.com", active: true, hours: "07h30 - 18h30" },
    { name: "Les p'tits Babadins de Joué-lès-Tours", slug: "les-ptits-babadins-de-joue-les-tours", link: "creche-les-ptits-babadins-de-joue-les-tours", city: "Joué-lès-Tours", address: "19 rue de la Flottière", zip: "37300", phone: "06 19 64 60 89", email: "creche.jlt@ce-lpbx.com", active: true, hours: "07h30 - 18h30" },
    { name: "Les p'tits Babadins de Villeneuve-sur-Lot", slug: "les-ptits-babadins-de-villeneuve-sur-lot", link: "creche-les-ptits-babadins-de-villeneuve-sur-lot", city: "Villeneuve-sur-Lot", address: "560 rue de la Dardenne", zip: "47300", phone: "05 53 49 27 15", active: true, hours: "07h30 - 19h00" },
    { name: "Les p'tits Babadins de Bize-Minervois", slug: "les-ptits-babadins-de-bize-minervois", link: "creche-bize-minervois", city: "Bize-Minervois", address: "3 Rue des Vignerons", zip: "11120", phone: "06 83 01 96 93", email: "creche.bizeminervois@ce-lpbx.com", active: true, hours: "7h30 - 18h30" },
    { name: "Les p'tits Babadins de Saint Malo", slug: "creche-saint-malo", link: "creche-saint-malo", city: "Saint Malo", address: "16 rue de la croix Desilles", zip: "35400", email: "creche.saintmalo@ce-lpbx.com", active: true, hours: "07h00 - 19h00" },
    { name: "Les p'tits Babadins de Mazères", slug: "les-ptits-babadins-de-mazeres", link: "creche-les-ptits-babadins-de-mazeres", city: "Mazères", address: "16 Rue des Acacias", zip: "33210", phone: "09 52 70 60 68", active: true, hours: "07h30 - 18h30", capacity: 10 },
    { name: "Les p'tits Babadins de Livré-sur-Changeon", slug: "creches-expansion-livre-sur-changeon", link: "creche-creches-expansion-livre-sur-changeon", city: "Livré-sur-Changeon", address: "8 Rue Jean Berçu", zip: "35450", phone: "01 85 46 02 44", email: "creche.livresurchangeon@ce-lpbx.com", hours: "07h00 - 19h00" },
    { name: "Les p'tits Babadins de Loiron", slug: "les-ptits-babadins-de-loiron", link: "creche-les-ptits-babadins-de-loiron", city: "Loiron-Ruillé", address: "18 rue du petit bois", zip: "53320", phone: "06 86 15 62 18", email: "contact@ce-lpbx.com", hours: "07h30 - 18h30" },
    { name: "Les p'tits Babadins de Laval", slug: "les-ptits-babadins-de-laval", link: "creche-les-ptits-babadins-de-laval", city: "Laval", address: "180 Boulevard Jean Jaurès", zip: "53000", phone: "06 86 15 62 18", email: "creche.laval@ce-lpbx.com", hours: "07h30 - 18h30" },
    { name: "Les p'tits Babadins de Forcé", slug: "les-ptits-babadins-de-force", link: "creche-les-ptits-babadins-de-force", city: "Forcé", address: "3 Rue Simone Veil", zip: "53260", phone: "06 86 15 62 18", email: "creche.force@ce-lpbx.com", hours: "07h30 - 18h30" },
    { name: "Ty Moussaillons (Arzal)", slug: "ty-moussaillons", link: "creche-ty-moussaillons", city: "Arzal", address: "La Corne du Cerf", zip: "56190", phone: "07 56 27 77 70", email: "severine.eon@ce-lpbx.com", active: true, hours: "07h30 - 18h30" },
    { name: "Les p'tits Babadins de La Chapelle sur Erdre", slug: "la-chapelle-sur-erdre", link: "creche-la-chapelle-sur-erdre", city: "La Chapelle sur Erdre", address: "1bis rue Newton", zip: "44240", phone: "06 86 15 62 18", email: "lachapellesurerdre@ce-lpbx.com", hours: "8h00 - 18h30" },
    { name: "A Lucccianella", slug: "a-lucccianella", link: "creche-a-lucccianella", city: "Lucciana", address: "Lieu dit Mezzana", zip: "20290", email: "aluccianella@orange.fr", active: true, hours: "7h30 - 18h30" }
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
window.crechesData = crechesData;


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
        "03100": [46.3408, 2.6033],   // Montlucon
        "78840": [49.046, 1.603],      // Freneuse
        "81150": [43.91, 2.02],       // Marssac
        "47300": [44.40, 0.70],       // Villeneuve
        "49100": [47.478, -0.563],     // Angers
        "45190": [47.75, 1.61],       // Tavers
        "45130": [47.83, 1.70],       // Meung
        "45160": [47.86, 1.90],       // Olivet
        "76550": [49.89, 1.07],       // Saint-Aubin-sur-Scie
        "04200": [44.19, 5.94],       // Sisteron
        "40990": [43.71, -1.03],      // Saint-Vincent-de-Paul
        "28300": [48.45, 1.48],       // Mainvilliers
        "28600": [48.43, 1.48],       // Luisant
        "28630": [48.41, 1.51],        // Gellainville
        "37520": [47.38, 0.63],       // La Riche
        "37300": [47.35, 0.66],        // Joué-lès-Tours
        "77169": [48.82, 3.20],       // Boissy Le Châtel
        "44140": [47.05, -1.48],       // Montbert
        "79260": [46.36, -0.30],       // La Crèche
        "17100": [45.74, -0.63],       // Saintes
        "79400": [46.41, -0.20],       // Saint-Maixent
        "77460": [48.18, 2.73],       // Souppes
        "22590": [48.57, -2.83],       // Pordic
        "56230": [47.66, -2.45],       // Questembert
        "56190": [47.51, -2.37],       // Arzal
        "35150": [47.95, -1.50],       // Janzé
        "35580": [47.96, -1.73],       // Guichen
        "35000": [48.11, -1.67],       // Rennes
        "35510": [48.11, -1.61],       // Cesson-Sévigné
        "35230": [48.04, -1.66],       // Noyal Châtillon
        "35140": [48.25, -1.40],       // St Aubin du Cormier
        "35520": [48.22, -1.69],       // Melesse
        "29170": [47.90, -4.04],       // Pleuven
        "22540": [48.566, -3.340],      // Louargat
        "56530": [47.789, -3.414],      // Quéven
        "29300": [47.873, -3.548],      // Quimperlé
        "59144": [50.27, 3.67],         // Wargnies-le-Grand
        "38230": [45.73, 5.18],         // Tignieu-Jameyzieu
        "68390": [47.78, 7.38],          // Baldersheim
        "18390": [47.10, 2.48],         // St Germain du Puy
        "44460": [47.64, -2.10],        // St Nicolas de Redon
        "72220": [47.88, 0.27],         // Téloché
        "72700": [47.95, 0.12],          // Etival lès le Mans
        "75014": [48.831, 2.327],          // Paris Pernety
        "85440": [46.54, -1.61],           // Grosbreuil
        "76290": [49.54, 0.19],           // Montivilliers
        "11120": [43.32, 2.87],           // Bize-Minervois
        "30130": [44.25, 4.65],           // Pont-Saint-Esprit
        "53320": [48.06, -0.93],          // Loiron
        "53000": [48.07, -0.77],          // Laval
        "53260": [48.03, -0.70],          // Forcé
        "31320": [43.53, 1.48],            // Auzeville-Tolosane
        "56100": [47.75, -3.36],          // Lorient
        "80260": [49.95, 2.31],           // Poulainville
        "80470": [49.90, 2.21],           // Saveuse
        "07170": [44.58, 4.45],           // Lavilledieu
        "07200": [44.62, 4.39],           // Aubenas
        "42400": [45.47, 4.51],           // Saint-Chamond
        "68320": [48.14, 7.48],            // Grussenheim
        "03000": [46.59, 3.32],           // Avermes
        "26120": [44.93, 4.99],           // Montelier
        "84500": [44.28, 4.75],           // Bollene
        "26160": [44.55, 4.86],           // La Batie-Rolland
        "26780": [44.48, 4.72],           // Châteauneuf-du-Rhône
        "26200": [44.56, 4.75],            // Montélimar
        "20290": [42.53, 9.44]             // Lucciana
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
        "Pays de la Loire": ["44", "49", "53", "72", "85"],
        "Occitanie": ["09", "11", "12", "30", "31", "32", "34", "46", "48", "65", "66", "81", "82"],
        "Nouvelle-Aquitaine": ["16", "17", "19", "23", "24", "33", "40", "47", "64", "79", "86", "87"],
        "Auvergne-Rhône-Alpes": ["01", "03", "07", "15", "26", "38", "42", "43", "63", "69", "73", "74"],
        "Hauts-de-France": ["02", "59", "60", "62", "80"],
        "Centre-Val de Loire": ["18", "28", "36", "37", "41", "45"],
        "Grand Est": ["08", "10", "51", "52", "54", "55", "57", "67", "68", "88"],
        "Normandie": ["14", "27", "50", "61", "76"],
        "Île-de-France": ["75", "77", "78", "91", "92", "93", "94", "95"],
        "Bourgogne-Franche-Comté": ["21", "25", "39", "58", "70", "71", "89", "90"],
        "PACA": ["04", "05", "06", "13", "83", "84"],
        "Corse": ["20", "2A", "2B"]
    };


document.addEventListener('DOMContentLoaded', () => {
    console.log('Les p’tits Babadins - Site chargé v25.0');

    // --- PRE-INSCRIPTION DATALIST POPULATOR ---
    const crechesDatalist = document.getElementById('creches-list');
    const crecheInput = document.getElementById('creche');
    if (crechesDatalist && crecheInput) {
        const populateCrechesList = () => {
            crechesDatalist.innerHTML = '';
            crechesData.filter(c => c.active).forEach(c => {
                const option = document.createElement('option');
                option.value = c.name + (c.city && !c.name.includes(c.city) ? ` (${c.city})` : '');
                if (c.email) option.setAttribute('data-email', c.email);
                crechesDatalist.appendChild(option);
            });

            const optionUnknown = document.createElement('option');
            optionUnknown.value = "Je ne sais pas encore";
            crechesDatalist.appendChild(optionUnknown);
        };

        populateCrechesList();

        // Auto-fill from URL if present
        const params = new URLSearchParams(window.location.search);
        let prefill = params.get('creche');
        if (prefill) {
            const matched = crechesData.find(c => c.name.toLowerCase() === prefill.toLowerCase());
            if (matched) {
                crecheInput.value = matched.name + (matched.city && !matched.name.includes(matched.city) ? ` (${matched.city})` : '');
            } else {
                crecheInput.value = prefill;
            }
        }
    }

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
                    .replace(/['’]/g, "")
                    .replace(/\bst\b/g, "saint")
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

            const filtered = crechesData.filter(c => {
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

                const imgUrl = 'images/hero_child_right.webp';

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

            crechesData.forEach(c => {
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

/* --- Lazy Loading for Images --- */
document.addEventListener('DOMContentLoaded', () => {
    const lazyImages = document.querySelectorAll('.lazy-img');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    // Swap src with data-src if data-src exists
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                    }
                    img.classList.add('loaded');
                    imageObserver.unobserve(img);
                }
            });
        }, {
            rootMargin: "0px 0px 200px 0px" // Load images 200px before they enter viewport
        });

        lazyImages.forEach(img => imageObserver.observe(img));
    } else {
        // Fallback for older browsers
        lazyImages.forEach(img => {
            if (img.dataset.src) img.src = img.dataset.src;
            img.classList.add('loaded');
        });
    }
});

