import React, { useEffect, useState } from 'react';
import SingleBreakfast from '../SingleBreakfast/SingleBreakfast';
import { getStoredCart, addToDb, deleteShoppingCart, removeFromDb } from '../../utilities/fakedb'
import { Link, useNavigate } from 'react-router-dom';
import './Breakfast.css'
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';

const Breakfast = () => {
  const [breakfast, setBreakfast] = useState([]);
  const [cart, setCart] = useState([])
  const navigate=useNavigate();
  const [user, loading] = useAuthState(auth);
  useEffect(() => {
    fetch('http://localhost:5000/breakfast')
      .then(res => res.json())
      .then(data => setBreakfast(data))
  }, [])

  const handleIncreaseBtn = (selectedProduct) => {
    let newCart = [];
    const exists = cart.find(product => product._id === selectedProduct._id);
    if (!exists) {
      selectedProduct.quantity = 1;
      newCart = [...cart, selectedProduct];
    }
    else {
      const rest = cart.filter(product => product._id !== selectedProduct._id);
      exists.quantity = exists.quantity + 1;
      newCart = [...rest, exists];
    }

    setCart(newCart);
  }

  let total = 0;
  let quantity = 0;

  for (const products of cart) {
    quantity = quantity + products.quantity;
    total = total + products.price * products.quantity;
  }
  const text = parseFloat((total * 5 / 100).toFixed(2));
  const grandTotal = total + text;

  const handleSubmit = event => {
    event.preventDefault();
    const name = user?.displayName;
    const email = user?.email;
    const number = event.target?.PhoneNumber?.value;
    const address = event.target?.address?.value;
    const grandTotal = event.target?.order?.value;
    let orderData = { name, email, number, address,grandTotal }
    console.log(orderData)

    fetch('http://localhost:5000/order', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(orderData),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        alert(`The order has been successfully added, you can confirm the payment by pressing the close button and pressing the pay button.
        অর্ডারটি সফলভাবে যুক্ত করা হয়েছে, আপনি ক্লোজ বোতামটি টিপে এবং পে বোতামটি টিপে অর্থ প্রদান নিশ্চিত করতে পারেন |`)
      })
    event.target.reset();
  }

  return (
    <div style={{ width: '90%', margin: 'auto', marginTop: '80px' }}>
      <h1 className='text-5xl text-center uppercase' style={{ fontFamily: 'Roboto Mono, monospaced', fontWeight: 'bold', color: 'darkcyan' }}>BREAKFAST</h1>
      <div className="divider w-1/4 m-auto mb-10"></div>
      <div style={{ display: 'flex', flexDirection: 'row', gap: '2%' }}>
        <div style={{ width: '75%' }} className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4'>
          {
            breakfast.map(allBreakfast => <SingleBreakfast
              key={allBreakfast._id}
              allBreakfast={allBreakfast}
              handleIncreaseBtn={handleIncreaseBtn}
            ></SingleBreakfast>)
          }
        </div>
        <div style={{ width: '23%' }}>

          <div class="card w-full bg-base-100 shadow-xl">
            <div class="card-body">
              <h1 className='font-bold'>ORDER SUMMARY</h1>
              <h4 className='font-bold'>Order quantity: {quantity}</h4>
              <h4 className='font-bold'>Total: ${total}</h4>
              <h4 className='font-bold'>Text: ${text}</h4>
              <h4 className='font-bold'>GrandTotal: ${grandTotal}</h4>

{/* use modal */}
              <input type="checkbox" id="my-modal" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box">
                <form onSubmit={handleSubmit}>
                    <div class="form-control w-full max-w-xs">
                      <label class="label">
                        <span class="label-text">Name</span>
                      </label>
                      <input type="text" name="name" value={user?.displayName} className="input input-bordered w-full max-w-xs mb-5" disabled />
                    </div>
                    <div class="form-control w-full max-w-xs">
                      <label class="label">
                        <span class="label-text">Email</span>
                      </label>
                      <input type="email" name="email" value={user?.email} className="input input-bordered w-full max-w-xs mb-5" disabled />
                    </div>
                    <div class="form-control w-full max-w-xs">
                      <label class="label">
                        <span class="label-text">Phone Number</span>
                      </label>
                      <input type="text" name="PhoneNumber" placeholder='Enter your Phone Number' required className="input input-bordered w-full max-w-xs mb-5" />
                    </div>
                    <div class="form-control w-full max-w-xs">
                      <label class="label">
                        <span class="label-text">Address</span>
                      </label>
                      <input type="text" name="address" placeholder='Enter your current address' required className="input input-bordered w-full max-w-xs mb-5" />
                    </div>
                    <div class="form-control w-full max-w-xs">
                      <label class="label">
                        <span class="label-text">GrandTotal</span>
                      </label>
                      <input type="text" name="order" placeholder='Enter your Grand Total' required value={grandTotal} className="input input-bordered w-full max-w-xs mb-5" />
                    </div>
                    <input
                      type="submit" value="Order Now" className='btn btn-accent w-3/4 text-white' />
                  </form>
                    <div class="modal-action">
                        <label for="my-modal" class="btn">CLOSE</label>
                    </div>
                </div>
            </div>


              <label for="my-modal" class="btn modal-button">ORDER NOW</label>
              <Link to='/myOrder' className='btn btn-error text-white w-full'>PAY</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Breakfast;