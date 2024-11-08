import React, { useState } from "react";
import { Eye, EyeOff, Mail, UserRoundPen } from "lucide-react";
import logo from "../../assets/logo.png";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  function togglePasswordVisibility() {
    setShowPassword((prevState) => !prevState);
  }

  function toggleConfirmPasswordVisibility() {
    setShowConfirmPassword((prevState) => !prevState);
  }

  return (
    <div>
      <section className="bg-zinc-950">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0">
          <a
            href="#"
            className="flex items-center mb-2 mr-14 text-2xl font-semibold text-gray-900 dark:text-white"
          >
                 <img src={logo} alt="Logo" className="h-16 w-16" />

            Signup
          </a>
          <div className="w-full rounded-lg md:mt-0 sm:max-w-md xl:p-0 bg-zinc-900">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Signup to your account
              </h1>
              <form className="space-y-4 md:space-y-6" action="#">
                <div>
                  <label
                    htmlFor="full-name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Full name
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="bg-zinc-700 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Enter your fullname"
                      required
                    />
                    <UserRoundPen className="absolute inset-y-0 right-0 flex items-center cursor-pointer mr-2 mt-3 text-gray-400" />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="bg-zinc-700 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="name@company.com"
                      required
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
                <div>
                  <label
                    htmlFor="confirm-password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Confirm Password
                  </label>
                  <div className="relative">
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      name="confirm-password"
                      id="confirm-password"
                      placeholder="••••••••"
                      className="border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-zinc-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required
                    />
                    <div
                      className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                      onClick={toggleConfirmPasswordVisibility}
                    >
                      {showConfirmPassword ? (
                        <Eye className="text-gray-400" />
                      ) : (
                        <EyeOff className="text-gray-400" />
                      )}
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <span className="block mb-2 text-sm font-medium  text-white">
                    Gender
                  </span>
                  <div className="mt-2">
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        className="form-radio"
                        name="gender"
                        value="male"
                      />
                      <span className="ml-2 text-white">Male</span>
                    </label>
                    <label className="inline-flex items-center ml-6">
                      <input
                        type="radio"
                        className="form-radio"
                        name="gender"
                        value="female"
                      />
                      <span className="ml-2 text-white">Female</span>
                    </label>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Signup
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Don’t have an account yet?{" "}
                  <a
                    href="#"
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Login
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Signup;
