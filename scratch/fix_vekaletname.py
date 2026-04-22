import os

file_path = "/Users/halyl.atageldiyev/Desktop/Dogru_Kanzlei/src/app/data/blogPosts.ts"

slug_map = {
    'slugTR: "almanya-da-vekaletname-cikarma-rehberi",': 'slugEN: "power-of-attorney-guide-germany-turkey",'
}

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

for tr, en in slug_map.items():
    if en not in content:
        content = content.replace(tr, f"{tr}\n    {en}")

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Fixed vekaletname slug")
