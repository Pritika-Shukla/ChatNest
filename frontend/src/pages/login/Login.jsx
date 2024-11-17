import React, { useState } from "react";
import { Eye, EyeOff, Mail } from "lucide-react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  function togglePasswordVisibility() {
    setShowPassword((prevState) => !prevState);
  }

  const [inputs,setInputs]=useState({
    username:"",
    password:"",
  })

  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(inputs);
  }
  return (
    <div>
      <section class="bg-zinc-950 ">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a
            href="#"
            class=" mr-12 flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
          >
            <img src={logo} alt="Logo" className="h-16 w-16" />
            Login
          </a>
          <div class="w-full rounded-lg    md:mt-0 sm:max-w-md xl:p-0 bg-zinc-900">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Login to your account
              </h1>
              <form class="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="username"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >Username
                  </label>
                  <div className="relative">
                    <input
                      type="username"
                      name="username"
                      id="username"  
                      className="bg-zinc-700 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="JohnDoe"
                      required
                      value={inputs.username}
                      onChange={(e)=>setInputs({...inputs,username:e.target.value})}
                    />
                    <Mail className="absolute inset-y-0 right-0 flex items-center cursor-pointer mr-2 mt-3 text-gray-400"></Mail>
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      id="password"
                      placeholder="••••••••"
                      className="border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-zinc-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required
                      value={inputs.password}
                      onChange={(e)=>setInputs({...inputs,password:e.target.value})}
                    />
                    <div
                      className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                      onClick={togglePasswordVisibility}
                    >
                      {showPassword ? (
                        <Eye className="text-gray-400" />
                      ) : (
                        <EyeOff className="text-gray-400" />
                      )}
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Login
                </button>
                <Link to='/signup' class="text-sm font-light text-gray-500 dark:text-gray-400">
                  Don’t have an account yet?{" "}
                  <a
                    href="#"
                    class="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Sign up
                  </a>
                </Link>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
