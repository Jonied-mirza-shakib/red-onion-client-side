import React from 'react';
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from 'react-router-dom';

const UpdateDinner = () => {
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
    fetch(`https://red-onion-server-side.vercel.app/dinner/${id}`, {
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
    alert('Dinner updated successfully')
    reset()
  }
})
  }
  const backToManageDinner=()=>{
    navigate('/dashboard/manageDinner')
  }
    return (
        <div>
        <h1 className='text-3xl text-center text-blue-700 uppercase font-bold mt-5'>Dinner Updated</h1>
        <div style={{display:'flex',flexDirection:'row',justifyContent:'center'}}>
        <div class="card w-2/4 bg-base-100 shadow-xl">
<div class="card-body">
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
        <button onClick={backToManageDinner} type="button" className='btn btn-primary btn-lg mt-20'>Back to manage Dinner</button>
        </div>
    </div>
    );
};

export default UpdateDinner;