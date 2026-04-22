import json
import os

services_file = '/Users/halyl.atageldiyev/Desktop/Dogru_Kanzlei/src/app/data/services.ts'

with open(services_file, 'r', encoding='utf-8') as f:
    content = f.read()

# Define English content and FAQs for remaining services
eng_data = {
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
            {"question": "Do I need a language certificate for family reunification?", "answer": "Generally yes (A1), but there are exceptions for professionals (e.g., Blue Card holders)."}
        ]
    },
    "strafrecht": {
        "contentEN": """Criminal proceedings in Turkey can have serious consequences for persons living in Germany, even if they are not in Turkey at the time. We represent your interests in the Turkish criminal justice system.

Our services:

• Defense in Criminal Proceedings in Turkey
We represent you before Turkish criminal courts and public prosecutors' offices — without you having to travel to Turkey.

• Handling Arrest Warrants (Yakalama Kararı)
If there is an arrest warrant against you in Turkey, we clarify the situation, inspect the files, and work on a solution to enable you to travel safely again.

• Criminal Complaints and Victim Representation
We file criminal complaints in Turkey for you and represent your interests as a victim or joint plaintiff.""",
        "faqEN": [
            {"question": "Can I defend myself from Germany?", "answer": "Yes, in most cases we can represent you via power of attorney without your physical presence being required."},
            {"question": "How do I know if there is an arrest warrant against me in Turkey?", "answer": "We can check the UYAP system and other official registers for you."}
        ]
    },
    "tanima-ve-tenfiz": {
        "contentEN": """German court rulings, especially in family law, are not automatically valid in Turkey. They must be recognized and enforced by a Turkish court.

We handle the entire process:

• Recognition of German Divorce Decrees
We ensure that your German divorce is entered into the Turkish civil register (Nüfus), so you are also considered divorced in Turkey.

• Enforcement of Maintenance and Custody Rulings
If you have a German ruling on maintenance or custody that needs to be enforced in Turkey, we conduct the necessary enforcement proceedings (Tenfiz).""",
        "faqEN": [
            {"question": "Is recognition always necessary?", "answer": "Yes, if you want your civil status to be correct in both countries or if you want to enforce claims in Turkey."},
            {"question": "How long does the process take?", "answer": "Since recent legal changes, many recognitions can be done faster via the registry office, but complex cases still require a court (approx. 4-8 months)."}
        ]
    },
    "mavi-kart": {
        "contentEN": """The Blue Card (Mavi Kart) is an important document for former Turkish citizens who have accepted German citizenship. It grants almost all the rights of a Turkish citizen.

Our support:

• Application and Renewal
We help you apply for the Blue Card at the Turkish consulate or in Turkey.

• Rights and Benefits
We advise you on your rights regarding inheritance, property acquisition, and work in Turkey without needing a work permit.""",
        "faqEN": [
            {"question": "Can I inherit property in Turkey with a Blue Card?", "answer": "Yes, Blue Card holders have the same inheritance rights as Turkish citizens."},
            {"question": "Do I need a residence permit for Turkey?", "answer": "No, the Blue Card allows you to stay in Turkey indefinitely."}
        ]
    },
    "icra-ve-iflas": {
        "contentEN": """Debt collection and enforcement in Turkey require a deep understanding of the local enforcement law (İcra ve İflas Kanunu). We help you collect your claims.

Our areas of expertise:

• International Debt Collection
We collect claims from German companies or individuals against debtors in Turkey.

• Foreclosure and Seizure
We initiate the necessary steps for the seizure of assets, bank accounts, or real estate in Turkey.

• Defense against Unjustified Claims
If you are being wrongly prosecuted in Turkey, we file the necessary objections and lawsuits (Men-i Müdahale, İstihkak).""",
        "faqEN": [
            {"question": "Can I enforce a German judgment in Turkey?", "answer": "Yes, after a successful enforcement lawsuit (Tenfiz) in Turkey, the German judgment can be executed like a Turkish one."},
            {"question": "What assets can be seized?", "answer": "Bank accounts, real estate, vehicles, and company shares in Turkey."}
        ]
    },
    "erbrecht": {
        "contentEN": """Turkish inheritance law is complex, especially when the heirs live abroad. We advise you on all inheritance matters in Turkey.

Our services:

• Obtaining the Certificate of Inheritance (Veraset İlamı)
We obtain the necessary certificate of inheritance from the Turkish court or notary.

• Property Transfer (Intikal)
We handle the transfer of inherited real estate at the Turkish land registry office.

• Partition Lawsuits (Izale-i Suyu)
If the heirs cannot agree on the division of the estate, we conduct the necessary partition lawsuits.""",
        "faqEN": [
            {"question": "Do I have to go to Turkey to accept an inheritance?", "answer": "No, we can handle the entire process via power of attorney."},
            {"question": "What is the compulsory portion (Saklı Pay)?", "answer": "Certain relatives (children, spouse, parents) have a minimum claim to the estate, even if they were excluded in a will."}
        ]
    },
    "sorgerecht": {
        "contentEN": """Custody disputes between Germany and Turkey are particularly sensitive. We represent your interests and the best interests of the child.

Our focus:

• Custody Proceedings in Turkey
Representation in Turkish courts regarding the granting or modification of custody.

• Visitation Rights (Kişisel İlişki)
Establishing and enforcing visitation rights for parents living in Germany.

• International Child Abduction
Legal support in cases involving the Hague Convention on Civil Aspects of International Child Abduction.""",
        "faqEN": [
            {"question": "Which court is responsible for custody?", "answer": "Usually the court at the child's place of habitual residence."},
            {"question": "Can a German custody ruling be enforced in Turkey?", "answer": "Yes, but it requires a recognition and enforcement process (Tanıma ve Tenfiz)."}
        ]
    },
    "immobilienrecht": {
        "contentEN": """Buying and selling real estate in Turkey from Germany requires legal certainty. We accompany you through the entire transaction.

Our services:

• Contract Review and Drafting
Review of preliminary sales contracts and preparation of land registry transactions.

• Due Diligence
Checking the land register for encumbrances, mortgages, or construction permits.

• Property Disputes
Representation in cases of title deed cancellation, neighbor disputes, or rental issues.""",
        "faqEN": [
            {"question": "Can I buy property in Turkey without being there?", "answer": "Yes, via a specialized power of attorney for the land registry office."},
            {"question": "What is 'Tapu'?", "answer": "The Tapu is the official title deed in Turkey, which is issued exclusively by the land registry office."}
        ]
    }
}

for service_id, data in eng_data.items():
    search_str = f'id: "{service_id}"'
    start_idx = content.find(search_str)
    if start_idx == -1:
        continue
    
    # Find the end of this object (next '},' or '}]')
    # Look for the last closing brace of this object
    # A simple way: find the start of the NEXT object or the end of the array
    next_id_idx = content.find('id: "', start_idx + len(search_str))
    if next_id_idx == -1:
        # Last element in the array
        search_range_end = content.find('];', start_idx)
    else:
        search_range_end = next_id_idx
        
    search_range = content[start_idx:search_range_end]
    
    # Find the last '  },' or '  }' in this range
    last_brace_idx = search_range.rfind('  },')
    if last_brace_idx == -1:
        last_brace_idx = search_range.rfind('  }')
        
    if last_brace_idx == -1:
        continue
        
    actual_insertion_point = start_idx + last_brace_idx
    
    # Check if contentEN already exists
    if 'contentEN:' in search_range:
        continue
        
    injection = f'    contentEN: `{data["contentEN"]}`,\n    faqEN: {data["faqEN"]},\n'
    # Simple formatting for faqEN
    injection = injection.replace("'", '"') # JSON style
    
    content = content[:actual_insertion_point] + injection + content[actual_insertion_point:]

with open(services_file, 'w', encoding='utf-8') as f:
    f.write(content)

print("Successfully injected remaining English content into services.ts")
