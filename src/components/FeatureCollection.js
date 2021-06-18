import { useContext, useEffect } from "react";
import { FeatureCollectionDispatchContext } from "react-cismap/contexts/FeatureCollectionContextProvider";
import { TopicMapDispatchContext } from "react-cismap/contexts/TopicMapContextProvider";
import FeatureCollection from "react-cismap/FeatureCollection";
import localforage from "localforage";
//import { md5ActionFetchDAQ } from "react-cismap/tools/fetching";
const md5ActionFetchDAQ = async (prefix, apiUrl, jwt, daqKey) => {
  const cachePrefix = "@" + prefix + ".." + apiUrl + "." + daqKey;
  const md5Key = cachePrefix + ".md5";
  const dataKey = cachePrefix + ".data";
  const timeKey = cachePrefix + ".time";
  const md5InCache = await localforage.getItem(md5Key);
  console.log("DAQ for " + daqKey);
  let taskParameters = {
    parameters: {
      daqKey,
      md5: md5InCache || "-",
    },
  };

  let fd = new FormData();
  fd.append(
    "taskparams",
    new Blob([JSON.stringify(taskParameters)], {
      type: "application/json",
    })
  );

  const response = await fetch(
    apiUrl + "/actions/WUNDA_BLAU.dataAquisition/tasks?resultingInstanceType=result",
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
  );

  if (response.status >= 200 && response.status < 300) {
    const content = await response.json();
    if (content.res) {
      try {
        const result = JSON.parse(content.res);
        let status = result.status;
        let potenzialflaechen;
        if (status === 200) {
          console.log("DAQ cache miss for " + daqKey);

          potenzialflaechen = JSON.parse(result.content);
          await localforage.setItem(dataKey, result.content);
          await localforage.setItem(md5Key, result.md5);
          await localforage.setItem(timeKey, result.time);
        } else if (status === 304) {
          console.log("DAQ cache hit for " + daqKey);

          potenzialflaechen = JSON.parse(await localforage.getItem(dataKey));
        }

        return new Promise((resolve, reject) => {
          resolve(potenzialflaechen);
        });
      } catch (e) {
        return new Promise((resolve, reject) => {
          reject({
            status: 500,
            desc: "error when parsing the server result. probably the content has the wrong structure",
            content,
            exception: e,
          });
        });
      }
    } else {
      return new Promise((resolve, reject) => {
        reject({
          status: 500,
          desc: "error when parsing the server result.",
          content,
        });
      });
    }
  } else if (response.status === 401) {
    return new Promise((resolve, reject) => {
      reject({ status: response.status, desc: "unauthorized" });
    });
  } else {
    return new Promise((resolve, reject) => {
      reject({ status: response.status, desc: "unknown" });
    });
  }
};

const FC = ({ jwt, setJWT, setLoginInfo }) => {
  const { zoomToFeature } = useContext(TopicMapDispatchContext);
  const { setItems } = useContext(FeatureCollectionDispatchContext);

  useEffect(() => {
    if (jwt !== undefined) {
      md5ActionFetchDAQ(
        "potenzialflaechen-online",
        "https://potenzialflaechen-online-api.cismet.de",
        jwt,
        "potenzialflaechen"
      )
        .then(
          (potenzialflaechen) => {
            setItems(potenzialflaechen);
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
          // console.re.log(nonce + "yyy will zoom");

          zoomToFeature(event.target.feature);
        }
        // }
      }}
    />
  );
};

export default FC;
