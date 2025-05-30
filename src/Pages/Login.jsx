import React, { useContext, useState } from "react";
import logo from "../../public/Modern_Letter_S_Logo-removebg-preview (1).png";

import { FaEye, FaEyeSlash } from "react-icons/fa";
import { NavLink } from "react-router";
import { AuthContext } from "../../public/Provider/AuthProvider";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../public/Images/firebase.init";

const googleProvider = new GoogleAuthProvider();

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { login } = useContext(AuthContext);

  const handleGoogleLogin = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        console.log("Google User:", user);
        alert("Login Successfully");
        window.location.href = "/";
      })
      .catch((error) => {
        console.error("Google login error:", error.message);
        alert(error.message);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log("Email:", email, "Password:", password);

    login(email, password)
      .then((result) => {
        const user = result.user;
        console.log("Email/Password User:", user);
        alert("Login Successfully");
        window.location.href = "/";
      })
      .catch((error) => {
        console.error("Login error:", error.message);
        alert(error.message);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-500 text-white px-4 py-12">
      <div className="w-full max-w-md border-2 border-indigo-600 bg-base-500 text-white rounded-lg p-8">
        <div className="text-center">
          <img alt="Your Company" src={logo} className="mx-auto h-30 w-30" />
          <h2 className="mt-6 text-2xl font-bold tracking-tight text-white">
            Sign in to your account
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-white">
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                className="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium text-white">
                Password
              </label>
              <div className="text-sm">
                <a href="#" className="font-semibold text-indigo-300 hover:text-indigo-200">
                  Forgot password?
                </a>
              </div>
            </div>

            <div className="mt-2 relative">
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"} 
                required
                autoComplete="current-password"
                className="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-600"
            >
              Sign in
            </button>
          </div>
        </form>

        <div className="pt-10">
          <h1 className="text-center py-2">Or Connect With</h1>
          <hr className="border-b border-indigo-600 mb-3" />
          <div className="w-full">
            <button
              className="btn bg-white text-black border-[#e5e5e5] w-full"
              onClick={handleGoogleLogin}
            >
              <svg
                aria-label="Google logo"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <g>
                  <path d="m0 0H512V512H0" fill="#fff"></path>
                  <path
                    fill="#34a853"
                    d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                  ></path>
                  <path
                    fill="#4285f4"
                    d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                  ></path>
                  <path
                    fill="#fbbc02"
                    d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                  ></path>
                  <path
                    fill="#ea4335"
                    d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                  ></path>
                </g>
              </svg>
              Login with Google
            </button>
          </div>
        </div>

        <p className="mt-6 text-center text-sm text-white">
          Are You New?{" "}
          <NavLink
            to="/register"
            className="font-semibold text-indigo-300 hover:text-indigo-200"
          >
            Create an account
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default Login;
