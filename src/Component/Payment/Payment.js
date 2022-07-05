import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';
const stripePromise = loadStripe('pk_test_51L4fLCD15eCVhrzNkkD1sfSX6fDlCTxWEEHGvfPTnbV6eKH0iQ1Gqq5wkIlZNSHDSDmEb8ncfMRzfsIK7qyKFYKB0074WtiDi1');
const Payment = () => {
    const { id } = useParams();
    const [pay, setPay] = useState([]);
    const url = `http://localhost:5000/order/${id}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setPay(data))
    }, [url])
    return (
        <div style={{ width: '90%', margin: 'auto', marginTop: '80px' }}>
                    <div class="card w-50 max-w-md bg-base-100 shadow-xl" style={{marginBottom:'30px'}}>
                        <div class="card-body">
                            <h2 class="card-title text-green-700"> HELLO, <span className='text-orange-700'>{pay.name}</span></h2>
                            <h2 class="card-title">Please Pay For <span className='text-orange-700'>${pay.grandTotal}</span></h2>

                        </div>
                    </div>
                    <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                        <div class="card-body">
                            <Elements stripe={stripePromise}>
                                <CheckoutForm pay={pay}/>
                            </Elements>
                        </div>
                    </div>
                </div>
    );
};

export default Payment;