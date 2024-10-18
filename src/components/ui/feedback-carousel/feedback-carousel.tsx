import { FC } from 'react';
import { TFeedbackCarouselProps } from './types';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './feedback-carousel.module.css';
import { Feedback } from '../../feedback';

export const FeedbackCarouselUI: FC<TFeedbackCarouselProps> = ({
  feedbacks,
  settingsAdditional
}) => {
  const settings = {
    ...settingsAdditional,
    appendDots: (dots: React.ReactNode) => (
      <div className={styles.dotsContainer}>
        <ul className={styles.dotsList}> {dots} </ul>
      </div>
    ),
    customPaging: () => <div className={styles.dot}></div>
  };

  return (
    <section className={styles.feedbackSection}>
      <div className={styles.sectionTitle}>
        <h2 className={styles.title}>Testimonial</h2>
        <p className={styles.text}>
          Our customers’ feedback is the best recommendation! Find out why they
          choose us to service their vehicles. Professionalism, quality and
          taking care of your vehicle is our priority.
        </p>
      </div>
      <Slider {...settings} className={styles.carouselContainer}>
        {feedbacks.map((item, index) => (
          <div key={index} className={styles.carouselItem}>
            <Feedback {...item} />
          </div>
        ))}
      </Slider>
    </section>
  );
};
