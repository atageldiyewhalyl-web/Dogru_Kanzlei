
import re
import os

services_file = '/Users/halyl.atageldiyev/Desktop/Dogru_Kanzlei/src/app/data/services.ts'

with open(services_file, 'r', encoding='utf-8') as f:
    content = f.read()

# Define English translations for each service
translations = {
    "familienrecht": {
        "titleEN": "Family Law & Divorce",
        "seoTitleEN": "Turkish Divorce Lawyer Mannheim | Family Law | Doğru Kanzlei",
        "seoDescriptionEN": "Divorce under Turkish law from Mannheim — without traveling to Turkey. Attorney Hasan Doğru advises Turkish families in Mannheim on family law, divorce, and custody.",
        "descriptionEN": "Turkish families in Mannheim and the region often face a unique challenge during divorce: Two legal systems, two countries, one family. We bridge that gap.",
        "detailEN": "Turkish Law Only · Member of Ankara Bar · No Travel Required · Bilingual Support · Personal Consultation",
        "expertiseTitleEN": "Why Choose Doğru Kanzlei for Turkish Family Law?",
    },
    "vollmacht-apostille": {
        "titleEN": "Power of Attorney & Apostille",
        "seoTitleEN": "Turkish Power of Attorney Mannheim | Apostille Turkey | Doğru Kanzlei",
        "seoDescriptionEN": "Power of attorney for Turkey from Mannheim — correct, apostilled, ready for use. Attorney Hasan Doğru handles all POA and apostille procedures for Turkish authorities.",
        "descriptionEN": "Legally secure powers of attorney and apostilled documents for authorities and courts in Turkey — fast, reliable, and without unnecessary travel.",
        "detailEN": "Notarization · Authentication · Apostille · Consular Services · Translation · Legal Advice",
        "expertiseTitleEN": "Expertise in Turkish Powers of Attorney",
    },
    "migrationsrecht": {
        "titleEN": "Immigration Law",
        "seoTitleEN": "Turkish Immigration Law Mannheim | Blue Card Turkey | Doğru Kanzlei",
        "seoDescriptionEN": "Residency permits, Blue Card, and remigration to Turkey — expert legal guidance from Mannheim. Attorney Hasan Doğru advises on Turkish immigration law.",
        "descriptionEN": "Planning a move to Turkey or have questions about your Blue Card? Turkish immigration law is complex — we provide clear guidance for your transition.",
        "detailEN": "Blue Card & Status · Residency Permits · Remigration · Citizenship",
        "expertiseTitleEN": "Your Partner for Turkish Immigration Law",
    },
    "strafrecht": {
        "titleEN": "Criminal Law",
        "seoTitleEN": "Criminal Law Turkey Mannheim | Summons & Warrants | Doğru Kanzlei",
        "seoDescriptionEN": "Summons, arrest warrant, or Interpol notice from Turkey? Attorney Hasan Doğru represents clients in Mannheim in Turkish criminal proceedings — without travel.",
        "descriptionEN": "Expert criminal defense and legal advice in Turkish proceedings — directly from Mannheim. We protect your rights across borders.",
        "detailEN": "Criminal Defense · Interpol / Red Notice · Extradition · Legal Protection",
        "expertiseTitleEN": "Effective Defense in Turkish Criminal Law",
    },
    "tanima-ve-tenfiz": {
        "titleEN": "Recognition & Enforcement",
        "seoTitleEN": "Recognition of German Judgments in Turkey | Tanıma Tenfiz | Doğru Kanzlei",
        "seoDescriptionEN": "Recognize your German divorce or court judgment in Turkey. Attorney Hasan Doğru handles the entire Tanıma Tenfiz process from Mannheim — without travel.",
        "descriptionEN": "Validating German court judgments (like divorce) in Turkey is essential for legal status. We handle the entire process for you.",
        "detailEN": "Divorce Recognition · Judgment Enforcement · Civil Status Update · No Travel Required",
        "expertiseTitleEN": "Specialist in Recognition and Enforcement (Tanıma Tenfiz)",
    },
    "mavi-kart": {
        "titleEN": "Blue Card & Status",
        "seoTitleEN": "Turkish Blue Card Rights | Mavi Kart Lawyer Mannheim | Doğru Kanzlei",
        "seoDescriptionEN": "Lost your Turkish citizenship? The Blue Card (Mavi Kart) preserves your rights in Turkey. Attorney Hasan Doğru advises on application and legal benefits.",
        "descriptionEN": "The Blue Card provides former Turkish citizens with essential rights in Turkey. We help you secure and exercise these rights effectively.",
        "detailEN": "Mavi Kart Application · Inheritance Rights · Real Estate · Legal Status",
        "expertiseTitleEN": "Your Expert for Blue Card (Mavi Kart) Rights",
    },
    "icra-ve-iflas": {
        "titleEN": "Debt Collection & Enforcement",
        "seoTitleEN": "Debt Recovery Turkey | Enforcement Mannheim | Doğru Kanzlei",
        "seoDescriptionEN": "Enforce claims and recover debts in Turkey from Mannheim. Attorney Hasan Doğru handles İcra proceedings and judgment enforcement without your travel.",
        "descriptionEN": "Effective enforcement of your claims and court judgments in Turkey — fully from Germany, without personal presence on site.",
        "detailEN": "Debt Recovery · Enforcement of Foreign Judgments · Attachment · Insolvency",
        "expertiseTitleEN": "Results-Driven Debt Collection in Turkey",
    },
    "erbrecht": {
        "titleEN": "Inheritance Law",
        "seoTitleEN": "Turkish Inheritance Law Mannheim | Probate Turkey | Doğru Kanzlei",
        "seoDescriptionEN": "Inherit property or assets in Turkey from Mannheim. Attorney Hasan Doğru handles Veraset İlamı, title deeds, and taxes — without you traveling.",
        "descriptionEN": "Managing an inheritance in Turkey from abroad requires specialized knowledge of Turkish probate and tax laws. We handle it all for you.",
        "detailEN": "Certificate of Inheritance · Title Deed Transfer · Estate Tax · Litigation",
        "expertiseTitleEN": "Expert Guidance in Turkish Inheritance Law",
    },
    "sorgerecht": {
        "titleEN": "Child Custody",
        "seoTitleEN": "Child Custody Turkey Mannheim | International Custody | Doğru Kanzlei",
        "seoDescriptionEN": "International custody disputes between Germany and Turkey? Attorney Hasan Doğru provides expert representation for parenting rights and Hague Convention cases.",
        "descriptionEN": "Expert legal support for custody cases between Germany and Turkey, parenting rights, and international child abduction (Hague Convention).",
        "detailEN": "Custody Lawsuits · Recognition & Enforcement · Hague Convention",
        "expertiseTitleEN": "Protecting Children's Rights Across Borders",
    },
    "immobilienrecht": {
        "titleEN": "Real Estate Law",
        "seoTitleEN": "Real Estate Law Turkey Mannheim | Property Lawyer | Doğru Kanzlei",
        "seoDescriptionEN": "Buy, sell, or inherit property in Turkey — legally secure from Mannheim. Attorney Hasan Doğru advises on Tapu, land registry, and Turkish property law.",
        "descriptionEN": "Expert legal support for property owners in Turkey, those inheriting real estate, or planning a purchase — from land registry to rental agreements.",
        "detailEN": "Title Deed Cancellation · Rental Agreements · Right of First Refusal",
        "expertiseTitleEN": "Your Partner for Turkish Real Estate Transactions",
    }
}

def update_service(service_block):
    # Find the id
    id_match = re.search(r'id:\s*"(.*?)"', service_block)
    if not id_match:
        return service_block
    
    service_id = id_match.group(1)
    if service_id not in translations:
        return service_block
    
    trans = translations[service_id]
    
    # Check if titleEN already exists
    if f'titleEN: "{trans["titleEN"]}"' in service_block:
        return service_block
    
    # Insert fields before the closing brace of the main object (careful with nested arrays)
    # We'll insert them after detailDE or before content
    
    insertion = ""
    for key, value in trans.items():
        if f'{key}:' not in service_block:
            insertion += f'    {key}: "{value}",\n'
    
    if not insertion:
        return service_block
        
    # Find a good place to insert (e.g., after detailDE)
    if "detailDE:" in service_block:
        service_block = re.sub(r'(detailDE: ".*?",\n)', r'\1' + insertion, service_block)
    elif "detail:" in service_block:
        service_block = re.sub(r'(detail: ".*?",\n)', r'\1' + insertion, service_block)
        
    return service_block

# This is tricky because service objects are multi-line and nested.
# We'll use a regex to find each service object starting with { and ending with }, at the first level of the array.

# A simple way is to split by "  {" and join back.
parts = content.split("\n  {\n")
new_parts = []
new_parts.append(parts[0]) # Everything before the first service

for part in parts[1:]:
    # Each part is a service block until the next "  {" or the end of the array
    # But wait, splitting by "  {" might be too simple if there are nested objects.
    # However, in this file, services are top-level objects in the array.
    
    # Find the end of the service object
    # It usually ends with "  },"
    
    # Let's try to process it as a whole block
    new_part = update_service("  {\n" + part)
    new_parts.append(new_part[4:]) # Remove the added "  {\n"

new_content = "\n  {\n".join(new_parts)

with open(services_file, 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Updated services.ts with English translations.")
