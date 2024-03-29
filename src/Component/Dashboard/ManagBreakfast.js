import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";

const ManagBreakfast = () => {
  const [breakfast, setBreakfast] = useState([]);
  const navigate = useNavigate()
  useEffect(() => {
    fetch('https://red-onion-server-side.onrender.com/breakfast')
      .then(res => res.json())
      .then(data => setBreakfast(data))
  }, [])

  const handleDelete = id => {
    fetch(`https://red-onion-server-side.onrender.com/breakfast/${id}`, {
      method: 'DELETE'
    })
      .then(res => res.json())
      .then(result => {
        if (result.deletedCount > 0) {
          const remaining = breakfast.filter(allBreakfast => allBreakfast._id !== id)
          setBreakfast(remaining)
        }
      })
  }

  return (
    <div>
      <h1 className='text-3xl text-center text-blue-700 uppercase font-bold mt-5'>all breakfast</h1>
      <div style={{ width: '75%' }} className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4'>
        {
          breakfast.map(allBreakfast =>
            <div className="card bg-base-100 shadow-xl" style={{ width: '100%', height: '750px', backgroundColor: 'darkcyan', color: 'white' }}>
              <figure className="px-10 pt-10">
                <img src={allBreakfast.img} alt="Shoes" className="rounded-xl" />
              </figure>
              <div className="card-body">
                <h2 className=""><span className='font-bold'>NAME:</span> {allBreakfast.name}</h2>
                <p><span className='font-bold'>DESCRIPTION:</span> {allBreakfast.description}</p>
                <p><span className='font-bold'>PRICE:</span> ${allBreakfast.price}</p>
                <div className="card-actions" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                  <button onClick={() => navigate(`/updateBreakfast/${allBreakfast._id}`)} type="button" className='btn btn-primary btn-xl'>UPDATE</button>
                  <button onClick={() => handleDelete(allBreakfast._id)} type="button" className='btn btn-primary btn-xl'>DELETE</button>
                </div>
              </div>
            </div>

          )
        }
      </div>
    </div>
  );
};

export default ManagBreakfast;