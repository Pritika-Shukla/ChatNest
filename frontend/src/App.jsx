import { Routes,Route } from "react-router-dom"
import  Home from "./pages/home/Home"
import Login from "./pages/login/Login"
import SignUp from "./pages/signup/SignUp"
import { Toaster } from "react-toastify";
function App() {


  return (

  <><Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
    </Routes>
   <Toaster/>
    </>
  )
}

export default App
