import { FC } from 'react';
import { TFeedbackCarouselProps } from './types.ts';
import { FeedbackCarouselUI } from '../ui/feedback-carousel';

export const FeedbackCarousel: FC<TFeedbackCarouselProps> = ({ feedbacks }) => {
  const settingsAdditional = {
    dots: true,
    infinite: false,
    speed: 750,
    slidesToShow: 5,
    slidesToScroll: 5,
    arrows: false
  };
  return (
    <FeedbackCarouselUI
      feedbacks={feedbacks}
      settingsAdditional={settingsAdditional}
    />
  );
};
