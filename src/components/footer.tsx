// Footer.jsx
import React from 'react';

const Footer = () => {
  return (
	<>
	<footer className="bg-gray-100">
	<div className="mx-auto max-w-5xl content-center bottom-0 justify-center  items-center p-10">
	  <div className="flex justify-center text-teal-600">
	  <svg width="100" height="100" viewBox="0 0 313 226" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="200" height="200" fill="#00000"/>
<path d="M83.9582 180.988C82.7041 179.686 82 177.925 82 176.089C82 174.253 82.7041 172.491 83.9582 171.19L102.976 151.552C97.9969 140.665 96.557 128.408 98.8708 116.607C101.185 104.805 107.128 94.0924 115.816 86.0643C149.724 51.067 202.327 58.7053 202.327 58.7053C203.475 70.1053 203.154 81.6121 201.372 92.9249H169.212L194.428 118.972C190.158 129.846 183.845 139.739 175.854 148.08C168.083 157.053 157.713 163.192 146.29 165.583C134.867 167.974 123.001 166.49 112.461 161.35L93.4234 180.988C92.1644 182.277 90.4635 183 88.6908 183C86.9181 183 85.2171 182.277 83.9582 180.988Z" fill="#097500"/>
</svg>
<div className='self-center text-2xl font-bold  '>Liitle-Leaf</div>
	  </div>
  
	  <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500">
	  Find nearby resources, connect with local initiatives, and get personalized tips to reduce your footprint. Join the movement for a greener future!
	  </p>
  
	  <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
		<li>
		  <a className="text-gray-700 transition hover:text-gray-700/75" href="#"> About </a>
		</li>
  
		<li>
		  <a className="text-gray-700 transition hover:text-gray-700/75" href="#"> History </a>
		</li>
  
		<li>
		  <a className="text-gray-700 transition hover:text-gray-700/75" href="#"> Services </a>
		</li>

		<li>
		  <a className="text-gray-700 transition hover:text-gray-700/75" href="#"> Blog </a>
		</li>
	  </ul>
  
	  <ul className="mt-12 flex justify-center gap-6 md:gap-8">
  
		<li>
		  <a
			href="https://youtu.be/kshUwof1XF0"
			rel="noreferrer"
			target="_blank"
			className="text-gray-700 transition hover:text-gray-700/75"
		  >
			<span className="sr-only">Youtube</span>
			<svg width="24px" height="24px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M14 12L10.5 14V10L14 12Z" fill="#000000" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M2 12.7075V11.2924C2 8.39705 2 6.94939 2.90549 6.01792C3.81099 5.08645 5.23656 5.04613 8.08769 4.96549C9.43873 4.92728 10.8188 4.8999 12 4.8999C13.1812 4.8999 14.5613 4.92728 15.9123 4.96549C18.7634 5.04613 20.189 5.08645 21.0945 6.01792C22 6.94939 22 8.39705 22 11.2924V12.7075C22 15.6028 22 17.0505 21.0945 17.9819C20.189 18.9134 18.7635 18.9537 15.9124 19.0344C14.5613 19.0726 13.1812 19.1 12 19.1C10.8188 19.1 9.43867 19.0726 8.0876 19.0344C5.23651 18.9537 3.81097 18.9134 2.90548 17.9819C2 17.0505 2 15.6028 2 12.7075Z" stroke="#000000" stroke-width="1.5"></path></svg>
		  </a>
		</li>
  
		<li>
		  <a
			href="https://github.com/aceBusted/little-leaf/tree/dev"
			rel="noreferrer"
			target="_blank"
			className="text-gray-700 transition hover:text-gray-700/75"
		  >
			<span className="sr-only">GitHub</span>
			<svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
			  <path
				fill-rule="evenodd"
				d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
				clip-rule="evenodd"
			  />
			</svg>
		  </a>
		</li>
  
		
	  </ul>
	</div>
  </footer>
  </>
  );
};

export default Footer;
