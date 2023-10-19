"use client"
import React from 'react';
import { twMerge } from 'tailwind-merge';

interface InteractiveButtonsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  label: string;
}

const InteractiveButtons: React.FC<InteractiveButtonsProps> = ({ activeTab, setActiveTab, label }) => {
  const isButtonActive = activeTab === label;

  return (
    <button
      className={twMerge(
        'px-4 py-2',
        isButtonActive ? 'border-b-4 border-indigo-500 text-white' : 'text-blue',
        isButtonActive && 'w-1/3 bg-gradient-to-r from-cyan-500 to-blue-500',
        !isButtonActive && 'w-1/3 bg-gradient-to-r from-purple-500 to-pink-500'
      )}
      onClick={() => setActiveTab(label)}
    >
      {label}
    </button>
  );
};

export default InteractiveButtons;
