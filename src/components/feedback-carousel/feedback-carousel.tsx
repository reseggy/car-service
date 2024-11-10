import { FC } from 'react';
import { TFeedbackCarouselProps } from './types.ts';
import { FeedbackCarouselUI } from '../ui/feedback-carousel';

export const FeedbackCarousel: FC<TFeedbackCarouselProps> = ({
  feedbacks,
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
    <FeedbackCarouselUI
      feedbacks={feedbacks}
      settingsAdditional={settingsAdditional}
    />
  );
};
