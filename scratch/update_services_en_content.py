import sys
import os

services_file = '/Users/halyl.atageldiyev/Desktop/Dogru_Kanzlei/src/app/data/services.ts'

with open(services_file, 'r', encoding='utf-8') as f:
    content = f.read()

# Define English content and FAQs for services
eng_data = {
    "familienrecht": {
        "contentEN": """Attorney Hasan Doğru is a member of the Ankara Bar Association and advises exclusively on Turkish law. Our office in Mannheim supports you in all family law matters related to Turkey — competently, discreetly, and entirely without traveling to Turkey.

What we do for you:

• Filing for Divorce in Turkey from Germany
Many Turkish couples in Mannheim want to divorce under Turkish law without traveling to Turkey. We initiate the entire Turkish divorce process from Germany, represent you before Turkish courts via power of attorney, and accompany you until the final judgment.

• Amicable Divorce in Turkey
If both spouses agree to a divorce, an amicable divorce under Turkish law is the fastest and most cost-effective solution. We prepare the divorce settlement agreement, clarify all open points — alimony, custody, property division — and ensure a smooth process.

• Contested Divorce in Turkey
If no agreement is possible, we represent your interests resolutely before Turkish courts. Especially in cross-border divorce proceedings between Germany and Turkey, experienced legal representation is crucial.

• Alimony according to Turkish Law
Turkish alimony law has three forms: Temporary Alimony (Tedbir Nafakası), Child Support (İştirak Nafakası), and Spousal Support (Yoksulluk Nafakası). We advise you on your claims and enforce them before Turkish courts — even if the parent liable for support lives in Germany.""",
        "faqEN": [
            {"question": "Can I get a divorce in Turkey without traveling there?", "answer": "Yes. With a notarized power of attorney, we can handle the entire Turkish divorce process for you from Germany. You do not need to appear personally before Turkish courts."},
            {"question": "How long does a divorce under Turkish law take?", "answer": "An amicable divorce (Anlaşmalı Boşanma) usually takes 2–6 months. A contested divorce (Çekişmeli Boşanma) can take 1–3 years."}
        ]
    },
    "vollmacht-apostille": {
        "contentEN": """In international legal relations between Germany and Turkey, the power of attorney (Vekaletname) is the most important tool. It allows you to have legal transactions carried out in Turkey without having to travel there yourself.

The Dogru Law Firm specializes in the preparation and processing of Turkish powers of attorney from Mannheim.

What we do for you:

• Preparation of Specific Powers of Attorney
A general power of attorney from a German notary is often not accepted by Turkish authorities (especially the land registry office). we prepare precisely formulated Turkish drafts that are specifically tailored to your project.

• Processing at the Turkish Consulate
We advise you on the necessary documents and the process at the Turkish Consulate General in Karlsruhe or other locations.

• Apostille and Translation
For German documents to be valid in Turkey, they usually need an Apostille. We handle the procurement and the subsequent sworn translation into Turkish.""",
        "faqEN": [
            {"question": "Can I issue a power of attorney at a German notary?", "answer": "Yes, but it must be apostilled and translated by a sworn translator. For many land registry transactions, however, a power of attorney from the Turkish consulate is recommended."},
            {"question": "What is an Apostille?", "answer": "An Apostille is an international certification of the authenticity of a document for use abroad. We help you obtain it from the responsible German authorities."}
        ]
    },
    "migrationsrecht": {
        "contentEN": """The migration of professionals and family members between Turkey and Germany requires precise legal planning. As a law firm specializing in Turkish law, we advise you on all aspects of legal entry and residence.

Focus areas:

• EU Blue Card for Turkish Professionals
We support engineers, IT specialists, and other professionals in applying for the EU Blue Card. We check the salary thresholds and the recognition of Turkish degrees (Anabin).

• Family Reunification
We assist you in bringing spouses and children from Turkey. We check the requirements such as language certificates and living space.

• Business Visas and Company Formations
For Turkish entrepreneurs who want to become active in Germany, we advise on the appropriate visa category and the legal requirements for company formation.""",
        "faqEN": [
            {"question": "How long does a Blue Card application take?", "answer": "The processing time varies, but usually takes 1-3 months once all documents are complete."},
            {"question": "Do I need a language certificate for family reunification?", "answer": "Generally yes (A1), but there are exceptions for professionals (e.g., Blue Card holders). We check your individual case."}
        ]
    }
}

import json

for service_id, data in eng_data.items():
    # Find the service block by id
    search_str = f'id: "{service_id}"'
    start_idx = content.find(search_str)
    if start_idx == -1:
        continue
    
    # Find the end of this object (next '},' or '}]')
    end_idx = content.find('  },', start_idx)
    if end_idx == -1:
         end_idx = content.find('  ]', start_idx)
    
    # Check if contentEN already exists in this block
    if 'contentEN:' in content[start_idx:end_idx]:
        continue
        
    # Prepare the injection string
    faq_json = json.dumps(data["faqEN"], ensure_ascii=False, indent=6).replace('"', "'")
    # Fix the indentation of the JSON string to match the file
    faq_lines = faq_json.split('\n')
    formatted_faq = '\n'.join(['    ' + line if i > 0 else line for i, line in enumerate(faq_lines)])
    
    injection = f'    contentEN: `{data["contentEN"]}`,\n    faqEN: {faq_json},\n'
    
    # Inject before the closing brace
    content = content[:end_idx] + injection + content[end_idx:]

with open(services_file, 'w', encoding='utf-8') as f:
    f.write(content)

print("Successfully injected English content into services.ts")
