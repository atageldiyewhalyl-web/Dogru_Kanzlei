import os

file_path = "/Users/halyl.atageldiyev/Desktop/Dogru_Kanzlei/src/app/data/blogPosts.ts"

slug_map = {
    'slugTR: "veraset-ilami-nedir-nasil-alinir",': 'slugEN: "certificate-of-inheritance-turkey-how-to-get",',
    'slugTR: "mavi-kart-turkiye-miras-tasinmaz-haklari",': 'slugEN: "blue-card-turkey-inheritance-property-rights",',
    'slugTR: "turkiye-ceza-davasi-almanya-savunma",': 'slugEN: "criminal-defense-turkey-from-germany",',
    'slugTR: "almanya-turkiye-alacak-tahsili-icra",': 'slugEN: "debt-collection-germany-turkey-enforcement",',
    'slugTR: "almanya-ortak-velayet-turkiye-tenfiz",': 'slugEN: "joint-custody-germany-turkey-enforcement",',
    'slugTR: "almanya-muris-muvazaasi-tapu-iptali",': 'slugEN: "inheritance-fraud-turkey-deed-cancellation",',
    'slugTR: "almanya-bosanma-turkiye-mal-paylasimi",': 'slugEN: "divorce-germany-turkey-property-division",',
    'slugTR: "miras-hukuku-rehberi",': 'slugEN: "inheritance-law-guide-turkey",',
    'slugTR: "uluslararasi-bosanma",': 'slugEN: "international-divorce-guide",',
    'slugTR: "gayrimenkul-haklari",': 'slugEN: "real-estate-rights-turkey",',
    'slugTR: "tanima-tenfiz-rehberi",': 'slugEN: "recognition-enforcement-guide-turkey",',
    'slugTR: "sakli-pay-tenkis-davasi",': 'slugEN: "reserved-portion-reduction-lawsuit-turkey",',
    'slugTR: "izale-i-suyu-paylasim-davasi",': 'slugEN: "partition-lawsuit-turkey-property",',
    'slugTR: "mavi-kart-haklari-rehberi",': 'slugEN: "blue-card-rights-guide-turkey",',
    'slugTR: "vekaletname-rehberi-almanya",': 'slugEN: "power-of-attorney-guide-germany-turkey",',
    'slugTR: "mannheim-bosanma-avukati",': 'slugEN: "divorce-lawyer-mannheim",',
    'slugTR: "mannheim-aile-hukuku-danismanligi",': 'slugEN: "family-law-consultation-mannheim",',
    'slugTR: "mannheim-velayet-avukati",': 'slugEN: "custody-lawyer-mannheim",',
    'slugTR: "turkce-vekaletname-nasil-cikarilir",': 'slugEN: "power-of-attorney-turkish",',
    'slugTR: "mannheim-kira-hukuku",': 'slugEN: "tenant-law-mannheim",',
    'slugTR: "cocukla-turkiyeye-gitmek-velayet",': 'slugEN: "travel-to-turkey-with-child-custody",',
    'slugTR: "turk-hukuku-avukat-ucretleri",': 'slugEN: "cost-of-turkish-law-lawyer",',
    'slugTR: "turk-vasiyetnamesi-almanya",': 'slugEN: "turkish-will-in-germany",',
    'slugTR: "turkiyede-bosanma-suresi-maliyeti",': 'slugEN: "divorce-turkey-duration-cost",',
    'slugTR: "mannheim-turk-avukat-ilk-gorusme",': 'slugEN: "turkish-lawyer-mannheim-initial-consultation",'
}

with open(file_path, 'r', encoding='utf-8') as f:
    lines = f.readlines()

new_lines = []
for line in lines:
    new_lines.append(line)
    stripped = line.strip()
    if stripped in slug_map:
        # Check if next line already has slugEN (avoid duplicates)
        # We'll just check if slugEN is already in the file for this post
        # Actually, let's just use a more robust way
        pass

# Redoing with better logic
content = "".join(lines)
for tr, en in slug_map.items():
    if en not in content: # Simple check to avoid double injection
        content = content.replace(tr, f"{tr}\n    {en}")

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Successfully updated blogPosts.ts with slugEN")
