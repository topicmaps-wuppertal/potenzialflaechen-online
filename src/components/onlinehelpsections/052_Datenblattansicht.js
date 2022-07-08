import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-scroll";
import slugify from "slugify";

const Infobox = () => {
  return (
    <div>
      <p>
        Durch Anklicken bzw. Antippen des <FontAwesomeIcon icon={faInfoCircle} /> -Symbols in der
        Info-Box öffnen Sie ein Anwendungsfenster mit einer interaktiven Datenblattansicht zu der
        aktuell in der Info-Box beschriebenen Potenzialfläche, die alle im Fachverfahren
        WuNDa/Potenzialflächen geführten Informationen zu dieser Fläche umfasst. Unter einem
        Kopfbereich mit immer sichtbaren Basisinformationen zur Potenzialfläche ist das Datenblatt
        in bis zu sechs thematische Blöcke von &quot;Lagebeschreibung&quot; bis
        &quot;Bewertung&quot; gegliedert. Der Informationsumfang des Datenblattes variiert von
        Fläche zu Fläche. Er ist insbesondere von der Flächenkategorie abhängig. So sind z. B. bei
        den Baulücken regelmäßig nur die Blöcke &quot;Planungsrecht / Bauordnungsrecht&quot; und
        &quot;Erweiterte Informationen&quot; belegt. Die einzelnen Blöcke lassen sich durch
        Anklicken bzw. Antippen der Überschriften in den farbig unterlegten Titelbereichen ein- und
        wieder ausklappen. Durch diese Möglichkeit ist die Datenblattansicht für die
        Informationsentnahme auf einem mobilen Endgerät (z. B. einem Smartphone) besser geeignet als
        der{" "}
        <Link
          class='renderAsLink'
          to={slugify("Steckbriefe")}
          containerId={"myMenu"}
          activeClass='active'
        >
          PDF-Steckbrief
        </Link>{" "}
        der Fläche.
      </p>
      <p>
        Da die Fachdaten zu den Potenzialflächen im Cache-Speicher von Potenzialflächen-Online
        gehalten werden, steht die Datenblattansicht auch im{" "}
        <Link
          class='renderAsLink'
          to={slugify("Anmeldung und Offline-Benutzung")}
          containerId={"myMenu"}
          activeClass='active'
        >
          Offline-Modus
        </Link>{" "}
        zur Verfügung. Um die Datenblattansicht zu schließen, klicken Sie auf die Schaltflächen
        &quot;Ok&quot; rechts im Fußbereich des Fensters.
      </p>
    </div>
  );
};
export default Infobox;
