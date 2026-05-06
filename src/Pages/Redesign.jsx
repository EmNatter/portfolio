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
                  <strong>Roll: </strong>UI-design
                </li>
                <li>
                  <strong>Projekt: </strong>Domira 2.0
                </li>
              </ul>
            </h2>

            <h1>Programteman i balans</h1>

            <h2>Problem & kontext</h2>

            <p>
              Domira 2.0 är en mental hälso-app med guidade program och
              reflektionsövningar. I den tidigare versionen visades flera
              temafärger samtidigt i vyer som Guide Me, vilket skapade ett
              visuellt uttryck som inte fullt ut stödde produktens lugna och
              trygga tonalitet. Samtidigt utökades strukturen från fyra till sex
              program, vilket ökade behovet av ett färgsystem som både
              särskiljer innehåll och skapar en tydlig visuell helhet.
            </p>

            <h2>Min roll</h2>

            <p>
              Jag drev designarbetet kring färgsystemet och ansvarade för att ta
              fram och iterera färgskalor inom den befintliga strukturen (pale,
              medium och accent). Arbetet skedde i nära samarbete med
              produktägaren där vi itererade lösningar tillsammans. Jag tog fram
              och visualiserade designriktningar som låg till grund för beslut,
              medan produktägaren fattade de slutgiltiga besluten.
            </p>

            <h2>Process & arbetssätt</h2>

            <p>
              Färgskalorna utvecklades iterativt i Figma genom justering av
              mättnad, ljusvärde och kontrast, med fokus på hur de fungerade i
              UI och systemet som helhet. Guide Me-flödet användes som testyta
              för att utvärdera hur flera program fungerade tillsammans och
              säkerställa tydlig visuell hierarki i komplexa vyer.
            </p>

            <p>
              En central utmaning var att balansera tydlig visuell
              särskiljning med en lugn och sammanhållen tonalitet, utan att
              färgerna blev för skarpa eller för dova. Beslut togs baserat på
              hur väl färgerna fungerade tillsammans i vyer med flera program
              och hur tydligt de kunde särskiljas utan att bryta produktens
              visuella identitet.
            </p>

            <h2>Testning i produkt</h2>

            <p>
              Färgerna testades direkt i den faktiska appmiljön, där
              produktägaren implementerade dem via Contentful. Detta möjliggjorde
              snabb utvärdering i riktiga vyer och kontinuerlig iteration.
              Eftersom appen vid tillfället hade låg trafik kunde vi arbeta
              iterativt och justera designen löpande baserat på faktisk
              användning i produkten. Detta säkerställde att designbesluten inte
              bara fungerade i designverktyg, utan även i en verklig
              produktmiljö.
            </p>

            <h2>Designsystem</h2>

            <ul className="list-clean">
              <li><strong>Pale:</strong> bakgrunder och större ytor</li>
              <li><strong>Medium:</strong> huvudfärg</li>
              <li><strong>Accent:</strong> interaktioner och markeringar</li>
            </ul>

            <h2>Resultat & effekt</h2>

            <ul className="result-list">
              <li>Tydligare visuell hierarki mellan program</li>
              <li>Förbättrad visuell särskiljning i komplexa vyer</li>
              <li>Mer sammanhållen och balanserad färgpalett</li>
              <li>
                Minskad visuell belastning, vilket gör det enklare att orientera
                sig och välja program
              </li>
              <li>Mer konsekvent visuell struktur i hela appen</li>
            </ul>

            <p>
              Resultatet blev ett mer sammanhållet system där program både kan
              särskiljas tydligt och samtidigt upplevas som en del av samma
              produkt.
            </p>

            <h2>Reflektion</h2>

            <p>
              Små justeringar i mättnad, ljusvärde och kontrast hade större
              påverkan på användbarheten än själva färgvalet, som främst
              styrdes av produktens visuella identitet.
            </p>

            <p>
              Projektet visade hur små förändringar i färg kan ha stor påverkan
              på både tydlighet och känsla i en produkt. Färgsystemet fungerar
              nu som en stabil grund som kan vidareutvecklas i takt med att
              produkten växer.
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