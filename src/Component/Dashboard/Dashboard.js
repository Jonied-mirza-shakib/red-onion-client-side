import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../Hooks/useAdmin';
const Dashboard = () => {
  const [user, loading] = useAuthState(auth);
  const [admin]=useAdmin(user)
    return (
        <div className="drawer drawer-mobile mt-10 mb-20">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* <!-- Page content here --> */}
          <h1 className='text-2xl text-center text-blue-700 uppercase font-bold'>WELCOME To your Dashboard</h1>
         <Outlet></Outlet>
        </div> 
        <div className="drawer-side">
          <label for="my-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-30 bg-base-100 text-base-content">
            {/* <!-- Sidebar content here --> */}
            <li className='text-accent font-bold'><Link to='/dashboard'>My Profile</Link></li>
            {admin&&<li className='text-accent font-bold'><Link to='/dashboard/users'>All User</Link></li>}
            {admin&&<li className='text-accent font-bold'><Link to='/dashboard/addBreakfast'>Add Breakfast</Link></li>}
            {admin&&<li className='text-accent font-bold'><Link to='/dashboard/addDinner'>Add Dinner</Link></li>}
            {admin&&<li className='text-accent font-bold'><Link to='/dashboard/addLunch'>Add Lunch</Link></li>}
            {admin&&<li className='text-accent font-bold'><Link to='/dashboard/manageBreakfast'>Manage Breakfast</Link></li>}
            {admin&&<li className='text-accent font-bold'><Link to='/dashboard/manageDinner'>Manage Dinner</Link></li>}
            {admin&&<li className='text-accent font-bold'><Link to='/dashboard/manageLunch'>Manage Lunch</Link></li>}
          </ul>
        </div>
      </div>
    );
};

export default Dashboard;