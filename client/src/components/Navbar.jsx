import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png'  // adjust path to where your logo actually is

const Navbar = () => {
  const user = { name: 'John Doe' };
  const navigate = useNavigate();

  const logoutUser = () => {
    navigate('/');
  };

  return (
    <div className="bg-white shadow">
      <nav className="flex items-center justify-between px-6 py-4">
        <Link to="/">
          <img
            src={logo}
            alt="logo"
            className="h-12 w-auto"
          />
        </Link>

        <div className="flex items-center gap-4">
          <p className="text-gray-700 font-medium">
            Hi, {user?.name}
          </p>

          <button
            onClick={logoutUser}
            className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
          >
            Logout
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;