import React from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function ServicesCopmonent({ cards, header }) {
  return (
    <>
      <section className="mx-auto w-[80%] font-serif lg:w-[70%] xl:w-[60%]">
        {/*hero section  */}
        <div className="my-32 rounded-2xl bg-[#e7816b] py-14 text-center text-white">
          <h1 className="mb-3 text-4xl">{header.h1}</h1>
          <p className="mx-auto w-1/2 text-sm leading-6">{header.p}</p>
        </div>
        {/* projects */}
        <div className="mx-auto grid w-[75%] items-center gap-x-12 gap-y-8 md:w-auto md:grid-cols-3 md:gap-y-28">
         <AnimatePresence>
          {cards.map(({ img, h1, p }, i) => (
            <motion.div
              key={i}
              initial={{ x: "-100vw", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: i * .3, duration: 0.3 }} exit={{x:"100vw",opacity:0}}
              className="flex h-full flex-col overflow-hidden rounded-2xl"
            >
              <img src={img} className="sm:h-[30rem] md:h-auto" alt="" />
              <div className="cursor-pointer py-8 pt-6 text-center transition-colors duration-500 hover:bg-[#e7816b] md:h-full [&>h1]:hover:text-white [&>p]:hover:text-white">
                <h1 className="mb-4 text-2xl tracking-[8px] text-[#e7816b]">
                  {h1}
                </h1>
                <p className="text-sm">{p}</p>
              </div>
            </motion.div>
          ))}</AnimatePresence>
        </div>
      </section>
    </>
  );
}
