import os
import re

def migrate_to_lazy(directory):
    # Pattern to match <img> tags
    # We want to avoid images already processed or images in the hero (LCP)
    img_re = re.compile(r'<img([^>]+)>', re.IGNORECASE)
    
    for filename in os.listdir(directory):
        if filename.endswith(".html"):
            path = os.path.join(directory, filename)
            with open(path, 'r', encoding='utf-8') as f:
                content = f.read()

            changed = False
            
            def replace_img(match):
                attrs = match.group(1)
                
                # Skip if already lazy or if it's a candidate for LCP (hero images)
                if 'lazy-img' in attrs or 'fetchpriority="high"' in attrs or 'hero' in attrs.lower():
                    return match.group(0)
                
                # Find src
                src_match = re.search(r'src=["\']([^"\']+)["\']', attrs)
                if not src_match:
                    return match.group(0)
                
                src_val = src_match.group(1)
                
                # Skip small icons/logos usually
                if 'logo' in src_val or 'icon' in src_val:
                    return match.group(0)

                # Add lazy-img class and swap src to data-src
                # Use a tiny placeholder or the same image (blur covers it)
                # Here we'll just swap to data-src and add class
                new_attrs = attrs.replace(f'src="{src_val}"', f'src="{src_val}" data-src="{src_val}"')
                if 'class="' in new_attrs:
                    new_attrs = new_attrs.replace('class="', 'class="lazy-img ')
                else:
                    new_attrs += ' class="lazy-img"'
                
                return f'<img{new_attrs}>'

            new_content = img_re.sub(replace_img, content)
            
            if new_content != content:
                print(f"Migrating images to lazy load in {filename}...")
                with open(path, 'w', encoding='utf-8') as f:
                    f.write(new_content)

if __name__ == "__main__":
    migrate_to_lazy(".")
