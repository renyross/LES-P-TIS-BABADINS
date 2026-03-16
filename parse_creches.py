
import json
import re

raw_data = """
Le Jardin Magique Lucciana	A Lucccianella	Albertini Melissa	Lieu dit Mezzana, route de l'aéroport, 20290 Lucciana	20	01/06/2011	aluccianella@orange.fr	06.46.02.59.08																			
Le Jardin Des Petits Explorateurs	Le Jardin Des Petits Explorateurs	Simonin Jean-Louis	ZAC des Cheix, 6 rue Enricoe Fermi, 63540 Romagnat	63	01/09/2012	lejardindespetitsexplorateurs@orange.fr	06 08 94 38 90	Nina Lepelletier IPDE																		
SARL Crèche La Coccinelle	Coccinelle	"Zaraï Eva : 14h gérant 
"	2 rue de la Morellerie, 49124 St Barthelemy d'Anjou	49	01/04/2013	eva.zara@hotmail.fr	06.15.52.90.31	Delphine Ustuner EJE																		
Micro- Crèche La Fayette	Micro- Crèche La Fayette		26 rue de Brissac, 49000 Angers	49	01/03/2016			Delphine Ustuner EJE																		
Le Jardin Des Pralines	Le Jardin Des Pralines	Bereziat Bruno et Sophie	75 rue du 8 mai 1945, 38480 Le Pont du Beauvoisin	38	01/06/2014	sas.jardindespralines@orange.fr	06 11 71 36 94																			
Le Jardin Des Pralines	L'Arbre aux Papillons	Bereziat Sophie	290 chemin de Guiers, 38480 Pont de Beauvoisin	38	01/09/2018																					
Micro-Crèche Bodan	Lola et Cie	Bodan Séverine	ZI la Métairie, allée de la Baratte, 17700 Surgères	17	01/03/2015	surgeres@lespetitsbabadins.com	06.84.51.79.78	Séverine Bodan EJE																		
Micro-Crèche Bodan	Micro-Crèche Arc-En-Ciel	Bodan Séverine	ZI la Métairie, allée de la Baratte, 17700 Surgères	17	01/09/2017			Séverine Bodan EJE																		
Landrieau Crèche	La Cabane des doudous	"Landrieau Olivier : 14h gérant + emploi extérieur 
"	Impasse des Forgerons, 44640 St Jean de Boiseau	44	01/01/2020	olivier.landrieau@bbox.fr	06.60.39.21.07	Léa Prince EJE																		
	Choupie et Bibou		Impasse des Forgerons, 44640 St Jean de Boiseau	44	01/09/2013			Léa Prince EJE																		
Lililou Micro-Creche	Lililou Micro-Creche	"Beliarde Nadège : 14h gérant + emploi extérieur
"	1 bis rue Newton, 44240 La Chapelle sur Erdre	44	01/04/2021	lachapellesurerdre@ce-lpbx.com	06.86.15.62.18																			
"""

sortie_raw_data = """
Ronron et Zébulon	Ronron et Zébulon	Turcaud Aurélie	ZA Tertiaires des Chaunières, 85610 Cugand		01/09/2011	sortie au 31/03/2024																				
Baillargeau Crèche	Le refuge des Galopins	Baillargeau Katell	Pôle du Landreau, rue J.Gutenberg, 85130 La Verrie		01/09/2011	sortie au 31/07/2024																				
Multi Accueil Rovillon	Les p'tits rigolos	Rovillon Sylviane	104, 105 et 106 bd Jean Jaurès, 78800 Houilles		01/01/2012	il y a très longtemps !!																				
Pacory Creches	Le parc des câlinous	Baillargeau Katell	2 Avenue de l'Arborescente Parc Ekho 4, 85500 Les Herbiers		01/08/2012	sortie au 31/07/2024																				
Pacoba Creches	Le nid des Galopins	Baillargeau Katell	ZI LA Buzenière, rue de la Tisonnière		01/08/2012	sortie au 31/07/2024																				
Lds Creche	Les Bébés Du Causse	Da Silva Laurent	Route du Bois Vert, lot des Coteaux de la Garrigue Lot 7, 12510 Olemps		01/09/2013	sortie au 31/12/2023																				
Ronron et Zébulon	Perlette Et Pimpin	Turcaud Aurélie	7 rue René Descartes, 85600 Boufféré		01/01/2014	sortie au 31/303/2024																				
Lds Creche	Les Bébés Du Bouldou	Da Silva Laurent	Les Jardins de la Mauresque, 12510 Druelle		01/08/2014	sortie au 31/12/2023																				
Le Jardin Des Merveilles	Chatouilles	Brosset Vanessa	14 rue André Ampère, 49450 St André de la Marche		01/12/2014																					
Lds Creche	Les Bébés Du Comtal	Da Silva Laurent	Route du Bois Vert, lot des Coteaux de la Garrigue Lot 7, 12510 Olemps		01/08/2015	sortie au 31/12/2023																				
Lds Creche	Les Bébés Du Moulin	Da Silva Laurent	Le Champ du Moulin, 12850 Sainte Radegonde		01/08/2015	sortie au 31/12/2024																				
Le Jardin Des Merveilles	Happy & Cie	Brosset Vanessa	4 square d'Espagne, St Germain sur Moine, 49230 Sèvres sur Moine		01/05/2017																					
Lds Creche	Les Bébés De Laguarigue	Da Silva Laurent	Pôle commercial Comtal Ouest, 12850 Onet-le-Château		01/09/2017	sortie au 31/12/2023																				
Lds Creche	Les Bébés Du Faubourg	Da Silva Laurent	15 avenue Durand de Gros, 12000 Rodez		01/09/2018	sortie au 31/12/2024																				
Pacory Creches	La cabane des Galopins	Baillargeau Katell	La Grde Vachonnière, rue du CT Guilbaud, 85590 Les Epesses		01/09/2019	sortie au 31/07/2024	
"""

def parse_line(line):
    # Using tab as separator, but also checking for potential bad pasting
    parts = line.strip().split('\t')
    # Filter out empty strings which are artifacts of copy-paste
    parts = [p.strip() for p in parts if p.strip()]
    
    if len(parts) < 3: 
        return None

    # Mapping based on observation:
    # 0: Société (often same as name or internal ID)
    # 1: Nom commercial (The name we want)
    # 2: Gérant (Ignored)
    # 3: Address
    # 4: Dept (sometimes)
    # ? : Date d'ouverture
    # ? : Mail
    # ? : Tel
    
    # Let's try to identify by pattern
    obj = {
        "active": True,
        "hours": "7h30 - 18h30" # Default
    }
    
    # Name is likely index 1 (Nom commercial)
    if len(parts) >= 2:
        obj['name'] = parts[1].replace('"', '').strip()
        # Slug generation
        obj['slug'] = obj['name'].lower().replace(' ', '-').replace("'", "").replace("’", "").replace("é", "e").replace("è", "e").replace("à", "a").replace("ç", "c")
        obj['link'] = f"creche-{obj['slug']}"
    
    # Find Address and City/Zip
    for part in parts:
        # Check if part looks like an address with Zip (5 digits)
        zip_match = re.search(r'(\d{5})\s+(.+)', part)
        if zip_match:
            obj['zip'] = zip_match.group(1)
            obj['city'] = zip_match.group(2).strip()
            # The part usually contains the full address "Street, Zip City"
            # We want to extract just the street part
            street_part = part.replace(zip_match.group(0), "").strip().strip(",").strip()
            obj['address'] = street_part
    
    # Find Email
    for part in parts:
        if '@' in part and '.' in part.split('@')[1]:
            obj['email'] = part
            
    # Find Phone
    for part in parts:
        # formatting: XX.XX.XX.XX.XX or XX XX XX XX XX
        if re.search(r'(\d{2}[\.\s]?){4}\d{2}', part):
            obj['phone'] = part

    return obj

new_entries = []
for line in raw_data.strip().split('\n'):
    entry = parse_line(line)
    if entry and 'name' in entry:
        new_entries.append(entry)

removal_names = []
for line in sortie_raw_data.strip().split('\n'):
    parts = line.strip().split('\t')
    parts = [p.strip() for p in parts if p.strip()]
    if len(parts) >= 2:
        removal_names.append(parts[1])

print("NEW ENTRIES JSON:")
print(json.dumps(new_entries, indent=4, ensure_ascii=False))

print("\nREMOVAL NAMES:")
print(removal_names)
