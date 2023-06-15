import React from "react";
import ContactForm from "./ContactForm";
import LocationsSections from "../Location/LocationsSections";
import {motion} from "framer-motion"

export default function Contact() {
  return (
    <>
      <motion.section initial={{x:"-100vw"}} animate={{x:0,opacity:1}} exite={{x:"100vw",opacity:0}} transition={{delay:.4}} className="mx-auto 2xl:w-[70%] md:w-[80%] w-[90%]">
        <ContactForm />
        <LocationsSections />
      </motion.section>
    </>
  );
}
