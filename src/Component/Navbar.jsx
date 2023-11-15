import React, { useContext, useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import { FaBarsStaggered } from "react-icons/fa6";
import logo from "../Assets/logo.png";
import { Link, NavLink } from "react-router-dom";
import { ShopContextData } from "../Context/ShopContext";
const Navbar = () => {
  const [toggleIcon, setToggleIcon] = useState(false);
  const { ItemCount } = useContext(ShopContextData);
  return (
    <header className="px-3 py-[20px] shadow-lg z-20 bg-white sticky top-0">
      <nav className="max-w-[1300px] mx-auto md:flex md:items-center md:justify-between ">
        <div className="flex items-center justify-between">
          <Link to={"/"} onClick={() => setToggleIcon(false)}>
            <div className="flex items-center gap-2 ml-2">
              <img src={logo} className="w-10" alt="" />
              <h1 className="md:text-2xl font-bold ">SHOPPER</h1>
            </div>
          </Link>
          {toggleIcon ? (
            <RxCross2
              className="md:text-3xl text-2xl mr-1 md:hidden cursor-pointer"
              onClick={() => {
                setToggleIcon((value) => !value);
              }}
            />
          ) : (
            <FaBarsStaggered
              className="md:text-3xl text-2xl mr-1 md:hidden cursor-pointer"
              onClick={() => {
                setToggleIcon((value) => !value);
              }}
            />
          )}
        </div>
        <ul
          className={`md:flex md:items-center  absolute w-full left-0 md:static md:w-auto transition-all duration-500 opacity-0 md:opacity-100 top-[80px] ${
            toggleIcon ? " opacity-100" : "left-[-400px] opacity-0"
          } z-[-100]  md:z-0 bg-white`}
        >
          <li className="md:mx-4 mx-5 my-4 md:my-0 md:text-2xl text-xl font-semibold duration-500 hover:text-[#ff4141]">
            <NavLink
              onClick={() => {
                setToggleIcon(false);
                window.scrollTo(0, 0);
              }}
              to={"/"}
            >
              Home
            </NavLink>
          </li>
          <li className="md:mx-4 mx-5 my-4 md:my-0 md:text-2xl text-xl font-semibold duration-500 hover:text-[#ff4141]">
            <NavLink
              onClick={() => {
                setToggleIcon(false);
                window.scrollTo(0, 0);
              }}
              to={"/men"}
            >
              Men
            </NavLink>
          </li>
          <li className="md:mx-4 mx-5 my-4 md:my-0 md:text-2xl text-xl font-semibold duration-500 hover:text-[#ff4141]">
            <NavLink
              onClick={() => {
                setToggleIcon(false);
                window.scrollTo(0, 0);
              }}
              to={"/women"}
            >
              Women
            </NavLink>
          </li>
          <li className="md:mx-4 mx-5 my-4 md:my-0 md:text-2xl text-xl font-semibold duration-500 hover:text-[#ff4141]">
            <NavLink
              onClick={() => {
                setToggleIcon(false);
                window.scrollTo(0, 0);
              }}
              to={"/kid"}
            >
              Kid's
            </NavLink>
          </li>

          <div className="md:flex items-center md:gap-4 md:hidden">
            <button className="mx-5 mb-4 md:mx-0 md:mb-0 px-9 border border-black rounded-2xl py-2 font-semibold transition-all duration-500 hover:bg-[#ff4141] hover:text-white hover:border-[#ff4141] ">
              <Link
                to={"/login"}
                onClick={() => {
                  setToggleIcon(false);
                  window.scrollTo(0, 0);
                }}
              >
                Log in
              </Link>
            </button>
            <div className="relative">
              <Link
                to={"/cart"}
                onClick={() => {
                  setToggleIcon(false);
                  window.scrollTo(0, 0);
                }}
              >
                {" "}
                <AiOutlineShoppingCart className="mx-5 mb-4 md:mx-0 md:mb-0 md:text-3xl text-2xl" />
                <div className="absolute top-[-14px] left-[33px]  text-white w-6 h-6 rounded-2xl bg-[#ff4141] flex items-center justify-center ">
                  {ItemCount()}
                </div>
              </Link>
            </div>
          </div>
        </ul>
        <div className="md:flex items-center md:gap-4 hidden md:block">
          <button className="mx-4 mb-4 md:mx-0 md:mb-0 px-9 border border-black rounded-2xl py-2 font-semibold transition-all duration-500 hover:bg-[#ff4141] hover:text-white hover:border-[#ff4141]">
            <Link
              to={"/login"}
              onClick={() => {
                setToggleIcon(false);
                window.scrollTo(0, 0);
              }}
            >
              Log in
            </Link>
          </button>
          <div className="relative">
            <Link
              to={"/cart"}
              onClick={() => {
                setToggleIcon(false);
                window.scrollTo(0, 0);
              }}
            >
              {" "}
              <AiOutlineShoppingCart className="mx-5 mb-4 md:mx-0 md:mb-0 md:text-3xl text-2xl" />
              <div className="absolute top-[-8px] right-[-8px] text-white w-6 h-6 rounded-2xl bg-[#ff4141] flex items-center justify-center ">
                {ItemCount()}
              </div>
            </Link>
          </div>
        </div>
      </nav>
    </header>
    // <header className="">
    //   <nav className="p-5 bg-white shadow-lg md:flex md:items-center md:justify-between">
    //     <div className="flex items-center justify-between ">
    //       <span className="md:text-3xl text-2xl font-[Poppins] cursor-pointer flex items-center md:gap-3 gap-1">
    //         <img src={logo} className="h-10 inline" alt="" />
    //         Shopper
    //       </span>
    //       <span>
    //         {toggleIcon ? (
    //           <RxCross2
    //             className="text-3xl md:hidden block mx-2"
    //             onClick={() => {
    //               setToggleIcon((prev) => !prev);
    //             }}
    //           />
    //         ) : (
    //           <FaBarsStaggered
    //             className="text-3xl md:hidden block mx-2"
    //             onClick={() => {
    //               setToggleIcon((prev) => !prev);
    //             }}
    //           />
    //         )}
    //       </span>
    //     </div>
    //     <ul
    //       className={`md:flex md:items-center z-[-1] md:z-auto md:static absolute  bg-white w-full md:w-auto  md:py-0 py-4 md:pl-0  pl-7 md:opacity-100 opacity-0 left-0  ${
    //         toggleIcon ? " top-[80px] opacity-100 " : "opacity-0 top-[-400px]"
    //       } transition-all ease-in duration-500`}
    //     >
    //       <li className="md:mx-4 mx-2 my-6 md:my-0">
    //         <a href="#" className="text-xl hover:text-cyan-500 duration-500">
    //           HOME
    //         </a>
    //       </li>
    //       <li className="md:mx-4 mx-2 my-6 md:my-0">
    //         <a href="#" className="text-xl hover:text-cyan-500 duration-500">
    //           ABOUT
    //         </a>
    //       </li>
    //       <li className="md:mx-4 mx-2 my-6 md:my-0">
    //         <a href="#" className="text-xl hover:text-cyan-500 duration-500">
    //           SERVICE
    //         </a>
    //       </li>
    //       <li className="md:mx-4 mx-2 my-6 md:my-0">
    //         <a href="#" className="text-xl hover:text-cyan-500 duration-500">
    //           CONTACT
    //         </a>
    //       </li>
    //       <li className="md:mx-4 mx-2 my-6 md:my-0">
    //         <a href="#" className="text-xl hover:text-cyan-500 duration-500">
    //           BLOGS
    //         </a>
    //       </li>
    //       <button className="bg-cyan-400 text-white font-[Poppins] duration-400  px-6 py-2 mx-4 hover:bg-cyan-700">
    //         Get Started
    //       </button>
    //     </ul>
    //   </nav>
    // </header>
  );
};

export default Navbar;
