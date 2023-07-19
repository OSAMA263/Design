export default function ContactForm() {
  
  const styles = {
    section:
      "mb-36 lg:flex items-center gap-x-6 rounded-3xl bg-[#e7816b] md:px-14 px-8 py-14 2xl:justify-between 2xl:gap-x-0",
    text_wrapper:
      "mb-12 text-center text-white lg:w-1/2 lg:text-start lg:mb-0 2xl:w-1/3",
    form: "flex flex-col gap-6 lg:w-1/2 2xl:w-1/3",
    input:
      "rounded-lg border-b-2 bg-transparent px-2 pt-4 text-white outline-0 transition-all placeholder:text-[#627b80] focus:border-black",
    submit_btn:
      "mx-auto max-w-fit rounded-md bg-white p-3 px-8 text-black transition-colors hover:bg-[#ffad9b] hover:text-white",
  };

  return (
    <>
      <section id="input" className={styles.section}>
        {/* text */}
        <div className={styles.text_wrapper}>
          <h1 className="mb-4 text-4xl">Contact Us</h1>
          <p className="leading-6">
            Ready to take it to the next level? Let’s talk about your project or
            idea and find out how we can help your business grow. If you are
            looking for unique digital experiences that’s relatable to your
            users, drop us a line.
          </p>
        </div>
        {/* form */}
        <form action="" className={styles.form}>
          {inputs.map(({ placeholder, type }, i) => (
            <input
              required
              key={i}
              placeholder={placeholder}
              type={type}
              className={styles.input}
            />
          ))}
          <textarea
            required
            placeholder="Your Address"
            rows={1}
            className={styles.input}
          ></textarea>
          <button className={styles.submit_btn} type="submit">
            SUBMIT
          </button>
        </form>
      </section>
    </>
  );
}

const inputs = [
  { type: "text", placeholder: "Name" },
  { type: "email", placeholder: "Email Address" },
  { type: "number", placeholder: "Phone Number" },
];
