const AnmeldungUndOfflineBenutzung = () => {
  return (
    <div>
      <p>
        Die interaktive Kartenanwendung &quot;Potenzialflächen-Online&quot; ist für die spezifische
        Gruppe der Nutzer in Verwaltung und politischen Gremien gedacht, die in die Prozesse zur
        Entwicklung von städtebaulichen Potenzialflächen involviert sind. Sie ist daher nicht
        uneingeschränkt öffentlich zugänglich, sondern erfordert eine Anmeldung mit Benutzername und
        Passwort. Die Zugangssteuerung erfolgt dabei über die Nutzerverwaltung des Wuppertaler
        Navigations- und Datenmanagementsystems WuNDa. Zugangsdaten können bei der
        WuNDa-Administration (<a href='mailto:wunda@stadt.wuppertal.de'>wunda@stadt.wuppertal.de</a>
        ) beantragt werden, die hierzu auch ein{" "}
        <a href='https://formulare.wuppertal.de/metaform/Form-Solutions/sid/assistant/61fbb0516de84f231ac18ee3'>
          Online-Formular
        </a>{" "}
        bereitstellt.{" "}
      </p>
      <p>
        Nach der Anmeldung bei Potenzialflächen-Online wird Ihr Nutzername im Titelbereich zusammen
        mit der letzten Aktualisierung des Cache-Speichers der Kartenanwendung in der Form &quot;
        <strong>Potenzialflächen-Online</strong> (Nutzername, Datum der letzten
        Cache-Aktualisierung, Uhrzeit der letzten Cache-Aktualisierung)&quot; angezeigt. Hier finden
        Sie auch den Hyperlink <a className='styleAsLink'>abmelden</a>, mit dem Sie die Anwendung in
        den Offline-Modus versetzen können. Es erscheint dann zunächst wieder der Login-Dialog. Wenn
        Sie hier auf &quot;Offline arbeiten&quot; klicken, greift die Anwendung nicht mehr via
        Internet auf die servergespeicherten Fachdaten und Kartendienste zu, sondern auf deren im
        Anwendungscache gespeicherte Kopien. Das Arbeiten im Offline-Modus ist sinnvoll, wenn sich
        Ihr Einsatzort in einem Bereich mit schwacher oder unzuverlässiger Mobilfunknetzabdeckung
        befindet (&quot;Funklöcher&quot;). Wichtig: im Offline-Modus müssen Sie im Abschnitt
        &quot;Einstellungen&quot; des Anwendungsmenüs eine Vektor-<a href='url'>Hintergrundkarte</a>{" "}
        auswählen, deren Daten auf Ihr Endgerät heruntergeladen werden können. Sie erkennen diese
        Karten an dem Download-Symbol [Download-Icon] neben der Kartenbezeichnung. Im Offline-Modus
        wird im Titelbereich anstelle Ihres Nutzernamens der Text &quot;Daten aus dem Cache&quot;
        zusammen mit Datum und Uhrzeit der letzten Aktualisierung des Cache angezeigt. Der in diesem
        Zustand angebotene Hyperlink <a href='url'>anmelden und Daten aktualisieren</a> öffnet
        wiederum den Login-Dialog. Hier können Sie sich wieder mit Nutzername und Passwort anmelden,
        wenn Sie das Funkloch verlassen haben.{" "}
      </p>
    </div>
  );
};
export default AnmeldungUndOfflineBenutzung;
