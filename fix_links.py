
import os

target_dir = "."
files = [f for f in os.listdir(target_dir) if f.endswith('.html')]

# We want to replace href="/" with href="index.html"
# But we must be careful not to replace something that shouldn't be replaced.
# The common patterns are:
# <a href="/">
# <a href="/" class="...">
# <a href="/" style="...">

count = 0
for file in files:
    path = os.path.join(target_dir, file)
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    new_content = content
    # Replace root link
    new_content = new_content.replace('href="/"', 'href="index.html"')
    
    # Replace specific page links
    # Using href="page" to capture common usage
    replacements = [
        ('href="creches"', 'href="creches.html"'),
        ('href="pedagogie"', 'href="pedagogie.html"'),
        ('href="entreprises"', 'href="entreprises.html"'),
        ('href="recrutement"', 'href="recrutement.html"'),
        ('href="reseau"', 'href="reseau.html"'),
        ('href="blog"', 'href="blog.html"'),
        ('href="contact"', 'href="contact.html"'),
        ('href="pre-inscription"', 'href="pre-inscription.html"'),
        ('href="mentions-legales"', 'href="mentions-legales.html"'),
        ('href="politique-confidentialite"', 'href="politique-confidentialite.html"'),
        # Handle cases with query params or fragments if strictly matching href="page" might be too loose or tight
        # But based on the code viewed earlier, href="creches" is the pattern.
    ]
    
    for old, new in replacements:
        new_content = new_content.replace(old, new)
    
    if new_content != content:
        with open(path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Updated {file}")
        count += 1

print(f"Total files updated: {count}")
