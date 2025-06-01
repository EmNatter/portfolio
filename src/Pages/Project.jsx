import { Link } from "react-router-dom";

const Project = () => {
  return (
    <div>
      <main>
        <section className="projectexample_wrapper">
          <div class="projectexample_card">
            <a
              href="https://todolist-portfolio.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="src/IMG/todo_list.png"
                alt="webshop"
                className="webshop-img"
              />
            </a>
            <h3>
              <span>Roll:</span> Frontend med UX/UI-design
            </h3>
            <h1>ToDo-app i React/Vite</h1>
            <p>
              <a
                href="https://todolist-portfolio.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                class="project-link"
              >
                Besök projektet här
                <span class="arrow">→</span>
              </a>
            </p>

            <p>
              I ett kursmoment inom React utvecklade jag en todo-applikation som
              testade mig i både frontend-kodning och gränssnittsdesign.
              Projektet gick ut på att skapa en flersidig app med tydliga
              funktioner och en enkel, snygg design.
            </p>
            <ul>
              <li>
                <span>Todo-sida:</span> Användaren kan lägga till, visa och
                bocka av uppgifter.
              </li>
              <li>
                <span>Om-sida:</span> Kort information om appens syfte och
                funktion.
              </li>
            </ul>

            <p>
              Jag har använt mig av react-router-dom för navigationen, och hela
              appen är uppbyggd med funktionella komponenter i modern
              React-syntax. Varje del av Webbappen är uppdelad i egna filer för
              tydlig struktur.
            </p>
            <h4>Design och layout</h4>

            <p>
              Jag fokuserade på en enkel och enhetlig design med tydlig
              typografi och färgval. Layouten byggdes med Flexbox för att
              enkalare göra webbappen responsiv.
            </p>
            <h4>Spara i webbläsaren</h4>
            <p>
              Todos lagras i LocalStorage så att de finns kvar vid
              siduppdatering eller återbesök.
            </p>

            <h4>Visuell bekräftelse</h4>
            <p>
              När alla uppgifter är klara visas ett meddelande eller en
              animation.
            </p>

            <h4>Kodkvalitet</h4>
            <p>Koden är välstrukturerad och formaterad med Prettier. </p>

            <div className="button_center">
              <Link to="/">
                <button>Tillbaka</button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Project;
