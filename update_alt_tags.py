import os
import re
from bs4 import BeautifulSoup

def update_alt_tags(directory):
    # Mapping of common image names to SEO patterns
    activity_images = [
        "pedago_motricite.webp", "blog_alimentation_bebe.webp", "social_art_painting.webp",
        "social_story_time.webp", "social_garden_activity.webp", "social_outdoor_play.webp",
        "social_music_workshop.webp", "blog_motricite_libre.webp", "blog_adaptation_creche.webp",
        "blog_sommeil_bebe.webp", "toddler_playing.webp", "pedagogy_activity.webp"
    ]

    for filename in os.listdir(directory):
        if filename.endswith(".html"):
            path = os.path.join(directory, filename)
            with open(path, 'r', encoding='utf-8') as f:
                html_content = f.read()

            soup = BeautifulSoup(html_content, 'html.parser')
            
            # Identify the city from the page title or breadcrumb
            city = ""
            title_tag = soup.find('title')
            if title_tag:
                title_text = title_tag.get_text()
                if "|" in title_text:
                    city_part = title_text.split('|')[0]
                    # Clean city name (remove "Les P'tits Babadins de ", etc)
                    city = city_part.replace("Les P’tits Babadins de ", "").replace("Les P'tits Babadins de ", "").replace("Micro-crèche à ", "").strip()
                elif " à " in title_text:
                    city = title_text.split(" à ")[-1].split(" - ")[0].strip()

            changed = False
            for img in soup.find_all('img'):
                src = img.get('src', '')
                alt = img.get('alt', '')
                
                # Rule 1: Logo
                if "logo.webp" in src:
                    img['alt'] = "Les P'tits Babadins - Réseau de micro-crèches"
                    changed = True
                    continue

                # Rule 2: Activities
                is_activity = any(act in src for act in activity_images)
                if is_activity:
                    new_alt = "Atelier d'éveil sensoriel pour enfants chez Les P'tits Babadins"
                    if alt != new_alt:
                        img['alt'] = new_alt
                        changed = True
                
                # Rule 3: Locals (Hero images or specific creche images)
                elif "hero" in src or "creche" in src or ("images" in src and not is_activity):
                    if city:
                        new_alt = f"Intérieur sécurisé et aménagé de la micro-crèche Les P'tits Babadins à {city}"
                        if alt != new_alt:
                            img['alt'] = new_alt
                            changed = True

            if changed:
                print(f"Updating ALT tags in {filename} (City: {city})...")
                # Write back with minimal formatting changes
                with open(path, 'w', encoding='utf-8') as f:
                    f.write(str(soup))

if __name__ == "__main__":
    # Ensure BeautifulSoup is available or skip if user doesn't have it (fallback to regex if needed)
    try:
        update_alt_tags(".")
    except Exception as e:
        print(f"Error: {e}. Make sure 'beautifulsoup4' is installed: pip install beautifulsoup4")
