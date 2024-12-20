export interface TCar {
  title: string;
  price: string;
  mileage: string;
  imgSrc: string;
  imgSrc2: string;
  imgSrc3: string;
  imgSrc4: string;
  imgAlt: string;
  model: string;
  year: string;
  exteriorColor: string;
  interiorColor: string;
  drivetrain: string;
  fuelType: string;
  transmission: string;
  engine: string;
  id: string;
}

export interface TServiceListElement {
  title: string;
  text: string;
  imgSrc: string;
  imgAlt: string;
}

export interface IDropdownItem {
  text: string;
  id: number;
}

export interface TAdvantage {
  title: string;
  text: string;
  imgSrc?: string;
  imgAlt?: string;
}

export interface TAboutServicesOffer {
  text: string;
}

export interface TFeedbacks {
  name: string;
  review: string;
  imgSrc: string;
}

export interface TService {
  title: string;
  text: string;
  imgSrc: string;
  imgAlt: string;
}
