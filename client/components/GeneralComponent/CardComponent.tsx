import React from 'react';
import Image from 'next/image';
import Icon from '../../../public/leave.png';

interface CircularImageWithTextProps {
  heading: string;
  subheading: string;
  message: string;
}

const CircularImageWithText: React.FC<CircularImageWithTextProps> = ({
  heading,
  subheading,
  message,
}) => {
  return (
    <div className="bg-opacity-40 pt-2 pb-5 rounded-md backdrop-brightness-50 shadow h-32">
      <h2 className="text-2xl text-white font-bold pl-4">{heading}</h2>
      <div className="flex flex-row items-center">
        <div className="w-3/4 pl-4">
          <div>
            <p className="text-lg text-white font-semibold">{subheading}</p>
            <p className="text-white">{message}</p>
          </div>
        </div>
        <div className="w-1/4 pb-4">
          <Image
            src={Icon}
            alt="Circular Image"
            className="rounded-full h-20 w-20"
          />
        </div>
      </div>
    </div>
  );
};

export default CircularImageWithText;
