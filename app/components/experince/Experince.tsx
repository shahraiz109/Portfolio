"use client";
import { experiences } from "@/app/data/data";
import Image from "next/image";
import { useState } from "react";
import { FaArrowLeft, FaArrowRight, FaRegCircle } from "react-icons/fa";

const Experience = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="experience-section" id="experience">
      <div className="experience-title">
        Career <span className="experience-title-highlight">Timeline</span>
      </div>

      <p className="experience-subtitle">
        Started as a MERN stack developer and grew into full-stack expertise
        across ride-hailing, healthcare, e-commerce, and streaming industries.
        Worked with startups and enterprise teams on both product and
        project-based solutions.
      </p>

      <div className="experience-list">
        {experiences.map((exp: any, index: any) => {
          const isOpen = openIndex === index;

          return (
            <div key={index} className="experience-item">
              <div className="experience-timeline-line-wrap">
                <div className="experience-timeline-line">
                    <span
                      key={exp.id}
                      className="experience-timeline-dot"
                    />
                </div>
              </div>
              <div
                className="experience-card"
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                {/* Header */}
                <div className="experience-card-header">
                  <div className="experience-card-header-row">
                    <div>
                      <h2 className="experience-role-title">{exp.title}</h2>
                      <p className="experience-company">{exp.company}</p>
                    </div>
                    <h3 className="experience-date-badge">{exp.date}</h3>
                  </div>
                </div>

                {/* Preview or Expanded */}
                {isOpen ? (
                  <>
                    <div className="experience-key-title">
                      Key Responsibilities:
                    </div>

                    <div className="experience-expanded">
                      <div className="experience-expanded-content">
                        <ul className="experience-responsibility-list">
                          {exp.responsibilities.map((resp: any, i: any) => (
                            <li
                              key={i}
                              className="experience-responsibility-item"
                            >
                              <span className="experience-responsibility-icon">
                                <FaRegCircle className="experience-circle-icon" />
                              </span>
                              <p className="experience-responsibility-text">
                                {resp.text}
                              </p>
                            </li>
                          ))}
                        </ul>

                        <div>
                          <h3 className="experience-tech-title">
                            Technologies Used:
                          </h3>
                          <div className="experience-tech-grid">
                            {exp.techStack.map((tech: any, i: number) => (
                              <div
                                key={`${tech.name}-${i}`}
                                className="experience-tech-chip"
                              >
                                <Image
                                  src={tech.icon}
                                  alt={tech.name}
                                  width={20}
                                  height={20}
                                  className="experience-tech-icon"
                                />
                                {tech.name}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="experience-preview">
                    <p className="experience-preview-text">
                      {exp.shortDescription}
                    </p>
                  </div>
                )}

                {/* Button + Dots */}
                <div className="experience-actions">
                  <button className="experience-toggle-button">
                    {isOpen ? (
                      <>
                        <p>Tap to see overview</p>
                        <FaArrowLeft className="experience-arrow-icon" />
                      </>
                    ) : (
                      <>
                        <p>Tap to see responsibilities</p>
                        <FaArrowRight className="experience-arrow-icon" />
                      </>
                    )}
                  </button>

                  <div className="experience-dots">
                    <span className="experience-dot experience-dot-1" />
                    <span className="experience-dot experience-dot-2" />
                    <span className="experience-dot experience-dot-3" />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;
