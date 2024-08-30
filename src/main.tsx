import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import './main.scss';
import { Provider } from 'react-redux';
import { store } from './servises/store.ts';

const cache = createCache({
  key: 'scss',
  prepend: true
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <CacheProvider value={cache}>
        <App />
      </CacheProvider>
    </Provider>
  </StrictMode>
);
