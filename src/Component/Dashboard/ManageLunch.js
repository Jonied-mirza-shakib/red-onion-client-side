import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ManageLunch = () => {
    const [lunch,setLunch]=useState([]);
    const navigate=useNavigate()
    useEffect(()=>{
        fetch('https://whispering-oasis-37712.herokuapp.com/lunch')
        .then(res=>res.json())
        .then(data=>setLunch(data))
    },[])

    const handleDelete=id=>{
      fetch(`https://whispering-oasis-37712.herokuapp.com/lunch/${id}`,{
        method:'DELETE'
    })
    .then(res=>res.json())
    .then(result=>{
        if(result.deletedCount>0){
            const remaining=lunch.filter(allLunch=>allLunch._id!==id)
            setLunch(remaining)
        }
    })
    }
    return (
        <div>
        <h1 className='text-3xl text-center text-blue-700 uppercase font-bold mt-5'>All Lunch</h1>
        <div style={{ width: '75%' }} className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4'>
      {
        lunch.map(allLunch=> 
            <div className="card bg-base-100 shadow-xl" style={{width:'100%',height:'750px',backgroundColor:'darkcyan',color:'white'}}>
            <figure className="px-10 pt-10">
              <img src={allLunch.img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body">
              <h2 className=""><span className='font-bold'>NAME:</span> {allLunch.name}</h2>
              <p><span className='font-bold'>DESCRIPTION:</span> {allLunch.description}</p>
              <p><span className='font-bold'>PRICE:</span> ${allLunch.price}</p>
              <div className="card-actions" style={{display:'flex',flexDirection:'row',justifyContent:'center'}}>
              <button onClick={()=>navigate(`/updateLunch/${allLunch._id}`)} type="button" className='btn btn-primary btn-xl'>UPDATE</button>
                <button onClick={()=>handleDelete(allLunch._id)} type="button" className='btn btn-primary btn-xl'>DELETE</button>
              </div>
            </div>
          </div>
            
            )
      }
    </div>
    </div>
    );
};

export default ManageLunch;