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

const Index = ({ heading = "Welcome to my portfolio!" }) => {
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
    img: redesignImg,
    title: "Domira 2.0 - UI/UX Design",
    subtitle: "Balancing Program Themes",
    link: "/redesign",
  },
  {
    img: darkmodeImg,
    title: "Domira 2.0 - UI/UX Design",
    subtitle: "Between Light & Dark",
    link: "/darkmode",
  },
  {
    img: todoImg,
    title: "Frontend / React",
    subtitle: "Todo App",
    link: "/project",
  },
  {
    img: webshopImg,
    title: "Frontend / React and UX/UI Design",
    subtitle: "Webshop",
    link: "/webshop",
  },
  {
    img: redesignImg,
    title: "Domira 2.0 - UI/UX Design",
    subtitle: "Balancing Program Themes",
    link: "/redesign",
  },
  {
    img: darkmodeImg,
    title: "Domira 2.0 - UI/UX Design",
    subtitle: "Between Light & Dark",
    link: "/darkmode",
  },
  {
    img: todoImg,
    title: "Frontend Development / React",
    subtitle: "Todo App",
    link: "/project",
  },
  {
    img: webshopImg,
    title: "Frontend Development / React",
    subtitle: "Webshop",
    link: "/webshop",
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
    Here, I have gathered a selection of projects I have worked on, both
    independently and together with others.
  </p>

  <p className="intro_body">
    The projects show how I work with UX/UI design, problem-solving and frontend
    development to create user-friendly and thoughtful digital solutions.
  </p>

  <p className="intro_body">
    If you want to learn more about me, my strengths and my experience, you can
    read more on the{" "}
    <Link to="/about" className="inline_link">
      About Me
    </Link>{" "}
    page.
  </p>
</div>

<div className="home_contact">
  <div className="home_contact_email">
    <h3>Contact</h3>
    <p>
      Email:{" "}
      <a href="mailto:natteremilia@gmail.com">
        natteremilia@gmail.com
      </a>
    </p>
  </div>

  <div className="contact_links">
    <h3>You can also find me here</h3>
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
