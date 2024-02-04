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
         <div className='w-20 h-20 relative'>
          <Image
          src="/logo.jpg"
          alt='Logo'
          layout='fill'
          objectFit='fill'
          className='rounded-md'
          />
        </div>
          <span className="self-center text-3xl font-extrabold whitespace-nowrap text-green-500 dark:text-white transition-colors hover:text-green-700">Little Leaf</span>
        </a>
        <div className="lg:hidden">
          <div className='flex items-center space-x-4'>
          <div className="relative">
              <div
                className="flex items-center sm:text-left text-green-600 dark:text-white hover:bg-green-100 hover:text-green-700 rounded-full px-4 py-2 cursor-pointer transform transition-transform hover:scale-105"
                id="user-menu-button"
                data-dropdown-toggle="user-dropdown"
                data-dropdown-placement="bottom-start"
              >
                <span className="sr-only">Menu</span>
                <span>
                  <DropdownMenu>
                    <DropdownMenuTrigger><button className='focus:outline-none'>Profile</button></DropdownMenuTrigger>
                    <DropdownMenuContent>

                      <div>
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Profile</DropdownMenuItem>
                        <DropdownMenuItem>Billing</DropdownMenuItem>
                        <DropdownMenuItem>Team</DropdownMenuItem>
                        <DropdownMenuItem>Subscription</DropdownMenuItem>
                      </div>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </span>
              </div>
            </div>
          </div>
          
        </div>
        <div className="hidden lg:flex space-x-4 lg:items-center">
          <a href="/" className="text-green-600 hover:bg-green-100 hover:text-green-700 rounded-full px-4 py-2 dark:hover:bg-green-100 dark:text-green-700 dark:hover:text-white transform transition-transform hover:scale-105">Home</a>
          <a href="/about" className="text-green-600 hover:bg-green-100 hover:text-green-700 rounded-full px-4 py-2 dark:hover:bg-green-100 dark:text-green-700 dark:hover:text-white transform transition-transform hover:scale-105">About</a>
          <a href="/services" className="text-green-600 hover:bg-green-100 hover:text-green-700 rounded-full px-4 py-2 dark:hover:bg-green-100 dark:text-green-700 dark:hover:text-white transform transition-transform hover:scale-105">Services</a>
          <a href="/contact" className="text-green-600 hover:bg-green-100 hover:text-green-700 rounded-full px-4 py-2 dark:hover:bg-green-100 dark:text-green-700 dark:hover:text-white transform transition-transform hover:scale-105">Contact</a>
        
        </div>
        <div className="hidden md:flex items-center space-x-3">
         
          <div className="relative">
            <div
              className="flex items-center text-sm text-green-600 hover:bg-green-100 hover:text-green-700 rounded-full px-4 py-2 cursor-pointer dark:hover:bg-gree -100 dark:text-green-700 dark:hover:text-white transform transition-transform hover:scale-105"
              id="user-menu-button"
              data-dropdown-toggle="user-dropdown"
              data-dropdown-placement="bottom-start"
            >
              <span className="sr-only">Menu</span>
              <span><DropdownMenu>

<DropdownMenuTrigger><button>Profile</button></DropdownMenuTrigger>
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
          <div className='w-16 h-16 relative'>
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
