import React, { useState } from 'react';
import { supabase } from '../config/supabase';

function Register() {
  const [email, setEmail] = useState('');
  const  [password, setPassword] = useState(''); 

  const registerUser = async (e) => {
    e.preventDefault();
    const {data , error} = await supabase.auth.signUp({
      email , password
    })
    if(error) {
      console.log(error)
    }else{
      console.log(data.user);
      
    }
  }

  return (
    <div className="min-h-screen bg-[#7E3AF2] flex items-center justify-center px-4">
      <form  onSubmit={registerUser} className="w-full max-w-md bg-white p-10 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.2)] space-y-6">
        <div className="text-center">
          <h1 className="text-4xl font-black text-gray-900 tracking-tight">Create Account</h1>
          <p className="text-gray-500 mt-2 font-medium">Join our community today</p>
        </div>

        <div className="grid grid-cols-2 gap-4">
            <input type="text" placeholder="First Name" className="w-full border-gray-200 border rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#7E3AF2] outline-none transition" />
            <input type="text" placeholder="Last Name" className="w-full border-gray-200 border rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#7E3AF2] outline-none transition" />
        </div>

        <input type="email" placeholder="Email Address" value={email} onChange={(e)=>setEmail(e.target.value)} className="w-full border-gray-200 border rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#7E3AF2] outline-none transition" />
        <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}   className="w-full border-gray-200 border rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#7E3AF2] outline-none transition" />
        <input type="password" placeholder="Repeat Password" className="w-full border-gray-200 border rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#7E3AF2] outline-none transition" />

        <button className="w-full bg-[#7E3AF2] hover:bg-black text-white font-bold py-4 rounded-xl shadow-xl transition-all duration-300 transform hover:-translate-y-1" type="submit">
          Sign Up
        </button>

        <p className="text-center text-sm text-gray-500">
          Already have an account? <span className="text-[#7E3AF2] font-bold cursor-pointer hover:underline">Login</span>
        </p>
      </form>
    </div>
  );
}

// For Login.jsx, simply remove the Name fields and the "Repeat Password" field.
export default Register;