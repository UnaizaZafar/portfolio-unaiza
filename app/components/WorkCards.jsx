import { githubIcon, websiteIcon } from "../utils/svgs";
import Image from "next/image";
import Link from "next/link";
import Tags from "./Tags";
import GlassCard from "./ui/GlassCard";

const WorkCards = ({ item, featured = false }) => {
  return (
    <GlassCard
      className={`group overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 h-full flex flex-col ${
        featured ? "md:min-h-[420px]" : ""
      }`}
    >
      <div className="relative overflow-hidden aspect-[16/10] shrink-0">
        <Image
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          width={600}
          height={375}
          unoptimized
          src={`/images/projects/${item.imageSrc}.webp`}
          alt={item.imageAlt}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="flex flex-col flex-grow gap-3 p-5">
        <h3 className="font-gamilia text-xl text-text">{item.name}</h3>

        {item.tags && (
          <div className="flex flex-wrap gap-2">
            {item.tags.map((tag) => (
              <Tags key={tag} text={tag} />
            ))}
          </div>
        )}

        <p className="text-sm text-text-muted line-clamp-3 flex-grow">
          {typeof item.desc === "string" ? item.desc : "Built with modern frontend technologies."}
        </p>

        <div className="flex gap-3 pt-2">
          {item.gitLink && (
            <Link
              href={item.gitLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${item.name} on GitHub`}
              className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-text-muted hover:text-accent hover:bg-accent/10 transition-all duration-300 focus-ring"
            >
              <span className="size-5">{githubIcon}</span>
              GitHub
            </Link>
          )}
          {item.webLink && (
            <Link
              href={item.webLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${item.name} live site`}
              className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-text-muted hover:text-accent hover:bg-accent/10 transition-all duration-300 focus-ring"
            >
              <span className="size-5">{websiteIcon}</span>
              Live
            </Link>
          )}
        </div>
      </div>
    </GlassCard>
  );
};

export default WorkCards;
