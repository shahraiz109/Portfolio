"use client";

import React, { useState } from "react";
import { Button } from "../ui/button";
import { CircleStar, CodeXml, Server, Wrench } from "lucide-react";
import SkillsCard from "../pages/SkillsCard";
import { SkillsData, categories } from "@/app/data/data";

const Skills = () => {
  const [active, setActive] = useState("frontend");

  return (
    <div className="skills-section" id="skills">
      <span className="skills-section-badge">TECH STACK</span>

      <h3 className="skills-section-heading">
        Technologies & <span>Skills</span>
      </h3>

      <p className="skills-section-description">
        A comprehensive overview of the technologies and tools I use to bring
        ideas to life
      </p>

      <div className="skills-tabs">
        <Button
          className={`skills-tab-btn ${active === "frontend" ? "active" : ""}`}
          onClick={() => setActive("frontend")}
        >
          {active === "frontend" && <div className="tab-indicator" aria-hidden="true"></div>}
          <span className="tab-icon"><CodeXml size={20} /></span>
          <span className="tab-label">Frontend</span>
        </Button>

        <Button
          className={`skills-tab-btn ${active === "backend" ? "active" : ""}`}
          onClick={() => setActive("backend")}
        >
          {active === "backend" && <div className="tab-indicator" aria-hidden="true"></div>}
          <span className="tab-icon"><Server size={20} /></span>
          <span className="tab-label">Backend</span>
        </Button>

        <Button
          className={`skills-tab-btn ${active === "tools" ? "active" : ""}`}
          onClick={() => setActive("tools")}
        >
          {active === "tools" && <div className="tab-indicator" aria-hidden="true"></div>}
          <span className="tab-icon"><Wrench size={20} /></span>
          <span className="tab-label">Tools & DevOps</span>
        </Button>

      </div>

      <div className="skills-grid">
        {active === "frontend" && SkillsData.frontend.map((item, index) => <SkillsCard item={item} key={index} />)}
        {active === "backend" && SkillsData.backend.map((item, index) => <SkillsCard item={item} key={index} />)}
        {active === "tools" && (
          <div className="category-holder">
            <Category />
          </div>
        )}
      </div>
    </div>
  );
};

const Category = () => {
  const [category, setCategory] = useState("cloud");

  return (
    <div className="category-section">
      <div className="category-card">
        <h3 className="category-title">Choose a Category</h3>
        <p className="category-description">Explore tools organized by their purpose and functionality</p>

        <div className="category-tabs">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <Button
                key={cat.id}
                className={`category-tab-btn ${category === cat.id ? "active" : ""}`}
                onClick={() => setCategory(cat.id)}
              >
                {category === cat.id && <div className="tab-indicator" aria-hidden="true"></div>}
                <div className="category-icon"><Icon size={30} /></div>
                <span className="category-label">{cat.label}</span>
              </Button>
            );
          })}
        </div>
      </div>

      <div className="category-skills-grid">
        {category === "cloud" && SkillsData.tools.cloud.map((item, index) => <SkillsCard item={item} key={index} />)}
        {category === "git" && SkillsData.tools.git.map((item, index) => <SkillsCard item={item} key={index} />)}
        {category === "payment" && SkillsData.tools.payment.map((item, index) => <SkillsCard item={item} key={index} />)}
        {category === "communication" && SkillsData.tools.communication.map((item, index) => <SkillsCard item={item} key={index} />)}
        {category === "testing" && SkillsData.tools.testing.map((item, index) => <SkillsCard item={item} key={index} />)}
      </div>
    </div>
  );
};

export default Skills;