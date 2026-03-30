"use client";

import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const SHOW_AFTER_SCROLL_Y = 240;

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > SHOW_AFTER_SCROLL_Y);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  };

  return (
    <button
      type="button"
      aria-label="Scroll to top"
      className={`scroll-top-button ${isVisible ? "show" : ""}`}
      onClick={scrollToTop}
    >
      <FaArrowUp aria-hidden="true" />
    </button>
  );
};

export default ScrollToTop;
