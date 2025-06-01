import { Link } from "react-router-dom";

const Webshop = () => {
  return (
    <div>
      <main>
        <section className="projectexample_wrapper">
          <div class="projectexample_card">
            <a
              href="https://group5webshop.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="src/IMG/Webshop.png"
                alt="webshop"
                className="webshop-img"
              />
            </a>
            <h3>
              <ul>
                <li>
                  <span>Tid för genomförande:</span> 10 veckor
                </li>
                <li>
                  <span>Roll:</span> Frontend med UX/UI-design
                </li>
              </ul>
            </h3>

            <h1>E-handelsapp i Vite</h1>
            <p>
              <a
                href="https://group5webshop.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                class="project-link"
              >
                Besök projektet här
                <span class="arrow">→</span>
              </a>
            </p>
            <p>
              I denna uppgift skapade vi i teamet en e-handelsapplikation som
              kombinerar frontendutveckling i React/Vite med tydlig
              UX/UI-design. Projektet utmanade oss att bygga en komplett
              shoppingupplevelse, från produktvisning till orderbekräftelse.
            </p>
            <ul>
              <li>
                <span>Produktlista:</span> Användaren kan se en lista med
                produkter, som hämtas från ett externt API.
              </li>
              <li>
                <span>Produktsida:</span> Klicka på en produkt för att se
                detaljerad information.
              </li>
              <li>
                <span>Kundvagn:</span> Möjlighet att lägga till produkter och
                genomföra ett köp (utan betalningsimplementation).
              </li>
              <li>
                <span>Orderbekräftelse:</span> Efter köp visas en enkel
                orderbekräftelse.
              </li>
            </ul>
            <p>
              Vi använde react-router-dom för att skapa en tydlig och
              användarvänlig navigering. Applikationen består av funktionella
              komponenter skrivna med arrow-functions och export default. All
              kod är uppdelad i separata filer för en logisk struktur.
            </p>
            <h4>Design och layout</h4>
            <p>
              Applikationen är designad i Figma där vi skapade wireframes och
              mockups. Fokus låg på att bygga en enhetlig och responsiv layout
              som fungerar på både mobil och desktop.
            </p>
            <h4>Samarbete och versionshantering</h4>
            <p>
              Projektet versionshanterades med Git och finns på GitHub. Eftersom
              vi jobbade i grupp lärde vi oss att hantera kodbasen tillsammans
              och att arbeta smidigt, trots att vi inte alltid befann oss på
              samma plats. Utöver min del av skrivande av kod tog en aktiv och
              drivande roll i projektledandet och hjälpte till att hålla en
              tydlig struktur i filerna och i vårt arbetsflöde.
            </p>
            <h4>Kodkvalitet</h4>
            <p>
              Koden är formaterad med Prettier för att säkerställa konsekvent
              och läsbar kod.
            </p>
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

export default Webshop;
