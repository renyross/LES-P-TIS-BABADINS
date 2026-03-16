import json
import re

user_data = """La Ronde de CarnelleREHalte Garderie Val d'Oise95sept.-7laure.bouniol@ce-lpbx.com
Les p'tits Babadins de Saint Martin du TertreRE17 avenue Jacques Duclos, Saint-Martin-du-Tertre95janv.-12
Les p'tits Babadins de PernetyRE47 Rue Bénard, 75014 Paris75avr.-13
Les p'tits Babadins de BelloyRE3 Place Sainte-Beuve · 95270 Belloy-en-France95sept.-14
Les p'tits ChimistesRERue Pierre et Marie Curie, 95560 Baillet en France95mars-16
Les p'tits Babadins de MazeresRE16 rue des acacias, 33210 Mazères33sept.-1707 49 89 35 94
Les p'tits Babadins de ClamartRDS32 Rue Georges Huguet, 92140 Clamart92oct.-1707 44 47 88 96creche.clamart@ce-lpbx,com
Les p'tits Babadins de Boissy Le ChâtelRDSRue de la ZAC des 18 Arpents 77169 Boissy Le Châtel77007.44.41.46.32creche.blc@ce-lpbx.com
Les p’tits Babadins de MontbertRE1 Rue des loges, 44140 Montbert44sept.-2306 86 15 62 18creche.montbert@ce-lpbx.com
Les P'tits Babadins de St AgathonRDSChemin des écoliers, 22200 St Agathon22oct.-1907 44 44 31 84
Les p'tits Babadins de La CrècheRE7 rue Vasco de Gama - ZA Baussais, 79260 La Crèche79janv.-2106 19 64 60 89lacreche@ce-lpbx.com
Les p'tits Babadins de SaintesRE17creche.saintes@ce-lpbx.com
Les p'tits Babadins de Saint-Maixent-l'EcoleRE28 rue d'Horsham - ZA Les Granges, 79400 Saint-Maixent-l'Ecole79avr.-21creche.saintmaixent@ce-lpbx.com
Les p’tits Babadins de SouppesRE2 Rue du Roulis, 77460 Souppes-Sur-Loing77janv.-2107 81 11 16 60creche.souppes@ce-lpbx.com
Les p'tits babadins de PordicRDSZONE DE KERIBET, EN FACE D’INTERMARCHE PORDIC (22590)22mai.-21creche.pordic@ce-lpbx.com
Les p'tits Babadins de QuestembertRE2 impasse du verger 56230 Questembert56mai-2307 56 27 77 70severine.eon@ce-lpbx.com
Ty MoussaillonsRELa Corne du Cerf, 56190 Arzal 56190 Arzal56sept.-13
Les p'tits Babadins de JANZERE183 rue de la Houlette JANZE (35150)35sept.-2007.52.08.46.12/ 07.66.35.79.55benedicte.clediere@ce-lpbx.com
Les p'tits Babadins de JANZE 2RE184 rue de la Houlette JANZE (35150)3501-202407.52.08.46.12/ 07.66.82.25.71
Les p'tits Babadins de GUICHENRE24 rue Denis Papin GUICHEN (35580)35oct.-20
Les p'tits Babadins de RENNES ZI SUD ESTRE2 rue Ambroisine Garnier Leray 35000 RENNES ou CESSON-SEVIGNE (35510)35oct.-21
Les p'tits Babadins de NOYAL CHATILLON SUR SEICHERE30 rue de Saint-Erblon 35230 NOYAL CHATILLON SUR SEICHE (35230)35avr.-23
Les p'tits Babadins de Saint Aubin du CormierRErue de Tregor, 35 140 St Aubin du Cormier35mai-2402 23 37 66 41severine.eon@ce-lpbx.com
Les p'tits Babadins de MelesseRE11 rue des olivettes, 35520 Melesse35septembre 2024
Les P'tits PiratesRE74 Bis Rue de la Déhanne Maroué 22400 Lamballe22mars-1706 02 71 58 96creche.lamballe@ce-lpbx.com
Les p'tits Babadins de CoëtmieuxRE30 bis rue de la Truite 22400 Coëtmieux22juil.-19creche.coetmieux@ce-lpbx.com
Les Ptits Babadins de PleuvenRE12 Ter Ty Keravec, 29170 Pleuven29janv.-2107 49 91 93 73severine.eon@ce-lpbx.com
Les P'tits Babadins de St YviRE
Les p'tits Babadins de TaversRE11 rue des Gratelièvres, 45190 Tavers45mai-2106 02 26 63 27creche.tavers@ce-lpbx.com
Les p'tits Babadins de Meung-sur-LoireREMail des Trois Roses, 45130 Meung-sur-Loire45mars-24creche.msl@ce-lpbx.com
Les p'tits Bababins d'OlivetRERue Jules Marie Simon, 46160 Olivet45sept.-24creche.olivet@ce-lpbx.com
Les p’tits Babadins de Saint-Aubin-sur-ScieRDS35 Rue Neuve, 76550 Saint-Aubin-sur-Scie76sept.-2407.66.91.96.65creche.lmdc@ce-lpbx.com
Les p’tits Babadins de SisteronRDS27 allée Tilleuls, 04200 Sisteron4févr.-2006 74 28 95 10mathilde.moreau@ce-lpbx.com
Les p'tits Babadins de Saint Vincent de PaulRE490 Rue de la Cantere Lot n° 12, 40990 Saint-Vincent-de-Paul40nov.-2207 44 41 76 34 creche.svdp@ce-lpbx.com
Les p’tits Babadins de Saint-André-d’OrnayRE58 rue Auguste Murail, 85000 La Roche-sur-Yon85mars-1907.82.84.71.66creche.saintandre@ce-lpbx.com
Les p’tits Babadins de La RocheRE58 rue Auguste Murail, 85000 La Roche-sur-Yon85janv.-21creche.laroche@ce-lpbx.com
Les p'tits Babadins de MainvillersRDS4 rue Paul Emile Victor, 23800 Mainvilliers28août-2307.62.58.90.32creche.mainvilliers@ce-lpbx.com
Les p’tits Babadins de LuisantRE52 Rue du Val de la Cavée, 28600 Luisant28déc.-1806.64.91.98.96creche.luisant@ce-lpbx.com
Les p'tits Babadins de GellainvilleRE3 Parc de l'Equerre de, 28630 Gellainville28sept.-20creche.gellainville@ce-lpbx.com
Les p'tits Babadins de La Riche15 rue de la Chapelle, 37520 La Riche37sept.-2006.38.41.23.23    creche.lariche@ce-lpbx.com
Les p'tits Babadins de Joué-lès-Tours19 Rue de la Flottière, 37300 Joué-lès-Tours37juin-2206.38.41.23.23   creche.jlt@ce-lpbx.com
Les p'tits papailloux24, place Terra Botanica, 49100 Angers49nov.-15creche.angers@ce-lpbx.com
Les p'tits Babadins de Marssac sur TarnREZac Rieumas, 9 avenue de la Pelatié, 81150 Marssac-sur-Tarn81nov.-2306.56.67.49.65creche.marssac@ce-lpbx.com
Les p'tits Bababins de Villeneuve sur LotRE560 Rue de la Dardenne, 47300 Villeneuve-sur-Lot47mars 2407 44 40 52 60creche.vsl@ce-lpbx.com
Les p'tits Bababins de Puy l'evequeRE46
Les p’tits Babadins de Saint-Quay-PerrosRDS8 rue résidence de Kroas Hent, 22700 Saint-Quay-Perros22janv.-2106.23.98.08.51
24, place Terra Botanica, 49000 ANGERScreche.angers@ce-lpbx.com
Les p'tits Babadins de PavillyLemonnier Vanessa164 boulevard Roger Fosse 76570 Pavilly76mai-2306.98.20.93.16
Les p'tits Babadins de Hégenheim 130 rue des Landes, 68220 Hegenheim68août-18
Les p'tits Babadins de Hégenheim 230 A rue des Landes, 68220 Hegenheim68septembre-1903 67 23 02 58
Les p'tits Babadins de Freneuse 1La Croix du Moulin - 19 rue des Bouderies FRENEUSE (78840)78
Les p'tits Babadins de Freneuse 2La Croix du Moulin - 19 rue des Bouderies FRENEUSE (78840)78
"""

import ast
with open("main.js", "r", encoding="utf-8") as f:
    js_content = f.read()

# Extract crechesData from main.js (naive approach via regex for this specific structure)
match = re.search(r'const\s+crechesData\s*=\s*(\[.*?\]);', js_content, re.DOTALL)
if match:
    # Need to convert JS object syntax to valid JSON/Dict
    data_str = match.group(1)
    data_str = re.sub(r'([\{,]\s*)([a-zA-Z_][a-zA-Z0-9_]*)\s*:', r'\1"\2":', data_str)
    # Fix single quotes to double quotes for JSON parsing
    data_str = data_str.replace("'", '"')
    
    try:
        site_creches = json.loads(data_str)
    except Exception as e:
        print("Could not easily parse JSON from main.js.", e)
        site_creches = None
else:
    print("Could not locate crechesData in main.js")
    site_creches = None


# Basic processing of user data
user_records = []
for line in user_data.split("\n"):
    parts = line.split("\t")
    if len(parts) >= 1:
        name = parts[0].strip()
        if not name: continue
        
        address = parts[2].strip() if len(parts) > 2 else ""
        tel = parts[5].strip() if len(parts) > 5 else ""
        email = parts[6].strip() if len(parts) > 6 else ""
        
        user_records.append({"name": name, "address": address, "tel": tel, "email": email})

if site_creches:
    print(f"Loaded {len(site_creches)} crèches from website.")
    print(f"Found {len(user_records)} crèches in provided list.")
    
    # Let's see which ones exist or have differences
    for ur in user_records:
        uname = ur["name"].lower().replace('’', "'").strip()
        
        # Try finding a match
        match_c = None
        for sc in site_creches:
            sname = sc.get("nom", "").lower().replace('’', "'").strip()
            if uname in sname or sname in uname:
                match_c = sc
                break
                
        if match_c:
            diffs = []
            s_addr = match_c.get("adresse", "").strip()
            # s_tel = match_c.get("tel", "").strip() # tel might not be in JS
            # Note: Many site fields might just be city, we'll check what fields exist
            
            # Since email/tel might not be stored in main.js directly (maybe just HTML),
            # let's just output the matches and check if we are missing any.
            print(f"OK (Found matched name): {ur['name']} <-> {match_c['nom']}")
        else:
            print(f"MISSING or MISMATCHED: {ur['name']}")

