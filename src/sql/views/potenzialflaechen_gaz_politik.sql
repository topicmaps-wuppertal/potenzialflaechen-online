create or replace view daq.potenzialflaechen_gaz_politik as (
    select '['||array_to_string(array(   
        select json from daq.potenzialflaechen_gaz_basequery
        where kampagne in ('Gewerbepotenzialflächen','Wohnbaupotenzialflächen','Brachflächen','Baulücken')
    ), ',\n')||']' as json
)


