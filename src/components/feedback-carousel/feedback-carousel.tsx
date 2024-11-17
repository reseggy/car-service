import { FC } from 'react';
import { TFeedbackCarouselProps } from './types.ts';
import { FeedbackCarouselUI } from '../ui/feedback-carousel';

import { useDispatch, useSelector } from '../../store/store';
import { RootState } from '../../store/store';
import { fetchFeedbacks } from '../../slices/feedbacksSlice';
import { useEffect } from 'react';

export const FeedbackCarousel: FC<TFeedbackCarouselProps> = ({
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

  const dispatch = useDispatch();
  const { feedbacks, isLoading } = useSelector(
    (state: RootState) => state.feedbacks
  );

  useEffect(() => {
    dispatch(fetchFeedbacks());
  }, [dispatch]);

  return (
    <FeedbackCarouselUI
      feedbacks={feedbacks}
      isLoading={isLoading}
      settingsAdditional={settingsAdditional}
    />
  );
};
