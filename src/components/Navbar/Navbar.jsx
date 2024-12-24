import React from 'react';
import { navConfig } from './navConfig';

export const NavBar = ({ className }) => {
  return (
    <nav className={`w-full bg-black text-white py-4 px-6 border-b border-gray-800 ${className || ''}`}>
      <div className="max-w-6xl mx-auto">
        <ul className="flex items-center justify-center space-x-8">
          {navConfig.map((item) => (
            <li key={item.path}>
              <a
                href={item.href}
                className="hover:text-gray-300 text-white transition-colors duration-200 text-sm font-medium"
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};