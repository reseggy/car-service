import { FC } from 'react';
import { FeedbackUI } from '../ui/feedback';
import { TFeedbackProps } from './types.ts';

export const Feedback: FC<TFeedbackProps> = ({ name, imgSrc, review }) => {
  return <FeedbackUI name={name} imgSrc={imgSrc} review={review} />;
};
