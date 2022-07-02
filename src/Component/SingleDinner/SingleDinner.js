import React from 'react';

const SingleDinner = ({allDinner,handleIncreaseBtn}) => {
    return (
        <div>
        <div class="card bg-base-100 shadow-xl" style={{width:'100%',height:'750px',backgroundColor:'darkcyan',color:'white'}}>
          <figure class="px-10 pt-10">
            <img src={allDinner.img} alt="Shoes" class="rounded-xl" />
          </figure>
          <div class="card-body">
            <h2 class=""><span className='font-bold'>NAME:</span> {allDinner.name}</h2>
            <p><span className='font-bold'>DESCRIPTION:</span> {allDinner.description}</p>
            <p><span className='font-bold'>PRICE:</span> {allDinner.price}</p>
            <div class="card-actions" style={{display:'flex',flexDirection:'row',justifyContent:'center'}}>
              <button onClick={()=>handleIncreaseBtn(allDinner)} class="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default SingleDinner;