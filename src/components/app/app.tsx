import '../../index.css';
import styles from './app.module.css';
import { Routes, Route } from 'react-router-dom';
import { MainPage } from '../../pages/mainPage';
import { AppHeader } from '../app-header';

const App = () => {
  return (
    <div className={styles.app}>
      <AppHeader />
      <Routes>
        <Route path='/' element={<MainPage />} />
      </Routes>
    </div>
  );
};

export default App;
