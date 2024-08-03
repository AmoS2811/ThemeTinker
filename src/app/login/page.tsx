"use client";

import React, { useState } from 'react';
import Header from '../components/Header';
import Image from 'next/image';

const Login: React.FC = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className="min-h-screen bg-white flex flex-col items-center">
      <Header />
      <main className="flex flex-col items-center w-full flex-grow">
        <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl mt-10 p-6">
          <div className="hidden md:block w-1/2 pr-6">
            <p className="text-left text-gray-600 mb-2 text-xl">Perks of signing up?</p>
            <Image src="/feature-showcase.webp" alt="Feature Showcase" width={600} height={800} className="rounded-lg border shadow-lg" />
          </div>
          <div className="w-full md:w-1/2 flex flex-col items-center p-6 bg-white">
            <h2 className="text-4xl font-bold text-center mb-6">{isSignUp ? 'Create Account' : 'Sign In'}</h2>
            <p className="text-lg text-center text-gray-600 mb-8">
              {isSignUp ? 'Ready, Set, Tinker: Register Your Account!' : 'Sign in if you already have an account.'}
            </p>
            <form className="w-full max-w-md">
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Enter your email</label>
                <input
                  type="email"
                  id="email"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="you@example.com"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Enter your password</label>
                <input
                  type="password"
                  id="password"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="********"
                />
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="bg-primary hover:bg-secondary w-full text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                >
                  {isSignUp ? 'Create Account' : 'Continue'}
                </button>
              </div>
            </form>
            <p className="text-lg text-center text-gray-600 mt-8">
              {isSignUp ? "Already have an account?" : "Don't have an account?"}
              <button
                onClick={() => setIsSignUp(!isSignUp)}
                className="text-primary hover:underline ml-2"
              >
                {isSignUp ? 'Sign in' : 'Sign up'}
              </button>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Login;