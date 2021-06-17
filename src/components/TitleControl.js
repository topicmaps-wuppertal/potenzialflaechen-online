import { useContext } from "react";
import { ResponsiveTopicMapContext } from "react-cismap/contexts/ResponsiveTopicMapContextProvider";

const Title = ({ logout, jwt }) => {
  const { windowSize } = useContext(ResponsiveTopicMapContext);
  let user, jwtPayload;
  try {
    jwtPayload = atob(jwt.split(".")[1]);
    user = JSON.parse(jwtPayload).sub;
  } catch (e) {}

  const titleContent = (
    <div>
      <b>Potenzialflächen-Online</b> ({user})
      <div style={{ float: "right", paddingRight: 10 }}>
        <a
          style={{ color: "#337ab7" }}
          onClick={() => {
            logout();
          }}
        >
          {/* <FontAwesomeIcon icon={faRandom} style={{ marginRight: 5 }} /> */}
          abmelden
        </a>
      </div>
    </div>
  );

  return (
    <table
      style={{
        width: (windowSize?.width || 300) - 54 - 12 - 38 - 12 + "px",
        height: "30px",
        position: "absolute",
        left: 54,
        top: 12,
        zIndex: 555,
      }}
    >
      <tbody>
        <tr>
          <td
            style={{
              textAlign: "center",
              verticalAlign: "middle",
              background: "#ffffff",
              color: "black",
              opacity: "0.9",
              paddingLeft: "10px",
            }}
          >
            {titleContent}
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Title;
