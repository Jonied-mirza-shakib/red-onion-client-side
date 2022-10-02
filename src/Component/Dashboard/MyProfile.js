import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyProfile = () => {
    const [user, loading] = useAuthState(auth);
    console.log(user)
    return (
        <div className='text-center'>
            <h1 className='text-2xl text-center text-blue-700 uppercase font-bold'>WELCOME To your Profile</h1>
            <div className="card-body text-center" style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                <img style={{width:'300px'}} src={user?.photoURL||'https://i.ibb.co/10ZBhNz/download.jpg'} alt="" />
                <h2 className='text-2xl text-center text-blue-700 uppercase font-bold'>Name: {user?.displayName}</h2>
                <p className='text-2xl text-center text-blue-700 uppercase font-bold'>Email: {user?.email}</p>
            </div>
        </div>
    );
};

export default MyProfile;