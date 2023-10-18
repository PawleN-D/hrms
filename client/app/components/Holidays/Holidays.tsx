// src/components/HolidayComponent.tsx
import React from 'react';

interface HolidayProps {
  holidays: string[];
}

const HolidayComponent: React.FC<HolidayProps> = ({ holidays }) => {
  return (
    <div className="bg-opacity-40 p-4 rounded-md backdrop-blur-lg shadow">
      <h2 className="text-xl text-white font-semibold mb-4">Holidays</h2>
      <ul className="list-disc pl-4">
        {holidays.map((holiday) => (
          <li key={holiday}>{holiday}</li>
        ))}
      </ul>
    </div>
  );
};

export default HolidayComponent;
