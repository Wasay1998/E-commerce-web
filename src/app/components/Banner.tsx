import React from "react";
import Image from 'next/image'

export default function Banner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-gray-900 via-black to-gray-800 font-sans px-6 py-12 mb-7">
      <div className="absolute inset-0 opacity-30">
        <Image
          src="/banner1.png"
          alt="Delicious Burger Banner"
          fill={true}
          objectFit="cover"
          />
          
      </div>

      <div className="relative z-10 container mx-auto flex flex-col justify-center items-center text-center">
        <h2 className="text-white sm:text-5xl text-4xl font-extrabold tracking-wide mb-4 drop-shadow-lg">
          Discover Our Menu
        </h2>
        <p className="text-gray-300 text-lg md:text-xl mb-6 max-w-2xl leading-relaxed">
          Shop Now for Exclusive{" "}
          <span className="text-yellow-400">Burger Discounts</span>!
        </p>

        <button
          type="button"
          className="bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-500 text-gray-900 text-sm font-semibold py-3 px-8 rounded-full shadow-xl hover:from-yellow-600 hover:via-yellow-500 hover:to-yellow-600 hover:text-white transition duration-300 transform hover:scale-105"
        >
          Exciting Deals Launch at 12PM!
        </button>
      </div>
    </div>
  );
}
