"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/podcast', label: 'Podcast' },
  { href: '/contato', label: 'Contato' },
];

const ModernNav = () => {
  const pathname = usePathname();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    // Exact match for homepage
    if (pathname === '/') {
        setActiveIndex(0);
        return;
    }
    // For other pages, find the one that starts with the href
    const activeIndex = navItems.findIndex(item => item.href !== '/' && pathname.startsWith(item.href));
    
    if (activeIndex !== -1) {
        setActiveIndex(activeIndex);
    } else {
        setActiveIndex(0); // Default to home if no match
    }
  }, [pathname]);

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
              aria-label={item.label}
            >
              <Link href={item.href} className="w-full h-full flex items-center justify-center">
                  <span className={index === activeIndex ? 'active-text' : ''}>
                    {item.label}
                  </span>
              </Link>
            </li>
        ))}
      </ul>
    </div>
  );
};

export default ModernNav;
