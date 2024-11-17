import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { toast } from "react-toastify"


function EditPost() {
    const [title,setTitle]=useState("")
    const [desc,setDesc]=useState("")
    
    const navigate=useNavigate()
    const {id} = useParams()
    const handelSubmit=async(e)=>{
        e.preventDefault()
        try {
         
          
            const res= await axios.put("http://localhost:5000/api/post/editpost/"+id, {title,desc},{withCredentials:true})
            console.log(res.data);
            toast.success(res.data.message)
            navigate("/")
    
       
           } catch (error) {
             
             console.log(error);
             toast.error(error.response.data.message)
             
           }
    }

    const fetchOldData= async ()=>{
         try {

      const res = await axios.get(`http://localhost:5000/api/post/getpost/${id}`);
      setTitle(res.data.post.title);
      setDesc(res.data.post.desc);
    } catch (error) {
      console.log(error);
    }
    }
    useEffect(()=>{
        fetchOldData()
    },[])
  return (
    <div className='px-6 md:px-[200px] mt-8'>
    <h1 className='font-bold md:text-2xl text-xl '>Edit post</h1>
    <form onSubmit={handelSubmit} className='w-full flex flex-col space-y-4 md:space-y-8 mt-4'>
      <input value={title} onChange={(e)=>setTitle(e.target.value)}  type="text" placeholder='Enter post title' className='px-4 py-2 outline-none'/>
      
      <textarea value={desc} onChange={(e)=>setDesc(e.target.value)} rows={9}  className='px-4 py-2 outline' placeholder='Enter post description'/>
      <button  className='bg-black w-full md:w-[20%] mx-auto text-white font-semibold px-4 py-2 md:text-xl text-lg'>Update</button>
    </form>

    </div>
  )
}

export default EditPost
