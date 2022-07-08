import IconComp from "react-cismap/commons/Icon";
import InKartePositionierenOriginal from "react-cismap/topicmaps/docBlocks/InKartePositionieren";
const InKartePositionieren = () => {
  return (
    <div>
      <InKartePositionierenOriginal
        defaultContextValues={{
          inKartePositionieren: {
            grosseZoomstufe: 18,
            listAddendum: (
              <span>
                Zusätzlich können Sie auch die Bezeichnung einer Potenzialfläche als Suchbegriff
                eingeben. Die Kategorien der Treffer werden in der Auswahlliste durch die Symbole{" "}
                <IconComp name='square' overlay='G' /> für <strong>G</strong>ewerbepotenzialflächen,{" "}
                <IconComp name='square' overlay='W' /> für <strong>W</strong>ohnbaupotenzialflächen,{" "}
                <IconComp name='square' overlay='N' /> für Wieder<strong>N</strong>
                utzungspotenziale, <IconComp name='square' overlay='L' /> für Bau<strong>L</strong>
                ücken und perspektivisch auch <IconComp name='square' overlay='B' /> für{" "}
                <strong>B</strong>
                rachflächen angezeigt. Beim turnusmäßigen Import der Daten aus dem Fachverfahren
                WuNDa/Potenzialflächen werden für alle Potenzialflächen Aliasse generiert, die den
                Kennbuchstaben aus den Kategorie-Symbolen und ein Leerzeichen als Präfix erhalten.
                So entsteht z. B für die Wohnbauflächen &quot;Stollenstraße&quot; der Alias &quot;W
                Stollenstraße&quot;. Damit können Sie durch die Eingabe des jeweiligen
                Kennbuchstabens und eines Leerzeichens im Eingabefeld eine Auswahlliste aller
                Potenzialflächen dieser Kategorie generieren, z. B. durch Eingabe von &quot;W &quot;
                eine Auswahlliste aller Wohnbaupotenzialflächen.
              </span>
            ),
          },
        }}
      />
    </div>
  );
};
export default InKartePositionieren;
