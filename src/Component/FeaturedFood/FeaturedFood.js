import React from 'react';
import './FeaturedFood.css'
import breakfast from '../../images/breakfasts.jpg'
import dinner from '../../images/dinners'
import lunch from '../../images/lunchs.webp'
import {useNavigate} from "react-router-dom"

const FeaturedFood = () => {
    const navigate=useNavigate()
    const handleBreakfast=()=>{
        navigate('/breakfast')
    }
    const handleDinner=()=>{
        navigate('/dinner')
    }
    const handleLunch=()=>{
        navigate('/lunce')
    }
    return (
        <div className='bg-base-200 py-14'>
            <div className='featured-food'>
                <h1 className='text-3xl text-center font-bold uppercase pb-10'>Featured Food</h1>
                <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    <div className='breakfast'>
                       <button type="button" onClick={handleBreakfast}>
                       <div className="card w-max-w bg-base-100 shadow-2xl">
                            <figure>
                                <img src={breakfast} alt=""/>
                            </figure>
                            <div className="card-body">
                                <h3 className='text-center font-bold'>BREAKFAST</h3>
                            </div>
                        </div>
                       </button>
                    </div>
                    {/* end breakfast section */}
                    <div className='dinner'>
                       <button type="button" onClick={handleDinner}>
                       <div className="card w-max-w bg-base-100 shadow-2xl">
                            <figure>
                                <img src={dinner} alt=""/>
                            </figure>
                            <div className="card-body">
                                <h3 className='text-center font-bold'>DINNER</h3>
                            </div>
                        </div>
                       </button>
                    </div>
                    {/* end dinner section */}
                    <div className='lunch'>
                       <button type="button" onClick={handleLunch}>
                       <div className="card w-max-w bg-base-100 shadow-2xl">
                            <figure>
                                <img src={lunch} alt=""/>
                            </figure>
                            <div className="card-body">
                                <h3 className='text-center font-bold'>LUNCH</h3>
                            </div>
                        </div>
                       </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturedFood;