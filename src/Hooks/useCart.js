import { useEffect, useState } from "react"
import { getStoredCart } from "../utilities/fakedb";

const useCart = (breakfast) => {
    const [cart, setCart] = useState([]);

    useEffect( () =>{
        const storedCart = getStoredCart();
        const savedCart = [];
        for(const id in storedCart){
            const addedProduct = breakfast.find(product => product.id === id);
            if(addedProduct){
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
            }
        }
        setCart(savedCart);
    }, [breakfast]);
    
    return [cart, setCart];
}

export default useCart;