'use client'

import { useEffect } from 'react';

const GoogleAnalytics = () => {
  useEffect(() => {
    const script1 = document.createElement('script');
    script1.src = 'https://www.googletagmanager.com/gtag/js?id=G-NRTM207XT5';
    script1.async = true;
    document.head.appendChild(script1);

    script1.onload = () => {
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        window.dataLayer.push(arguments);
      }
      gtag('js', new Date());
      gtag('config', 'G-NRTM207XT5');
    };

    return () => {
      // Clean up the script if the component is unmounted
      document.head.removeChild(script1);
    };
  }, []);

  return null;
};

export default GoogleAnalytics;
