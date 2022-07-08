import { useContext } from "react";
import {
  FeatureCollectionContext,
  FeatureCollectionDispatchContext,
} from "react-cismap/contexts/FeatureCollectionContextProvider";
import { UIDispatchContext } from "react-cismap/contexts/UIContextProvider";
import ConfigurableDocBlocks from "react-cismap/topicmaps/ConfigurableDocBlocks";
import DefaultSettingsPanel from "react-cismap/topicmaps/menu/DefaultSettingsPanel";
import FilterPanel from "react-cismap/topicmaps/menu/FilterPanel";
import ModalApplicationMenu from "react-cismap/topicmaps/menu/ModalApplicationMenu";
import Section from "react-cismap/topicmaps/menu/Section";
import { Link } from "react-scroll";

import MenuFooter from "./MenuFooter";
import Ueberblick from "./onlinehelpsections/010_Ueberblick";
import Fachdatenquellen from "./onlinehelpsections/020_Fachdatenquellen";
import Hintergrundkarten from "./onlinehelpsections/030_Hintergrundkarte";
import Kartendarstellung from "./onlinehelpsections/040_Kartendarstellung";
import FlaechenAuswaehlen from "./onlinehelpsections/050_FlaechenAuswaehlen";
import Datenblattansicht from "./onlinehelpsections/052_Datenblattansicht";
import Steckbriefe from "./onlinehelpsections/054_Steckbriefe";
import InKartePositionieren from "./onlinehelpsections/060_InKartePositionieren";
import MeinStandort from "./onlinehelpsections/070_MeinStandort";
import Filterung from "./onlinehelpsections/080_Filterung";
import AnmeldungUndOfflineBenutzung from "./onlinehelpsections/090_AnmeldungUndOfflineBenutzung";

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
        title: "Kategorien",
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
      menuTitle={"Filter, Einstellungen und Kompaktanleitung"}
      menuIntroduction={
        <span>
          Benutzen Sie die Filtermöglichkeiten unter{" "}
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
            <ConfigurableDocBlocks
              configs={[
                {
                  type: "FAQS",
                  configs: [
                    {
                      title: "Überblick",
                      bsStyle: "secondary",
                      contentBlockConf: {
                        type: "REACTCOMP",
                        content: <Ueberblick />,
                      },
                    },
                    {
                      title: "Fachdatenquellen",
                      bsStyle: "secondary",
                      contentBlockConf: {
                        type: "REACTCOMP",
                        content: <Fachdatenquellen />,
                      },
                    },
                    {
                      title: "Hintergrundkarte",
                      bsStyle: "secondary",
                      contentBlockConf: {
                        type: "REACTCOMP",
                        content: <Hintergrundkarten />,
                      },
                    },
                    {
                      title: "Kartendarstellung der Potenzialflächen",
                      bsStyle: "secondary",
                      contentBlockConf: {
                        type: "REACTCOMP",
                        content: <Kartendarstellung />,
                      },
                    },
                    /*----------------------------------------------------------------------------------------------------------------------*/
                    {
                      title: "Flächen auswählen und abfragen",
                      bsStyle: "success",
                      contentBlockConf: {
                        type: "REACTCOMP",
                        content: <FlaechenAuswaehlen />,
                      },
                    },
                    {
                      title: "Datenblattansicht",
                      bsStyle: "success",
                      contentBlockConf: {
                        type: "REACTCOMP",
                        content: <Datenblattansicht />,
                      },
                    },
                    {
                      title: "Steckbriefe",
                      bsStyle: "success",
                      contentBlockConf: {
                        type: "REACTCOMP",
                        content: <Steckbriefe />,
                      },
                    },
                    {
                      title: "In Karte positionieren",
                      bsStyle: "success",
                      contentBlockConf: {
                        type: "REACTCOMP",
                        content: <InKartePositionieren />,
                      },
                    },
                    {
                      title: "Mein Standort",
                      bsStyle: "success",
                      contentBlockConf: {
                        type: "REACTCOMP",
                        content: <MeinStandort />,
                      },
                    },
                    /*----------------------------------------------------------------------------------------------------------------------*/
                    {
                      title: 'Filterung ("Meine Potenzialflächen")',
                      bsStyle: "warning",
                      contentBlockConf: {
                        type: "REACTCOMP",
                        content: <Filterung />,
                      },
                    },
                    {
                      title: "Anmeldung und Offline-Benutzung",
                      bsStyle: "warning",
                      contentBlockConf: {
                        type: "REACTCOMP",
                        content: <AnmeldungUndOfflineBenutzung />,
                      },
                    },
                  ],
                },
              ]}
            />
          }
        />,
      ]}
      menuFooter={<MenuFooter />}
    />
  );
};
export default MyMenu;
