import "bootstrap/dist/css/bootstrap.min.css";
import Color from "color";
import "leaflet/dist/leaflet.css";
import React, { useContext } from "react";
import "react-bootstrap-typeahead/css/Typeahead.css";
import {
  FeatureCollectionContext,
  FeatureCollectionDispatchContext,
} from "react-cismap/contexts/FeatureCollectionContextProvider";
import { TopicMapDispatchContext } from "react-cismap/contexts/TopicMapContextProvider";
import { md5FetchText } from "react-cismap/tools/fetching";
import { getGazDataForTopicIds } from "react-cismap/tools/gazetteerHelper";
import { defaultLayerConf } from "react-cismap/tools/layerFactory";
import "react-cismap/topicMaps.css";
import GenericInfoBoxFromFeature from "react-cismap/topicmaps/GenericInfoBoxFromFeature";
import TopicMapComponent from "react-cismap/topicmaps/TopicMapComponent";
import "./App.css";
import FeatureCollection from "./components/FeatureCollection";
import MyMenu from "./components/Menu";
import InfoPanel from "./components/SecondaryInfo";

const LogSelection = () => {
  const { selectedFeature } = useContext(FeatureCollectionContext);
  console.log("selectedFeature.properties", selectedFeature?.properties);

  return <div></div>;
};

// import consolere from "console-remote-client";

// consolere.connect({
//   server: "http://bender:8088",
//   channel: "pf", // required
//   redirectDefaultConsoleToRemote: false, // optional, default: false
//   disableDefaultConsoleOutput: false, // optional, default: false
// });

// console.re.log("S T A R T");

const baseLayerConf = { ...defaultLayerConf };
baseLayerConf.namedLayers.cismetLight = {
  type: "vector",
  style: "https://omt.map-hosting.de/styles/cismet-light/style.json",
};

const host = "https://wupp-topicmaps-data.cismet.de";
const selectionColor = new Color("#2664D8");
export const appKey = "Potenzialflaechen.Online.Wuppertal";
const getGazData = async (setStaticGazData) => {
  const prefix = "GazDataForStories";
  const sources = {};

  sources.adressen = await md5FetchText(prefix, host + "/data/3857/adressen.json");
  sources.bezirke = await md5FetchText(prefix, host + "/data/3857/bezirke.json");
  sources.quartiere = await md5FetchText(prefix, host + "/data/3857/quartiere.json");
  sources.pois = await md5FetchText(prefix, host + "/data/3857/pois.json");
  sources.kitas = await md5FetchText(prefix, host + "/data/3857/kitas.json");

  const gazData = getGazDataForTopicIds(sources, [
    "pois",
    "kitas",
    "bezirke",
    "quartiere",
    "adressen",
  ]);

  setStaticGazData(gazData);
};

function PotenzialflaechenOnlineMap({ gazData, jwt, setJWT, setLoginInfo }) {
  const { setSelectedFeatureByPredicate } = useContext(FeatureCollectionDispatchContext);
  const { zoomToFeature } = useContext(TopicMapDispatchContext);
  return (
    <TopicMapComponent
      mapStyle={{ backgroundColor: "white" }}
      gazData={gazData}
      homeZoom={13}
      maxZoom={22}
      locatorControl={true}
      modalMenu={<MyMenu />}
      //backgroundlayers='wupp-plan-live@40'
      // backgroundlayers='OMT_Klokantech_basic'
      // 'trueOrtho2020@20'
      infoBox={
        <GenericInfoBoxFromFeature
          pixelwidth={350}
          config={{
            displaySecondaryInfoAction: true,
            city: "Wuppertal",
            navigator: {
              noun: {
                singular: "Potenzialfläche",
                plural: "Potenzialflächen",
              },
            },
            noCurrentFeatureTitle: "Keine Potenzialflächen gefunden",
            noCurrentFeatureContent: "",
          }}
        />
      }
      secondaryInfo={<InfoPanel />}
      gazetteerHitTrigger={(hits) => {
        if (Array.isArray(hits) && hits[0]?.more?.pid) {
          setSelectedFeatureByPredicate((feature) => {
            try {
              const check = parseInt(feature.properties.id) === hits[0].more.pid;
              if (check === true) {
                zoomToFeature(feature);
              }
              return check;
            } catch (e) {
              return false;
            }
          });
        }
      }}
    >
      <FeatureCollection jwt={jwt} setJWT={setJWT} setLoginInfo={setLoginInfo} />
      {/* <LogSelection /> */}
    </TopicMapComponent>
  );
}

export default PotenzialflaechenOnlineMap;
