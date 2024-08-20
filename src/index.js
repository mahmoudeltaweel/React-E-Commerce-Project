import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './Css/components/button.css';
import './Css/components/alerts.css';
import './Css/components/loading.css';
import './Css/components/google.css';
import './Pages/Auth/auth.css';
import 'bootstrap/dist/css/bootstrap.min.css';




import App from './App';
import { BrowserRouter } from 'react-router-dom';
import MenuContext from './Context/MenuContext';
import WindoContext from './Context/WindoContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <WindoContext>
    <MenuContext >
    <BrowserRouter>
        <App />
    </BrowserRouter>
    </MenuContext>
    </WindoContext>
  </React.StrictMode>
);


