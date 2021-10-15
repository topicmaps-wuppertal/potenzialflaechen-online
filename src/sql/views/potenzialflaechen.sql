create or replace view daq.potenzialflaechen as (

select '['||array_to_string(array(   
        select json from daq.potenzialflaechen_basequery
    ), ',\n')||']' as json
);
 