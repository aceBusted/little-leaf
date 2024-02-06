// src/_app.tsx

import { useEffect } from 'react';
import dynamic from 'next/dynamic';
import { AppProps } from 'next/app'; // Import the AppProps type
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the styles
import Script from 'next/script';

const MyApp = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    // Ensure that the code only runs on the client-side
    if (typeof window !== 'undefined') {
      AOS.init({
        duration: 800, // Animation duration in milliseconds
      });
    }
  }, []);

  return <Component {...pageProps} />;
};

export default MyApp;
