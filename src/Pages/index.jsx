import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import githubIcon from "../IMG/icons/github.svg";
import instagramIcon from "../IMG/icons/instagram.svg";
import linkedinIcon from "../IMG/icons/linkedin.svg";
import arrowIcon from "../IMG/icons/arrow.svg";
import todoImg from "../IMG/Todo.png";
import webshopImg from "../IMG/Webshop.png";
import redesignImg from "../IMG/Redesign.png";
import darkmodeImg from "../IMG/DarkMode.png";

const Index = ({ heading = "Välkommen till min portfolio!" }) => {
  const wrapperRef = useRef(null);
  const introRef = useRef(null);

  const [isHovered, setIsHovered] = useState(false);
  const [introVisible, setIntroVisible] = useState(false);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    let scrollInterval;
    const isMobile = window.innerWidth <= 768;

    if (!isMobile && wrapper) {
      const startScrolling = () => {
        scrollInterval = setInterval(() => {
          wrapper.scrollLeft += 1;
        }, 20);
      };

      const stopScrolling = () => clearInterval(scrollInterval);

      startScrolling();

      const handleMouseEnter = () => {
        stopScrolling();
        setIsHovered(true);
      };

      const handleMouseLeave = () => {
        startScrolling();
        setIsHovered(false);
      };

      wrapper.addEventListener("mouseenter", handleMouseEnter);
      wrapper.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        stopScrolling();
        wrapper.removeEventListener("mouseenter", handleMouseEnter);
        wrapper.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, []);

  useEffect(() => {
    const element = introRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIntroVisible(true);
        }
      },
      { threshold: 0.75 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const cards = [
    {
      img: todoImg,
      title: "Frontend/React",
      subtitle: "Todo-app",
      link: "/project",
    },
    {
      img: webshopImg,
      title: "Frontend/React och UX/UI-design",
      subtitle: "Webshop",
      link: "/webshop",
    },
    {
      img: redesignImg,
      title: "UI-design",
      subtitle: "Domira färgredesign",
      link: "/redesign",
    },
    {
      img: darkmodeImg,
      title: "Kommer snart!",
      subtitle: "Domira dark mode",
      link: null,
      hideArrow: true,
    },
    {
      img: todoImg,
      title: "Frontendutveckling/React",
      subtitle: "TODO-app",
      link: "/project",
    },
    {
      img: webshopImg,
      title: "Frontendutveckling/React",
      subtitle: "Webshop",
      link: "/webshop",
    },
    {
      img: redesignImg,
      title: "UI-design",
      subtitle: "Domira färgredesign",
      link: "/redesign",
    },
    {
      img: darkmodeImg,
      title: "Kommer snart!",
      subtitle: "Domira dark mode",
      link: null,
      hideArrow: true,
    },
  ];

  return (
    <div className="content">
      <main className="home_main">
        <section
          ref={introRef}
          className={`home_intro ${introVisible ? "visible" : ""}`}
        >
          <h2>{heading}</h2>

          <div className="home_intro_wrapper">
            <p className="intro_lead">
              Här har jag samlat ett urval av projekt jag arbetat med, både
              självständigt och tillsammans med andra.
            </p>

            <p className="intro_body">
              Projekten visar hur jag arbetar med UX/UI-design, problemlösning
              och frontendutveckling för att skapa användarvänliga och
              genomtänkta digitala lösningar.
            </p>

            <p className="intro_body">
              Vill du veta mer om mig, mina styrkor och mina erfarenheter kan du
              läsa mer på sidan{" "}
              <Link to="/about" className="inline_link">
                Om mig
              </Link>
              .
            </p>
          </div>

          <div className="home_contact">
            <div className="home_contact_email">
              <h3>Kontakt</h3>
              <p>
                E-post:{" "}
                <a href="mailto:natteremilia@gmail.com">
                  natteremilia@gmail.com
                </a>
              </p>
            </div>

            <div className="contact_links">
              <h3>Hittar mig även här</h3>
              <ul className="social-links">
                <li>
                  <a
                    href="https://github.com/EmNatter"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={githubIcon} alt="GitHub" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/em_natt/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={instagramIcon} alt="Instagram" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={linkedinIcon} alt="LinkedIn" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section
          className={`card_wrapper ${isHovered ? "paused" : ""}`}
          ref={wrapperRef}
        >
          {cards.map((card, index) => (
            <Link
              to={card.link || "#"}
              key={index}
              className="card"
              onClick={(e) => {
                if (!card.link) e.preventDefault();
              }}
            >
              <img src={card.img} alt={card.subtitle} />
              <h3>{card.title}</h3>
              <h2>{card.subtitle}</h2>

              <div>
                {!card.hideArrow && (
                  <img className="arrow-icon" src={arrowIcon} alt="arrow" />
                )}
              </div>
            </Link>
          ))}
        </section>
      </main>
    </div>
  );
};

export default Index;
