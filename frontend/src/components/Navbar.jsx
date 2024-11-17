import { useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import { UserContext } from "../context/userContext"
import axios from "axios"


function Navbar() {
  const {user}= useContext(UserContext)
  console.log(user)
  const navigate=useNavigate()

  const handelLogout=async()=>{
    try {
      await axios.get(`http://localhost:5000/api/user/logout`,{withCredentials:true})
      navigate(0)
      
    } catch (error) {
      console.log(error)
    }
  }

  
  
  return (
    <div className='flex justify-around p-2 text-gray-50 bg-gray-900'>
      <div className='text-2xl font-bold'><h1>Blog-APP</h1></div>
      <ul className='flex justify-between gap-3'>
       
         <li><Link to={"/"}>Home</Link></li>
         {user.username &&  <li><Link to={"/create"}>Create</Link></li>}
        
       
        <li>contact</li>
      </ul>
      <div >
        {
          user.username ? <p onClick={handelLogout}><Link to={"/login"}> Logout</Link> </p>
           :
           <p > <Link  to={"/register"}>Register/login </Link>   </p>
          

        }
      </div>
    </div>
  )
}

export default Navbar
