import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './index.css'; 
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars, faShoppingCart, faTimes, faArrowLeft, faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';

library.add(faBars, faShoppingCart, faTimes, faArrowLeft, faStar, faStarHalfAlt);

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
