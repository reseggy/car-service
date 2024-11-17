import { useState, useEffect, useCallback } from 'react';

export const useFeedbackCarouselSettings = () => {
  const [settings, setSettings] = useState({
    slidesToShow: 5,
    slidesToScroll: 5
  });

  const updateSettings = useCallback(() => {
    const width = window.innerWidth;
    if (width < 576) {
      setSettings({ slidesToShow: 1, slidesToScroll: 1 });
    } else if (width < 768) {
      setSettings({ slidesToShow: 2, slidesToScroll: 2 });
    } else if (width < 1100) {
      setSettings({ slidesToShow: 2, slidesToScroll: 2 });
    } else if (width < 1500) {
      setSettings({ slidesToShow: 3, slidesToScroll: 3 });
    } else if (width < 1850) {
      setSettings({ slidesToShow: 4, slidesToScroll: 4 });
    } else {
      setSettings({ slidesToShow: 5, slidesToScroll: 5 });
    }
  }, []);

  useEffect(() => {
    updateSettings();
    window.addEventListener('resize', updateSettings);

    return () => {
      window.removeEventListener('resize', updateSettings);
    };
  }, [updateSettings]);

  return settings;
};
