import React from "react";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center "
      style={{ backgroundImage: "url('/assets/bg-image1.png')" }}
    >
      <div className="bg-black/80 p-10 rounded-lg shadow-xl w-full max-w-md border border-gray-700">
        <h1 className="text-4xl font-bold text-center text-[#e4005e] mb-6 uppercase">
          Forgot Password
        </h1>
        <p className="text-sm text-center text-gray-300 mb-6">
          Enter your email address below and we'll send you instructions to reset your password.
        </p>
        <form className="space-y-6">
          <div>
            <label className="block text-white font-medium mb-2">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#e4005e]"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#e4005e] hover:bg-[#ff0080] text-white py-3 rounded font-semibold transition duration-300 cursor-pointer"
          >
            Reset Password
          </button>
        </form>
        <div className="mt-6 flex justify-center">
          <p className="text-gray-300 text-sm">
            Remember your password?{" "}
            <Link
              to="/login"
              className="underline font-semibold text-[#e4005e] hover:text-[#ff0080]"
            >
              Login here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
