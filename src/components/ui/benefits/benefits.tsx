import { FC } from 'react';
import styles from './benefits.module.css';
import { BenefitsUIProps } from './types';
import { Advantage } from '../../advantage';

export const BenefitsUI: FC<BenefitsUIProps> = ({ advantages }) => {
  return (
    <section className={styles.section}>
      <h3 className={styles.title}>Benefits</h3>
      <div className={styles.advantages}>
        {advantages.map((advantage, index) => (
          <Advantage
            key={index}
            title={advantage.title}
            text={advantage.text}
            counter={`0${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};
