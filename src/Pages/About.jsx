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

            <div className="about_text">
              <p className="about_lead">
                Jag arbetar med UX/UI-design och frontendutveckling med fokus på
                att skapa användarvänliga och visuellt genomarbetade digitala
                lösningar.
              </p>

              <p className="about_body">
                Mitt arbetssätt kombinerar struktur och ett användarcentrerat
                perspektiv med känsla för färg, form och detaljer. Det ger mig
                en styrka i att balansera funktion med ett tydligt visuellt
                uttryck.
              </p>

              <p className="about_body">
                Att lösa problem, förbättra användarupplevelser och skapa
                tydliga resultat är det som driver mig i mitt arbete. Jag trivs
                bäst i projekt där funktion och estetik möts och där design kan
                göra verklig skillnad för användaren.
              </p>
            </div>
            <div className="about_competence_buttons">
              <div className="about_competence_buttons_wrapper">
                <article>
                  <h3>Designverktyg</h3>

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
                  <h3>Verktyg och samarbete</h3>

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
                  <h3>Webbutveckling</h3>

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
              <h2>Erfarenhet</h2>

              <article>
                <h3>UX-designer | Domira, Digies - Stockholm</h3>
                <p>
                  <strong>NOV 2025 - NUVARANDE</strong>
                </p>
                <ul>
                  <li>
                    Genomförde och drev två rundor av RITE (Rapid Iterative
                    Testing & Evaluation) bestående av användningstester, följt
                    av löpande iteration i design och UX för att eliminera
                    friktion som rapporterades i testerna. I slutet av projektet
                    rapporterades ingen friktion inom de studerade områdena,
                    vilket överträffade beställarens förväntningar och sågs som
                    en framgång.
                  </li>
                  <li>
                    {" "}
                    Utförde tekniska utredningar, bl.a. för Dark Mode där där
                    jag ansvarade för uppgiften att ta fram en ny färganpassad
                    version av appen för mörkt läge, med bibehållen
                    produktidentiteten.
                  </li>
                  <li>Usability testing</li>
                  <li>
                    Ägde en redesign av Domiras färger på uppdrag av
                    produktägaren, där en helt ny palett inom designen togs
                    fram.
                  </li>
                  <li>
                    Utförde konkurrensanalys, research proposals och research
                    reports med kommunikation anpassad för stora företag.
                  </li>
                </ul>
              </article>
              <article>
                <h3>Frilansande Retuschör | - Stockholm</h3>
                <p>
                  <strong>2022 - 2025</strong>
                </p>
                <ul>
                  <li>
                    Retuscherade och anpassade bilder för webb och e-handel,
                    bland annat för klädföretag som Gina Tricot.
                  </li>
                  <li>
                    Arbetade med hudretusch, färgjustering samt att städa upp
                    bilder från damm, veck och andra störande detaljer för att
                    skapa tydlig visuell hierarki och framhäva produktens
                    viktiga detaljer.
                  </li>
                  <li>
                    Justerade kläder och accessoarer vid behov för ett mer
                    visuellt tilltalande och konsekvent uttryck i
                    bildmaterialet.
                  </li>
                  <li>
                    Arbetade med naturlig hudretusch där permanenta drag, t.ex.
                    leverfläckar, behölls medan tillfälliga eller störande
                    element dämpades eller togs bort.
                  </li>
                  <li>
                    Anpassade och byggde ut bakgrunder för att skapa visuellt
                    sammanhängande bildserier anpassade för digital publicering.
                  </li>
                  <li>
                    Använde verktyg så som Adobe Photoshop och Adobe Bridge.
                  </li>
                </ul>
              </article>
              <article>
                <h3> Fitting model | Filippa K - Stockholm</h3>
                <p>
                  <strong>2023 - 2024</strong>
                </p>
                <p>
                  Testade kläder som designers, mönsterskapare och köpare
                  utvärderade och diskuterade förändringar som behöver göras för
                  att skapa mer användarvänliga och visuellt tilltalande
                  produkter.
                </p>
              </article>
              <article>
                <h3>
                  Sales advisor, Butikssäljare & Makeup-artist | Rituals, The
                  Body Shop, KICKS, Esprit & Danderyds Konditori – Stockholm
                </h3>
                <p>
                  <strong>2011 – 2022</strong>
                </p>
                <ul>
                  <li>
                    Gav personlig rådgivning och service baserat på kundbehov,
                    vilket utvecklade min förståelse för användarbeteenden och
                    kundresor. Byggde även produktkunskap för att kunna matcha
                    rätt lösning till varje kund.
                  </li>
                  <li>
                    Arbetade med visual merchandising och produktpresentation
                    enligt riktlinjer, vilket gav mig insikten om vikten av
                    tydlig visuell kommunikation och designförståelse.
                  </li>
                  <li>
                    Drev merförsäljning och engagerade kunder, vilket utvecklade
                    min förmåga att skapa relationer och förstå
                    motivationsfaktorer.
                  </li>
                  <li>
                    Ansvarade för dagliga butikslösningar och problemlösning i
                    en kundnära miljö.
                  </li>
                </ul>
              </article>

              <h2>Utbildningar</h2>

              <article>
                <h3>
                  UX/UI-design med Frontend kompetens, 420 yhp | Chas Academy -
                  Stockholm, Examen
                </h3>
                <p>
                  <strong>Sept 2024 - Maj 2026</strong>
                </p>
                <ul>
                  <li>
                    UX-process: research, wireframing, prototyping och usability
                    testing
                  </li>
                  <li>UI-design och interaktionsdesign i Figma</li>
                  <li>Frontend: HTML, CSS, JavaScript, React</li>
                </ul>
              </article>

              <article>
                <h3>
                  Bildbehandlare/Digital Imaging Specialist, YH 2,5år |
                  Fotoskolan STHLM - Stockholm, Examen{" "}
                </h3>
                <p>
                  <strong>Aug 2019 - Dec 2021</strong>
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
              </article>

              <article>
                <h3>Medieprogrammet | Täby Enskilda Gymnasium - Täby</h3>
                <p>
                  <strong>Examensår 2011</strong>
                </p>
                <p>
                  Med inriktning Foto. Med psykologi B, foto B och C som tillval
                  av kurser.
                </p>
              </article>

              <h2>Certifikat</h2>
              <article>
                <h3>
                  Digital tillgänglighet & Inkluderande design, Diplom –
                  Stockholm
                </h3>
                <p>
                  <strong>Nov 2025</strong>
                </p>
                <p>Utfärdat av Chas Academy AB</p>
              </article>

              <article>
                <h3>
                  Digital Imaging Specialist | Advanced Higher Vocational
                  Education Diploma – Stockholm
                </h3>
                <p>
                  <strong>Utfärdad 2021</strong>
                </p>
                <p>Utfärdat av Fotoskolan STHLM </p>
              </article>

              <h2>Kurser & Praktiker</h2>
              <article>
                <h3>Webbteknik 1 | Linnéuniversitetet</h3>
                <p>
                  <strong>Jan 2024 - Apr 2024</strong>
                </p>
                <p>
                  Introduktionskurs i webbutveckling: HTML & CSS,
                  Informationsarkitektur och användarcentrerad design
                </p>
              </article>

              <article>
                <h3>LIA (Praktik) på Parsley studio, - Stockholm</h3>
                <p>
                  <strong>2021</strong>
                </p>
                <p>
                  Hos Matilda Persson under utbildningen till bildbehandlare
                </p>
              </article>

              <article>
                <h3>LIA (Praktik) på Hemmet studio, Stockholm</h3>
                <p>
                  <strong>2020</strong>
                </p>
                <p>
                  Hos Fotograf Morgan Norman under utbildningen till
                  bildbehandlare
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
                På fritiden spenderas mycket tid med att umgås med familj och
                vänner genom att laga mat tillsammans eller gå ut och äta. Att
                prata mat gör mig genuint glad, och jag tycker det är lika
                roligt att experimentera med smaker och upplägg som att bara
                njuta av god mat i trevligt sällskap.
              </p>
            </article>

            <article>
              <img src={filmIcon} alt="Film" />
              <h3>Filmnörd</h3>
              <p>
                Gillar att koppla av med en riktigt bra film eller längta efter
                nästa avsnitt i en serie jag följer. Berättelsernas tempo,
                känsla och visuella uttryck inspirerar mig i det jag gör.
              </p>
            </article>

            <article>
              <img src={paletteIcon} alt="Palette" />
              <h3>Estet</h3>
              <p className="estet">
                Extra passion finns för allt som har med färg och form att göra.
                Min visuella resa började med makeupartistutbildning och har
                vuxit till ett intresse för bildbehandling – från retusch till
                digitala uttryck. Jag gillar också att inreda, från möbelval
                till målning, allt för att skapa rätt känsla och balans.
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
