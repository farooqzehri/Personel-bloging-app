import React, { useEffect } from "react";
import { supabase } from "../config/supabase";

import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();
  const blogs = [
    {
      id: 1,
      title: "An Action Button Could Be Coming to the iPhone 15",
      author: "Farooq Zehri",
      date: "May 5th, 2026",
      desc: "Apple could be putting an Action button on your next iPhone. According to a July report from MacRumors, one of the iPhone 15 models is developer to feature a new button in the next-gen iPhone 15 Pro and Pro Max models.",
    },
    {
      id: 2,
      title: "What Is the Event Loop and How Does It Improve App Performance?",
      author: "Farooq Zehri",
      date: "May 5th, 2026",
      desc: "JavaScript is a single-threaded language, but to handle tasks one at a time. However, the event loop lets JavaScript handle events and callbacks asynchronously by ensuring simultaneous programming systems.",
    },
  ];
   useEffect(()=> {
      const getUser = async () => {
  
        const {data , error} = await supabase.auth.getUser();
        if (error){
          console.log(error);
          navigate('/login')
          }else{
            console.log(data );
          }
        
      }
      getUser();
    }, [])
  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if(error){
      console.log(error);
    }else{

      navigate('/login')
    }
  }
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-[#7E3AF2] text-white px-10 py-3 flex justify-between items-center shadow-sm">
        <h1 className="font-bold text-lg tracking-tight">Personal Blogging App</h1>
        <div className="flex items-center gap-6 text-sm">
          <span className="font-medium cursor-pointer hover:underline">Farooq Zehri</span>
          <button className="bg-white/20 px-3 py-1 rounded hover:bg-white/30 transition" onClick={handleLogout}>Logout</button>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto py-10 px-6">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-8">Dashboard</h2>

        {/* Improved Blog Form */}
        <div className="bg-white shadow-xl border border-gray-100 rounded-xl p-8 mb-12">
          <input
            type="text"
            placeholder="Title"
            className="w-full border border-gray-200 rounded-lg px-4 py-3 mb-4 outline-none focus:ring-2 focus:ring-[#7E3AF2]/50 transition"
          />
          <textarea
            rows="5"
            placeholder="What is on your mind?"
            className="w-full border border-gray-200 rounded-lg px-4 py-3 mb-4 outline-none focus:ring-2 focus:ring-[#7E3AF2]/50 transition resize-none"
          ></textarea>
          <button className="bg-[#7E3AF2] hover:bg-[#6930d3] text-white px-8 py-2.5 rounded-lg font-semibold transition shadow-md">
            Publish blog
          </button>
        </div>

        <h3 className="text-2xl font-bold text-gray-800 mb-6">My Blogs</h3>
        <div className="space-y-6">
          {blogs.map((blog) => (
            <div key={blog.id} className="bg-white shadow-md rounded-xl p-6 border border-gray-50 flex gap-5">
              <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="blog" className="w-20 h-20 rounded-lg object-cover" />
              <div className="flex-1">
                <h4 className="font-bold text-xl text-gray-900">{blog.title}</h4>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                  {blog.author} • {blog.date}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{blog.desc}</p>
                <div className="flex gap-4 text-sm font-bold">
                  <button className="text-red-500 hover:underline">Delete</button>
                  <button className="text-[#7E3AF2] hover:underline">Edit</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;