import React from 'react';
import './HowItsWorks.css'
import step1 from '../../images/step1.png';
import step2 from '../../images/step2.png';
import step3 from '../../images/step3.png';
import step4 from '../../images/step4.png';

const HowItsWorks = () => {
    return (
       <div className='bg-base-200'>
         <div className='how-its-work'>
            <div className='how-its-work-title'>
            <h1>How it works</h1>
            <p>Get your favourite food in 4 simple steps</p>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                <div className='step-1'>
                    <div class="card w-max-w bg-base-100 shadow-xl">
                        <div class="card-body">
                           <div className='img'>
                           <img src={step1} alt=""/>
                           </div>
                            <h2 className='text-xl font-bold text-red-700 mt-3'>Search</h2>
                           <p>Find all restaurants available near you</p>
                        </div>
                    </div>
                </div>
                {/* end step 1 */}
                <div className='step-2'>
                    <div class="card w-max-w bg-base-100 shadow-xl">
                        <div class="card-body">
                           <div className='img'>
                           <img src={step2} alt=""/>
                           </div>
                            <h2 className='text-xl font-bold text-red-700 mt-3'>Choose</h2>
                           <p>Browse hundreds of menus to find the food you like</p>
                        </div>
                    </div>
                </div>
                {/* end step 2 */}
                <div className='step-3'>
                    <div class="card w-max-w bg-base-100 shadow-xl">
                        <div class="card-body">
                           <div className='img'>
                           <img src={step3} alt=""/>
                           </div>
                            <h2 className='text-xl font-bold text-red-700 mt-3'>Pay</h2>
                           <p>It's quick, secure and easy</p>
                        </div>
                    </div>
                </div>
                {/* end step 3 */}
                <div className='step-4'>
                    <div class="card w-max-w bg-base-100 shadow-xl">
                        <div class="card-body">
                           <div className='img'>
                           <img src={step4} alt=""/>
                           </div>
                            <h2 className='text-xl font-bold text-red-700 mt-3'>Enjoy</h2>
                           <p>Food is prepared & delivered to your door</p>
                        </div>
                    </div>
                </div>
                {/* end step 4 */}
            </div>
        </div>
       </div>
    );
};

export default HowItsWorks;