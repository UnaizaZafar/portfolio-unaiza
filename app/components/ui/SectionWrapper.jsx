const SectionWrapper = ({ id, className = "", children }) => {
  return (
    <section
      id={id}
      className={`relative z-[1] mx-auto w-full max-w-7xl px-6 py-[clamp(4rem,10vh,8rem)] lg:px-12 ${className}`}
    >
      {children}
    </section>
  );
};

export default SectionWrapper;
