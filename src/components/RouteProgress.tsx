'use client';

import { usePathname } from 'next/navigation';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { useEffect } from 'react';

// Configure NProgress
NProgress.configure({ 
  showSpinner: false,
  minimum: 0.3,
  easing: 'ease',
  speed: 800,
});

export default function RouteProgress() {
  const pathname = usePathname();

  useEffect(() => {
    const handleStart = () => {
      NProgress.start();
    };
    
    const handleStop = () => {
      NProgress.done();
    };

    handleStop(); // In case the page has already loaded
  }, [pathname]);

  return null;
} 