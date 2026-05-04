import React from 'react'

function Login() {
  return (
    <>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
        <form className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg space-y-5">
          
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-800">
              Welcome Back
            </h1>
            <p className="text-gray-500 mt-2">
              Login to your account
            </p>
          </div>

          <input
            type="email"
            placeholder="Email"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-300"
          >
            Login
          </button>

        </form>
      </div>
    </>
  )
}

export default Login