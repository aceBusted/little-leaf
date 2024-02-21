import React, { useEffect } from 'react';
import 'aos/dist/aos.css';

const Hero = () => {
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
    <div>
      <section className="bg-gray-50">
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
          <div className="mx-auto max-w-xl text-center">
            <h1
              className="text-3xl font-extrabold sm:text-5xl"
              data-aos="fade-down"
              data-aos-delay="20"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="true"
            >
              Optimize your Power To
              <strong className="font-extrabold text-green-500 sm:block"> Reduce Pollution </strong>
            </h1>

            <div>
              <p className="mt-4 sm:text-xl/relaxed" 
               data-aos="zoom-in"
               data-aos-delay="20"
               data-aos-duration="1000"
               data-aos-easing="ease-in-out"
               data-aos-mirror="true"
               data-aos-once="true">
                We are giving the best solution to reduce your footprint on the environment.👣
              </p>
            </div>

            <div
              className="mt-8 flex flex-wrap justify-center gap-4"
              data-aos="fade-right"
              data-aos-delay="20"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
            >
              <a
                className="block w-full rounded bg-green-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-green-700 focus:outline-none focus:ring active:bg-green-500 sm:w-auto"
                href="https://solar-potential-sysvwjoziq-uc.a.run.app/" target='_blank'
              >
                Get Started
              </a>

              <a
                className="block w-full rounded px-12 py-3 text-sm font-medium text-green-600 shadow hover:text-green-700 focus:outline-none focus:ring active:text-green-500 sm:w-auto"
                href="/about"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
