import { useContext } from "react";
import {
  FeatureCollectionContext,
  FeatureCollectionDispatchContext,
} from "react-cismap/contexts/FeatureCollectionContextProvider";
import GenericInfoBoxFromFeature from "react-cismap/topicmaps/GenericInfoBoxFromFeature";
import InfoBoxHeader from "react-cismap/topicmaps/InfoBoxHeader";
import itemFilterFunction from "../utils/filterFunction";
const InfoBox = (props) => {
  const featureCollectionContext = useContext(FeatureCollectionContext);
  const { setSelectedFeatureByPredicate } = useContext(FeatureCollectionDispatchContext);
  const {
    shownFeatures = [],
    selectedFeature,
    allFeatures = 0,
    filteredItems = [],
    filterState,
  } = featureCollectionContext;

  const overlappingHeaders = [];
  let counter = 1;
  const isActive = itemFilterFunction({ filterState });

  if (selectedFeature?.properties?.overlapping) {
    for (const overlap of selectedFeature.properties.overlapping) {
      if (isActive(overlap)) {
        overlappingHeaders.push(
          <div
            style={{
              width: 350,
              paddingBottom: 3,
              paddingLeft: counter * 5,

              cursor: "pointer", //is a hand
            }}
            onClick={() => {
              setSelectedFeatureByPredicate((feature) => {
                return feature?.properties?.id === overlap.id;
              });
            }}
          >
            <InfoBoxHeader
              headerColor={overlap.kampagne.color}
              content={overlap.kampagne.bezeichnung}
            ></InfoBoxHeader>
          </div>
        );
      }
      counter++;
    }
  }

  return (
    <div>
      <GenericInfoBoxFromFeature {...props} secondaryInfoBoxElements={overlappingHeaders} />
    </div>
  );
};

export default InfoBox;
