create or replace view daq.potenzialflaechen_gaz as (
    select '['||array_to_string(array(   
        select json from daq.potenzialflaechen_gaz_basequery
    ), ',\n')||']' as json
)


