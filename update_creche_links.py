
import re

file_path = '/Users/renelrosene/Desktop/Les p’tits Babadins/main.js'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Pattern to match: { name: "NAME", link: "LINK", ... }
# We want to replace the link part.
# Regex explanation:
# link:\s*["'][^"']+["'] search for link property
# We need to capture the name first to construct the link.

def replace_link(match):
    # This function takes the entire match of a creche object line
    full_match = match.group(0)
    
    # Extract name
    name_match = re.search(r'name:\s*["\']([^"\']+)["\']', full_match)
    if not name_match:
        return full_match # Should not happen if regex is good
    
    name = name_match.group(1)
    
    # Construct new link
    # We escape quotes just in case, though name shouldn't have quotes usually
    new_link = f'creche-details.html?name={name}'
    
    # Replace the existing link
    # This regex looks for link: "..." or link: '...'
    new_full_match = re.sub(r'link:\s*["\'][^"\']+["\']', f'link: "{new_link}"', full_match)
    
    return new_full_match

# Regex to find each object in the array: { ... }
# We assume the layout in the file is generally one object per line or consistently formatted as seen in read_file
# The previous read showed: { name: "...", link: "...", ... },
# We'll use a regex that matches the start of the object and finds the link property.

# Flexible regex: look for { followed by name property, then capture until }, ensuring we replace link inside.
# But simpler: Just find lines containing `name:` and `link:` inside the `crechesData` array.

lines = content.split('\n')
new_lines = []
in_creches_data = False
bracket_count = 0

for line in lines:
    if 'const crechesData = [' in line:
        in_creches_data = True
    
    if in_creches_data:
        # Check if line has a link property to replace
        if 'link:' in line and 'name:' in line:
            # Extract name
            name_match = re.search(r'name:\s*["\']([^"\']+)["\']', line)
            if name_match:
                name = name_match.group(1)
                new_link = f"creche-details.html?name={name}"
                # Replace link val
                line = re.sub(r'link:\s*["\'][^"\']+["\']', f'link: "{new_link}"', line)
    
    if '];' in line and in_creches_data:
        in_creches_data = False # End of array roughly (assuming formatted) but let's be careful
        # Actually checking indentation or just strict line processing is safer given the file view.
        # The file view showed the array closing with ]; at line 94.
    
    new_lines.append(line)

new_content = '\n'.join(new_lines)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(new_content)

print(f"Updated {len(lines)} lines.")
