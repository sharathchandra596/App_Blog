import axios from "axios"
import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { UserContext } from "../context/userContext"


function CreatePage() {
    const [title,setTitle]=useState("")
    const [desc,setDesc]=useState("")
    const [file,setFile]=useState("")
    const navigate=useNavigate()
    const {user}= useContext(UserContext)
    const handelSubmit=async(e)=>{
        e.preventDefault()
        try {
            const formData=new FormData()
            formData.append("title",title)
            formData.append("desc",desc)
            formData.append("file",file)
            formData.append("email",user.email)
            const res= await axios.post(`http://localhost:5000/api/post/create`, formData,{withCredentials:true})
            console.log(res.data);
            toast.success(res.data.message)
            navigate("/")
    
       
           } catch (error) {
             
             console.log(error);
             toast.error(error.response.data.message)
             
           }
    }
  return (
    <div className='px-6 md:px-[200px] mt-8'>
    <h1 className='font-bold md:text-2xl text-xl '>Create a post</h1>
    <form onSubmit={handelSubmit} className='w-full flex flex-col space-y-4 md:space-y-8 mt-4'>
      <input onChange={(e)=>setTitle(e.target.value)}  type="text" placeholder='Enter post title' className='px-4 py-2 outline-none'/>
      <input onChange={e=>setFile(e.target.files[0])} type="file" placeholder="select file" />
      
      <textarea onChange={(e)=>setDesc(e.target.value)} rows={9}  className='px-4 py-2 outline' placeholder='Enter post description'/>
      <button  className='bg-black w-full md:w-[20%] mx-auto text-white font-semibold px-4 py-2 md:text-xl text-lg'>Create</button>
    </form>

    </div>
  )
}

export default CreatePage
