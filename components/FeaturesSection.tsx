import { FiArrowRight } from 'react-icons/fi';
import { Feature } from '../types';
import { FaBook, FaCalendarAlt, FaChartLine, FaClipboardList, FaUsers} from 'react-icons/fa';
import { 
  FaFileAlt, 
  FaFlask, 
  FaLanguage, 
  FaProjectDiagram, 
  FaBalanceScale, 
  FaVideo, 
  FaBell 
} from 'react-icons/fa';

const features: Feature[] = [
  {
    icon: <FaClipboardList className="text-4xl text-blue-500" />,
    title: "Assignment Tracker",
    description: "Never miss a deadline with color-coded priority levels and automated reminders for all your coursework.",
    color: "bg-blue-50"
  },
  {
    icon: <FaBook className="text-4xl text-green-500" />,
    title: "Smart Study Planner",
    description: "AI-powered scheduling that adapts to your learning pace and exam dates for optimal retention.",
    color: "bg-green-50"
  },
  {
    icon: <FaUsers className="text-4xl text-purple-500" />,
    title: "Group Collaboration",
    description: "Real-time document sharing and task delegation for group projects with version history.",
    color: "bg-purple-50"
  },
  {
    icon: <FaCalendarAlt className="text-4xl text-red-500" />,
    title: "Exam Countdown",
    description: "Visual timeline with daily study targets and personalized revision recommendations.",
    color: "bg-red-50"
  },
  {
    icon: <FaChartLine className="text-4xl text-yellow-500" />,
    title: "Grade Analytics",
    description: "Predictive grading and performance trends across all your courses with improvement suggestions.",
    color: "bg-yellow-50"
  },
  {
    icon: <FaFileAlt className="text-4xl text-indigo-500" />,
    title: "Digital Notebook",
    description: "Organize lecture notes with multimedia support and smart search across all your materials.",
    color: "bg-indigo-50"
  },
  // {
  //   icon: <FaFlask className="text-4xl text-teal-500" />,
  //   title: "Lab Report Builder",
  //   description: "Templates and citation tools specifically designed for science and engineering students.",
  //   color: "bg-teal-50"
  // },
  // {
  //   icon: <FaLanguage className="text-4xl text-orange-500" />,
  //   title: "Language Learning",
  //   description: "Integrated flashcards and pronunciation tools for foreign language courses.",
  //   color: "bg-orange-50"
  // },
  // {
  //   icon: <FaProjectDiagram className="text-4xl text-pink-500" />,
  //   title: "Thesis Manager",
  //   description: "Milestone tracking and research organization for capstone projects and dissertations.",
  //   color: "bg-pink-50"
  // },
  // {
  //   icon: <FaBalanceScale className="text-4xl text-amber-500" />,
  //   title: "Grade Calculator",
  //   description: "Customizable weightings to predict your final grades based on current performance.",
  //   color: "bg-amber-50"
  // },
  // {
  //   icon: <FaVideo className="text-4xl text-cyan-500" />,
  //   title: "Lecture Capture",
  //   description: "Time-stamped notes synchronized with recorded lectures for efficient review.",
  //   color: "bg-cyan-50"
  // },
  // {
  //   icon: <FaBell className="text-4xl text-lime-500" />,
  //   title: "Smart Alerts",
  //   description: "Context-aware notifications about schedule changes and important academic dates.",
  //   color: "bg-lime-50"
  // }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center">
          <h2 className="text-4xl font-bold">Powerful Features Designed for Students</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to stay organized, productive, and ahead in your studies.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {features.map((feature, index) => (
            <div key={index} className={`p-8 rounded-xl ${feature.color} hover:shadow-md transition`}>
              <div className="w-16 h-16 flex items-center justify-center rounded-lg bg-white shadow-sm">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mt-6">{feature.title}</h3>
              <p className="mt-2 text-gray-600">{feature.description}</p>
              <button className="mt-4 flex items-center text-blue-600 font-medium">
                Learn more <FiArrowRight className="ml-2" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;