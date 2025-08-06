"use client";

import React from 'react';
import Link from 'next/link';
import { Home, Info, Briefcase, Mail } from 'lucide-react';

const navItems = [
  { href: '/', label: 'Home', icon: <Home /> },
  { href: '#about', label: 'Sobre', icon: <Info /> },
  { href: '#services', label: 'Serviços', icon: <Briefcase /> },
  { href: '#contact', label: 'Contato', icon: <Mail /> },
];

const CircularNav = () => {
  return (
    <>
      <nav className="circular-nav">
        {navItems.map((item) => (
          <Link key={item.label} href={item.href} passHref>
            <button type="button" className="circular-nav-button">
              <span className="nav-text">{item.label}</span>
              <span className="nav-icon" aria-hidden="true">
                {item.icon}
              </span>
              <svg viewBox="0 0 300 300" aria-hidden="true">
                <g>
                  <text fill="currentColor">
                    <textPath xlinkHref="#circlePath">{item.label}</textPath>
                  </text>
                  <text fill="currentColor">
                    <textPath xlinkHref="#circlePath" startOffset="50%">{item.label}</textPath>
                  </text>
                </g>
              </svg>
            </button>
          </Link>
        ))}
      </nav>

      {/* SVG defs template, hidden from view */}
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 300 300"
        width="0"
        height="0"
        style={{ position: 'absolute' }}
      >
        <defs>
          <path
            id="circlePath"
            d="M 150, 150 m -50, 0 a 50,50 0 0,1 100,0 a 50,50 0 0,1 -100,0"
          />
        </defs>
      </svg>
    </>
  );
};

export default CircularNav;