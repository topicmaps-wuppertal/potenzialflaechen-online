import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ObjekteSuchen = () => {
  return (
    <div>
      <p>
        Unter &quot;<strong>Meine Potenzialflächen</strong>&quot; können Sie im Anwendungsmenü{" "}
        <FontAwesomeIcon icon={faBars} /> auswählen, welche Kategorien von Potenzialflächen in der
        Karte dargestellt werden. Durch Anklicken bzw. Antippen der Schaltfläche &quot;Filter
        zurücksetzen&quot; machen Sie Ihre Auswahl dergestalt rückgängig, dass wieder alle
        Kategorien zur Anzeige ausgewählt werden.
      </p>
      <p>
        Ihre Einstellungen werden direkt in der blauen Titelzeile des Bereichs &quot;Meine
        Potenzialflächen&quot; und in dem Donut-Diagramm, das Sie rechts neben oder unter den
        Filteroptionen finden, ausgewertet. Die Titelzeile zeigt die Gesamtanzahl der
        Potenzialflächen in den von Ihnen ausgewählten Kategorien. Das Donut-Diagramm zeigt
        zusätzlich die Verteilung auf die einzelnen Kategorien. Bewegen Sie dazu den Mauszeiger auf
        eines der farbigen Segmente des Diagramms.
      </p>
    </div>
  );
};
export default ObjekteSuchen;
