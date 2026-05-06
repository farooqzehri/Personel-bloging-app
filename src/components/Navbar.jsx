import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-[#7E3AF2] text-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 h-16 flex justify-between items-center">
        
        {/* Brand Logo */}
        <div className="flex items-center gap-8">
          <Link to="/" className="text-xl font-bold tracking-tight hover:opacity-90 transition">
            Personal Blogging App
          </Link>

          {/* Main Navigation */}
          <div className=" md:flex items-center gap-6 text-sm font-medium">
            <Link to="/" className=" hidden hover:text-purple-200 transition">Home</Link>
            <Link to="/dashboard" className="hover:text-purple-200 transition">Dashboard</Link>
          </div>
        </div>

        {/* User Actions */}
        <div className="flex items-center gap-5 text-sm">
          <Link to="/profile" className="font-semibold hover:underline">
            Farooq Zehri
          </Link>
          
          <div className="h-4 w-[1px] bg-white/30"></div>
          
          <Link 
            to="/login" 
            className="bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg transition font-medium"
          >
            Login
          </Link>
          
          <Link 
            to="/register" 
            className="bg-white text-[#7E3AF2] hover:bg-gray-100 px-4 py-2 rounded-lg transition font-bold shadow-sm"
          >
            Register
          </Link>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;