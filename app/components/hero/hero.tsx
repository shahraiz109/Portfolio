"use client";
import Image from "next/image";
import Link from "next/link";
import { FiDownload, FiInfo } from "react-icons/fi";
import { heroData } from "@/app/data/data";
import newImage from "@/public/projects/shahraiz.png";
import { useEffect, useState } from "react";

const iconMap = {
  download: FiDownload,
  info: FiInfo,   
};

const Hero = () => {
  const { greeting, name, role, description, primaryCta, secondaryCta } =
    heroData;
  const PrimaryIcon = iconMap[primaryCta.icon as keyof typeof iconMap];
  const SecondaryIcon = iconMap[secondaryCta.icon as keyof typeof iconMap];

  //cursor animation
  const words = ["Full Stack Developer"];
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const currentWord = words[wordIndex];
    const typingSpeed = isDeleting ? 60 : 120;

    const timer = setTimeout(() => {
      setText((prev) =>
        isDeleting
          ? currentWord.substring(0, prev.length - 1)
          : currentWord.substring(0, prev.length + 1),
      );

      if (!isDeleting && text === currentWord) {
        setTimeout(() => setIsDeleting(true), 1000);
      }

      if (isDeleting && text === "") {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, wordIndex]);

  return (
    <section id="home" className="hero-section">
      <div className="container hero-grid">
        <div className="hero-content">
          <p className="eyebrow">{greeting}</p>
          <h1>{name}</h1>
          <h2>
            {text}
            <span className="cursor">|</span>
          </h2>
          <p className="hero-description">{description}</p>
          <div className="hero-actions">
            <Link
              href={primaryCta.href}
              className="button solid"
              download={primaryCta.download}
            >
              {PrimaryIcon && <PrimaryIcon aria-hidden />}
              <span>{primaryCta.label}</span>
            </Link>
            <Link href={secondaryCta.href} className="button outline">
              {SecondaryIcon && <SecondaryIcon aria-hidden />}
              <span>{secondaryCta.label}</span>
            </Link>
          </div>
        </div>
        <div className="hero-visual">
          <div className="visual-card">
            <div className="image-wrapper">
              <Image
                src={newImage}
                alt="Developer"
                fill
                className="hero-img"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
