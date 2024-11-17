import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { toast } from "react-toastify";
import { UserContext } from "../context/userContext";

function PostDetails() {
  const { id } = useParams();
  const [post, setPost] = useState({});
  const navigate = useNavigate();
  const {user}= useContext(UserContext)

  const fetchpostDetails = async () => {
    try {
      const res = await axios.get(
        `http://localhost:5000/api/post/getpost/${id}`
      );
      setPost(res.data.post);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchpostDetails();
  }, []);

  const handeldelete = async (id) => {
    try {
      const res = await axios.delete(
        `http://localhost:5000/api/post/deletepost/${id}`
      );
      toast.success(res.data.message);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="px-8 ">
      {/* heading and edit button */}
      <div className="flex justify-between items-center">
        <div className=" heading flex justify-between   items-center">
          <h1 className="text-sm font-semibold md:text-2xl mt-5">
            {post.title}
          </h1>
        </div>

        <div className="flex gap-2">
            {user.email === post.email&&(
                <>
                <Link to={`/editpost/${post._id}`} >   <FaEdit size={25} /></Link>
                <Link onClick={()=>handeldelete(post._id)}><MdDelete size={25} /></Link>
                </>
            )}
          
        </div> 
      </div>

      <div className="flex flex-col justify-between gap-4">
        <img
          className="max-h-[400px] md:max-w-[1000px] m-auto object-fit rounded"
          src={`http://localhost:5000/images/${post.file}`}
          alt="image"
        />

        {/* <p className="  text-sm md:text-lg text-left"></p> */}
        <p className="  text-sm md:text-lg text-left">{post.desc}</p>
      </div>
    </div>
  );
}

export default PostDetails;
