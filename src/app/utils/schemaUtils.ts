/**
 * Standard legal service schema base
 */
export const LEGAL_SERVICE_BASE = {
  "@context": "https://schema.org",
  "@type": ["LegalService", "LocalBusiness"],
  "name": "Doğru Kanzlei",
  "alternateName": "Avukat Hasan Doğru",
  "url": "https://hasandogru.de",
  "logo": "https://www.hasandogru.de/assets/logo-eRLlm_XN.avif",
  "priceRange": "$$",
  "telephone": "+4917661221210",
  "email": "info@hasandogru.de",
  "areaServed": ["DE", "TR"],
  "availableLanguage": ["Turkish", "German", "English"],
};

/**
 * Truncate text to a maximum length while keeping it clean
 */
export function truncate(text: string, maxLength: number = 300): string {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength).trim() + "...";
}

/**
 * Programmatically extract FAQ pairs from a content string
 * Looks for questions in headings (## or ###) and answers in the following paragraphs
 */
export function extractFaqsFromContent(content: string) {
  const lines = content.split("\n").map(l => l.trim()).filter(l => l.length > 0);
  const faqs: { name: string; acceptedAnswer: { "@type": string; text: string } }[] = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    // Explicit FAQ section trigger - skip until we find this if it exists, or just keep extracting
    const isExplicitFaqHeading = 
      line.toLowerCase().includes("sıkça sorulan sorular") || 
      line.toLowerCase().includes("häufige fragen") ||
      line.toLowerCase().includes("faq");

    // Check if line looks like a question (Heading or bold at start)
    const isQuestion = 
      line.startsWith("###") || 
      line.startsWith("##") || 
      (line.startsWith("**") && line.endsWith("**") && line.length < 200) ||
      (line.endsWith("?") && line.length < 150);

    if (isQuestion && !isExplicitFaqHeading) {
      const questionText = line.replace(/^[#*\s]+|[#*\s]+$/g, "");
      
      // Look for the answer in the next few lines (skip empty lines)
      let answerText = "";
      for (let j = i + 1; j < Math.min(i + 4, lines.length); j++) {
        const potentialAnswer = lines[j];
        if (potentialAnswer.startsWith("#")) break; // Found next heading
        
        answerText = potentialAnswer.replace(/[*_]/g, "");
        if (answerText.length > 20) {
          i = j; // Advance main loop
          break;
        }
      }
      
      // If it's a valid question/answer pair
      if (questionText.length > 5 && answerText.length > 10) {
        faqs.push({
          "@type": "Question",
          "name": questionText,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": truncate(answerText)
          }
        });
      }
    }
  }

  return faqs;
}
