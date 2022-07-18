import React from 'react';
import { Link, Outlet } from 'react-router-dom';
const Dashboard = () => {
    return (
        <div class="drawer drawer-mobile mt-10 mb-20">
        <input id="my-drawer" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content">
          {/* <!-- Page content here --> */}
          <h1 className='text-2xl text-center text-blue-700 uppercase font-bold'>WELCOME To your Dashboard</h1>
         <Outlet></Outlet>
        </div> 
        <div class="drawer-side">
          <label for="my-drawer" class="drawer-overlay"></label>
          <ul class="menu p-4 overflow-y-auto w-30 bg-base-100 text-base-content">
            {/* <!-- Sidebar content here --> */}
            <li className='text-accent font-bold'><Link to='/dashboard'>My Profile</Link></li>
            <li className='text-accent font-bold'><Link to='/dashboard/addBreakfast'>Add Breakfast</Link></li>
            <li className='text-accent font-bold'><Link to='/dashboard/addDinner'>Add Dinner</Link></li>
            <li className='text-accent font-bold'><Link to='/dashboard/addLunch'>Add Lunch</Link></li>
            <li className='text-accent font-bold'><Link to='/dashboard/manageBreakfast'>Manage Breakfast</Link></li>
            <li className='text-accent font-bold'><Link to='/dashboard/manageDinner'>Manage Dinner</Link></li>
            <li className='text-accent font-bold'><Link to='/dashboard/manageLunch'>Manage Lunch</Link></li>
          </ul>
        </div>
      </div>
    );
};

export default Dashboard;