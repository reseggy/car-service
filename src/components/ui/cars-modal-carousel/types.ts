import { TCar } from '../../../types/types';

interface TSettingsAdditional {
  dots: boolean;
  infinite: boolean;
  speed: number;
  slidesToShow: number;
  slidesToScroll: number;
  arrows: boolean;
}

export interface TCarsModalCarouselProps {
  car: TCar;
  settingsAdditional: TSettingsAdditional;
}
