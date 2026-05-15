// pages/AboutPage.jsx

import {
  FaLaptop,
  FaUsers,
  FaAward,
  FaShippingFast,
  FaShieldAlt,
  FaHeadset,
  FaArrowRight,
} from "react-icons/fa";

import {
  MdComputer,
  MdWorkspacePremium,
} from "react-icons/md";

import { Link } from "react-router-dom";

export default function AboutPage() {

  return (
    <div className="w-full bg-primary ">

      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-secondary via-[#416683] to-accent">

        {/* BACKGROUND GLOWS */}
        <div className="absolute top-[-100px] left-[-100px] w-[350px] h-[350px] bg-white/10 blur-3xl rounded-full"></div>

        <div className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] bg-accent/20 blur-3xl rounded-full"></div>

        {/* GRID */}
        <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:70px_70px]"></div>

        <div className="relative z-10 w-full px-6 lg:px-16 py-20">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* LEFT CONTENT */}
            <div>

              <div className="inline-flex items-center px-5 py-2 rounded-full border border-white/10 bg-white/10 backdrop-blur-md">

                <span className="w-[10px] h-[10px] rounded-full bg-accent mr-3 animate-pulse"></span>

                <p className="uppercase tracking-[4px] text-primary text-sm font-bold">
                  About Infinity Computers
                </p>

              </div>

              <h1 className="text-5xl lg:text-7xl font-black text-white mt-8 leading-tight">

                Premium Tech
                <br />

                <span className="text-primary">
                  For Modern Lifestyle
                </span>

              </h1>

              <p className="mt-8 text-lg leading-9 text-primary/80 max-w-[650px]">
                Infinity Computers delivers premium laptops, gaming PCs,
                accessories and high-performance technology solutions for
                creators, developers, gamers and professionals.
              </p>

              {/* BUTTONS */}
              <div className="flex flex-wrap gap-5 mt-12">

                <Link
                  to="/products"
                  className="group px-8 py-4 bg-white text-secondary rounded-2xl font-bold flex items-center gap-3 hover:scale-105 transition-all duration-300 shadow-2xl"
                >
                  Explore Products

                  <FaArrowRight className="group-hover:translate-x-1 transition-all duration-300" />

                </Link>

                <Link
                  to="/contact"
                  className="px-8 py-4 border border-white/20 text-white rounded-2xl font-bold hover:bg-white hover:text-secondary transition-all duration-300"
                >
                  Contact Us
                </Link>

              </div>

              {/* STATS */}
              <div className="grid grid-cols-2 gap-6 mt-16">

                {
                  [
                    {
                      title: "10K+",
                      subtitle: "Happy Customers",
                    },
                    {
                      title: "5K+",
                      subtitle: "Products Sold",
                    },
                    {
                      title: "100+",
                      subtitle: "Tech Brands",
                    },
                    {
                      title: "5+",
                      subtitle: "Years Experience",
                    },
                  ].map((item, index) => {
                    return (
                      <div
                        key={index}
                        className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-6"
                      >

                        <h3 className="text-4xl font-black text-white">
                          {item.title}
                        </h3>

                        <p className="text-primary/70 mt-2">
                          {item.subtitle}
                        </p>

                      </div>
                    );
                  })
                }

              </div>

            </div>

            {/* RIGHT IMAGE */}
            <div className="relative flex justify-center items-center">

              
              {/* MAIN IMAGE */}
              <img
                src="/images/about-tech.png"
                alt="Infinity Computers"
                className="relative z-10 w-full max-w-[650px] drop-shadow-[0_30px_80px_rgba(0,0,0,0.4)] animate-[float_5s_ease-in-out_infinite]"
              />

            </div>

          </div>

        </div>

      </section>

      {/* SERVICES */}
      <section className="py-28 px-6 lg:px-16 relative">

        {/* BG GLOW */}
        <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-accent/10 blur-3xl rounded-full"></div>

        <div className="relative z-10">

          {/* SECTION HEADER */}
          <div className="text-center max-w-[850px] mx-auto">

            <div className="inline-flex items-center px-5 py-2 rounded-full bg-accent/10 border border-accent/20">

              <span className="w-[10px] h-[10px] rounded-full bg-accent mr-3"></span>

              <p className="uppercase tracking-[4px] text-accent text-sm font-bold">
                Why Choose Us
              </p>

            </div>

            <h2 className="text-5xl lg:text-6xl font-black text-secondary mt-8 leading-tight">
              Premium Experience
              <span className="text-accent"> Redefined</span>
            </h2>

            <p className="mt-8 text-secondary/70 text-lg leading-9">
              We combine cutting-edge technology products with premium customer
              service to create an exceptional shopping experience.
            </p>

          </div>

          {/* CARDS */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">

            {
              [
                {
                  icon: <FaShippingFast size={40} />,
                  title: "Fast Delivery",
                  description:
                    "Island-wide fast delivery with secure packaging.",
                },
                {
                  icon: <FaShieldAlt size={40} />,
                  title: "Warranty",
                  description:
                    "Trusted warranty and genuine premium products.",
                },
                {
                  icon: <FaHeadset size={40} />,
                  title: "24/7 Support",
                  description:
                    "Professional technical support anytime you need.",
                },
                {
                  icon: <MdWorkspacePremium size={40} />,
                  title: "Premium Quality",
                  description:
                    "Carefully selected high-end computer products.",
                },
              ].map((item, index) => {
                return (
                  <div
                    key={index}
                    className="group relative bg-white rounded-[35px] p-10 shadow-xl hover:-translate-y-4 hover:shadow-[0_20px_60px_rgba(0,0,0,0.1)] transition-all duration-500 overflow-hidden"
                  >

                    {/* HOVER GLOW */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-gradient-to-br from-accent/5 to-secondary/5"></div>

                    <div className="relative z-10">

                      <div className="w-[80px] h-[80px] rounded-3xl bg-gradient-to-br from-secondary to-accent text-white flex justify-center items-center shadow-2xl">

                        {item.icon}

                      </div>

                      <h3 className="text-2xl font-black text-secondary mt-8">
                        {item.title}
                      </h3>

                      <p className="text-secondary/65 leading-8 mt-5">
                        {item.description}
                      </p>

                    </div>

                  </div>
                );
              })
            }

          </div>

        </div>

      </section>

      {/* CTA SECTION */}
      <section className="px-6 lg:px-16 pb-28">

        <div className="relative overflow-hidden rounded-[45px] bg-gradient-to-r from-secondary to-accent p-10 lg:p-20">

          {/* BG EFFECT */}
          <div className="absolute top-[-100px] right-[-100px] w-[300px] h-[300px] rounded-full bg-white/10 blur-3xl"></div>

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">

            <div className="max-w-[700px]">

              <p className="uppercase tracking-[4px] text-primary/80 font-bold">
                Build Your Setup Today
              </p>

              <h2 className="text-4xl lg:text-6xl font-black text-white mt-6 leading-tight">
                Upgrade Your Digital Experience
              </h2>

              <p className="mt-6 text-primary/80 text-lg leading-9">
                Explore premium laptops, gaming setups and modern accessories
                with Infinity Computers.
              </p>

            </div>

            <Link
              to="/products"
              className="group px-10 py-5 bg-white text-secondary rounded-2xl font-black text-lg flex items-center gap-4 hover:scale-105 transition-all duration-300 shadow-2xl"
            >

              Shop Now

              <FaArrowRight className="group-hover:translate-x-1 transition-all duration-300" />

            </Link>

          </div>

        </div>

      </section>

    </div>
  );
}