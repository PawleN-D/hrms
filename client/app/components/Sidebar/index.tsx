import React from 'react';
import Link from 'next/link';
import logo from '../../../public/logo.jpg';
import person from '../../../public/profile.png';
import { FiHome, FiInbox, FiCheckCircle, FiUser } from 'react-icons/fi'; // Import icons from react-icons
import { RiTeamLine, RiOrganizationChart } from 'react-icons/ri'; // Import icons from react-icons
import Image from 'next/image';

const navigationLinks = [
  { href: '/home', text: 'Home', icon: <FiHome size={24} /> },
  { href: '/tasks', text: 'Tasks', icon: <FiCheckCircle size={24} /> },
  { href: '/inbox', text: 'Inbox', icon: <FiInbox size={24} /> },
  { href: '/tasks', text: 'My Team', icon: <RiTeamLine size={24} /> },
  { href: '/tasks', text: 'ORG', icon: <RiOrganizationChart size={24} /> },
  { href: '/profile', text: 'Profile', icon: <FiUser size={24} /> },
];
RiTeamLine

const Sidebar: React.FC = () => {
  return (
    <aside className="backdrop-blur-lg shadow text-white w-64 p-4 flex flex-col h-screen rounded-br-xl">
      <div className="flex items-center justify-center h-1/6">
        <Image
          src={logo}
          alt="Logo"
          className="w-20 h-20 rounded-full"
        />
      </div>
      <div className="flex flex-col justify-between flex-grow p-6">
        <ul className="space-y-2">
          {navigationLinks.map((link, index) => (
            <li key={index}>
              <Link legacyBehavior href={link.href}>
                <a className="block py-4 px-2 text-lg hover:text-blue-500 flex flex-col items-center justify-center">
                  {link.icon}
                  <span>{link.text}</span>
                </a>
              </Link>
            </li>
          ))}
        </ul>
        <div className="m-2">
          <Image
            src={person}
            alt="User"
            className="w-12 h-12 rounded-full mx-auto"
          />
          <p className="m-2 text-center">User Name</p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
