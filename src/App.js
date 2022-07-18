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
import Dashboard from './Component/Dashboard/Dashboard';
import MyProfile from './Component/Dashboard/MyProfile';
import ManagBreakfast from './Component/Dashboard/ManagBreakfast';
import AddBreakfast from './Component/Dashboard/AddBreakfast';
import AddDinner from './Component/Dashboard/AddDinner';
import AddLunch from './Component/Dashboard/AddLunch';
import ManagDinner from './Component/Dashboard/ManagDinner';
import ManageLunch from './Component/Dashboard/ManageLunch';
import Footer from './Component/Footer/Footer';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/breakfast' element={<Breakfast></Breakfast> }></Route>
        <Route path='/singleBreakfast/:id' element={<SingleBreakfast></SingleBreakfast>}></Route>
        <Route path='/dinner' element={<Dinner></Dinner>}></Route>
        <Route path='/lunce' element={<Lunce></Lunce>}></Route>
        <Route path='/myOrder' element={
           <RequireAuth>
            <Pay></Pay>
         </RequireAuth>
        }></Route>
        <Route path='/payment/:id' element={<Payment></Payment>}></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}>
        <Route index element={<MyProfile></MyProfile>}></Route>
        <Route path='addBreakfast' element={<AddBreakfast></AddBreakfast>}></Route>
        <Route path='addDinner' element={<AddDinner></AddDinner>}></Route>
        <Route path='addLunch' element={<AddLunch></AddLunch>}></Route>
        <Route path='manageBreakfast' element={<ManagBreakfast></ManagBreakfast>}></Route>
        <Route path='manageDinner' element={<ManagDinner></ManagDinner>}></Route>
        <Route path='manageLunch' element={<ManageLunch></ManageLunch>}></Route>
        </Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signUp' element={<SignUp></SignUp>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
