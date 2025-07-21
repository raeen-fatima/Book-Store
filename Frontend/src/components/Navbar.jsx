import { FiBookOpen } from "react-icons/fi";
import { useAuth } from "../context/AuthProvider";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import Logout from "./Logout";

function Navbar() {
  const [authUser] = useAuth();
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const element = document.documentElement;

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = (
    <>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/course">Course</Link></li>
      <li><Link to="/contact">Contact Us</Link></li>
      <li><Link to="/about">About Us</Link></li>
    </>
  );

  return (
    <div
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${
        sticky ? "shadow-md bg-pink-500/10 backdrop-blur-lg dark:bg-slate-800" : "bg-white dark:bg-slate-800"
      }`}
    >
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 py-3 flex items-center justify-between">
        {/* Left: Brand + Mobile Menu */}
        <div className="flex items-center gap-4">
          {/* Mobile Dropdown */}
          <div className="dropdown lg:hidden">
            <button tabIndex={0} className="btn btn-ghost">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h10m-10 6h16" />
              </svg>
            </button>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 dark:bg-slate-700 rounded-box w-52">
              {navItems}
            </ul>
          </div>

          {/* Brand */}
          <Link to="/" className="flex items-center gap-2 text-2xl font-bold text-pink-600 dark:text-white">
            <FiBookOpen className="text-3xl" />
            <span>booksHaven</span>
          </Link>
        </div>

        {/* Center: Nav items */}
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2 ">{navItems}</ul>
        </div>

        {/* Right: Search, Toggle, Auth */}
        <div className="flex items-center gap-4">
          {/* Search */}
          <div className="hidden md:block">
            <label className="px-3 py-2 border border-slate-500 rounded-md flex items-center gap-2 dark:border-slate-600">
              <input
                type="text"
                placeholder="Search"
                className="bg-transparent outline-none text-sm placeholder-gray-400 dark:placeholder-gray-300"
              />
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35M11 17a6 6 0 100-12 6 6 0 000 12z" />
              </svg>
            </label>
          </div>

          {/* Theme Toggle */}
          <label className="swap swap-rotate cursor-pointer">
            <input type="checkbox" />
             {/* sun icon */}
              <svg
                className="swap-off fill-current w-7 h-7"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>

              {/* moon icon */}
              <svg
                className="swap-on fill-current w-7 h-7"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
          </label>

          {/* Auth Buttons */}
          {authUser ? (
            <Logout />
          ) : (
            <div>
              <button
                onClick={() => document.getElementById("my_modal_3").showModal()}
                className="bg-black text-white px-3 py-2 rounded-md hover:bg-pink-600 duration-300 text-sm"
              >
                Login
              </button>
              <Login />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
