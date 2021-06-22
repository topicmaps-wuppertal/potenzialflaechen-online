import { useContext, useEffect } from "react";
import { FeatureCollectionDispatchContext } from "react-cismap/contexts/FeatureCollectionContextProvider";
import {
  TopicMapContext,
  TopicMapDispatchContext,
} from "react-cismap/contexts/TopicMapContextProvider";
import FeatureCollection from "react-cismap/FeatureCollection";
import { md5ActionFetchDAQ } from "react-cismap/tools/fetching";

const FC = ({ jwt, setJWT, setLoginInfo }) => {
  const { zoomToFeature } = useContext(TopicMapDispatchContext);
  const { routedMapRef } = useContext(TopicMapContext);
  const { setItems, setMetaInformation } = useContext(FeatureCollectionDispatchContext);

  useEffect(() => {
    if (jwt !== undefined) {
      md5ActionFetchDAQ(
        "potenzialflaechen-online",
        "https://potenzialflaechen-online-api.cismet.de",
        jwt,
        "potenzialflaechen"
      )
        .then(
          (result) => {
            setItems(result.data);
            setMetaInformation({ time: result.time });
          },
          (problem) => {
            if (problem.status === 401) {
              setJWT(undefined);
              setLoginInfo({ color: "#F9D423", text: "Bitte melden Sie sich erneut an." });
              setTimeout(() => {
                setLoginInfo();
              }, 2500);
            }
            setItems([]);
            setMetaInformation();
          }
        )
        .catch((e) => {
          console.log("xxx error ", e);
        });
    } else {
      setItems([]);
    }
  }, [jwt]);
  return (
    <FeatureCollection
      featureClickHandler={(event) => {
        event.originalEvent.stopImmediatePropagation();
        //console.log("yyy featureClick", event, new Error("StackTrace"));
        const nonce = Math.round(Math.random() * 100);
        // console.re.log(
        //   nonce + ":yyy event.originalEvent._simulated",
        //   event.originalEvent._simulated
        // );
        // console.log("yyy event.targetTouches", event.originalEvent.targetTouches);
        // if (!event.originalEvent._simulated) {
        const feature = event.target.feature;

        if (feature.selected === true) {
          // const before = JSON.stringify(routedMapRef.leafletMap.leafletElement.getBounds());

          // const checkAfterBoundsChanged = (e) => {
          //   console.log("e", e);

          //   const after = JSON.stringify(routedMapRef.leafletMap.leafletElement.getBounds());
          //   if (after === before) {

          //   }
          // };
          // routedMapRef.leafletMap.leafletElement.on("moveend", checkAfterBoundsChanged);
          // // routedMapRef.leafletMap.leafletElement.on("zoomend", checkAfterBoundsChanged);
          zoomToFeature(event.target.feature);

          // routedMapRef.leafletMap.leafletElement.off("moveend", checkAfterBoundsChanged);
          // // routedMapRef.leafletMap.leafletElement.off("zoomend", checkAfterBoundsChanged);
        }
        // }
      }}
    />
  );
};

export default FC;
