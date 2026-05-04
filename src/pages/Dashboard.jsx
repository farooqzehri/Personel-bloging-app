import React from "react";

function Dashboard() {
  const blogs = [
    {
      id: 1,
      title: "An Action Button Could Be Coming to the iPhone 15",
      author: "Farooq Zehri",
      date: "may 5th, 2026",
      desc: "Apple could be putting an Action button on your next iPhone. According to a July report from MacRumors, one of the iPhone 15 models is developer to feature a new button in the next-gen iPhone 15 Pro and Pro Max models.",
    },
    {
      id: 2,
      title: "What Is the Event Loop and How Does It Improve App Performance?",
      author: "Farooq Zehri",
      date: "may 5th, 2026",
      desc: "JavaScript is a single-threaded language, but to handle tasks one at a time. However, the event loop lets JavaScript handle events and callbacks asynchronously by ensuring simultaneous programming systems.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-purple-600 text-white px-10 py-3 flex justify-between items-center">
        <h1 className="font-semibold text-sm">Personal Blogging App</h1>

        <div className="flex gap-6 text-xs">
          <button>Farooq Zehri</button>
          <button className="text-xl">Logout</button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto py-8 px-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">
          Dashboard
        </h2>

        {/* Blog Form */}
        <div className="bg-white shadow-md rounded-md p-6 mb-8">
          <input
            type="text"
            placeholder="Placeholder"
            className="w-full border border-purple-400 rounded px-4 py-2 mb-4 outline-none"
          />

          <textarea
            rows="4"
            placeholder="What is in your mind"
            className="w-full border border-gray-200 rounded px-4 py-2 mb-4 outline-none resize-none"
          ></textarea>

          <button className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded text-sm">
            Publish blog
          </button>
        </div>

        {/* Blogs Section */}
        <h3 className="text-xl font-semibold mb-4">My Blogs</h3>

        <div className="space-y-5">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white shadow-sm rounded-md p-5 border"
            >
              <div className="flex gap-4">
                {/* Blog Image */}
                <img
                  src="https://avatars.githubusercontent.com/u/217073583?v=4"
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

                  <div className="flex gap-4 mt-3 text-sm text-purple-600 font-medium">
                    <button>Delete</button>
                    <button>Edit</button>
                  </div>
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