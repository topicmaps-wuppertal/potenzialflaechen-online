-- View: daq.potenzialflaechen_gaz

-- DROP VIEW daq.potenzialflaechen_gaz;

CREATE OR REPLACE VIEW daq.potenzialflaechen_gaz AS 
 SELECT ('['::text || array_to_string(ARRAY( SELECT ((((((((((((('{"sorter":'::text || (((-10000) + row_number() OVER (ORDER BY 1::integer))::text)) || ',"string":"'::text) || replace(x.title, '"'::text, '\\"'::text)) || '","glyph":"'::text) || x.glyph) || '","overlay":"'::text) || x."overlay"::text) || '","x":'::text) || x.x) || ',"y":'::text) || x.y) || ',"more":'::text) || x.morejson) || '}'::text
           FROM (         SELECT ((pf_potenzialflaeche.bezeichnung || ' ('::text) || pf_kampagne.bezeichnung) || ')'::text AS title, 'square' AS glyph, pf_kampagne.letter AS "overlay", round(st_x(st_centroid(st_transform(geom.geo_field, 3857)))::numeric, 2) AS x, round(st_y(st_centroid(st_transform(geom.geo_field, 3857)))::numeric, 2) AS y, ('{"zl":18,"pid":'::text || pf_potenzialflaeche.id) || '}'::text AS morejson
                           FROM pf_potenzialflaeche
                      JOIN geom ON pf_potenzialflaeche.geometrie = geom.id
                 JOIN pf_kampagne ON pf_potenzialflaeche.kampagne = pf_kampagne.id
                UNION 
                         SELECT (pf_kampagne.letter::text || ' '::text) || pf_potenzialflaeche.bezeichnung AS title, 'square' AS glyph, pf_kampagne.letter AS "overlay", round(st_x(st_centroid(st_transform(geom.geo_field, 3857)))::numeric, 2) AS x, round(st_y(st_centroid(st_transform(geom.geo_field, 3857)))::numeric, 2) AS y, ('{"zl":18,"pid":'::text || pf_potenzialflaeche.id) || '}'::text AS morejson
                           FROM pf_potenzialflaeche
                      JOIN geom ON pf_potenzialflaeche.geometrie = geom.id
                 JOIN pf_kampagne ON pf_potenzialflaeche.kampagne = pf_kampagne.id
          ORDER BY 1) x), ',
'::text)) || ']'::text AS json;

ALTER TABLE daq.potenzialflaechen_gaz
  OWNER TO wunda;
GRANT ALL ON TABLE daq.potenzialflaechen_gaz TO wunda;
GRANT SELECT ON TABLE daq.potenzialflaechen_gaz TO wunda_ro;