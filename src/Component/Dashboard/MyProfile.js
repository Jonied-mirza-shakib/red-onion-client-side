import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyProfile = () => {
    const [profile,setProfile]=useState([]);
    const navigate=useNavigate()
    useEffect(()=>{
        fetch('http://localhost:5000/profile')
        .then(res=>res.json())
        .then(data=>setProfile(data))
    },[])

    const updateProfile=(id)=>{
        navigate(`/updateProfile/${id}`)
    }

    return (
        <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
            <h1 className='text-3xl text-center text-blue-700 uppercase font-bold mt-5'>my Profile</h1>
           {
            profile.map(profileInformation=> 
                <div key={profileInformation._id} class="card w-96 bg-base-100 shadow-xl">
  <figure><img src={profileInformation.image} alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="card-title">Name: {profileInformation.name}</h2>
    <p>Email: {profileInformation.email}</p>
    <h3>Phone Number: {profileInformation.PhoneNumber}</h3>
    <button onClick={()=>updateProfile(`${profileInformation._id}`)} type="button" className='btn btn-primary btn-lg mt-20'>Update Profile</button>
  </div>
</div>
        )
           }
        </div>
    );
};

export default MyProfile;