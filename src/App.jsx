import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './scss/index.scss';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Plans from './pages/Plans';
import Summary from './pages/Summary';
import { useDispatch } from 'react-redux';


function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    //debugger;
    const loggedIn = localStorage.getItem('user');
    if (loggedIn) {
      const userInfo = JSON.parse(loggedIn);
      //hacer un dispatch para setear el usuario del localstorage
      dispatch(setUserInfo(userInfo.user));
    }
  }, [dispatch]);

  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="plans" element={<Plans />}/>
        <Route path="/summary" element={<Summary />}/>
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
