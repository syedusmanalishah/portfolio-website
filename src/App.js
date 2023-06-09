
import React  from 'react';
import './App.scss';
import AOS from 'aos';
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Base from './components/Layouts/Base';

import { useEffect } from 'react';
import Portfolioa from './pages/Portfolioa';
import Contactus from './pages/Contactus';


function App() {

  useEffect(() => {
    AOS.init({
      duration : 1000
    });
  }, []);

  return (
    <div className="App">
       <BrowserRouter>
      <Base>
        <Routes>
          <Route index path="/portfolio-website" element={<Home/>} />
          <Route path="/portfolio" element={<Portfolioa/>} />
          <Route path="/contact" element={<Contactus/>} />
          
          {/* <Route path="/*" element={<PageNotFound />}/> */}
        </Routes>
      </Base>
    </BrowserRouter>
    </div>
  );
}

export default App;
