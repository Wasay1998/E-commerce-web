export default function handler(req, res) {
  const products = [
    {
      id: 1,
      name: "Classic Cheese Delight",
      price: 10,
      image: "/menu1.jpg",
    },

    {
      id: 2,
      name: "French Flame Burger",
      price: 10,
      image: "/menu2.jpg",
    },

    {
      id: 3,
      name: "Heavenly Bites Burger",
      price: 10,
      image: "/menu3.jpg",
    },

    {
      id: 4,
      name: "Double Decker Delight",
      price: 10,
      image: "/menu4.jpg",
    },

    {
      id: 5,
      name: "Savory Supreme Burger",
      price: 10,
      image: "/menu5.jpg",
    },

    {
      id: 6,
      name: "Spicy Texan Treat",
      price: 10,
      image: "/menu6.jpg",
    },
  ];
  res.status(200).json(products);
}
