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
 * @param content The markdown string to parse
 * @param mode 'strict' looks only after an FAQ heading, 'heuristic' looks everywhere
 */
export function extractFaqsFromContent(content: string, mode: 'strict' | 'heuristic' = 'heuristic') {
  const lines = content.split("\n").map(l => l.trim()).filter(l => l.length > 0);
  const faqs: any[] = [];
  
  let inFaqSection = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    // Detection of FAQ section heading
    const isFaqHeading = 
      line.toLowerCase().includes("sıkça sorulan sorular") || 
      line.toLowerCase().includes("häufige fragen") ||
      line.toLowerCase().includes("faq");

    if (isFaqHeading) {
      inFaqSection = true;
      continue;
    }

    // Capture logic
    const shouldExtract = mode === 'heuristic' || (mode === 'strict' && inFaqSection);
    if (!shouldExtract) continue;

    // Check if line looks like a question
    const isQuestion = 
      line.startsWith("###") || 
      line.startsWith("##") || 
      (line.startsWith("**") && line.endsWith("**") && line.length < 200) ||
      (line.endsWith("?") && line.length < 150);

    if (isQuestion) {
      const questionText = line.replace(/^[#*\s]+|[#*\s]+$/g, "");
      
      let answerText = "";
      // Search following lines for the first paragraph longer than 20 chars
      for (let j = i + 1; j < Math.min(i + 4, lines.length); j++) {
        const potentialAnswer = lines[j];
        if (potentialAnswer.startsWith("#")) break;
        
        const cleanAnswer = potentialAnswer.replace(/[*_]/g, "");
        if (cleanAnswer.length > 20) {
          answerText = cleanAnswer;
          i = j; // Advance main loop to avoid re-parsing answer as question
          break;
        }
      }
      
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
