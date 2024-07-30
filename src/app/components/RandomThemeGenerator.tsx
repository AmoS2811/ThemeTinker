"use client";

import React, { useState, useEffect } from 'react';
import Notification from './Notification';
import namer from 'color-namer';
import colorNameList from 'color-name-list';
import { FiLock, FiUnlock } from 'react-icons/fi';

const RandomThemeGenerator: React.FC = () => {
  const [theme, setTheme] = useState<{ color: string; locked: boolean }[]>([]);
  const [notification, setNotification] = useState<{ message: string; show: boolean; backgroundColor: string }>({ message: '', show: false, backgroundColor: '' });

  useEffect(() => {
    generateInitialTheme();
  }, []);

  const generateInitialTheme = () => {
    const initialTheme = Array.from({ length: 5 }, () => ({ color: `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`, locked: false }));
    setTheme(initialTheme);
  };

  const generateTheme = () => {
    const newTheme = theme.map((item) =>
      item.locked
        ? item
        : { color: `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`, locked: false }
    );
    setTheme(newTheme);
  };

  const copyToClipboard = (color: string) => {
    navigator.clipboard.writeText(color);
    setNotification({ message: `${color} copied to clipboard!`, show: true, backgroundColor: color });
  };

  const toggleLock = (index: number) => {
    const newTheme = [...theme];
    newTheme[index].locked = !newTheme[index].locked;
    setTheme(newTheme);
  };

  const getColorName = (color: string) => {
    const namedColors = namer(color);
    const colorNames = colorNameList.find((colorItem) => colorItem.hex.toLowerCase() === color.toLowerCase());
    return colorNames ? colorNames.name : namedColors.basic[0].name;
  };

  return (
    <div className="p-8 bg-white border border-gray-300 rounded-lg shadow-lg text-center w-full mt-10 max-w-6xl">
      <button className="bg-secondary text-white py-3 px-8 rounded-full font-semibold hover:bg-secondary-dark transition duration-300" onClick={generateTheme}>
        Generate A Random Theme
      </button>
      <p className="text-md text-center text-gray-400 mt-2 mb-8">Click on the color boxes to copy the color code to your clipboard</p>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-5 gap-6">
        {theme.map((item, index) => (
          <div
            key={index}
            className="flex flex-col justify-end w-full h-96 rounded-lg cursor-pointer shadow-md transform transition-transform duration-300 hover:scale-105 relative"
            style={{ backgroundColor: item.color }}
            onClick={() => copyToClipboard(item.color)}
          >
            <div className="absolute top-4 right-4" onClick={(e) => { e.stopPropagation(); toggleLock(index); }}>
              {item.locked ? <FiLock className="text-white text-2xl" /> : <FiUnlock className="text-white text-2xl" />}
            </div>
            <div className="bg-white bg-opacity-75 p-4 rounded-b-lg text-center">
              <p className="font-bold text-lg">{item.color.toUpperCase()}</p>
              <p className="text-md">{getColorName(item.color)}</p>
            </div>
          </div>
        ))}
      </div>
      <Notification message={notification.message} show={notification.show} onClose={() => setNotification({ ...notification, show: false })} backgroundColor={notification.backgroundColor} />
    </div>
  );
};

export default RandomThemeGenerator;