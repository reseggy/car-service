import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import App from './components/app/app';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <StrictMode>
      <BrowserRouter basename='/car-service'>
        <App />
      </BrowserRouter>
    </StrictMode>
  </Provider>
);
