"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/podcast', label: 'Podcast' },
  { href: '/#contact', label: 'Contato' },
];

const ModernNav = () => {
  const pathname = usePathname();
  
  const getInitialActiveIndex = () => {
    const activeIndex = navItems.findIndex(item => item.href === pathname);
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
