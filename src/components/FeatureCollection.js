import { useContext, useEffect } from "react";
import { FeatureCollectionDispatchContext } from "react-cismap/contexts/FeatureCollectionContextProvider";
import { TopicMapDispatchContext } from "react-cismap/contexts/TopicMapContextProvider";
import FeatureCollection from "react-cismap/FeatureCollection";

const FC = ({ jwt, setJWT, setLoginInfo }) => {
  const { zoomToFeature } = useContext(TopicMapDispatchContext);
  const { setItems } = useContext(FeatureCollectionDispatchContext);

  useEffect(() => {
    if (jwt !== undefined) {
      let taskParameters = {
        parameters: {
          daqKey: "potenzialflaechen",
          md5: "undefined", ///"----29a21a62f8973ab1baa78b7fe9320d10",
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
                const result = JSON.parse(content.res);
                let potenzialflaechen;

                if (Array.isArray(result)) {
                  potenzialflaechen = result;
                } else {
                  console.log("result", result);

                  potenzialflaechen = JSON.parse(result.content);
                }
                setItems(potenzialflaechen);
              } else {
                console.log("Probleme ber der Abfrage der Daten");
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
          // console.re.log(nonce + "yyy will zoom");

          zoomToFeature(event.target.feature);
        }
        // }
      }}
    />
  );
};

export default FC;
