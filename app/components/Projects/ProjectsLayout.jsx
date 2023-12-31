import { OthersProjects } from "./OthersProjects";
import { ProjectCard } from "./ProjectCard";

export const ProjectsLayout = () => {
  return (
    <section id="misProyectos" className="u-center">
      <div className="w-full flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold">Proyectos destacados</h1>
        <span className="text-base text-[var(--text-secondary)]">
          Algunos de mis proyectos
        </span>
      </div>
      <ProjectCard />
      <OthersProjects />
    </section>
  );
};
