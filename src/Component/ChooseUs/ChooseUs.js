import React from 'react';
import './ChooseUs.css'
import firstImg from '../../images/adult-blur-blurred-background-687824.png'
import secondImg from '../../images/chef-cook-food-33614.png'
import thirdImg from '../../images/architecture-building-city-2047397.png'

const ChooseUs = () => {
    return (
        <div>
            <div style={{width:'90%',margin:'auto'}}>
                <h1 className='sm:text-1xl md:text-3xl lg:text-5xl text-center mt-10 mb-5 uppercase' style={{color:'darkcyan',fontWeight:'bold'}}>Why you choose Us</h1>
                <div className="divider w-2/4 m-auto mb-10"></div>
                <p style={{fontSize:'15px',color:'gray'}}>Quality of Service, Food, Ambiance and Value of Money are the primary elements for choosing a restaurant. Mariano is one of the most exquisite fine-dinning restaurant in twin cities with a captivating view of Murree Hills, perfect ambiance and scrumptious food. Our team is always looking forward to provide you exceptional services and win your hearts out.</p>
                <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10'>
                   <div style={{backgroundColor:'gray',padding:'20px',color:'white',borderRadius:'10px'}}>
                   <img className='w-3/4 m-auto mb-5' src={firstImg} alt=""/>
                    <p className='text-center'>In Wisconsin, many claim the burger was invented by Charlie Nagreen, who purportedly sold a meatball between two slices of bread at an 1885 fair in Seymour. In Athens, Tex., the title of “hamburger creator” is bestowed upon Fletcher Davis, who supposedly came up with it in the 1880s.</p>
                   </div>
                   <div style={{backgroundColor:'gray',padding:'20px',color:'white',borderRadius:'10px'}}>
                    <img className='w-3/4 m-auto mb-5' src={secondImg} alt=""/>
                    <p className='text-center'>A Chef is responsible for the dishes that are cooked and prepared at a restaurant. This can involve creating new recipes, or adhering to specific food preparation and standards set by the restaurant and local laws. A Chef also supervises and assigns work in the kitchen and interviews and trains staff.</p>
                   </div>
                   <div style={{backgroundColor:'gray',padding:'20px',color:'white',borderRadius:'10px'}}>
                    <img className='w-3/4 m-auto mb-5' src={thirdImg} alt=""/>
                    <p className='text-center'>There are numerous benefits of the food delivery service — it expands your customer base, increases your revenue, gives your customers a variety of options, and it also offers unparalleled convenience.</p>
                    <p></p>
                   </div>
                </div>
            </div>
        </div>
    );
};

export default ChooseUs;