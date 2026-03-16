
import os
import re

template_path = "/Users/renelrosene/Desktop/Les p’tits Babadins/index.html/creche-marssac-sur-tarn.html"
with open(template_path, "r") as f:
    template_content = f.read()

new_creches = [
    { "name": "Les p'tits Babadins de Janzé 2", "slug": "les-ptits-babadins-de-janze-2", "city": "Janzé", "address": "184 rue de la Houlette", "zip": "35150", "phone": "07.52.08.46.12", "email": "benedicte.clediere@ce-lpbx.com", "hours": "7h30 - 19h" },
    { "name": "Les p'tits Babadins de Rennes ZI SUD EST", "slug": "les-ptits-babadins-de-rennes-zi-sud-est", "city": "Rennes", "address": "2 rue Ambroisine Garnier Leray", "zip": "35000", "phone": "", "email": "", "hours": "7h30 - 19h" },
    { "name": "La Ronde de Carnelle", "slug": "la-ronde-de-carnelle", "city": "Saint-Martin-du-Tertre", "address": "Halte Garderie Val d'Oise", "zip": "95270", "phone": "", "email": "laure.bouniol@ce-lpbx.com", "hours": "7h - 19h" },
    { "name": "Les P'tits Babadins de St Agathon", "slug": "les-ptits-babadins-de-st-agathon", "city": "Saint-Agathon", "address": "Chemin des écoliers", "zip": "22200", "phone": "07 44 44 31 84", "email": "", "hours": "7h30 - 18h30" },
    { "name": "Les P'tits Pirates", "slug": "les-ptits-pirates", "city": "Lamballe", "address": "74 Bis Rue de la Déhanne Maroué", "zip": "22400", "phone": "06 02 71 58 96", "email": "creche.lamballe@ce-lpbx.com", "hours": "7h30 - 18h30" },
    { "name": "Les P'tits Babadins de St Yvi", "slug": "les-ptits-babadins-de-st-yvi", "city": "Saint-Yvi", "address": "Localisation en cours", "zip": "29140", "phone": "", "email": "", "hours": "7h30 - 18h30" },
    { "name": "Les p'tits Bababins de Puy l'évêque", "slug": "les-ptits-bababins-de-puy-leveque", "city": "Puy-l'Évêque", "address": "Localisation en cours", "zip": "46700", "phone": "", "email": "", "hours": "7h30 - 18h30" },
    { "name": "Aizenay", "slug": "aizenay", "city": "Aizenay", "address": "Localisation en cours", "zip": "85190", "phone": "", "email": "", "hours": "7h30 - 18h30" }
]

def create_page(creche):
    content = template_content
    # Simple replacements
    content = content.replace("Marssac sur Tarn | Micro-crèche à Marssac sur Tarn", f"{creche['city']} | Micro-crèche à {creche['city']}")
    content = content.replace("Les P'tits Babadins de Marssac sur Tarn", creche['name'])
    content = content.replace("9 avenue de la Pelatié", creche['address'])
    content = content.replace("81150", creche['zip'])
    content = content.replace("Marssac sur Tarn", creche['city'])
    content = content.replace("09 70 75 65 39", creche['phone'] or "00 00 00 00 00")
    content = content.replace("tel:0970756539", f"tel:{creche['phone'].replace('.', '').replace(' ', '')}" if creche['phone'] else "#")
    content = content.replace("07h30 - 19h00", creche['hours'])
    content = content.replace("creche-marssac-sur-tarn", f"creche-{creche['slug']}")
    content = content.replace("direction.marssacsurtarn@lespetitsbabadins.com", creche['email'] or "contact@lespetitsbabadins.com")
    
    # Update breadcrumb specifically if color based replacement hit it
    content = content.replace(">Marssac sur Tarn</span>", f">{creche['city']}</span>")
    
    output_file = f"/Users/renelrosene/Desktop/Les p’tits Babadins/index.html/creche-{creche['slug']}.html"
    with open(output_file, "w") as f:
        f.write(content)
    print(f"Created {output_file}")

for c in new_creches:
    create_page(c)
