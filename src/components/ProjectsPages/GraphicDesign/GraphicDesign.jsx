import img1 from "./img1.jpg";
import img2 from "./img2.jpg";
import img3 from "./img3.jpg";
import WebImg from "../../../imgs/routes/image-web-design-large.8fe8b44b.jpg";
import AppImg from "../../../imgs/routes/image-app-design.1f02d5b7.jpg";
import ServicesCopmonent from "../services/ServicesCopmonent";
import Projects from "../../pages/Home/Projects";

export default function GraphicDesign() {
  const styles =
    "mx-auto my-36 grid h-[20rem] w-[90%] justify-center gap-8 font-serif md:grid-cols-2 lg:w-[80%] 2xl:w-[70%]";

  return (
    <>
      <ServicesCopmonent cards={cards} header={header} />
      <div className={styles}>
        <Projects sections={sections} />
      </div>
    </>
  );
}

const sections = [
  {
    parent: "relative overflow-hidden rounded-3xl",
    src: AppImg,
    child: "APP DESIGN",
    URL: "app",
  },
  {
    parent: "relative overflow-hidden rounded-3xl",
    src: WebImg,
    child: "WEB DESIGN",
    URL: "web",
  },
];

const header = {
  h1: "Graphic Design",
  p: "We deliver eye-catching branding materials that are tailored to meet your business objectives.",
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
];
