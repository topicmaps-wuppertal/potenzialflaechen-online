import {
  faChevronCircleDown,
  faChevronCircleUp,
  faFilePdf,
  faInfoCircle,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-scroll";
import slugify from "slugify";

const Infobox = () => {
  return (
    <div>
      <p>
        Bewegen Sie den Mauszeiger im Kartenfenster auf eine der farbigen Flächen, mit denen die
        Potenzialflächen in der Karte dargestellt werden, um sich die Bezeichnung der jeweiligen
        Fläche anzeigen zu lassen. Durch Anklicken bzw. kurzes Antippen einer farbigen Fläche setzen
        Sie den Fokus auf diese Potenzialfläche. Sie wird dann blau umrandet und mit geringerer
        Transparenz dargestellt, was sie deutlicher hervortreten lässt. Außerdem werden direkt
        einige Basisinformationen zu der ausgewählten Potenzialfläche in der Info-Box angezeigt,
        nämlich die Bezeichnung der Fläche, ihre eindeutige Nummer und ihre Größe in m².
      </p>
      <p>
        Außerdem werden Ihnen in der Info-Box einige weiterführende Funktionen zu der ausgewählten
        Potenzialfläche angeboten. Mit der Lupenfunktion <FontAwesomeIcon icon={faSearch} /> wird
        die Karte auf diese Fläche zentriert und gleichzeitig der größte Betrachtungsmaßstab
        eingestellt, in dem die Fläche vollständig dargestellt werden kann. (Diesen Zoom können Sie
        auch mit einem zweiten Anklicken oder Antippen einer bereits ausgewählten Potenzialfläche
        bewirken.) Mit der Funktion{" "}
        <Link
          class='renderAsLink'
          to={slugify("Datenblattansicht")}
          containerId={"myMenu"}
          activeClass='active'
        >
          Datenblatt anzeigen
        </Link>{" "}
        <FontAwesomeIcon icon={faInfoCircle} /> öffnen Sie ein Anwendungsfenster mit einer
        interaktiven Datenblattansicht zur ausgewählten Potenzialfläche, die alle hierzu im
        Fachverfahren WuNDa/Potenzialflächen geführten Informationen umfasst. Mit der Funktion{" "}
        <Link
          class='renderAsLink'
          to={slugify("Steckbriefe")}
          containerId={"myMenu"}
          activeClass='active'
        >
          Steckbrief erzeugen
        </Link>{" "}
        <FontAwesomeIcon icon={faFilePdf} /> erzeugen Sie zu dieser Fläche einen Steckbrief in Form
        eines PDF-Dokuments mit denselben Informationen wie in der Datenblattansicht.
      </p>
      <p>
        Auf Endgeräten mit Touch-Display blinkt die Bezeichnung der Potenzialfläche beim ersten und
        zweiten Antippen (Fokus auf diese Fläche, Zoom) kurz auf. Mit dem dritten Antippen wird die
        Bezeichnung dauerhaft eingeblendet, bis zu Ihrer nächsten Bildschirmaktion (z. B. Antippen
        der Karte außerhalb der aktuellen Potenzialfläche).{" "}
      </p>
      <p>
        Potenzialflächen unterschiedlicher Kategorien können sich vollständig oder teilweise
        überdecken. In diesem Fall werden entsprechend mehrere Info-Boxen übereinander angezeigt.
        Sie werden dabei so versetzt, dass die farbigen Titelzeilen aller Info-Boxen noch
        vollständig sichtbar sind. Durch Anklicken der jeweiligen Titelzeile setzen Sie den Fokus
        auf die zugehörige Potenzialfläche. Die Info-Box zu dieser Potenzialfläche wird dadurch in
        den Vordergrund geholt, zu den anderen Flächen sind dann nur noch die farbigen Titelzeilen
        mit der Angabe der Flächenkategorie zu sehen.{" "}
      </p>
      <p>
        Wenn Sie noch keine Potenzialfläche im aktuellen Kartenausschnitt selektiert haben, wird der
        Fokus automatisch auf die nördlichste Fläche gesetzt. Ausgewertet wird dabei die Position
        des Flächenschwerpunktes. Mit den Funktionen <a class='renderAsLink'>&lt;&lt;</a> vorheriger
        Treffer und <a class='renderAsLink'>&gt;&gt;</a> nächster Treffer können Sie ausgehend von
        dem Objekt, auf dem gerade der Fokus liegt, in nördlicher bzw. südlicher Richtung alle
        aktuell im Kartenfenster angezeigten Objekte durchmustern.
      </p>
      <p>
        Mit der Schaltfläche <FontAwesomeIcon icon={faChevronCircleDown} /> im dunkelgrau
        abgesetzten rechten Rand der Info-Box lässt sich diese so verkleinern, dass nur noch die
        Bezeichnung der Potenzialfläche sowie die Funktionssymbole angezeigt werden - nützlich für
        Endgeräte mit kleinem Display. Mit der Schaltfläche{" "}
        <FontAwesomeIcon icon={faChevronCircleUp} /> an derselben Stelle können Sie die Info-Box
        dann wieder vollständig einblenden.
      </p>
    </div>
  );
};
export default Infobox;
