import '../../index.css';
import styles from './app.module.css';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from '../../pages/home-page';
import { AppHeader } from '../app-header';

const App = () => {
  return (
    <div className={styles.app}>
      <AppHeader />
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
    </div>
  );
};

export default App;
