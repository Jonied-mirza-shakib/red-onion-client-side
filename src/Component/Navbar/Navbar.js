import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../images/logo2.png'

const Navbar = () => {
    const [user, loading] = useAuthState(auth);
    const logout = () => {
        signOut(auth);
      };
      
    const menuItem=<>
    <li style={{padding:'10px',fontSize:'18px',textTransform:'uppercase',color:'darkcyan',fontWeight:'bold'}}><Link to='/'>Home</Link></li>
    <li style={{padding:'10px',fontSize:'18px',textTransform:'uppercase',color:'darkcyan',fontWeight:'bold'}}><Link to='/breakfast'>Breakfast</Link></li>
    <li style={{padding:'10px',fontSize:'18px',textTransform:'uppercase',color:'darkcyan',fontWeight:'bold'}}><Link to='/dinner'>Dinner</Link></li>
    <li style={{padding:'10px',fontSize:'18px',textTransform:'uppercase',color:'darkcyan',fontWeight:'bold'}}><Link to='/lunce'>Lunce</Link></li>
    <li style={{padding:'10px',fontSize:'18px',textTransform:'uppercase',color:'darkcyan',fontWeight:'bold'}}><Link to='/myOrder'>My Order</Link></li>
    {
            user && <li style={{padding:'10px',fontSize:'18px',textTransform:'uppercase',color:'darkcyan',fontWeight:'bold'}}><Link to='/dashboard'>Dashboard</Link></li>
        }
    <li style={{padding:'10px',fontSize:'18px',textTransform:'uppercase',color:'darkcyan',fontWeight:'bold'}}>{
        user?<button onClick={logout} type="button" className='btn text-white'>Log Out</button>:<Link to='/login'>Login</Link>
    }</li>
    </>
    return (
        <div class="navbar py-3" style={{backgroundColor:'#FCF4E0'}}>
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                       {menuItem}
                    </ul>
                </div>
                <a class="btn btn-ghost normal-case text-xl"><img style={{width:'150px',height:'auto'}} src={logo} alt=""/></a>
            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal p-0">
                  {menuItem}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;