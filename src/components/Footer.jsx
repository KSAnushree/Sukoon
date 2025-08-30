import React from "react";
import {
  FaFacebookSquare,
  FaInstagram,
  FaTwitterSquare,
  FaGithubSquare,
  FaDribbbleSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className=" bg-white max-w-full mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-black">
      <div>
        <h1 className="w-full text-3xl font-bold text-amber-800">SUKOON.</h1>
        <p className="py-4">
          SUKOON is your go-to destination for Fiction, Non-Fiction, and
          Self-Help reads. Discover new stories, revisit timeless classics, and
          get inspired to keep turning the page.
        </p>
        <div className="flex justify-between md:w-[75%] my-6">
          <FaFacebookSquare size={30} />
          <FaInstagram size={30} />
          <FaTwitterSquare size={30} />
          <FaGithubSquare size={30} />
          <FaDribbbleSquare size={30} />
        </div>
      </div>
      <div className="lg:col-span-2 flex justify-between mt-6">
        <div>
          <h6 className="font-medium text-black">Explore</h6>
          <ul>
            <li className="py-2 text-sm">Fiction</li>
            <li className="py-2 text-sm">Non-Fiction</li>
            <li className="py-2 text-sm">Self-Help</li>
            <li className="py-2 text-sm">New Arrivals</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-black ">Support</h6>
          <ul>
            <li className="py-2 text-sm">FAQ</li>
            <li className="py-2 text-sm">Contact Us</li>
            <li className="py-2 text-sm">Reading Guides</li>
            <li className="py-2 text-sm">Help Center</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-black">Community</h6>
          <ul>
            <li className="py-2 text-sm">About Us</li>
            <li className="py-2 text-sm">Blog</li>
            <li className="py-2 text-sm">Book Clubs</li>
            <li className="py-2 text-sm">Events</li>
            <li className="py-2 text-sm">Careers</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-black">Legal</h6>
          <ul>
            <li className="py-2 text-sm">Privacy Policy</li>
            <li className="py-2 text-sm">Terms & Conditions</li>
            <li className="py-2 text-sm">Copyright</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
