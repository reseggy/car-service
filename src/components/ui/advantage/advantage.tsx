import { IAdvantageProps } from './types';
import { FC } from 'react';
import styles from './advantage.module.css';

export const AdvantageUI: FC<IAdvantageProps> = ({
  title,
  text,
  imgSrc,
  imgAlt
}) => {
  return (
    <div className={styles.advantages}>
      <img src={imgSrc} alt={imgAlt} className={styles.advantagesIcon} />
      <div className={styles.advantagesText}>
        <h3 className={styles.advantagesTitle}>{title}</h3>
        <p className={styles.subsectionText}>{text}</p>
      </div>
    </div>
  );
};
