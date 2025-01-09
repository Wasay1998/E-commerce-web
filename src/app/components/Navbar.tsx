import React from "react";
import { FaHamburger } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaBolt } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";

export default function Navbar() {
  return (
    <div>
      <div className="grid xl:grid-cols-1 grid-cols-1">
        <div className="py-5">
          <div className="py-3 px-4 rounded-2xl border shadow-lg w-full bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-4">
                {/* Logo Burger */}
                <FaHamburger className="w-8 h-8 text-yellow-400 hover:text-cyan-400 transition-transform transform hover:scale-110 duration-300 ease-in-out" />
                {/* Search Icon */}
                <div style={{ position: "relative" }}>
                  <input
                    className="rounded-3xl py-2 px-5 outline-none text-sm w-[350px] pr-10 hidden lg:block md:block bg-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all duration-300"
                    placeholder="Search for your favourite burger from menu."
                  />
                  <FaSearch className="w-5 h-5 text-gray-300 absolute right-4 top-1/2 transform -translate-y-1/2 hidden lg:block md:block" />
                </div>
              </div>

              <div className="flex items-center gap-6">
                {/* Order Now */}
                <div className="flex items-center gap-3">
                  <FaBolt className="w-5 h-5 text-amber-400 hidden lg:block md:block an ate-pulse" />
                  <p className="text-sm text-white hidden lg:block md:block">
                    Order now and get it within {" "}
                    <span className="text-amber-400 font-bold">15 minutes!</span>
                  </p>
                </div>

                {/* Cart Icon */}
                <FaCartShopping className="w-10 h-10 text-sky-400 rounded-full p-2 bg-gray-800 hover:bg-amber-400 hover:text-white transition-transform transform hover:scale-110 duration-300 ease-in-out" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
