import Img1 from "../../../imgs/home/desc1.png";
import Img2 from "../../../imgs/home/desc2.png";
import Img3 from "../../../imgs/home/desc3.png";

export default function Description() {
  const styles = {
    section: "grid-cols-3 gap-10 align-center my-36 lg:grid",
    grid_div: "flex flex-col items-center justify-center text-center gap-9",
    title: "lg:text-xl text-3xl text-[#e7816b]",
    description: "text-base w-[70%] md:w-auto leading-7",
  };

  return (
    <>
      <div className={styles.section}>
        {sections.map(({ img, title, description }, i) => (
          <div key={i} className={styles.grid_div}>
            <img width={210} className="h-full" src={img} alt="" />
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.description}>{description}</p>
          </div>
        ))}
      </div>
    </>
  );
}

const sections = [
  {
    img: Img1,
    title: "PASSIONATE",
    description:
      "Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.",
  },
  {
    img: Img2,
    title: "RESOURCEFUL",
    description:
      "Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs.",
  },

  {
    img: Img3,
    title: "FRIENDLY",
    description:
      " We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.",
  },
];
