"use client";
import React from "react";

type Offer = {
  title: string;
  description: string;
};

const SpecialOffers: React.FC = () => {
  const offers: Offer[] = [
    {
      title: "Happy Hour",
      description: "5PM to 7PM Get all drinks at 50% off",
    },
    {
      title: "Family Meal Deals",
      description: "Order 2 Main Courses and get the family deals coupon code",
    },
    {
      title: "Weekly Brunch",
      description: "Enjoy a free complimentary drink",
    },
  ];

  const handleOfferClick = (description: string) => {
    alert(description);
  };

  return (
    <section className="py-12 bg-gradient-to-b from-black via-yellow-900 to-yellow-600">
      <div className="container mx-auto text-center">
        <h2 className="text-5xl font-extrabold mb-8 text-yellow-400 drop-shadow-2xl">
          Special Offer&apos;s
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offers.map((offer, index) => (
            <button
              key={index}
              onClick={() => handleOfferClick(offer.description)}
              className="bg-black text-yellow-400 shadow-2xl rounded-lg text-center p-6 group hover:bg-yellow-400 hover:text-black transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            >
              <h3 className="text-2xl font-bold text-yellow-500 group-hover:text-black underline mb-2">
                {offer.title}
              </h3>
              <p className="text-yellow-200 text-lg group-hover:text-black transition duration-300">
                {offer.description}
              </p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
