import React from "react";
import logo from "../Assets/logo.png";
import watsapp_icon from "../Assets/whatsapp_icon.png";
import pintester_icon from "../Assets/pintester_icon.png";
import instagram_icon from "../Assets/instagram_icon.png";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="">
      <div className=" flex flex-col items-center gap-5">
        <div className="flex items-center gap-2 ">
          <img src={logo} alt="" className="sm:h-14 h-9" />
          <h2 className="sm:text-2xl  md:font-bold font-semibold">SHOPPER</h2>
        </div>
        <ul className="flex items-center gap-4 sm:flex-row flex-col">
          <li className="sm:text-xl  font-semibold duration-500 hover:text-[#ff4141] cursor-pointer">
            <Link to={"/"} onClick={()=>{window.scrollTo(0,0)}}>Home</Link>
          </li>
          <li className="sm:text-xl  font-semibold duration-500 hover:text-[#ff4141] cursor-pointer">
          <Link to={"/men"} onClick={()=>{window.scrollTo(0,0)}}>Men's</Link>
          </li>
          <li className="sm:text-xl  font-semibold duration-500 hover:text-[#ff4141] cursor-pointer">
          <Link to={"/women"} onClick={()=>{window.scrollTo(0,0)}}>Women's</Link>
          </li>
          <li className="sm:text-xl  font-semibold duration-500 hover:text-[#ff4141] cursor-pointer">
          <Link to={"/kid"} onClick={()=>{window.scrollTo(0,0)}}>Kid's</Link>
          </li>
          <li className="sm:text-xl  font-semibold duration-500 hover:text-[#ff4141] cursor-pointer">
            Contact
          </li>
        </ul>
        <div className="flex items-center justify-center gap-7 w-full  pb-5 mb-3 sm:flex-row flex-col">
          <div className="w-14 h-14 rounded-2xl  cursor-pointer border flex items-center justify-center">
            <img
              src={watsapp_icon}
              alt=""
              className="duration-500 hover:rotate-[270deg] cursor-pointer"
            />
          </div>
          <div className="w-14 h-14 rounded-2xl cursor-pointer border flex items-center justify-center">
            <img
              src={pintester_icon}
              alt=""
              className="duration-500 hover:rotate-[270deg] cursor-pointer"
            />
          </div>
          <div className="w-14 h-14 rounded-2xl  cursor-pointer border flex items-center justify-center">
            <img
              src={instagram_icon}
              alt=""
              className="duration-500 hover:rotate-[270deg] cursor-pointer"
            />
          </div>
        </div>
      </div>
      <div className="border-t-2 border-black py-5 ">
          <p className="text-center md:text-xl font-bold">Copyright © 2021 - 2023 TermsFeed®. All rights reserved.</p>
        </div>
    </footer>
  );
};

export default Footer;
