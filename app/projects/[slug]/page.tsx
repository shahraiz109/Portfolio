import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

import { projectsData } from "@/app/data/data";

type ProjectPageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return projectsData.projects
    .filter((project) => project.slug)
    .map((project) => ({ slug: project.slug }));
}

const ProjectDetailPage = ({ params }: ProjectPageProps) => {
  // Decode URL-encoded slug for comparison
  const decodedSlug = decodeURIComponent(params.slug);
  const project = projectsData.projects.find(
    (item) => item.slug === decodedSlug
  );

  if (!project || !project.details) {
    notFound();
  }

  const categoryLabel =
    projectsData.categories.find((cat) => cat.value === project.category)
      ?.label ?? "Project";

  const { details } = project;

  return (
    <section className="project-detail-section">
      <div className="container">
        <Link href="/#projects" className="project-detail-back">
          <FiArrowLeft aria-hidden />
          Back to projects
        </Link>

        <div className="project-detail-header">
          <span className="project-category">{categoryLabel}</span>
          <h1>{project.title}</h1>
          <p>{details.desc2}</p>
        </div>

        {details.heroImages?.length ? (
          <div className="project-detail-gallery">
            {details.heroImages.map((image, index) => (
              <div className="project-detail-image" key={`${image}-${index}`}>
                <Image
                  src={image}
                  alt={`${project.title} preview ${index + 1}`}
                  width={1200}
                  height={720}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            ))}
          </div>
        ) : null}

        <div className="project-detail-content">
          {details.features?.length ? (
            <div className="project-detail-card">
              <h3>Features</h3>
              <ul>
                {details.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </div>
          ) : null}

          {details.tools?.length ? (
            <div className="project-detail-card">
              <h3>Tools &amp; Technologies</h3>
              <ul>
                {details.tools.map((tool) => (
                  <li key={tool}>{tool}</li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>

        {details.actions?.length ? (
          <div className="project-detail-actions">
            {details.actions.map((action) => (
              <Link
                key={action.label}
                href={action.href}
                className={`button ${
                  action.variant === "outline" ? "outline" : "solid"
                }`}
                target="_blank"
                rel="noreferrer"
              >
                {action.label}
                <FiArrowRight aria-hidden />
              </Link>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
};

export default ProjectDetailPage;

