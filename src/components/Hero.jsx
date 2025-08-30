import React from "react";
import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <div className="text-black">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className=" text-amber-600 font-bold p-2 uppercase">
          Discover Stories That Inspire
        </p>
        <h1 className="md:text-5xl sm:text-3xl text-xl font-bold md:py-6">
          Explore, Learn, and Grow Through Every Page
        </h1>
        <div className=" flex justify-center items-center">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">
            Your Gateway to
          </p>
          <ReactTyped
            className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2"
            strings={["Fiction", "Non-Fiction", "Self-Help"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className="md:text-2xl text-xl font-bold text-amber-800">
          Explore timeless stories to spark imagination in Fiction, Non-Fiction,
          and Self-Help.
        </p>
        <button className="bg-purple-500 w-[200px] rounded-md font-medium my=6 mx-auto py-2 text-black">
          Get started
        </button>
      </div>
    </div>
  );
};

export default Hero;
