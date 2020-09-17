import { h, Component } from "preact";
import habitat from "preact-habitat";
import { Provider, LikeButton, UpdownButton, ClapButton } from "@lyket/react";

const LyketWidget = ({ ...props }) => {
  const { id, type, namespace, theme, apiKey } = props;
  console.log(props);

  if (!apiKey) {
    console.error("Lyket widget Error: missing key");
    return null;
  }

  if (!id) {
    console.error("Lyket widget Error: missing ID");
    return null;
  }

  const getComponent = () => {
    switch (type) {
      case "clap":
        return <ClapButton id={id || "widget"} namespace={namespace} />;
      case "updown":
        return <UpdownButton id={id || "widget"} namespace={namespace} />;
      default:
        return <LikeButton id={id || "widget"} namespace={namespace} />;
    }
  };

  const component = getComponent();

  return <Provider apiKey={apiKey}>{component}</Provider>;
};

const helloWidgetHabitat = habitat(LyketWidget);

helloWidgetHabitat.render({
  selector: ".lyket-add-button"
});
