import React from 'react';

const SingleLunch = ({handleIncreaseBtn,allLunch}) => {
    return (
        <div>
        <div className="card bg-base-100 shadow-xl" style={{width:'100%',height:'750px',backgroundColor:'darkcyan',color:'white'}}>
          <figure className="px-10 pt-10">
            <img src={allLunch.img} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body">
            <h2 className=""><span className='font-bold'>NAME:</span> {allLunch.name}</h2>
            <p><span className='font-bold'>DESCRIPTION:</span> {allLunch.description}</p>
            <p><span className='font-bold'>PRICE:</span> ${allLunch.price}</p>
            <div className="card-actions" style={{display:'flex',flexDirection:'row',justifyContent:'center'}}>
              <button onClick={()=>handleIncreaseBtn(allLunch)} className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default SingleLunch;