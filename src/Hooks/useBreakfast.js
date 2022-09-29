import { useEffect, useState } from "react"

const useBreakfast = () =>{
    
    const [breakfast, setBreakfast] = useState([]);

    useEffect( () =>{
        fetch('https://red-onion-server-side.onrender.com/breakfast')
        .then(res => res.json())
        .then(data => setBreakfast(data));
    }, []);

    return [breakfast, setBreakfast];
}

export default useBreakfast;