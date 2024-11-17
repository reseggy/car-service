import { FC, lazy, Suspense } from 'react';
import styles from './contact-page.module.css';
import { Preloader } from '../../components/ui/preloader';

const ContactForm = lazy(() =>
  import('../../components/contact-form').then((module) => ({
    default: module.ContactForm
  }))
);

export const ContactPage: FC = () => {
  return (
    <div className={styles.page}>
      <Suspense fallback={<Preloader />}>
        <ContactForm />
      </Suspense>
    </div>
  );
};
