/* eslint-disable react/prop-types */

import { Link } from "react-router-dom"


function HomePost({title,desc,file,id}) {
  return (
    <Link to={`/post/${id}`} >
    <div className=' cursor-pointer hover:bg-gray-100 w-full max-h-[100px] flex justify-between md:px-[100px] px-[10px] gap-2 md:gap-5 md:max-h-[200px] md:min-h-[100px] mb-8'>
    {/* Left */}
    <div className=' w-[35%]'>
      {/* {console.log(post) +"kk"} */}
        <img className='w-[100%] h-[100%] md:max-w-96 rounded object-fill' src={`${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/images/${file}`}  alt="img" />
    </div>
    {/* Right */}
    <div className='max-w-[65%]  tracking-tighter flex-col justify-between space-y-1 px-1   overflow-hidden'>
        <h1 className='text-xs md:text-xl font-semibold '> {title}</h1>
        <p className='hidden md:block text-md text-gray-500'>{desc.slice(0,350)}  <span className="font-semibold text-blue-500">...Read more</span></p>
        <div className='flex justify-between text-gray-400 text-xs py-2'>
            {/* <p className="text-gray-800 font-semibold">@{post.username}</p> */}
            {/* <p className="text-gray-800 font-semibold">{new Date (post.updatedAt).toString().slice(0,15)} {new Date (post.updatedAt).toString().slice(16,21)}</p> */}
        </div>
    </div>
  
</div>
</Link>
  )
}
// {post.desc.slice(0,350)}

export default HomePost
