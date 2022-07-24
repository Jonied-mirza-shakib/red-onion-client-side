import React from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";

const UpdateBreakfast = () => {
    const {id}=useParams()
    const { register, formState: { errors },reset, handleSubmit } = useForm();
    const imageStorageApi='19bf4cd9f8fbd132a1a0e00b0808ce6a';

  const onSubmit = async data => {
    console.log(data)
    const image=data?.image[0];
    const formData = new FormData();
    formData.append('image', image);
    const url=`https://api.imgbb.com/1/upload?key=${imageStorageApi}`;
    fetch(url, {
  method: 'PUT',
  body: formData
})
.then(res => res.json())
.then(result => {
  console.log('Success:', result);
  if(result.success){
    const image=result?.data?.url;
    const updatedBreakfast={
        name: data.name,
        price: data.price,
        description: data.description,
        image: image
    }
    fetch(`http://localhost:5000/breakfast/${id}`, {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(updatedBreakfast),
})
.then(res => res.json())
.then(result => {
  console.log('Success:', result);
})
  }
})
reset()
  }
    return (
        <div>
            <h1 className='text-3xl text-center text-blue-700 uppercase font-bold mt-5'>Breakfast Updated</h1>
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
    <label for="image">Image</label>
    <br/>
    <input className='w-full' type='file' {...register("image", { required: true })} />
      {errors.image && <p>image is required</p>}
   </div>
      <input type="submit" value='UPDATE' className='text-xl font-bold cursor-pointer w-full' />
    </form>
  </div>
</div>
            </div>
        </div>
    );
};

export default UpdateBreakfast;