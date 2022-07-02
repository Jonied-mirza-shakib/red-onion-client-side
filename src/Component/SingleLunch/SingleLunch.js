import React from 'react';

const SingleLunch = ({handleIncreaseBtn,allLunch}) => {
    return (
        <div>
        <div class="card bg-base-100 shadow-xl" style={{width:'100%',height:'750px',backgroundColor:'darkcyan',color:'white'}}>
          <figure class="px-10 pt-10">
            <img src={allLunch.img} alt="Shoes" class="rounded-xl" />
          </figure>
          <div class="card-body">
            <h2 class=""><span className='font-bold'>NAME:</span> {allLunch.name}</h2>
            <p><span className='font-bold'>DESCRIPTION:</span> {allLunch.description}</p>
            <p><span className='font-bold'>PRICE:</span> {allLunch.price}</p>
            <div class="card-actions" style={{display:'flex',flexDirection:'row',justifyContent:'center'}}>
              <button onClick={()=>handleIncreaseBtn(allLunch)} class="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default SingleLunch;