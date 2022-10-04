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
import UpdateBreakfast from './Component/UpdateBreakfast/UpdateBreakfast';
import UpdateDinner from './Component/UpdateDinner/UpdateDinner';
import UpdatedLunch from './Component/UpdatedLunch/UpdatedLunch';
import Users from './Component/Dashboard/Users';
import RequireAdmin from './Component/RequireAuth/RequireAdmin';

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
        <Route path='/dashboard' element={
          <RequireAuth>
 <Dashboard></Dashboard>
          </RequireAuth>
       }>
        <Route index element={<MyProfile></MyProfile>}></Route>
        <Route path='users' element={<RequireAdmin><Users></Users></RequireAdmin>}></Route>
        <Route path='addBreakfast' element={<RequireAdmin><AddBreakfast></AddBreakfast></RequireAdmin>}></Route>
        <Route path='addDinner' element={<RequireAdmin><AddDinner></AddDinner></RequireAdmin>}></Route>
        <Route path='addLunch' element={<RequireAdmin><AddLunch></AddLunch></RequireAdmin>}></Route>
        <Route path='manageBreakfast' element={<RequireAdmin><ManagBreakfast></ManagBreakfast></RequireAdmin>}></Route>
        <Route path='manageDinner' element={<RequireAdmin><ManagDinner></ManagDinner></RequireAdmin>}></Route>
        <Route path='manageLunch' element={<RequireAdmin><ManageLunch></ManageLunch></RequireAdmin>}></Route>
        </Route>
        <Route path='/updateBreakfast/:id' element={<UpdateBreakfast></UpdateBreakfast>}></Route>
        <Route path='/updateDinner/:id' element={<UpdateDinner></UpdateDinner>}></Route>
        <Route path='/updateLunch/:id' element={<UpdatedLunch></UpdatedLunch>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signUp' element={<SignUp></SignUp>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
