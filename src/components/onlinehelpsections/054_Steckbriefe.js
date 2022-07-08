import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-scroll";
import slugify from "slugify";

const Infobox = () => {
  return (
    <div>
      <p>
        Durch Anklicken des <FontAwesomeIcon icon={faFilePdf} /> PDF-Symbols in der Info-Box
        erzeugen Sie zu der aktuell in der Info-Box beschriebenen Potenzialfläche einen Steckbrief
        mit allen Informationen, die im Fachverfahren WuNDa/Potenzialflächen zu dieser Fläche
        geführt werden. Hierzu wird ein aktueller Bericht aus der WuNDa-Datenbank angefordert,
        dessen einzelne Inhalte anschließend in eine PDF-Dokumentvorlage eingefügt werden. Die
        Erzeugung der Steckbriefe ist daher im{" "}
        <Link
          class='renderAsLink'
          to={slugify("Anmeldung und Offline-Benutzung")}
          containerId={"myMenu"}
          activeClass='active'
        >
          Offline-Modus
        </Link>{" "}
        nicht möglich! Nach der Fertigstellung des Berichtes wird dieser automatisch heruntergeladen
        und in einem separaten Fenster geöffnet. Zur Anzeige des Steckbriefes wird die auf Ihrem
        Endgerät für die Betrachtung von PDF-Dokumenten konfigurierte Anwendung gestartet, z. B. der
        Adobe Acrobat Reader.{" "}
      </p>
      <p>
        Im Fußbereich des Steckbriefes wird der Zeitstempel des angeforderten Datenbankberichtes
        ausgeprägt - diese Angabe ist wichtig, um aktuelle Steckbriefe von veralteten Dokumenten
        unterscheiden zu können. Im Feld &quot;Beschreibung der Fläche / Sachstand&quot; finden Sie
        rechts oben eine Aktualitätsangabe der Daten zu dieser Fläche. Zu diesem Zeitpunkt hat die
        Verwaltung die Informationen und/oder Bewertungen zu dieser Fläche in WuNDa/Potenzialflächen
        zuletzt fortgeschrieben. Der Steckbrief verwendet als Hintergrundfarbe der Titelzeile und
        für die Flächendarstellungen in den beiden eingebetteten Kartendarstellungen dieselben
        Farben, die auch im Kartenfenster von Potenzialflächen-Online verwendet werden (s.{" "}
        <Link
          class='renderAsLink'
          to={slugify("Kartendarstellung der Potenzialflächen")}
          containerId={"myMenu"}
          activeClass='active'
        >
          Kartendarstellung der Potenzialflächen
        </Link>
        ).
      </p>
      <p>
        Das Layout der Steckbriefe ist für einen Ausdruck im Format DIN A4 optimiert. Wenn Sie mit
        einem mobilen Endgerät mit entsprechend kleinem Bildschirm arbeiten, ist es für Sie
        komfortabler, sich mit Hilfe der interaktiven{" "}
        <Link
          class='renderAsLink'
          to={slugify("Datenblattansicht")}
          containerId={"myMenu"}
          activeClass='active'
        >
          Datenblattansicht
        </Link>{" "}
        über die aktuell geladene Potenzialfläche zu informieren.{" "}
      </p>
    </div>
  );
};
export default Infobox;
