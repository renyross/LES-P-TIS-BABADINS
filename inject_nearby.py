import os
import re

def inject_nearby_widget(directory):
    widget_html = """
    <!-- Proximity Widget (SEO Internal Linking) -->
    <section class="section-padding" style="background: #f8f9fa; border-top: 1px solid #eee;">
        <div class="container">
            <div id="nearby-creches-container">
                <!-- Injected via main.js -->
            </div>
        </div>
    </section>
    """

    # Matches <footer> or <footer ...>
    footer_re = re.compile(r'<footer[^>]*>', re.IGNORECASE)

    for filename in os.listdir(directory):
        if filename.startswith("creche-") and filename.endswith(".html") and filename != "creche-details.html":
            path = os.path.join(directory, filename)
            with open(path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            if "nearby-creches-container" in content:
                continue
            
            match = footer_re.search(content)
            if match:
                print(f"Injecting into {filename}...")
                footer_tag = match.group(0)
                new_content = content.replace(footer_tag, widget_html + "\n    " + footer_tag)
                with open(path, 'w', encoding='utf-8') as f:
                    f.write(new_content)
            else:
                # Fallback to body close if no footer found
                if "</body>" in content:
                    print(f"Fallback injecting into {filename} before </body>...")
                    new_content = content.replace("</body>", widget_html + "\n</body>")
                    with open(path, 'w', encoding='utf-8') as f:
                        f.write(new_content)

if __name__ == "__main__":
    inject_nearby_widget(".")
