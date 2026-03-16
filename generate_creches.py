import re
import urllib.parse

marssac_file = "creche-marssac-sur-tarn.html"
with open(marssac_file, "r", encoding="utf-8") as f:
    template = f.read()

creches = [
    {
        "name": "Les p'tits Babadins de Rennes",
        "link": "creche-les-ptits-babadins-de-rennes",
        "city": "Rennes",
        "address": "2 rue ambroisine Garnier Leray",
        "zip": "35000",
        "phone": "07 52 08 46 12",
        "phone_link": "0752084612",
        "email": "Creche.rennes@ce-lpbx.com"
    },
    {
        "name": "Les p'tits Babadins de Janzé",
        "link": "creche-les-ptits-babadins-de-janze",
        "city": "Janzé",
        "address": "18 bis rue de la Houlette",
        "zip": "35150",
        "phone": "07 52 08 46 12",
        "phone_link": "0752084612",
        "email": "Creche.janze1@ce-lpbx.com"
    },
    {
        "name": "Les p'tits Babadins de Guichen",
        "link": "creche-les-ptits-babadins-de-guichen",
        "city": "Guichen",
        "address": "24 rue Denis Papin",
        "zip": "35580",
        "phone": "07 52 08 46 12",
        "phone_link": "0752084612",
        "email": "Creche.guichen@ce-lpbx.com"
    },
    {
        "name": "Les p'tits Babadins de Noyal-Châtillon-sur-Seiche",
        "link": "creche-les-ptits-babadins-noyal-chatillon-sur-seiche",
        "city": "Noyal-Châtillon-sur-Seiche",
        "address": "30 rue de saint Erblon",
        "zip": "35230",
        "phone": "07 52 08 46 12",
        "phone_link": "0752084612",
        "email": "Creche.noyal@ce-lpbx.com"
    }
]

for c in creches:
    content = template
    # Replace names
    content = content.replace("Les P'tits Babadins de Marssac sur Tarn", c["name"])
    content = content.replace("Les p'tits Babadins de Marssac sur Tarn", c["name"])
    content = content.replace("Les p’tits Babadins de Marssac sur Tarn", c["name"])
    
    # Replace city
    content = content.replace("Marssac sur Tarn", c["city"])
    
    # Replace link
    content = content.replace("creche-marssac-sur-tarn", c["link"])
    
    # Replace ZIP
    content = content.replace("81150", c["zip"])
    
    # Replace Email
    content = content.replace("direction.marssacsurtarn@lespetitsbabadins.com", c["email"])
    
    # Replace addresses
    content = content.replace("9 avenue de la Pelatié", c["address"])
    content = content.replace("1 Avenue d'Albi", c["address"])
    
    # Map query fix
    old_query = "1+Avenue+d'Albi+81150+" + "Marssac sur Tarn".replace(" ", "+")
    # Actually, in the template the query looks like: q=1+Avenue+d'Albi+81150+Marssac sur Tarn
    # Let's just use string replace for the whole src= attribute or query
    content = re.sub(r'q=1\+Avenue\+d\'Albi.*?\"', f'q={urllib.parse.quote_plus(c["address"] + " " + c["zip"] + " " + c["city"])}\"', content)
    
    # Replace phones
    content = content.replace("09 70 75 65 39", c["phone"])
    content = content.replace("0970756539", c["phone_link"])
    
    # Small typo fixing just in case:
    # Marssac sur tarn vs Marssac sur Tarn
    content = re.sub(r'(?i)Marssac sur tarn', c["city"], content)

    # Write to new file
    with open(f"{c['link']}.html", "w", encoding="utf-8") as out:
        out.write(content)
    print(f"Generated {c['link']}.html")
