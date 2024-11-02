import { FC } from 'react';
import styles from './contact-page.module.css';
import { ContactForm } from '../../components/contact-form';

export const ContactPage: FC = () => {
  return (
    <div className={styles.page}>
      <ContactForm />
    </div>
  );
};
