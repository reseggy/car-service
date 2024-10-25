import { FC } from 'react';
import { TCarsModalCarouselProps } from './types.ts';
import { CarsModalCarouselUI } from '../ui/cars-modal-carousel';

export const CarsModalCarousel: FC<TCarsModalCarouselProps> = ({ car }) => {
  const settingsAdditional = {
    dots: true,
    fade: true,
    infinite: false,
    speed: 750,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    waitForAnimate: false
  };
  return (
    <CarsModalCarouselUI car={car} settingsAdditional={settingsAdditional} />
  );
};
