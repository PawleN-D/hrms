"use client";
import React, { useEffect, useState } from 'react';

function DateTimeDisplay() {
  const [currentDateTime, setCurrentDateTime] = useState<string>('');

  useEffect(() => {
    // Function to update the date and time
    const updateDateTime = () => {
      const now = new Date();
      const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      };

      const formattedDate = now.toLocaleDateString('en-US');
      const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

      setCurrentDateTime(`${formattedDate}\n${time}\n${timeZone}`);
    };

    // Update the date and time immediately and every second
    updateDateTime();
    const intervalId = setInterval(updateDateTime, 1000);

    // Cleanup the interval on component unmount
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="bg-opacity-40 p-4 rounded-md backdrop-brightness-50 shadow flex flex-col h-32">
      <div className="items-center justify-between pb-4">
        <h1 className="text-2xl text-white font-bold">Current Date and Time</h1>
        
      </div>
      <div className=" items-center">
        <div className="text-white text-2xl font-bold">{currentDateTime}</div>
      </div>
    </div>
  );
}

export default DateTimeDisplay;
