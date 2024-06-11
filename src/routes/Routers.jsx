import React from 'react';
import Home from '../Pages/Home';
import Services from '../Pages/Services';
import Login from '../Pages/Login';
import Signup from '../Pages/Signup';
import Contact from '../Pages/Contact';
import Doctors from '../Pages/Doctors/Doctors';
import DoctorsDetails from '../Pages/Doctors/DoctorsDetails';

import {Routes, Route, Routes} from 'react-router-dom'

const Routers = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/> } />
      <Route path='/' element={<Login/> } />
      <Route path='/' element={<Contact/> } />
      <Route path='/' element={<Signup/> } />
      <Route path='/' element={<Services/> } />
      <Route path='/' element={<Doctors/> } />
      <Route path='/' element={<DoctorsDetails/> }/>
    
    </Routes>
  )
}

export default Routers
