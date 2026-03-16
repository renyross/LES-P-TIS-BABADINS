from PIL import Image
import os

images = [
    "images/hero_recrutement_premium.png",
    "images/hero_nursery.png",
    "images/hero_creche_premium.png",
    "images/pedagogy_activity.png"
]

for img_path in images:
    if os.path.exists(img_path):
        try:
            img = Image.open(img_path)
            webp_path = img_path.replace(".png", ".webp")
            img.save(webp_path, "WEBP", quality=80)
            print(f"Converted {img_path} to {webp_path}")
        except Exception as e:
            print(f"Error converting {img_path}: {e}")
    else:
        print(f"File not found: {img_path}")
