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
              <ul>
                <li>
                  <strong>Roll: </strong>UI-design
                </li>
              </ul>
            </h2>

            <h1>Domira 2.0 – När färg skapar balans</h1>

  
            <h2>Problem & kontext</h2>

            <p>
              I Domira 2.0, en app inom mental hälsa med guidade program och
              reflektionsövningar, behövde vi se över hur programmen särskiljs
              visuellt i gränssnittet.
            </p>

            <p>
              I den tidigare versionen fanns fyra temafärger som användes
              samtidigt i samma vy i funktioner som Guide Me. När alla teman
              visades bredvid varandra upplevdes färgkombinationen ibland som
              “karamellig”, vilket gav ett mer lekfullt och barnsligt uttryck än
              vad som passade Domiras ton av ett mjukt, tryggt och stödjande
              bemötande.
            </p>

            <p>
              Utmaningen var att behålla tydlig visuell särskiljning mellan
              programmen, men samtidigt skapa en mer balanserad och sammanhållen
              färgupplevelse.
            </p>

            <p>
              När programstrukturen i Domira 2.0 samtidigt utökades från fyra
              till sex teman, där två nya teman kopplades till befintliga
              program, blev det extra viktigt att färgsystemet både kunde
              särskilja alla program och spegla deras visuella relationer.
            </p>

      
            <h2>Process</h2>

            <p>
              Strukturen med tre färgnivåer (pale, medium och accent) fanns
              redan etablerad i appen. Vi arbetade gemensamt med att ta fram nya
              temafärger inom denna struktur.
            </p>

            <p>
              Jag bidrog med förslag på toner och nyanser, och processen
              präglades av många diskussioner och iterativa avvägningar
              tillsammans med produktägaren. Olika alternativ testades och
              utvärderades löpande, där produktägaren tog de slutliga besluten
              kring riktning och val.
            </p>

            <p>
              Arbetet skedde främst i Figma där jag justerade färgskalor,
              kontraster och testade hur systemen fungerade i UI:t.
            </p>

            <p>
              Guide Me-flödet användes som testyta för att utvärdera hur
              färgerna fungerade när flera program visades samtidigt, vilket gav
              bra insikter i visuell balans och särskiljning.
            </p>

            <p>
              Att ta fram färgerna var utmanande eftersom de behövde balansera
              flera krav samtidigt. De skulle ligga i en kallare färgskala men
              fortfarande vara tydligt särskiljbara.
            </p>

            <p>
              Om färgerna blev för mättade riskerade de att upplevas för
              lekfulla och “skarpa”, vilket inte passade Domiras visuella
              identitet. Om mättnaden drogs ner för mycket tappade de istället
              energi och blev för dova.
            </p>

            <p>
              Det var ett arbete där det gällde att ha “tungan rätt i mun” –
              små justeringar i nyans och mättnad påverkade helhetsupplevelsen
              tydligt.
            </p>

            <p>
              När grunden var satt testades färgerna direkt i appen för att
              validera hur de fungerade i verklig miljö. Eftersom detta gjordes
              innan lanseringen av Domira 2.0 kunde vi iterera snabbt.
            </p>

            <p>
              För varje program utvecklades tre nivåer:
              <ul>
                <li>
                  <span>Pale -</span> bakgrunder och större ytor
                </li>
                <li>
                  <span>Medium -</span> huvudfärg
                </li>
                <li>
                  <span>Accent -</span> interaktioner och markeringar
                </li>
              </ul>
            </p>

            <p>
              Under processen utvecklades paletten från fyra till sex
              programteman.
            </p>

            <h2>Lösning & designbeslut</h2>

            <p>
              Lösningen blev ett uppdaterat färgsystem där varje program fick en
              tydligare visuell identitet samtidigt som de fortfarande hänger
              ihop som en helhet.
            </p>

            <p>
              De två nya programmen fick färger som designades utifrån deras
              koppling till befintliga teman, vilket skapade en logisk visuell
              relation mellan program som samverkar.
            </p>

            <p>
              Färgpaletten justerades för att balansera tydlighet, tonalitet och
              Domiras visuella identitet.
            </p>

        
            <h2>Resultat & effekt</h2>
            <ul>
              <li>- Sex tydliga programteman istället för fyra</li>
              <li>- Tydligare visuell särskiljning mellan program</li>
              <li>- Mer sammanhållen och balanserad färgpalett</li>
              <li>
                - Bättre visuell struktur i vyer där flera program visas
                samtidigt
              </li>
              <li>
                - Färgsystem som fungerar mer konsekvent genom hela gränssnittet
              </li>
            </ul>

            <p>
              Resultatet blev ett mer sammanhållet system där program både kan
              särskiljas tydligt och samtidigt upplevas som en del av samma
              produkt.
            </p>


            <h2>Reflektion & lärdom</h2>

            <p>
              Färgsystem i en produkt påverkas mycket av sammanhang och hur det
              används i UI över tid.
            </p>

            <p>
              Det här projektet var både utmanande, väldigt lärorikt och roligt
              att arbeta med. Det krävde noggrannhet i små detaljer och
              kontinuerliga justeringar för att hitta rätt balans.
            </p>

            <p>
              Paletten fungerar som en stabil grund för Domira 2.0, men kan
              fortsätta utvecklas i takt med att nya behov uppstår i
              gränssnittet.
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