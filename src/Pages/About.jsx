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
            <h2>"Hej, jag är Emilia Nätter"</h2>
            <p>
              Just nu studerar jag UX/UI-design med frontendutveckling, och
              breddar mina kunskaper inom användarcentrerad design och
              webbutveckling. Jag ser fram emot att applicera och utveckla mina
              nya färdigheter under min kommande praktik hösten 2025 och söker
              en praktikplats där jag kan bidra med mina tekniska färdigheter
              samtidigt som jag får värdefull praktisk erfarenhet.
              <br />
              Jag är målmedveten, driven och strukturerad person med en estetisk
              känsla för färg och form. Jag har arbetat inom retail som Sales
              Advisor i över 7år och har sedan 2021 en examen som Digital
              Imaging Specialist. Har därefter frilansat ett tag som retuschör
              där jag främst retuscherat reklambilder inom mode.
            </p>

            <div className="about_competence_buttons">
              <div className="about_competence_buttons_wrapper">
                <article>
                  <h3>Designverktyg</h3>
                  <img src={photoshopIcon} alt="Photoshop" />
                  <img src={bridgeIcon} alt="Bridge" />
                  <img src={figmaIcon} alt="Figma" />
                  <img src={miroIcon} alt="Miro" />
                </article>

                <article>
                  <h3>Verktyg och samarbete</h3>
                  <img src={githubIcon} alt="GitHub" />
                  <img src={slackIcon} alt="Slack" />
                  <img src={vscIcon} alt="Visual Studio Code" />
                </article>

                <article>
                  <h3>Webbutveckling</h3>
                  <img src={reactIcon} alt="React" />
                  <img src={javascriptIcon} alt="JavaScript" />
                  <img src={html5Icon} alt="HTML5" />
                  <img src={css3Icon} alt="CSS3" />
                </article>
              </div>
            </div>
          </div>
        </section>

        <section className="cv">
          <div className="cv_wrapper">
            <div className="cv_text">
              <h2>Utbildningar</h2>

              <article>
                <h3>Chas Academy, Stockholm - Examen</h3>
                <p>
                  Yrkeshögskoleexamen, UX/UI-design med Frontend kompetens (420
                  yhp)
                </p>
                <p>
                  <strong>Sept 2024 - Maj 2026</strong>
                </p>
              </article>

              <article>
                <h3>Fotoskolan STHLM, - Examen</h3>
                <p>
                  Yrkeshögskoleutbildning (2,5 år) som Bildbehandlare/Digital
                  Imaging Specialist
                </p>
                <ul>
                  <li>
                    Fokus på postproduktion av stillbilder och rörligt material
                  </li>
                  <li>Bildredigering och visuell kommunikation</li>
                  <li>
                    Skapa estetiskt tilltalande och användarvänliga digitala
                    upplevelser
                  </li>
                </ul>
                <p>
                  <strong>Aug 2019 - Dec 2021</strong>
                </p>
              </article>

              <article>
                <h3>Täby Enskilda Gymnasium</h3>
                <p>
                  Medieprogrammet med inriktning Foto. Med psykologi B, foto B
                  och C som tillval av kurser.
                </p>
                <p>
                  <strong>Examensår 2011</strong>
                </p>
              </article>

              <h2>Kurser, certifikat och praktiker</h2>

              <article>
                <h3>Linneuniversitetet</h3>
                <p>Kurs, Webbteknik 1</p>
                <p>
                  <strong>Jan 2024 - Apr 2024</strong>
                </p>
              </article>

              <article>
                <h3>
                  Advanced Higher Vocational Education Diploma - Stockholm
                </h3>
                <p>Digital Imaging Specialist på Fotoskolan STHLM</p>
                <p>
                  <strong>Utfärdad 2021</strong>
                </p>
              </article>

              <article>
                <h3>LIA (Praktik) på Parsley studio, - Stockholm</h3>
                <p>
                  Hos Matilda Persson under utbildningen till bildbehandlare
                </p>
                <p>
                  <strong>2021</strong>
                </p>
              </article>

              <article>
                <h3>LIA (Praktik) på Hemmet studio, Stockholm</h3>
                <p>
                  Hos Fotograf Morgan Norman under utbildningen till
                  bildbehandlare
                </p>
                <p>
                  <strong>2020</strong>
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="fun_facts">
          <h2>Lite fakta om mig</h2>

          <div className="fact_wrapper">
            <article>
              <img src={chefHatIcon} alt="Chef hat" />
              <h3>Amatörkock</h3>
              <p>
                På fritiden älskar jag att umgås med familj och vänner genom att
                laga mat tillsammans eller gå ut och äta. Att prata mat gör mig
                genuint glad, och jag tycker det är lika roligt att
                experimentera med smaker och upplägg som att bara njuta av god
                mat i trevligt sällskap.
              </p>
            </article>

            <article>
              <img src={filmIcon} alt="Film" />
              <h3>Filmnörd</h3>
              <p>
                Jag älskar att koppla av med en riktigt bra film eller längta
                efter nästa avsnitt i en serie jag följer. Berättelsernas tempo,
                känsla och visuella uttryck inspirerar mig i det jag gör.
              </p>
            </article>

            <article>
              <img src={paletteIcon} alt="Palette" />
              <h3>Estet</h3>
              <p className="estet">
                Jag är lite extra passionerad för allt som har med färg och form
                att göra. Min visuella resa började med makeupartistutbildning
                och har vuxit till ett intresse för bildbehandling – från
                retusch till digitala uttryck. Jag gillar också att inreda, från
                möbelval till målning, allt för att skapa rätt känsla och
                balans.
              </p>
            </article>

            <article>
              <img src={treesIcon} alt="Trees" />
              <h3>Hobbyfotograf</h3>
              <p>
                Jag fotograferar helst landskap och endel stadsmiljöer, särskilt
                på sommaren när ljuset förändras som mest. Med kameran i handen
                får jag utforska färg, form och bildkomposition – det visuella
                uttrycket är viktigare för mig än tekniken bakom bilden.
              </p>
            </article>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;
