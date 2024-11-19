import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  HashRouter,
  Routes,
  Route,
} from "react-router-dom";
import reportWebVitals from './reportWebVitals';

import './styles/normalize.css'
import GlobalStyle from './styles/createGlobalStyle.jsx'

import Homepage from './pages/Homepage';
import AboutUs from './pages/AboutUs.jsx';
import LegalNotice from './pages/LegalNotice.jsx';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <HashRouter>
    <GlobalStyle/>
        <Routes>
          <Route path="/" element={<Homepage />}/>
          <Route path="/about" element={<AboutUs />}/>
          <Route path="/legal-notice" element={<LegalNotice />}/>
        </Routes>
    <React.StrictMode></React.StrictMode>
  </HashRouter>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
