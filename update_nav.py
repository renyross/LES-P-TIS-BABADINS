import glob
import re
import os

# Define the target directory (current directory)
target_dir = "/Users/renelrosene/Desktop/index.html"

# Define the new navigation list items with "Nous découvrir" first
new_nav_content = """<ul class="nav-links">
            <li><a href="reseau.html">Nous découvrir</a></li>
            <li><a href="creches.html">Nos Crèches</a></li>
            <li><a href="pedagogie.html">Notre pédagogie</a></li>
            <li><a href="entreprises.html">Vous êtes...</a></li>
            <li><a href="recrutement.html">Recrutement</a></li>
            <li><a href="blog.html">Blog</a></li>
            <li><a href="contact.html" class="btn btn-primary"
                    style="padding: 0.4rem 1.2rem; color: white;">Contactez‑nous</a></li>
        </ul>"""

# Regex to capture the nav-links ul block
# It matches <ul class="nav-links"> ... </ul> non-greedily
nav_regex = re.compile(r'<ul class="nav-links">.*?</ul>', re.DOTALL)

updated_count = 0
files = glob.glob(os.path.join(target_dir, "*.html"))

print(f"Found {len(files)} HTML files.")

for file_path in files:
    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()
    
    # Check if the file contains the nav-links block
    if '<ul class="nav-links">' in content:
        # Perform substitute
        new_content, count = nav_regex.subn(new_nav_content, content)
        
        if count > 0:
            # Check if content actually changed to avoid touching files unnecessarily
            if new_content != content:
                with open(file_path, "w", encoding="utf-8") as f:
                    f.write(new_content)
                print(f"Updated: {os.path.basename(file_path)}")
                updated_count += 1
            else:
                print(f"No valid change needed for: {os.path.basename(file_path)}")
        else:
             print(f"Regex match failed for: {os.path.basename(file_path)}")
    else:
        print(f"Skipped (no nav): {os.path.basename(file_path)}")

print(f"Total files updated: {updated_count}")
