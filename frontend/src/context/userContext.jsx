/* eslint-disable react/prop-types */
import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

export const UserContextProvider = ({children}) =>{
    const [user,setuser]=useState({})

    const fetchlogedinuser= async()=>{
        try {
            const res =  await axios.get(`http://localhost:5000/api/user/loginuser`,{withCredentials:true})
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