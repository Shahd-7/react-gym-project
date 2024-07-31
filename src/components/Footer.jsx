import React from "react";
import { Link } from "react-scroll";
import { AiTwotonePhone, AiOutlineMail } from "react-icons/ai";
import { Dumbbell } from 'lucide-react';
import '../App.css';

const Footer = () => {
  return (
    <div className="bg-[#222] rounded-t-3xl">
      <div className="flex flex-col md:flex-row justify-between md:px-32 px-5 p-5">
        <div className="w-full md:w-1/4">
          <div className="flex items-start mb-8"> {/* Add margin bottom for space */}
            <Link to="/home" className="text-2xl text-brightRed font-semibold tracking-[0.1rem] flex items-center gap-x-1 relative">
              <span>Somali</span>
              <span> <Dumbbell className="w-8 h-7 text-white" /> </span>
              <span>Fitness</span>
            </Link>
          </div>
          <p className="mt-4 text-left"> {/* Align text to the left */}
            Welcome to Somali Fitness! We are dedicated to helping you achieve your fitness goals.
          </p>
        </div>
        <div>
          <h1 className="font-medium text-xl mt-4">Address</h1>
          <p className="mt-8">Banadir-Next-door-of Banadir Mall</p> {/* Add margin top for space */}
          <span>Mogadishu, Somalia</span>
        </div>
        <div>
          <h1 className="font-medium text-xl mt-4">Contact</h1>
          <div className="flex flex-row items-center gap-2 mt-4">
            <AiTwotonePhone size={20} />
            <p>+252 615 27-49-19</p>
          </div>
          <div className="flex flex-row items-center gap-2">
            <AiOutlineMail size={20} />
            <p>somfitness@gmail.com</p>
          </div>
        </div>
      </div>
      <div>
        <p className="text-center mt-4">
          @copyright developed by{" "}
          <span className="text-brightRed">Shahad Mohamed</span> | All
          rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;