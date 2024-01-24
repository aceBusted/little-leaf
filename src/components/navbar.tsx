import React from 'react';
import Image from 'next/image';
const Navbar: React.FC = () => {
  return (
    <nav className="bg-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
         <div className='w-20 h-20 relative'>
          <Image
          src="/logo.jpg"
          alt='Logo'
          layout='fill'
          objectFit='fill'
          className='rounded-md'
          />
        </div>
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-green-500 dark:text-white">Little Leaf</span>
        </a>
        <div className="lg:hidden">
          
          
        </div>
        <div className="hidden lg:flex space-x-4 lg:items-center">
          <a href="#" className="text-green-500 hover:bg-green-700 hover:text-white rounded-full px-3 py-1 dark:hover:bg-green-700 dark:text-white transition duration-300">Home</a>
          <a href="#" className="text-green-500 hover:bg-green-700 hover:text-white rounded-full px-3 py-1 dark:hover:bg-green-700 dark:text-white transition duration-300">About</a>
          <a href="#" className="text-green-500 hover:bg-green-700 hover:text-white rounded-full px-3 py-1 dark:hover:bg-green-700 dark:text-white transition duration-300">Services</a>
          <a href="#" className="text-green-500 hover:bg-green-700 hover:text-white rounded-full px-3 py-1 dark:hover:bg-green-700 dark:text-white transition duration-300">Contact</a>
        </div>
        <div className="hidden md:flex items-center space-x-3">
         
          <div className="relative">
            <div
              className="flex items-center text-sm text-gray-900 dark:text-white hover:bg-green-200 hover:text-green-500 rounded-full px-3 py-1 cursor-pointer transition duration-300"
              id="user-menu-button"
              data-dropdown-toggle="user-dropdown"
              data-dropdown-placement="bottom-start"
            >
              <span className="sr-only">Menu</span>
              <span>Profile</span>
              
            </div>
            <div
              className="z-50 hidden text-base list-none bg-black divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
              id="user-dropdown"
            >
              
              <div className="px-4 py-3">
                <span className="block text-sm text-gray-900 dark:text-white">Simer</span>
                <span className="block text-sm text-gray-500 truncate dark:text-gray-400">name@gmail.com</span>
              </div>
              <ul className="py-2" aria-labelledby="user-menu-button">
                <li>
                  <a href="#" className="block px-4 py-2 text-sm text-green-800 hover:bg-green-800 hover:text-white rounded-full dark:hover:bg-green-800 transition duration-300">Dashboard</a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 text-sm text-green-800 hover:bg-green-800 hover:text-white rounded-full dark:hover:bg-green-800 transition duration-300">Profile</a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 text-sm text-green-800 hover:bg-green-800 hover:text-white rounded-full dark:hover:bg-green-800 transition duration-300">Logout</a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 text-sm text-green-800 hover:bg-green-800 hover:text-white rounded-full dark:hover:bg-green-800 transition duration-300">Savings</a>
                </li>
              </ul>
            </div>
          </div>
          <div className='w-20 h-20 relative'>
          <Image
          src= "/logo.jpg"
          alt="logo"
          layout='fill'
          objectFit='cover' 
          className='rounded-md'
          />
          </div>
        </div> 
      </div>
    </nav>
  );
};

export default Navbar;
