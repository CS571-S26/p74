import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import Header from "../ui/Header";

const faqs = [
  {
    question: "How do I schedule an appointment at the eye clinic?",
    answer:
      "Scheduling an appointment in advance helps ensure a smooth and efficient visit. You can book an appointment directly on our website or contact us at 0913 963 003.",
  },
  {
    question: "How long does a typical examination take?",
    answer:
      "For your convenience in planning transportation and schedules, a typical examination takes an average of 1-2 hours depending on the medical condition.",
  },
  {
    question: "How early should I arrive at the clinic?",
    answer:
      "You can arrive 5-10 minutes early to rest before having your blood pressure measured and beginning the examination.",
  },
  {
    question: "Does the clinic offer any promotions for patients?",
    answer:
      "Treatment costs at Dr. Trang have been carefully considered to maintain effective clinic operations. While we currently do not offer promotions, we always ensure fair and reasonable pricing.",
  },
  {
    question: "Why are regular follow-ups needed and how often?",
    answer:
      'Following the principle of "prevention is better than cure," some conditions show no symptoms until they become severe. Depending on the medical condition, the doctor will schedule appropriate follow-ups, typically every 3-6 months.',
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-400">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-5 text-left cursor-pointer"
      >
        <span className="text-lg font-semibold text-gray-900 pr-4">
          {question}
        </span>
        <span className="flex-shrink-0 w-8 h-8 rounded-full border border-gray-800 flex items-center justify-center">
          {isOpen ? (
            <Minus className="w-4 h-4 text-gray-800" />
          ) : (
            <Plus className="w-4 h-4 text-gray-800" />
          )}
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96 pb-5" : "max-h-0"}`}
      >
        <p className="text-gray-600 leading-relaxed text-md">{answer}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <section className="relative bg-white py-20 lg:py-28">
      <div className="max-w-4xl mx-auto px-10">
        {/* Header */}
        <Header
          subtitle="Frequently Asked Questions"
          titleFirst="Medical Consultation"
					description="For a smoother examination and treatment process, we recommend
            scheduling an appointment in advance."
        />

        {/* FAQ items */}
        <div>
          {faqs.map((faq, idx) => (
            <FAQItem key={idx} question={faq.question} answer={faq.answer} />
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="#"
            className="inline-block border border-brand text-brand font-semibold text-base px-8 py-3.5 rounded-full hover:bg-brand hover:text-white transition-all duration-200"
          >
            View All
          </a>
        </div>
      </div>
    </section>
  );
}
