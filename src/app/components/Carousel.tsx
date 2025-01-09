import React from "react";
import Image from 'next/image'
export default function Carousel() {
  return (
    <div>
      <section className="bg-gradient-to-r from-gray-800 via-gray-900 to-black">
        <div className="py-8 px-6 mx-auto max-w-screen-xl sm:py-10 lg:px-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 h-full">
            <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-gradient-to-r from-gray-800 to-gray-700 h-auto md:h-full flex flex-col rounded-xl shadow-2xl hover:shadow-3xl transition-shadow duration-500 transform hover:scale-105">
              <a
                href=""
                className="group relative flex flex-col overflow-hidden rounded-xl px-6 pb-6 pt-4 flex-grow hover:shadow-xl transition-shadow duration-300"
              >
                <Image
                  src="/carousel1.png"
                  fill={true}
                  alt="Burger 1"
                  className="absolute inset-0  object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-transparent"></div>
                <h3 className="z-10 text-4xl font-extrabold text-white absolute top-4 left-6 drop-shadow-xl">
                  Classic Bites
                </h3>
              </a>
            </div>

            <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-gradient-to-r from-gray-800 to-gray-700 rounded-xl shadow-2xl hover:shadow-3xl transition-shadow duration-500">
              <a
                href=""
                className="group relative flex flex-col overflow-hidden rounded-xl px-6 pb-6 pt-44 mb-4 hover:shadow-xl transition-shadow duration-300"
              >
                <Image
                  src="/carousel2.png"
                  alt="Burger 2"
                  fill={true}
                  objectFit="cover"
                  className="absolute inset-0 group-hover:scale-110 transition-transform duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-transparent"></div>
                <h3 className="z-10 text-4xl font-extrabold text-white absolute top-4 left-6 drop-shadow-xl">
                  Gourmet Grill
                </h3>
              </a>

              <div className="grid gap-8 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 mt-6">
                <a
                  href=""
                  className="group relative flex flex-col overflow-hidden rounded-xl px-6 pb-6 pt-44 hover:shadow-lg transition-shadow duration-300"
                >
                  <Image
                    src="/carousel3.png"
                    alt="Burger 3"
                    fill={true}
                    objectFit="cover"
                    className="absolute inset-0 group-hover:scale-110 transition-transform duration-500 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-transparent"></div>
                  <h3 className="z-10 text-2xl font-semibold text-white absolute top-4 left-6 drop-shadow-xl">
                    Spicy Masala
                  </h3>
                </a>
                <a
                  href=""
                  className="group relative flex flex-col overflow-hidden rounded-xl px-6 pb-6 pt-44 hover:shadow-lg transition-shadow duration-300"
                >
                  <Image
                    src="/carousel4.png"
                    alt="Burger 4"
                    fill={true}
                    objectFit="cover"
                    className="absolute inset-0 group-hover:scale-110 transition-transform duration-500 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-transparent"></div>
                  <h3 className="z-10 text-2xl font-semibold text-white absolute top-4 left-6 drop-shadow-xl">
                    Veggie Delight
                  </h3>
                </a>
              </div>
            </div>

            <div className="col-span-2 sm:col-span-2 md:col-span-1 bg-gradient-to-t from-gray-800 via-gray-900 to-black h-auto md:h-full flex flex-col rounded-xl shadow-2xl hover:shadow-3xl transition-shadow duration-500">
              <a
                href=""
                className="group relative flex flex-col overflow-hidden rounded-xl px-6 pb-6 pt-44 flex-grow hover:shadow-xl transition-shadow duration-300"
              >
                <Image
                  src="/carousel5.png"
                  alt="Burger 5"
                  fill={true}
                  objectFit="cover"
                  className="absolute inset-0 group-hover:scale-110 transition-transform duration-500 ease-in-out"
                   />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-transparent"></div>
                <h3 className="z-10 text-4xl font-extrabold text-white absolute top-4 left-6 drop-shadow-xl">
                  Cheezy Delights
                </h3>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
