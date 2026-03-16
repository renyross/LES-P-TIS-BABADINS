import re
import unicodedata

def slugify(value):
    """
    Normalizes string, converts to lowercase, removes non-alpha characters,
    and converts spaces to hyphens.
    """
    value = unicodedata.normalize('NFKD', value).encode('ascii', 'ignore').decode('ascii')
    value = re.sub(r'[^\w\s-]', '', value).lower()
    return re.sub(r'[-\s]+', '-', value).strip('-')

file_path = '/Users/renelrosene/Desktop/index.html/main.js'

with open(file_path, 'r') as f:
    content = f.read()

# Extract the array block
start_marker = 'const crechesData = ['
end_marker = '];'
start_idx = content.find(start_marker)
end_idx = content.find(end_marker, start_idx)

if start_idx == -1 or end_idx == -1:
    print('Could not find crechesData block')
    exit(1)

array_content = content[start_idx:end_idx+len(end_marker)]
pre_content = content[:start_idx]
post_content = content[end_idx+len(end_marker):]

# Process lines
new_lines = []
for line in array_content.splitlines():
    if '{' in line and 'name:' in line:
        match = re.search(r'name:\s*\"([^\"]+)\"', line)
        if match:
            name = match.group(1)
            slug = slugify(name)
            # Prefix creche- if not present? User example was creche-marssac-sur-tarn
            # Usually better to have just the slug and prepend 'creche-' in link or rule.
            # But user wants specific URL structure: creche-[name]
            # So let's make the slug fully descriptive: creche-marssac-sur-tarn
            
            full_slug = f'creche-{slug}' if not slug.startswith('creche-') else slug
            
            # Ensure we don't double 'creche-creche' if name starts with creche
            if slug.startswith('creche') and not slug.startswith('creche-'):
                 # e.g. creches-expansion -> creche-creches-expansion.
                 pass
            
            # Actually, standard practice: name "Marssac sur Tarn" -> slug "marssac-sur-tarn"
            # URL: /creche-marssac-sur-tarn
            # So link is "creche-marssac-sur-tarn"
            
            link_slug = f'creche-{slug}'
            
            # Some names might already include "Creche", duplicates like "creche-creche-..." are ugly but functional.
            # Let's clean it up slightly: if slug starts with 'creche-' or 'les-ptits-babadins-', maybe simplify?
            # User request: `creche-details.html?name=Marssac sur Tarn` -> `creche-marssac-sur-tarn`
            # Wait, `Marssac sur Tarn` -> `marssac-sur-tarn`. The prefix `creche-` is part of the path rewritten in .htaccess?
            # Re-reading plan: RewriteRule ^creche-([a-zA-Z0-9-]+)$ creche-details.html?slug=$1
            # Check: if URL is /creche-marssac-sur-tarn, then $1 is marssac-sur-tarn. 
            # So the LINK should be `creche-marssac-sur-tarn`.
            
            # Update link property
            if 'link:' in line:
                line = re.sub(r'link:\s*\"[^\"]+\"', f'link: \"{link_slug}\"', line)
            
            # Add slug property if not exists
            if 'slug:' not in line:
                # Add slug before link or at end?
                # Format: { name: "...", slug: "...", link: "...", ... }
                # Let's insert slug after name
                line = line.replace(f'name: \"{name}\"', f'name: \"{name}\", slug: \"{slug}\"')
            else:
                 # Update existing slug?
                 line = re.sub(r'slug:\s*\"[^\"]+\"', f'slug: \"{slug}\"', line)

    new_lines.append(line)

new_array_content = '\n'.join(new_lines)

# Write back
with open(file_path, 'w') as f:
    f.write(pre_content + new_array_content + post_content)

print('Successfully updated main.js with slugs')
