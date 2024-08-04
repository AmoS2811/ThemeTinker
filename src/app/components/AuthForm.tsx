"use client";

import React, { useState } from 'react';
import { login, register } from '@api/auth';
import { useAuth } from '@context/AuthContext';

const AuthForm: React.FC<{ isSignUp: boolean; toggleAuthMode: () => void }> = ({ isSignUp, toggleAuthMode }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string>('');
  const { setToken } = useAuth();

  const handleAuth = async () => {
    setError('');

    if (!email || !password) {
      setError('Email and password are required');
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setError('Please enter a valid email address');
      return;
    }

    try {
      if (isSignUp) {
        const user = await register(email, password);
        console.log('Registration successful', user);
      } else {
        const token = await login(email, password);
        console.log('Login successful', token);
        setToken(token);
      }
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unknown error occurred');
      }
    }
  };

  return (
    <div className="w-full max-w-md">
      <form className="w-full max-w-md" onSubmit={(e) => { e.preventDefault(); handleAuth(); }}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Enter your email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="you@example.com"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Enter your password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="********"
          />
        </div>
        {error && <p className="text-red-500 text-xs italic">{error}</p>}
        <div className="flex items-center justify-between">
          <button
            className="bg-primary hover:bg-secondary w-full text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            {isSignUp ? 'Create Account' : 'Continue'}
          </button>
        </div>
      </form>
      <p className="text-lg text-center text-gray-600 mt-8">
        {isSignUp ? "Already have an account?" : "Don't have an account?"}
        <button
          onClick={toggleAuthMode}
          className="text-primary hover:underline ml-2"
        >
          {isSignUp ? 'Sign in' : 'Sign up'}
        </button>
      </p>
    </div>
  );
};

export default AuthForm;