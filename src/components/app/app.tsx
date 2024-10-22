import '../../index.css';
import styles from './app.module.css';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from '../../pages/home-page';
import { SaleCarsPage } from '../../pages/sale-cars-page';
import { AppHeader } from '../app-header';
import { Footer } from '../footer';

const App = () => {
  return (
    <div className={styles.app}>
      <AppHeader />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/sale-cars' element={<SaleCarsPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
