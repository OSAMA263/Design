import img1 from "../../../imgs/locations/image-map-australia.3afe58f8.png";
import img2 from "../../../imgs/locations/image-map-canada.dce629d0.png";
import img3 from "../../../imgs/locations/image-map-united-kingdom.f1e269b3.png";
import { motion } from "framer-motion";

export default function LocationsPage() {
  
  return (
    <motion.section
      initial={{ x: "-100vw" }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: "100vw", opacity: 0 }}
      transition={{delay: 0.2,type:"spring",mass:.4}}
      className="mx-auto w-[90%] font-serif lg:w-[80%] 2xl:w-[70%]"
    >
      {sections.map(({ text, parentDiv, img }, i) => (
        <div
          className={`mb-32 mt-20 items-center justify-between overflow-hidden rounded-3xl lg:flex ${parentDiv}`}
          key={i}
        >
          <img src={img} className="mx-auto sm:w-1/2 lg:mx-0 rounded-3xl lg:w-auto" alt="" />
          <div
            className={`mt-12 bg-white text-center xl:mt-0 [&>h1]:text-[#e7816b] [&>p]:text-black ${text.className}`}
          >
            <h1 className="mb-8 text-4xl font-semibold">{text.h1}</h1>
            <div className="flex justify-center xl:justify-between">
              <div className="me-4">
                {text.leftContent.map((p, i) => (
                  <p className="text-base xl:text-sm" key={i}>
                    {p}
                  </p>
                ))}
              </div>
              <div className="">
                {text.rightContent.map((p, i) => (
                  <p className="text-base xl:text-sm" key={i}>
                    {p}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </motion.section>
  );
}

const sections = [
  {
    text: {
      className: "xl:text-end",
      h1: "Canada",
      leftContent: [
        "Design UK Office",
        "13 Colorado Way",
        "Rhyd-y-fro SA8 9GA",
      ],
      rightContent: [
        "Contact Us (Central Office)",
        "P: +1 253-863-8967",
        "M: contact@designo.co",
      ],
    },
    parentDiv: "",
    img: img2,
  },
  {
    text: {
      className: "xl:text-start",
      h1: "Australia",
      leftContent: [
        "Design UK Office",
        "13 Colorado Way",
        "Rhyd-y-fro SA8 9GA",
      ],
      rightContent: ["Contact", "P: (02) 6720 9092", "M: contact@designo.au"],
    },
    parentDiv: "flex-row-reverse",
    img: img3,
  },
  {
    text: {
      className: "xl:text-end",
      h1: "United Kingdom",
      leftContent: [
        "Design UK Office",
        "13 Colorado Way",
        "Rhyd-y-fro SA8 9GA",
      ],
      rightContent: ["Contact", "P: 078 3115 1400", "M: contact@designo.uk"],
    },
    parentDiv: "",
    img: img1,
  },
];