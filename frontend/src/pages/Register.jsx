import { useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import { toast } from "react-toastify"


function Register() {
  const [username,setUsername]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")

  const handelsubmit= async(e)=>{
    try {
      e.preventDefault()
    const res=  await axios.post("http://localhost:5000/api/user/register",{username,email,password})
    console.log(res.data);
    toast.success("User created successfully")
      
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message)
      
    }
     
  }

  return (
    <div className="min-h-[90vh] flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-sm bg-white p-8 rounded-md shadow-md">
        <h2 className="text-center text-2xl font-semibold text-gray-800 mb-6">
          Create an account
        </h2>
        <form onSubmit={handelsubmit}>
        <div className="mb-4">
            <input
              value={username}
              onChange={(e)=>setUsername(e.target.value)}
              type="text"
              placeholder="Enter your userName"
              className="w-full px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:border-black"
            />
          </div>
          <div className="mb-4">
            <input
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:border-black"
            />
          </div>
          <div className="mb-6">
            <input
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:border-black"
            />
          </div>
          <button
            
            type="submit"
            className="w-full py-2 bg-black text-white font-semibold rounded-md hover:bg-gray-800"
          >
            Register
          </button>
        </form>
        <p className="text-center mt-4 text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="text-black font-semibold">
            Log in
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Register
