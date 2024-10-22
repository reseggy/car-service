interface TSaleCar {
  title: string;
  price: string;
  mileage: string;
  imgSrc: string;
  imgAlt: string;
}

export interface TSaleCarsProps {
  items: TSaleCar[];
}
