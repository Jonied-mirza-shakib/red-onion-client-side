import React, { useEffect, useState } from 'react';

const Lunce = () => {
    const [lunch,setLunch]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/lunch')
        .then(res=>res.json())
        .then(data=>setLunch(data))
    },[])
    return (
        <div>
            <div style={{width:'90%',margin:'auto',}}>
            <h1 className='text-5xl text-center uppercase mt-10' style={{fontFamily: 'Roboto Mono, monospaced',fontWeight:'bold',color:'darkcyan'}}>lunch</h1>
            <div className="divider w-1/4 m-auto mb-10"></div>
           <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {
                lunch?.map(allLunch=> <div style={{backgroundColor:'gray',padding:'20px',color:'white'}}>
                    <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                    <img className='w-2/4' src={allLunch.img} alt="" />
                    </div>  
                  <h2 style={{fontSize:'20px',fontWeight:'bold',marginBottom:'5px'}}>Name: {allLunch.name}</h2>
                  <p> <span style={{fontWeight:'bold'}}>Description:</span> {allLunch.description}</p>
                  <p> <span style={{fontWeight:'bold'}}>Price:</span> {allLunch.price}</p>
                  <button type="button" className='btn btn-secondary w-full'>Purchase</button>
                </div> )
            }
            </div>
            </div>
        </div>
    );
};

export default Lunce;