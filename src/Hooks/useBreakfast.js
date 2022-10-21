import { useEffect, useState } from "react"

const useBreakfast = () =>{
    
    const [breakfast, setBreakfast] = useState([]);

    useEffect( () =>{
        fetch('https://red-onion-server-side-production.up.railway.app/breakfast')
        .then(res => res.json())
        .then(data => setBreakfast(data));
    }, []);

    return [breakfast, setBreakfast];
}

export default useBreakfast;