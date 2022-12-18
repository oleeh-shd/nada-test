import { useState, useEffect } from 'react';

const useIsTablet = (): boolean => {
  const [isTablet, setIsTablet] = useState(false);
  const handlerIsTablet = (): void => {
    const width = window.innerWidth;
    setIsTablet(width < 769);
  };

  useEffect(() => {
    handlerIsTablet();

    window.addEventListener('resize', handlerIsTablet);

    return (): void => {
      window.removeEventListener('resize', handlerIsTablet);
    };
  }, []);

  return isTablet;
};

export default useIsTablet;
