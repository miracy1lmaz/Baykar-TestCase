"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="bg-custom-light-yellow py-4 relative">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-[32px] ml-4 sm:ml-0 font-bold text-amber-900">Collers</div>
        <ul className="sm:flex space-x-9 items-center hidden text-[16px]">
          <li><Link href="#" className="font-medium text-amber-900">Products</Link></li>
          <li><Link href="#" className="font-medium text-amber-900">Solutions</Link></li>
          <li><Link href="#" className="font-medium text-amber-900">Pricing</Link></li>
          <li><Link href="#" className="font-medium text-amber-900">Resources</Link></li>
          <li><Link href="#" className="font-medium text-amber-900">Log In</Link></li>
          <button className="text-amber-900 border-2 font-medium border-amber-900 px-7 py-2 rounded-lg">Sign Up Now</button>
        </ul>
        <button className="sm:hidden text-amber-900 text-[32px] font-bold mr-4" onClick={toggleMenu}>
      {menuOpen ? 'X' : <Image src="/icons/menu-scale.svg" width={24} height={24} alt='menuscale' />}
    </button>
      </div>
      <div className={`fixed inset-0 z-50 bg-amber-100 flex flex-col justify-center items-center transform ${menuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out`}>
        <button className="absolute top-4 right-4 text-amber-900 text-3xl font-bold" onClick={closeMenu}>X</button>
        <ul className="space-y-4 text-center text-amber-900 text-2xl">
          <li><Link href="#" className="font-medium" onClick={closeMenu}>Products</Link></li>
          <li><Link href="#" className="font-medium" onClick={closeMenu}>Solutions</Link></li>
          <li><Link href="#" className="font-medium" onClick={closeMenu}>Pricing</Link></li>
          <li><Link href="#" className="font-medium" onClick={closeMenu}>Resources</Link></li>
          <li><Link href="#" className="font-medium" onClick={closeMenu}>Log In</Link></li>
          <button className="text-amber-900 border-2 font-medium border-amber-900 px-7 py-2 rounded-lg mt-4" onClick={closeMenu}>Sign Up Now</button>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
