import { Link } from "react-router-dom";
import todoImg from "../IMG/Todo.png";

const Project = () => {
  return (
    <div>
      <main>
        <section className="projectexample_wrapper">
          <div className="projectexample_card">
            <a
              href="https://todolist-portfolio.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={todoImg} alt="todo" className="webshop-img" />
            </a>

            <h3>
              <strong>Role: </strong>Frontend with UX/UI Design
            </h3>

            <h1>ToDo App in React/Vite</h1>

            <p>
              <a
                href="https://todolist-portfolio.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                Visit the project here
                <span className="arrow">→</span>
              </a>
            </p>

            <p>
              As part of a React course module, I developed a todo application
              that challenged me in both frontend coding and interface design.
              The project focused on creating a multi-page app with clear
              functionality and a simple, visually polished design.
            </p>

            <ul className="list-clean">
              <li className="text-span">
                <span>Todo page:</span> The user can add, view and check off
                tasks.
              </li>

              <li className="text-span">
                <span>About page:</span> Short information about the purpose and
                functionality of the app.
              </li>
            </ul>

            <p>
              I used react-router-dom for navigation, and the entire app is
              built with functional components in modern React syntax. Each part
              of the web app is divided into separate files to create a clear
              structure.
            </p>

            <h3>Design and Layout</h3>

            <p>
              I focused on a simple and consistent design with clear typography
              and colour choices. The layout was built with Flexbox to make the
              web app easier to adapt responsively.
            </p>

            <h3>Saving in the Browser</h3>

            <p>
              Todos are stored in LocalStorage so they remain after page refresh
              or when the user returns.
            </p>

            <h3>Visual Feedback</h3>

            <p>
              When all tasks are completed, a message or animation is displayed.
            </p>

            <h3>Code Quality</h3>

            <p>The code is well structured and formatted with Prettier.</p>

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

export default Project;