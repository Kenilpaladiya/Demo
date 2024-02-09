import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './Home';
import About from './About';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from './Contact';
import Header from './Header';
import State from './State';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="state" element={<State />} />
      </Routes>
    </BrowserRouter>

  </>
);
