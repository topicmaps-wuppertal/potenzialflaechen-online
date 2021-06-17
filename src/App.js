import Color from "color";
import { useEffect, useState } from "react";
import { MappingConstants } from "react-cismap";
import TopicMapContextProvider from "react-cismap/contexts/TopicMapContextProvider";
import { md5FetchText } from "react-cismap/tools/fetching";
import { getGazDataForTopicIds } from "react-cismap/tools/gazetteerHelper";
import GenericInfoBoxFromFeature from "react-cismap/topicmaps/GenericInfoBoxFromFeature";
import TopicMapComponent from "react-cismap/topicmaps/TopicMapComponent";
import localforage from "localforage";
import { Modal } from "react-bootstrap";
import ReactLoading from "react-loading";

import FeatureCollection from "./components/FeatureCollection";
import LoginForm from "./components/LoginForm";
import Title from "./components/TitleControl";
import InfoPanel from "./components/SecondaryInfo";
// import "proj4leaflet";
import proj4 from "proj4";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "leaflet/dist/leaflet.css";
import "react-bootstrap-typeahead/css/Typeahead.css";
import "react-cismap/topicMaps.css";
import { getInternetExplorerVersion } from "react-cismap/tools/browserHelper";
import MyMenu from "./components/Menu";
import itemFilterFunction from "./components/filterFunction";
import { proj4crs25832def, proj4crs3857def } from "react-cismap/constants/gis";
import IconComp from "react-cismap/commons/Icon";
import Waiting from "./components/Waiting";
import { defaultLayerConf } from "react-cismap/tools/layerFactory";

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

function App() {
  const [staticGazData, setStaticGazData] = useState([]);
  const [dynGazData, setDynGazData] = useState([]);
  const [gazData, setGazData] = useState([]);

  useEffect(() => {
    setGazData([...dynGazData, ...staticGazData]);
  }, [staticGazData, dynGazData]);

  useEffect(() => {
    getGazData(setStaticGazData);
  }, []);

  const [jwt, _setJWT] = useState();
  const [loginInfo, setLoginInfo] = useState();

  const [waiting, setWaiting] = useState();

  const setJWT = (jwt) => {
    localforage.setItem("@" + appKey + "." + "auth" + "." + "jwt", jwt);
    _setJWT(jwt);
  };

  useEffect(() => {
    (async () => {
      const jwtInCache = await localforage.getItem("@" + appKey + "." + "auth" + "." + "jwt");
      if (jwtInCache) {
        setJWT(jwtInCache);
      } else {
        setJWT(undefined);
      }
    })();
  }, []);

  useEffect(() => {
    if (jwt) {
      let taskParameters = {
        parameters: {
          daqKey: "potenzialflaechenGaz",
        },
      };

      let fd = new FormData();
      fd.append(
        "taskparams",
        new Blob([JSON.stringify(taskParameters)], {
          type: "application/json",
        })
      );
      fetch(
        // "https://potenzialflaechen-online-api.cismet.de/users",
        // "https://eniptvf9euuoeze.m.pipedream.net",

        "https://potenzialflaechen-online-api.cismet.de/actions/WUNDA_BLAU.dataAquisition/tasks?resultingInstanceType=result",
        {
          method: "POST",
          // method: "GET",
          headers: {
            Authorization: "Bearer " + jwt,
            // "Content-Type": "application/json",
            // Accept: "application/json",
          },
          body: fd,
        }
      )
        .then(function (response) {
          if (response.status >= 200 && response.status < 300) {
            response.json().then(function (content) {
              // console.log("response from cids", content);
              if (content.res) {
                const gaz = JSON.parse(content.res);
                if (Array.isArray(gaz)) {
                  setDynGazData(gaz);
                } else {
                  setDynGazData(JSON.parse(gaz.content));
                }
              } else {
                console.log("Probleme ber der Abfrage der Gazetteer-Daten");
              }
            });
          } else {
            if (response.status === 401) {
              setJWT(undefined);
              setLoginInfo({ color: "#F9D423", text: "Bitte melden Sie sich erneut an." });
              setTimeout(() => {
                setLoginInfo();
              }, 2500);
            }
            // response.text().then((x) => {189	60	90
            //   console.log("error", x);
            // });
          }
        })
        .catch(function (err) {
          ///
        });
    }
  }, [jwt]);

  let backgroundModes;
  if (getInternetExplorerVersion() === -1) {
    backgroundModes = [
      {
        title: "Stadtplan (grau)",
        mode: "default",
        layerKey: "stadtplan",
      },
      {
        title: "Stadtplan (Vektordaten light)",
        mode: "default",
        layerKey: "vector",
      },
      {
        title: "Amtliche Basiskarte",
        mode: "default",
        layerKey: "abkg",
      },
      { title: "Luftbildkarte", mode: "default", layerKey: "lbk" },
    ];
  } else {
    backgroundModes = [
      {
        title: "Stadtplan",
        mode: "default",
        layerKey: "stadtplan",
      },
      {
        title: "Amtliche Basiskarte",
        mode: "default",
        layerKey: "abkg",
      },
      { title: "Luftbildkarte", mode: "default", layerKey: "lbk" },
    ];
  }
  const backgroundConfigurations = {
    lbk: {
      layerkey: "rvrGrau@50|trueOrtho2020@40",
      src: "/images/rain-hazard-map-bg/ortho.png",
      title: "Luftbildkarte",
    },
    stadtplan: {
      layerkey: "rvrGrau@45",
      src: "/images/rain-hazard-map-bg/citymap.png",
      title: "Stadtplan",
    },
    vector: {
      layerkey: "cismetLight",
      src: "/images/rain-hazard-map-bg/citymap.png",
      title: "Stadtplan",
    },
    abkg: {
      layerkey: "bplan_abkg@70",
      src: "/images/rain-hazard-map-bg/citymap.png",
      title: "Amtliche Basiskarte",
    },
  };

  return (
    <TopicMapContextProvider
      appKey={appKey}
      backgroundConfigurations={backgroundConfigurations}
      backgroundModes={backgroundModes}
      referenceSystem={MappingConstants.crs3857}
      mapEPSGCode='3857'
      referenceSystemDefinition={MappingConstants.proj4crs3857def}
      maskingPolygon='POLYGON((668010.063156992 6750719.23021889,928912.612468322 6757273.20343972,930494.610325512 6577553.43685138,675236.835570551 6571367.64964125,668010.063156992 6750719.23021889))'
      getColorFromProperties={(item) => item.kampagne.color}
      itemFilterFunction={itemFilterFunction}
      classKeyFunction={(item) => item?.kampagne?.bezeichnung}
      convertItemToFeature={(_item) => {
        const item = JSON.parse(JSON.stringify(_item));
        //         console.log("xxx item?.geojson?.crs", item?.geojson?.coordinates);
        //         console.log(
        //           "xxx item?.geojson?.crs",
        //           //item?.geojson
        // roj          proj4(proj4crs25832def, proj4crs3857def, item?.geojson?.coordinates)
        //         );

        const geometry = item?.geojson;
        const selected = false;
        const type = "Feature";
        const text = item?.bezeichnung;

        item.color = item?.kampagne?.color;
        let subtitle = "";

        if (item?.beschreibung_flaeche) {
          subtitle = item.beschreibung_flaeche.split("\n")[0];
        } else {
          subtitle = "Nähere Informationen zur Fläche finden Sie im Datenblatt.";
        }

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
        item.genericLinks = [
          {
            action: () => {
              setWaiting({
                icon: "file-pdf",
                title: "Steckbrief " + item.nummer + " wird erzeugt",
                text:
                  "Nachdem der Steckbrief fertiggestellt wurde, startet automatisch der Download. (Dauert im Moment noch etwas länger ¯\\_(ツ)_/¯ ) ",
              });
              let taskParameters = {
                parameters: {
                  POTENZIALFLAECHE: parseInt(item.id),
                },
              };

              let fd = new FormData();
              fd.append(
                "taskparams",
                new Blob([JSON.stringify(taskParameters)], {
                  type: "application/json",
                })
              );
              fetch(
                // "https://potenzialflaechen-online-api.cismet.de/users",
                // "https://eniptvf9euuoeze.m.pipedream.net",

                "https://potenzialflaechen-online-api.cismet.de/actions/WUNDA_BLAU.potenzialflaecheReport/tasks?resultingInstanceType=result",
                {
                  method: "POST",
                  // method: "GET",
                  headers: {
                    Authorization: "Bearer " + jwt,
                    // "Content-Type": "application/json",
                    // Accept: "application/json",
                  },
                  body: fd,
                }
              )
                .then(function (response) {
                  if (response.status >= 200 && response.status < 300) {
                    response.json().then(function (content) {
                      // console.log("response from cids", content);
                      if (content.res) {
                        const byteCharacters = atob(content.res);
                        const byteNumbers = new Array(byteCharacters.length);
                        for (let i = 0; i < byteCharacters.length; i++) {
                          byteNumbers[i] = byteCharacters.charCodeAt(i);
                        }
                        const byteArray = new Uint8Array(byteNumbers);
                        const blob = new Blob([byteArray], { type: "application/pdf" });

                        let link = document.createElement("a");
                        link.href = window.URL.createObjectURL(blob);
                        link.download = "Steckbrief." + item.nummer + ".pdf";
                        document.body.appendChild(link);
                        link.click();
                        document.body.removeChild(link);
                      } else {
                        console.log("Probleme beim Erzeugen des Reports");
                      }
                      setWaiting();
                    });
                  } else {
                    if (response.status === 401) {
                      setWaiting();
                      setJWT(undefined);
                      setLoginInfo({ color: "#F9D423", text: "Bitte melden Sie sich erneut an." });
                      setTimeout(() => {
                        setLoginInfo();
                      }, 2500);
                    }
                    // response.text().then((x) => {189	60	90
                    //   console.log("error", x);
                    // });
                  }
                })
                .catch(function (err) {
                  ///
                  setWaiting();
                });

              // setTimeout(() => {
              //   setWaiting();
              // }, 2500);
            },
            iconname: "file-pdf",
            tooltip: "Steckbrief erzeugen",
          },
        ];
        return {
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
      }}
      alwaysShowAllFeatures={false}
      getFeatureStyler={() => {
        return (feature) => {
          const c = new Color(feature.properties.color);
          let borderColor, fillOpacity;
          if (feature.selected === true) {
            fillOpacity = 0.85;
            borderColor = selectionColor;
          } else {
            fillOpacity = 0.6;
            borderColor = c.darken(0.1);
          }
          const style = {
            color: borderColor,
            weight: 2,
            opacity: 0.7,
            fillColor: c,
            fillOpacity,
          };
          return style;
        };
      }}
    >
      {jwt === undefined && (
        <LoginForm
          key={"login."}
          setJWT={setJWT}
          loginInfo={loginInfo}
          setLoginInfo={setLoginInfo}
        />
      )}
      {jwt !== undefined && (
        <Title
          logout={() => {
            setJWT(undefined);
            setLoginInfo({ color: "#69D2E7", text: "Sie wurden erfolgreich abgemeldet." });
            setTimeout(() => {
              setLoginInfo();
            }, 2500);
          }}
          jwt={jwt}
        />
      )}
      <Waiting waiting={waiting} />
      <TopicMapComponent
        mapStyle={{ backgroundColor: "white" }}
        gazData={gazData}
        homeZoom={13}
        maxZoom={22}
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
      >
        <FeatureCollection jwt={jwt} setJWT={setJWT} setLoginInfo={setLoginInfo} />
      </TopicMapComponent>
    </TopicMapContextProvider>
  );
}

export default App;
