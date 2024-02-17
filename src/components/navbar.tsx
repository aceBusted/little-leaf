import React from 'react';
import Image from 'next/image';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse transition-transform transform hover:scale-105">
         <div className='w-10 h-10 relative'>
          <Image
          src="/logo.png"
          alt='Logo'
          layout='fill'
          objectFit='fill'
          className='rounded-md'
          />
        </div>
          <span className="self-center text-3xl font-extrabold whitespace-nowrap text-black dark:text-white transition-colors hover:text-green-700">Little Leaf</span>
        </a>
        <div className="hidden lg:flex space-x-4 lg:items-center">
        <a href="/" className="text-black hover:text-green-700 hover:font-bold font-bold hover:outline-none rounded-full px-4 py-2 dark:hover:bg-green-100 dark:text-green-700 dark:hover:text-white transform transition-transform hover:scale-105">Home</a>
        <a href="/about" className="text-black hover:text-green-700 hover:font-bold font-bold hover:outline-none rounded-full px-4 py-2 dark:hover:bg-green-100 dark:text-green-700 dark:hover:text-white transform transition-transform hover:scale-105">About</a>
        <a href="/services" className="text-black hover:text-green-700 hover:font-bold font-bold hover:outline-none rounded-full px-4 py-2 dark:hover:bg-green-100 dark:text-green-700 dark:hover:text-white transform transition-transform hover:scale-105">Services</a>
        <a href="/contact" className="text-black hover:text-green-700 hover:font-bold font-bold hover:outline-none rounded-full px-4 py-2 dark:hover:bg-green-100 dark:text-green-700 dark:hover:text-white transform transition-transform hover:scale-105">Contact</a>
        </div>
        <div className="hidden md:flex items-center space-x-3">
          <div className='w-16 h-16 relative'>
         
          </div>
        </div>    
      </div>
    </nav>
  );
};

export default Navbar;
