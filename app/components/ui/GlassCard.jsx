const GlassCard = ({ className = "", children }) => {
  return (
    <div className={`glass-surface rounded-2xl ${className}`}>{children}</div>
  );
};

export default GlassCard;
