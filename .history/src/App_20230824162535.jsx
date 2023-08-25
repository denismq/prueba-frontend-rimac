import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './scss/index.scss';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Plans from './pages/Plans';


function App() {

  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/planes" element={<Plans />}/>
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
