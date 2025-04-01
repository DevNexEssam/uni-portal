import Link from 'next/link';
import { FaBook } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm py-6 px-6 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <FaBook className="text-blue-600 text-2xl" />
          <span className="font-bold text-xl">AcademicDash</span>
        </Link>
        <div className="hidden md:flex space-x-8">
          <Link href="#features" className="hover:text-blue-600 transition">Features</Link>
          <Link href="#how-it-works" className="hover:text-blue-600 transition">How It Works</Link>
          <Link href="#testimonials" className="hover:text-blue-600 transition">Testimonials</Link>
          <Link href="#faq" className="hover:text-blue-600 transition">FAQ</Link>
        </div>
        <div>
          <Link 
            href="/signup" 
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
          >
            Sign Up Free
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;