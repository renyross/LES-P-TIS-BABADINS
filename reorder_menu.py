
import os
import re

target_dir = "."
files = [
    "creches.html",
    "blog.html",
    "entreprises.html",
    "reseau.html",
    "pedagogie.html",
    "contact.html",
    "recrutement.html"
]

# The new order of list items
new_list_items = """
            <li><a href="creches">Nos Crèches</a></li>
            <li><a href="pedagogie">Notre pédagogie</a></li>
            <li><a href="entreprises">Vous êtes...</a></li>
            <li><a href="recrutement">Recrutement</a></li>
            <li><a href="reseau">Nous découvrir</a></li>
            <li><a href="blog">Blog</a></li>
            <li><a href="contact" class="btn btn-primary"
                    style="padding: 0.4rem 1.2rem; color: white;">Contactez‑nous</a></li>
"""

# Regex to find the ul block and capture indentation
# We assume the class is nav-links and it contains the expected items
pattern = re.compile(r'(<ul class="nav-links">\s*)(<li><a href="reseau">Nous découvrir</a></li>\s*<li><a href="creches">Nos Crèches</a></li>\s*<li><a href="pedagogie">Notre pédagogie</a></li>\s*<li><a href="entreprises">Vous êtes...</a></li>\s*<li><a href="recrutement">Recrutement</a></li>\s*<li><a href="blog">Blog</a></li>\s*<li><a href="contact" class="btn btn-primary"[^>]*>\s*Contactez‑nous</a></li>)(\s*</ul>)', re.DOTALL)

count = 0
for file in files:
    path = os.path.join(target_dir, file)
    if not os.path.exists(path):
        print(f"File not found: {file}")
        continue
        
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Check if we find the pattern
    match = pattern.search(content)
    if match:
        # We construct the replacement
        # match.group(1) is the opening ul with trailing whitespace
        # match.group(3) is the closing ul with leading whitespace
        
        # We need to adapt the new_list_items indentation to match the file's style if possible, 
        # or just use the hardcoded one which seems to match the 12-space indentation seen in reseau.html
        
        # Let's just use the hardcoded new_list_items for simplicity, ensuring it looks okay.
        # We strip the leading newline from new_list_items to avoid double newline
        replacement_items = new_list_items.strip('\n')
        
        new_content = content.replace(match.group(2), replacement_items)
        
        with open(path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Updated {file}")
        count += 1
    else:
        print(f"Skipped {file} (Pattern not found)")

print(f"Total files updated: {count}")
