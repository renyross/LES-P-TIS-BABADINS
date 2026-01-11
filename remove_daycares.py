
import re

file_path = '/Users/renelrosene/Desktop/Les p’tits Babadins/main.js'

# List of normalized names/cities/keywords to identify the daycares to remove
to_remove_keywords = [
    "Saint Agathon",
    "Saint Quay Perros", 
    "Laon",
    "Belleu",
    "Saint Jean de Monts",
    "Aizenay"
]

# Helper function to check if a line match any removal keyword
def should_remove(line):
    # Check lowercase to be safe
    line_lower = line.lower()
    for kw in to_remove_keywords:
        if kw.lower() in line_lower:
            return True
    return False

with open(file_path, 'r', encoding='utf-8') as f:
    lines = f.readlines()

new_lines = []
removed_count = 0

for line in lines:
    # Only filter lines that look like creche data objects (containing name: and link:)
    # This avoids deleting comments or code that might coincidentally contain city names (though unlikely here)
    if 'name:' in line and 'link:' in line:
        if should_remove(line):
            removed_count += 1
            continue # Skip this line
    
    new_lines.append(line)

with open(file_path, 'w', encoding='utf-8') as f:
    f.writelines(new_lines)

print(f"Removed {removed_count} daycares from the list.")
