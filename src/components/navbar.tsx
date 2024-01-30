import React from 'react';
import Image from 'next/image';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

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
              className="flex items-center text-sm text-green-500 dark:text-white hover:bg-green-700 hover:text-white rounded-full px-3 py-1 cursor-pointer transition duration-300"
              id="user-menu-button"
              data-dropdown-toggle="user-dropdown"
              data-dropdown-placement="bottom-start"
            >
              <span className="sr-only">Menu</span>
              <span><DropdownMenu>

<DropdownMenuTrigger className='rounded-md'>Profile</DropdownMenuTrigger>
<DropdownMenuContent>
  <DropdownMenuLabel>My Account</DropdownMenuLabel>
  <DropdownMenuSeparator />
  <DropdownMenuItem>Profile</DropdownMenuItem>
  <DropdownMenuItem>Billing</DropdownMenuItem>
  <DropdownMenuItem>Team</DropdownMenuItem>
  <DropdownMenuItem>Subscription</DropdownMenuItem>
</DropdownMenuContent>
</DropdownMenu></span>
              
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
