import React ,{ReactNode, useEffect} from "react";
import Image from "next/image";
import  'aos/dist/aos.css';
import { FaSolarPanel, FaChartLine, FaLeaf, FaClock } from 'react-icons/fa'

interface CardProps {
  title: string;
  description: string;
  icon?: ReactNode;
}

const Card: React.FC<CardProps> = ({ title, description }) => (

  <div className="w-full p-8 bg-white rounded-lg shadow-lg transform transition-transform hover:scale-105"
             >
    <h3 className="text-lg sm:text-2xl hover:font-bold font-bold text-gray-800">{title}</h3>
    <p className="mt-2 text-sm sm:text-lg text-gray-800 leading-tight">{description}</p>
  </div>
);

const Anime = () => {
  useEffect(() => {
    // Import AOS dynamically to ensure it's executed on the client side
    import('aos').then((aos) => {
      // Initialize AOS
      aos.init({
        duration: 600, // Animation duration in milliseconds
        // Add any other AOS options here
      });
    });
  }, []);


  return (

    <>
    <div className="bg-green-500 dark:bg-green-500" id="section-features">
      <div className="mx-auto max-w-2xl py-12 px-4 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-medium tracking-tight text-white sm:text-4xl">Steps to Use Our Website</h2>
          <p className=" mt-4 text-white text-xl">Discover the power of solar energy based on your location</p>
        </div>
        </div>
          <div className="mt-16 lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-8"> 
            <div className="lg:col-start-1 mt-6 lg:mt-0 lg:row-start-1 lg:col-span-5 xl:col-span-4">
              <h3 className="text-lg sm:text-2xl  font-extrabold text-white">Step 1: Enable Location Services</h3>
              <p className="mt-2 text-sm sm:text-lg  font-semibold text-white">
             
              </p>
            </div>

            <div className="lg:col-start-8 xl:col-start-5 xl:col-span-4 flex justify-end"
             data-aos='fade-up'
             data-aos-delay="100"
             data-aos-duration="1000"
             data-aos-easing="ease-in-out"
             data-aos-mirror="true"
             data-aos-once="true">
              <Card
              title="Enable Location Services 🌍"
              description=" Make sure your device's location services are enabled to provide accurate solar energy information based on your live location."
  icon={<FaSolarPanel size={40} />}
            />
            </div>  
            </div>


          <div className="mt-16 lg:grid lg:grid-cols-12 lg:items-end lg:gap-x-8">
            <div className="lg:col-start-8 xl:col-start-9 mt-6 lg:mt-0 lg:row-start-1 lg:col-span-5 xl:col-span-4">
              <h3 className="text-lg sm:text-2xl  font-extrabold text-white">Step 2: Explore Nearby Solar Sources</h3>
              <p className="mt-2 text-sm sm:text-lg font-semibold text-white">
              
              </p>
              </div>
            <div className="lg:col-start-8 xl:col-start-5 xl:col-span-4 flex justify-end">
              <Card
              title="Explore Nearby Solar Sources 🔮"
              description="Once location services are enabled, click on the animated card below to discover the nearest solar energy sources in your vicinity."
              icon={<FaChartLine size={40} />}
            />
              </div>
          </div>


          <div className="mt-16 lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-8">
            <div className="lg:col-start-1 mt-6 lg:mt-0 lg:row-start-1 lg:col-span-5 xl:col-span-4">
            <h3 className="text-lg sm:text-2xl font-extrabold text-white">Step 3: View Real-time Solar Data</h3>
            <p className="mt-2 text-sm sm:text-lg font-semibold text-white"> 
            </p>
            </div>
            <div className="lg:col-start-8 xl:col-start-5 flex-auto xl:col-span-4 flex justify-end">
              <Card
              title="Use the Solar Calculator ⚡"
              description="Once you've explored nearby solar sources, click on the Solar Power Calculator option to view live solar data for your location. This includes other relevant information."
              icon={<FaLeaf size={40} />}
            />
              </div>
           </div>

           <div className="mt-16 lg:grid lg:grid-cols-12 lg:items-end lg:gap-x-8">
            <div className="lg:col-start-8 xl:col-start-9 mt-6 lg;mt-0 lg:row-start-1 lg:col-span-5 xl:col-span-4">
              <h3 className="text-lg sm:text-2xl  font-extrabold text-white">Step 4: Plan Your Energy Usage</h3>
              <p className="mt-2 text-sm sm:text-lg  font-semibold text-white">
              </p>
              </div>
              <div className="lg:col-start-8 xl:col-start-5 xl:col-span-4 flex justify-end pb-10">
              <Card
              title="Plan Your Energy Usage 📅"
              description="Make informed decisions by planning your energy usage based on the provided solar data. Optimize the timing of energy consumption during peak solar hours for efficiency and cost-effectiveness."
              icon={<FaClock size={40} />}
            />
              </div>
            
          </div>



          </div>
          </>





  )
}

export default Anime