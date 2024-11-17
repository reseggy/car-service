import { StrictMode, lazy, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { PreloaderPage } from './components/ui/preloader-page';
import './index.css';

const App = lazy(() => import('./components/app/app'));

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <StrictMode>
      <BrowserRouter>
        <Suspense fallback={<PreloaderPage />}>
          <App />
        </Suspense>
      </BrowserRouter>
    </StrictMode>
  </Provider>
);
