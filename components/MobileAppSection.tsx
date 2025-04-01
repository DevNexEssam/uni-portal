import Image from 'next/image';
import { FaMobileAlt, FaCheckCircle } from 'react-icons/fa';
// import mobileApp1 from '../public/images/mobile-app-1.jpg';
// import mobileApp2 from '../public/images/mobile-app-2.jpg';

const MobileAppSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold">Your Dashboard On The Go</h2>
            <p className="mt-6 text-xl text-gray-600">
              Access all your academic tools from your phone with our mobile app.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                "Sync across all your devices",
                "Get deadline notifications",
                "Quickly add assignments",
                "Study on the go with mobile flashcards"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-4">
              <button className="bg-black text-white px-6 py-3 rounded-lg flex items-center">
                <FaMobileAlt className="mr-2" /> App Store
              </button>
              <button className="bg-black text-white px-6 py-3 rounded-lg flex items-center">
                <FaMobileAlt className="mr-2" /> Play Store
              </button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="w-64 h-auto border-8 border-gray-800 rounded-3xl overflow-hidden shadow-2xl">
                {/* <Image 
                  src={mobileApp1}
                  alt="Mobile app screenshot"
                  placeholder="blur"
                /> */}
              </div>
              <div className="absolute -bottom-8 -right-8 w-64 h-auto border-8 border-gray-800 rounded-3xl overflow-hidden shadow-2xl z-10">
                {/* <Image 
                  src={mobileApp2}
                  alt="Mobile app screenshot"
                  placeholder="blur"
                /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileAppSection;