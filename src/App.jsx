import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './scss/index.scss';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Plans from './pages/Plans';
import Summary from './pages/Summary';
import Prueba from './pages/Prueba';

function App() {

  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/plans" element={<Plans />}/>
        <Route path="/summary" element={<Summary />}/>
        <Route path="/prueba" element={<Prueba />}/>
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
