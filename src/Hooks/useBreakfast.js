import { useEffect, useState } from "react"

const useBreakfast = () =>{
    
    const [breakfast, setBreakfast] = useState([]);

    useEffect( () =>{
        fetch('https://whispering-oasis-37712.herokuapp.com/breakfast')
        .then(res => res.json())
        .then(data => setBreakfast(data));
    }, []);

    return [breakfast, setBreakfast];
}

export default useBreakfast;