import { Link } from "react-router-dom";
import RedesignImg from "../IMG/Redesign.png";

const Redesign = () => {
  return (
    <div>
      <main>
        <section className="projectexample_wrapper">
          <div class="projectexample_card">
            <img src={RedesignImg} alt="redesign" className="redesign-img" />

            <h3>
              <ul>
                <li>
                  <strong>Roll:</strong> UI-design
                </li>
              </ul>
            </h3>

            <h1>Domira 2.0 – Redesign av temafärger för program</h1>

            <h4>Översikt</h4>
            <p>
              Som en del av utvecklingen av Domira 2.0 arbetade jag med att
              vidareutveckla temafärgerna för appens olika program. Arbetet
              drevs av mig, i dialog och iterering med produktägaren som tog
              beslut. Målet var att skapa tydligare visuella skillnader mellan
              programmen och säkerställa att temafärgerna fungerar konsekvent i
              olika delar av appen. Grundfärgerna i designen behölls, medan
              programmens temafärger utvecklades vidare.
            </p>
            <h4>Utmaning</h4>
            <p>
              I den tidigare versionen av appen fanns fyra temafärger som främst
              användes i funktionen Guide Me. Färgerna fungerade, men i vissa
              kombinationer upplevdes de tillsammans som lite för “karamelliga”,
              vilket gav ett något mer lekfullt och barnsligt uttryck än vad som
              helt matchade appens tänkta ton. Samtidigt ville vi behålla
              Domiras identitet som varm, mjuk och personlig, men i en mer
              balanserad och förfinad riktning.
            </p>
            <p>
              <h4>
                <span>Det fanns också andra designutmaningar:</span>
              </h4>
              <ul>
                <li>- Färgerna kunde vara svåra att särskilja tydligt</li>
                <li>
                  - varje program behövde tre färgnivåer (pale, medium och
                  accent)
                </li>
                <li>
                  - Det var svårt att hitta flera temafärger som inte blev för
                  lika varandra
                </li>
              </ul>
              Målet var därför att skapa en palett där programmen känns tydligt
              olika, men fortfarande harmonierar med varandra och med appens
              övergripande uttryck. Samtidigt ville vi behålla svala, våriga
              toner som passar appens lugna och stödjande karaktär, utan att
              färgerna blev för tunga eller nedtonade, men heller inte för
              starka.
            </p>

            <h4>Process</h4>
            <p>
              Strukturen med tre färgnivåer (pale, medium och accent) fanns
              redan etablerad i appen, och vi arbetade gemensamt med att ta fram
              nya temafärger inom denna struktur. Jag bidrog med förslag på
              toner och nyanser, och processen präglades av många diskussioner
              och iterativa avvägningar tillsammans med produktägaren. Olika
              alternativ testades och utvärderades löpande, där produktägaren
              tog de slutliga besluten kring riktning och val. Temafärgerna
              användes i olika delar av hela appen, men Guide Me-framen
              fungerade som ett effektivt sätt att testa hur färgerna fungerade
              tillsammans och säkerställa att de var tillräckligt tydliga och
              särskiljbara från varandra. Även om temafärgerna skulle användas
              mer brett i appen, var denna vy särskilt användbar som testyta
              eftersom den samlade flera programteman på samma plats.
            </p>

            <p>
              Det gav en tydlig överblick av kontrast, balans och hur väl temana
              gick att särskilja från varandra innan de implementerades bredare
              i appen. När vi hade tagit fram grunden för de nya färgerna
              testade vi att implementera dem direkt i appen, eftersom färger
              ofta upplevs annorlunda i verklig miljö jämfört med i Figma.
              Eftersom detta skedde innan lanseringen av Domira 2.0 hade appen
              dessutom lägre trafik, vilket gjorde det möjligt att testa
              färgerna direkt i produkten. Det gav oss en chans att snabbt
              validera riktningen och säkerställa att vi var på rätt väg innan
              vidare utveckling. För varje program utvecklades tre nivåer av
              färgstyrka:
              <ul>
                <li>
                  <span>Pale -</span> en ljus variant för bakgrunder och större
                  ytor
                </li>
                <li>
                  <span>Medium -</span> huvudfärgen för temat
                </li>
                <li>
                  <span>Accent -</span> en starkare variant för markeringar och
                  interaktiva element
                </li>
              </ul>
              Genom att arbeta med dessa tre nivåer kunde temafärgerna användas
              mer flexibelt i gränssnittet samtidigt som varje program behåller
              en tydlig visuell identitet. Under processen utvecklades paletten
              till att stödja sex programteman, istället för de fyra som
              tidigare användes.
            </p>
            <h4>Resultat</h4>
            <p>
              <span>Arbetet resulterade i:</span>
              <ul>
                <li>- Sex tydliga programteman istället för fyra</li>
                <li>- Bättre visuell differentiering mellan program</li>
                <li>- En mer balanserad färgpalett</li>
                <li>
                  - Temafärger som fungerar mer konsekvent i appens gränssnitt
                </li>
                <li>
                  - Grundfärgerna i designen behölls, medan programmens
                  temafärger vidareutvecklades som en del av uppdateringen av
                  Domira 2.0.
                </li>
              </ul>
            </p>
            <div className="button_center">
              <Link to="/">
                <button>Tillbaka Hem</button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Redesign;
