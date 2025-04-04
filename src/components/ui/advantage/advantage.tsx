import { TAdvantageProps } from './types';
import { FC, memo } from 'react';
import styles from './advantage.module.css';

export const AdvantageUI: FC<TAdvantageProps> = memo(
  ({ title, text, imgSrc, imgAlt, counter }) => {
    return (
      <div
        className={`${styles.advantage} ${counter ? styles.advantageBig : ''}`}
      >
        <div className={styles.advantageIcon}>
          {imgSrc && (
            <img src={imgSrc} alt={imgAlt} className={styles.advantageImg} />
          )}
          {counter && <div className={styles.advantageСounter}>{counter}</div>}
        </div>
        <div className={styles.advantageText}>
          <h3 className={styles.advantageTitle}>{title}</h3>
          <p className={styles.subsectionText}>{text}</p>
        </div>
      </div>
    );
  }
);
