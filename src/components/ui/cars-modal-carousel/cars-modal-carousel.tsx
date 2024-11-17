import { FC, useState, memo } from 'react';
import { TCarsModalCarouselProps } from './types';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './cars-modal-carousel.module.css';
import arrowImg from '@assets/svg/arrowCarousel.svg';

interface TArrow {
  onClick: () => void;
  disabled?: boolean;
}

export const CarsModalCarouselUI: FC<TCarsModalCarouselProps> = memo(
  ({ car, settingsAdditional }) => {
    const images = [car.imgSrc, car.imgSrc2, car.imgSrc3, car.imgSrc4];
    const [currentSlide, setCurrentSlide] = useState(0);

    function SampleNextArrow(props: TArrow) {
      const { onClick, disabled } = props;
      return (
        <div
          onClick={!disabled ? onClick : undefined}
          className={`${styles.arrowContainer} ${styles.nextArrowContainer} ${disabled ? styles.arrowContainerDisabled : ''}`}
        >
          <img
            className={`${styles.arrowIcon} ${styles.arrowIconNext}`}
            src={arrowImg}
            alt='arrow next icon'
          />
        </div>
      );
    }

    function SamplePrevArrow(props: TArrow) {
      const { onClick, disabled } = props;
      return (
        <div
          className={`${styles.prevArrowContainer} ${styles.arrowContainer} ${disabled ? styles.arrowContainerDisabled : ''}`}
          onClick={!disabled ? onClick : undefined}
        >
          <img
            className={`${styles.arrowIcon} ${styles.arrowIconPrev}`}
            src={arrowImg}
            alt='arrow prevent icon'
          />
        </div>
      );
    }

    const settings = {
      ...settingsAdditional,
      dotsClass: styles.dotsContainer,
      customPaging: function (i: number) {
        return (
          <a className={styles.dotLink}>
            <img src={images[i]} alt={car.imgAlt} className={styles.dotImage} />
          </a>
        );
      },
      nextArrow: (
        <SampleNextArrow
          onClick={() => {}}
          disabled={currentSlide === images.length - 1}
        />
      ),
      prevArrow: (
        <SamplePrevArrow onClick={() => {}} disabled={currentSlide === 0} />
      ),
      beforeChange: (oldIndex: number, newIndex: number) =>
        setCurrentSlide(newIndex)
    };

    return (
      <div className={styles.carousel}>
        <Slider {...settings} className={styles.carouselContainer}>
          {images.map((image, index) => (
            <button key={index} className={styles.button}>
              <img src={image} alt={car.imgAlt} className={styles.mainImg} />
            </button>
          ))}
        </Slider>
      </div>
    );
  }
);
