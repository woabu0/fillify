"use client";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Is Fillify really free to use?",
      answer: "Yes, absolutely! Fillify is 100% free forever. There are no hidden fees, no subscriptions, and no credit card required. All features are available to everyone at no cost.",
    },
    {
      question: "Do I need to create an account?",
      answer: "No, you don't need to sign up or create an account. Simply upload your PDF, make your edits, and download. It's that simple!",
    },
    {
      question: "Are my files secure and private?",
      answer: "Your privacy is our top priority. We process your files securely and never store them on our servers. Once processing is complete, your files are immediately deleted from our system.",
    },
    {
      question: "What file formats do you support?",
      answer: "We support all standard PDF formats. You can upload any PDF file, and we'll process it while maintaining the original quality and formatting.",
    },
    {
      question: "How long does it take to process a PDF?",
      answer: "Processing is typically instant! Most PDFs are processed within seconds, depending on file size. Our optimized engine ensures quick conversions without compromising quality.",
    },
    {
      question: "Can I use Fillify on mobile devices?",
      answer: "Yes! Fillify is fully responsive and works on all devices including smartphones and tablets. Access your PDF tools from anywhere, anytime.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-3 sm:mb-4 text-white px-2">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto px-2">
            Everything you need to know about Fillify
          </p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-4 sm:px-6 py-4 sm:py-5 flex items-center justify-between text-left group"
              >
                <h3 className="text-base sm:text-lg font-semibold text-white pr-4 group-hover:text-cyan-400 transition-colors">
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`w-5 h-5 sm:w-6 sm:h-6 text-gray-400 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180 text-cyan-400" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-4 sm:px-6 pb-4 sm:pb-5">
                  <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

