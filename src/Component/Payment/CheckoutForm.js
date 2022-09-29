import React, { useEffect, useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const CheckoutForm = ({pay}) => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('')
    const [clientSecret, setClientSecret] = useState("");
    const [success, setSuccess] = useState("");
    const [proccesing, setProccesing] = useState(false);
    const [transactionId, setTransactionId] = useState("");
    const { _id, grandTotal, name } = pay;
    useEffect(() => {
        fetch('https://red-onion-server-side.onrender.com/create-payment-intent', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({grandTotal}),
        })
            .then(res => res.json())
            .then(data => {
                if (data?.clientSecret) {
                    setClientSecret(data.clientSecret)
                }
            })
    }, [grandTotal])

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card === null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });
        setCardError(error?.message || '')
        setSuccess('')
        setProccesing(true)
          // confirm card payment
          const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: name,
                    },
                },
            },
        );

        if (intentError) {
            setCardError(intentError?.message)
            setProccesing(false)
        } else {
            setCardError('')
            setSuccess('Congrats!Your payment is successfully')
            setTransactionId(paymentIntent.id)
            console.log(paymentIntent)

            const payments = {
                totalPrice: _id,
                transactionId: paymentIntent.id
            }

            // updated data
            fetch(`https://red-onion-server-side.onrender.com/order/${_id}`, {
                method: 'PATCH', // or 'PUT'
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payments),
            })
                .then(res => res.json())
                .then(data => {
                    setProccesing(false)
                    console.log('Success:', data);
                })

        }
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-accent btn-sm text-white' type="submit" disabled={!stripe || !clientSecret}>
                    Pay
                </button>
            </form>
            {
                cardError && <p className='text-red-500'>{cardError}</p>
            }
            {
                success && <div>
                    <p className='text-green-500'>{success}</p>
                    <p className='text-orange-700 font-bold'>{transactionId}</p>
                </div>
            }
        </>
    );
};

export default CheckoutForm;