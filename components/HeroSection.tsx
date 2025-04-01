/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import Link from 'next/link';
import { FaPlay, FaArrowRight } from 'react-icons/fa';

const HeroSection = () => {
  return (
    <section className="relative py-20 bg-gradient-to-br from-blue-50 to-indigo-50 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-20 left-10 w-40 h-40 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
            Transform Your <br className="hidden md:block" /> Academic Journey
          </h1>
          
          <p className="mt-6 text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
            The intelligent dashboard that helps students <span className="font-semibold text-blue-600">organize</span>, <span className="font-semibold text-indigo-600">track</span>, and <span className="font-semibold text-purple-600">excel</span> in their studies.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/signup"
              className="relative flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] group"
            >
              <span className="font-medium text-lg">Get Started Free</span>
              <FaArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
              <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-r from-blue-700 to-indigo-700 -z-10"></div>
            </Link>

            <Link
              href="/demo"
              className="flex items-center justify-center px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-all duration-300 group"
            >
              <FaPlay className="mr-2 text-blue-600" />
              <span className="font-medium text-lg">Watch Demo</span>
            </Link>
          </div>

          {/* Dashboard Image */}
          <div className="mt-16 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="relative rounded-xl shadow-2xl overflow-hidden border-8 border-white bg-white">
              <Image
                src="/images/dashboard-screenshot.png"
                alt="Academic Dashboard Preview"
                width={1200}
                height={800}
                className="object-cover w-full h-auto"
                quality={100}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;