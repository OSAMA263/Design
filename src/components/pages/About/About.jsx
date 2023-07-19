import img1 from "../../../imgs/about/image-about-hero.064b26d3.jpg";
import img2 from "../../../imgs/about/image-real-deal.f3117a64.jpg";
import img3 from "../../../imgs/about/image-world-class-talent.7588c45e.jpg";
import LocationsSections from "../Location/LocationsSections";
import { motion } from "framer-motion";

export default function About() {
 

  return (
    <>
      <motion.section
        initial={{ x: "-100vw" }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: "100vw", opacity: 0 }}
        transition={{ delay: 0.2,type:"spring",mass:.4 }}
        className="mx-auto w-[90%] font-serif lg:w-[80%] 2xl:w-[70%]"
      >
        {sections.map(({ text, img, parentDiv }, i) => (
          <div
            key={i}
            className={`mb-32 mt-20 xl:mx-0 mx-auto xl:w-auto sm:w-2/3 w-[90%] items-center justify-center overflow-hidden rounded-3xl xl:flex xl:h-[30rem] ${parentDiv}`}
          >
            <img
              src={img}
              alt=""
              className="lg:h-[40rem] md:h-auto xl:w-auto w-full"
            />
            <div
              className={`flex h-full flex-col justify-center px-12 py-8 xl:py-0 ${text.className}`}
            >
              <h1 className="mb-8 text-4xl font-semibold">{text.h1}</h1>
              <p className="mb-6 text-xl 2xl:text-auto">{text.p1}</p>
              <p>{text.p2 && text.p2}</p>
            </div>
          </div>
        ))}
        <LocationsSections />
      </motion.section>
    </>
  );
}

const sections = [
  {
    text: {
      className:
        "[&>h1]:text-[#e7816b] [&>p]:text-black bg-white text-center xl:text-end ",
      h1: "About us",
      p1: "Founded in 2010, we are a creative agency that produces lasting results for our clients. We’ve partnered with many startups, corporations, and nonprofits alike to craft designs that make real impact. We’re always looking forward to creating brands, products, and digital experiences that connect with our clients’ audiences.",
    },
    img: img1,
    parentDiv: "",
  },
  {
    text: {
      className: "text-white bg-[#e7816b] text-center xl:text-start",
      h1: "World-class talent",
      p1: "We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully crafted from concept to launch, ensuring success in its given market. We are constantly updating our skills in a myriad of platforms.",
      p2: "Our team is multi-disciplinary and we are not merely interested in form — content and meaning are just as important. We give great importance to craftsmanship, service, and prompt delivery. Clients have always been impressed with our high-quality outcomes that encapsulates their brand’s story and mission.",
    },
    img: img2,
    parentDiv: "flex-row-reverse",
  },
  {
    text: {
      className:
        "[&>h1]:text-[#e7816b] [&>p]:text-black bg-white text-center xl:text-end",
      h1: "The real deal",
      p1: "As strategic partners in our clients’ businesses, we are ready to take on any challenge as our own. Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective to every opportunity. We make design and technology more accessible and give you tools to measure success.",
      p2: "We are visual storytellers in appealing and captivating ways. By combining business and marketing strategies, we inspire audiences to take action and drive real results.",
    },
    img: img3,
    parentDiv: "",
  },
];