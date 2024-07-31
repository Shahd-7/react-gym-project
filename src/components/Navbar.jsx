import React, { useState } from "react";
import { Dumbbell, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const navItems = [
    {
      name: "Home",
      link: "/home",
    },
    {
      name: "Plans",
      link: "/plans",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Trainers",
      link: "/trainers",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];

  return (
    <>
      <nav className="w-full h-auto bg-[#1d1d1d] shadow-none lg:px-24 md:px-16 sm:px-6 px-4 py-3">
        <div className="justify-between mx-auto lg:w-full md:items-center md:flex">
          <div>
            <div className="flex items-center justify-between py-1 md:py-1 md:block">
              <Link to="/home" className="text-3xl text-brightRed font-semibold tracking-[0.1rem] flex items-center gap-x-1 relative">
                <span>Somali</span>
                <Dumbbell className="w-8 h-7 text-white" />
                <span>Fitness</span>
              </Link>
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none border border-transparent focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <X className="text-gray-400 cursor-pointer" size={24} />
                  ) : (
                    <Menu className="text-gray-400 cursor-pointer" size={24} />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div className={`flex justify-between items-center md:block ${navbar ? "block" : "hidden"}`}>
            <ul className="list-none lg:flex md:flex sm:block block items-center gap-x-5 gap-y-16">
              {navItems.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.link}
                    className="text-gray-500 text-lg font-medium hover:text-brightRed ease-out duration-700"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;