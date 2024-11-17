import axios from 'axios'
import  { useEffect, useState } from 'react'
import HomePost from '../components/HomePost'

function Home() {
  const[posts,setposts]=useState([])
  const fetchposts= async ()=>{
    try {
     const res= await axios.get(`http://localhost:5000/api/post/getposts`)
    setposts(res.data.allposts)
    } catch (error) {
        console.log(error);
        
    }
  }


  useEffect(()=>{
    fetchposts()
  },[])

  return (
    <div>
      {posts.length === 0 ? (
        <h1 className='text-center'>No posts to show</h1>
      ) : (
        <div className="my-3">
          {posts.map((post) => (
            <HomePost
              key={post._id} // Use a unique identifier as the key
              title={post.title}
              desc={post.desc}
              file={post.file}
              id={post._id}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home
