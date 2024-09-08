import React from 'react';

export const useScrollPage = () => {
  const [visible, setVisible] = React.useState(true);

  React.useEffect(() => {
    let prevScrollPos = window.scrollY;

    const handleScroll = () => {
      let currentScrollPos = window.scrollY;
      if (prevScrollPos > currentScrollPos || (currentScrollPos >= 0 && currentScrollPos <= 250)) {
        setVisible(true);
      } else {
        setVisible(false);
      }
      prevScrollPos = currentScrollPos;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return visible;
};
