import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import githubIcon from "../IMG/icons/github.svg";
import instagramIcon from "../IMG/icons/instagram.svg";
import linkedinIcon from "../IMG/icons/linkedin.svg";
import arrowIcon from "../IMG/icons/arrow.svg";
import skyImg from "../IMG/sky.jpeg";
import coolbeansImg from "../IMG/coolbeans.png";
import todoImg from "../IMG/todo.png";
import webshopImg from "../IMG/Webshop.png";

const Index = () => {
  const wrapperRef = useRef();

  useEffect(() => {
    const wrapper = wrapperRef.current;
    let scrollInterval;

    const startScrolling = () => {
      scrollInterval = setInterval(() => {
        if (wrapper) {
          wrapper.scrollLeft += 1;
        }
      }, 20);
    };

    const stopScrolling = () => clearInterval(scrollInterval);

    startScrolling();

    wrapper.addEventListener("mouseenter", stopScrolling);
    wrapper.addEventListener("mouseleave", startScrolling);

    return () => {
      stopScrolling();
      wrapper.removeEventListener("mouseenter", stopScrolling);
      wrapper.removeEventListener("mouseleave", startScrolling);
    };
  }, []);

  return (
    <div className="content">
      <main className="home_main">
        <section className="home_intro">
          <h2>Välkommen till min portfolio!</h2>

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
                E-post: <a href="mailto:">natteremilia@gmail.com</a>
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

        <section className="card_wrapper" ref={wrapperRef}>
          <article className="card">
            <img src={todoImg} alt="todo" />
            <h3>Frontend/React</h3>
            <h2>Todo-app</h2>

            <Link to="/project">
              <div>
                <img className="arrow-icon" src={arrowIcon} alt="arrow" />
              </div>
            </Link>
          </article>
          <article className="card">
            <img src={webshopImg} alt="webshop" />
            <h3>Frontend/React och UX/UI-design</h3>
            <h2>Webshop</h2>

            <Link to="/webshop">
              <div>
                <img className="arrow-icon" src={arrowIcon} alt="arrow" />
              </div>
            </Link>
          </article>

          <article className="card">
            <img src={skyImg} alt="sky" />
            <h3>Frontend</h3>
            <h2>Musikfestivalen</h2>

            <Link to="/festival">
              <div>
                <img className="arrow-icon" src={arrowIcon} alt="arrow" />
              </div>
            </Link>
          </article>

          <article className="card">
            <img src={coolbeansImg} alt="coolbean" />
            <h3>UI-design</h3>
            <h2>Cool Beans</h2>

            <Link to="/coolbeans">
              <div>
                <img className="arrow-icon" src={arrowIcon} alt="arrow" />
              </div>
            </Link>
          </article>
          <article className="card">
            <img src={todoImg} alt="todo" />
            <h3>Frontendutveckling/React</h3>
            <h2>TODO-app</h2>

            <Link to="/project">
              <div>
                <img className="arrow-icon" src={arrowIcon} alt="arrow" />
              </div>
            </Link>
          </article>

          <article className="card">
            <img src={webshopImg} alt="webshop" />
            <h3>Frontendutveckling/React</h3>
            <h2>Webshop</h2>

            <Link to="/Webshop">
              <div>
                <img className="arrow-icon" src={arrowIcon} alt="arrow" />
              </div>
            </Link>
          </article>

          <article className="card">
            <img src={skyImg} alt="sky" />
            <h3>Frontenutveckling</h3>
            <h2>Musikfestivalen</h2>

            <Link to="/festival">
              <div>
                <img className="arrow-icon" src={arrowIcon} alt="arrow" />
              </div>
            </Link>
          </article>

          <article className="card">
            <img src={coolbeansImg} alt="coolbean" />
            <h3>Frontend/React och UX-design</h3>
            <h2>Cool Beans</h2>

            <Link to="/coolbeans">
              <div>
                <img className="arrow-icon" src={arrowIcon} alt="arrow" />
              </div>
            </Link>
          </article>
        </section>
      </main>
    </div>
  );
};

export default Index;
