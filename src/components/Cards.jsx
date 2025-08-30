import React from "react";
import Book1 from "../assets/book1.jpeg";
import Book2 from "../assets/book2.jpeg";
import Book3 from "../assets/book3.jpeg";

const Cards = () => {
  return (
    <div className="w-full px-4 py-[10rem] bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8 ">
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={Book1}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8">
            The Mortal Instruments
          </h2>
          <p className="text-center text-4xl font-bold">City of Bones</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">Discovery</p>
            <p className="py-2 border-b mx-8">Secrets</p>
            <p className="py-2 border-b mx-8">Destiny</p>
          </div>
          <button className=" bg-fuchsia-600 hover:bg-indigo-800 text-white  w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
            Read More
          </button>
        </div>
        <div className="w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-transparent"
            src={Book2}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8">
            The Mortal Instruments
          </h2>
          <p className="text-center text-4xl font-bold">City of Ashes</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">Betrayal</p>
            <p className="py-2 border-b mx-8">Forbiddenr</p>
            <p className="py-2 border-b mx-8">Darkness</p>
          </div>
          <button className="bg-indigo-500 hover:bg-indigo-800 text-white  w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
            Read More
          </button>
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={Book3}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8">
            The Mortal Instruments
          </h2>
          <p className="text-center text-4xl font-bold">City of Glass</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">Revelation</p>
            <p className="py-2 border-b mx-8">Sacrifice</p>
            <p className="py-2 border-b mx-8">War</p>
          </div>
          <button className="bg-black hover:bg-indigo-800 text-white w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
