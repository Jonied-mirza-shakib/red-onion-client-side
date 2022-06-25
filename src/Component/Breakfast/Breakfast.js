import React, { useEffect, useState } from 'react';
import GoogleFontLoader from 'react-google-font-loader';
import { useNavigate } from 'react-router-dom';
import './Breakfast.css'

const Breakfast = () => {
  <GoogleFontLoader
    fonts={[
      {
        font: 'Roboto',
        weights: [400, '400i'],
      },
      {
        font: 'Roboto Mono',
        weights: [400, 700],
      },
    ]}
    subsets={['cyrillic-ext', 'greek']}
  />

  const [breakfast, setBreakfast] = useState([]);
  const navigateDetails = useNavigate();
  useEffect(() => {
    fetch('http://localhost:5000/breakfast')
      .then(res => res.json())
      .then(data => setBreakfast(data))
  }, [])


  const handleBreakfast = (id) => {
    console.log(id)
    navigateDetails(`/SingleBreakfast/${id}`)
  }
  return (
    <div>
      <div style={{ width: '90%', margin: 'auto' }}>
        <h1 className='text-5xl text-center uppercase mt-10' style={{ fontFamily: 'Roboto Mono, monospaced', fontWeight: 'bold', color: 'darkcyan' }}>breakfast</h1>
        <div className="divider w-1/4 m-auto mb-10"></div>
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {
            breakfast?.map(allBreakfast => <div style={{ backgroundColor: 'gray', padding: '20px', color: 'white' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <img className='w-2/4' src={allBreakfast.img} alt="" />
              </div>
              <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '5px' }}>Name: {allBreakfast.name}</h2>
              <p> <span style={{ fontWeight: 'bold' }}>Description:</span> {allBreakfast.description}</p>
              <p> <span style={{ fontWeight: 'bold' }}>Price:</span>{allBreakfast.price}</p>
              <button onClick={() => handleBreakfast(allBreakfast._id)} type="button" className='btn btn-secondary w-full'>Purchase</button>
            </div>)
          }
        </div>
      </div>
    </div>
  );
};

export default Breakfast;