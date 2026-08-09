const Tags = ({ text }) => {
  return (
    <span className="inline-block rounded-md bg-accent/10 px-2.5 py-1 font-mono text-xs text-accent border border-accent/20">
      {text}
    </span>
  );
};

export default Tags;
