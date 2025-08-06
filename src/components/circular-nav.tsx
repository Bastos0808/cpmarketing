"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Home, Info, Briefcase, Mail } from 'lucide-react';

const navItems = [
  { href: '/', label: 'Home', icon: <Home /> },
  { href: '#about', label: 'Sobre', icon: <Info /> },
  { href: '#services', label: 'Serviços', icon: <Briefcase /> },
  { href: '#contact', label: 'Contato', icon: <Mail /> },
];

const ModernNav = () => {
  const [activeIndex, setActiveIndex] = useState(0);

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
              {item.icon}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ModernNav;
