import { FC } from 'react';
import styles from './service-list-element.module.css';
import { TServiceListElementProps } from './types';

export const ServiceListElementUI: FC<TServiceListElementProps> = ({
  title,
  text,
  imgSrc,
  imgAlt
}) => {
  const onCLick = () => {
    console.log('click');
  };

  return (
    <li className={styles.item}>
      <button className={styles.button} onClick={onCLick}>
        <img className={styles.image} src={imgSrc} alt={imgAlt} />
        <div className={styles.itemText}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.text}>{text}</p>
        </div>
      </button>
    </li>
  );
};
