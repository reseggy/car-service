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
    <div className={styles.advantage}>
      <div className={styles.advantageIcon}>
        <img src={imgSrc} alt={imgAlt} className={styles.advantageImg} />
      </div>
      <div className={styles.advantageText}>
        <h3 className={styles.advantageTitle}>{title}</h3>
        <p className={styles.subsectionText}>{text}</p>
      </div>
    </div>
  );
};
