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
          <h2 className="text-2xl font-medium tracking-tight text-white sm:text-4xl">Features</h2>
          <p className=" mt-4 text-white text-xl"></p>
        </div>
        </div>
          <div className="mt-16 lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-8"> 
            <div className="lg:col-start-1 mt-6 lg:mt-0 lg:row-start-1 lg:col-span-5 xl:col-span-4">
              <h3 className="text-lg sm:text-2xl  font-extrabold text-white">Optimized Power Generation</h3>
              <p className="mt-2 text-sm sm:text-lg  font-semibold text-white">
              Maximize energy efficiency with our advanced algorithms that optimize power generation based on environmental conditions. 
              </p>
            </div>

            <div className="lg:col-start-8 xl:col-start-5 xl:col-span-4 flex justify-end"
             data-aos='fade-up'
             data-aos-delay="20"
             data-aos-duration="1000"
             data-aos-easing="ease-in-out"
             data-aos-mirror="true"
             data-aos-once="true">
              <Card
              title="Optimized Power Generation 🌞"
              description="Little Leaf ensures efficient utilization of solar energy, contributing to a sustainable and eco-friendly future."
  icon={<FaSolarPanel size={40} />}
            />
            </div>  
            </div>


          <div className="mt-16 lg:grid lg:grid-cols-12 lg:items-end lg:gap-x-8">
            <div className="lg:col-start-8 xl:col-start-9 mt-6 lg:mt-0 lg:row-start-1 lg:col-span-5 xl:col-span-4">
              <h3 className="text-lg sm:text-2xl  font-extrabold text-white">Empowering the Future with Sustainable Energy</h3>
              <p className="mt-2 text-sm sm:text-lg font-semibold text-white">
              Get insights into future power generation trends through advanced forecasting techniques. Discover the innovative features that make Little Leaf a leader in sustainable energy solutions. From optimized power generation to predictive analysis, we're committed to creating a greener and more efficient world.
              </p>
              </div>
            <div className="lg:col-start-8 xl:col-start-5 xl:col-span-4 flex justify-end">
              <Card
              title="Future Prediction of Power Generation 🔮"
              description="Little Leaf's predictive analysis helps you plan efficiently and adapt to changing energy demands."
              icon={<FaChartLine size={40} />}
            />
              </div>
          </div>


          <div className="mt-16 lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-8">
            <div className="lg:col-start-1 mt-6 lg:mt-0 lg:row-start-1 lg:col-span-5 xl:col-span-4">
            <h3 className="text-lg sm:text-2xl font-extrabold text-white">Solving Climatal Issues</h3>
            <p className="mt-2 text-sm sm:text-lg font-semibold text-white">Little Leaf tackles climatal issues by harnessing the power of renewable sources near you. Our clean energy solutions contribute to saving the planet, creating a sustainable and eco-friendly environment for generations to come.
            </p>
            </div>
            <div className="lg:col-start-8 xl:col-start-5 flex-auto xl:col-span-4 flex justify-end">
              <Card
              title="Renewable Energy Solutions 🌿"
              description="Utilize clean energy from local sources to combat climatal issues. Little Leaf's renewable energy solutions are designed to make a positive impact on the environment and promote a greener planet."
              icon={<FaLeaf size={40} />}
            />
              </div>
           </div>

           <div className="mt-16 lg:grid lg:grid-cols-12 lg:items-end lg:gap-x-8">
            <div className="lg:col-start-8 xl:col-start-9 mt-6 lg;mt-0 lg:row-start-1 lg:col-span-5 xl:col-span-4">
              <h3 className="text-lg sm:text-2xl  font-extrabold text-white">Feature 4: 24*7 Availability, Reliable and Trustworthy Product</h3>
              <p className="mt-2 text-sm sm:text-lg  font-semibold text-white">
              Experience the unparalleled advantages of Little Leaf's energy solutions, ensuring 24*7 availability, reliability, and a trustworthy product. Our commitment to accessibility, sustainability, and scalability sets us apart in the industry.
              </p>
              </div>
              <div className="lg:col-start-8 xl:col-start-5 xl:col-span-4 flex justify-end pb-10">
              <Card
              title="Uninterrupted Availability 🌐"
              description="Little Leaf provides round-the-clock availability, ensuring a continuous and reliable energy supply. Experience peace of mind with our commitment to accessibility and sustainability, offering a trustworthy and scalable product for your energy needs."
              icon={<FaClock size={40} />}
            />
              </div>
            
          </div>



          </div>
          </>





  )
}

export default Anime