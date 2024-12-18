/* eslint-disable react/prop-types */
import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

export const UserContextProvider = ({children}) =>{
    const [user,setuser]=useState({})

    const fetchlogedinuser= async()=>{
        try {
            const res =  await axios.get(`${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/api/user/loginuser`,{withCredentials:true})
            console.log(res)
            setuser(res.data)
            
          } catch (error) {
              console.log(error);
              console.log("error in fetch logged in user function")
              
          }
    }
    useEffect(()=>{
        fetchlogedinuser()
    },[])

    
        return <UserContext.Provider value={{user}}>
            {children}
        </UserContext.Provider>
    
}