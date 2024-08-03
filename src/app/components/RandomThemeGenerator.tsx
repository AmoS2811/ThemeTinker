"use client";

import React, { useState, useEffect } from 'react';
import Notification from './Notification';
import namer from 'color-namer';
import colorNameList from 'color-name-list';
import { FiLock, FiUnlock, FiArrowLeft, FiArrowRight, FiSliders } from 'react-icons/fi';
import { PhotoshopPicker } from 'react-color';
import Dashboard from './mockComponents/Dashboard';
import chroma from 'chroma-js';

const RandomThemeGenerator: React.FC = () => {
  const [theme, setTheme] = useState<{ color: string; locked: boolean; showPicker: boolean; initialColor: string }[]>([]);
  const [notification, setNotification] = useState<{ message: string; show: boolean; backgroundColor: string }>({ message: '', show: false, backgroundColor: '' });
  const [filter, setFilter] = useState<string>('all');

  useEffect(() => {
    generateInitialTheme();
  }, []);

  const generateInitialTheme = () => {
    const initialTheme = Array.from({ length: 5 }, () => ({ color: `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`, locked: false, showPicker: false, initialColor: '' }));
    setTheme(initialTheme);
  };

  const generateTheme = () => {
    const newTheme = theme.map((item) =>
      item.locked
        ? item
        : { color: generateFilteredColor(filter), locked: false, showPicker: false, initialColor: '' }
    );
    setTheme(newTheme);
  };

  const generateFilteredColor = (filter: string): string => {
    let color = chroma.random();

    switch (filter) {
      case 'dark':
        color = chroma(color).darken(2);
        break;
      case 'light':
        color = chroma(color).brighten(2);
        break;
      case 'muted':
        color = chroma(color).saturate(-2);
        break;
      case 'vibrant':
        color = chroma(color).saturate(2);
        break;
      case 'warm':
        color = chroma.hsl(Math.random() * 60, 1, 0.5);
        break;
      case 'cool':
        color = chroma.hsl(Math.random() * 180 + 180, 1, 0.5);
        break;
      default:
        break;
    }

    return color.hex();
  };

  const adjustColor = (color: any, index: number) => {
    const adjustedTheme = theme.map((item, idx) => {
      if (idx === index) {
        const newColor = color.hex;
        return item.locked ? item : { ...item, color: newColor };
      }
      return item;
    });
    setTheme(adjustedTheme);
  };

  const togglePicker = (index: number) => {
    const updatedTheme = theme.map((item, idx) => ({
      ...item,
      showPicker: idx === index ? !item.showPicker : false,
      initialColor: idx === index && !item.showPicker ? item.color : item.initialColor,
    }));
    setTheme(updatedTheme);
  };

  const copyToClipboard = (color: string, index: number) => {
    if (!theme[index].showPicker) {
      navigator.clipboard.writeText(color);
      setNotification({ message: `${getColorName(color)} (${color}) copied to clipboard!`, show: true, backgroundColor: color });
    }
  };

  const toggleLock = (index: number) => {
    const newTheme = [...theme];
    newTheme[index].locked = !newTheme[index].locked;
    setTheme(newTheme);
  };

  const getColorName = (color: string) => {
    const namedColors = namer(color).ntc[0].name;
    const colorNames = colorNameList.find((colorItem) => colorItem.hex.toLowerCase() === color.toLowerCase());
    return colorNames ? colorNames.name : namedColors;
  };

  const moveColorBox = (index: number, direction: 'left' | 'right') => {
    const newTheme = [...theme];
    if (direction === 'left' && index > 0) {
      [newTheme[index], newTheme[index - 1]] = [newTheme[index - 1], newTheme[index]];
    } else if (direction === 'right' && index < newTheme.length - 1) {
      [newTheme[index], newTheme[index + 1]] = [newTheme[index + 1], newTheme[index]];
    }
    setTheme(newTheme);
  };

  const handleColorChangeComplete = (index: number) => {
    const updatedTheme = theme.map((item, idx) => ({
      ...item,
      showPicker: idx === index ? false : item.showPicker,
      color: idx === index ? item.color : item.color,
    }));
    setTheme(updatedTheme);
  };

  const handleColorCancel = (index: number) => {
    const updatedTheme = theme.map((item, idx) => ({
      ...item,
      showPicker: false,
      color: idx === index ? item.initialColor : item.color,
    }));
    setTheme(updatedTheme);
  };

  return (
    <div className="flex flex-col items-center w-full">
      <div className="p-8 bg-white border border-gray-300 rounded-lg shadow-lg text-center w-full" style={{ maxWidth: '80%' }}>
        <div className="flex justify-end mb-4">
          <select value={filter} onChange={(e) => setFilter(e.target.value)} className="border border-gray-300 rounded p-2">
            <option value="all">All Colors</option>
            <option value="dark">Dark Colors</option>
            <option value="light">Light Colors</option>
            <option value="muted">Muted Colors</option>
            <option value="vibrant">Vibrant Colors</option>
            <option value="warm">Warm Colors</option>
            <option value="cool">Cool Colors</option>
          </select>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-5 gap-6 relative">
          {theme.map((item, index) => (
            <div
              key={index}
              className="flex flex-col justify-end w-full h-96 rounded-lg cursor-pointer shadow-md transform transition-transform duration-300 hover:scale-105 relative"
              style={{ backgroundColor: item.color, zIndex: item.showPicker ? 50 : 10 }}
              onClick={() => copyToClipboard(item.color, index)}
            >
              <div className="absolute top-4 left-4 z-20" onClick={(e) => { e.stopPropagation(); togglePicker(index); }}>
                <FiSliders className="text-white text-2xl cursor-pointer" />
              </div>
              {item.showPicker && (
                <div className="absolute top-12 left-0 z-50">
                  <PhotoshopPicker
                    color={item.color}
                    onChange={(color) => adjustColor(color, index)}
                    onAccept={() => handleColorChangeComplete(index)}
                    onCancel={() => handleColorCancel(index)}
                  />
                </div>
              )}
              <div className="absolute top-4 right-4 z-20" onClick={(e) => { e.stopPropagation(); toggleLock(index); }}>
                {item.locked ? <FiLock className="text-white text-2xl" /> : <FiUnlock className="text-white text-2xl" />}
              </div>
              <div className="flex justify-between px-2 absolute bottom-24 w-full z-20">
                {index > 0 && <FiArrowLeft className="text-white ml-6 text-3xl" onClick={(e) => { e.stopPropagation(); moveColorBox(index, 'left'); }} />}
                {index < theme.length - 1 && <FiArrowRight className="text-white mr-6 text-3xl" onClick={(e) => { e.stopPropagation(); moveColorBox(index, 'right'); }} style={{ marginLeft: 'auto' }} />}
              </div>
              <div className="bg-white bg-opacity-75 p-4 rounded-b-lg text-center">
                <p className="font-bold text-lg">{item.color.toUpperCase()}</p>
                <p className="text-md truncate max-w-full">{getColorName(item.color)}</p>
              </div>

            </div>
          ))}
        </div>
        <button className="mt-8 bg-primary text-white py-3 px-8 rounded-full font-semibold hover:bg-secondary-dark transition duration-300" onClick={generateTheme}>
          Generate A Random Theme
        </button>
        <p className="text-md text-center text-gray-400 mt-4">Lock in colors you like before they get swept away!</p>
        <p className="text-md text-center text-gray-400 mt-1">Click on the color boxes to copy the color code to your clipboard</p>
        <p className="text-md text-center text-gray-400 mt-1 mb-2">Only the first three boxes affect the dashboard colors, use the arrows to quickly test various primary and secondary colors!</p>
        <Notification message={notification.message} show={notification.show} onClose={() => setNotification({ ...notification, show: false })} backgroundColor={notification.backgroundColor} />
      </div>
      <div className="p-6">
          <h2 className="text-4xl font-bold text-left mt-10">Need a mirror for your color themes?</h2>
          <p className="text-lg text-left text-gray-600">Below is a mockup of a dashboard that can be used to see how the colors would mesh together in a real life example</p>
          <Dashboard theme={theme} />
        </div>
    </div>
  );
};

export default RandomThemeGenerator;