import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import { FiMenu } from 'react-icons/fi';

const Dashboard: React.FC<{ theme: { color: string; locked: boolean }[] }> = ({ theme }) => {
  const [colors, setColors] = useState<string[]>([]);

  useEffect(() => {
    setColors(theme.slice(0, 3).map(item => item.color));
  }, [theme]);

  return (
    <div className="flex w-full mt-10 bg-white border border-gray-300 shadow-lg">
      <Sidebar backgroundColor={colors[0] || '#000'} />
      <div className="flex-grow">
        <div className="p-4 mb-6 flex justify-between items-center" style={{ backgroundColor: colors[0] || '#000', color: '#fff' }}>
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <FiMenu className="text-white text-2xl mr-2 hover:text-secondary cursor-pointer" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-6 mb-6 px-8">
          {colors.slice(0, 4).map((color, index) => (
            <div key={index} className="p-4 rounded-lg shadow-md" style={{ backgroundColor: color }}>
              <div className='text-white'> 
                <p className='text-4xl mb-4 pl-2 py-4'>Content Title</p>
                <p className="text-xl p-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-8">
          <div className="rounded-lg shadow-md" style={{ backgroundColor: colors[0] || '#000' }}>
            <p className='text-4xl text-white p-8'>Content Title</p>
            <p className="text-white p-8 text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="rounded-lg shadow-md" style={{ backgroundColor: colors[1] || '#000' }}>
          <p className='text-4xl text-white p-8'>Content Title</p>
            <p className="text-white p-8 text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;