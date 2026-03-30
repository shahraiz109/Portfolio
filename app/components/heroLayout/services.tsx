import React from "react";
import {
  FiLayers,
  FiServer,
  FiEdit3,
  FiTrendingUp,
  FiVolume2,
  FiGlobe, FiSmartphone, FiCloud
} from "react-icons/fi";
import { servicesData } from "@/app/data/data";

const iconMap: Record<string, React.ReactNode> = {
  network: <FiGlobe size={40} />,
  stack: <FiSmartphone size={40} />,
  design: <FiCloud size={40} />,
  // seo: <FiTrendingUp size={40} />,
  // marketing: <FiVolume2 size={40} />,
  // google: <FiGlobe size={40} />,
};

const Services = () => {
  const { eyebrow, title, services } = servicesData;

  return (
    <section className="services-section" id="services">
      <div className="container">
        <div className="services-header">
          <p className="services-eyebrow">{eyebrow}</p>
          <h2 className="services-title">{title}</h2>
          <div className="services-underline">
            <span className="underline-circle"></span>
            <span className="underline-diamond"></span>
            <span className="underline-circle"></span>
          </div>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{iconMap[service.icon]}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

