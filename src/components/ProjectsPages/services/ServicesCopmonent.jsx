import { AnimatePresence, motion } from "framer-motion";

export default function ServicesCopmonent({ cards, header }) {
  const styles = {
    section: "mx-auto w-[80%] font-serif lg:w-[70%] xl:w-[60%]",
    hero: "my-32 rounded-2xl bg-[#e7816b] py-14 text-center text-white",
    cards_wrapper:
      "mx-auto grid w-[75%] items-center gap-x-12 gap-y-8 md:w-auto md:grid-cols-3 md:gap-y-28",
    // card
    card: "flex flex-col h-full overflow-hidden rounded-2xl",
    card_content_wrapper:
      "cursor-pointer py-8 pt-6 text-center transition-colors duration-500 hover:bg-[#e7816b] md:h-full [&>h1]:hover:text-white [&>p]:hover:text-white",
  };

  return (
    <>
      <AnimatePresence mode="wait">
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: .4, when: "beforeChildren" }}
          className={styles.section}
        >
          {/*hero section  */}
          <div className={styles.hero}>
            <h1 className="mb-3 text-4xl">{header.h1}</h1>
            <p className="w-1/2 mx-auto text-sm leading-6">{header.p}</p>
          </div>
          {/* projects */}
          <div className={styles.cards_wrapper}>
            {cards.map(({ img, h1, p }, i) => (
              <motion.div
                key={i}
                initial={{ x: "-100vw", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: i * 0.3, duration: 0.3 }}
                exit={{ x: "100vw", opacity: 0 }}
                className={styles.card}
              >
                <img src={img} className="sm:h-[30rem] md:h-auto" alt="" />
                <div className={styles.card_content_wrapper}>
                  <h1 className="mb-4 text-2xl tracking-[8px] text-[#e7816b]">
                    {h1}
                  </h1>
                  <p className="text-sm">{p}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </AnimatePresence>
    </>
  );
}
