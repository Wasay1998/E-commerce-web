import React from "react";

export default function Progressor() {
  return (
    <div>
      <div className="flex items-start max-w-screen-lg mx-auto mt-1 bg-gray-100 p-5 rounded-lg shadow-lg">
        <div className="w-full">
          <div className="flex items-center w-full">
            <div className="w-8 h-8 shrink-0 bg-amber-500 p-1.5 flex items-center justify-center rounded-full shadow-md">
              <span className="text-base text-black font-bold">1</span>
            </div>
            <div className="w-full h-1 mx-4 rounded-lg bg-cyan-500 transition-all ease-in-out duration-300"></div>
          </div>

          <div className="mt-2 mr-4">
            <h6 className="text-lg font-bold text-black">
            Step 1: Discover Your Favorites
            </h6>
            <p className="text-sm text-gray-700 font-medium">
            Browse through our diverse menu and pick the dish that tempts you the most.
            </p>
          </div>
        </div>

        <div className="w-full">
          <div className="flex items-center w-full">
            <div className="w-8 h-8 shrink-0 bg-amber-500 p-1.5 flex items-center justify-center rounded-full shadow-md">
              <span className="text-base text-black font-bold">2</span>
            </div>
            <div className="w-full h-1 mx-4 rounded-lg bg-cyan-500 transition-all ease-in-out duration-300"></div>
          </div>

          <div className="mt-2 mr-4">
            <h6 className="text-lg font-bold text-black">
            Step 2: Personalize Your Meal
            </h6>
            <p className="text-sm text-gray-700 font-medium">
            Customize your order to match your cravings by selecting the perfect add-ons and sides.
            </p>
          </div>
        </div>

        <div className="w-full">
          <div className="flex items-center w-full">
            <div className="w-8 h-8 shrink-0 bg-amber-500 p-1.5 flex items-center justify-center rounded-full shadow-md">
              <span className="text-base text-black font-bold">3</span>
            </div>
            <div className="w-full h-1 mx-4 rounded-lg bg-cyan-500 transition-all ease-in-out duration-300"></div>
          </div>

          <div className="mt-2 mr-4">
            <h6 className="text-lg font-bold text-black">
            Step 3: Complete Your Order
            </h6>
            <p className="text-sm text-gray-700 font-medium">
            Finalize your meal choice and proceed to a smooth checkout to place your order.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
