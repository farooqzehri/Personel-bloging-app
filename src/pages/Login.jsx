import React from 'react';

function Login() {
  return (
    <div className="min-h-screen bg-[#7E3AF2] flex items-center justify-center px-4">
      <form className="w-full max-w-md bg-white p-10 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.2)] space-y-6">
        <div className="text-center">
          <h1 className="text-4xl font-black text-gray-900 tracking-tight">Login</h1>
        </div>

        <input type="email" placeholder="Email Address" className="w-full border-gray-200 border rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#7E3AF2] outline-none transition" />
        <input type="password" placeholder="Password" className="w-full border-gray-200 border rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#7E3AF2] outline-none transition" />
      

        <button className="w-full bg-[#7E3AF2] hover:bg-black text-white font-bold py-4 rounded-xl shadow-xl transition-all duration-300 transform hover:-translate-y-1">
          Sign Up
        </button>

       
      </form>
    </div>
  );
}

// For Login.jsx, simply remove the Name fields and the "Repeat Password" field.
export default Login;