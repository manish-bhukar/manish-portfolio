type ProjectTechProps = {
  technologies: string[];
};

export default function ProjectTech({
  technologies,
}: ProjectTechProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {technologies.map((technology) => (
        <span
          key={technology}
          className="rounded-full border border-lime-400/20 bg-lime-400/[0.03] px-3 py-1 text-xs font-medium text-gray-300 transition-all duration-300 hover:border-lime-400/50 hover:bg-lime-400/10 hover:text-lime-400"
        >
          {technology}
        </span>
      ))}
    </div>
  );
}