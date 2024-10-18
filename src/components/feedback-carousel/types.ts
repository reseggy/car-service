interface TFeedbackProps {
  name: string;
  imgSrc: string;
  review: string;
}

export interface TFeedbackCarouselProps {
  feedbacks: TFeedbackProps[];
}
