import React from 'react';
import './App.css';
import Navbar from './Component/Navbar/Navbar';
import { Routes, Route } from "react-router-dom";
import Home from './Component/Home/Home'
import Breakfast from './Component/Breakfast/Breakfast'
import Dinner from './Component/Dinner/Dinner'
import Lunce from './Component/Lunce/Lunce'
import Login from './Component/Login/Login'
import SingleBreakfast from './Component/SingleBreakfast/SingleBreakfast';
import SignUp from './Component/SignUp/SignUp';
import RequireAuth from './Component/RequireAuth/RequireAuth';
import Pay from './Component/Pay/Pay';
import Payment from './Component/Payment/Payment';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/breakfast' element={
          <RequireAuth>
            <Breakfast></Breakfast>
          </RequireAuth>
        }></Route>
        <Route path='/singleBreakfast/:id' element={<SingleBreakfast></SingleBreakfast>}></Route>
        <Route path='/dinner' element={
          <RequireAuth>
            <Dinner></Dinner>
          </RequireAuth>
        }></Route>
        <Route path='/lunce' element={
          <RequireAuth>
            <Lunce></Lunce>
          </RequireAuth>
        }></Route>
        <Route path='/pay' element={<Pay></Pay>}></Route>
        <Route path='/payment/:id' element={<Payment></Payment>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signUp' element={<SignUp></SignUp>}></Route>
      </Routes>
    </div>
  );
}

export default App;
