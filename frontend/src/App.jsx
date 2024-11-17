
import Navbar from "./components/Navbar"

import {Routes,Route} from "react-router-dom"
import Register from "./pages/Register"
import Login from "./pages/Login"
import Home from "./pages/Home"
import { UserContextProvider } from "./context/userContext"
import CreatePage from "./pages/CreatePage"
import PostDetails from "./pages/PostDetails"
import EditPost from "./pages/EditPost"
function App() {
  return (
    <div className=''>
      <UserContextProvider>

    <Navbar/>
    <Routes>
      <Route path="/register" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/" element={<Home/>}/>
      <Route path="/create" element={<CreatePage/>}/>
      <Route path="/post/:id" element={<PostDetails/>}/>
      <Route path="/editpost/:id" element={<EditPost/>}/>
    
    </Routes>
      </UserContextProvider>
    </div>
  )
}

export default App
