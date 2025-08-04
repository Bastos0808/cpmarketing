"use client";

import React, { useState, useEffect, useRef } from 'react';

const VantaBackground = ({ children }: { children: React.ReactNode }) => {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState<any>(null);

  useEffect(() => {
    let effect:any = null;
    const loadVanta = async () => {
      const THREE = await import('three');
      const p5 = (await import('p5')).default;
      const TOPOLOGY = (await import('vanta/dist/vanta.topology.min.js')).default;
      
      if (vantaRef.current && !effect) {
        effect = TOPOLOGY({
          el: vantaRef.current,
          p5,
          THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0xff5100,
          backgroundColor: 0x0,
        });
        setVantaEffect(effect);
      }
    };

    loadVanta();

    return () => {
      if (vantaEffect) {
          vantaEffect.destroy();
      } else if (effect) {
          effect.destroy();
      }
    };
  }, []);

  return (
    <div
      ref={vantaRef}
      className="relative w-full min-h-screen bg-[#16004f]"
      style={{
        background: 'radial-gradient(circle at center, #2a008a, #16004f)',
      }}
    >
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default VantaBackground;
