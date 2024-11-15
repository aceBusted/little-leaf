import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import React from 'react'

function termsandcondition() {
  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-4xl w-full">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Terms & Conditions
        </h1>
        <p className="text-gray-500 text-sm mb-4 text-center">
          Last updated on 15-11-2024 13:52:13
        </p>
        <div className="text-gray-700 space-y-4 text-justify">
          <p>
            These Terms and Conditions, along with the Privacy Policy or other terms
            (“Terms”), constitute a binding agreement by and between AMAN KUMAR SAH
            (“Website Owner” or “we” or “us” or “our”) and you (“you” or “your”) and relate to
            your use of our website, goods (as applicable), or services (as applicable)
            (collectively, “Services”).
          </p>
          <p>
            By using our website and availing the Services, you agree that you have read and
            accepted these Terms (including the Privacy Policy). We reserve the right to modify
            these Terms at any time and without assigning any reason. It is your responsibility
            to periodically review these Terms to stay informed of updates.
          </p>
          <p>
            <strong>The use of this website or availing of our Services is subject to the following terms of use:</strong>
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              To access and use the Services, you agree to provide true, accurate, and
              complete information to us during and after registration and shall be responsible
              for all acts done through the use of your registered account.
            </li>
            <li>
              Neither we nor any third parties provide any warranty or guarantee as to the
              accuracy, timeliness, performance, completeness, or suitability of the
              information and materials offered on this website or through the Services.
            </li>
            <li>
              Your use of our Services and the website is solely at your own risk and discretion.
              You are required to independently assess and ensure that the Services meet your
              requirements.
            </li>
            <li>
              The contents of the Website and the Services are proprietary to Us, and you will
              not claim any intellectual property rights, title, or interest in its contents.
            </li>
            <li>
              Unauthorized use of the Website or the Services may lead to action against you
              as per these Terms or applicable laws.
            </li>
            <li>
              You agree to pay us the charges associated with availing the Services.
            </li>
            <li>
              You agree not to use the website and/or Services for any unlawful or illegal
              purpose.
            </li>
            <li>
              You acknowledge that the website and Services may contain links to third-party
              websites. Accessing these links will be governed by the terms of use of such
              websites.
            </li>
            <li>
              You understand that upon initiating a transaction for availing the Services, you
              are entering into a legally binding contract with us.
            </li>
            <li>
              You may claim a refund if we fail to provide the Service, within the timelines
              stated in our policies.
            </li>
            <li>
              Neither party shall be liable for a failure to perform obligations if delayed by a
              force majeure event.
            </li>
            <li>
              These Terms are governed by the laws of India, and disputes are subject to the
              exclusive jurisdiction of the courts in Jalandhar, Punjab.
            </li>
          </ul>
          <p>
            All concerns or communications relating to these Terms must be communicated to
            us using the contact information provided on this website.
          </p>
        </div>
      </div>
    </div>
    <Footer /> 
    </>
  )
}

export default termsandcondition