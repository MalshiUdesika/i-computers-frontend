import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export default function ContactPage() {

  return (
    <div className="w-full bg-primary overflow-hidden">

      {/* HERO */}
      <section className="relative min-h-[60vh] bg-gradient-to-br from-secondary to-accent flex items-center px-6 lg:px-16 py-20">

        <div className="absolute inset-0 bg-black/10"></div>

        <div className="relative z-10 max-w-[850px]">

          <div className="inline-flex items-center px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10">

            <span className="w-[10px] h-[10px] rounded-full bg-primary mr-3 animate-pulse"></span>

            <p className="uppercase tracking-[4px] text-primary text-sm font-bold">
              Contact Infinity Computers
            </p>

          </div>

          <h1 className="text-5xl lg:text-7xl font-black text-white mt-8 leading-tight">
            Let’s Talk About
            <span className="text-primary"> Technology</span>
          </h1>

          <p className="mt-8 text-lg text-primary/80 leading-9 max-w-[700px]">
            Need assistance, product recommendations or technical support?
            Our team is ready to help you anytime.
          </p>

        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="py-24 px-6 lg:px-16">

        <div className="grid lg:grid-cols-2 gap-16">

          {/* LEFT */}
          <div>

            <p className="uppercase tracking-[4px] text-accent font-bold">
              Get In Touch
            </p>

            <h2 className="text-5xl font-black text-secondary mt-5">
              Contact Information
            </h2>

            <p className="mt-8 text-secondary/70 leading-9 text-lg">
              Reach out to us for product inquiries, technical assistance,
              partnerships or any support related to Infinity Computers.
            </p>

            {/* CONTACT CARDS */}
            <div className="space-y-6 mt-12">

              {
                [
                  {
                    icon: <FaPhoneAlt />,
                    title: "Phone Number",
                    value: "+94 71 234 5678",
                  },
                  {
                    icon: <FaEnvelope />,
                    title: "Email Address",
                    value: "info@infinitycomputers.lk",
                  },
                  {
                    icon: <FaMapMarkerAlt />,
                    title: "Location",
                    value: "Colombo, Sri Lanka",
                  },
                  {
                    icon: <FaClock />,
                    title: "Working Hours",
                    value: "Mon - Sat : 8.00 AM - 8.00 PM",
                  },
                ].map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="bg-white rounded-[30px] p-7 flex items-center gap-6 shadow-xl hover:-translate-y-2 transition-all duration-300"
                    >

                      <div className="min-w-[70px] h-[70px] rounded-2xl bg-accent text-white flex justify-center items-center text-2xl shadow-lg">
                        {item.icon}
                      </div>

                      <div>

                        <h3 className="text-xl font-black text-secondary">
                          {item.title}
                        </h3>

                        <p className="text-secondary/60 mt-2">
                          {item.value}
                        </p>

                      </div>

                    </div>
                  );
                })
              }

            </div>

            {/* SOCIALS */}
            <div className="flex gap-5 mt-10">

              {
                [
                  <FaFacebookF />,
                  <FaInstagram />,
                  <FaLinkedinIn />,
                ].map((icon, index) => {
                  return (
                    <button
                      key={index}
                      className="w-[55px] h-[55px] rounded-2xl bg-secondary text-white flex justify-center items-center hover:bg-accent hover:scale-110 transition-all duration-300"
                    >
                      {icon}
                    </button>
                  );
                })
              }

            </div>

          </div>

          {/* RIGHT FORM */}
          <div className="bg-white rounded-[40px] shadow-2xl p-8 lg:p-12">

            <p className="uppercase tracking-[4px] text-accent font-bold">
              Send Message
            </p>

            <h2 className="text-4xl font-black text-secondary mt-5">
              We’d Love To Hear From You
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mt-10">

              <input
                type="text"
                placeholder="Your Name"
                className="h-[60px] rounded-2xl border border-secondary/10 px-5 outline-none focus:border-accent"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="h-[60px] rounded-2xl border border-secondary/10 px-5 outline-none focus:border-accent"
              />

            </div>

            <input
              type="text"
              placeholder="Subject"
              className="w-full h-[60px] rounded-2xl border border-secondary/10 px-5 outline-none focus:border-accent mt-6"
            />

            <textarea
              placeholder="Write your message..."
              className="w-full h-[180px] rounded-2xl border border-secondary/10 p-5 outline-none focus:border-accent mt-6 resize-none"
            ></textarea>

            <button className="mt-8 w-full h-[60px] rounded-2xl bg-secondary text-white font-bold text-lg hover:bg-accent transition-all duration-300 shadow-xl">
              Send Message
            </button>

          </div>

        </div>
      </section>
    </div>
  );
}