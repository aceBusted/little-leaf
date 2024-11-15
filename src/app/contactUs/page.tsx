
import React from 'react'
import Navbar from '../../components/navbar'
import Footer from '@/components/footer'

function contactus() {
  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-2xl w-full">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Contact Us</h1>
        <p className="text-gray-500 text-sm mb-4 text-center">
          Last updated on 15-11-2024 13:51:01
        </p>
        <div className="text-gray-700 space-y-4">
          <p>
            You may contact us using the information below:
          </p>
          <div>
            <p className="font-semibold">Merchant Legal Entity Name:</p>
            <p>AMAN KUMAR SAH</p>
          </div>
          <div>
            <p className="font-semibold">Registered Address:</p>
            <p>hn 47 Ranjit Road, Jalandhar, Punjab, PIN: 144005</p>
          </div>
          <div>
            <p className="font-semibold">Operational Address:</p>
            <p>hn 47 Ranjit Road, Jalandhar, Punjab, PIN: 144005</p>
          </div>
          <div>
            <p className="font-semibold">Telephone No:</p>
            <p>7973203910</p>
          </div>
          <div>
            <p className="font-semibold">E-Mail ID:</p>
            <p>
              <a
                href="mailto:aman.dev.new@gmail.com"
                className="text-blue-500 hover:underline"
              >
                aman.dev.new@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
    <Footer /> 
    

    </>

  )
}

export default contactus