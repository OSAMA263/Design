import React from "react";
import img1 from "./img1.jpg";
import img2 from "./img2.jpg";
import img3 from "./img3.jpg";
import img4 from "./img4.jpg";
import img5 from "./img5.jpg";
import img6 from "./img6.jpg";
import GraphicImg from "../../../imgs/routes/image-graphic-design.48db9c2e.jpg";
import AppImg from "../../../imgs/routes/image-app-design.1f02d5b7.jpg";
import ServicesCopmonent from "../services/ServicesCopmonent";
import Projects from "../../pages/Home/Projects";

export default function WebDesign() {
  const sections = [
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

  const header = {
    h1: "Web Design",
    p: "We build websites that serve as powerful marketing tools and bring memorable brand experiences.",
  };

  const cards = [
    {
      img: img1,
      h1: "EXPRESS",
      p: "A multi-carrier shipping website for ecommerce businesses",
    },
    {
      img: img2,
      h1: "TRANSFER",
      p: "Site for low-cost money transfers and sending money within seconds",
    },
    {
      img: img3,
      h1: "PHOTON",
      p: "A state-of-the-art music player with high-resolution audio and DSP effects",
    },
    {
      img: img4,
      h1: "BUILDER",
      p: "Connects useres with local contractors based on their location",
    },
    {
      img: img5,
      h1: "BLOGR",
      p: "Blogr is a platform for creating an online blog or publication",
    },
    {
      img: img6,
      h1: "CAMP",
      p: "Get expert training in code, data, design, and digital marketing",
    },
  ];

  return (
    <>
      <ServicesCopmonent cards={cards} header={header} />
      <div className="mx-auto my-36 grid h-[20rem] w-[90%] justify-center gap-8 font-serif md:grid-cols-2 lg:w-[80%] 2xl:w-[70%]">
        <Projects sections={sections} />
      </div>
    </>
  );
}
