import { FC } from 'react';
import styles from './our-services.module.css';
import { TOurServicesProps } from './types';
import { ServiceListElement } from '../../service-list-element';
import { Preloader } from '../preloader';

export const OurServicesUI: FC<TOurServicesProps> = ({
  servicesElements,
  isLoading,
  target
}) => {
  if (isLoading || !servicesElements) {
    return (
      <section className={`${styles.section} ${styles.sectionMain}`}>
        <Preloader />
      </section>
    );
  }

  return (
    <>
      {target === 'main' ? (
        <section className={`${styles.section} ${styles.sectionMain}`}>
          <h2 className={styles.title}>Our services</h2>
          <ul className={`${styles.list} ${styles.listMain}`}>
            {servicesElements.map((service, index) => (
              <ServiceListElement
                key={index}
                title={service.title}
                text={service.text}
                imgSrc={service.imgSrc}
                imgAlt={service.imgAlt}
                target={target}
              />
            ))}
          </ul>
        </section>
      ) : (
        <section className={`${styles.section} ${styles.sectionAdditional}`}>
          <h2 className={styles.title}>Our services</h2>
          <ul className={`${styles.list} ${styles.listAdditional}`}>
            {servicesElements.map((service, index) => (
              <ServiceListElement
                key={index}
                title={service.title}
                text={service.text}
                imgSrc={service.imgSrc}
                imgAlt={service.imgAlt}
                target={target}
              />
            ))}
          </ul>
        </section>
      )}
    </>
  );
};
