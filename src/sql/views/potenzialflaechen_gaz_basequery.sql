create or replace view daq.potenzialflaechen_gaz_basequery as (
        select 
        kampagne,
        kampagne_id,
        veroeffentlichungsstatus,
        '{"sorter":'||(-10000+row_number() OVER (ORDER BY 1))::text
                || ',"string":"'||replace(title,'"','\\"')
                ||'","glyph":"'||glyph::text
                ||'","overlay":"'||overlay::text

                ||'","x":'||x
                || ',"y":' ||y
                || ',"more":' ||moreJSON||'}' json
                    from ( 
        select 
            pf_kampagne.bezeichnung as kampagne,
            pf_kampagne.id as kampagne_id,
            pf_kampagne.veroeffentlichkeitsstatus veroeffentlichungsstatus,
            pf_potenzialflaeche.bezeichnung ||' ('|| pf_kampagne.bezeichnung|| ')' title, 
            'square' as glyph,
            letter as overlay,
            round(st_x(st_centroid(ST_Transform(geo_field,3857)))::numeric, 2) as x,
            round(st_y(st_centroid(ST_Transform(geo_field,3857)))::numeric, 2) as y,
            '{"zl":18,"pid":'||pf_potenzialflaeche.id||'}' as  moreJSON
        from pf_potenzialflaeche join geom on (pf_potenzialflaeche.geometrie=geom.id) join pf_kampagne on (pf_potenzialflaeche.kampagne=pf_kampagne.id)
            where pf_potenzialflaeche.veroeffentlicht = true and pf_kampagne.veroeffentlicht=true
        union
        select 
            pf_kampagne.bezeichnung as kampagne,
            pf_kampagne.id as kampagne_id,
            pf_kampagne.veroeffentlichkeitsstatus veroeffentlichungsstatus,
            letter ||' '||pf_potenzialflaeche.bezeichnung title, 
            'square' as glyph,
            letter as overlay,
            round(st_x(st_centroid(ST_Transform(geo_field,3857)))::numeric, 2) as x,
            round(st_y(st_centroid(ST_Transform(geo_field,3857)))::numeric, 2) as y,
            '{"zl":18,"pid":'||pf_potenzialflaeche.id||'}' as  moreJSON
        from pf_potenzialflaeche join geom on (pf_potenzialflaeche.geometrie=geom.id) join pf_kampagne on (pf_potenzialflaeche.kampagne=pf_kampagne.id)
    where pf_potenzialflaeche.veroeffentlicht = true and pf_kampagne.veroeffentlicht=true
            order by 1) as x
)