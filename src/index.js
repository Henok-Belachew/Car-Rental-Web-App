import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './font.css'
import App from './App';

// ---------- IMPORTING PAGES ---------------- //

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Models from './pages/Models';
import OurTeam from './pages/OurTeam';
import Testimonials from './pages/Testimonials';

// ---------- ========= --------- ==== ------- //

import {BrowserRouter, Routes, Route} from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>

      <Routes>
          <Route path='/' element={<App/>}>

                <Route index element={<Home/>} />
                <Route path='/About' element={<About/>} />
                <Route path='/Models' element={<Models/>} />
                <Route path='/Testimonials' element={<Testimonials/>} />
                <Route path='/Our Team' element={<OurTeam/>} />
                <Route path='/Contact' element={<Contact/>} />

          </Route>
      </Routes>

  </BrowserRouter>, document.getElementById('root')
);

// ReactDOM.render()