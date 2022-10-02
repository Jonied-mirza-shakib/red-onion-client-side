import React from 'react';

const SingleProfile = ({isProfile}) => {
    return (
        <div>
      <div className="card bg-base-100 shadow-xl" style={{width:'100%',height:'750px',backgroundColor:'darkcyan',color:'white'}}>
        <figure className="px-10 pt-10">
          <img src={isProfile.img} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body">
          <h2 className=""><span className='font-bold'>NAME:</span> {isProfile.name}</h2>
          <h2 className=""><span className='font-bold'>EMAIL:</span> {isProfile.email}</h2>
        </div>
      </div>
    </div>
    );
};

export default SingleProfile;