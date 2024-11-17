import { FC, memo } from 'react';
import styles from './validated-input.module.css';
import { TValidatedInputUIProps } from './types';

export const ValidatedInputUI: FC<TValidatedInputUIProps> = memo(
  ({ placeholder, type, name, value, handleChange, error }) => {
    return (
      <label className={styles.label}>
        {name === 'message' ? (
          <textarea
            name={name}
            value={value}
            onChange={handleChange}
            placeholder={placeholder}
            className={`${styles.text} ${styles.input} ${styles.messageInput} ${error ? styles.inputError : ''}`}
          />
        ) : (
          <input
            type={type}
            name={name}
            value={value}
            onChange={handleChange}
            placeholder={placeholder}
            className={`${styles.text} ${styles.input} ${error ? styles.inputError : ''}`}
          />
        )}
        <span className={`${styles.text} ${styles.placeholder}`}>
          {placeholder}
        </span>
      </label>
    );
  }
);
