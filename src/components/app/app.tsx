import '../../index.css';
import styles from './app.module.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import { HomePage } from '../../pages/home-page';
import { SaleCarsPage } from '../../pages/sale-cars-page';
import { AppHeader } from '../app-header';
import { Footer } from '../footer';
import { OurServicesPage } from '../../pages/our-services-page';
import { ContactPage } from '../../pages/contact-page';
import { AboutServicesPage } from '../../pages/about-services-page';
import { UnknownPage } from '../../pages/unknown-page';

const App = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className={`${styles.app} ${isHomePage ? styles.appHome : ''}`}>
      <div className={styles.contentApp}>
        <AppHeader />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/sale-cars' element={<SaleCarsPage />} />
          <Route path='/services' element={<OurServicesPage />} />
          <Route path='/contacts' element={<ContactPage />} />
          <Route path='/about-services' element={<AboutServicesPage />} />
          <Route path='*' element={<UnknownPage />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
};

export default App;
