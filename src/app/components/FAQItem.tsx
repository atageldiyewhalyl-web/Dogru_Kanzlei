import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "motion/react";

interface FAQItemProps {
  question: string;
  answer: string;
}

export function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-[#1C3829]/10 bg-white hover:border-[#8B6E2A]/30 transition-colors overflow-hidden">
      <button
        type="button"
        aria-expanded={isOpen}
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 text-left flex items-center justify-between group"
      >
        <span className="font-serif text-lg text-[#1C3829] group-hover:text-[#8B6E2A] transition-colors">
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-[#8B6E2A]"
        >
          <ChevronDown size={20} />
        </motion.div>
      </button>
      {/* Always rendered so the answer is in the prerendered HTML; collapsed via CSS grid (no transition,
          so visibility never depends on an animation running). */}
      <div className="grid" style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }} aria-hidden={!isOpen}>
        <div className="overflow-hidden">
          <div className="px-6 pb-6 font-sans text-[15px] text-[#6a6a6a] leading-relaxed border-t border-[#1C3829]/5 pt-4">
            {answer}
          </div>
        </div>
      </div>
    </div>
  );
}
