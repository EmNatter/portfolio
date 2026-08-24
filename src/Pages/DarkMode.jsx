import { Link } from "react-router-dom";
import DarkModeImg from "../IMG/DarkMode.png";

const DarkMode = () => {
  return (
    <div>
      {" "}
      <main>
        {" "}
        <section className="projectexample_wrapper">
          {" "}
          <div className="projectexample_card">
            {" "}
            <img
              src={DarkModeImg}
              alt="Night mode design for Domira"
              className="darkmode-img"
            />
            <h2>
              <ul className="list-clean">
                <li>
                  <strong>Role: </strong>UX/UI Design
                </li>
                <li>
                  <strong>Project: </strong>Thesis Project · Domira
                </li>
              </ul>
            </h2>
            <h1>Between Light & Dark</h1>
            <h2>Problem & Context</h2>
            <p>
              Domira is a mental wellness app focused on personal development,
              guided sessions, journaling and reflection exercises. The app is
              often used in calm moments, especially in the evening, when users
              want to reflect on emotions and experiences.
            </p>
            <p>
              Dark mode is a common pattern in digital products, but a
              traditional dark interface often relies on strong contrast, black
              surfaces and neutral dark colours. For Domira, this created a
              design challenge. The product has a soft, warm and pastel-based
              visual identity, so the goal was not only to make the interface
              darker, but to create a darker experience that still felt calm,
              supportive and aligned with the brand.
            </p>
            <h2>My Role</h2>
            <p>
              I explored and designed a brand-adapted dark mode concept for
              Domira as my thesis project. The work built on a previous
              technical investigation I conducted during my internship, where I
              explored user demand, UX considerations and technical aspects
              related to dark mode and Contentful.
            </p>
            <p>
              My responsibility was to develop the recommended direction into a
              concrete design concept, including visual exploration, colour
              adaptation, HiFi wireframes, prototypes and support material for
              future implementation. The work was carried out in dialogue with
              the product owner, who provided feedback and made final product
              decisions.
            </p>
            <h2>Process & Approach</h2>
            <p>
              The process followed an iterative UX/UI approach: research and
              guidelines, analysis, concept development and prototype. The next
              steps after the project would be implementation, user testing and
              further iteration.
            </p>
            <p>
              I started by analysing Domira’s existing light mode, key app views
              and colour roles to understand which colours, contrasts and
              interface elements needed to be adapted for a darker context.
              Since Domira already had an established colour library, the focus
              was on reusing and remapping existing colours rather than
              introducing a completely new palette.
            </p>
            <p>
              I also looked at how similar apps approached dark mode. Several
              wellness and meditation apps used more traditional dark interfaces
              with black, dark grey or dark blue backgrounds. These references
              were useful as comparison points, but they did not fully match
              Domira’s softer visual identity. This strengthened the need to
              explore a more brand-aligned evening mode.
            </p>
            <h2>Design Directions</h2>
            <p>
              Based on the analysis, I developed three design directions in
              Figma to explore different levels of darkness, contrast and visual
              change across the interface.
            </p>
            <ul className="list-clean">
              <li>
                <strong>Option A:</strong> consistent redistribution of colour
                roles across the app
              </li>
              <li>
                <strong>Option B:</strong> selective visual emphasis, where some
                views were adapted more than others
              </li>
              <li>
                <strong>Option C:</strong> the darkest and most muted direction,
                with deeper backgrounds throughout the interface
              </li>
            </ul>
            <p>
              After comparing the alternatives with the product owner, Option A
              was chosen as the foundation for the final direction. It offered
              the best balance between visual consistency, brand expression and
              feasibility, since it focused on adapting colour roles rather than
              changing layout or component structure.
            </p>
            <h2>Visual Direction</h2>
            <p>
              The final direction was built around dark purple backgrounds,
              softer contrast and careful reuse of Domira’s existing colours.
              The solution was developed as a Night Mode rather than a
              traditional dark mode, to better describe the intended experience:
              a calmer, evening-adapted interface that supports use in darker
              environments.
            </p>
            <p>
              A key insight was that the level of darkness was not the only
              factor affecting the experience. The colour tone, saturation and
              relationship to Domira’s existing visual identity had a greater
              impact on whether the interface felt right for the product.
            </p>
            <h2>Accessibility & Contrast</h2>
            <p>
              Accessibility was an important part of the process. Colour
              combinations were checked against WCAG contrast requirements, and
              adjustments were made to support readability while still keeping
              the soft visual expression.
            </p>
            <p>
              Some colours that worked well in light mode did not work as well
              in a darker context. In several cases, softer medium colours
              worked better than stronger accent colours. This helped improve
              contrast while preserving the calm and supportive feeling of
              Domira’s visual identity.
            </p>
            <h2>Prototype</h2>
            <p>
              Once the visual direction was defined, I created HiFi wireframes
              and an interactive prototype in Figma. The prototype showed how
              Night Mode could work across central parts of the app, including
              the start page, onboarding, sessions, journal function and profile
              settings.
            </p>
            <p>
              The journal function required extra consideration because it
              appears in different contexts: as a dropdown component inside
              sessions and as a larger popup view from the journal page. The
              design needed to keep a clear hierarchy, enough contrast and a
              consistent feeling across both states.
            </p>
            <h2>Key Design Decisions</h2>
            <p>
              One of the more complex parts of the project was the journal
              function, since it appears in different contexts across the app.
              In sessions, the journal is used as a dropdown component, while on
              the separate journal page it appears as a larger popup view. This
              meant that the design needed to feel consistent across both states
              while still supporting readability, hierarchy and clear
              interaction.
            </p>
            <p>
              In the session view, the darker background was kept to maintain
              the Night Mode experience, while lighter input fields were used
              where longer text needed to be read or written. A subtle stroke
              was added around the journal component to create clearer
              separation from the surrounding session background. This helped
              balance visual consistency with usability and accessibility.
            </p>
            <p>
              The activation of Night Mode was placed in the profile settings
              rather than on the start page, since the start page already
              contained a lot of information. A toggle was used because it is a
              familiar and accessible interaction pattern for turning interface
              modes on and off.
            </p>
            <h2>Result & Impact</h2>
            <ul className="result-list">
              <li>A complete Night Mode concept for Domira</li>
              <li>HiFi wireframes and an interactive Figma prototype</li>
              <li>A softer alternative to traditional dark mode</li>
              <li>Clearer mapping between light mode and Night Mode colours</li>
              <li>Improved consistency across key app views and components</li>
              <li>
                A design direction that balances usability, accessibility and
                brand identity
              </li>
            </ul>
            <p>
              The final result was a cohesive Night Mode concept where Domira’s
              interface could be adapted for evening use without losing its
              soft, warm and personal visual identity.
            </p>
            <h2>Reflection</h2>
            <p>
              This project showed that dark mode is not only about making an
              interface darker. It is also about understanding the product’s
              context, visual identity and user needs. For Domira, the right
              solution was not a high-contrast black interface, but a softer and
              more brand-aligned evening mode.
            </p>
            <p>
              The work also made it clear that colour decisions in UX/UI design
              are not only aesthetic. They affect readability, hierarchy,
              accessibility and the overall feeling of the product. Balancing
              these factors became the most important part of the design
              process.
            </p>
            <h2>Next Steps</h2>
            <p>
              The next step would be to implement the proposed design and then
              conduct a bug hunt and usability testing with real users. This
              would allow the solution to be tested in its actual usage context
              and further developed through iteration. The usability tests could
              also be complemented with A/B testing, for example to compare
              different levels of darkness, colour choices or a possible
              repositioning of the activation toggle.
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

export default DarkMode;
