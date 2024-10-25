import { FC, useEffect } from 'react';
import styles from './car-for-sale-modal.module.css';
import { useNavigate } from 'react-router-dom';
import { CarsModalCarousel } from '../../cars-modal-carousel';
import { TCarForSaleModalProps } from './types';
import { ModalOverlayUI } from '../modal-overlay';

export const CarForSaleModalUI: FC<TCarForSaleModalProps> = ({
  car,
  onClose
}) => {
  const carInfoTest = [
    { title: 'Model:', value: car.model },
    { title: 'Year:', value: car.year },
    { title: 'Exterior color:', value: car.exteriorColor },
    { title: 'Interior color:', value: car.interiorColor },
    { title: 'Drivetrain:', value: car.drivetrain },
    { title: 'Fuel type:', value: car.fuelType },
    { title: 'Transmission:', value: car.transmission },
    { title: 'Engine:', value: car.engine },
    { title: 'Mileage:', value: car.mileage }
  ];

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      e.key === 'Escape' && onClose();
    };

    document.addEventListener('keydown', handleEsc);
    return () => {
      document.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);
  const navigate = useNavigate();

  return (
    <>
      <div className={styles.modal}>
        <div className={styles.carInfo}>
          <div className={styles.carMainInfo}>
            <h3 className={styles.carTitle}>{car.title}</h3>
            <div className={styles.carAdditionalInfo}>
              {carInfoTest.map((info, index) => (
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
            onClick={() => {
              navigate('/contacts');
            }}
          >
            Contact us
          </button>
        </div>
        <div className={styles.carousel}>
          <CarsModalCarousel car={car} />
        </div>
      </div>
      <ModalOverlayUI onClose={onClose} />
    </>
  );
};
