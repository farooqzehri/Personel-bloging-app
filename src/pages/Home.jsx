import  { useEffect } from "react";
import { supabase } from "../config/supabase";
import { Navigate, useNavigate } from "react-router-dom";
import React from "react";

function Home() {
  const navigate = useNavigate()
  const blogs = [
    {
      id: 1,
      title: "Introducing Whisper",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHvmQTw2KvOBn_PhOjxFXNvd3mhIvkdXblMzv4stAbnAJe05Z4m2tpqdSaOsMF24l8wxLHmEKQdLCTc3monS9PHmR6_sNFtbISF51zmMQ&s=10",
      author: "Elon Musk",
      date: "August 17th, 2025",
      desc: "Whisper is an automatic speech recognition (ASR) system trained on 680,000 hours of multilingual and multitask supervised data collected from the web. We show that the use of such a large and diverse dataset leads to improved robustness to accents, background noise and technical language.",
    },
    {
      id: 2,
      title: "An Action Button Could Be Coming to the iPhone 15",
      author: "Farooq Zehri",
      date: "May 5th, 2026",
      desc: "Apple could be putting an Action button on your next iPhone. According to a July report from MacRumors, one of the iPhone 15 models is developer to feature a new Action button on the next-gen iPhone 15 Pro and Pro Max models.",
    },
    {
      id: 3,
      title: "What Is the Event Loop and How Does It Improve App Performance?",
      author: "Farooq Zehri",
      date: "May 5th, 2026",
      desc: "JavaScript is a single-threaded language, but to handle tasks one at a time. However, the event loop lets JavaScript handle events and callbacks asynchronously by ensuring simultaneous programming systems.",
    },
  ];

  
  const logout = async () => {
    const {error} = await supabase.auth.signOut()
    if(error){
      console.log(error);
    }else{
       navigate('/login')
    }
    
    
  }
 

  return (
    <div className="min-h-screen bg-gray-100">
     
      <nav className="bg-purple-600 text-white px-10 py-3 flex justify-between items-center">
        <h1 className="font-semibold text-sm">Personal Blogging App</h1>

        <button className="bg-white/20 px-3 py-1 rounded hover:bg-white/30 transition" onClick={logout}>Logout</button>
      </nav>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto py-8 px-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">
          Good Morning Readers!
        </h2>

        <h3 className="text-xl font-semibold mb-5">
          All Blogs
        </h3>

        {/* Blog Cards */}
        <div className="space-y-5">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white shadow-sm rounded-md p-5 border"
            >
              <div className="flex gap-4">
                {/* Blog Image */}
                <img
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="blog"
                  className="w-14 h-14 rounded"
                />

                {/* Blog Content */}
                <div>
                  <h4 className="font-bold text-lg text-gray-800">
                    {blog.title}
                  </h4>

                  <p className="text-sm text-gray-500 mb-2">
                    {blog.author} - {blog.date}
                  </p>

                  <p className="text-sm text-gray-600 leading-relaxed">
                    {blog.desc}
                  </p>

                  <button className="mt-3 text-sm text-purple-600 font-medium"
                  onClick={() => navigate(`/singleuser`)}>
                    see all from this user
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;