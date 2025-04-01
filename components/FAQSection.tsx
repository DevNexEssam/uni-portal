import { FaQuestionCircle } from 'react-icons/fa';
import { FAQItem } from '../types';

const faqs: FAQItem[] = [
  {
    question: "Is AcademicDash really free?",
    answer: "Yes! Our core features are completely free for students."
  },
  // Add other FAQs...
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center">
          <h2 className="text-4xl font-bold">Frequently Asked Questions</h2>
          <p className="mt-4 text-xl text-gray-600">
            Everything you need to know about AcademicDash.
          </p>
        </div>
        <div className="mt-12 space-y-6">
          {faqs.map((faq, index) => (
            <details 
              key={index} 
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition cursor-pointer"
            >
              <summary className="flex justify-between items-center list-none">
                <h3 className="text-xl font-medium">{faq.question}</h3>
                <FaQuestionCircle className="text-blue-500 text-xl" />
              </summary>
              <p className="mt-4 text-gray-600">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;