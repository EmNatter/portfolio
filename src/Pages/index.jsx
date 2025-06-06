import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import githubIcon from "../IMG/icons/github.svg";
import instagramIcon from "../IMG/icons/instagram.svg";
import linkedinIcon from "../IMG/icons/linkedin.svg";
import arrowIcon from "../IMG/icons/arrow.svg";
import skyImg from "../IMG/sky.jpeg";
import coolbeansImg from "../IMG/coolbeans.png";
import todoImg from "../IMG/Todo.png";
import webshopImg from "../IMG/Webshop.png";

const Index = ({ heading = "Välkommen till min portfolio!" }) => {
  const wrapperRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

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
      img: skyImg,
      title: "Frontend",
      subtitle: "Musikfestivalen",
      link: "/festival",
    },
    {
      img: coolbeansImg,
      title: "UI-design",
      subtitle: "Cool Beans",
      link: "/coolbeans",
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
      link: "/Webshop",
    },
    {
      img: skyImg,
      title: "Frontenutveckling",
      subtitle: "Musikfestivalen",
      link: "/festival",
    },
    {
      img: coolbeansImg,
      title: "Frontend/React och UX-design",
      subtitle: "Cool Beans",
      link: "/coolbeans",
    },
  ];

  return (
    <div className="content">
      <main className="home_main">
        <section className="home_intro">
          <h2>{heading}</h2>

          <div className="home_intro_wrapper">
            <p>
              Här är min Portfolio där jag har gjort ett urval av projekt jag
              arbetat själv med eller arbetat i team för att få fram.
            </p>
            <p>
              Under navigeringslänken <strong>Om mig</strong> hittar du mer
              information om mig som person, styrkor och egenskaper. Du kan även
              läsa om mina kunskaper och erfarenheter jag skaffat mig.
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
                    className="social-link"
                  >
                    <div className="icon">
                      <img src={githubIcon} alt="GitHub" />
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/em_natt/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                  >
                    <div className="icon">
                      <img src={instagramIcon} alt="Instagram" />
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                  >
                    <div className="icon">
                      <img src={linkedinIcon} alt="LinkedIn" />
                    </div>
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
            <article className="card" key={index}>
              <img src={card.img} alt={card.subtitle} />
              <h3>{card.title}</h3>
              <h2>{card.subtitle}</h2>

              <Link to={card.link}>
                <div>
                  <img className="arrow-icon" src={arrowIcon} alt="arrow" />
                </div>
              </Link>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
};

export default Index;
