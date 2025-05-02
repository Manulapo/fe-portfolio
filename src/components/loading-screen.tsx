import React, { useState, useEffect } from 'react';
import portfolio_logo_screen from '@/assets/images/portfolio_logo_screen.png';
import { Loader2 } from 'lucide-react';

type DelayedLoaderProps = {
  delay: number;
  className?: string;
  children?: React.ReactNode;
};

const DelayedLoader: React.FC<DelayedLoaderProps> = ({
  delay,
  className,
  children,
}) => {
  const [isLoading, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return !isLoading ? (
    <div className='flex flex-col items-center justify-center w-full h-screen bg-white'>
      <img
        src={portfolio_logo_screen}
        className="flex items-center justify-center w-50 md:w-70 animate-pulse"
      />
      <Loader2 className={`md:w-10 md:h-10 w-7 h-7 animate-spin mt-5 text-gray-200 ${className}`} />
    </div>
  ) : (
    children
  );
};

export default DelayedLoader;
