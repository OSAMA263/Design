import React from "react";

export default function ContactForm() {
  const inputs = [
    { type: "text", placeholder: "Name" },
    { type: "email", placeholder: "Email Address" },
    { type: "number", placeholder: "Phone Number" },
  ];

  return (
    <>
      <div
        id="input"
        className="mb-36 lg:flex items-center gap-x-6 rounded-3xl bg-[#e7816b] md:px-14 px-8 py-14 2xl:justify-between 2xl:gap-x-0"
      >
        {/* text */}
        <div className="lg:w-1/2 text-center lg:text-start lg:mb-0 mb-12 text-white 2xl:w-1/3">
          <h1 className="mb-4 text-4xl">Contact Us</h1>
          <p className="leading-6">
            Ready to take it to the next level? Let’s talk about your project or
            idea and find out how we can help your business grow. If you are
            looking for unique digital experiences that’s relatable to your
            users, drop us a line.
          </p>
        </div>
        {/* form */}
        <form action="" className="flex lg:w-1/2 flex-col gap-6 2xl:w-1/3">
          {inputs.map(({ placeholder, type }, i) => (
            <input
              required
              key={i}
              placeholder={placeholder}
              type={type}
              className="rounded-lg border-b-2 bg-transparent px-2 pt-4 text-white outline-0 transition-all placeholder:text-[#627b80] focus:border-black"
            />
          ))}
          <textarea
            required
            placeholder="Your Address"
            rows={1}
            className="rounded-lg border-b-2 bg-transparent px-2 pt-4 outline-0 transition-all placeholder:text-[#627b80] focus:border-black"
          ></textarea>
          <button
            className="mx-auto max-w-fit rounded-md bg-white p-3 px-8 text-black transition-colors hover:bg-[#ffad9b] hover:text-white"
            type="submit"
          >
            SUBMIT
          </button>
        </form>
      </div>
    </>
  );
}
