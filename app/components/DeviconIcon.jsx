"use client";

import { useState } from "react";
import { getDeviconUrl } from "../utils/skillIcons";

const FallbackIcon = ({ label }) => (
  <div
    className="flex size-12 lg:size-14 items-center justify-center rounded-xl border border-dashed border-accent/40 bg-accent/5 px-1"
    title="Custom icon coming soon"
  >
    <span className="font-mono text-[10px] text-center leading-tight text-accent">
      {label.length > 8 ? label.slice(0, 6) + "…" : label}
    </span>
  </div>
);

const DeviconIcon = ({ skill }) => {
  const [failed, setFailed] = useState(false);

  if (!skill.devicon || failed) {
    return <FallbackIcon label={skill.label} />;
  }

  return (
    <img
      src={getDeviconUrl(skill.devicon, skill.variant)}
      alt=""
      width={56}
      height={56}
      className="size-12 lg:size-14 object-contain"
      loading="lazy"
      onError={() => setFailed(true)}
    />
  );
};

export default DeviconIcon;
