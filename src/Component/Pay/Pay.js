import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { AiFillDelete } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Pay = () => {
    const [pay, setPay] = useState([]);
    const [user, loading] = useAuthState(auth);
    const navigate=useNavigate()
    useEffect(() => {
        fetch(`https://whispering-oasis-37712.herokuapp.com/order?email=${user?.email}`,{
            method:'GET',
            headers:{
                'authorization':`Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if(res.status===401||res.status===403){
                    signOut(auth);
                    localStorage.removeItem('accessToken')
                    navigate('/')
                }
                return res.json()
            })
            .then(data => {
                setPay(data)
            })
    }, [user])

    const handleDelete = id => {
        console.log(id)
        fetch(`https://whispering-oasis-37712.herokuapp.com/order/${id}`, {
            method: "DELETE",
            headers: {
                'Content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.deletedCount>0){
                    const remaining= pay.filter(payments=> payments._id!==id);
                    setPay(remaining)
                }
            })
    }

    return (
        <div style={{ width: '90%', margin: 'auto', marginTop: '80px' }}>
            <h1 className='text-5xl text-center uppercase' style={{ fontFamily: 'Roboto Mono, monospaced', fontWeight: 'bold', color: 'darkcyan' }}>PLEASE PAY CONFIRM</h1>
            <div className="divider w-2/4 m-auto mb-10"></div>
            <div class="overflow-x-auto">
                <table class="table table-compact w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>EMAIL</th>
                            <th>Address</th>
                            <th>PHON NUMBER</th>
                            <th>TOTAL</th>
                            <th>PAYMENT</th>
                            <th>DELETE</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            pay.map((isPay, index) =>
                                <tr key={isPay._id}>
                                    <th>{index + 1}</th>
                                    <td>{isPay.name}</td>
                                    <td>{isPay.email}</td>
                                    <td>{isPay.address}</td>
                                    <td>{isPay.number}</td>
                                    <td>${isPay.grandTotal}</td>
                                    <td>
                                        {(isPay.grandTotal && !isPay.paid) && <Link to={`/payment/${isPay._id}`}><button type="button" className='btn btn-xs btn-accent text-white'>PAY</button></Link>
                                        }
                                        {(isPay.grandTotal && isPay.paid) && <div>
                                            <span className='text-success'>paid</span>
                                            <br/>
                                            <span className='text-success'>Transaction Id:{isPay?.transactionId}</span>
                                        </div> }
                                    </td>
                                    <td>
                                        <button onClick={() => handleDelete(isPay._id)} type="button" className='btn btn-error font-bold'><AiFillDelete /></button>
                                    </td>
                                </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Pay;