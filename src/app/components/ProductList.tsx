import React from "react";
import Image from 'next/image'
const products = [
  {
    id: 1,
    title: "Mexican Burger",
    price: "$12.00",
    category: "Classic fixings",
    imageUrl:
      "/productlist1.png",
    bgColor: "bg-amber-500",
  },

  {
    id: 2,
    title: "Classic Burger",
    price: "$20.00",
    category: "Delights",
    imageUrl:
      "/productlist2.png",
    bgColor: "bg-teal-500",
  },

  {
    id: 3,
    title: "Family Burger",
    price: "$16.00",
    category: "Fixing",
    imageUrl:
      "/productlist3.png",
    bgColor: "bg-amber-600",
  },
];

export default function ProductList() {
  return (
    <div className="p-6 flex flex-wrap items-center justify-center mb-6 bg-gslate-800">
      {products.map((product) => (
        <div
          key={product.id}
          className={`shrink-0 m-6 relative overflow-hidden ${product.bgColor} rounded-lg max-w-xs shadow-xl group hover:shadow-2xl transition-shadow duration-300`}
        >
          <svg
            className="absolute bottom-0 left-0 mb-8 scale-150 group-hover:scale-[1.65] transition-transform duration-500 ease-in-out"
            viewBox="0 0 375 283"
            fill="none"
            style={{ opacity: 0.1 }}
          >
            <rect
              x="159.52"
              y="175"
              height="152"
              width="152"
              rx="8"
              transform="rotate(-45 159.52 175)"
              fill="white"
            />
            <rect
              y="107.48"
              height="152"
              width="152"
              rx="8"
              transform="rotate(-45 0 107.48)"
              fill="white"
            />
          </svg>
          <div className="relative pt-8 px-8 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
            <div
              className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3 rounded-full"
              style={{
                background: "radial-gradient(black, transparent 60%)",
                transform: "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)",
                opacity: 0.25,
              }}
            ></div>
            <Image
              className="relative w-52 group-hover:scale-105 transition-transform duration-500 ease-in-out"
              width={100}
              height={100}
              src={product.imageUrl}
              alt={product.title}
            />
          </div>
          <div className="relative text-white px-6 pb-6 mt-6">
            <span className="block opacity-80 text-sm -mb-1 tracking-wide">
              {product.category}
            </span>
            <div className="flex justify-between items-center mt-2">
              <span className="block font-semibold text-2xl">
                {product.title}
              </span>
              <span className="block bg-white rounded-full text-orange-500 text-sm font-bold px-4 py-2 shadow-md">
                {product.price}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
