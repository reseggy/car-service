import { FC, memo } from 'react';
import styles from './form.module.css';
import { ValidatedInput } from '../../../components/validated-input';
import { TFormUIProps } from './types';

export const FormUI: FC<TFormUIProps> = memo(
  ({ handleChange, formData, errors, onSubmit }) => {
    return (
      <form className={styles.form} onSubmit={onSubmit}>
        <ValidatedInput
          placeholder='Name'
          type='text'
          name='name'
          value={formData.name}
          onChange={handleChange}
          error={errors.name}
        />
        <ValidatedInput
          placeholder='Phone number'
          type='tel'
          name='phone'
          value={formData.phone}
          onChange={handleChange}
          error={errors.phone}
        />
        <ValidatedInput
          placeholder='Email'
          type='text'
          name='email'
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
        />
        <ValidatedInput
          placeholder='Message'
          type='text'
          name='message'
          value={formData.message}
          onChange={handleChange}
          error={errors.message}
        />
        <button type='submit' className={styles.submitButton}>
          Send
        </button>
      </form>
    );
  }
);
