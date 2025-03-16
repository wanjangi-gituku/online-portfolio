import ProjectCard from "./ProjectCard";
import { projectData } from "./projectData";
import ScrollReveal from "./ScrollReveal";

const Projects = () => {
  return (
    <div
      id="projects"
      className="pt-30 md:pt-32 flex min-h-screen w-full flex-col items-center justify-center gap-16 p-4 md:px-14 md:py-24"
    >
      <ScrollReveal>
        <h1 className="text-4xl font-light text-white md:text-6xl">Projects</h1>
      </ScrollReveal>

      <div className="flex flex-col w-full max-w-[1000px gap-16 text-white]">
        {projectData.map((project, index) => (
          <ProjectCard
            key={index}
            image={project.image}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            githubLink={project.githubLink}
            liveDemoLink={project.liveDemoLink}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
