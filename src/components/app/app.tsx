import '../../index.css';
import styles from './app.module.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AppHeader } from '../app-header';
import { Footer } from '../footer';
import { lazy, Suspense } from 'react';
import { PreloaderPage } from '../ui/preloader-page';

const HomePage = lazy(() =>
  import('../../pages/home-page/home-page').then((module) => ({
    default: module.HomePage
  }))
);

const SaleCarsPage = lazy(() =>
  import('../../pages/sale-cars-page').then((module) => ({
    default: module.SaleCarsPage
  }))
);

const OurServicesPage = lazy(() =>
  import('../../pages/our-services-page').then((module) => ({
    default: module.OurServicesPage
  }))
);

const ContactPage = lazy(() =>
  import('../../pages/contact-page').then((module) => ({
    default: module.ContactPage
  }))
);

const AboutServicesPage = lazy(() =>
  import('../../pages/about-services-page').then((module) => ({
    default: module.AboutServicesPage
  }))
);

const UnknownPage = lazy(() =>
  import('../../pages/unknown-page').then((module) => ({
    default: module.UnknownPage
  }))
);

const App = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className={`${styles.app} ${isHomePage ? styles.appHome : ''}`}>
      <div className={styles.contentApp}>
        <AppHeader />
        <Suspense fallback={<PreloaderPage />}>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/sale-cars' element={<SaleCarsPage />} />
            <Route path='/services' element={<OurServicesPage />} />
            <Route path='/contacts' element={<ContactPage />} />
            <Route path='/about-services' element={<AboutServicesPage />} />
            <Route path='*' element={<UnknownPage />} />
          </Routes>
        </Suspense>
        <Footer />
      </div>
    </div>
  );
};

export default App;
