import { Link } from "react-router-dom";
import webshopImg from "../IMG/Webshop.png";

const Webshop = () => {
  return (
    <div>
      <main>
        <section className="projectexample_wrapper">
          <div className="projectexample_card">
            <a
              href="https://group5webshop.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={webshopImg} alt="webshop" className="webshop-img" />
            </a>

            <h2>
              <ul className="list-clean">
                <li>
                  <strong>Time frame:</strong> 10 weeks
                </li>
                <li>
                  <strong>Role:</strong> Frontend with UX/UI Design
                </li>
              </ul>
            </h2>

            <h1>E-commerce App in Vite</h1>

            <p>
              <a
                href="https://group5webshop.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                Visit the project here
                <span className="arrow">→</span>
              </a>
            </p>

            <p>
              In this assignment, our team created an e-commerce application
              that combines frontend development in React/Vite with clear UX/UI
              design. The project challenged us to build a complete shopping
              experience, from product display to order confirmation.
            </p>

            <ul className="list-clean">
              <li className="text-span">
                <span>Product list:</span> The user can view a list of products
                fetched from an external API.
              </li>

              <li className="text-span">
                <span>Product page:</span> The user can click on a product to
                view detailed information.
              </li>

              <li className="text-span">
                <span>Shopping cart:</span> The user can add products and
                complete a purchase without payment implementation.
              </li>

              <li className="text-span">
                <span>Order confirmation:</span> After purchase, a simple order
                confirmation is displayed.
              </li>
            </ul>

            <p>
              We used react-router-dom to create clear and user-friendly
              navigation. The application consists of functional components
              written with arrow functions and export default. All code is
              divided into separate files to create a logical structure.
            </p>

            <h2>Design and Layout</h2>

            <p>
              The application was designed in Figma, where we created wireframes
              and mockups. The focus was on building a consistent and responsive
              layout that works on both mobile and desktop.
            </p>

            <h2>Collaboration and Version Control</h2>

            <p>
              The project was version controlled with Git and is available on
              GitHub. Since we worked as a group, we learned how to manage the
              codebase together and work smoothly, even when we were not always
              in the same place. In addition to my part in writing code, I took
              an active and driving role in project coordination and helped keep
              a clear structure in the files and in our workflow.
            </p>

            <h2>Code Quality</h2>

            <p>
              The code is formatted with Prettier to ensure consistent and
              readable code.
            </p>

            <div className="button_center">
              <Link to="/">
                <button>Back Home</button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Webshop;