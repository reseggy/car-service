interface TFeedbackProps {
  name: string;
  imgSrc: string;
  review: string;
}

interface TSettingsAdditional {
  dots: boolean;
  infinite: boolean;
  speed: number;
  slidesToShow: number;
  slidesToScroll: number;
  arrows: boolean;
}

export interface TFeedbackCarouselProps {
  feedbacks: TFeedbackProps[];
  settingsAdditional: TSettingsAdditional;
}
