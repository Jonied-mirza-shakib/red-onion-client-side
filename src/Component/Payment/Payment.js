import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import Loading from '../Loading/Loading';
import CheckoutForm from './CheckoutForm';
const stripePromise = loadStripe('pk_test_51L4fLCD15eCVhrzNkkD1sfSX6fDlCTxWEEHGvfPTnbV6eKH0iQ1Gqq5wkIlZNSHDSDmEb8ncfMRzfsIK7qyKFYKB0074WtiDi1');
const Payment = () => {
  const { id } = useParams();
  const navigate = useNavigate()
  const { data: pay, isLoading } = useQuery(['orders', id], () =>
    fetch(`https://red-onion-server-side.onrender.com/order/${id}`, {
      method: 'GET',
    })
      .then(res => res.json())
  )

  if (isLoading) {
    return <Loading></Loading>
  }

  const backToMyOrder = () => {
    navigate('/myOrder')
  }

  return (
    <div style={{ width: '90%', margin: 'auto', marginTop: '80px' }}>
      <div className="card w-50 max-w-md bg-base-100 shadow-xl" style={{ marginBottom: '30px' }}>
        <div className="card-body">
          <h2 className="card-title text-green-700"> HELLO, <span className='text-orange-700'>{pay?.name}</span></h2>
          <h2 className="card-title">Please Pay For <span className='text-orange-700'>${pay?.grandTotal}</span></h2>

        </div>
      </div>
      <div className="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
        <div className="card-body">
          <Elements stripe={stripePromise}>
            <CheckoutForm pay={pay} />
          </Elements>
        </div>
      </div>
      <button onClick={backToMyOrder} type="button" className='btn btn-primary btn-lg mt-20'>Back to My Order</button>
    </div>
  );
};

export default Payment;