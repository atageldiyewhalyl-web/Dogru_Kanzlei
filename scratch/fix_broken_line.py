import os

file_path = "/Users/halyl.atageldiyev/Desktop/Dogru_Kanzlei/src/app/data/blogPosts.ts"

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Fix the broken line
content = content.replace(',ReplacementContent:', '    slugTR: "veraset-ilami-nedir-nasil-alinir",\n    slugEN: "certificate-of-inheritance-turkey-how-to-get",')

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Fixed broken line in blogPosts.ts")
