import React from "react";
import logo from "../assets/logo.jpg";
import { FaInstagram, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { IoPinSharp } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import { featuredProducts } from "../data";
import { Typewriter } from "react-simple-typewriter";

function Home() {
  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">
      {/* Header */}
      <header className="bg-[#001F54] text-white">
        <div className="container mx-auto px-2 sm:px-4 py-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center justify-center gap-5">
              <img src={logo} alt="" className="w-20 h-20 rounded-lg" />
                <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">INDIAN BOOK COMPANY</h1>
            </div>
            <div className="my-8 mx-3 sm:mx-8 flex items-center justify-center gap-2 sm:gap-5 text-2xl sm:text-3xl">
              <a
                href="https://www.instagram.com/indianbookcompany/"
                target="_blank"
                className="hover:text-blue-200 flex items-center"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://wa.me/+918929363525"
                target="_blank"
                className="hover:text-blue-200 flex items-center"
              >
                <FaWhatsapp size={24} />
              </a>
              <a
                href="mailto:Indianbookcompany1@gmail.com"
                target="_blank"
                className="hover:text-blue-200 flex items-center"
              >
                <IoIosMail size={24} />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-blue-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">
          <Typewriter
                words={["Your One-Stop Book & Stationery Store"]}
                cursor={true}
                cursorStyle={<span className="text-white">|</span>}
                typeSpeed={40}
                />
            
          </h2>
          <p className="text-xl mb-8">Books at lower prices</p>
          <button className="py-6 px-12 bg-white rounded-full text-blue-600 text-lg hover:text-white hover:bg-[#001F54] transition-all delay-100">
            <a
              href="https://wa.me/+918929363525"
              target="_blank"
              className="hover:text-blue-200 flex items-center gap-2 font-semibold"
            >
              Click here to contact us
            </a>
          </button>
        </div>
      </section>

      {/* Available Products */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Available Products
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-5 mx-auto">
            {featuredProducts.map((product, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="relative h-40 w-full overflow-hidden rounded-md mb-4">
                  <img
                    src={product.thumbnail}
                    alt={product.name}
                    className="h-full w-full object-cover rounded-md"
                  />
                </div>
                <h3 className="font-semibold mb-2">{product.name}</h3>
                <p className="text-blue-700 font-bold">{product.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="flex flex-col gap-4">
              <img src={logo} alt="" className="w-52 h-52 rounded-lg " />
              <h3 className="text-xl font-bold mb-4">Indian Book Company</h3>
            </div>
            <div>
              <h4 className="font-semibold my-10 text-2xl">Contact Us</h4>
              <div className="space-y-8">
                <p className="flex items-center">
                  <a
                    href="tel:+918929363525"
                    target="_blank"
                    className="flex justify-center items-center gap-2"
                  >
                    <FaPhoneAlt size={20} /> +91 8929363525
                  </a>
                </p>
                <p className="flex items-center">
                  <a
                    href="mailto:Indianbookcompany1@gmail.com"
                    target="_blank"
                    className="flex justify-center items-center gap-2"
                  >
                    <IoIosMail size={20} /> Indianbookcompany1@gmail.com
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <IoPinSharp size={20} /> Ghaziabad
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
