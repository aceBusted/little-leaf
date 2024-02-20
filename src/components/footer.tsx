// Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <section style={{ position: 'relative', minHeight: '100vh' }}>
        <section style={{ position: 'absolute', bottom: 1, left: 0, width: '100%' }} className='bg-black-700 flex justify-center'>
            <footer className="py-6 dark:bg-gray-800 dark:text-gray-50">
	              <div className="container px-6 mx-auto space-y-6 divide-y dark:divide-gray-400 md:space-y-12 divide-opacity-50">
	              	<div className="grid grid-cols-12">
	              		<div className="pb-6 col-span-full md:pb-0 md:col-span-6">
	              			<a rel="noopener noreferrer" href="#" className="flex justify-center space-x-3 md:justify-start">
	              				<div className="flex items-center justify-center w-12 h-12 rounded-full dark:bg-violet-400">
	              					<img src="./logo.png" ></img>
	              				</div>
	              				<span className="self-center text-2xl font-semibold">Little Leaf</span>
	              			</a>
	              		</div>
	              		<div className="col-span-3 flex justify-center items-center text-center md:text-left md:col-span-3">
	              			<ul className="flex space-x-6">
	              				<li>
	              					<a rel="noopener noreferrer" href="#" className="hover:dark:text-violet-400">Home</a>
	              				</li>
	              				<li>
	              					<a rel="noopener noreferrer" href="#" className="hover:dark:text-violet-400">About</a>
	              				</li>
	              				<li>
	              					<a rel="noopener noreferrer" href="#" className="hover:dark:text-violet-400">Services</a>
	              				</li>
	              				<li>
	              					<a rel="noopener noreferrer" href="#" className="hover:dark:text-violet-400">Contact</a>
	              				</li>
	              			</ul>
	              		</div>
	              	</div>
	              	<div className="grid justify-center items-center pt-6 lg:justify-between">
	              		<div className="flex flex-col self-center text-sm text-center md:block lg:col-start-1 md:space-x-6">
	              			<span>©2024 All rights reserved</span>
	              			<a rel="noopener noreferrer" href="#">
	              				<span>Privacy policy</span>
	              			</a>
	              			<a rel="noopener noreferrer" href="#">
	              				<span>Terms of service</span>
	              			</a>
	              		</div>
	              	</div>
	              </div>
            </footer>
        </section>
    </section>
  );
};

export default Footer;
