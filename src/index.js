import React from 'react';
import ReactDOM from 'react-dom';
import { Header } from './components/Header';
import { Home } from './components/Home';

import './styles/index.css';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Home />
  </React.StrictMode>,
  document.getElementById('root')
);