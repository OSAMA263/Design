import ServicesCopmonent from "../services/ServicesCopmonent";
import img1 from "./img1.jpg";
import img2 from "./img2.jpg";
import img3 from "./img3.jpg";
import img4 from "./img4.jpg";
import img5 from "./img5.jpg";
import GraphicImg from "../../../imgs/routes/image-graphic-design.48db9c2e.jpg";
import WebImg from "../../../imgs/routes/image-web-design-large.8fe8b44b.jpg";
import Projects from "../../pages/Home/Projects";

export default function AppDesign() {

const styles="mx-auto my-36 grid h-[20rem] 2xl:w-[70%] lg:w-[80%] w-[90%] md:grid-cols-2 justify-center gap-8 font-serif"

  return (
    <>
      <ServicesCopmonent cards={cards} sections={sections} header={hero} />
      <div className={styles}>
        <Projects sections={sections} />
      </div>
    </>
  );
}

const sections = [
  {
    parent: "relative overflow-hidden rounded-3xl",
    src: WebImg,
    child: "WEB DESIGN",
    URL: "web",
  },
  {
    parent: "relative overflow-hidden rounded-3xl",
    src: GraphicImg,
    child: "GRAPHIC DESIGN",
    URL: "graphic",
  },
];

const hero = {
  h1: "App Design",
  p: "Our mobile designs bring intuitive digital solutions to your customers right at their fingertips.",
};


const cards = [
  {
    img: img1,
    h1: "AIRFILTER",
    p: "Solving the problem of poor indoor air quailty by filtering the air",
  },
  {
    img: img2,
    h1: "EYECAM",
    p: "Product that lets you edit your favorite photos and videos at any time",
  },
  {
    img: img3,
    h1: "FACEIT",
    p: "Get to meet your favorite internet superstar witht he faceit app",
  },
  {
    img: img4,
    h1: "TODO",
    p: "A todo app that features cloud sync with light and dark mode",
  },
  {
    img: img5,
    h1: "LOOPSTUDIOS",
    p: "A VR experience app made for Loopstudios",
  },
];