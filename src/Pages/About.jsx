import meImg from "../IMG/me.jpeg";
import photoshopIcon from "../IMG/icons/photoshop.png";
import bridgeIcon from "../IMG/icons/bridge.png";
import figmaIcon from "../IMG/icons/figma.svg";
import miroIcon from "../IMG/icons/miro.svg";
import githubIcon from "../IMG/icons/github.svg";
import slackIcon from "../IMG/icons/slack.svg";
import vscIcon from "../IMG/icons/vsc.png";
import reactIcon from "../IMG/icons/react.svg";
import javascriptIcon from "../IMG/icons/javascript.svg";
import html5Icon from "../IMG/icons/html5.svg";
import css3Icon from "../IMG/icons/css3.svg";
import chefHatIcon from "../IMG/icons/chef-hat.png";
import filmIcon from "../IMG/icons/film.png";
import paletteIcon from "../IMG/icons/palette.png";
import treesIcon from "../IMG/icons/trees.png";

const About = () => {
  return (
    <div>
      <main id="about_main">
<section className="about">
  <div className="about_wrapper">
    <img src={meImg} alt="me" />
    <h2>"Hi, I’m Emilia Nätter"</h2>

    <div className="about_text">
      <p className="about_lead">
        I work with UX/UI design and frontend development, with a focus on
        creating user-friendly and visually refined digital solutions.
      </p>

      <p className="about_body">
        My approach combines structure and a user-centered perspective with a
        strong sense of colour, form and detail. This gives me the ability to
        balance functionality with a clear visual expression.
      </p>

      <p className="about_body">
        Solving problems, improving user experiences and creating clear results
        are what drive me in my work. I enjoy projects where function and
        aesthetics meet, and where design can make a real difference for the
        user.
      </p>
    </div>

    <div className="about_competence_buttons">
      <div className="about_competence_buttons_wrapper">
        <article>
          <h3>Design Tools</h3>

          <div>
            <div>
              <img src={photoshopIcon} alt="Photoshop" />
              <h4>Photoshop</h4>
            </div>

            <div>
              <img src={bridgeIcon} alt="Bridge" />
              <h4>Bridge</h4>
            </div>

            <div>
              <img src={figmaIcon} alt="Figma" />
              <h4>Figma</h4>
            </div>

            <div>
              <img src={miroIcon} alt="Miro" />
              <h4>Miro</h4>
            </div>
          </div>
        </article>

        <article>
          <h3>Tools & Collaboration</h3>

          <div>
            <div>
              <img src={githubIcon} alt="GitHub" />
              <h4>GitHub</h4>
            </div>

            <div>
              <img src={slackIcon} alt="Slack" />
              <h4>Slack</h4>
            </div>

            <div>
              <img src={vscIcon} alt="Visual Studio Code" />
              <h4>VS Code</h4>
            </div>
          </div>
        </article>

        <article>
          <h3>Web Development</h3>

          <div>
            <div>
              <img src={reactIcon} alt="React" />
              <h4>React</h4>
            </div>

            <div>
              <img src={javascriptIcon} alt="JavaScript" />
              <h4>JavaScript</h4>
            </div>

            <div>
              <img src={html5Icon} alt="HTML5" />
              <h4>HTML5</h4>
            </div>

            <div>
              <img src={css3Icon} alt="CSS3" />
              <h4>CSS3</h4>
            </div>
          </div>
        </article>
      </div>
    </div>
  </div>
</section>

<section className="cv">
  <div className="cv_wrapper">
    <div className="cv_text">
      <h2>Experience</h2>

      <article>
        <h3>UX Designer | Domira, Digies - Stockholm</h3>
        <p>
          <strong>NOV 2025 - MAY 2026</strong>
        </p>
        <ul>
          <li>
            Planned and conducted two rounds of RITE (Rapid Iterative Testing &
            Evaluation), consisting of usability testing followed by continuous
            design and UX iteration to reduce friction identified during testing.
            By the end of the project, no friction was reported in the studied
            areas, exceeding the client’s expectations and being seen as a
            successful outcome.
          </li>

          <li>
            Conducted technical investigations, including for Dark Mode, where I
            was responsible for creating a new colour-adapted version of the app
            for dark mode while maintaining the product’s visual identity.
          </li>

          <li>Usability testing</li>

          <li>
            Owned a redesign of Domira’s colours at the request of the product
            owner, developing a new palette within the existing design.
          </li>

          <li>
            Conducted competitor analysis, research proposals and research
            reports with communication adapted for larger organizations.
          </li>
        </ul>
      </article>

      <article>
        <h3>Freelance Retoucher | Stockholm</h3>
        <p>
          <strong>2022 - 2025</strong>
        </p>
        <ul>
          <li>
            Retouched and adapted images for web and e-commerce, including work
            for clothing brands such as Gina Tricot.
          </li>

          <li>
            Worked with skin retouching, colour correction and removing dust,
            wrinkles and other visual distractions to create clear visual
            hierarchy and highlight key product details.
          </li>

          <li>
            Adjusted clothing and accessories when needed to create a more
            visually appealing and consistent visual expression across image
            sets.
          </li>

          <li>
            Performed natural skin retouching where permanent features such as
            moles were preserved, while temporary or distracting elements were
            softened or removed.
          </li>

          <li>
            Extended and adjusted backgrounds to create visually consistent image
            series adapted for digital publishing.
          </li>

          <li>
            Worked primarily in Adobe Photoshop and Adobe Bridge.
          </li>
        </ul>
      </article>

      <article>
        <h3>Fitting Model | Filippa K - Stockholm</h3>
        <p>
          <strong>2023 - 2024</strong>
        </p>
        <p>
          Tested garments that designers, pattern makers and buyers evaluated
          and discussed in order to determine changes needed to create more
          user-friendly and visually appealing products.
        </p>
      </article>

      <article>
        <h3>
          Sales Advisor, Retail Sales Associate & Makeup Artist | Rituals, The
          Body Shop, KICKS, Esprit & Danderyds Konditori – Stockholm
        </h3>
        <p>
          <strong>2011 – 2022</strong>
        </p>
        <ul>
          <li>
            Provided personalized advice and service based on customer needs,
            which developed my understanding of user behaviour and customer
            journeys. I also built product knowledge to match the right solution
            to each customer.
          </li>

          <li>
            Worked with visual merchandising and product presentation according
            to brand guidelines, giving me insight into the importance of clear
            visual communication and design understanding.
          </li>

          <li>
            Drove additional sales and customer engagement, strengthening my
            ability to build relationships and understand customer motivation.
          </li>

          <li>
            Handled daily store operations and problem-solving in a
            customer-focused environment.
          </li>
        </ul>
      </article>

      <h2>Education</h2>

      <article>
        <h3>
          UX/UI Design with Frontend Competence, 420 YH credits | Chas Academy -
          Stockholm, Diploma
        </h3>
        <p>
          <strong>Sep 2024 - May 2026</strong>
        </p>
        <ul>
          <li>
            UX process: research, wireframing, prototyping and usability testing
          </li>
          <li>UI design and interaction design in Figma</li>
          <li>Frontend: HTML, CSS, JavaScript, React</li>
        </ul>
      </article>

      <article>
        <h3>
          Digital Imaging Specialist, Higher Vocational Education, 2.5 years |
          Fotoskolan STHLM - Stockholm, Diploma
        </h3>
        <p>
          <strong>Aug 2019 - Dec 2021</strong>
        </p>
        <ul>
          <li>Focus on post-production of still images and moving media</li>
          <li>Image editing and visual communication</li>
          <li>
            Creating aesthetically appealing and user-friendly digital
            experiences
          </li>
        </ul>
      </article>

      <article>
        <h3>Media Programme | Täby Enskilda Gymnasium - Täby</h3>
        <p>
          <strong>Graduated 2011</strong>
        </p>
        <p>
          With specialization in photography, including Psychology B, Photography
          B and Photography C as elective courses.
        </p>
      </article>

      <h2>Certificates</h2>

      <article>
        <h3>
          Digital Accessibility & Inclusive Design, Certificate – Stockholm
        </h3>
        <p>
          <strong>Nov 2025</strong>
        </p>
        <p>Issued by Chas Academy AB</p>
      </article>

      <article>
        <h3>
          Digital Imaging Specialist | Advanced Higher Vocational Education
          Diploma – Stockholm
        </h3>
        <p>
          <strong>Issued 2021</strong>
        </p>
        <p>Issued by Fotoskolan STHLM</p>
      </article>

      <h2>Courses & Internships</h2>

      <article>
        <h3>Web Technology 1 | Linnaeus University</h3>
        <p>
          <strong>Jan 2024 - Apr 2024</strong>
        </p>
        <p>
          Introductory course in web development: HTML & CSS, information
          architecture and user-centered design.
        </p>
      </article>

      <article>
        <h3>Internship at Parsley Studio - Stockholm</h3>
        <p>
          <strong>2021</strong>
        </p>
        <p>
          With Matilda Persson during my studies in digital imaging.
        </p>
      </article>

      <article>
        <h3>Internship at Hemmet Studio - Stockholm</h3>
        <p>
          <strong>2020</strong>
        </p>
        <p>
          With photographer Morgan Norman during my studies in digital imaging.
        </p>
      </article>
    </div>
  </div>
</section>

<section className="fun_facts">
  <h2>A Few Facts About Me</h2>

  <div className="fact_wrapper">
    <article>
      <img src={chefHatIcon} alt="Chef hat" />
      <h3>Amateur Cook</h3>
      <p>
        In my free time, I spend a lot of time with family and friends by cooking
        together or going out to eat. Talking about food genuinely makes me
        happy, and I enjoy experimenting with flavours and presentation just as
        much as simply enjoying good food in good company.
      </p>
    </article>

    <article>
      <img src={filmIcon} alt="Film" />
      <h3>Film Enthusiast</h3>
      <p>
        I like to relax with a really good film or look forward to the next
        episode of a series I follow. The pace, feeling and visual expression of
        stories inspire me in what I do.
      </p>
    </article>

    <article>
      <img src={paletteIcon} alt="Palette" />
      <h3>Aesthetic at Heart</h3>
      <p className="estet">
        I have an extra passion for everything related to colour and form. My
        visual journey started with makeup artistry and has grown into an
        interest in image editing, from retouching to digital expression. I also
        enjoy interior design, from choosing furniture to painting, all with the
        aim of creating the right feeling and balance.
      </p>
    </article>

    <article>
      <img src={treesIcon} alt="Trees" />
      <h3>Hobby Photographer</h3>
      <p>
        I prefer photographing landscapes and some urban environments, especially
        in summer when the light changes the most. With a camera in hand, I get
        to explore colour, form and composition. The visual expression matters
        more to me than the technical side of the image.
      </p>
    </article>
  </div>
</section>
      </main>
    </div>
  );
};

export default About;
