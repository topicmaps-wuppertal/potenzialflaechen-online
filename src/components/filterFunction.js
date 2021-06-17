const itemFilterFunction = ({ filterState }) => {
  return (item) => {
    return filterState?.kampagnen?.includes(item.kampagne.bezeichnung);
  };
};
export default itemFilterFunction;
