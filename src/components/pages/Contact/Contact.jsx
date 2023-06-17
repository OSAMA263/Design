import React from "react";
import ContactForm from "./ContactForm";
import LocationsSections from "../Location/LocationsSections";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <>
      <motion.section
        initial={{ x: "-100vw" }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: "100vw", opacity: 0 }}
        transition={{ delay: 0.2,type:"spring",mass:.4 }}
        className="mx-auto w-[90%] md:w-[80%] 2xl:w-[70%]"
      >
        <ContactForm />
        <LocationsSections />
      </motion.section>
    </>
  );
}
