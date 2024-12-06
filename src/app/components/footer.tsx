"use client"
import React from "react"; // Import React
import Image from "next/image"; // Import Image from Next.js for optimized image loading
import Link from "next/link"; // Import Link from Next.js for client-side navigation
import { FiSend } from "react-icons/fi"; // Import the send icon from react-icons
import {  FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa"; // Import social media icons

const Footer: React.FC = () => {
  return (
    <div className="bg-black text-white w-full">
      <div className="container mx-auto flex flex-col justify-center space-y-8 px-4 py-10 lg:flex-row lg:justify-between lg:pb-32 lg:pt-20">
        <div className="flex flex-col space-y-14 lg:grid lg:grid-cols-5">
          <div className="mb-4 grid grid-rows-4">
            <h5 className="footer-title">Exclusive</h5>
            <h6 className="text-xl font-medium">Subscribe</h6>
            <p className="">Get 10% off your first order</p>
            <form
              className="relative w-fit"
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <input
                type="text"
                name="subscribe-email"
                id="subcribeEmail"
                placeholder="Enter your email"
                className="rounded border-[1.5px] bg-transparent px-4 py-3"
              />
              <button
                type="submit"
                className="absolute right-4 top-1/2 -translate-y-1/2 lg:-translate-y-2/3"
              >
                <FiSend className="text-2xl" />
              </button>
            </form>
          </div>

          <div className="flex flex-col gap-6">
            <h6 className="footer-heading text-xl font-medium">Support</h6>
            <p className="">111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
            <Link href="mailto:exclusive@gmail.com" className="">
              exclusive@gmail.com
            </Link>
            <Link href="tel:+88015-88888-9999" className="">
              +88015-88888-9999
            </Link>
          </div>

          <div className="flex flex-col gap-6">
            <h6 className="footer-heading text-xl font-medium">Account</h6>
            <ul className="grid grid-rows-5 gap-4">
              <li>
                <Link href="/account">My Account</Link>
              </li>
              <li>
                <Link href="#">Login / Register</Link>
              </li>
              <li>
                <Link href="/cart">Cart</Link>
              </li>
              <li>
                <Link href="/wishlist">Wishlist</Link>
              </li>
              <li>
                <Link href="/shop">Shop</Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-6">
            <h6 className="footer-heading text-xl font-medium">Quick Links</h6>
            <ul className="grid grid-rows-4 gap-4">
              <li>
                <Link href="#">Privacy Policy</Link>
              </li>
              <li>
                <Link href="#">Terms Of Use</Link>
              </li>
              <li>
                <Link href="#">FAQ</Link>
              </li>
              <li>
                <Link href="#">Contact</Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-6">
            <h6 className="footer-heading text-xl font-medium">Download App</h6>
            <div className="flex flex-col gap-2">
              <p className="text-text/70 xl:text-sm">
                Save $3 with App New User Only
              </p>
              <div className="grid w-fit grid-cols-2">
                <div className="mb-4"> {/* Margin added for spacing */}
                  <Image 
                    src="/images/Qrcode 1.png" 
                    width={100} 
                    height={100} 
                    alt="QR Code" 
                  />
                </div>
                <div className="grid grid-rows-2">
                  <button
                    className=""
                    onClick={(e) => {
                      e.preventDefault();
                    }}
                  >
                    <Image 
                      src="/images/appstore.png" 
                      width={120} 
                      height={40} 
                      alt="App Store" 
                    />
                  </button>
                  <button
                    className=""
                    onClick={(e) => {
                      e.preventDefault();
                    }}
                  >
                    <Image 
                      src="/images/google-play.png" 
                      width={120} 
                      height={40} 
                      alt="Google Play" 
                    />
                  </button>
                </div>
              </div>
              <div className="flex justify-center space-x-4 mt-4"> {/* Social media links */}
                <Link href="https://github.com/Ayesha367" target="_blank" className="text-white">
                  <FaGithub className="text-2xl" />
                </Link>
                <Link href="https://www.instagram.com/ayeshafarooq125?igsh=MjFkc3kxdGxqdjRx" target="_blank" className="text-white">
                  <FaInstagram className="text-2xl" />
                </Link>
                <Link href="https://www.linkedin.com/in/ayesha-farooq-0b66b42ba/" target="_blank" className="text-white">
                  <FaLinkedinIn className="text-2xl" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer; // Default export of the Footer component