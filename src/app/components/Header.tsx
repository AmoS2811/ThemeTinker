"use client";

import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => (
  <header className="bg-primary text-white p-6 shadow-md w-full flex items-center">
    <div className="flex items-center">
      <Link href="/" className="text-3xl font-bold cursor-pointer ml-6">
        Theme Tinker
      </Link>
      <nav className="ml-10">
        <Link href="/" className="text-white font-semibold hover:text-gray-300 transition duration-300 mr-4">
          Randomize Themes
        </Link>
        <Link href="/popular" className="text-white font-semibold hover:text-gray-300 transition duration-300">
          Popular Themes
        </Link>
      </nav>
    </div>
  </header>
);

export default Header;