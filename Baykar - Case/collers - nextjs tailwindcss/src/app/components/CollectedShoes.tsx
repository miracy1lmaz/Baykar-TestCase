"use client"
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';

const CollectedShoes: React.FC = () => {
  const countRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let start = 0;
    const end = 11658467; 
    const duration = 3000; 
    const incrementTime = 30; 
    const increment = end / (duration / incrementTime);

    const updateCounter = () => {
      if (countRef.current) {
        start += increment;
        if (start >= end) {
          start = end;
          clearInterval(counter);
        }
        countRef.current.textContent = Math.floor(start).toLocaleString();
      }
    };

    const counter = setInterval(updateCounter, incrementTime);
    return () => clearInterval(counter);
  }, []);

  const handleMouseClick = (e: React.MouseEvent) => {
    const effect = document.createElement('div');
    effect.className = 'click-effect';
    effect.style.left = `${e.clientX}px`;
    effect.style.top = `${e.clientY}px`;
    document.body.appendChild(effect);

    setTimeout(() => {
      effect.remove();
    }, 1000);
  };

  return (
    <section className="relative bg-custom-light-yellow" onClick={handleMouseClick}>
      <div className="relative w-full z-10 sm:mt-20 mt-0">
        <Image src="/last.png" width={1440} height={717} className="hidden sm:block w-full" alt="Background" />
      </div>

      <div className="w-full sm:hidden">
        <Image src="/section.png" width={393} height={717} className="w-full" alt="Background" />
      </div>
      
      <div className="absolute inset-0 hidden sm:flex items-center justify-center z-20">
        <div className="text-center">
          <span ref={countRef} className="text-white text-8xl font-extrabold">0</span>
          <span className="block text-white text-[56px] font-extrabold mt-4">Shoes Collected</span>
        </div>
      </div>

      <div className="absolute flex justify-center z-10 sm:left-60 left-16 -top-2 mt-5">
        <Image width={400} height={400} src="/col.png" className="w-full" alt="" />
      </div>

      <div className="absolute sm:left-60 left-16 -top-2 pt-1 mt-[235px] bg-gray-200 ml-6 pb-2 mb-2 z-30 px-3.5 rounded-md shadow-lg">
        <span className="text-gray-800 text-sm">
          Emma Simpson collected one pair of
          <span className="block font-bold">Cool Shoes.</span>
        </span>
        <div className="absolute bottom-[-8px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-t-gray-200 border-l-transparent border-r-transparent"></div>
      </div>

      <style jsx>{`
        .click-effect {
          position: absolute;
          width: 20px;
          height: 20px;
          background: rgba(255, 255, 255, 0.5);
          border-radius: 50%;
          pointer-events: none;
          animation: click-effect-animation 1s ease-out forwards;
        }

        @keyframes click-effect-animation {
          from {
            transform: scale(1);
            opacity: 1;
          }
          to {
            transform: scale(4);
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
};

export default CollectedShoes;
