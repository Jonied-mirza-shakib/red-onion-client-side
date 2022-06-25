import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './SingleBreakfast.css'

const SingleBreakfast = () => {
    const { id } = useParams()
    const [singleBreakfast, setSingleBreakfast] = useState()
    useEffect(() => {
        fetch(`http://localhost:5000/breakfast/${id}`)
            .then(res => res.json())
            .then(data => setSingleBreakfast(data))
    }, [id])
    return (
        <div style={{ width: '90%', margin: 'auto',paddingTop:'30px' }}>
            <div className='singleProduct'>
                <div>
                    <div class="card w-max" style={{backgroundColor:'gray',padding:'20px',color:'white'}}>
                        <div class="card-body items-center">
                            <h2 className='card-title lg:text-3xl font-bold'>Name: {singleBreakfast?.name}</h2>
                            <p>Description: {singleBreakfast?.description}</p>
                            <h4>Price: {singleBreakfast?.price}</h4>
                            <div class="card-actions justify-end">
                                <button class="btn btn-primary text-xl font-bold">+</button>
                                <button class="btn btn-ghost text-xl font-bold">-</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <h1>hello</h1>
                </div>
            </div>
        </div>
    );
};

export default SingleBreakfast;