import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center "
      style={{ backgroundImage: "url('/assets/bg-image1.png')" }}
    >
      <div className="bg-black/80 p-10 rounded-lg shadow-xl w-full max-w-md border border-gray-700">
        <h1 className="text-4xl font-bold text-center text-[#e4005e] mb-6 uppercase">
          Login
        </h1>
        <p className="text-sm text-center text-gray-300 mb-6">
          All artisans are requested to sign up and showcase their products as registered users. For any queries, please contact us.
        </p>
        <form className="space-y-6">
          <div>
            <label className="block text-white font-medium mb-2">
              Username
            </label>
            <input
              type="text"
              placeholder="Enter your username"
              className="w-full px-4 py-3 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#e4005e]"
            />
          </div>
          <div>
            <label className="block text-white font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-3 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#e4005e]"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#e4005e] hover:bg-[#ff0080] text-white py-3 rounded font-semibold transition duration-300"
          >
            Login
          </button>
        </form>
        <div className="mt-6 flex flex-col items-center">
          <p className="text-gray-300 text-sm">
            Not a member?{" "}
            <Link
              to="/signup"
              className="underline font-semibold text-[#e4005e] hover:text-[#ff0080]"
            >
              Signup here
            </Link>
          </p>
          <p className="text-gray-300 text-sm mt-2">
            Forgot Password?{" "}
            <Link
              to="/forgot-password"
              className="underline font-semibold text-[#e4005e] hover:text-[#ff0080]"
            >
              Click here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
