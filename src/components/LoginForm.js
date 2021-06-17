import localforage from "localforage";
import { useContext, useEffect, useRef, useState } from "react";
import { Alert, Button, Form, Modal } from "react-bootstrap";
import IconComp from "react-cismap/commons/Icon";
import { ResponsiveTopicMapContext } from "react-cismap/contexts/ResponsiveTopicMapContextProvider";
import { appKey } from "../App";
const LoginForm = ({
  setJWT = (jwt) => {
    console.log("you need to set the attribute setJWT in the <Logoin> component", jwt);
  },
  loginInfo,
  setLoginInfo = () => {},
}) => {
  const { windowSize } = useContext(ResponsiveTopicMapContext);
  const pwFieldRef = useRef();
  const userFieldRef = useRef();
  const _height = windowSize?.height || 800 - 180;
  const modalBodyStyle = {
    overflowY: "auto",
    overflowX: "hidden",
    maxHeight: _height,
  };
  const [user, _setUser] = useState("");
  const [pw, setPw] = useState("");
  window.localforage = localforage;
  const setUser = (user) => {
    localforage.setItem("@" + appKey + "." + "auth" + "." + "user", user);
    _setUser(user);
  };

  useEffect(() => {
    (async () => {
      const userInCache = await localforage.getItem("@" + appKey + "." + "auth" + "." + "user");
      if (userInCache) {
        setUser(userInCache);
      }
      if (userFieldRef?.current) {
        userFieldRef.current.focus();
        userFieldRef.current.select();
      }
    })();
  }, []);

  const login = () => {
    fetch("https://potenzialflaechen-online-api.cismet.de/users", {
      method: "GET",
      headers: {
        Authorization: "Basic " + btoa(user + "@" + "WUNDA_BLAU" + ":" + pw),
        "Content-Type": "application/json",
      },
    })
      .then(function (response) {
        if (response.status >= 200 && response.status < 300) {
          response.json().then(function (responseWithJWT) {
            const jwt = responseWithJWT.jwt;
            setLoginInfo({
              color: "#79BD9A",
              text: "Anmeldung erfolgreich. Daten werden geladen.",
            });
            setTimeout(() => {
              setJWT(jwt);
              setLoginInfo();
            }, 500);
          });
        } else {
          setLoginInfo({
            color: "#FF8048",
            text: "Bei der Anmeldung ist ein Fehler aufgetreten. ",
          });
          setTimeout(() => {
            setLoginInfo();
          }, 2500);
        }
      })
      .catch(function (err) {
        setLoginInfo({ color: "#FF3030", text: "Bei der Anmeldung ist ein Fehler aufgetreten." });
        setTimeout(() => {
          setLoginInfo();
        }, 2500);
      });
  };

  return (
    <Modal
      style={{
        zIndex: 3000000000,
      }}
      height='100%'
      size='l'
      show={true}
      //   onHide={close}
      keyboard={false}
    >
      <Modal.Header>
        <Modal.Title>
          <IconComp name={"user"} /> Anmeldung
        </Modal.Title>
      </Modal.Header>
      <Modal.Body style={modalBodyStyle} id='potenzialflaechen-online' key='login'>
        <Form>
          <Form.Group controlId='potenzialflaechen-online-login'>
            <Form.Label>WuNDa Benutzername</Form.Label>
            <Form.Control
              value={user}
              ref={userFieldRef}
              onChange={(e) => {
                setUser(e.target.value);
              }}
              onKeyPress={(event) => {
                if (event.key === "Enter") {
                  // login();
                  if (pwFieldRef.current) {
                    pwFieldRef.current.focus();
                  }
                }
              }}
              placeholder='Login hier eingeben'
            />
            {/* <Form.Text className='text-muted'>
              We'll never share your email with anyone else.
            </Form.Text> */}
          </Form.Group>

          <Form.Group controlId='potenzialflaechen-online-pass'>
            <Form.Label>Passwort</Form.Label>
            <Form.Control
              ref={pwFieldRef}
              value={pw}
              onChange={(e) => {
                setPw(e.target.value);
              }}
              type='password'
              placeholder='Password'
              onKeyPress={(event) => {
                if (event.key === "Enter") {
                  login();
                }
              }}
            />
          </Form.Group>
          <div
            style={{
              width: "100%",
              display: "flex",
              alignItems: "baseline",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            {loginInfo?.text && (
              <div style={{ margin: 10, color: loginInfo?.color || "black" }}>
                <b>{loginInfo?.text}</b>
              </div>
            )}
            <div style={{ flexShrink: 100 }}></div>

            <Button
              onClick={(e) => {
                login();
              }}
              style={{ margin: 10, marginTop: 30 }}
              variant='primary'
            >
              Anmeldung
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};
export default LoginForm;
