import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 mt-2 text-center md:text-left">
      <div>
        <ul className="space-y-6">
        <li><Link href="#" className="text-gray-400 hover:text-white hover:font-bold">Product</Link></li>
          <li><Link href="#" className="text-gray-400 hover:text-white hover:font-bold">Pricing</Link></li>
          <li><Link href="#" className="text-gray-400 hover:text-white hover:font-bold">Overview</Link></li>
          <li><Link href="#" className="text-gray-400 hover:text-white hover:font-bold">Browse</Link></li>
          <li><Link href="#" className="text-gray-400 hover:text-white hover:font-bold">Accessibility</Link></li>
          <li><Link href="#" className="text-gray-400 hover:text-white hover:font-bold">Five</Link></li>
        </ul>
        </div>
        <div>
          <ul className="space-y-6">
          <li><Link href="#" className="text-gray-400 hover:text-white hover:font-bold">Solutions</Link></li>
            <li><Link href="#" className="text-gray-400 hover:text-white hover:font-bold">Brainstorming</Link></li>
            <li><Link href="#" className="text-gray-400 hover:text-white hover:font-bold">Ideation</Link></li>
            <li><Link href="#" className="text-gray-400 hover:text-white hover:font-bold">Wireframing</Link></li>
            <li><Link href="#" className="text-gray-400 hover:text-white hover:font-bold">Research</Link></li>
            <li><Link href="#" className="text-gray-400 hover:text-white hover:font-bold">Design</Link></li>
          </ul>
        </div>
        <div>
          <ul className="space-y-6">
          <li><Link href="#" className="text-gray-400 hover:text-white hover:font-bold">Support</Link></li>
            <li><Link href="#" className="text-gray-400 hover:text-white hover:font-bold">Contact Us</Link></li>
            <li><Link href="#" className="text-gray-400 hover:text-white hover:font-bold">Developers</Link></li>
            <li><Link href="#" className="text-gray-400 hover:text-white hover:font-bold">Documentation</Link></li>
            <li><Link href="#" className="text-gray-400 hover:text-white hover:font-bold">Integrations</Link></li>
            <li><Link href="#" className="text-gray-400 hover:text-white hover:font-bold">Reports</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4">Get the App</h3>
          <ul className="sm:block flex flex-col items-center space-y-4 sm:space-y-6">
            <li className="mb-2 ">
              <Link href="#">
                <Image src="/App Store.png" alt="App Store" width={125} height={50} />
              </Link>
            </li>
            <li className=''>
              <Link href="#">
                <Image src="/Google play.png" alt="Google Play" width={150} height={40} />
              </Link>
            </li>
          </ul>
          <div>
          <h3 className="text-lg font-bold mb-4 mt-10">Follow Us</h3>
          <div className="flex sm:space-x-4  space-x-2 justify-center sm:justify-start items-center">
            <Link href="#" className="text-gray-400 hover:text-white"><Image alt='icon' width={18} height={15} src="/icons/facebook.svg"></Image></Link>
            <Link href="#" className="text-gray-400 hover:text-white"><Image alt='icon' width={18} height={15} src="/icons/twitter.svg"></Image></Link>
            <Link href="#" className="text-gray-400 hover:text-white"><Image alt='icon' width={18} height={15} src="/icons/youtube.svg"></Image></Link>
            <Link href="#" className="text-gray-400 hover:text-white"><Image alt='icon' width={18} height={15} src="/icons/instagram.svg"></Image></Link>
            <Link href="#" className="text-gray-400 hover:text-white"><Image alt='icon' width={18} height={15} src="/icons/linkedin.svg"></Image></Link>
          </div>
        </div>
        </div>
       
      </div>
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between mt-12 pt-8 border-t border-gray-700">
        <p className="text-gray-400">Collers @ 2023. All rights reserved.</p>
        <div className="flex space-x-10 mt-4 md:mt-0">
          <Link href="#" className="text-gray-400 hover:text-white hover:font-bold">Terms</Link>
          <Link href="#" className="text-gray-400 hover:text-white hover:font-bold">Privacy</Link>
          <Link href="#" className="text-gray-400 hover:text-white hover:font-bold">Contact</Link>
          <Link href="#" className="text-gray-400 hover:text-white hover:font-bold"><i className="fas fa-globe"></i> EN</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
