const convert = (_item) => {
  const item = JSON.parse(JSON.stringify(_item));

  const geometry = item?.geojson;
  const selected = false;
  const type = "Feature";
  const text = item?.bezeichnung;

  item.color = item?.kampagne?.color;

  const info = {
    header: item?.kampagne?.bezeichnung,
    title: text,
    subtitle:
      "<html><div><b>Nummer:</b> " +
      item?.nummer +
      "</div><div><b>Größe:</b> " +
      parseInt(item?.groesse, 10).toLocaleString() +
      " m²</div></html>",
  };
  item.info = info;

  return {
    id: item.id,
    text,
    type,
    selected,
    geometry,
    crs: geometry?.crs || {
      type: "name",
      properties: {
        name: "urn:ogc:def:crs:EPSG::25832",
      },
    },
    properties: item,
  };
};
export default convert;
