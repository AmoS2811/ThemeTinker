"use client";

import React, { useState } from 'react';
import Header from '../components/Header';
import Image from 'next/image';
import AuthForm from '../components/AuthForm';

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
            <AuthForm isSignUp={isSignUp} toggleAuthMode={() => setIsSignUp(!isSignUp)} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Login;