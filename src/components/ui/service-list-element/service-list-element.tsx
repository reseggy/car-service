import { FC } from 'react';
import styles from './service-list-element.module.css';
import { TServiceListElementProps } from './types';

export const ServiceListElementUI: FC<TServiceListElementProps> = ({
  title,
  text,
  imgSrc,
  imgAlt,
  target,
  onClick
}) => {
  const itemClass = target === 'main' ? styles.item : styles.itemAdditional;

  return (
    <li className={`${itemClass}`}>
      {target === 'main' ? (
        <button
          className={`${styles.button} ${styles.buttonMain}`}
          onClick={onClick}
        >
          <img
            className={`${styles.image} ${styles.imageMain}`}
            src={imgSrc}
            alt={imgAlt}
            loading='lazy'
          />
          <div className={`${styles.itemText} ${styles.itemTextMain}`}>
            <h3 className={`${styles.title} ${styles.titleMain}`}>{title}</h3>
            <p className={` ${styles.text} ${styles.textMain}`}>{text}</p>
          </div>
        </button>
      ) : (
        <button
          className={`${styles.button} ${styles.buttonAdditional}`}
          onClick={onClick}
        >
          <img
            className={`${styles.image} ${styles.imageAdditional}`}
            src={imgSrc}
            alt={imgAlt}
            loading='lazy'
          />
          <div className={`${styles.itemText} ${styles.itemTextAdditional}`}>
            <h3 className={`${styles.title} ${styles.titleAdditional}`}>
              {title}
            </h3>
            <p className={`${styles.text} ${styles.textAdditional}`}>{text}</p>
          </div>
        </button>
      )}
    </li>
  );
};
