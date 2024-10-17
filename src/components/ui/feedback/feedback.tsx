import { FC } from 'react';
import styles from './feedback.module.css';
import { TFeedbackProps } from './types.ts';

export const FeedbackUI: FC<TFeedbackProps> = ({ name, imgSrc, review }) => {
  return (
    <div className={styles.feedbackContainer}>
      <div className={styles.person}>
        <img src={imgSrc} alt={name} className={styles.personImg} />
        <h4 className={styles.personName}>{name}</h4>
      </div>
      <p className={styles.personReview}>{review}</p>
    </div>
  );
};
