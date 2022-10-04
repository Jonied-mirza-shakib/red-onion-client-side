import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';

const UpdatedLunch = () => {
    const {id}=useParams()
    const navigate=useNavigate();
    const { register, formState: { errors },reset, handleSubmit } = useForm();
     const onSubmit = async data => {
       console.log(data)
       const updatedDinner={
           name: data.name,
           price: data.price,
           description: data.description,
           img: data.img
       }
       fetch(`https://whispering-oasis-37712.herokuapp.com/lunch/${id}`, {
     method: 'PUT',
     headers: {
       'Content-Type': 'application/json',
     },
     body: JSON.stringify(updatedDinner),
   })
   .then(res => res.json())
   .then(result => {
     console.log('Success:', result);
     if(result.modifiedCount>0){
       alert('lunch updated successfully')
       reset()
     }
   })
     }
     const backToManageLunch=()=>{
      navigate('/dashboard/manageLunch')
     }
    return (
        <div>
        <h1 className='text-3xl text-center text-blue-700 uppercase font-bold mt-5'>Lunch Updated</h1>
        <div style={{display:'flex',flexDirection:'row',justifyContent:'center'}}>
        <div className="card w-2/4 bg-base-100 shadow-xl">
<div className="card-body">
<form onSubmit={handleSubmit(onSubmit)}>
<div>
<label for="name">Name</label>
<br/>
  <input className='w-full' type='text' {...register("name", { required: true })} />
  {errors.name?.type === 'required' && "name is required"}
</div>
<div>
<label for="price">Price</label>
<br/>
<input className='w-full' type='text' {...register("price", { required: true })} />
  {errors.price && <p>price is required</p>}
</div>
<div>
<label for="description">Description</label>
<br/>
<textarea className='w-full' type='text' rows="10" cols="50" {...register("description", { required: true })}></textarea>
  {errors.description && <p>Description is required</p>}
</div>
<div>
<label for="image">Image Link</label>
<br/>
<input className='w-full' type='text' {...register("img", { required: true })} />
  {errors.image && <p>image is required</p>}
</div>
  <input type="submit" value='UPDATE' className='text-xl font-bold cursor-pointer w-full' />
</form>
</div>
</div>
        </div>
        <div  className='mx-auto text-center'>
        <button onClick={backToManageLunch} type="button" className='btn btn-primary btn-lg mt-20'>Back to manage Lunch</button>
        </div>
    </div>
    );
};

export default UpdatedLunch;