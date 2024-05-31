"use client";
import Image from 'next/image';
import React, { useState } from 'react';

const GrowYourCollection: React.FC = () => {
  const [selectedButton, setSelectedButton] = useState<number | null>(null);
  const [isSwapped, setIsSwapped] = useState(false);

  const handleSwap = (index: number) => {
    setSelectedButton(index);
    setIsSwapped(!isSwapped);
  };

  return (
    <section className="relative py-20 bg-custom-light-yello">
      <div className="absolute inset-0 z-10">
        <Image src="/Waves.png" width={1440} height={684} className="w-full sm:h-full h-screen object-cover object-center mt-36" alt="Background" />
      </div>

      <div className="container mx-auto sm:text-left text-center relative z-10">
        <h2 className="text-4xl font-extrabold mb-4">Grow your collection</h2>
        <p className="mb-8 text-gray-700">
          Emin neque massa porta adipiscing elit. Sem libero id faucibus nibh amet dictum pellentesque sed.
          Eu non turpis risus odio sapien, fames sit rhoncus.
          Nec magna sed interdum at purus tellus. Et volutpat proin neque placerat at bibendum quam tellus.
        </p>
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex sm:flex-col flex-row sm:space-x-2 overflow-x-auto px-2 py-4 space-y- sm:space-y-0">
            {["Bibendum tellus", "Cras eget", "Dolor pharetra", "Amet, fringilla", "Amet nibh", "Sed velit"].map((label, index) => (
              <button
                key={index}
                className={`flex items-center text-left px-6 py-4 ml-2 rounded-lg ${selectedButton === index ? 'bg-white shadow-md' : ''}`}
                onClick={() => handleSwap(index)}
              >
                <span className="flex items-center justify-center w-8 h-8 rounded-full mr-4">
                  <Image alt='icon' src={`/icons/Vector-${index}.svg`} width={18} height={18} />
                </span>
                <div className="whitespace-nowrap">
                  {label}
                </div>
              </button>
            ))}
          </div>

          <div className="lg:w-3/3 sm:flex hidden relative">
            <div className={`relative z-10 w-3/3 ${isSwapped ? 'z-20 transform translate-x-12 -translate-y-12' : 'z-10'} transition-all duration-500`}>
              <Image width={759} height={451} src="/arka2.png" className="rounded-lg w-full sm:ml-6" alt="First Image" />
            </div>
            <div className={`absolute w-3/3 top-32 sm:left-20 -left-5 z-10 ${isSwapped ? 'z-10' : 'z-20 transform translate-x-12 -translate-y-12'} transition-all duration-500`}>
              <Image width={759} height={451} src="/arka3.png" className="rounded-lg w-full" alt="Second Image" />
            </div>
          </div>
          <div className="absolute sm:flex hidden z-20 bottom-10 right-0 transform -translate-x-8 translate-y-12 w-1/4 max-w-lg mx-auto">
            <Image width={256} height={256} src="/arka.png" className="w-full" alt="Third Image" />
          </div>

          <div className="lg:w-3/3 flex sm:hidden relative">
            <div className={`relative z-10 w-3/3 ${isSwapped ? 'z-20 transform translate-x-12 -translate-y-12' : 'z-10'} transition-all duration-500`}>
              <Image width={320} height={201} src="/mobile0.png" className="rounded-lg sm:ml-6" alt="First Image" />
            </div>
            <div className={`absolute w-3/3 top-32 sm:left-20 -left-5 z-10 ${isSwapped ? 'z-10' : 'z-20 transform translate-x-12 -translate-y-12'} transition-all duration-500`}>
              <Image width={365} height={202} src="/mobile1.png" className="rounded-lg" alt="Second Image" />
            </div>
          </div>
          <div className="absolute flex sm:hidden z-20 -bottom-6 right-0 transform -translate-x-8 translate-y-12 w-1/3 max-w-lg mx-auto">
            <Image width={300} height={105} src="/mobilufk.png" className="" alt="Third Image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GrowYourCollection;
