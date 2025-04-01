import { Step } from '../types';
import { FaUserGraduate} from 'react-icons/fa';

const steps: Step[] = [
  {
    step: "01",
    icon: <FaUserGraduate className="text-3xl text-white" />,
    title: "Create Your Profile",
    description: "Set up your academic profile with your courses, goals, and preferences.",
    color: "bg-blue-600"
  },
  // Add other steps here...
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center">
          <h2 className="text-4xl font-bold">How AcademicDash Works</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Get set up in minutes and start seeing results immediately.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              <div className={`absolute -top-4 -left-4 w-16 h-16 rounded-full ${step.color} flex items-center justify-center text-white text-2xl font-bold z-10`}>
                {step.step}
              </div>
              <div className={`p-8 pt-16 rounded-xl border border-gray-200 group-hover:shadow-lg transition h-full ${index === 1 ? "transform md:-translate-y-4" : ""}`}>
                <div className={`w-16 h-16 rounded-lg ${step.color} flex items-center justify-center mb-6`}>
                  {step.icon}
                </div>
                <h3 className="text-2xl font-semibold">{step.title}</h3>
                <p className="mt-4 text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;