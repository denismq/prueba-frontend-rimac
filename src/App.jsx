import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './scss/index.scss';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Plans from './pages/Plans';
import Summary from './pages/Summary';
import Prueba from './pages/Prueba';
import PrivateRoute from './routes/PrivateRoutes';

function App() {

  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/prueba" element={<Prueba />}/>
        <Route element={<PrivateRoute />}>
          <Route path="/plans" element={<Plans />}/>
          <Route path="/summary" element={<Summary />}/>
        </Route>
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
