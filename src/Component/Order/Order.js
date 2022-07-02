import React from 'react';
import useBreakfast from '../../Hooks/useBreakfast';
import useCart from '../../Hooks/useCart';

const Order = () => {
    const [breakfast, setBreakfast] = useBreakfast([]);
    const [cart,setCart]=useCart(breakfast)
    return (
        <div>
            <h1>order now</h1>
            <p>{breakfast.length}</p>
            <p>{cart.length}</p>
        </div>
    );
};

export default Order;