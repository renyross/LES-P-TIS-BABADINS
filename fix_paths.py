import os
import re

def fix_hero_paths(directory):
    # Pattern to match background-image: url('images/...') or url('./images/...')
    # and replace with url('/images/...')
    
    patterns = [
        (r'url\([\'"]\./images/([^/]+)[\'"]\)', r"url('/images/\1')"),
        (r'url\([\'"]images/([^/]+)[\'"]\)', r"url('/images/\1')"),
        (r'href=["\']images/([^/]+)["\']', r'href="/images/\1"'),
        (r'src=["\']images/([^/]+)["\']', r'src="/images/\1"')
    ]
    
    for filename in os.listdir(directory):
        if filename.endswith(".html"):
            path = os.path.join(directory, filename)
            with open(path, 'r', encoding='utf-8') as f:
                content = f.read()

            new_content = content
            for pattern, subst in patterns:
                new_content = re.sub(pattern, subst, new_content)
            
            if new_content != content:
                print(f"Fixing paths in {filename}...")
                with open(path, 'w', encoding='utf-8') as f:
                    f.write(new_content)

if __name__ == "__main__":
    fix_hero_paths(".")
