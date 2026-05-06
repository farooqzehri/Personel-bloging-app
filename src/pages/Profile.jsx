import React from "react";
import { supabase } from "../config/supabase";
import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();
    const handleLogout = async () => {
    await supabase.auth.signOut()
    navigate('/login')
  }
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-[#7E3AF2] text-white px-10 py-3 flex justify-between items-center shadow-sm">
        <h1 className="font-bold text-lg">Personal Blogging App</h1>
        <button className="text-sm font-medium hover:underline" onClick={handleLogout}>
          Logout
        </button>
      </nav>

      <div className="max-w-4xl mx-auto py-12 px-6">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-8">Profile</h2>

        <div className="bg-white shadow-2xl rounded-2xl p-10 border border-gray-100">
          <div className="relative inline-block mb-6">
            <img
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="profile"
              className="w-32 h-32 rounded-2xl object-cover shadow-lg border-4 border-white"
            />
            <button className="absolute -bottom-2 -right-2 bg-[#7E3AF2] text-white p-2 rounded-full shadow-lg hover:scale-110 transition">
              ✎
            </button>
          </div>

          <h3 className="font-bold text-2xl text-gray-800 mb-8 border-b pb-4">Farooq Zehri</h3>

          <div className="max-w-md">
            <h4 className="font-bold text-gray-500 uppercase text-xs tracking-widest mb-4">Update Password</h4>
            <div className="space-y-4">
              <input
                type="password"
                placeholder="Old password"
                className="w-full border border-gray-200 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-[#7E3AF2]/50"
              />
              <input
                type="password"
                placeholder="New Password"
                className="w-full border border-gray-200 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-[#7E3AF2]/50"
              />
              <input
                type="password"
                placeholder="Repeat password"
                className="w-full border border-gray-200 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-[#7E3AF2]/50"
              />
              <button className="w-full bg-[#7E3AF2] hover:bg-[#6930d3] text-white font-bold py-3 rounded-lg shadow-lg transition">
                Update Password
              </button>
              <p>test@gmail.com <span><b>112233</b></span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;