import { TCar } from '../../../types/types';

interface TSettingsAdditional {
  dots: boolean;
  infinite: boolean;
  speed: number;
  slidesToShow: number;
  slidesToScroll: number;
  arrows: boolean;
}

export interface TSaleCarsCarouselProps {
  cars: TCar[] | null;
  isLoading: boolean;
  settingsAdditional: TSettingsAdditional;
}
