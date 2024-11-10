import { useState, useEffect } from 'react';

export const useCarsCarouselSettings = () => {
  const [settings, setSettings] = useState({
    slidesToShow: 4,
    slidesToScroll: 4
  });

  useEffect(() => {
    const updateSettings = () => {
      const width = window.innerWidth;
      if (width < 576) {
        setSettings({ slidesToShow: 1, slidesToScroll: 1 });
      } else if (width < 768) {
        setSettings({ slidesToShow: 1, slidesToScroll: 1 });
      } else if (width < 992) {
        setSettings({ slidesToShow: 2, slidesToScroll: 2 });
      } else if (width < 1200) {
        setSettings({ slidesToShow: 3, slidesToScroll: 3 });
      } else {
        setSettings({ slidesToShow: 4, slidesToScroll: 4 });
      }
    };

    updateSettings();
    window.addEventListener('resize', updateSettings);

    return () => {
      window.removeEventListener('resize', updateSettings);
    };
  }, []);

  return settings;
};
