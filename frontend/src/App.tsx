import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './styles/global';

import Routes from './routes';

import { ToastProvider } from './hooks/toast';

const App: React.FC = () => (
  <BrowserRouter>
    <GlobalStyle />

    <ToastProvider>
      <Routes />
    </ToastProvider>
  </BrowserRouter>
);

export default App;
