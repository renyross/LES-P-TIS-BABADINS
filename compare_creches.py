
import json
import re

def normalize_name(name):
    if not name: return ""
    # Remove accents
    name = name.lower()
    name = re.sub(r'[àáâãäå]', 'a', name)
    name = re.sub(r'[èéêë]', 'e', name)
    name = re.sub(r'[ìíîï]', 'i', name)
    name = re.sub(r'[òóôõö]', 'o', name)
    name = re.sub(r'[ùúûü]', 'u', name)
    name = re.sub(r'[ýÿ]', 'y', name)
    name = re.sub(r'ç', 'c', name)
    # Remove special characters and spaces
    name = re.sub(r'[^a-z0-9]', '', name)
    # Remove common prefixes
    prefixes = ["lesptitsbabadinsde", "lesptitsbabadins", "creche", "microcreche"]
    for p in prefixes:
        if name.startswith(p):
            name = name[len(p):]
    return name

def normalize_text(text):
    if not text: return ""
    return re.sub(r'\s+', ' ', text.strip().lower())

def clean_phone(phone):
    if not phone: return ""
    return "".join(filter(str.isdigit, phone))

current_creches = [
    {"name": "Les P'tits Babadins de Marssac sur Tarn", "city": "Marssac sur Tarn", "address": "9 avenue de la Pelatié", "zip": "81150", "phone": "09 70 75 65 39", "email": "direction.marssacsurtarn@lespetitsbabadins.com"},
    {"name": "Les P’tits Babadins de Mellac", "city": "Mellac", "address": "20 rue Ferdinand Buisson", "zip": "29300", "phone": "07 69 63 40 66", "email": "mellac@lespetitsbabadins.com"},
    {"name": "Les p'tits babadins de Quimperlé", "city": "Quimperlé", "address": "2 rue d'Athenry", "zip": "29300", "phone": "07 69 63 40 66", "email": "quimperle@lespetitsbabadins.com"},
    {"name": "Au Pays des Sens", "city": "Saint Germain du Puy", "address": "1 allée colette", "zip": "18390", "phone": "02 48 24 17 52 / 07 69 09 12 62", "email": "creche.aupaysdessens@ce-lpbx.com"},
    {"name": "Les P’tits Babadins de Souppes", "city": "Souppes-sur-Loing", "address": "2 Rue du Roulis", "zip": "77460", "phone": "07 81 11 16 60", "email": "souppes@lespetitsbabadins.com"},
    {"name": "Les P’tits Babadins 79260 La Crèche", "city": "La Crèche", "address": "ZA Baussais 7 rue Vasco de Gama", "zip": "79260", "phone": "06 19 64 60 89", "email": "direction.lacreche@lespetitsbabadins.com"},
    {"name": "Les P’tits Babadins Pordic", "city": "Pordic", "address": "Zone de Kéribet (en face de Les Compagnons des Saisons)", "zip": "22590", "phone": "02 96 78 07 22", "email": "creche.pordic@ce-lpbsx.com"},
    {"name": "Crèche Expansion Savenay 1", "city": "Savenay", "address": "Parc d'Activité de la Colleraye", "zip": "44260", "phone": "06 66 17 81 42", "email": "emilieguerin30@gmail.com"},
    {"name": "Ptits Babadins Téloché", "city": "Téloché", "address": "ZA du Gué 1 impasse des Sources", "zip": "72220", "phone": "07 81 01 88 22", "email": "teloche@lespetitsbabadins.com"},
    {"name": "MC de Louargat", "city": "Louargat", "address": "Rue de la Mairie", "zip": "22540", "phone": "06 23 98 80 51", "email": "stquayperros@lespetitsbabadins.com"},
    {"name": "Les p'tits Babadins de Wargnies le Grand", "city": "Wargnies-le-Grand", "address": "ZA de la Vallée de l'Aunelle, 8 N Route nationale", "zip": "59144", "phone": "06 73 51 78.63", "email": "creche.wargnies@ce-lpbx.com"},
    {"name": "Les p'tits Babadins de Lorient", "city": "Lorient", "address": "1 rue Jules Le Grand", "zip": "56100", "phone": "07 69 63 40 66", "email": "mellac@lespetitsbabadins.com"},
    {"name": "Les P’tits Babadins de Pont Saint Esprit", "city": "Pont-Saint-Esprit", "address": "320 chemin de la mouette", "zip": "30130", "phone": "06 45 20 12 39", "email": "creche.pontsaintesprit@ce-lpbx.com"},
    {"name": "Les P’tits Babadins de Sigournais", "city": "Sigournais", "address": "2 rue des Vignes, Actipôle de Benêtre", "zip": "85110", "phone": "06 98 39 42 91", "email": "creche.sigournais@ce-lpbx.com"},
    {"name": "Les P’tits Babadins de Bournezeau", "city": "Bournezeau", "address": "31 Rue de l'Oiselière", "zip": "85480", "phone": "06 98 39 42 91", "email": "creche.bournezeau@ce-lpbx.com"},
    {"name": "Les P’tits Babadins de Grosbreuil", "city": "Grosbreuil", "address": "Rue des Sports", "zip": "85440", "phone": "06 98 39 42 91", "email": "sigournais@lespetitsbabadins.com"},
    {"name": "Les p’tits Babadins de Saint Aubin du Cormier", "city": "Saint-Aubin-du-Cormier", "address": "1 Rue du Trégor", "zip": "35140", "phone": "07 52 08 46 12", "email": "questembert@lespetitsbabadins.com"},
    {"name": "Les p’tits Babadins de Questembert", "city": "Questembert", "address": "2 Impasse du Verger", "zip": "56230", "phone": "07 52 08 46 12"},
    {"name": "Les p’tits Babadins de Melesse", "city": "Melesse", "address": "11 rue des Olivettes", "zip": "35520", "phone": "07 52 08 46 12"},
    {"name": "Les p’tits Babadins de Pleuven", "city": "Pleuven", "address": "12 Ter Ty Keravec", "zip": "29170", "phone": "07 52 08 46 12"},
    {"name": "La Maison des Petits Maraichins", "city": "Challans", "address": "30 Rue du Maréchal Joffre", "zip": "85300", "phone": "07 55 60 75 11"},
    {"name": "La Villa des Petits Garnachois", "city": "La Garnache", "address": "Rue des Ciseleurs", "zip": "85710", "phone": "07 55 60 75 11"},
    {"name": "Les P’tits Babadins de St Hilaire", "city": "Saint-Hilaire-de-Riez", "address": "12 Rue de la Mignelle", "zip": "85270", "phone": "02 79 40 08 86"},
    {"name": "Les p'tits Babadins de Quéven", "city": "Quéven", "address": "34 Rue Fontaine de Barenton", "zip": "56530", "phone": "07 69 63 40 66"},
    {"name": "Crèches Expansion Saintes", "city": "Saintes", "address": "83 Cours Maréchal Leclerc", "zip": "17100", "phone": "06 00 00 00 00"},
    {"name": "Les p’tits Babadins de Montbert", "city": "Montbert", "address": "1 rue des Loges", "zip": "44140", "phone": "06 86 15 62 18", "email": "creche.montbert@ce-lpbx.com"},
    {"name": "La Ville Dieu Crèche", "city": "Lavilledieu", "address": "50 chemin de Champredon", "zip": "7170", "phone": "06 07 06 47 44"},
    {"name": "Les P’tits Babadins de la Roche", "city": "La Roche-sur-Yon", "address": "3 Rue des Entrepreneurs", "zip": "85000", "phone": "06 62 10 19 83"},
    {"name": "Les P’tits Babadins Saint-André d’Ornay", "city": "La Roche-sur-Yon", "address": "3 Rue des Entrepreneurs", "zip": "85000", "phone": "07 82 84 71 66"},
    {"name": "Les P’tits Babadins Perpignan", "city": "Perpignan", "address": "7 Allée Borée", "zip": "66000", "phone": "06 81 30 04 27", "email": "creche.perpignan@ce-lpbx.com"},
    {"name": "Les P’tits Babadins St Vincent de Paul", "city": "Saint-Vincent-de-Paul", "address": "490 rue de la cantère - Zone d'activités", "zip": "40990", "phone": "07 44 41 76 34", "email": "creche.svdp@ce-lpbx.com"},
    {"name": "Les p’tits Babadins St-Aubin-sur-Scie", "city": "Saint-Aubin-sur-Scie", "address": "35 Rue Neuve", "zip": "76550", "phone": "07 66 91 96 65"},
    {"name": "Micro-crèche Les P’tits Babadins d’Olivet", "city": "Olivet", "address": "29 Rue Jules Marie Simon", "zip": "45160", "phone": "07 56 10 73 77"},
    {"name": "Les P’tits Babadins de Tavers", "city": "Tavers", "address": "9 rue de Grattelièvres", "zip": "45190", "phone": "02.79.40.11.54", "email": "creche.tavers@ce-lpbx.com"},
    {"name": "Les P’tits Babadins Meung-sur-Loire", "city": "Meung-sur-Loire", "address": "3 mail des trois roses", "zip": "45130", "phone": "07.80.16.88.03", "email": "creche.msl@ce-lpbx.com"},
    {"name": "Les p'tits Babadins de Coëtmieux", "city": "Coëtmieux", "address": "30 bis rue de la Truite", "zip": "22400", "phone": "06 02 71 58 96", "email": "creche.coetemieux@ce-lpbx.com"},
    {"name": "Les P’tits Babadins Avermes", "city": "Avermes", "address": "11 Rue des Saccarauds", "zip": "03000", "phone": "06 62 30 64 40"},
    {"name": "Les P’tits Babadins Baldersheim", "city": "Baldersheim", "address": "ZA 10 Rue des Chasseurs", "zip": "68390", "phone": "06 63 01 97 03"},
    {"name": "Les P’tits Babadins Grussenheim", "city": "Grussenheim", "address": "62 route de Colmar", "zip": "68320", "phone": "03.89.27.55.17", "email": "creche.grussenheim@ce-lpbx.com"},
    {"name": "Les p'tits Babadins de Hégenheim 1", "city": "Hegenheim", "address": "30 rue des Landes", "zip": "68220", "phone": "06 63 01 97 03", "email": "creche.hegenheim1@ce-lpbx.com"},
    {"name": "Les P’tits Babadins Montivilliers", "city": "Montivilliers", "address": "3 impasse Edgar Degas", "zip": "76290", "phone": "09 73 39 65 98", "email": "creche.montivilliers@ce-lpbx.com"},
    {"name": "Les P’tits Babadins Saint Chamond", "city": "Saint Chamond", "address": "2A rue Marc Seguin", "zip": "42400", "phone": "07 61 69 28 60"},
    {"name": "Les p'tits Babadins de Hégenheim 2", "city": "Hegenheim", "address": "30 A rue des Landes", "zip": "68220", "phone": "06 63 01 97 03", "email": "creche.hegenheim2@ce-lpbx.com"},
    {"name": "Au Saut du nid", "city": "Tignieu-Jameyzieu", "address": "38 boulevard Ampère", "zip": "38230", "phone": "06.70.03.61.55", "email": "creche.tignieujameyzieu@gmail.com"},
    {"name": "Tintinna Bulle", "city": "Tignieu-Jameyzieu", "address": "Boulevard Ampère", "zip": "38230", "email": "creche.tignieujameyzieu@gmail.com"},
    {"name": "Les p'tits Babadins de Faye d'Anjou", "city": "Faye d'Anjou", "address": "4 ter rue des monts", "zip": "49380", "phone": "07 44 98 74 20", "email": "mcfayedanjou@gmail.com"},
    {"name": "Les p'tits Babadins de Miremont", "city": "Miremont", "address": "4 Voie Eris, ZA Pompignal", "zip": "31190", "phone": "07.62.70.23.04", "email": "creche.miremont@ce-lpbx.com"},
    {"name": "Les p'tits papailloux", "city": "Angers", "address": "24, place Terra Botanica", "zip": "49100", "phone": "06.62.10.19.83"},
    {"name": "Les p'tits charrettes", "city": "La Roche-sur-Yon", "address": "Résidence Le Tamaris, Les Prairies d’Eden", "zip": "85000", "email": "creche.bourgsouslaroche@ce-lpbx.com"},
    {"name": "Les p'tits Babadins de Masny", "city": "Masny", "address": "9 bis Rue de Froissy", "zip": "59176", "phone": "06 74 41 36 16", "email": "creche.masny@ce-lpbx.com"},
    {"name": "Les p'tits Bababins d'Aniche", "city": "Aniche", "address": "Localisation en cours", "zip": "59580", "email": "creche.aniche@ce-lpbx.com"},
    {"name": "Les p'tits Babadins de Beuvry", "city": "Beuvry", "address": "Localisation en cours", "zip": "62660"},
    {"name": "Les p'tits Babadins de Etival lès le Mans", "city": "Étival-lès-le-Mans", "address": "7 Rue de Siedenburg", "zip": "72700", "phone": "07 81 01 88 22", "email": "creche.etival@ce-lpbx.com"},
    {"name": "Les p'tits Babadins de Saint Nicolas de Redon", "city": "Saint-Nicolas-de-Redon", "address": "30 rue des roseaux", "zip": "44460", "phone": "06 76 79 63 22", "email": "creche.sndr@ce-lpbx.com"},
    {"name": "Les p’tits Babadins de Pasquis 2", "city": "Montluçon", "address": "48 rue de PASQUIS", "zip": "03100", "phone": "06 64 31 36 54", "email": "directioncrecheflorine@gmail.com"},
    {"name": "Le Grandchamp des Enfants", "city": "Grandchamp-des-Fontaines", "address": "Parc d’activité de Bellevue", "zip": "44119", "phone": "06.14.17.72.84.", "email": "grandchampsdesenfants@ce-lpbx.com"},
    {"name": "Les enfants des Fontaines", "city": "Grandchamp-des-Fontaines", "address": "PA de Bellevue, 13 bis rue des sports", "zip": "44119"},
    {"name": "Les p'tits babadins de Freneuse 1", "city": "Freneuse", "address": "La Croix du Moulin - 19 rue des Bouderies", "zip": "78840", "phone": "06.68.74.03.33", "email": "creche.freneuse1@ce-lpbx.com"},
    {"name": "Les p'tits babadins de Freneuse 2", "city": "Freneuse", "address": "La Croix du Moulin - 19 rue des Bouderies", "zip": "78840", "email": "creche.freneuse2@ce-lpbx.com"},
    {"name": "A Petits Pas", "city": "Auzeville-Tolosane", "address": "5 Av Daniel Brisebois", "zip": "31320", "phone": "06.24.51.09.60", "email": "apetitspas@ce-lpbx.com"},
    {"name": "Les Lutins du Bois Joli", "city": "Auzeville-Tolosane", "address": "3 Av Daniel Brisebois", "zip": "31320", "email": "leslutinsduboisjoli@ce-lpbx.com"},
    {"name": "Les p'tits Babadins de Saveuse", "city": "Saveuse", "address": "Localisation en cours", "zip": "80470", "email": "creche.poulainville2@ce-lpbx.com"},
    {"name": "Les p'tit Babadins de Poullainville 2", "city": "Poulainville", "address": "Chemin de Longpré", "zip": "80260", "email": "creche.saveuse@ce-lpbx.com"},
    {"name": "Les p'tits Babadins de Aubenas", "city": "Aubenas", "address": "72A Av. de Roqua", "zip": "07200", "phone": "07 61 32 43 13", "email": "creche.aubenas@ce-lpbx.com"},
    {"name": "Micro-crèche Les Singulières", "city": "Montelier", "address": "Rue des Charmilles", "zip": "26120", "phone": "06.38.01.95.38", "email": "bastida@ce-lpbx.com"},
    {"name": "Micro-crèche Abolena", "city": "Bollene", "address": "183 avenue Georges Melies", "zip": "84500", "email": "bastida@ce-lpbx.com"},
    {"name": "Bastida", "city": "La Bâtie-Rolland", "address": "725 route de Montélimar", "zip": "26160", "email": "bastida@ce-lpbx.com"},
    {"name": "Micro-crèche Castel", "city": "Châteauneuf-du-Rhône", "address": "240 Impasse des buis", "zip": "26780", "email": "bastida@ce-lpbx.com"},
    {"name": "Micro-crèche du Meyrol", "city": "Montélimar", "address": "9 Allée de Barjac", "zip": "26200", "email": "bastida@ce-lpbx.com"},
    {"name": "Crèche Les P'tits Babadins de Baillet - Les P'tits chimistes", "city": "Baillet-en-France", "address": "Rue Pierre et Marie Curie", "zip": "95560", "phone": "01.34.69.05.87"},
    {"name": "Crèche Les P'tits Babadins de St Martin - Le petit monde de Léopold", "city": "Saint-Martin-du-Tertre", "address": "17 avenue Jacques Duclos", "zip": "95270", "phone": "01.30.35.92.10"},
    {"name": "Crèche Les P'tits Babadins de Belloy", "city": "Belloy-en-France", "address": "3 place Sainte-Beuve", "zip": "95270", "phone": "01.30.35.08.39"},
    {"name": "Crèche Les P'tits Babadins de Pernety", "city": "Paris", "address": "47 rue Bénard", "zip": "75014", "phone": "01.88.75.02.15"},
    {"name": "Micro-crèche les p'tits Babadins Sisteron", "city": "Sisteron", "address": "27 Allée des Tilleuls", "zip": "04200", "phone": "04-92-64-95-15", "email": "virginie.herlemont@ce-lpbx.com"},
    {"name": "Les p'tits Babadins de Boissy-le-Châtel", "city": "Boissy-le-Châtel", "address": "17 Bis ZAC des 18 Arpents", "zip": "77169", "phone": "01 88 75 01 02 / 07 44 41 46 32"},
    {"name": "Les P’tits Babadins de Clamart", "city": "Clamart", "address": "32 rue Georges Huguet", "zip": "92140", "phone": "01 88 75 02 30 / 07 44 47 88 96", "email": "creche.clamart@ce-lpbx.com"},
    {"name": "Coccinelle", "city": "St Barthelemy d'Anjou", "address": "2 rue de la Morellerie", "zip": "49124", "phone": "06.15.52.90.31", "email": "eva.zara@hotmail.fr"},
    {"name": "Micro- Crèche La Fayette", "city": "Angers", "address": "26 rue de Brissac", "zip": "49000"},
    {"name": "La Cabane des doudous", "city": "St Jean de Boiseau", "address": "Impasse des Forgerons", "zip": "44640", "phone": "06.60.39.21.07", "email": "olivier.landrieau@bbox.fr"},
    {"name": "Choupie et Bibou", "city": "St Jean de Boiseau", "address": "Impasse des Forgerons", "zip": "44640", "email": "olivier.landrieau@bbox.fr"},
    {"name": "Lililou Micro-Creche", "city": "La Chapelle sur Erdre", "address": "1 bis rue Newton", "zip": "44240", "phone": "06.86.15.62.18", "email": "lachapellesurerdre@ce-lpbx.com"},
    {"name": "Les p'tits Babadins de Saint-Maixent-l'École", "city": "Saint-Maixent-l'École", "address": "28 rue d'Horsham", "zip": "79400", "phone": "06 19 64 60 89", "email": "creche.saintmaixent@ce-lpbx.com"},
    {"name": "Les p'tits Babadins de Janzé", "city": "Janzé", "address": "18 bis rue de la Houlette", "zip": "35150", "phone": "07 52 08 46 12", "email": "Creche.janze1@ce-lpbx.com"},
    {"name": "Les p'tits Babadins de Guichen", "city": "Guichen", "address": "24 rue Denis Papin", "zip": "35580", "phone": "07 52 08 46 12", "email": "Creche.guichen@ce-lpbx.com"},
    {"name": "Les p'tits Babadins de Noyal-Châtillon-sur-Seiche", "city": "Noyal-Châtillon-sur-Seiche", "address": "30 rue de saint Erblon", "zip": "35230", "phone": "07 52 08 46 12", "email": "Creche.noyal@ce-lpbx.com"},
    {"name": "Les p'tits Babadins de Rennes", "city": "Rennes", "address": "2 rue ambroisine Garnier Leray", "zip": "35000", "phone": "07 52 08 46 12", "email": "Creche.rennes@ce-lpbx.com"},
    {"name": "Les p'tits Babadins de Mainvilliers", "city": "Mainvilliers", "address": "4 rue Paul Emile Victor", "zip": "28300", "phone": "07 82 58 90 32", "email": "creche.mainvilliers@ce-lpbx.com"},
    {"name": "Les p'tits Babadins de Luisant", "city": "Luisant", "address": "52 Rue du Val de la Cavée", "zip": "28600", "phone": "06.64.91.98.96", "email": "creche.luisant@ce-lpbx.com"},
    {"name": "Les p'tits Babadins de Gellainville", "city": "Gellainville", "address": "3 Parc de l'Équerre", "zip": "28630", "phone": "06.64.91.98.96", "email": "creche.gelainville@ce-lpbx.com"},
    {"name": "Les p'tits Babadins de La Riche", "city": "La Riche", "address": "15 rue de la Chapelle", "zip": "37520", "phone": "06.38.41.23.23", "email": "creche.lariche@ce-lpbx.com"},
    {"name": "Les p'tits Babadins de Joué-lès-Tours", "city": "Joué-lès-Tours", "address": "19 Rue de la Flottière", "zip": "37300", "phone": "06.38.41.23.23", "email": "creche.jlt@ce-lpbx.com"},
    {"name": "Les p'tits Babadins de Villeneuve sur Lot", "city": "Villeneuve-sur-Lot", "address": "560 rue de la Dardenne", "zip": "47300", "phone": "05 53 49 27 15", "email": "t.villeneuve@ce-lpbx.com"},
    {"name": "Les p'tits Babadins de Saint-Quay-Perros", "city": "Saint-Quay-Perros", "address": "8 rue résidence de Kreas Hent", "zip": "22700", "phone": "06 23 98 08 51", "email": "stquayperros@lespetitsbabadins.com"},
    {"name": "Les p'tits Babadins de Bize-Minervois", "city": "Bize-Minervois", "address": "3 Rue des Vignerons", "zip": "11120", "phone": "06 83 01 96 93"},
    {"name": "Crèches Expansion Saint Malo", "city": "Saint Malo", "address": "16 rue de la croix Desilles", "zip": "35400", "email": "creche.saintmalo@ce-lpbx.com"},
    {"name": "Les p'tits Babadins de Mazères", "city": "Mazères", "address": "16 Rue des Acacias", "zip": "33210", "phone": "07 49 89 35 94"},
    {"name": "Crèches Expansion Livre sur Changeon", "city": "Livré-sur-Changeon", "address": "8 Rue Jean Berçu", "zip": "35450", "email": "creche.livresurchangeon@ce-lpbx.com"},
    {"name": "Les p'tits Babadins de Loiron", "city": "Loiron-Ruillé", "address": "18 rue du petit bois", "zip": "53320", "phone": "06 77 42 09 79"},
    {"name": "Les p'tits Babadins de Laval", "city": "Laval", "address": "180 Boulevard Jean Jaurès", "zip": "53000", "phone": "06 77 42 09 79"},
    {"name": "Les p'tits Babadins de Forcé", "city": "Forcé", "address": "3 Rue Simone Veil", "zip": "53260", "phone": "06 77 42 09 79"},
    {"name": "Ty Moussaillons", "city": "Arzal", "address": "La Corne du Cerf", "zip": "56190", "phone": "09 84 54 63 61", "email": "tymoussaillons@creches-expansion.fr"},
    {"name": "Les p'tits babadins de Pavilly", "city": "Pavilly", "address": "164 boulevard Roger Fosse", "zip": "76570", "phone": "06.98.20.93.16"}
]

# User list to verify
user_list_raw = """
La Ronde de Carnelle	RE	Halte Garderie Val d'Oise	95	sept.-7		laure.bouniol@ce-lpbx.com
Les p'tits Babadins de Saint Martin du Tertre	RE	17 avenue Jacques Duclos, Saint-Martin-du-Tertre	95	janv.-12		
Les p'tits Babadins de Pernety	RE	47 Rue Bénard, 75014 Paris	75	avr.-13		
Les p'tits Babadins de Belloy	RE	3 Place Sainte-Beuve 95270 Belloy-en-France	95	sept.-14		
Les p'tits Chimistes	RE	Rue Pierre et Marie Curie, 95560 Baillet en France	95	mars-16		
Les p'tits Babadins de Mazeres	RE	16 rue des acacias, 33210 Mazères	33	sept.-17	07 49 89 35 94	
Les p'tits Babadins de Clamart	RDS	32 Rue Georges Huguet, 92140 Clamart	92	oct.-17	07 44 47 88 96	creche.clamart@ce-lpbx.com
Les p'tits Babadins de Boissy Le Châtel	RDS	Rue de la ZAC des 18 Arpents 77169 Boissy Le Châtel	77	0	07.44.41.46.32	creche.blc@ce-lpbx.com
Les p’tits Babadins de Montbert	RE	1 Rue des loges, 44140 Montbert	44	sept.-23	06 86 15 62 18	creche.montbert@ce-lpbx.com
Les P'tits Babadins de St Agathon	RDS	Chemin des écoliers, 22200 St Agathon	22	oct.-19	07 44 44 31 84	
Les p'tits Babadins de La Crèche	RE	7 rue Vasco de Gama - ZA Baussais, 79260 La Crèche	79	janv.-21	06 19 64 60 89	lacreche@ce-lpbx.com
Les p'tits Babadins de Saintes	RE		17			creche.saintes@ce-lpbx.com
Les p'tits Babadins de Saint-Maixent-l'Ecole	RE	28 rue d'Horsham - ZA Les Granges, 79400 Saint-Maixent-l'Ecole	79	avr.-21		creche.saintmaixent@ce-lpbx.com
Les p’tits Babadins de Souppes	RE	2 Rue du Roulis, 77460 Souppes-Sur-Loing	77	janv.-21	07 81 11 16 60	creche.souppes@ce-lpbx.com
Les p'tits babadins de Pordic	RDS	ZONE DE KERIBET, EN FACE D’INTERMARCHE PORDIC (22590)	22	mai.-21		creche.pordic@ce-lpbx.com
Les p'tits Babadins de Questembert	RE	2 impasse du verger 56230 Questembert	56	mai-23	07 56 27 77 70	severine.eon@ce-lpbx.com
Ty Moussaillons	RE	La Corne du Cerf, 56190 Arzal 56190 Arzal	56	sept.-13		
Les p'tits Babadins de JANZE	RE	183 rue de la Houlette JANZE (35150)	35	sept.-20	07.52.08.46.12/ 07.66.35.79.55	benedicte.clediere@ce-lpbx.com
Les p'tits Babadins de JANZE 2	RE	184 rue de la Houlette JANZE (35150)	35	01-2024	07.52.08.46.12/ 07.66.82.25.71	
Les p'tits Babadins de GUICHEN	RE	24 rue Denis Papin GUICHEN (35580)	35	oct.-20		
Les p'tits Babadins de NOYAL CHATILLON SUR SEICHE	RE	30 rue de Saint-Erblon 35230 NOYAL CHATILLON SUR SEICHE (35230)	35	avr.-23		
Les p'tits Babadins de Saint Aubin du Cormier	RE	rue de Tregor, 35 140 St Aubin du Cormier	35	mai-24	02 23 37 66 41	severine.eon@ce-lpbx.com
Les p'tits Babadins de Melesse	RE	11 rue des olivettes, 35520 Melesse	35	septembre 2024		
Les P'tits Pirates	RE	74 Bis Rue de la Déhanne Maroué 22400 Lamballe	22	mars-17	06 02 71 58 96	creche.lamballe@ce-lpbx.com
Les p'tits Babadins de Coëtmieux	RE	30 bis rue de la Truite 22400 Coëtmieux	22	juil.-19		creche.coetmieux@ce-lpbx.com
Les Ptits Babadins de Pleuven	RE	12 Ter Ty Keravec, 29170 Pleuven	29	janv.-21	07 49 91 93 73	severine.eon@ce-lpbx.com
Les P'tits Babadins de St Yvi	RE					
Les p'tits Babadins de Tavers	RE	11 rue des Gratelièvres, 45190 Tavers	45	mai-21	06 02 26 63 27	creche.tavers@ce-lpbx.com
Les p'tits Babadins de Meung-sur-Loire	RE	Mail des Trois Roses, 45130 Meung-sur-Loire	45	mars-24		creche.msl@ce-lpbx.com
Les p'tits Bababins d'Olivet	RE	Rue Jules Marie Simon, 46160 Olivet	45	sept.-24		creche.olivet@ce-lpbx.com
Les p’tits Babadins de Saint-Aubin-sur-Scie	RDS	35 Rue Neuve, 76550 Saint-Aubin-sur-Scie	76	sept.-24	07.66.91.96.65	creche.lmdc@ce-lpbx.com
Les p’tits Babadins de Sisteron	RDS	27 allée Tilleuls, 04200 Sisteron	4	févr.-20	06 74 28 95 10	mathilde.moreau@ce-lpbx.com
Les p'tits Babadins de Saint Vincent de Paul	RE	490 Rue de la Cantere Lot n° 12, 40990 Saint-Vincent-de-Paul	40	nov.-22	07 44 41 76 34 	creche.svdp@ce-lpbx.com
Les p’tits Babadins de Saint-André-d’Ornay	RE	58 rue Auguste Murail, 85000 La Roche-sur-Yon	85	mars-19	07.82.84.71.66	creche.saintandre@ce-lpbx.com
Les p’tits Babadins de La Roche	RE	58 rue Auguste Murail, 85000 La Roche-sur-Yon	85	janv.-21		creche.laroche@ce-lpbx.com
Les p'tits Babadins de Mainvillers	RDS	4 rue Paul Emile Victor, 23800 Mainvilliers	28	août-23	07.62.58.90.32	creche.mainvilliers@ce-lpbx.com
Les p’tits Babadins de Luisant	RE	52 Rue du Val de la Cavée, 28600 Luisant	28	déc.-18	06.64.91.98.96	creche.luisant@ce-lpbx.com
Les p'tits Babadins de Gellainville	RE	3 Parc de l'Equerre de, 28630 Gellainville	28	sept.-20		creche.gellainville@ce-lpbx.com
Les p'tits Babadins de La Riche		15 rue de la Chapelle, 37520 La Riche	37	sept.-20	06.38.41.23.23    	creche.lariche@ce-lpbx.com
Les p'tits Babadins de Joué-lès-Tours		19 Rue de la Flottière, 37300 Joué-lès-Tours	37	juin-22	06.38.41.23.23   	creche.jlt@ce-lpbx.com
Les p'tits papailloux		24, place Terra Botanica, 49100 Angers	49	nov.-15		creche.angers@ce-lpbx.com
Les p'tits Babadins de Marssac sur Tarn	RE	Zac Rieumas, 9 avenue de la Pelatié, 81150 Marssac-sur-Tarn	81	nov.-23	06.56.67.49.65	creche.marssac@ce-lpbx.com
Les p'tits Bababins de Villeneuve sur Lot	RE	560 Rue de la Dardenne, 47300 Villeneuve-sur-Lot	47	mars 24	07 44 40 52 60	creche.vsl@ce-lpbx.com
Les p'tits Bababins de Puy l'eveque	RE		46			
Les p’tits Babadins de Saint-Quay-Perros	RDS	8 rue résidence de Kroas Hent, 22700 Saint-Quay-Perros	22	janv.-21	06.23.98.08.51	
Les p'tits Babadins de Pavilly	Lemonnier Vanessa	164 boulevard Roger Fosse 76570 Pavilly	76	mai-23	06.98.20.93.16	
Les p'tits Babadins de Hégenheim 1		30 rue des Landes, 68220 Hegenheim	68	août-18		
Les p'tits Babadins de Hégenheim 2		30 A rue des Landes, 68220 Hegenheim	68	septembre-19	03 67 23 02 58	
Les p'tits babadins de Freneuse 1		La Croix du Moulin - 19 rue des Bouderies FRENEUSE (78840)	78			
Les p'tits babadins de Freneuse 2		La Croix du Moulin - 19 rue des Bouderies FRENEUSE (78840)	78			
aizenay			85			
"""

report = []

for line in user_list_raw.strip().split('\n'):
    parts = line.split('\t')
    if not parts or not parts[0].strip(): continue
    
    name = parts[0].strip()
    address = parts[2].strip() if len(parts) > 2 else ""
    cp = parts[3].strip() if len(parts) > 3 else ""
    phone = parts[5].strip() if len(parts) > 5 else ""
    email = parts[6].strip() if len(parts) > 6 else ""
    
    norm_name_user = normalize_name(name)
    
    match = None
    for c in current_creches:
        norm_name_site = normalize_name(c['name'])
        if norm_name_user == norm_name_site or norm_name_user in norm_name_site or norm_name_site in norm_name_user:
            match = c
            break
            
    if not match:
        report.append(f"MISSING: {name} (Address: {address}, CP: {cp})")
        continue
        
    mismatches = []
    
    # Address check
    norm_addr_user = normalize_text(address)
    norm_addr_site = normalize_text(match.get('address', ''))
    if norm_addr_user and norm_addr_site:
        # Check if one is contained in other to avoid minor format issues
        if norm_addr_user not in norm_addr_site and norm_addr_site not in norm_addr_user:
             mismatches.append(f"Address: Site has '{match.get('address')}', User has '{address}'")
             
    # Phone check
    if phone and match.get('phone'):
        if clean_phone(phone) != clean_phone(match.get('phone')):
             mismatches.append(f"Phone: Site has '{match.get('phone')}', User has '{phone}'")
             
    # Email check
    if email and match.get('email'):
        if normalize_text(email) != normalize_text(match.get('email')):
             mismatches.append(f"Email: Site has '{match.get('email')}', User has '{email}'")
             
    # CP check
    if cp and match.get('zip'):
        if cp[:2] != match.get('zip')[:2]:
            mismatches.append(f"CP: Site has '{match.get('zip')}', User has '{cp}'")

    if mismatches:
        report.append(f"MISMATCH: {name}")
        for m in mismatches:
            report.append(f"  - {m}")

print("\n".join(report))
