import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { BrowserRouter, Route, Routes } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<App />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);






// npm install bootstrap
// npm install axios
// npm i react-bootstrap
// npm install @fortawesome/react-fontawesome
// npm i @fortawesome/free-solid-svg-icons

// npm i react-player
// npm i react-router-dom

// npm i @mui/material @emotion/react @emotion/styled
// npm i react-material-ui-carousel