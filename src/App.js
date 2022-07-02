import React from 'react';
import './App.css';
import Navbar from './Component/Navbar/Navbar';
import { Routes, Route} from "react-router-dom";
import Home from './Component/Home/Home'
import Breakfast from './Component/Breakfast/Breakfast'
import Dinner from './Component/Dinner/Dinner'
import Lunce from './Component/Lunce/Lunce'
import Login from './Component/Login/Login'
import SingleBreakfast from './Component/SingleBreakfast/SingleBreakfast';
import Order from './Component/Order/Order';
import SignUp from './Component/SignUp/SignUp';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/breakfast' element={<Breakfast></Breakfast>}></Route>
        <Route path='/singleBreakfast/:id' element={<SingleBreakfast></SingleBreakfast>}></Route>
        <Route path='/dinner' element={<Dinner></Dinner>}></Route>
        <Route path='/lunce' element={<Lunce></Lunce>}></Route>
        <Route path='/order' element={<Order></Order>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signUp' element={<SignUp></SignUp>}></Route>
      </Routes>
    </div>
  );
}

export default App;
