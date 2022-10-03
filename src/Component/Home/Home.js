import React, { useState } from 'react';
import GoogleFontLoader from 'react-google-font-loader';
import FeaturedFood from '../FeaturedFood/FeaturedFood';
import HowItsWorks from '../HowItsWorks/HowItsWorks';
import './Home.css'

const Home = () => {
  const[reloads,setReloads]=useState("");
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
  setTimeout(function () {
    setReloads("")
}, 1000);
  return (
    <div>
      <div className='home-bg' style={{ fontFamily: 'Roboto Mono, monospaced' }}>
        <div style={{ width: '90%', margin: 'auto', textAlign: 'center' }}>
          <h1 className='sm:text-1xl md:text-2xl lg:text-4xl mb-5 text-white uppercase font-bold pt-20'>Best Food waiting for your belly</h1>
          <p className='text-xl text-white'>We can deliver even if you live 6KM far!</p>
          <div className='home-form pt-5'>
          <div className="form-control">
            <div className="input-group">
              <input type="text" placeholder="Search…" className="input input-bordered text-xl" />
              <button className="btn btn-square">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
              </button>
            </div>
          </div>
          </div>
        </div>
      </div>
      <HowItsWorks></HowItsWorks>
      <FeaturedFood></FeaturedFood>
      {reloads}
    </div>
  );
};

export default Home;