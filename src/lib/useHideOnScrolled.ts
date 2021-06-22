import { useState, useEffect } from 'react';

const useHideOnScrolled = () => {
  const [hidden, setHidden] = useState(false);
  const [bottom, setBottom] = useState(false);

  const handleScroll = () => {
    const top = window.pageYOffset || document.documentElement.scrollTop;
    const end =
      window.innerHeight + window.scrollY >= document.body.offsetHeight - 240;
    setHidden(top !== 0);
    setBottom(end);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return { hidden, bottom };
};

export default useHideOnScrolled;
