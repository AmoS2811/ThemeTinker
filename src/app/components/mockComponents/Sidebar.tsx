import React from 'react';
import { FiHome, FiUsers, FiBriefcase, FiSettings, FiLogIn, FiUserPlus, FiAlertCircle } from 'react-icons/fi';

const Sidebar: React.FC<{ backgroundColor: string }> = ({ backgroundColor }) => (
  <aside className="h-screen w-72 p-6 pr-16  border-gray-300 shadow-lg" style={{ backgroundColor }}>
    <div className="text-2xl font-bold mb-4 text-white">Theme Tinker</div>
    <hr className="border-gray-300 mb-8" />
    <nav className="flex flex-col space-y-4">
      <div className="flex items-center text-white hover:bg-secondary p-2 rounded cursor-pointer" onClick={() => {}}>
        <FiHome className="mr-2" /> Overview
      </div>
      <div className="flex items-center text-white hover:bg-secondary p-2 rounded cursor-pointer" onClick={() => {}}>
        <FiUsers className="mr-2" /> Customers
      </div>
      <div className="flex items-center text-white hover:bg-secondary p-2 rounded cursor-pointer" onClick={() => {}}>
        <FiBriefcase className="mr-2" /> Companies
      </div>
      <div className="flex items-center text-white hover:bg-secondary p-2 rounded cursor-pointer" onClick={() => {}}>
        <FiSettings className="mr-2" /> Settings
      </div>
      <div className="flex items-center text-white hover:bg-secondary p-2 rounded cursor-pointer" onClick={() => {}}>
        <FiLogIn className="mr-2" /> Login
      </div>
      <div className="flex items-center text-white hover:bg-secondary p-2 rounded cursor-pointer" onClick={() => {}}>
        <FiUserPlus className="mr-2" /> Register
      </div>
      <div className="flex items-center text-white hover:bg-secondary p-2 rounded cursor-pointer" onClick={() => {}}>
        <FiAlertCircle className="mr-2" /> Error
      </div>
    </nav>
  </aside>
);

export default Sidebar;