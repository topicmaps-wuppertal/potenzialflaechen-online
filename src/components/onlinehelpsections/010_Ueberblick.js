const Ueberblick = () => {
  return (
    <div>
      <p>
        Nach § 200 Baugesetzbuch können Gemeinden bebaubare Flächen in Karten und Listen erfassen
        (Baulandkataster). In Wuppertal wurde hierzu im Jahr 2021 in Zusammenarbeit der Ressorts 101
        (Stadtentwicklung und Städtebau) und 102 (Vermessung, Katasteramt und Geodaten) das
        Fachverfahren <strong>WuNDa/Potenzialflächen</strong> innerhalb des Wuppertaler Navigations-
        und Datenmanagementsystems WuNDa realisiert. In diesem Verfahren werden nunmehr die zuvor
        getrennt verwalteten Flächen aller Kategorien von städtebaulichen Potenzialflächen
        georeferenziert digitalisiert und in einem übergeordneten, gemeinsamen Datenmodell
        beschrieben. Unterschieden werden dabei die Kategorien Gewerbepotenzialflächen,
        Wohnbaupotenzialflächen, Wiedernutzungspotenziale, Baulücken und Brachflächen. In
        WuNDa/Potenzialflächen erfolgt auch die laufende Aktualisierung der Daten durch die
        Abteilung 101.1 Stadtentwicklung.
      </p>
      <p>
        Um die Informationen aus WuNDa/Potenzialflächen für alle beteiligten Akteurinnen und Akteure
        in den politischen Gremien und der Verwaltung verfügbar zu machen, wurde die hier
        vorliegende, nicht öffentlich zugängliche Web-Anwendung{" "}
        <strong>Potenzialflächen-Online</strong> entwickelt. Sie erlaubt es, mit verschiedenen
        (insbesondere auch mobilen) Endgeräten ortsunabhängig auf die freigegebenen Daten des
        Fachverfahrens zuzugreifen. Zum Zeitpunkt der Inbetriebnahme von Potenzialflächen-Online im
        Juni 2022 war die Überarbeitung der Brachflächen-Daten im neuen Datenmodell noch nicht
        abgeschlossen, sodass die Flächendaten aus dieser Kategorie anfänglich noch nicht angeboten
        werden. Das Baulückenkataster als Teilkategorie von WuNDa/Potenzialflächen befand sich im
        Juni 2022 im erstmaligen systematischen Aufbau für das gesamte Wuppertaler Stadtgebiet.
        Hierbei wird stadtbezirksweise vorgegangen. In Potenzialflächen-Online sind nur die Daten
        der vollständig bearbeiteten Stadtbezirke verfügbar, beginnend mit den Stadtbezirken
        Ronsdorf und Uellendahl-Katernberg.
      </p>
      <p>
        Neben der <strong>Kartendarstellung</strong> einer jeden Potenzialfläche können alle
        weiteren Informationen zur jeweiligen Fläche in einer interaktiven{" "}
        <strong>Datenblattansicht</strong> oder einem <strong>PDF-Steckbrief</strong> abgerufen
        werden. Die Daten umfassen u. a. die Flächennummer (beginnend mit der Stadtbezirksnummer),
        die Bezeichnung der Fläche, ihre Größe (in m² und gerundet in ha), die betroffenen
        Stadtbezirke und Quartiere, die Eigentümerkategorie (anonymisiert), Lagebeschreibungen
        (bezogen auf Verkehr, den Siedlungsraum und die Topografie), das geltende Planungsrecht
        (Ausweisung im Regionalplan und Flächennutzungsplan, Angabe der betroffenen Bebauungspläne),
        die Umgebungsnutzungen, die bisherige Nutzung mit der bestehenden Bebauung und Versiegelung,
        die Wohnlagenklasse gemäß der{" "}
        <a target='_more' href='https://offenedaten-wuppertal.de/dataset/wohnlagen-wuppertal'>
          Wohnlagenkarte des Gutachterausschusses
        </a>
        , eine langtextliche Beschreibung der Fläche (u. a. mit Historie, Informationen und
        Planungen) sowie (soweit einschätzbar) verschiedene Bewertungen des Entwicklungspotenzials
        der Fläche (Innen- oder Außenentwicklung, Potenzialarten, Restriktionen, empfohlene Nutzung,
        Entwicklungsaussichten, Verfügbarkeit, Verwertbarkeit, Revitalisierung, Handlungsdruck,
        Handlungspriorität).
      </p>
      <p>
        Die Potenzialflächen können über das Eingabefeld nach Bezugsflächen (Stadtbezirk und
        Quartier) oder durch Eingabe von entsprechenden Kürzeln nach ihrer Kategorie gefiltert
        werden. Über die Eingabe ihrer Bezeichnung im Eingabefeld kann eine Fläche auch direkt
        gesucht und in der Karte angesprungen werden. Die Fachdaten zu den Potenzialflächen und eine
        Vektor-Hintergrundkarte werden in den Cache-Speicher der Kartenanwendung geladen, sodass
        diese mit geringen Einschränkungen auch im Offline-Modus genutzt werden kann. Das Arbeiten
        im Offline-Modus ist sinnvoll, wenn sich der Einsatzort in einem Bereich mit schwacher oder
        unzuverlässiger Mobilfunknetzabdeckung befindet (&quot;Funklöcher&quot;).
      </p>
      <p>
        Anmerkungen und Hinweise können an{" "}
        <a href='mailto:potenzialfl%C3%A4chen@stadt.wuppertal.de'>
          potenzialflaechen@stadt.wuppertal.de
        </a>{" "}
        (R 101.11 Integrierte Stadtentwicklung und regionale Kooperation) gesendet werden.{" "}
      </p>
    </div>
  );
};
export default Ueberblick;
