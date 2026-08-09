const SectionHeading = ({ eyebrow, title, subtitle, align = "center", className = "" }) => {
  const alignClass = align === "left" ? "text-left items-start" : "text-center items-center";

  return (
    <div className={`flex flex-col gap-3 mb-12 lg:mb-16 ${alignClass} ${className}`}>
      {eyebrow && (
        <span className="font-mono text-sm uppercase tracking-[0.2em] text-accent">
          {eyebrow}
        </span>
      )}
      <h2 className="font-gamilia text-[clamp(2rem,4vw,3.5rem)] leading-tight text-text">
        {title}
      </h2>
      {subtitle && (
        <p className="max-w-2xl text-lg text-text-muted">{subtitle}</p>
      )}
    </div>
  );
};

export default SectionHeading;
