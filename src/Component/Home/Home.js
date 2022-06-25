import React from 'react';
import GoogleFontLoader from 'react-google-font-loader';
import ChooseUs from '../ChooseUs/ChooseUs';
import './Home.css'

const Home = () => {
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
    return (
        <div>
          <div className='home-bg' style={{ fontFamily: 'Roboto Mono, monospaced' }}>
            <div style={{width:'90%',margin:'auto',textAlign:'center'}}>
            <h1 className='sm:text-1xl md:text-2xl lg:text-4xl mb-5 text-green-800 font-bold pt-20'>Best Food waiting for your belly</h1>
            <div>
            <input className='home-input'></input>
            <button type="button" className='btn btn-primary home-btn' style={{borderRadius:'20px',marginLeft:'-20px'}}>Search</button>
            </div>
            </div>
        </div>
        <ChooseUs></ChooseUs>
        </div>
    );
};

export default Home;