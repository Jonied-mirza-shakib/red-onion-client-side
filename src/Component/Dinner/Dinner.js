import React, { useEffect, useState } from 'react';

const Dinner = () => {
    const [dinner,setDinner]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/dinner')
        .then(res=>res.json())
        .then(data=>setDinner(data))
    },[])
    return (
        <div>
            <div style={{width:'90%',margin:'auto',}}>
            <h1 className='text-5xl text-center uppercase mt-10' style={{fontFamily: 'Roboto Mono, monospaced',fontWeight:'bold',color:'darkcyan'}}>Dinner</h1>
           <div className="divider w-1/4 m-auto mb-10"></div>
           <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {
                dinner?.map(allDinner=> <div style={{backgroundColor:'gray',padding:'20px',color:'white'}}>
                    <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                    <img className='w-2/4' src={allDinner.img} alt="" />
                    </div>  
                    <h2 style={{fontSize:'20px',fontWeight:'bold',marginBottom:'5px'}}>Name: {allDinner.name}</h2>
                  <p> <span style={{fontWeight:'bold'}}>Description:</span> {allDinner.description}</p>
                  <p> <span style={{fontWeight:'bold'}}>Price:</span> {allDinner.price}</p>
                  <button type="button" className='btn btn-secondary w-full'>Purchase</button>
                </div> )
            }
            </div>
            </div>
        </div>
    );
};

export default Dinner;