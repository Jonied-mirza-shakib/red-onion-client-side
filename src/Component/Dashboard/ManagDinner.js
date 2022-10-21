import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ManagDinner = () => {
    const [dinner, setDinner] = useState([]);
    const navigate=useNavigate()
    useEffect(() => {
      fetch('https://red-onion-server-side-production.up.railway.app/dinner')
        .then(res => res.json())
        .then(data => setDinner(data))
    }, [])
    const handleDelete=id=>{
      fetch(`https://red-onion-server-side-production.up.railway.app/dinner/${id}`,{
        method:'DELETE'
    })
    .then(res=>res.json())
    .then(result=>{
        if(result.deletedCount>0){
            const remaining=dinner.filter(allDinner=>allDinner._id!==id)
            setDinner(remaining)
        }
    })
    }
    return (
        <div>
        <h1 className='text-3xl text-center text-blue-700 uppercase font-bold mt-5'>all dinner</h1>
        <div style={{ width: '75%' }} className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4'>
      {
        dinner.map(allDinner=> 
            <div key={allDinner._id} className="card bg-base-100 shadow-xl" style={{width:'100%',height:'750px',backgroundColor:'darkcyan',color:'white'}}>
            <figure className="px-10 pt-10">
              <img src={allDinner.img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body">
              <h2 className=""><span className='font-bold'>NAME:</span> {allDinner.name}</h2>
              <p><span className='font-bold'>DESCRIPTION:</span> {allDinner.description}</p>
              <p><span className='font-bold'>PRICE:</span> ${allDinner.price}</p>
              <div className="card-actions" style={{display:'flex',flexDirection:'row',justifyContent:'center'}}>
              <button onClick={()=>navigate(`/updateDinner/${allDinner._id}`)} type="button" className='btn btn-primary btn-xl'>UPDATE</button>
                <button onClick={()=>handleDelete(allDinner._id)} type="button" className='btn btn-primary btn-xl'>DELETE</button>
              </div>
            </div>
          </div>
            
            )
      }
    </div>
    </div>
    );
};

export default ManagDinner;