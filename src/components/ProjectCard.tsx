import { Projects } from "./projectData";
import ScrollReveal from "./ScrollReveal";

const ProjectCard = ({
  image,
  title,
  description,
  technologies,
  githubLink,
  liveDemoLink,
}: Projects) => {
  return (
    <ScrollReveal>
      <div className="flex flex-col items-center gap-8 md:flex-row md:gap-24">
        <div className="flex flex-col gap-5">
          <div className="relative w-[350px] h-[250px] overflow-hidden rounded-2xl">
            <img
              src={image}
              alt={title}
              className="absolute inset-0 w-full h-full object-cover cursor-pointer transition-transform duration-300 hover:scale-105"
            />
          </div>

          <div className="flex gap-2">
            <a
              href={githubLink}
              target="_blank"
              className="text-nowrap rounded-lg border border-indigo-600 bg-black px-3 py-1 text-xs font-bold text-white shadow-sm shadow-indigo-700"
            >
              GitHub
            </a>
            {liveDemoLink && (
              <a
                href={liveDemoLink}
                target="_blank"
                className="text-nowrap rounded-lg border border-indigo-600 bg-black px-3 py-1 text-xs font-bold text-white shadow-sm shadow-indigo-700"
              >
                Live Demo
              </a>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-3">
            <div className="text-xl font-semibold text-gray-50">{title}</div>
            <p className="text-gray-400">{description}</p>
          </div>
          <div className="flex flex-wrap gap-5">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="rounded-lg bg-gray-800 text-gray-50 p-3"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
};

export default ProjectCard;
