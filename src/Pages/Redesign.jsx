import { Link } from "react-router-dom";
import RedesignImg from "../IMG/Redesign.png";

const Redesign = () => {
  return (
    <div>
      <main>
        <section className="projectexample_wrapper">
          <div className="projectexample_card">
            <img src={RedesignImg} alt="redesign" className="redesign-img" />

            <h2>
              <ul className="list-clean">
                <li>
                  <strong>Role: </strong>UI Design
                </li>
                <li>
                  <strong>Project: </strong>Domira 2.0
                </li>
              </ul>
            </h2>

            <h1>Balancing Program Themes</h1>

            <h2>Problem & Context</h2>

            <p>
              Domira 2.0 is a mental wellness app with guided programs and
              reflection exercises. In the previous version, several theme
              colours were shown at the same time in views such as Guide Me,
              which created a visual expression that did not fully support the
              product’s calm and reassuring tone. At the same time, the
              structure was expanded from four to six programs, increasing the
              need for a colour system that could both differentiate content and
              create a clear visual whole.
            </p>

            <h2>My Role</h2>

            <p>
              I drove the design work around the colour system and was
              responsible for creating and iterating colour scales within the
              existing structure: pale, medium and accent. The work was carried
              out in close collaboration with the product owner, where we
              iterated on solutions together. I created and visualised design
              directions that informed decisions, while the product owner made
              the final decisions.
            </p>

            <h2>Process & Approach</h2>

            <p>
              The colour scales were developed iteratively in Figma by adjusting
              saturation, lightness and contrast, with focus on how they worked
              in the UI and as part of the system as a whole. The Guide Me flow
              was used as a test area to evaluate how several programs worked
              together and to ensure clear visual hierarchy in complex views.
            </p>

            <p>
              A central challenge was balancing clear visual differentiation with
              a calm and cohesive tone, without making the colours feel too
              sharp or too muted. Decisions were based on how well the colours
              worked together in views with several programs, and how clearly
              they could be distinguished without breaking the product’s visual
              identity.
            </p>

            <h2>Testing in Product</h2>

            <p>
              The colours were tested directly in the actual app environment,
              where the product owner implemented them through Contentful. This
              enabled quick evaluation in real views and continuous iteration.
              Since the app had low traffic at the time, we were able to work
              iteratively and adjust the design based on actual use in the
              product. This ensured that the design decisions worked not only in
              the design tool, but also in a real product environment.
            </p>

            <h2>Design System</h2>

            <ul className="list-clean">
              <li><strong>Pale:</strong> backgrounds and larger surfaces</li>
              <li><strong>Medium:</strong> main colour</li>
              <li><strong>Accent:</strong> interactions and highlights</li>
            </ul>

            <h2>Result & Impact</h2>

            <ul className="result-list">
              <li>Clearer visual hierarchy between programs</li>
              <li>Improved visual differentiation in complex views</li>
              <li>A more cohesive and balanced colour palette</li>
              <li>
                Reduced visual load, making it easier to navigate and choose a
                program
              </li>
              <li>More consistent visual structure across the app</li>
            </ul>

            <p>
              The result was a more cohesive system where programs can be clearly
              distinguished while still feeling like part of the same product.
            </p>

            <h2>Reflection</h2>

            <p>
              Small adjustments in saturation, lightness and contrast had a
              greater impact on usability than the colour choices themselves,
              which were primarily guided by the product’s visual identity.
            </p>

            <p>
              The project showed how small changes in colour can have a large
              impact on both clarity and feeling in a product. The colour system
              now works as a stable foundation that can continue to evolve as the
              product grows.
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

export default Redesign;