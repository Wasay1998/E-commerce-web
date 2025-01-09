"use client";
import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import { Product } from "@/pages/types";
import Image from 'next/image'

const Menu = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<Product[]>([]);
  const [showCart, setShowCart] = useState(false);
  const [isCheckout, setIsCheckout] = useState(false);

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch("/api/products");
      const data = await response.json();
      setProducts(data);
    }

    fetchProducts();

    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart, product];
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  const toggleCart = () => {
    setShowCart((prev) => !prev);
  };

  const goToCheckout = () => {
    setIsCheckout(true);
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };

  return (
    <div className="relative min-h-screen py-10 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10 animate-background"
        style={{
          backgroundImage:
            "url('https://as2.ftcdn.net/v2/jpg/02/73/22/75/1000_F_273227546_5y3TQDYVdPZBfxs22TmmBKpwV1rPkLNf.jpg')",
        }}
      ></div>

      <div className="relative z-10">
        {/* Title and Description */}
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 text-yellow-400">
            Delicious Burgers In Our Menu
          </h1>
          <p className="text-lg text-gray-300">
            Explore our selection of mouthwatering burgers. Fresh ingredients, tasty flavors, and the best experience!
          </p>
        </div>

        {/* Product Section */}
        <div className="max-w-6xl mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} onAddToCard={addToCart} />
          ))}
        </div>

        {/* Cart Section */}
        <div className="max-w-6xl mx-auto mt-10 text-center">
          <button
            onClick={toggleCart}
            className="bg-blue-500 text-black py-3 px-8 rounded-full text-lg shadow-lg hover:bg-blue-600 transition duration-300 transform hover:scale-105"
          >
            {showCart ? "Hide Cart" : "View Cart"} ({cart.length} items)
          </button>

          {showCart && (
            <div className="mt-8 bg-gray-800 p-6 rounded-lg shadow-lg">
              <h2 className="text-3xl font-bold mb-6 text-yellow-400">Your Cart Items</h2>
              {cart.length > 0 ? (
                <div>
                  <ul>
                    {cart.map((product, index) => (
                      <li
                        key={index}
                        className="flex items-center justify-between mb-6 p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition duration-300"
                      >
                        <Image
                          src={product.image}
                          alt={product.name}
                          width={100}
                          height={100}
                          className="w-24 h-24 rounded-lg shadow-md"
                        />
                        <span className="ml-4 text-lg font-medium text-gray-100">
                          {product.name} - ${product.price}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex justify-between items-center mt-6">
                    <span className="font-semibold text-2xl text-yellow-400">
                      Total: ${cart.reduce((total, product) => total + product.price, 0)}
                    </span>
                    <div className="space-x-4">
                      <button
                        onClick={goToCheckout}
                        className="bg-green-500 py-3 px-8 rounded-lg shadow-lg text-lg text-black hover:bg-green-600 transition duration-300 transform hover:scale-105"
                      >
                        Proceed to Checkout
                      </button>
                      <button
                        onClick={clearCart}
                        className="bg-red-500 py-3 px-8 rounded-lg shadow-lg text-lg text-black hover:bg-red-600 transition duration-300 transform hover:scale-105"
                      >
                        Clear Cart
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <p className="text-lg text-gray-300">Your cart is empty.</p>
              )}
            </div>
          )}
        </div>

        {isCheckout && (
          <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full sm:w-96 text-gray-100">
              <h2 className="text-3xl font-bold text-yellow-400 mb-6">Checkout</h2>
              <p className="text-lg mb-6 text-gray-300">
                Please confirm your order before proceeding.
              </p>
              <ul className="mb-4">
                {cart.map((product, index) => (
                  <li key={index} className="flex justify-between mb-4">
                    <span>{product.name}</span>
                    <span>${product.price}</span>
                  </li>
                ))}
              </ul>
              <div className="flex justify-between mb-6">
                <span className="font-semibold">Total:</span>
                <span className="font-semibold">${cart.reduce((total, product) => total + product.price, 0)}</span>
              </div>
              <div className="flex justify-between">
                <button
                  onClick={() => setIsCheckout(false)}
                  className="bg-gray-600 py-2 px-6 rounded-lg shadow-md text-lg hover:bg-gray-500 transition duration-300"
                >
                  Close
                </button>
                <button
                  onClick={() => alert("Order Confirmed! Your delicious burger will be delivered in 40 minutes!")}
                  className="bg-green-500 py-2 px-6 rounded-lg shadow-md text-lg hover:bg-green-600 transition duration-300"
                >
                  Confirm Order
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;
