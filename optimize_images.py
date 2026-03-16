import os
from PIL import Image

def optimize_images(input_dir, output_dir, max_width=1200, quality=85):
    """
    Optimizes images from input_dir and saves them as WebP in output_dir.
    Redimensionne les images si elles dépassent max_width.
    """
    if not os.path.exists(output_dir):
        os.makedirs(output_dir)

    print(f"Démarrage de l'optimisation : {input_dir} -> {output_dir}")

    for filename in os.listdir(input_dir):
        if filename.lower().endswith(('.png', '.jpg', '.jpeg', '.tiff')):
            input_path = os.path.join(input_dir, filename)
            try:
                with Image.open(input_path) as img:
                    # 1. Calcul du ratio pour le redimensionnement
                    w_percent = (max_width / float(img.size[0]))
                    if w_percent < 1: # On ne redimensionne que si l'image est plus large que le max
                        h_size = int((float(img.size[1]) * float(w_percent)))
                        img = img.resize((max_width, h_size), Image.Resampling.LANCZOS)
                    
                    # 2. Préparation du nom de fichier (Conversion WebP)
                    clean_name = os.path.splitext(filename)[0]
                    output_path = os.path.join(output_dir, f"{clean_name}.webp")
                    
                    # 3. Sauvegarde optimisée
                    # Convert to RGB if necessary (e.g. for PNG with transparency being saved to WebP)
                    if img.mode in ("RGBA", "P"):
                        img = img.convert("RGBA")
                    
                    img.save(output_path, "WEBP", quality=quality, optimize=True)
                    print(f"Optimisé : {filename} -> {clean_name}.webp")
            except Exception as e:
                print(f"Erreur lors de l'optimisation de {filename} : {e}")

if __name__ == "__main__":
    # Par défaut, on optimise tout ce qui est dans 'images' et on le remet dans 'images'
    # Mais pour plus de sécurité on peut créer un dossier temporaire ou cibler des fichiers précis.
    # Ici, on suit la logique du plan : prendre dans images et écraser/ajouter WebP.
    optimize_images('images', 'images')
