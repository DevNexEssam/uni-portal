import { FaCheckCircle } from 'react-icons/fa';
import { PricingPlan } from '../types';

const pricingPlans: PricingPlan[] = [
  {
    name: "Free Plan",
    price: "$0",
    description: "Perfect for getting started",
    features: [
      "Assignment tracking",
      "Basic study planner",
      "Grade tracking",
      "Up to 3 course collaborations"
    ],
    buttonText: "Get Started",
    buttonVariant: "secondary"
  },
  // Add premium plan...
];

const PricingSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center">
          <h2 className="text-4xl font-bold">Simple, Transparent Pricing</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Free for students. Premium features for those who want extra power.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div 
              key={index} 
              className={`border rounded-xl p-8 hover:shadow-md transition ${
                plan.isPopular 
                  ? "border-2 border-blue-600 bg-blue-50 transform md:-translate-y-4" 
                  : "border-gray-200"
              }`}
            >
              {plan.isPopular && (
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-2xl font-semibold">{plan.name}</h3>
                    <p className="mt-2 text-gray-600">{plan.description}</p>
                  </div>
                  <span className="bg-blue-600 text-white text-sm px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}
              {!plan.isPopular && (
                <div>
                  <h3 className="text-2xl font-semibold">{plan.name}</h3>
                  <p className="mt-2 text-gray-600">{plan.description}</p>
                </div>
              )}
              <div className="mt-6">
                <span className="text-4xl font-bold">{plan.price}</span>
                {plan.price !== "$0" && (
                  <span className="text-gray-500">/month</span>
                )}
              </div>
              <ul className="mt-8 space-y-3">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <FaCheckCircle className={`mt-1 mr-3 flex-shrink-0 ${
                      plan.isPopular ? "text-blue-600" : "text-green-500"
                    }`} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                className={`mt-8 w-full py-3 rounded-lg font-medium ${
                  plan.buttonVariant === 'primary'
                    ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-md'
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;