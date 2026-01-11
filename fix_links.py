
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
    
    # Simple replace for the most common exact matches
    # Using specific strings to avoid replacing "/" in other contexts
    
    new_content = content.replace('href="/"', 'href="index.html"')
    
    if new_content != content:
        with open(path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Updated {file}")
        count += 1
    else:
        # print(f"No match in {file}")
        pass

print(f"Total files updated: {count}")
