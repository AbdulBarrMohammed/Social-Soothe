import React from 'react'
import Navbar from './components/header/Navbar'
import Home from './components/home/Home'
import { Route, Routes } from 'react-router-dom';
import SignUp from './components/authentication/SignUp'
import LogIn from './components/authentication/Login'
import Dashboard from './components/home/Dashboard';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  )
}

export default App
