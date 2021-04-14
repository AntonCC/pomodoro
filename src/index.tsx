import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components'
import { BrowserRouter as Router } from 'react-router-dom'

import App from './App';
import GlobalStyle from './themes/globalStyles'
import Theme from './themes/theme'

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


