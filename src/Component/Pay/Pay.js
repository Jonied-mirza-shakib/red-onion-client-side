import React, { useEffect, useState } from 'react';
import { AiFillDelete } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Pay = () => {
    const [pay, setPay] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/order')
            .then(res => res.json())
            .then(data => setPay(data))
    }, [])
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
                            pay.map((isPay,index) =>
                                <tr>
                                    <th>{index+1}</th>
                                    <td>{isPay.name}</td>
                                    <td>{isPay.email}</td>
                                    <td>{isPay.address}</td>
                                    <td>{isPay.number}</td>
                                    <td>${isPay.grandTotal}</td>
                                    <td>
                                        {(isPay.grandTotal&&!isPay.paid)&& <Link to={`/payment/${isPay._id}`}><button type="button" className='btn btn-xs btn-accent text-white'>PAY</button></Link>
                                         }
                                        {(isPay.grandTotal&&isPay.paid)&& <span className="text-success">PAID</span>
                                         }
                                    </td>
                                    <td className='btn btn-error font-bold'><AiFillDelete/></td>
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