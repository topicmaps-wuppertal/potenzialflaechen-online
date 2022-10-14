
create or replace view daq.potenzialflaechen_basequery as (
    select 
           kampagnenname kampagne,
            kampagne_id,
            veroeffentlichungsstatus,
            '{"id":"'||id ||'",'||
            case when bezeichnung is not null                   and position(',bezeichnung,'in allowed_attributes)<> 0                      then '"bezeichnung":"'||bezeichnung||'",' else '' END ||
            case when nummer is not null                        and position(',nummer,'in allowed_attributes)<> 0                           then '"nummer":"'||nummer||'",' else '' END ||        
            case when beschreibung_flaeche is not null          and position(',beschreibung_flaeche,'in allowed_attributes)<> 0             then '"beschreibung_flaeche":"'||regexp_replace(regexp_replace(regexp_replace(beschreibung_flaeche, '\n', '\\n','g'),'"','\\"','g'), '\t', ' ','g')||'",' else '' END ||        
            case when notwendige_massnahmen is not null         and position(',notwendige_massnahmen,'in allowed_attributes)<> 0            then '"notwendige_massnahmen":"'||regexp_replace(regexp_replace(regexp_replace(notwendige_massnahmen, '\n', '\\n','g'),'"','\\"','g'), '\t', ' ','g')||'",' else '' END ||        
            case when quelle is not null                        and position(',quelle,'in allowed_attributes)<> 0                           then '"quelle":"'||regexp_replace(regexp_replace(regexp_replace(quelle, '\n', '\\n','g'),'"','\\"','g'), '\t', ' ','g')||'",' else '' END ||        
            case when bestand_bebauung is not null              and position(',vorhandene_bebauung,'in allowed_attributes)<> 0              then '"bestand_bebauung":"'||bestand_bebauung||'",' else '' END ||   
            case when anzahl_wohneinheiten is not null          and position(',wohneinheiten_anzahl,'in allowed_attributes)<> 0             then '"anzahl_wohneinheiten":"'||anzahl_wohneinheiten||'",' else '' END ||        
            case when festsetzungen_bplan is not null           and position(',festsetzungen_bplan,'in allowed_attributes)<> 0              then '"festsetzungen_bplan":"'||regexp_replace(regexp_replace(regexp_replace(festsetzungen_bplan, '\n', '\\n','g'),'"','\\"','g'), '\t', ' ','g')||'",' else '' END ||        
            case when stand_bauordnungsrecht is not null        and position(',bauordnungsrecht_stand,'in allowed_attributes)<> 0           then '"stand_bauordnungsrecht":"'||stand_bauordnungsrecht||'",' else '' END ||        
            case when stand is not null                         and position(',stand,'in allowed_attributes)<> 0                            then '"stand":"'||stand||'",' else '' END ||        
            case when jahr_brachflaeche is not null             and position(',jahr_nutzungsaufgabe,'in allowed_attributes)<> 0             then '"jahr_brachflaeche":"'||jahr_brachflaeche||'",' else '' END ||                
            case when kampagne_id is not null                                                                                               then '"kampagne_id":'||kampagne_id||',' else '' END ||
            case when kampagne is not null                                                                                                  then '"kampagne":'||kampagne||',' else '' END ||
            case when lagebewertung_verkehr is not null         and position(',lagebewertung_verkehr,'in allowed_attributes)<> 0            then '"lagebewertung_verkehr":"'||lagebewertung_verkehr||'",' else '' END ||        
            case when siedlungsraeumliche_lage is not null      and position(',siedlungsraeumliche_lage,'in allowed_attributes)<> 0         then '"siedlungsraeumliche_lage":"'||siedlungsraeumliche_lage||'",' else '' END || 
            case when topografie is not null                    and position(',topografie,'in allowed_attributes)<> 0                       then '"topografie":"'||topografie||'",' else '' END ||        
            case when hang is not null                          and position(',hang,'in allowed_attributes)<> 0                             then '"hang":"'||hang||'",' else '' END ||        
            case when verwertbarkeit is not null                and position(',verwertbarkeit,'in allowed_attributes)<> 0                   then '"verwertbarkeit":"'||verwertbarkeit||'",' else '' END ||        
            case when verfuegbarkeit is not null                and position(',verfuegbbarkeit,'in allowed_attributes)<> 0                   then '"verfuegbbarkeit":"'||verfuegbarkeit||'",' else '' END ||               
            case when entwicklungsaussichten is not null        and position(',entwicklungsausssichten,'in allowed_attributes)<> 0           then '"entwicklungsausssichten":"'||entwicklungsaussichten||'",' else '' END ||        
            case when entwicklungsstand is not null             and position(',entwicklungsstand,'in allowed_attributes)<> 0                then '"entwicklungsstand":"'||entwicklungsstand||'",' else '' END ||   
            case when revitalisierung is not null               and position(',revitalisierung,'in allowed_attributes)<> 0                  then '"revitalisierung":"'||revitalisierung||'",' else '' END ||        
            case when aeussere_erschliessung is not null        and position(',aeussere_erschliessung,'in allowed_attributes)<> 0           then '"aeussere_erschliessung":"'||aeussere_erschliessung||'",' else '' END ||        
            case when potenzialart is not null                  and position(',potenzialart,'in allowed_attributes)<> 0                     then '"potenzialart":"'||potenzialart||'",' else '' END ||        
            case when kategorie is not null                     and position(',kategorie,'in allowed_attributes)<> 0                        then '"kategorie":"'||kategorie||'",' else '' END ||        
            case when wohneinheiten is not null                 and position(',wohneinheiten,'in allowed_attributes)<> 0                    then '"wohneinheiten":"'||wohneinheiten||'",' else '' END ||        
            case when oepnv is not null                         and position(',oepnv_anbindung,'in allowed_attributes)<> 0                  then '"oepnv":"'||oepnv||'",' else '' END ||        
            case when versiegelung is not null                  and position(',versiegelung,'in allowed_attributes)<> 0                     then '"versiegelung":"'||versiegelung||'",' else '' END ||        
            case when klimainformationen is not null            and position(',klimainformationen,'in allowed_attributes)<> 0               then '"klimainformationen":"'||klimainformationen||'",' else '' END ||        
            -- case when bauordnungsrecht_genehmigung is not null  and position(',bauordnungsrecht_genehmigung,'in allowed_attributes)<> 0     then '"bauordnungsrecht_genehmigung":"'||bauordnungsrecht_genehmigung||'",' else '' END ||        
            case when bauordnungsrecht_baulast is not null      and position(',bauordnungsrecht_baulast,'in allowed_attributes)<> 0         then '"bauordnungsrecht_baulast":"'||bauordnungsrecht_baulast||'",' else '' END ||        
            case when handlungsdruck is not null                and position(',handlungsdruck,'in allowed_attributes)<> 0                   then '"handlungsdruck":"'||handlungsdruck||'",' else '' END ||        
            case when handlungsprioritaet is not null           and position(',handlungsprioritaet,'in allowed_attributes)<> 0              then '"handlungsprioritaet":"'||handlungsprioritaet||'",' else '' END ||        
            case when eigentuemer is not null                   and position(',eigentuemer,'in allowed_attributes)<> 0                      then '"eigentuemer":'||eigentuemer||',' else '' END ||
            case when umgebungsnutzung is not null              and position(',umgebungsnutzung,'in allowed_attributes)<> 0                 then '"umgebungsnutzung":'||umgebungsnutzung||',' else '' END ||
            case when bisherige_nutzung is not null             and position(',bisherige_nutzung,'in allowed_attributes)<> 0                then '"bisherige_nutzung":'||bisherige_nutzung||',' else '' END ||
            case when naehe_zu is not null                      and position(',naehe_zu,'in allowed_attributes)<> 0                         then '"naehe_zu":'||naehe_zu||',' else '' END ||
            case when brachflaechen is not null                 and position(',brachflaechenkategorie,'in allowed_attributes)<> 0           then '"brachflaechen":'||brachflaechen||',' else '' END ||
            case when empfohlene_nutzungen is not null          and position(',empfohlene_nutzungen,'in allowed_attributes)<> 0             then '"empfohlene_nutzungen":'||empfohlene_nutzungen||',' else '' END ||
            case when empfohlene_nutzungen_wohnen is not null   and position(',empfohlene_nutzungen_wohnen,'in allowed_attributes)<> 0      then '"empfohlene_nutzungen_wohnen":'||empfohlene_nutzungen_wohnen||',' else '' END ||
            case when restriktionen is not null                 and position(',restriktionen,'in allowed_attributes)<> 0                    then '"restriktionen":'||restriktionen||',' else '' END ||
            case when bplaene <> '[]'                           and position(',bebauungsplan,'in allowed_attributes)<> 0                    then '"bplaene":'||bplaene||',' else '' END ||
            case when flurstuecke <> '[]'                       and position(',flurstuecke,'in allowed_attributes)<> 0                      then '"flurstuecke":'||flurstuecke||',' else '' END ||
            case when stadtraumtypen <> '[]'                    and position(',stadtraumtypen,'in allowed_attributes)<> 0                   then '"stadtraumtypen":'||stadtraumtypen||',' else '' END ||
            case when wohnlagen <> '[]'                         and position(',wohnlagen,'in allowed_attributes)<> 0                        then '"wohnlagen":'||wohnlagen||',' else '' END ||
            case when stadtbezirke <> '[]'                      and position(',stadtbezirk,'in allowed_attributes)<> 0                      then '"stadtbezirke":'||stadtbezirke||',' else '' END ||
            case when quartiere <> '[]'                         and position(',quartier,'in allowed_attributes)<> 0                         then '"quartiere":'||quartiere||',' else '' END ||
            case when regionalplan <> '[]'                      and position(',regionalplan,'in allowed_attributes)<> 0                     then '"regionalplan":'||regionalplan||',' else '' END ||
            --case when fnp <> '[]'                               and position(',fnp,'in allowed_attributes)<> 0                     then '"fnp":'||regionalplan||',' else '' END ||

            '"geojson":'||geojson||','||

             '"groesse":'||groesse::text||


            '}' json

                from (
                    SELECT 
                    pf_kampagne.bezeichnung kampagnenname,
                    pf_kampagne.veroeffentlichkeitsstatus veroeffentlichungsstatus,
                    pf_potenzialflaeche.id,
                    pf_potenzialflaeche.veroeffentlicht,
                    pf_potenzialflaeche.bezeichnung,
                    pf_potenzialflaeche.nummer,
                    pf_potenzialflaeche.kampagne kampagne_id,
                                    (select '{"id":"'||id ||'",'||
                            case when bezeichnung is not null then '"bezeichnung":"'||bezeichnung||'",' else '' END ||
                            case when order_by is not null then '"order_by":"'||order_by||'",' else '' END ||

                            case when colorcode is not null then '"color":"'||colorcode||'",' else '' END ||
                            case when beschreibung is not null then '"beschreibung":"'||regexp_replace(regexp_replace(regexp_replace(beschreibung, '\n', '\\n','g'),'"','\\"','g'), '\t', ' ','g')||'",' else '' END ||
                            case when veroeffentlichkeitsstatus is not null then '"veroeffentlichkeitsstatus":"'||veroeffentlichkeitsstatus||'",' else '' END ||
                            case when haupt_steckbrieftemplate_id is not null then '"haupt_steckbrieftemplate_id":'||haupt_steckbrieftemplate_id||'' else '' END ||
                            '}'
                                from (
                                    select 
                                        pf_kampagne.id,
                                        bezeichnung,
                                        pf_kampagne.order_by,
                                        colorcode,
                                        beschreibung,
                                        pf_veroeffentlichkeitsstatus."name" veroeffentlichkeitsstatus,
                                        haupt_steckbrieftemplate_id
                                    from pf_kampagne 
                                        left join pf_veroeffentlichkeitsstatus on pf_kampagne.veroeffentlichkeitsstatus=pf_veroeffentlichkeitsstatus.id
                                    where pf_kampagne.id=pf_potenzialflaeche.kampagne
                    )x) kampagne,
                    ','||lower(pf_steckbrieftemplate.verwendete_flaechenattribute)||',' allowed_attributes,
                    pf_potenzialflaeche.beschreibung_flaeche,
                    pf_potenzialflaeche.notwendige_massnahmen,
                    pf_potenzialflaeche.interne_hinweise,
                    pf_potenzialflaeche.quelle,
                    pf_potenzialflaeche.bestand_bebauung,
                    pf_potenzialflaeche.anzahl_wohneinheiten,
                    pf_potenzialflaeche.festsetzungen_bplan,
                    pf_potenzialflaeche.stand_bauordnungsrecht,
                    pf_potenzialflaeche.stand,
                    pf_potenzialflaeche.jahr_brachflaeche,
                    ST_AsGeoJSON(geom.geo_field,2,4) geojson,
                                    pf_lagebewertung_verkehr.name lagebewertung_verkehr,
                    pf_siedlungsraeumliche_lage.name siedlungsraeumliche_lage,
                    pf_topografie.name topografie,
                    pf_ausrichtung.name hang,
                    pf_verwertbarkeit.name verwertbarkeit,
                    pf_verfuegbarkeit.name verfuegbarkeit,
                    pf_entwicklungsaussichten.name entwicklungsaussichten,
                    pf_entwicklungsstand.name entwicklungsstand,
                    pf_revitalisierung.name revitalisierung,
                    pf_aeussere_erschliessung.name aeussere_erschliessung,
                    pf_potenzialart."name" potenzialart,
                    pf_kategorie.name kategorie,
                    pf_wohneinheiten."name" wohneinheiten,
                    pf_oepnv.name oepnv,
                    pf_versiegelung.name versiegelung,
                    pf_klimainformationen.name klimainformationen,
                    pf_bauordnungsrecht_genehmigung."name" bauordnungsrecht_genehmigung,
                    pf_bauordnungsrecht_baulast.name bauordnungsrecht_baulast,
                    pf_handlungsdruck.name handlungsdruck,
                    pf_handlungsprioritaet.name handlungsprioritaet,
                                    (select  '['||array_to_string(array_agg('"'||name||'"'),', ')||']' from pf_eigentuemer JOIN pf_eigentuemer_arr on pf_eigentuemer.id=pf_eigentuemer_arr.fk_eigentuemer where pf_eigentuemer_arr.pf_potenzialflaeche_reference=pf_potenzialflaeche.id) eigentuemer,
                    (select  '['||array_to_string(array_agg('"'||name||'"'),', ')||']' from pf_nutzung JOIN pf_potenzialflaechen_bisherige_nutzung on pf_nutzung.id=pf_potenzialflaechen_bisherige_nutzung.nutzung where pf_potenzialflaechen_bisherige_nutzung.pf_potenzialflaeche_reference=pf_potenzialflaeche.id) bisherige_nutzung,
                    (select  '['||array_to_string(array_agg('"'||name||'"'),', ')||']' from pf_nutzung JOIN pf_potenzialflaechen_umgebungsnutzung on pf_nutzung.id=pf_potenzialflaechen_umgebungsnutzung.nutzung where pf_potenzialflaechen_umgebungsnutzung.pf_potenzialflaeche_reference=pf_potenzialflaeche.id) umgebungsnutzung,
                    (select  '['||array_to_string(array_agg('"'||name||'"'),', ')||']' from pf_naehe_zu JOIN  pf_naehen_zu on pf_naehe_zu.id=pf_naehen_zu.fk_naehe_zu where pf_naehen_zu.pf_potenzialflaeche_reference=pf_potenzialflaeche.id) naehe_zu,
                    (select  '['||array_to_string(array_agg('"'||name||'"'),', ')||']' from pf_brachflaeche JOIN  pf_brachflaechen on pf_brachflaeche.id=pf_brachflaechen.fk_brachflaeche where pf_brachflaechen.pf_potenzialflaeche_reference=pf_potenzialflaeche.id) brachflaechen,
                    (select  '['||array_to_string(array_agg('"'||name||'"'),', ')||']' from pf_empfohlene_nutzung JOIN  pf_empfohlene_nutzungen on pf_empfohlene_nutzung.id=pf_empfohlene_nutzungen.fk_empfohlene_nutzung where pf_empfohlene_nutzungen.pf_potenzialflaeche_reference=pf_potenzialflaeche.id) empfohlene_nutzungen,
                    (select  '['||array_to_string(array_agg('"'||name||'"'),', ')||']' from pf_empfohlene_nutzung_wohnen JOIN  pf_empfohlene_nutzungen_wohnen on pf_empfohlene_nutzung_wohnen.id=pf_empfohlene_nutzungen_wohnen.fk_empfohlene_nutzung_wohnen where pf_empfohlene_nutzungen_wohnen.pf_potenzialflaeche_reference=pf_potenzialflaeche.id) empfohlene_nutzungen_wohnen,
                    (select  '['||array_to_string(array_agg('"'||name||'"'),', ')||']' from pf_restriktion JOIN  pf_restriktionen on pf_restriktion.id=pf_restriktionen.fk_restriktion where pf_restriktionen.pf_potenzialflaeche_reference=pf_potenzialflaeche.id)restriktionen

                    --- berechnungen und subselects
                    ,
                    round(st_area(geom.geo_field))::text groesse,
                    FSTCK.flurstuecke,
                    BPL.bplaene,
                    SRT.stadtraumtypen,
                    WL.wohnlagen,
                    SB.stadtbezirke,
                    Q.quartiere,
                    RPD.regionalplan
                    --,FNP.fnp

                    FROM pf_potenzialflaeche
                    LEFT JOIN geom ON pf_potenzialflaeche.geometrie = geom.id
                    LEFT JOIN pf_kampagne ON pf_potenzialflaeche.kampagne = pf_kampagne.id
                    LEFT JOIN pf_steckbrieftemplate ON pf_kampagne.haupt_steckbrieftemplate_id=pf_steckbrieftemplate.id
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

                    -- unterabfragen
                     LEFT JOIN 
                         (SELECT '['||array_to_string(array_agg(DISTINCT '"'||sub.name||'"'::text),',')||']' flurstuecke, pf_potenzialflaeche.id AS pf_id
                         FROM pf_potenzialflaeche LEFT JOIN geom pf_geom ON pf_geom.id = pf_potenzialflaeche.geometrie
                         LEFT JOIN ( 
                                 SELECT alkis_landparcel.alkis_id AS name, sub_geom.geo_field 
                                 FROM alkis_landparcel LEFT JOIN geom sub_geom ON sub_geom.id = alkis_landparcel.geometrie
                         ) sub ON sub.geo_field && pf_geom.geo_field and st_intersects(sub.geo_field,st_buffer(pf_geom.geo_field,-2)) GROUP BY pf_potenzialflaeche.id, pf_geom.geo_field) FSTCK
                         ON FSTCK.pf_id=pf_potenzialflaeche.id
                    LEFT JOIN 
                        (SELECT '['||array_to_string(array_agg(DISTINCT '"'||sub.name||'"'::text),',')||']' bplaene, pf_potenzialflaeche.id AS pf_id
                        FROM pf_potenzialflaeche LEFT JOIN geom pf_geom ON pf_geom.id = pf_potenzialflaeche.geometrie 
                        LEFT JOIN ( 
                                SELECT bplan_verfahren.nummer AS name, sub_geom.geo_field
                                FROM bplan_verfahren
                                LEFT JOIN geom sub_geom ON sub_geom.id = bplan_verfahren.geometrie
                        ) sub ON sub.geo_field && pf_geom.geo_field and st_intersects(sub.geo_field, st_buffer(pf_geom.geo_field,-3)) GROUP BY pf_potenzialflaeche.id, pf_geom.geo_field) BPL 
                        ON BPL.pf_id=pf_potenzialflaeche.id
                     LEFT JOIN
                         (SELECT '['||array_to_string(array_agg(DISTINCT '"'||sub.name||'"'::text),',')||']' stadtraumtypen, pf_potenzialflaeche.id AS pf_id
                         FROM pf_potenzialflaeche
                         LEFT JOIN geom pf_geom ON pf_geom.id = pf_potenzialflaeche.geometrie LEFT JOIN ( 
                                 SELECT srt_kategorie.bezeichnung AS name, sub_geom.geo_field
                                 FROM srt_kategorie
                                 LEFT JOIN srt_flaeche ON srt_flaeche.fk_kategorie = srt_kategorie.id
                                 LEFT JOIN geom sub_geom ON sub_geom.id = srt_flaeche.fk_geom
                         ) sub ON sub.geo_field && pf_geom.geo_field and st_intersects(sub.geo_field,st_buffer(pf_geom.geo_field,-2)) GROUP BY pf_potenzialflaeche.id, pf_geom.geo_field) SRT
                                            ON SRT.pf_id=pf_potenzialflaeche.id               
                    LEFT JOIN
                        (SELECT '['||array_to_string(array_agg(DISTINCT '"'||sub.name||'"'::text),',')||']' wohnlagen, pf_potenzialflaeche.id AS pf_id
                        FROM pf_potenzialflaeche LEFT JOIN geom pf_geom ON pf_geom.id = pf_potenzialflaeche.geometrie
                        LEFT JOIN ( 
                        SELECT wohnlage_kategorie.name, sub_geom.geo_field
                        FROM wohnlage_flaeche 
                        LEFT JOIN wohnlage_kategorie ON wohnlage_kategorie.id = wohnlage_flaeche.fk_wohnlage_kategorie 
                        LEFT JOIN geom sub_geom ON sub_geom.id = wohnlage_flaeche.fk_geom 
                        ) sub ON sub.geo_field && pf_geom.geo_field and st_intersects(sub.geo_field,st_buffer(pf_geom.geo_field,-2)) GROUP BY pf_potenzialflaeche.id, pf_geom.geo_field) WL
                        ON WL.pf_id=pf_potenzialflaeche.id
                    LEFT JOIN
                        (SELECT '['||array_to_string(array_agg(DISTINCT '"'||sub.name||'"'::text),',')||']' quartiere, pf_potenzialflaeche.id AS pf_id
                        FROM pf_potenzialflaeche LEFT JOIN geom pf_geom ON pf_geom.id = pf_potenzialflaeche.geometrie
                        LEFT JOIN ( 
                                SELECT kst_quartier.name, sub_geom.geo_field
                                FROM kst_quartier
                                LEFT JOIN geom sub_geom ON sub_geom.id = kst_quartier.georeferenz
                        ) sub ON sub.geo_field && pf_geom.geo_field and st_intersects(sub.geo_field, st_buffer(pf_geom.geo_field,-2)) GROUP BY pf_potenzialflaeche.id, pf_geom.geo_field) Q
                         ON Q.pf_id=pf_potenzialflaeche.id
                    LEFT JOIN
                        (SELECT '['||array_to_string(array_agg(DISTINCT '"'||sub.name||'"'::text),',')||']' stadtbezirke, pf_potenzialflaeche.id AS pf_id
                        FROM pf_potenzialflaeche LEFT JOIN geom pf_geom ON pf_geom.id = pf_potenzialflaeche.geometrie
                        LEFT JOIN ( 
                                SELECT kst_stadtbezirk.name, sub_geom.geo_field
                                FROM kst_stadtbezirk
                                LEFT JOIN geom sub_geom ON sub_geom.id = kst_stadtbezirk.georeferenz
                        ) sub ON sub.geo_field && pf_geom.geo_field and st_intersects(sub.geo_field, st_buffer(pf_geom.geo_field,-2)) GROUP BY pf_potenzialflaeche.id, pf_geom.geo_field) SB
                        ON SB.pf_id=pf_potenzialflaeche.id
                    LEFT JOIN
                        (SELECT '['||array_to_string(array_agg(DISTINCT '"'||sub.name||'"'::text),',')||']' regionalplan, pf_potenzialflaeche.id AS pf_id
                        FROM pf_potenzialflaeche LEFT JOIN geom pf_geom ON pf_geom.id = pf_potenzialflaeche.geometrie LEFT JOIN ( 
                            SELECT rpd_kategorie.bezeichnung AS name, sub_geom.geo_field 
                            FROM rpd_flaeche 
                            LEFT JOIN rpd_kategorie ON rpd_flaeche.fk_kategorie = rpd_kategorie.id 
                            LEFT JOIN geom sub_geom ON sub_geom.id = rpd_flaeche.fk_geom
                        ) sub ON (
                            st_intersects(sub.geo_field, st_buffer(pf_geom.geo_field, (-2)::double precision)) 
                            AND st_area(st_intersection(sub.geo_field, pf_geom.geo_field)) > st_area(pf_geom.geo_field) * 0.2
                        )
                        GROUP BY pf_potenzialflaeche.id, pf_geom.geo_field) RPD
                        ON RPD.pf_id=pf_potenzialflaeche.id
    --                  LEFT JOIN
    --                     (SELECT '['||array_to_string(array_agg(DISTINCT '"'||sub.name||'"'::text),',')||']' fnp, pf_potenzialflaeche.id AS pf_id
    --                     FROM pf_potenzialflaeche LEFT JOIN geom pf_geom ON pf_geom.id = pf_potenzialflaeche.geometrie 
    --                     LEFT JOIN ( 
    --                         SELECT fnp_hn_kategorie.nutzung AS name, sub_geom.geo_field
    --                         FROM fnp_hn_kategorie
    --                         LEFT JOIN fnp_hn_flaeche ON fnp_hn_flaeche.fk_fnp_hn_kategorie = fnp_hn_kategorie.id 
    --                         LEFT JOIN geom sub_geom ON sub_geom.id = fnp_hn_flaeche.fk_geom
    --                     ) sub ON (
    --                         st_intersects(sub.geo_field, st_buffer(pf_geom.geo_field, (-2)::double precision)) 
    --                          AND st_area(st_intersection(sub.geo_field, pf_geom.geo_field)) > st_area(pf_geom.geo_field) * 0.1
    --                         
    --                     )
    --                     GROUP BY pf_potenzialflaeche.id, pf_geom.geo_field) FNP
    --                     ON FNP.pf_id=pf_potenzialflaeche.id
        where geo_field is not null
    and pf_potenzialflaeche.veroeffentlicht = true and pf_kampagne.veroeffentlicht=true
    order by pf_kampagne.order_by, pf_potenzialflaeche.nummer
    )  xx
);


