"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import LogoOutlined from './LogoOutlined';

const Navbar = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('events');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const tabs = [
    { name: 'Евенти', key: 'events' },
    { name: 'Места', key: 'venues' },
    { name: 'Артисти', key: 'artists' },
  ];

  useEffect(() => {
    // Update the active tab based on the current route
    const path = window.location.pathname.substring(1);
    const tab = tabs.find(t => t.key === path);
    if (tab) {
      setActiveTab(tab.key);
    }
  }, []);

  const handleTabClick = (tabKey: string) => { // Specify type for tabKey
    setActiveTab(tabKey);
    router.push(`/${tabKey}`);
    setIsMenuOpen(false); // Close mobile menu after selection
  };

  return (
    <nav className="bg-transparent p-4">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
           <LogoOutlined />
        </Link>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden inline-flex items-center p-2 text-gray-500 hover:text-gray-700 focus:outline-none"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Navigation items */}
        <div className={`${isMenuOpen ? 'block' : 'hidden'} w-full md:flex md:w-auto md:items-center`}>
          {/* Tab group */}
          <div className="flex flex-col md:flex-row md:space-x-4 mt-4 md:mt-0">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                className={`px-3 py-2 text-sm font-medium ${
                  activeTab === tab.key
                    ? 'text-black border-b-2 border-black'
                    : 'text-gray-500 hover:text-gray-700 border-b-2 border-transparent hover:border-gray-300'
                }`}
                onClick={() => handleTabClick(tab.key)}
              >
                {tab.name}
              </button>
            ))}
          </div>
        </div>

        {/* About Us button */}
        <Link
          href="/about"
          className="hidden md:inline-block px-4 py-2 text-sm font-medium text-black bg-white rounded-lg transition-all duration-300 hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
          style={{ border: '3px solid black' }}
        >
          About Us
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;