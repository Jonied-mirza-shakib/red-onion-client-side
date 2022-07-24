import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';

const UpdateProfile = () => {
    const {id}=useParams()
    const [user, loading] = useAuthState(auth);
 const { register, formState: { errors },reset, handleSubmit } = useForm();
  const onSubmit = async data => {
    console.log(data)
    const profileInformation={
        email: data.email,
        name: data.name,
        PhoneNumber: data.PhoneNumber,
        image: data.image
    }
    fetch(`http://localhost:5000/profile/${id}`, {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(profileInformation),
})
.then(res => res.json())
.then(result => {
  console.log('Success:', result);
  if(result.modifiedCount>0){
    alert('profile updated successfully')
    reset()
  }
})
  }
    return (
        <div>
        <h1 className='text-3xl text-center text-blue-700 uppercase font-bold mt-5'>Complete Your Profile updated Please</h1>
        <div style={{display:'flex',flexDirection:'row',justifyContent:'center'}}>
        <div class="card w-2/4 bg-base-100 shadow-xl">
<div class="card-body">
<form onSubmit={handleSubmit(onSubmit)}>
<div>
<label for="email">Email</label>
<br/>
  <input className='w-full' type='email' value={user?.email} readOnly {...register("email", { required: true })} />
  {errors.email?.type === 'required' && "email is required"}
</div>
<div>
<label for="name">Name</label>
<br/>
  <input className='w-full' type='text' {...register("name", { required: true })} />
  {errors.name?.type === 'required' && "name is required"}
</div>
<div>
<label for="PhoneNumber">Phone Number</label>
<br/>
<input className='w-full' type='text' {...register("PhoneNumber", { required: true })} />
  {errors.PhoneNumber && <p>price is required</p>}
</div>
<div>
<label for="image">Image Link</label>
<br/>
<input className='w-full' type='text' {...register("image", { required: true })} />
  {errors.image && <p>image is required</p>}
</div>
  <input type="submit" value='Update Information' className='text-xl font-bold cursor-pointer w-full' />
</form>
</div>
</div>
  </div>
    </div>
    );
};

export default UpdateProfile;