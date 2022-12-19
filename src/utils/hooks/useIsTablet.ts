import { useState, useEffect } from 'react';

const TABLET_SIZE = 769;

const useIsTablet = (): boolean => {
  const [isTablet, setIsTablet] = useState(false);
  const handlerIsTablet = (): void => {
    setIsTablet(window.innerWidth < TABLET_SIZE);
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
