import React from 'react';

import { ThemeProvider } from 'styled-components';

import GlobalStyle from './styles/global';
import dark from './styles/themes/main';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Router from './routes';

const App: React.FC = () => (
  <ThemeProvider theme={dark}>
    <ToastContainer autoClose={2000} position="top-right" />
    <GlobalStyle />
    <Router />
  </ThemeProvider>
);

export default App;
