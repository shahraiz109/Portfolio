"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { useEffect, useState } from "react";
import {
  FiDownload,
  FiMenu,
  FiX,
  FiHome,
  FiUser,
  FiBriefcase,
  FiPhone,
  FiBook,
} from "react-icons/fi";
import { headerData, footerData } from "@/app/data/data";

const Header = () => {
  const { navLinks, resume } = headerData;
  const { copyright } = footerData;
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");

  useEffect(() => {
    if (typeof document === "undefined") return;
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const sectionIds = [
      "home",
      "services",
      "experience",
      "skills",
      "projects",
      "contact",
    ];
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el) => el !== null);

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveLink("#" + entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.2,
      },
    );

    elements.forEach((el) => observer.observe(el));
    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  const navIconMap = {
    home: FiHome,
    about: FiUser,
    projects: FiBriefcase,
    contact: FiPhone,
    blog: FiBook,
  };

  const handleToggle = () => setMenuOpen((prev) => !prev);
  const handleClose = () => setMenuOpen(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="site-header">
      <div className="container">
        {/* Logo */}
        <div className="logo-wrapper">
          <div className="logo-dot"></div>

          <div className="logo-box" onClick={scrollToTop}>
            SA
          </div>
        </div>

        <div className="header-right">
          <nav aria-label="Primary navigation">
            <ul className="nav-links">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={link.href === activeLink ? "active" : undefined}
                    onClick={() => setActiveLink(link.href)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          {/* social icons */}
          <div className="social-icons">
            <a
              href="https://github.com/shahraiz109"
              target="_blank"
              className="icon github"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/shahraiz-ali-722b95315/"
              target="_blank"
              className="icon linkedin"
            >
              <FaLinkedin />
            </a>

            <a href="mailto:shahraizali@example.com" className="icon gmail">
              <FaEnvelope />
            </a>
          </div>
          <Link
            href={resume.href}
            className="resume-button"
            download={resume.download}
          >
            <span>{resume.label}</span>
            <FiDownload aria-hidden />
          </Link>
        </div>
        <button
          className="menu-toggle"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          onClick={handleToggle}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>
      {menuOpen && <div className="mobile-backdrop" onClick={handleClose} />}
      <aside className={`mobile-drawer ${menuOpen ? "open" : ""}`}>
        <div className="drawer-header">
          <div className="logo-wrapper">
            <div className="logo-dot"></div>

            <div className="logo-box" onClick={scrollToTop}>
              SA
            </div>
          </div>{" "}
          <button
            className="drawer-close"
            aria-label="Close navigation menu"
            onClick={handleClose}
          >
            <FiX />
          </button>
        </div>
        <nav className="drawer-nav" aria-label="Mobile navigation">
          {navLinks.map((link) => {
            const Icon =
              navIconMap[link.icon as keyof typeof navIconMap] ?? FiHome;
            return (
              <a
                key={link.href}
                href={link.href}
                className={link.href === activeLink ? "active" : undefined}
                onClick={() => {
                  setActiveLink(link.href);
                  handleClose();
                }}
              >
                <Icon aria-hidden />
                <span>{link.label}</span>
              </a>
            );
          })}
        </nav>
        <Link
          href={resume.href}
          className="resume-button drawer"
          onClick={handleClose}
        >
          <span>{resume.label}</span>
          <FiDownload aria-hidden />
        </Link>
        <p className="drawer-copy">{copyright}</p>
      </aside>
    </header>
  );
};

export default Header;
