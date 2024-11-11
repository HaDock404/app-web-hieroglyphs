import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  HashRouter,
  Routes,
  Route,
} from "react-router-dom";
import reportWebVitals from './reportWebVitals';

import Home from './pages/Homepage';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <HashRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
        </Routes>
    <React.StrictMode></React.StrictMode>
  </HashRouter>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
