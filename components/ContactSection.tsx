/* eslint-disable react/no-unescaped-entities */
import { FaEnvelope, FaComment } from 'react-icons/fa';
import Link from 'next/link';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center">
          <h2 className="text-4xl font-bold">Contact Our Team</h2>
          <p className="mt-4 text-xl text-gray-600">
            We're here to help with any questions about AcademicDash.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-50 p-8 rounded-xl">
            <FaEnvelope className="text-5xl text-blue-500 mx-auto" />
            <h3 className="text-2xl font-semibold mt-6 text-center">Email Us</h3>
            <p className="mt-4 text-gray-600 text-center">
              Typically reply within 24 hours
            </p>
            <Link
              href="mailto:support@academicdash.com"
              className="mt-2 text-blue-600 text-xl font-medium text-center block"
            >
              support@academicdash.com
            </Link>
          </div>
          <div className="bg-gray-50 p-8 rounded-xl">
            <FaComment className="text-5xl text-blue-500 mx-auto" />
            <h3 className="text-2xl font-semibold mt-6 text-center">Live Chat</h3>
            <p className="mt-4 text-gray-600 text-center">
              Available Monday-Friday, 9am-5pm EST
            </p>
            <Link
              href="/chat"
              className="mt-6 mx-auto bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition block w-fit"
            >
              Start Chat
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;