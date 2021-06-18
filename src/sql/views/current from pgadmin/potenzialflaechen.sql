-- View: daq.potenzialflaechen

-- DROP VIEW daq.potenzialflaechen;

CREATE OR REPLACE VIEW daq.potenzialflaechen AS 
 SELECT ('['::text || array_to_string(ARRAY( SELECT ((((((((((((((((((((((((((((((((((((((((((((((((((((('{"id":"'::text || xx.id) || '",'::text) || 
                CASE
                    WHEN xx.bezeichnung IS NOT NULL THEN ('"bezeichnung":"'::text || xx.bezeichnung) || '",'::text
                    ELSE ''::text
                END) || 
                CASE
                    WHEN xx.nummer IS NOT NULL THEN ('"nummer":"'::text || xx.nummer) || '",'::text
                    ELSE ''::text
                END) || 
                CASE
                    WHEN xx.beschreibung_flaeche IS NOT NULL THEN ('"beschreibung_flaeche":"'::text || regexp_replace(regexp_replace(xx.beschreibung_flaeche, '
'::text, '\\n'::text, 'g'::text), '"'::text, '\\"'::text, 'g'::text)) || '",'::text
                    ELSE ''::text
                END) || 
                CASE
                    WHEN xx.notwendige_massnahmen IS NOT NULL THEN ('"notwendige_massnahmen":"'::text || regexp_replace(regexp_replace(xx.notwendige_massnahmen, '
'::text, '\\n'::text, 'g'::text), '"'::text, '\\"'::text, 'g'::text)) || '",'::text
                    ELSE ''::text
                END) || 
                CASE
                    WHEN xx.interne_hinweise IS NOT NULL THEN ('"interne_hinweise":"'::text || regexp_replace(regexp_replace(xx.interne_hinweise, '
'::text, '\\n'::text, 'g'::text), '"'::text, '\\"'::text, 'g'::text)) || '",'::text
                    ELSE ''::text
                END) || 
                CASE
                    WHEN xx.quelle IS NOT NULL THEN ('"quelle":"'::text || regexp_replace(regexp_replace(xx.quelle, '
'::text, '\\n'::text, 'g'::text), '"'::text, '\\"'::text, 'g'::text)) || '",'::text
                    ELSE ''::text
                END) || 
                CASE
                    WHEN xx.bestand_bebauung IS NOT NULL THEN ('"bestand_bebauung":"'::text || xx.bestand_bebauung) || '",'::text
                    ELSE ''::text
                END) || 
                CASE
                    WHEN xx.anzahl_wohneinheiten IS NOT NULL THEN ('"anzahl_wohneinheiten":"'::text || xx.anzahl_wohneinheiten) || '",'::text
                    ELSE ''::text
                END) || 
                CASE
                    WHEN xx.festsetzungen_bplan IS NOT NULL THEN ('"festsetzungen_bplan":"'::text || xx.festsetzungen_bplan) || '",'::text
                    ELSE ''::text
                END) || 
                CASE
                    WHEN xx.stand_bauordnungsrecht IS NOT NULL THEN ('"stand_bauordnungsrecht":"'::text || xx.stand_bauordnungsrecht) || '",'::text
                    ELSE ''::text
                END) || 
                CASE
                    WHEN xx.stand IS NOT NULL THEN ('"stand":"'::text || xx.stand) || '",'::text
                    ELSE ''::text
                END) || 
                CASE
                    WHEN xx.jahr_brachflaeche IS NOT NULL THEN ('"jahr_brachflaeche":"'::text || xx.jahr_brachflaeche) || '",'::text
                    ELSE ''::text
                END) || 
                CASE
                    WHEN xx.kampagne_id IS NOT NULL THEN ('"kampagne_id":'::text || xx.kampagne_id) || ','::text
                    ELSE ''::text
                END) || 
                CASE
                    WHEN xx.kampagne IS NOT NULL THEN ('"kampagne":'::text || xx.kampagne) || ','::text
                    ELSE ''::text
                END) || 
                CASE
                    WHEN xx.lagebewertung_verkehr IS NOT NULL THEN ('"lagebewertung_verkehr":"'::text || xx.lagebewertung_verkehr) || '",'::text
                    ELSE ''::text
                END) || 
                CASE
                    WHEN xx.siedlungsraeumliche_lage IS NOT NULL THEN ('"siedlungsraeumliche_lage":"'::text || xx.siedlungsraeumliche_lage) || '",'::text
                    ELSE ''::text
                END) || 
                CASE
                    WHEN xx.topografie IS NOT NULL THEN ('"topografie":"'::text || xx.topografie) || '",'::text
                    ELSE ''::text
                END) || 
                CASE
                    WHEN xx.hang IS NOT NULL THEN ('"hang":"'::text || xx.hang) || '",'::text
                    ELSE ''::text
                END) || 
                CASE
                    WHEN xx.verwertbarkeit IS NOT NULL THEN ('"verwertbarkeit":"'::text || xx.verwertbarkeit) || '",'::text
                    ELSE ''::text
                END) || 
                CASE
                    WHEN xx.verfuegbarkeit IS NOT NULL THEN ('"verfuegbarkeit":"'::text || xx.verfuegbarkeit) || '",'::text
                    ELSE ''::text
                END) || 
                CASE
                    WHEN xx.entwicklungsaussichten IS NOT NULL THEN ('"entwicklungsaussichten":"'::text || xx.entwicklungsaussichten) || '",'::text
                    ELSE ''::text
                END) || 
                CASE
                    WHEN xx.entwicklungsstand IS NOT NULL THEN ('"entwicklungsstand":"'::text || xx.entwicklungsstand) || '",'::text
                    ELSE ''::text
                END) || 
                CASE
                    WHEN xx.revitalisierung IS NOT NULL THEN ('"revitalisierung":"'::text || xx.revitalisierung) || '",'::text
                    ELSE ''::text
                END) || 
                CASE
                    WHEN xx.aeussere_erschliessung IS NOT NULL THEN ('"aeussere_erschliessung":"'::text || xx.aeussere_erschliessung) || '",'::text
                    ELSE ''::text
                END) || 
                CASE
                    WHEN xx.potenzialart IS NOT NULL THEN ('"potenzialart":"'::text || xx.potenzialart) || '",'::text
                    ELSE ''::text
                END) || 
                CASE
                    WHEN xx.kategorie IS NOT NULL THEN ('"kategorie":"'::text || xx.kategorie) || '",'::text
                    ELSE ''::text
                END) || 
                CASE
                    WHEN xx.wohneinheiten IS NOT NULL THEN ('"wohneinheiten":"'::text || xx.wohneinheiten) || '",'::text
                    ELSE ''::text
                END) || 
                CASE
                    WHEN xx.oepnv IS NOT NULL THEN ('"oepnv":"'::text || xx.oepnv) || '",'::text
                    ELSE ''::text
                END) || 
                CASE
                    WHEN xx.versiegelung IS NOT NULL THEN ('"versiegelung":"'::text || xx.versiegelung) || '",'::text
                    ELSE ''::text
                END) || 
                CASE
                    WHEN xx.klimainformationen IS NOT NULL THEN ('"klimainformationen":"'::text || xx.klimainformationen) || '",'::text
                    ELSE ''::text
                END) || 
                CASE
                    WHEN xx.bauordnungsrecht_genehmigung IS NOT NULL THEN ('"bauordnungsrecht_genehmigung":"'::text || xx.bauordnungsrecht_genehmigung) || '",'::text
                    ELSE ''::text
                END) || 
                CASE
                    WHEN xx.bauordnungsrecht_baulast IS NOT NULL THEN ('"bauordnungsrecht_baulast":"'::text || xx.bauordnungsrecht_baulast) || '",'::text
                    ELSE ''::text
                END) || 
                CASE
                    WHEN xx.handlungsdruck IS NOT NULL THEN ('"handlungsdruck":"'::text || xx.handlungsdruck) || '",'::text
                    ELSE ''::text
                END) || 
                CASE
                    WHEN xx.handlungsprioritaet IS NOT NULL THEN ('"handlungsprioritaet":"'::text || xx.handlungsprioritaet) || '",'::text
                    ELSE ''::text
                END) || 
                CASE
                    WHEN xx.eigentuemer IS NOT NULL THEN ('"eigentuemer":'::text || xx.eigentuemer) || ','::text
                    ELSE ''::text
                END) || 
                CASE
                    WHEN xx.umgebungsnutzung IS NOT NULL THEN ('"umgebungsnutzung":'::text || xx.umgebungsnutzung) || ','::text
                    ELSE ''::text
                END) || 
                CASE
                    WHEN xx.bisherige_nutzung IS NOT NULL THEN ('"bisherige_nutzung":'::text || xx.bisherige_nutzung) || ','::text
                    ELSE ''::text
                END) || 
                CASE
                    WHEN xx.naehe_zu IS NOT NULL THEN ('"naehe_zu":'::text || xx.naehe_zu) || ','::text
                    ELSE ''::text
                END) || 
                CASE
                    WHEN xx.brachflaechenkategorien IS NOT NULL THEN ('"brachflaechenkategorien":'::text || xx.brachflaechenkategorien) || ','::text
                    ELSE ''::text
                END) || 
                CASE
                    WHEN xx.empfohlene_nutzungen IS NOT NULL THEN ('"empfohlene_nutzungen":'::text || xx.empfohlene_nutzungen) || ','::text
                    ELSE ''::text
                END) || 
                CASE
                    WHEN xx.empfohlene_nutzungen_wohnen IS NOT NULL THEN ('"empfohlene_nutzungen_wohnen":'::text || xx.empfohlene_nutzungen_wohnen) || ','::text
                    ELSE ''::text
                END) || 
                CASE
                    WHEN xx.restriktionen IS NOT NULL THEN ('"restriktionen":'::text || xx.restriktionen) || ','::text
                    ELSE ''::text
                END) || 
                CASE
                    WHEN xx.bplaene <> '[]'::text THEN ('"bplaene":'::text || xx.bplaene) || ','::text
                    ELSE ''::text
                END) || 
                CASE
                    WHEN xx.wohnlagen <> '[]'::text THEN ('"wohnlagen":'::text || xx.wohnlagen) || ','::text
                    ELSE ''::text
                END) || 
                CASE
                    WHEN xx.stadtbezirke <> '[]'::text THEN ('"stadtbezirke":'::text || xx.stadtbezirke) || ','::text
                    ELSE ''::text
                END) || 
                CASE
                    WHEN xx.quartiere <> '[]'::text THEN ('"quartiere":'::text || xx.quartiere) || ','::text
                    ELSE ''::text
                END) || '"geojson":'::text) || xx.geojson) || ','::text) || '"groesse":'::text) || xx.groesse) || '}'::text
           FROM ( SELECT pf_potenzialflaeche.id, pf_potenzialflaeche.veroeffentlicht, pf_potenzialflaeche.bezeichnung, pf_potenzialflaeche.nummer, pf_potenzialflaeche.kampagne AS kampagne_id, ( SELECT ((((((('{"id":"'::text || x.id) || '",'::text) || 
                                CASE
                                    WHEN x.bezeichnung IS NOT NULL THEN ('"bezeichnung":"'::text || x.bezeichnung) || '",'::text
                                    ELSE ''::text
                                END) || 
                                CASE
                                    WHEN x.colorcode IS NOT NULL THEN ('"color":"'::text || x.colorcode) || '",'::text
                                    ELSE ''::text
                                END) || 
                                CASE
                                    WHEN x.beschreibung IS NOT NULL THEN ('"beschreibung":"'::text || x.beschreibung) || '",'::text
                                    ELSE ''::text
                                END) || 
                                CASE
                                    WHEN x.veroeffentlichkeitsstatus IS NOT NULL THEN ('"veroeffentlichkeitsstatus":"'::text || x.veroeffentlichkeitsstatus) || '",'::text
                                    ELSE ''::text
                                END) || 
                                CASE
                                    WHEN x.haupt_steckbrieftemplate_id IS NOT NULL THEN ('"haupt_steckbrieftemplate_id":'::text || x.haupt_steckbrieftemplate_id) || ''::text
                                    ELSE ''::text
                                END) || '}'::text
                           FROM ( SELECT pf_kampagne.id, pf_kampagne.bezeichnung, pf_kampagne.colorcode, pf_kampagne.beschreibung, pf_veroeffentlichkeitsstatus.name AS veroeffentlichkeitsstatus, pf_kampagne.haupt_steckbrieftemplate_id
                                   FROM pf_kampagne
                              LEFT JOIN pf_veroeffentlichkeitsstatus ON pf_kampagne.veroeffentlichkeitsstatus = pf_veroeffentlichkeitsstatus.id
                             WHERE pf_kampagne.id = pf_potenzialflaeche.kampagne) x) AS kampagne, pf_potenzialflaeche.beschreibung_flaeche, pf_potenzialflaeche.notwendige_massnahmen, pf_potenzialflaeche.interne_hinweise, pf_potenzialflaeche.quelle, pf_potenzialflaeche.bestand_bebauung, pf_potenzialflaeche.anzahl_wohneinheiten, pf_potenzialflaeche.festsetzungen_bplan, pf_potenzialflaeche.stand_bauordnungsrecht, pf_potenzialflaeche.stand, pf_potenzialflaeche.jahr_brachflaeche, st_asgeojson(geom.geo_field, 2, 4) AS geojson, pf_lagebewertung_verkehr.name AS lagebewertung_verkehr, pf_siedlungsraeumliche_lage.name AS siedlungsraeumliche_lage, pf_topografie.name AS topografie, pf_ausrichtung.name AS hang, pf_verwertbarkeit.name AS verwertbarkeit, pf_verfuegbarkeit.name AS verfuegbarkeit, pf_entwicklungsaussichten.name AS entwicklungsaussichten, pf_entwicklungsstand.name AS entwicklungsstand, pf_revitalisierung.name AS revitalisierung, pf_aeussere_erschliessung.name AS aeussere_erschliessung, pf_potenzialart.name AS potenzialart, pf_kategorie.name AS kategorie, pf_wohneinheiten.name AS wohneinheiten, pf_oepnv.name AS oepnv, pf_versiegelung.name AS versiegelung, pf_klimainformationen.name AS klimainformationen, pf_bauordnungsrecht_genehmigung.name AS bauordnungsrecht_genehmigung, pf_bauordnungsrecht_baulast.name AS bauordnungsrecht_baulast, pf_handlungsdruck.name AS handlungsdruck, pf_handlungsprioritaet.name AS handlungsprioritaet, ( SELECT ('['::text || array_to_string(array_agg(('"'::text || pf_eigentuemer.name) || '"'::text), ', '::text)) || ']'::text
                           FROM pf_eigentuemer
                      JOIN pf_eigentuemer_arr ON pf_eigentuemer.id = pf_eigentuemer_arr.fk_eigentuemer
                     WHERE pf_eigentuemer_arr.pf_potenzialflaeche_reference = pf_potenzialflaeche.id) AS eigentuemer, ( SELECT ('['::text || array_to_string(array_agg(('"'::text || pf_nutzung.name) || '"'::text), ', '::text)) || ']'::text
                           FROM pf_nutzung
                      JOIN pf_potenzialflaechen_bisherige_nutzung ON pf_nutzung.id = pf_potenzialflaechen_bisherige_nutzung.nutzung
                     WHERE pf_potenzialflaechen_bisherige_nutzung.pf_potenzialflaeche_reference = pf_potenzialflaeche.id) AS umgebungsnutzung, ( SELECT ('['::text || array_to_string(array_agg(('"'::text || pf_nutzung.name) || '"'::text), ', '::text)) || ']'::text
                           FROM pf_nutzung
                      JOIN pf_potenzialflaechen_umgebungsnutzung ON pf_nutzung.id = pf_potenzialflaechen_umgebungsnutzung.nutzung
                     WHERE pf_potenzialflaechen_umgebungsnutzung.pf_potenzialflaeche_reference = pf_potenzialflaeche.id) AS bisherige_nutzung, ( SELECT ('['::text || array_to_string(array_agg(('"'::text || pf_naehe_zu.name) || '"'::text), ', '::text)) || ']'::text
                           FROM pf_naehe_zu
                      JOIN pf_naehen_zu ON pf_naehe_zu.id = pf_naehen_zu.fk_naehe_zu
                     WHERE pf_naehen_zu.pf_potenzialflaeche_reference = pf_potenzialflaeche.id) AS naehe_zu, ( SELECT ('['::text || array_to_string(array_agg(('"'::text || pf_brachflaeche.name) || '"'::text), ', '::text)) || ']'::text
                           FROM pf_brachflaeche
                      JOIN pf_brachflaechen ON pf_brachflaeche.id = pf_brachflaechen.fk_brachflaeche
                     WHERE pf_brachflaechen.pf_potenzialflaeche_reference = pf_potenzialflaeche.id) AS brachflaechenkategorien, ( SELECT ('['::text || array_to_string(array_agg(('"'::text || pf_empfohlene_nutzung.name) || '"'::text), ', '::text)) || ']'::text
                           FROM pf_empfohlene_nutzung
                      JOIN pf_empfohlene_nutzungen ON pf_empfohlene_nutzung.id = pf_empfohlene_nutzungen.fk_empfohlene_nutzung
                     WHERE pf_empfohlene_nutzungen.pf_potenzialflaeche_reference = pf_potenzialflaeche.id) AS empfohlene_nutzungen, ( SELECT ('['::text || array_to_string(array_agg(('"'::text || pf_empfohlene_nutzung_wohnen.name) || '"'::text), ', '::text)) || ']'::text
                           FROM pf_empfohlene_nutzung_wohnen
                      JOIN pf_empfohlene_nutzungen_wohnen ON pf_empfohlene_nutzung_wohnen.id = pf_empfohlene_nutzungen_wohnen.fk_empfohlene_nutzung_wohnen
                     WHERE pf_empfohlene_nutzungen_wohnen.pf_potenzialflaeche_reference = pf_potenzialflaeche.id) AS empfohlene_nutzungen_wohnen, ( SELECT ('['::text || array_to_string(array_agg(('"'::text || pf_restriktion.name) || '"'::text), ', '::text)) || ']'::text
                           FROM pf_restriktion
                      JOIN pf_restriktionen ON pf_restriktion.id = pf_restriktionen.fk_restriktion
                     WHERE pf_restriktionen.pf_potenzialflaeche_reference = pf_potenzialflaeche.id) AS restriktionen, round(st_area(geom.geo_field))::text AS groesse, bpl.bplaene, wl.wohnlagen, sb.stadtbezirke, q.quartiere
                   FROM pf_potenzialflaeche
              LEFT JOIN geom ON pf_potenzialflaeche.geometrie = geom.id
         LEFT JOIN pf_kampagne ON pf_potenzialflaeche.kampagne = pf_kampagne.id
    LEFT JOIN pf_lagebewertung_verkehr ON pf_potenzialflaeche.fk_lagebewertung_verkehr = pf_lagebewertung_verkehr.id
   LEFT JOIN pf_siedlungsraeumliche_lage ON pf_potenzialflaeche.fk_siedlungsraeumliche_lage = pf_siedlungsraeumliche_lage.id
   LEFT JOIN pf_topografie ON pf_potenzialflaeche.topografie = pf_topografie.id
   LEFT JOIN pf_ausrichtung ON pf_potenzialflaeche.fk_ausrichtung = pf_ausrichtung.id
   LEFT JOIN pf_verwertbarkeit ON pf_potenzialflaeche.fk_verwertbarkeit = pf_verwertbarkeit.id
   LEFT JOIN pf_verfuegbarkeit ON pf_potenzialflaeche.verfuegbarkeit = pf_verfuegbarkeit.id
   LEFT JOIN pf_entwicklungsaussichten ON pf_potenzialflaeche.fk_entwicklungsaussichten = pf_entwicklungsaussichten.id
   LEFT JOIN pf_entwicklungsstand ON pf_potenzialflaeche.fk_entwicklungsstand = pf_entwicklungsstand.id
   LEFT JOIN pf_revitalisierung ON pf_potenzialflaeche.fk_revitalisierung = pf_revitalisierung.id
   LEFT JOIN pf_aeussere_erschliessung ON pf_potenzialflaeche.fk_aeussere_erschliessung = pf_aeussere_erschliessung.id
   LEFT JOIN pf_potenzialart ON pf_potenzialflaeche.fk_potenzialart = pf_potenzialart.id
   LEFT JOIN pf_kategorie ON pf_potenzialflaeche.fk_kategorie = pf_kategorie.id
   LEFT JOIN pf_wohneinheiten ON pf_potenzialflaeche.fk_wohneinheiten = pf_wohneinheiten.id
   LEFT JOIN pf_oepnv ON pf_potenzialflaeche.fk_oepnv = pf_oepnv.id
   LEFT JOIN pf_versiegelung ON pf_potenzialflaeche.fk_versiegelung = pf_versiegelung.id
   LEFT JOIN pf_klimainformationen ON pf_potenzialflaeche.fk_klimainformationen = pf_klimainformationen.id
   LEFT JOIN pf_bauordnungsrecht_genehmigung ON pf_potenzialflaeche.fk_bauordnungsrecht_genehmigung = pf_bauordnungsrecht_genehmigung.id
   LEFT JOIN pf_bauordnungsrecht_baulast ON pf_potenzialflaeche.fk_bauordnungsrecht_baulast = pf_bauordnungsrecht_baulast.id
   LEFT JOIN pf_handlungsdruck ON pf_potenzialflaeche.handlungsdruck = pf_handlungsdruck.id
   LEFT JOIN pf_handlungsprioritaet ON pf_potenzialflaeche.fk_handlungsprioritaet = pf_handlungsprioritaet.id
   LEFT JOIN ( SELECT ('['::text || array_to_string(array_agg(DISTINCT ('"'::text || sub.name::text) || '"'::text), ','::text)) || ']'::text AS bplaene, pf_potenzialflaeche.id AS pf_id
   FROM pf_potenzialflaeche
   LEFT JOIN geom pf_geom ON pf_geom.id = pf_potenzialflaeche.geometrie
   LEFT JOIN ( SELECT bplan_verfahren.nummer AS name, sub_geom.geo_field
      FROM bplan_verfahren
   LEFT JOIN geom sub_geom ON sub_geom.id = bplan_verfahren.geometrie) sub ON sub.geo_field && pf_geom.geo_field AND st_intersects(sub.geo_field, st_buffer(pf_geom.geo_field, (-2)::double precision))
  GROUP BY pf_potenzialflaeche.id, pf_geom.geo_field) bpl ON bpl.pf_id = pf_potenzialflaeche.id
   LEFT JOIN ( SELECT ('['::text || array_to_string(array_agg(DISTINCT ('"'::text || sub.name) || '"'::text), ','::text)) || ']'::text AS wohnlagen, pf_potenzialflaeche.id AS pf_id
   FROM pf_potenzialflaeche
   LEFT JOIN geom pf_geom ON pf_geom.id = pf_potenzialflaeche.geometrie
   LEFT JOIN ( SELECT wohnlage_kategorie.name, sub_geom.geo_field
      FROM wohnlage
   LEFT JOIN geom sub_geom ON sub_geom.id = wohnlage.fk_geometrie
   LEFT JOIN wohnlage_kategorisierung ON wohnlage_kategorisierung.fk_wohnlage = wohnlage.id
   LEFT JOIN wohnlage_kategorie ON wohnlage_kategorie.id = wohnlage_kategorisierung.fk_kategorie) sub ON sub.geo_field && pf_geom.geo_field AND st_intersects(sub.geo_field, st_buffer(pf_geom.geo_field, (-2)::double precision))
  GROUP BY pf_potenzialflaeche.id, pf_geom.geo_field) wl ON wl.pf_id = pf_potenzialflaeche.id
   LEFT JOIN ( SELECT ('['::text || array_to_string(array_agg(DISTINCT ('"'::text || sub.name::text) || '"'::text), ','::text)) || ']'::text AS stadtbezirke, pf_potenzialflaeche.id AS pf_id
   FROM pf_potenzialflaeche
   LEFT JOIN geom pf_geom ON pf_geom.id = pf_potenzialflaeche.geometrie
   LEFT JOIN ( SELECT kst_quartier.name, sub_geom.geo_field
      FROM kst_quartier
   LEFT JOIN geom sub_geom ON sub_geom.id = kst_quartier.georeferenz) sub ON sub.geo_field && pf_geom.geo_field AND st_intersects(sub.geo_field, st_buffer(pf_geom.geo_field, (-2)::double precision))
  GROUP BY pf_potenzialflaeche.id, pf_geom.geo_field) sb ON sb.pf_id = pf_potenzialflaeche.id
   LEFT JOIN ( SELECT ('['::text || array_to_string(array_agg(DISTINCT ('"'::text || sub.name::text) || '"'::text), ','::text)) || ']'::text AS quartiere, pf_potenzialflaeche.id AS pf_id
   FROM pf_potenzialflaeche
   LEFT JOIN geom pf_geom ON pf_geom.id = pf_potenzialflaeche.geometrie
   LEFT JOIN ( SELECT kst_stadtbezirk.name, sub_geom.geo_field
      FROM kst_stadtbezirk
   LEFT JOIN geom sub_geom ON sub_geom.id = kst_stadtbezirk.georeferenz) sub ON sub.geo_field && pf_geom.geo_field AND st_intersects(sub.geo_field, st_buffer(pf_geom.geo_field, (-2)::double precision))
  GROUP BY pf_potenzialflaeche.id, pf_geom.geo_field) q ON q.pf_id = pf_potenzialflaeche.id
  WHERE geom.geo_field IS NOT NULL) xx), ',
'::text)) || ']'::text AS json;

ALTER TABLE daq.potenzialflaechen
  OWNER TO wunda;
GRANT ALL ON TABLE daq.potenzialflaechen TO wunda;
GRANT SELECT ON TABLE daq.potenzialflaechen TO wunda_ro;