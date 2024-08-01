import React from "react";
import img from "../assets/img/contactImg.jpg";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center md:mx-32 mx-5 mt-10">
      <h1 className="text-5xl font-semibold text-center">Contact Us</h1>
      <div className="flex flex-col md:flex-row justify-between w-full mt-10">
        <form className="w-full md:w-2/5 space-y-5">
          <div className="flex flex-col">
            <label htmlFor="userName" className="text-left">Your Name</label>
            <input
              className="py-3 px-2 rounded-lg hover:shadow-[rgba(0,0,0,0.24) 0px 3px 8px] transition-all text-black"
              type="text"
              name="userName"
              id="userName"
              placeholder="Enter your name"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="userEmail" className="text-left">Your Email</label>
            <input
              className="py-3 px-2 rounded-lg hover:shadow-[rgba(0,0,0,0.24) 0px 3px 8px] transition-all text-black"
              type="email"
              name="userEmail"
              id="userEmail"
              placeholder="Enter your email"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="userNumber" className="text-left">Your Number</label>
            <input
              className="py-3 px-2 rounded-lg hover:shadow-[rgba(0,0,0,0.24) 0px 3px 8px] transition-all text-black"
              type="text"
              name="userNumber"
              id="userNumber"
              placeholder="Enter your number"
            />
          </div>
        </form>

        <div className="flex flex-row items-center w-full md:w-2/4 my-5">
          <img className="rounded-md" src={img} alt="img" />
        </div>
      </div>
    </div>
  );
};

export default Contact;