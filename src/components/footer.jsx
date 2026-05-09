

import { Link } from "react-router-dom";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

import {
  MdKeyboardArrowRight,
} from "react-icons/md";

export default function Footer() {
  return (
    <footer className="w-full bg-secondary text-white overflow-hidden">

      {/* TOP SECTION */}
      <div className="w-full border-b border-white/10">

        <div className="max-w-[1400px] mx-auto px-6 lg:px-16 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* BRAND */}
          <div>

            <div className="flex items-center">
              <img
                src="/images/logo.png"
                alt="Infinity Computers"
                className="w-[45px]"
              />

              <h1 className="ml-3 text-2xl font-black">
                Infinity Computers
              </h1>
            </div>

            <p className="mt-6 text-white/70 leading-8">
              Your trusted destination for laptops, gaming PCs, computer
              accessories and premium tech products with unbeatable prices.
            </p>

            {/* SOCIAL ICONS */}
            <div className="flex gap-4 mt-8">

              <a
                href="#"
                className="w-[45px] h-[45px] rounded-full bg-white/10 flex justify-center items-center hover:bg-accent transition-all duration-300 hover:scale-110"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="w-[45px] h-[45px] rounded-full bg-white/10 flex justify-center items-center hover:bg-accent transition-all duration-300 hover:scale-110"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="w-[45px] h-[45px] rounded-full bg-white/10 flex justify-center items-center hover:bg-accent transition-all duration-300 hover:scale-110"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="#"
                className="w-[45px] h-[45px] rounded-full bg-white/10 flex justify-center items-center hover:bg-accent transition-all duration-300 hover:scale-110"
              >
                <FaYoutube />
              </a>

            </div>
          </div>

          {/* QUICK LINKS */}
          <div>

            <h2 className="text-2xl font-bold mb-8">
              Quick Links
            </h2>

            <div className="flex flex-col gap-5">

              <Link
                to="/"
                className="flex items-center text-white/70 hover:text-accent transition-all duration-300"
              >
                <MdKeyboardArrowRight size={22} />
                Home
              </Link>

              <Link
                to="/products"
                className="flex items-center text-white/70 hover:text-accent transition-all duration-300"
              >
                <MdKeyboardArrowRight size={22} />
                Products
              </Link>

              <Link
                to="/about"
                className="flex items-center text-white/70 hover:text-accent transition-all duration-300"
              >
                <MdKeyboardArrowRight size={22} />
                About
              </Link>

              <Link
                to="/contact"
                className="flex items-center text-white/70 hover:text-accent transition-all duration-300"
              >
                <MdKeyboardArrowRight size={22} />
                Contact
              </Link>

              <Link
                to="/cart"
                className="flex items-center text-white/70 hover:text-accent transition-all duration-300"
              >
                <MdKeyboardArrowRight size={22} />
                Cart
              </Link>

            </div>
          </div>

          {/* CATEGORIES */}
          <div>

            <h2 className="text-2xl font-bold mb-8">
              Categories
            </h2>

            <div className="flex flex-col gap-5">

              {
                [
                  "Gaming Laptops",
                  "Desktop Computers",
                  "Gaming Accessories",
                  "Monitors",
                  "Computer Components",
                  "Office Setup",
                ].map((item, index) => {
                  return (
                    <button
                      key={index}
                      className="flex items-center text-left text-white/70 hover:text-accent transition-all duration-300"
                    >
                      <MdKeyboardArrowRight size={22} />
                      {item}
                    </button>
                  );
                })
              }

            </div>
          </div>

          {/* CONTACT */}
          <div>

            <h2 className="text-2xl font-bold mb-8">
              Contact Us
            </h2>

            <div className="flex flex-col gap-6">

              <div className="flex items-start gap-4">
                <div className="min-w-[45px] h-[45px] rounded-full bg-white/10 flex justify-center items-center">
                  <FaMapMarkerAlt />
                </div>

                <p className="text-white/70 leading-7">
                  Colombo, Sri Lanka
                </p>
              </div>

              <div className="flex items-center gap-4">
                <div className="min-w-[45px] h-[45px] rounded-full bg-white/10 flex justify-center items-center">
                  <FaPhoneAlt />
                </div>

                <p className="text-white/70">
                  +94 71 234 5678
                </p>
              </div>

              <div className="flex items-center gap-4">
                <div className="min-w-[45px] h-[45px] rounded-full bg-white/10 flex justify-center items-center">
                  <FaEnvelope />
                </div>

                <p className="text-white/70 break-all">
                  info@infinitycomputers.lk
                </p>
              </div>

            </div>

            {/* NEWSLETTER */}
            <div className="mt-10">

              <h3 className="font-semibold mb-4">
                Subscribe Newsletter
              </h3>

              <div className="flex items-center bg-white rounded-full overflow-hidden">

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full h-[50px] px-5 text-secondary outline-none"
                />

                <button className="h-[50px] px-6 bg-accent text-white font-semibold hover:bg-secondary transition-all duration-300">
                  Join
                </button>

              </div>
            </div>

          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="w-full">

        <div className="max-w-[1400px] mx-auto px-6 lg:px-16 py-6 flex flex-col lg:flex-row justify-between items-center gap-5">

          <p className="text-white/60 text-center lg:text-left">
            © 2026 Infinity Computers. All Rights Reserved.
          </p>

          <div className="flex items-center gap-6 text-white/60 text-sm">

            <button className="hover:text-accent transition-all duration-300">
              Privacy Policy
            </button>

            <button className="hover:text-accent transition-all duration-300">
              Terms & Conditions
            </button>

            <button className="hover:text-accent transition-all duration-300">
              Support
            </button>

          </div>
        </div>
      </div>
    </footer>
  );
}