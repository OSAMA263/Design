import React from "react";
import HomeHero from "./HomeHero";
import Projects from "./Projects";
import AppImg from "../../../imgs/routes/image-app-design.1f02d5b7.jpg";
import GraphicImg from "../../../imgs/routes/image-graphic-design.48db9c2e.jpg";
import WebImg from "../../../imgs/routes/image-web-design-large.8fe8b44b.jpg";
import Description from "./Description";
import { motion } from "framer-motion";

export default function Home() {
  const sections = [
    {
      parent: "relative md:row-span-2 overflow-hidden rounded-3x  rounded-3xl",
      src: WebImg,
      child: "WEB DESIGN",
      URL: "web",
    },
    {
      parent: "relative overflow-hidden rounded-3xl",
      src: AppImg,
      child: "APP DESIGN",
      URL: "app",
    },
    {
      parent: "relative overflow-hidden rounded-3xl",
      src: GraphicImg,
      child: "GRAPHIC DESIGN",
      URL: "graphic",
    },
  ];

  return (
    <motion.div
      initial={{ x: "-100vw" }}
      animate={{ x: 0, opacity: 1 }}
      exite={{ x: "100vw", opacity: 0 }} transition={{delay:.4}}
      className="mx-auto 2xl:w-[70%] lg:w-[80%] w-[90%] font-serif"
    >
      <HomeHero />
      <div className="my-36 grid h-[40rem] md:grid-cols-2 md:grid-rows-2 gap-4">
        <Projects sections={sections} />
      </div>
      <Description />
    </motion.div>
  );
}
