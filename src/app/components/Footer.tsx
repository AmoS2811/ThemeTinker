import React from 'react';
import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white py-5 w-full">
      <div className="container mx-auto flex text-start justify-between items-center px-4">
        <div className="flex items-center space-x-4">
          <Link href="/" className="text-2xl font-bold hover:text-gray-300 transition duration-300">
            Theme Tinker
          </Link>
          <div className="flex items-center space-x-4">
            <Link href="https://github.com/" target="_blank" className="hover:text-gray-300 transition duration-300">
                <FaGithub className="h-6 w-6" />
            </Link>
            <Link href="https://www.linkedin.com/" target="_blank" className="hover:text-gray-300 transition duration-300">
                <FaLinkedin className="h-6 w-6" />
            </Link>
          </div>
        </div>
        <div className="text-xs">
          &copy; 2024 Theme Tinker. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;