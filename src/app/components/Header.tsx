"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaSignInAlt } from 'react-icons/fa';

const Header: React.FC = () => (
  <header className="bg-primary text-white p-6 shadow-md w-full flex items-center">
    <div className="flex items-center">
      <Link href="/" className="text-3xl font-bold cursor-pointer ml-6 flex items-center">
        <Image src="/ThemeTinkerLogo.webp" alt="Theme Tinker Logo" width={64} height={64} className="mr-2" />
        Theme Tinker
      </Link>
      <nav className="ml-10">
        <Link href="/" className="text-white font-semibold hover:text-gray-300 transition duration-300 mr-4">
          Randomize Themes
        </Link>
        <Link href="/popular" className="text-white font-semibold hover:text-gray-300 transition duration-300 mr-4">
          Popular Themes
        </Link>
      </nav>
    </div>
    <div className="ml-auto flex items-center">
      <Link href="/login" className="text-white font-semibold hover:text-gray-300 transition duration-300 flex items-center mr-6">
        <FaSignInAlt className="mr-2" />
        Log In
      </Link>
    </div>
  </header>
);

export default Header;