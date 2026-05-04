import React from "react";

function Profile() {
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
          Profile
        </h2>

        {/* Profile Card */}
        <div className="bg-white shadow-md rounded-md p-6 max-w-3xl">
          {/* Profile Image */}
          <img
            src="https://avatars.githubusercontent.com/u/217073583?v=4"
            alt="profile"
            className="w-28 h-28 rounded-xl object-cover mb-4"
          />

          {/* Name + Edit */}
          <div className="flex items-center gap-2 mb-4">
            <h3 className="font-semibold text-lg text-gray-800">
              Farooq Zehri
            </h3>
            <button className="text-purple-600 text-sm">
              ✎
            </button>
          </div>

          {/* Password Section */}
          <h4 className="font-semibold text-gray-700 mb-3">
            Password
          </h4>

          <div className="space-y-3 max-w-xs">
            <input
              type="password"
              placeholder="Old password"
              className="w-full border border-purple-400 rounded px-4 py-2 outline-none"
            />

            <input
              type="password"
              placeholder="New Password"
              className="w-full border border-gray-300 rounded px-4 py-2 outline-none"
            />

            <input
              type="password"
              placeholder="Repeat password"
              className="w-full border border-gray-300 rounded px-4 py-2 outline-none"
            />

            <button className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded text-sm">
              Update password
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;