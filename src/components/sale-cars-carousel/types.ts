export interface TCar {
  title: string;
  price: string;
  mileage: string;
  imgSrc: string;
  imgAlt: string;
} //TODO вынести TCar в отдельный файл

export interface TSaleCarsCarouselProps {
  items: TCar[];
}
