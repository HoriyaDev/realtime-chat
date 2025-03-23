import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BsEyeSlash, BsEyeFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLogin = async (e) => {
    // Make function async
    e.preventDefault();

    navigate("./home");
  };

  const handleShow = () => {
    setShowPassword(!showPassword);
  };

  return (
  <>
   <section className="min-h-screen md:w-full flex justify-center items-center bg-gray-100">
    <div className="w-full max-w-md p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-center text-2xl font-bold mb-6">Sign in to your account</h1>
  
      <form onSubmit={handleLogin}>
        <div className="relative mb-4">
          <label htmlFor="email" className="block mb-1 font-bold text-gray-700">
            Email address
          </label>
          <input type="email" id="email" name="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5" />
        </div>
  
        <div className="relative mb-4">
          <label htmlFor="password" className="block mb-1 font-bold text-gray-700">
            Password
          </label>
          <input type="password" id="password" name="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5" />
        </div>
  
        <button type="submit"
          className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5">
          Login
        </button>
  
        <div className="mt-5 text-center">
          <p>Don't have an account?
            <Link to="/signup" className="font-bold"> Sign up Here</Link>
          </p>
        </div>
      </form>
    </div>
  </section>
  
  </>
  );
};

export default SignIn;
