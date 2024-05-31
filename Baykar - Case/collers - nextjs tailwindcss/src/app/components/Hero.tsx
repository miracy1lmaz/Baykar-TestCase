import Image from 'next/image';
import React from 'react';


const Hero: React.FC = () => {
  return (
    <section className="relative py-20">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-center lg:text-left relative z-10">
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start">
          <h1 className="text-7xl font-extrabold text-gray-800">Collectible Sneakers</h1>
          <p className="mt-8 text-lg font-normal pr-4 text-gray-600">
            Sit eleifend turpis sed integer integer accumsan turpis. Sed suspendisse nec lorem mauris.
            Pharetra, eu imperdiet ipsum ultrices amet.
          </p>
          <div className="mt-8 flex justify-center lg:justify-start">
            <button className="text-amber-900 border-2 rounded-lg border-amber-900 font-medium text-[20px] px-7 py-3 mr-2">Sign Up Now</button>
            <button className="bg-transparent font-medium text-amber-900 px-6 py-3 rounded flex items-center">
            <Image src="/icons/play-circle.svg" width={24} height={24} alt="circle" className="relative z-10 mr-2" />
  Watch Demo
</button>
          </div>
        </div>
        <div className="relative p-4 lg:col-span-5 mt-10 lg:mt-0 flex justify-center items-center">
          <div className="absolute right-12 px-4 w-3/4 h-3/4 z-0">
            <img src="/Picture.png" alt="Background" />
          </div>
          <Image src="/Pexels_Photo_by_Ray_Piedra-preview.png" width={600} height={600} alt="Sneakers" className="relative z-10 ml-4" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
