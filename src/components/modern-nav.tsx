"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/podcast', label: 'Podcast' },
  { href: '/contato', label: 'Contato' },
];

const ModernNav = () => {
  const pathname = usePathname();
  
  const getInitialActiveIndex = () => {
    // Exact match for homepage
    if (pathname === '/') return 0;
    // For other pages, find the one that starts with the href
    const activeIndex = navItems.findIndex(item => item.href !== '/' && pathname.startsWith(item.href));
    return activeIndex === -1 ? 0 : activeIndex;
  }

  const [activeIndex, setActiveIndex] = useState(getInitialActiveIndex());

  const handleItemClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="buttons-container">
      <ul>
        {navItems.map((item, index) => (
          <li
            key={item.label}
            className={index === activeIndex ? 'active' : ''}
            onClick={() => handleItemClick(index)}
          >
            <Link
              href={item.href}
              className={index === activeIndex ? 'active-text' : ''}
              aria-label={item.label}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ModernNav;
