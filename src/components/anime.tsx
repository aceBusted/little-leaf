import React ,{useEffect} from "react";
import Image from "next/image";
import  'aos/dist/aos.css'

interface CardProps {
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ title, description }) => (

  <div className="w-full p-8 bg-white rounded-lg shadow-lg transform transition-transform hover:scale-105"
             >
    <h3 className="text-lg sm:text-2xl font-bold text-gray-800">{title}</h3>
    <p className="mt-2 text-sm sm:text-lg text-gray-800">{description}</p>
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
    <div className="bg-[#C2F2CE] dark:bg-green-500" id="section-features">
      <div className="mx-auto max-w-2xl py-12 px-4 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-medium tracking-tight text-black sm:text-4xl">Features</h2>
          <p className=" mt-4 text-white text-xl">These are the features</p>
        </div>
        </div>
          <div className="mt-16 mb-8 lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-8"> 
            <div className="lg:col-start-1 mt-6 lg:mt-0 lg:row-start-1 lg:col-span-5 xl:col-span-4">
              <h3 className="text-lg sm:text-2xl font-bold text-white">Bio, Links</h3>
              <p className="mt-2 text-sm sm:text-lg text-white">
                discover about all the resources present 
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
              title="Additional Feature"
              description="Custom content for the additional feature..."
            />
            </div>  
            </div>


          <div className="mt-16 mb-8 lg:grid lg:grid-cols-12 lg:items-end lg:gap-x-8">
            <div className="lg:col-start-8 xl:col-start-9 mt-6 lg:mt-0 lg:row-start-1 lg:col-span-5 xl:col-span-4">
              <h3 className="text-lg sm:text-2xl font-bold text-white">Tags</h3>
              <p className="mt-2 text-sm sm:text-lg text-white">
                search through the names 
              </p>
              </div>
            <div className="lg:col-start-8 xl:col-start-5 xl:col-span-4 flex justify-end">
              <Card
              title="Additional Feature"
              description="Custom content for the additional feature..."
            />
              </div>
          </div>


          <div className="mt-16 mb-8 lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-8">
            <div className="lg:col-start-1 mt-6 lg:mt-0 lg:row-start-1 lg:col-span-5 xl:col-span-4">
            <h3 className="text-lg sm:text-2xl font-bold text-white">Code</h3>
            <p className="mt-2 text-sm sm:text-lg text-white">Searching is easy
            </p>
            </div>
            <div className="lg:col-start-8 xl:col-start-5 flex-auto xl:col-span-4 flex justify-end">
              <Card
              title="Additional Feature"
              description="Custom content for the additional feature..."
            />
              </div>
           </div>

           <div className="mt-16 mb-8 lg:grid lg:grid-cols-12 lg:items-end lg:gap-x-8">
            <div className="lg:col-start-8 xl:col-start-9 mt-6 lg;mt-0 lg:row-start-1 lg:col-span-5 xl:col-span-4">
              <h3 className="text-lg sm:text-2xl font-bold text-white">Reporting</h3>
              <p className="mt-2 text-sm sm:text-lg text-white">
                check out your profile
              </p>
              </div>
              <div className="lg:col-start-8 xl:col-start-5 xl:col-span-4 flex justify-end pb-10">
              <Card
              title="Additional Feature"
              description="Custom content for the additional feature..."
            />
              </div>
            
          </div>



          </div>
          </>





  )
}

export default Anime