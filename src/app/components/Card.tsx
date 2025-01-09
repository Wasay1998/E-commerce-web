import React from "react";
import Image from 'next/image'
const FloatingImageContentBlock = () => {
  return (
    <section className="mx-auto py-16 px-8 md:px-16 flex flex-col md:flex-row items-center bg-gradient-to-r from-yellow-200 via-orange-100 to-yellow-200 shadow-xl ">
      <div className="md:w-1/2 md:pr-12">
        <h2 className="text-4xl font-extrabold mb-8 text-red-800 text-center md:text-left">
          Delicious Burgers
        </h2>
        <p className="text-gray-700 text-lg mb-6 text-center md:text-left">
          Experience the juiciest burger in town, made with fresh ingredients
          and grilled to perfection.
        </p>

        <div className="text-center md:text-left">
          <button className="bg-red-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-red-700 transition duration-300 shadow-lg">
            Order Now
          </button>
        </div>

        <h3 className="text-3xl font-semibold mt-10 mb-6 text-center text-orange-700 md:text-left">
          Coming Soon: Our New Burger Launches
        </h3>

        <ul className="list-disc pl-6 space-y-4 text-gray-800 md:text-left text-center">
          <li>
            <strong className="text-red-700">Cheezy BBQ Bacon Burger:</strong>{" "}
            A mouthwatering blend of cheddar cheese, crispy bacon, and BBQ.
          </li>
          <li>
            <strong className="text-red-700">Spicy Jalapeno Burger:</strong> A
            fiery delight topped with fresh jalapenos and zesty chipotle mayo.
          </li>
          <li>
            <strong className="text-red-700">Mushroom Swiss Burger:</strong>{" "}
            Juicy beef patty with melted Swiss cheese for a rich, savory taste.
          </li>
          <li>
            <strong className="text-red-700">Avocado Veggie Burger:</strong> A
            delicious plant-based option featuring a grilled veggie patty.
          </li>
          <li>
            <strong className="text-red-700">Buffalo Chicken Burger:</strong>{" "}
            Crispy chicken breast tossed in spicy buffalo sauce.
          </li>
        </ul>
      </div>

      <div className=" flex justify-center">
        <Image
          src="/card1.png"
          width={1000}
          height={1000}
          alt="delicious burger"
          className=" rounded-xl shadow-xl transform hover:scale-110 transition-transform duration-500"
        />
      </div>
    </section>
  );
};

export default FloatingImageContentBlock;
