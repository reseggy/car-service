import { FC, useEffect, useRef, memo } from 'react';
import styles from './car-for-sale-modal.module.css';
import { CarsModalCarousel } from '../../cars-modal-carousel';
import { TCarForSaleModalProps } from './types';
import { ModalOverlayUI } from '../modal-overlay';

export const CarForSaleModalUI: FC<TCarForSaleModalProps> = memo(
  ({ car, onClose, carInfo, onClick }) => {
    const overlayRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const handleEsc = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          onClose();
        }
      };

      const handleClickOverlay = (e: MouseEvent) => {
        if (e.target === overlayRef.current) {
          onClose();
        }
      };

      document.addEventListener('keydown', handleEsc);
      document.addEventListener('click', handleClickOverlay);

      document.body.classList.add('no-scroll');

      return () => {
        document.removeEventListener('keydown', handleEsc);
        document.removeEventListener('click', handleClickOverlay);

        document.body.classList.remove('no-scroll');
      };
    }, [onClose]);

    return (
      <>
        <div className={`${styles.modal}`}>
          <div className={styles.carInfo}>
            <div className={styles.carMainInfo}>
              <h3 className={styles.carTitle}>{car.title}</h3>
              <div className={styles.carAdditionalInfo}>
                {carInfo.map((info, index) => (
                  <div key={index} className={styles.carInfoTextSection}>
                    <p className={`${styles.carText} ${styles.carInfoTitle}`}>
                      {info.title}
                    </p>
                    <p className={styles.carText}>{info.value}</p>
                  </div>
                ))}
              </div>
            </div>
            <button
              className={`${styles.carText} ${styles.buttonContact}`}
              onClick={onClick}
            >
              Contact us
            </button>
          </div>
          <div className={styles.carousel}>
            <CarsModalCarousel car={car} />
          </div>
        </div>
        <ModalOverlayUI onClose={onClose} ref={overlayRef} />
      </>
    );
  }
);
