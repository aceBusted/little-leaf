import React from 'react'

function Card() {
  return (
    <body className='bg-gray-200 flex items-center justify-center h-screen'>
      <div className='flex'>
      <div className=" transition-all duration-700 hover:scale-110">
        <div className='w-64 mx-2 bg-white rounded-md overflow-hidden shadow-md'>
            <div className='bg-gray-700 text-white px-6 py-4'>
              <h2 className='text-xl font-semibold'>Feature 1</h2>
            </div>
            <div className='p-6'>
              <p className='text-gray-700'>Content of card 1 goes here.</p>
            </div>
            <div className='bg-gray-200 px-6 py-4'>
              <p className='text-gray-600'>Additional information or actions can go here.</p>
            </div>
          </div>
      </div>

      <div className=" transition-all duration-700 hover:scale-110">
        <div className='w-64 mx-2 bg-white rounded-md overflow-hidden shadow-md'>
            <div className='bg-gray-700 text-white px-6 py-4'>
              <h2 className='text-xl font-semibold'>Feature 2</h2>
            </div>
            <div className='p-6'>
              <p className='text-gray-700'>Content of card 2 goes here.</p>
            </div>
            <div className='bg-gray-200 px-6 py-4'>
              <p className='text-gray-600'>Additional information or actions can go here.</p>
            </div>
          </div>
      </div>
      

      <div className=" transition-all duration-700 hover:scale-110">
        <div className='w-64 mx-2 bg-white rounded-md overflow-hidden shadow-md'>
            <div className='bg-gray-700 text-white px-6 py-4'>
              <h2 className='text-xl font-semibold'>Feature 3</h2>
            </div>
            <div className='p-6'>
              <p className='text-gray-700'>Content of Card 3 goes here.</p>
            </div>
            <div className='bg-gray-200 px-6 py-4'>
              <p className='text-gray-600'>Additional information or actions can go here.</p>
            </div>

        </div>
      </div>

        
      
      </div>
    </body>
  )
}

export default Card