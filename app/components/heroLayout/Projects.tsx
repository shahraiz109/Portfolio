"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import { ProjectCategory, projectsData } from "@/app/data/data";
import DetailPage from "../pages/DetailPage";

const Projects = () => {
  const { eyebrow, title, categories, projects } = projectsData;
  const [activeFilter, setActiveFilter] = useState(ProjectCategory.All);
    const [open, setOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<any>(null); 
console.log('activeFilter', activeFilter)
  const filteredProjects = useMemo(() => {
    if (activeFilter === ProjectCategory.All) return projects;
    return projects.filter((project) => project.category === activeFilter);
  }, [activeFilter, projects]);
console.log('filteredProjects', filteredProjects)
  const titleParts = title.split(" ");
  const highlight = titleParts.pop();
  const mainTitle = titleParts.join(" ");

  return (
    <section className="projects-section" id="projects">
      <div className="container">
        <div className="projects-header">
          <p className="projects-eyebrow">{eyebrow}</p>
          <h2 className="projects-title">
            {mainTitle} <span>{highlight}</span>
          </h2>
          <div className="services-underline">
            <span className="underline-circle"></span>
            <span className="underline-diamond"></span>
            <span className="underline-circle"></span>
          </div>
        </div>

        <div
          className="project-filters"
          role="tablist"
          aria-label="Project filters"
        >
          {categories.map((category) => (
            <button
              key={category.value}
              type="button"
              role="tab"
              aria-selected={activeFilter === category.value}
              className={
                activeFilter === category.value
                  ? "filter-chip active"
                  : "filter-chip"
              }
              onClick={() => setActiveFilter(category.value)}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project) => {
            const categoryLabel =
              categories.find((cat) => cat.value === project.category)?.label ;
            return (
              <article
                key={project.id}
                className={`project-card${project.featured ? " project-card-featured" : ""}`}
              >
                <div className="project-cover">
                  {project.image && (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="project-cover-image"
                      sizes="(max-width: 768px) 100vw, 400px"
                      priority={project.featured}
                    />
                  )}
                  <div className="project-cover-info">
                    <p>{categoryLabel}</p>
                    <h3>{project.title}</h3>
                  </div>
                </div>

                <div className="project-hover-content">
                  <span className="project-category">{categoryLabel}</span>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                 
                  <button
                    onClick={() => {
                      setSelectedProject(project);
                      setOpen(true);
                    }}
                    className="projectbtn"
                  >
                    {project.ctaLabel}
                    <FiArrowRight aria-hidden />{" "}
                  </button>

                  {/* </Link> */}
                </div>
              </article>
            );
          })}
        </div>
        {/* ✅ MODAL OUTSIDE MAP */}
      {open && selectedProject && (
        <div className="project-modal-backdrop">
          <div className="project-modal-content">
            <DetailPage data={selectedProject} setOpen={setOpen} />
          </div>
        </div>
      )}

        {/* <div className="projects-cta">
          <Link href={cta.href} className="button solid">
            {cta.label} <FiArrowRight aria-hidden />
          </Link>
        </div> */}
      </div>
    </section>
  );
};

export default Projects;
