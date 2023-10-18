'use client';
import React, { ReactElement } from 'react';
import LoginForm from './components/LoginForm';
type LoginPageProps = {};

const LoginPage: React.FC<LoginPageProps> = (): ReactElement => {
  const handleSuccessfulLogin = () => {
    // Handle successful login here and navigate to the desired page
    // For example, you can use window.location.href
    window.location.href = "/dashboard/home";
  };

  return (
    <div className="min-h-screen flex">
      <div className="w-1/2 bg-blue-500 rounded-r-lg p-8">
        <h1 className="text-4xl text-white mb-4">EMS</h1>
        <p className="text-white">Beyond and Away</p>
      </div>
      <div className="w-1/2 p-8">
        <h2 className="text-2xl font-semibold mb-4">Login</h2>
        <LoginForm onLogin={handleSuccessfulLogin} />
      </div>
    </div>
  );
};

export default LoginPage;