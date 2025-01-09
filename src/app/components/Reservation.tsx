import React from "react";

const ReservationSection = () => {
  return (
    <section className="bg-gradient-to-r from-gray-900 via-black to-gray-900 py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-8 text-yellow-400">
          Make A Reservation
        </h2>
        <form className="max-w-lg mx-auto bg-gray-800 p-6 rounded-lg shadow-lg">
          <div className="mb-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 border border-gray-600 rounded-lg bg-gray-900 text-white placeholder-gray-400 focus:ring-2 focus:ring-yellow-500 focus:outline-none"
              required
            />
          </div>

          <div className="mb-6">
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-4 border border-gray-600 rounded-lg bg-gray-900 text-white placeholder-gray-400 focus:ring-2 focus:ring-yellow-500 focus:outline-none"
              required
            />
          </div>

          <div className="mb-6">
            <input
              type="date"
              className="w-full p-4 border border-gray-600 rounded-lg bg-gray-900 text-white placeholder-gray-400 focus:ring-2 focus:ring-yellow-500 focus:outline-none"
              required
            />
          </div>

          <div className="mb-6">
            <input
              type="time"
              className="w-full p-4 border border-gray-600 rounded-lg bg-gray-900 text-white placeholder-gray-400 focus:ring-2 focus:ring-yellow-500 focus:outline-none"
              required
            />
          </div>

          <div className="mb-6">
            <button className="w-full bg-yellow-500 text-black font-semibold py-3 px-6 rounded-lg hover:bg-yellow-600 transition duration-300">
              Reserve Table
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ReservationSection;
