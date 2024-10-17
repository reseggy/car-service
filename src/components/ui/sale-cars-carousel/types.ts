export interface TCar {
  title: string;
  price: string;
  mileage: string;
  imgSrc: string;
  imgAlt: string;
} //TODO вынести TCar в отдельный файл

interface TSettingsAdditional {
  dots: boolean;
  infinite: boolean;
  speed: number;
  slidesToShow: number;
  slidesToScroll: number;
  arrows: boolean;
}

export interface TSaleCarsCarouselProps {
  items: TCar[];
  settingsAdditional: TSettingsAdditional;
}
