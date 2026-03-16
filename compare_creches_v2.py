
import re
import json

def get_current_data():
    with open("/Users/renelrosene/Desktop/Les p’tits Babadins/index.html/main.js", "r") as f:
        content = f.read()
    
    # Extract the array content
    match = re.search(r'let crechesData = \[(.*?)\];', content, re.DOTALL)
    if not match:
        return []
    
    data_str = match.group(1)
    
    # Simple regex to extract objects
    # Note: This is fragile but might work for this specific file format
    entries = []
    # Find things like { name: "...", ... }
    obj_matches = re.finditer(r'\{\s*(.*?)\s*\}', data_str, re.DOTALL)
    for m in obj_matches:
        obj_content = m.group(1)
        entry = {}
        # Extract fields
        fields = re.finditer(r'(\w+):\s*"(.*?)"', obj_content)
        for f_match in fields:
            entry[f_match.group(1)] = f_match.group(2)
        if entry:
            entries.append(entry)
    return entries

def normalize(text):
    if not text: return ""
    # Remove accents and special chars
    text = text.lower()
    text = re.sub(r'[àáâãäå]', 'a', text)
    text = re.sub(r'[èéêë]', 'e', text)
    text = re.sub(r'[ìíîï]', 'i', text)
    text = re.sub(r'[òóôõö]', 'o', text)
    text = re.sub(r'[ùúûü]', 'u', text)
    text = re.sub(r'ç', 'c', text)
    text = re.sub(r'[^a-z0-9]', '', text)
    return text

def clean_phone(phone):
    if not phone: return ""
    return "".join(filter(str.isdigit, phone))

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
Les p'tits Babadins de RENNES ZI SUD EST	RE	2 rue Ambroisine Garnier Leray 35000 RENNES ou CESSON-SEVIGNE (35510)	35	oct.-21		
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

current_data = get_current_data()
user_data = []
for line in user_list_raw.strip().split('\n'):
    parts = line.split('\t')
    if not parts or not parts[0].strip(): continue
    user_data.append({
        "name": parts[0].strip(),
        "address": parts[2].strip() if len(parts) > 2 else "",
        "zip_prefix": parts[3].strip() if len(parts) > 3 else "",
        "phone": parts[5].strip() if len(parts) > 5 else "",
        "email": parts[6].strip() if len(parts) > 6 else ""
    })

report = {
    "missing": [],
    "mismatched": [],
    "surplus": []
}

found_site_indices = set()

for u in user_data:
    u_norm = normalize(u['name'])
    match = None
    match_index = -1
    for i, c in enumerate(current_data):
        c_norm = normalize(c['name'])
        if u_norm in c_norm or c_norm in u_norm:
            match = c
            match_index = i
            break
    
    if not match:
        report["missing"].append(u)
    else:
        found_site_indices.add(match_index)
        mismatches = []
        
        # Check address
        u_addr = normalize(u['address'])
        c_addr = normalize(match.get('address', ''))
        if u_addr and c_addr and u_addr not in c_addr and c_addr not in u_addr:
            mismatches.append({"field": "address", "site": match.get('address'), "user": u['address']})
            
        # Check phone
        u_phone = clean_phone(u['phone'])
        c_phone = clean_phone(match.get('phone', ''))
        if u_phone and c_phone and u_phone not in c_phone:
            mismatches.append({"field": "phone", "site": match.get('phone'), "user": u['phone']})
            
        # Check email
        u_email = normalize(u['email'])
        c_email = normalize(match.get('email', ''))
        if u_email and c_email and u_email != c_email:
            mismatches.append({"field": "email", "site": match.get('email'), "user": u['email']})
            
        if mismatches:
            report["mismatched"].append({"name": u['name'], "mismatches": mismatches})

for i, c in enumerate(current_data):
    if i not in found_site_indices:
        report["surplus"].append(c)

print(json.dumps(report, indent=2))
