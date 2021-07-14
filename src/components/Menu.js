import { useContext } from "react";
import {
  FeatureCollectionContext,
  FeatureCollectionDispatchContext,
} from "react-cismap/contexts/FeatureCollectionContextProvider";
import { UIDispatchContext } from "react-cismap/contexts/UIContextProvider";
import { getSimpleHelpForTM } from "react-cismap/tools/uiHelper";
import { Link } from "react-scroll";
import ModalApplicationMenu from "react-cismap/topicmaps/menu/ModalApplicationMenu";
import Section from "react-cismap/topicmaps/menu/Section";
import FilterPanel from "react-cismap/topicmaps/menu/FilterPanel";
import DefaultSettingsPanel from "react-cismap/topicmaps/menu/DefaultSettingsPanel";
import ConfigurableDocBlocks from "react-cismap/topicmaps/ConfigurableDocBlocks";
import MenuFooter from "./MenuFooter";

const MyMenu = () => {
  const { setAppMenuActiveMenuSection } = useContext(UIDispatchContext);
  const { filterState, filterMode, filteredItems, shownFeatures } =
    useContext(FeatureCollectionContext);
  const { setFilterState, setFilterMode } = useContext(FeatureCollectionDispatchContext);

  const { items } = useContext(FeatureCollectionContext);

  let kampagnen = [];
  const kampagnenValues = [];

  for (const item of items || []) {
    if (!kampagnen.includes(item.kampagne.bezeichnung)) {
      kampagnen.push(item.kampagne.bezeichnung);
      kampagnenValues.push({
        key: item.kampagne.bezeichnung,
        title: item.kampagne.bezeichnung,
        color: item.kampagne.color,
        icon: "square",
        iconPos: "pre",
        order: item.kampagne.order_by,
      });
    }
  }
  kampagnenValues.sort((a, b) => {
    return parseInt(a.order) - parseInt(b.order);
  });

  //delte and add sorted kamapgnen again
  kampagnen = [];
  for (const kampagnenvalue of kampagnenValues) {
    kampagnen.push(kampagnenvalue.key);
  }
  const filterConfiguration = {
    mode: "list", // list or tabs
    resetedFilter: {
      kampagnen,
    },
    filters: [
      {
        title: "Kampagnen",
        key: "kampagnen",
        icon: "layer-group",
        type: "checkBoxes", //"tags" or "checkBoxes",
        values: kampagnenValues,
        setAll: () => {
          setFilterState({ ...filterState, kampagnen });
        },
        setNone: () => {
          setFilterState({ ...filterState, kampagnen: [] });
        },
        // colorizer: (item, selected) => {
        //   console.log("yyy colorizer item", item);

        //   return selected ? item.kampagne.color : "#ee00ee";
        // },
      },
    ],
  };

  if (filterState === undefined && items !== undefined && items.length !== 0) {
    setFilterState({ kampagnen });
  }
  if (filterMode === undefined && items !== undefined) {
    setFilterMode("kampagnen");
  }
  const topicMapTitle = "Potenzialflächen Online";
  const simpleHelp = undefined;

  const getFilterHeader = () => {
    const count = filteredItems?.length || 0;

    let term;
    if (count === 1) {
      term = "Fläche";
    } else {
      term = "Flächen";
    }

    return `Meine Potenzialflächen (${count} ${term} gefunden, davon ${
      shownFeatures?.length || "0"
    } in der Karte)`;
  };

  return (
    <ModalApplicationMenu
      menuIcon={"bars"}
      menuTitle={"Meine Potenzialflächen, Einstellungen und Kompaktanleitung"}
      menuIntroduction={
        <span>
          Benutzen Sie die Auswahlmöglichkeiten unter{" "}
          <Link
            className='useAClassNameToRenderProperLink'
            to='filter'
            containerId='myMenu'
            smooth={true}
            delay={100}
            onClick={() => setAppMenuActiveMenuSection("filter")}
          >
            Meine Potenzialflächen
          </Link>
          , um die in der Karte angezeigten Potenzialflächen auf die für Sie relevanten Themen zu
          beschränken. Über{" "}
          <Link
            className='useAClassNameToRenderProperLink'
            to='settings'
            containerId='myMenu'
            smooth={true}
            delay={100}
            onClick={() => setAppMenuActiveMenuSection("settings")}
          >
            Einstellungen
          </Link>{" "}
          können Sie die Darstellung der Hintergrundkarte an Ihre Interessen anpassen. Wählen Sie
          die{" "}
          <Link
            className='useAClassNameToRenderProperLink'
            to='help'
            containerId='myMenu'
            smooth={true}
            delay={100}
            onClick={() => setAppMenuActiveMenuSection("help")}
          >
            Kompaktanleitung
          </Link>{" "}
          für detailliertere Bedienungsinformationen.
        </span>
      }
      menuSections={[
        <Section
          key='filter'
          sectionKey='filter'
          sectionTitle={getFilterHeader()}
          sectionBsStyle='primary'
          sectionContent={<FilterPanel filterConfiguration={filterConfiguration} />}
        />,
        <DefaultSettingsPanel
          key='settings'
          skipFilterTitleSettings={true}
          skipClusteringSettings={true}
          skipSymbolsizeSetting={true}
        />,

        <Section
          key='help'
          sectionKey='help'
          sectionTitle='Kompaktanleitung'
          sectionBsStyle='default'
          sectionContent={
            <ConfigurableDocBlocks configs={getSimpleHelpForTM(topicMapTitle, simpleHelp)} />
          }
        />,
      ]}
      menuFooter={<MenuFooter />}
    />
  );
};
export default MyMenu;
