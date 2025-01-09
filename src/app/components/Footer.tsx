import React from "react";
import Image from 'next/image'
export default function Footer() {
  return (
    <div>
      <footer className="bg-gradient-to-r from-yellow-500 via-red-400 to-gray-600 p-8">
        <nav className="flex justify-center flex-wrap gap-10 text-white font-semibold">
          <a className="hover:text-cyan-300 text-xl" href="#">
            Home
          </a>
          <a className="hover:text-cyan-300 text-xl" href="#">
            About
          </a>
          <a className="hover:text-cyan-300 text-xl" href="#">
            Delivery
          </a>
          <a className="hover:text-cyan-300 text-xl" href="#">
            Contact
          </a>
        </nav>

        <div className="flex justify-center space-x-8 my-6">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="nofollow noopener"
          >
            <Image
              src="/footer1.png"
              width={40}
              height={40}
              alt="Facebook logo"
              className="hover:scale-110 transform transition"
            />
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="nofollow noopener"
          >
            <Image
              src="/footer2.png"
              width={40}
              height={40}
              alt="LinkedIn logo"
              className="hover:scale-110 transform transition"
            />
          </a>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="nofollow noopener"
          >
            <Image
              src="/footer3.png"
              width={40}
              height={40}
              alt="Instagram logo"
              className="hover:scale-110 transform transition"
            />
          </a>

          <a href="https://twitter.com" target="_blank" rel="nofollow noopener">
            <Image
              src="/footer4.png"
              width={40}
              height={40}
              alt="Twitter logo"
              className="hover:scale-110 transform transition"
            />
          </a>
        </div>

        <p className="text-center text-white text-lg font-semibold">
          2024 Abdul Wasay. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}
