

import { useEffect, useRef, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

import {
  FaArrowRight,
  FaArrowLeft,
  FaLaptop,
  FaDesktop,
  FaHeadphones,
  FaKeyboard,
  FaMouse,
  FaShippingFast,
  FaShieldAlt,
  FaHeadset,
} from "react-icons/fa";

import {
  MdOutlineLocalOffer,
  MdComputer,
} from "react-icons/md";

import LoadingAnimation from "./loadingAnimation";
import ProductCard from "./productCard";

export default function LandingPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const scrollRef = useRef(null);

  useEffect(() => {
    axios
      .get(import.meta.env.VITE_API_URL + "/products/")
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch(() => {
        toast.error("Failed to load products");
        setLoading(false);
      });
  }, []);

  function scroll(direction) {
    if (scrollRef.current) {
      const amount = 400;

      scrollRef.current.scrollBy({
        left: direction === "left" ? -amount : amount,
        behavior: "smooth",
      });
    }
  }

  const featuredProducts = products.slice(0, 8);
  const gamingProducts = products.slice(4, 12);

  return (
    <div className="w-full bg-primary">

      {/* HERO SECTION */}
      <section className="w-full min-h-[90vh] bg-gradient-to-br from-secondary to-accent flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 py-20">

        <div className="w-full lg:w-[50%] text-white z-10">
          <p className="uppercase tracking-[5px] text-sm mb-4 text-primary/80">
            Infinity Computers
          </p>

          <h1 className="text-5xl lg:text-7xl font-black leading-tight">
            Build Your
            <span className="text-primary"> Dream Setup</span>
          </h1>

          <p className="mt-6 text-lg text-primary/90 max-w-[600px] leading-8">
            Explore premium laptops, gaming PCs, accessories and modern tech
            products with unbeatable prices and fast delivery.
          </p>

          <div className="flex gap-4 mt-10 flex-wrap">
            <Link
              to="/products"
              className="px-8 py-4 bg-primary text-secondary rounded-full font-bold hover:scale-105 transition-all duration-300 shadow-2xl"
            >
              Shop Now
            </Link>

            <Link
              to="/about"
              className="px-8 py-4 border border-white rounded-full font-semibold hover:bg-white hover:text-secondary transition-all duration-300"
            >
              Learn More
            </Link>
          </div>

          <div className="flex flex-wrap gap-8 mt-12">
            <div className="flex items-center gap-3">
              <FaShippingFast size={22} />
              <span>Fast Delivery</span>
            </div>

            <div className="flex items-center gap-3">
              <FaShieldAlt size={22} />
              <span>Warranty Products</span>
            </div>

            <div className="flex items-center gap-3">
              <FaHeadset size={22} />
              <span>24/7 Support</span>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-[50%] flex justify-center items-center mt-20 lg:mt-0 relative">

          <div className="absolute w-[350px] h-[350px] bg-white/20 blur-3xl rounded-full"></div>

          <img
            src="/images/hero-pc.png"
            alt="Gaming PC"
            className="w-full max-w-[650px] relative z-10 drop-shadow-2xl "
          />
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="py-20 px-6 lg:px-16">

        <div className="flex justify-between items-center mb-10">
          <div>
            <p className="text-accent font-semibold uppercase tracking-widest">
              Categories
            </p>

            <h2 className="text-4xl font-black text-secondary mt-2">
              Browse Tech Collections
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">

          {[
            {
              title: "Laptops",
              icon: <FaLaptop size={35} />,
            },
            {
              title: "Gaming PCs",
              icon: <FaDesktop size={35} />,
            },
            {
              title: "Headphones",
              icon: <FaHeadphones size={35} />,
            },
            {
              title: "Keyboards",
              icon: <FaKeyboard size={35} />,
            },
            {
              title: "Mouse",
              icon: <FaMouse size={35} />,
            },
            {
              title: "Accessories",
              icon: <MdComputer size={35} />,
            },
          ].map((item, index) => {
            return (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 flex flex-col items-center justify-center shadow-lg hover:-translate-y-3 hover:shadow-2xl transition-all duration-300 cursor-pointer group"
              >
                <div className="text-accent group-hover:scale-110 transition-all duration-300">
                  {item.icon}
                </div>

                <h3 className="mt-5 font-bold text-secondary text-center">
                  {item.title}
                </h3>
              </div>
            );
          })}
        </div>
      </section>

      
          
          {/* PREMIUM FEATURED PRODUCTS SECTION */}
<section className="relative py-28 overflow-hidden bg-gradient-to-b from-primary via-white to-primary">

  {/* BACKGROUND BLUR EFFECTS */}
  <div className="absolute top-0 left-[-100px] w-[300px] h-[300px] bg-accent/20 blur-3xl rounded-full"></div>
  <div className="absolute bottom-0 right-[-100px] w-[350px] h-[350px] bg-secondary/10 blur-3xl rounded-full"></div>

  <div className="relative px-6 lg:px-16">

    {/* HEADER */}
    <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">

      <div>

        <div className="inline-flex items-center px-5 py-2 rounded-full bg-accent/10 border border-accent/20 backdrop-blur-md">

          <span className="w-[10px] h-[10px] rounded-full bg-accent mr-3 animate-pulse"></span>

          <p className="uppercase tracking-[4px] text-accent text-sm font-bold">
            Featured Collection
          </p>
        </div>

        <h2 className="text-5xl lg:text-6xl font-black text-secondary mt-6 leading-tight max-w-[700px]">
          Discover The Latest
          <span className="text-accent"> Tech Products</span>
        </h2>

        <p className="mt-6 text-secondary/70 text-lg leading-8 max-w-[650px]">
          Explore premium laptops, gaming accessories and high-performance
          computer products designed for modern creators, gamers and developers.
        </p>
      </div>

      {/* NAVIGATION */}
      <div className="flex items-center gap-4">

        <button
          onClick={() => scroll("left")}
          className="group w-[60px] h-[60px] rounded-2xl bg-white border border-secondary/10 shadow-lg flex justify-center items-center hover:bg-secondary transition-all duration-300"
        >
          <FaArrowLeft
            className="text-secondary group-hover:text-white transition-all duration-300"
            size={18}
          />
        </button>

        <button
          onClick={() => scroll("right")}
          className="group w-[60px] h-[60px] rounded-2xl bg-secondary shadow-2xl flex justify-center items-center hover:scale-105 transition-all duration-300"
        >
          <FaArrowRight
            className="text-white"
            size={18}
          />
        </button>

      </div>
    </div>

    {/* PRODUCTS SLIDER */}
    {
      loading ? (
        <LoadingAnimation />
      ) : (
        <div
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto scroll-smooth hide-scroll-track snap-x snap-mandatory pb-6"
        >

          {
            featuredProducts.map((item, index) => {

              return (

                <div
                  key={item.productId}
                  className="group min-w-[320px] max-w-[320px] snap-start"
                >

                  {/* CARD */}
                  <div className="relative bg-white/80 backdrop-blur-xl border border-white shadow-xl rounded-[35px] overflow-hidden hover:-translate-y-3 hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)] transition-all duration-500">

                    {/* TOP BADGE */}
                    <div className="absolute top-5 left-5 z-20">

                      <div className="px-4 py-2 rounded-full bg-secondary text-white text-xs font-bold tracking-wider shadow-lg">
                        TRENDING
                      </div>

                    </div>

                    {/* GLOW EFFECT */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-gradient-to-tr from-accent/10 via-transparent to-secondary/10"></div>

                    {/* PRODUCT IMAGE */}
                    <div className="relative h-[280px] bg-gradient-to-b from-primary to-white flex justify-center items-center overflow-hidden">

                      <img
                        src={item.images?.[0]}
                        alt={item.name}
                        className="w-[230px] h-[230px] object-contain group-hover:scale-110 transition-all duration-500 drop-shadow-2xl"
                      />

                    </div>

                    {/* PRODUCT INFO */}
                    <div className="p-7">

                      {/* CATEGORY */}
                      <p className="uppercase tracking-[3px] text-xs text-accent font-bold">
                        Premium Product
                      </p>

                      {/* TITLE */}
                      <h3 className="text-2xl font-black text-secondary mt-3 line-clamp-2 min-h-[65px]">
                        {item.name}
                      </h3>

                      {/* DESCRIPTION */}
                      <p className="text-secondary/60 mt-4 leading-7 text-sm line-clamp-2">
                        {item.description}
                      </p>

                      {/* PRICE + BUTTON */}
                      <div className="flex items-center justify-between mt-8">

                        <div>

                          <p className="text-secondary/50 text-sm">
                            Starting From
                          </p>

                          <h4 className="text-3xl font-black text-accent">
                            Rs. {item.price?.toLocaleString()}
                          </h4>

                        </div>

                        <Link
                          to={`/overview/${item.productId}`}
                          className="group/btn w-[55px] h-[55px] rounded-2xl bg-secondary flex justify-center items-center hover:bg-accent transition-all duration-300 shadow-lg"
                        >
                          <FaArrowRight
                            className="text-white group-hover/btn:translate-x-1 transition-all duration-300"
                          />
                        </Link>

                      </div>

                    </div>

                  </div>

                </div>
              );
            })
          }

        </div>
      )
    }

    {/* BOTTOM CTA */}
    <div className="flex justify-center mt-20">

      <Link
        to="/products"
        className="group px-10 py-5 rounded-full bg-secondary text-white font-bold text-lg shadow-2xl hover:bg-accent transition-all duration-300 flex items-center gap-4"
      >
        Explore Full Collection

        <FaArrowRight className="group-hover:translate-x-1 transition-all duration-300" />
      </Link>

    </div>

  </div>
</section>
      {/* PROMO BANNER */}
      <section className="py-20 px-6 lg:px-16">

        <div className="bg-gradient-to-r from-secondary to-accent rounded-[40px] overflow-hidden p-10 lg:p-16 flex flex-col lg:flex-row items-center justify-between">

          <div className="text-white max-w-[600px]">
            <div className="flex items-center gap-3 mb-5">
              <MdOutlineLocalOffer size={35} />
              <span className="uppercase tracking-widest font-semibold">
                Limited Offer
              </span>
            </div>

            <h2 className="text-4xl lg:text-6xl font-black leading-tight">
              Up To 40% OFF
            </h2>

            <p className="mt-6 text-lg text-primary/90 leading-8">
              Grab exclusive deals on gaming laptops, accessories and premium
              tech products before the stock runs out.
            </p>

            <Link
              to="/products"
              className="inline-flex items-center gap-3 mt-8 px-8 py-4 bg-white text-secondary rounded-full font-bold hover:scale-105 transition-all"
            >
              Explore Deals
              <FaArrowRight />
            </Link>
          </div>

          <img
            src="/images/banner-laptop.png"
            alt="Laptop"
            className="w-full max-w-[500px] mt-12 lg:mt-0 drop-shadow-2xl"
          />
        </div>
      </section>

      {/* GAMING COLLECTION */}
      <section className="py-20 bg-secondary">

        <div className="px-6 lg:px-16">

          <div className="mb-10">
            <p className="text-accent uppercase tracking-widest font-semibold">
              Gaming Collection
            </p>

            <h2 className="text-4xl font-black text-white mt-2">
              High Performance Products
            </h2>
          </div>

          {
            loading ? (
              <LoadingAnimation />
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {
                  gamingProducts.map((item)=>{
                    return(
                      <ProductCard
                        key={item.productId}
                        product={item}
                      />
                    )
                  })
                }
              </div>
            )
          }
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 px-6 lg:px-16 bg-primary">

        <div className="text-center">
          <p className="text-accent uppercase tracking-widest font-semibold">
            Why Choose Us
          </p>

          <h2 className="text-4xl font-black text-secondary mt-2">
            Premium Experience
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          {[
            {
              icon: <FaShippingFast size={40} />,
              title: "Fast Delivery",
              description:
                "Island-wide delivery with secure packaging and quick shipping.",
            },
            {
              icon: <FaShieldAlt size={40} />,
              title: "Warranty Products",
              description:
                "All products come with trusted warranty and quality assurance.",
            },
            {
              icon: <FaHeadset size={40} />,
              title: "24/7 Support",
              description:
                "Our support team is always ready to help you anytime.",
            },
          ].map((item, index) => {
            return (
              <div
                key={index}
                className="bg-white rounded-3xl p-10 shadow-xl hover:-translate-y-3 transition-all duration-300"
              >
                <div className="text-accent">
                  {item.icon}
                </div>

                <h3 className="text-2xl font-bold text-secondary mt-6">
                  {item.title}
                </h3>

                <p className="text-secondary/70 mt-4 leading-8">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}