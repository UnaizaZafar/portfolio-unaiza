import Link from "next/link";

const variants = {
  primary:
    "bg-accent text-bg hover:bg-accent-muted shadow-lg shadow-accent/20",
  ghost:
    "bg-transparent text-text border border-border hover:border-accent/50 hover:text-accent",
  outline:
    "bg-transparent text-accent border border-accent/40 hover:bg-accent/10",
};

const Button = ({
  href,
  download,
  variant = "primary",
  className = "",
  children,
  ...props
}) => {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-base font-medium transition-all duration-300 focus-ring";

  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} download={download} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

export default Button;
