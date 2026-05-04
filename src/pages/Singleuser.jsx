import React from "react";

function Singleuser() {
  const blogs = [
    {
      id: 1,
      title: "Introducing Whisper",
      author: "Elon Musk",
      date: "August 17th, 2023",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6-a36k6Y-A9vV3_HnN8A-a27V_J8XpX4yZg&s",
      desc: "Whisper is an automatic speech recognition (ASR) system trained on 680,000 hours of multilingual and multitask supervised data collected from the web. We show that the use of such a large and diverse dataset leads to improved robustness to accents, background noise and technical language. Moreover, it enables transcription in multiple languages, as well as translation from those languages into English.",
    },
    {
      id: 2,
      title: "Introducing ChatGPT",
      author: "Elon Musk",
      date: "November 23rd, 2022",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6-a36k6Y-A9vV3_HnN8A-a27V_J8XpX4yZg&s",
      desc: "We've trained a model called ChatGPT which interacts in a conversational way. The dialogue format makes it possible for ChatGPT to answer followup questions, admit its mistakes, challenge incorrect premises, and reject inappropriate requests. Methods: We trained this model using Reinforcement Learning from Human Feedback (RLHF), using the same methods as InstructGPT.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="bg-[#7E3AF2] text-white px-10 py-2 flex justify-between items-center shadow-md">
        <h1 className="font-bold text-lg">Personal Blogging App</h1>
        <button className="text-sm font-medium hover:underline">Login</button>
      </nav>

      {/* Breadcrumb Section */}
      <div className="bg-gray-50 border-b border-gray-100 py-10 px-10">
        <div className="max-w-6xl mx-auto">
          <button className="text-[#7E3AF2] text-3xl font-bold flex items-center gap-2 hover:opacity-80 transition-opacity">
            <span>&lt;</span> Back to all blogs
          </button>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="max-w-6xl mx-auto py-10 px-10 grid grid-cols-12 gap-12">
        
        {/* Left Column: Blog Feed */}
        <div className="col-span-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            All from Elon Musk
          </h2>

          <div className="space-y-8">
            {blogs.map((blog) => (
              <div
                key={blog.id}
                className="bg-white shadow-lg rounded-xl p-8 border border-gray-100"
              >
                <div className="flex gap-6 items-start">
                  <img
                    src={blog.image}
                    alt="author"
                    className="w-16 h-16 rounded-lg object-cover shadow-md"
                  />
                  <div>
                    <h4 className="font-bold text-2xl text-gray-900 mb-1">
                      {blog.title}
                    </h4>
                    <p className="text-sm text-gray-500 font-medium mb-4">
                      {blog.author} - {blog.date}
                    </p>
                    <p className="text-gray-600 leading-relaxed text-base">
                      {blog.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Author Profile */}
        <div className="col-span-4 flex flex-col items-end pt-12">
          <a href="mailto:elon@openai.com" className="text-gray-800 underline font-semibold text-lg mb-2">
            elon@openai.com
          </a>
          <h3 className="text-[#7E3AF2] text-5xl font-black mb-6">
            Elon Musk
          </h3>
          <div className="w-full">
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6-a36k6Y-A9vV3_HnN8A-a27V_J8XpX4yZg&s" 
              alt="Elon Musk Large" 
              className="w-full h-[400px] object-cover rounded-3xl shadow-2xl"
            />
          </div>
        </div>

      </div>
    </div>
  );
}

export default Singleuser;