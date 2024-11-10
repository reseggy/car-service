import { FC } from 'react';
import { TSaleCarsCarouselProps } from './types.ts';
import { SaleCarsCarouselUI } from '../ui/sale-cars-carousel';

export const SaleCarsCarousel: FC<TSaleCarsCarouselProps> = ({
  items,
  slidesToShow,
  slidesToScroll
}) => {
  const settingsAdditional = {
    dots: true,
    infinite: false,
    speed: 750,
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToScroll,
    arrows: false
  };
  return (
    <SaleCarsCarouselUI items={items} settingsAdditional={settingsAdditional} />
  );
};
