/* eslint-disable react/no-unescaped-entities */
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    quote: "AcademicDash cut my study time in half while improving my grades. The smart scheduling is a game-changer!",
    name: "Emily R.",
    role: "Computer Science Major",
    rating: 5
  },
  // Add other testimonials...
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center">
          <h2 className="text-4xl font-bold">What Students Are Saying</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of students who have transformed their academic experience.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="flex text-yellow-400 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              <p className="text-lg italic text-gray-700">"{testimonial.quote}"</p>
              <div className="mt-6">
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;