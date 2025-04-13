import os
from datetime import date

# === CONFIGURATION ===
base_url = "https://https-perks.github.io"
project_root = r"C:\Users\Ryan\Documents\Gardiner Redesign"
output_path = os.path.join(project_root, "sitemap.xml")

today = date.today().isoformat()

# === DISCOVER HTML FILES ===
html_paths = []
for root, _, files in os.walk(project_root):
    for file in files:
        if file.endswith(".html"):
            full_path = os.path.join(root, file)
            rel_path = os.path.relpath(full_path, project_root).replace("\\", "/")
            html_paths.append(rel_path)

# === BUILD XML ===
lines = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'
]

for path in sorted(html_paths):
    url = f"{base_url}/{path}"
    lines.append("  <url>")
    lines.append(f"    <loc>{url}</loc>")
    lines.append(f"    <lastmod>{today}</lastmod>")
    lines.append("    <priority>0.80</priority>")
    lines.append("  </url>")

lines.append("</urlset>")

# === WRITE TO FILE ===
with open(output_path, "w", encoding="utf-8") as f:
    f.write("\n".join(lines))

print(f"Sitemap created with {len(html_paths)} pages at {output_path}")
