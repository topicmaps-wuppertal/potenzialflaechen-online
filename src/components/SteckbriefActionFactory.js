import { CACHE_JWT } from "react-cismap/tools/fetching";

const SteckbriefActionFactory = ({ setWaiting, item, jwt, setJWT, setLoginInfo }) => {
  return {
    action: () => {
      if (jwt && jwt !== CACHE_JWT) {
        setWaiting({
          icon: "file-pdf",
          title: "Steckbrief " + item.nummer + " wird erzeugt",
          text: "Nachdem der Steckbrief fertiggestellt wurde, startet automatisch der Download.",
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
                setLoginInfo({
                  color: "#F9D423",
                  text: "Bitte melden Sie sich erneut an.",
                });
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
      } else {
        setWaiting({
          icon: "file-pdf",
          title: "Steckbrief " + item.nummer,
          text: "Steckbriefe können im Offline Modus leider nicht erzeugt werden. ¯\\_(ツ)_/¯ ",
        });
        setTimeout(() => {
          setWaiting();
        }, 2500);
      }
    },
    iconname: "file-pdf",
    tooltip: "Steckbrief erzeugen" + (jwt === CACHE_JWT ? " (Im Offline Modus nicht möglich)" : ""),
  };
};

export default SteckbriefActionFactory;
