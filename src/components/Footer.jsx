import React from "react";
import logo from "../imgs/logo.png";
import { NavLink } from "react-router-dom";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterSquare,
  AiFillYoutube,
} from "react-icons/ai";
export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <>
      <section id="contact">
        <div className="z-69 relative -bottom-24 mx-auto mt-36 w-[80%] font-serif lg:w-[70%]">
          <div className="items-center  justify-between rounded-2xl bg-[#e7816b] px-4 py-16 text-center md:px-16 lg:flex lg:text-start">
            <div className="text-white lg:w-1/2">
              <h1 className="text-4xl lg:w-[60%]">
                Let's talk about your project
              </h1>
              <p className="my-8 leading-8 lg:text-sm">
                Ready to take it to the next level? Contact us today and find
                out how our expertise can help your business grow.
              </p>
            </div>
            <NavLink onClick={scrollToTop} to="/contact">
              <button className="rounded-md bg-white p-3 px-4 text-black transition-colors hover:bg-[#ffad9b] hover:text-white">
                GET IN TOUCH
              </button>
            </NavLink>
          </div>
        </div>
        {/* ---------footer container--------- */}
        <footer className="bg-[#1d1c1e] pb-8 pt-48">
          <div className="mx-auto w-[90%] border-b border-[#333136] pb-5 lg:w-[60%]">
            <div className="items-center justify-center text-white md:flex md:justify-between">
              <NavLink onClick={scrollToTop} to="/">
                <img
                  src={logo}
                  className="mx-auto mb-8 w-[70%] md:mx-0 md:mb-0"
                  alt=""
                />
              </NavLink>
              <ul className="flex justify-center gap-4 md:w-[70%] md:gap-9 lg:w-auto [&>a.active]:text-[#c23c22] [&>a]:font-semibold [&>a]:transition-all after:[&>a]:block after:[&>a]:h-[1px] after:[&>a]:w-[0px] after:[&>a]:bg-[#1d1c1e] after:[&>a]:transition-all hover:[&>a]:text-[#e7816b] hover:after:[&>a]:w-[60%]">
                <NavLink onClick={scrollToTop} to="/about">
                  OUR COMPANY
                </NavLink>
                <NavLink onClick={scrollToTop} to="/locations">
                  LOCATIONS
                </NavLink>
                <NavLink onClick={scrollToTop} to="/contact">
                  CONTACTS
                </NavLink>
              </ul>
            </div>
          </div>
          <div className="mx-auto w-[80%] justify-between py-12 text-center md:flex lg:w-[70%]">
            <p className="mx-auto mb-8 w-[50%] text-sm font-bold text-[#8e8d8e] md:mx-0 md:mb-0 md:w-[20%]">
              Design Central Office 3886 Wellington Street Toronto, Ontario M9C
              3J5
            </p>
            <p className="mx-auto mb-8 w-[50%] text-sm font-bold text-[#8e8d8e] md:mx-0 md:mb-0 md:w-[20%]">
              Contact Us (Central Office) P: +1 253-863-8967 M:
              contact@designo.co
            </p>
            <ul className="flex justify-center gap-6 md:w-[20%] [&>li]:cursor-pointer [&>li]:text-3xl [&>li]:text-[#e7816b] [&>li]:transition-all hover:[&>li]:text-white">
              <li>
                <AiFillFacebook />
              </li>
              <li>
                <AiFillYoutube />
              </li>
              <li>
                <AiFillInstagram />
              </li>
              <li>
                <AiFillTwitterSquare />
              </li>
            </ul>
          </div>
        </footer>
      </section>
    </>
  );
}
