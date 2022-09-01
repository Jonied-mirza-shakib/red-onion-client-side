import { useEffect, useState } from "react"

const useAdmin=user=>{
    const [admin,setAdmin]=useState();
    const [adminLoading,setAdminLoading]=useState(true);
    useEffect(()=>{
        const email=user?.email;
        if(email){
            fetch(`https://red-onion-server-side.vercel.app/admin/${email}`, {
                method: 'GET', // or 'PUT'
                headers: {
                  'content-type': 'application/json',
                  'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
              })
                .then(res => res.json())
                .then(data => {
                  setAdmin(data.admin)
                  setAdminLoading(false)
                })
        }
    },[user])
    return[admin,adminLoading]
}
export default useAdmin;