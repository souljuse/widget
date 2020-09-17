import { h, Component } from "preact";
import habitat from "preact-habitat";
import { Provider, LikeButton, UpdownButton, ClapButton } from "@lyket/react";

const HelloWidget = ({ ...props }) => {
  const { id, type, namespace } = props;

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

  return (
    <Provider apiKey="xxx" baseUrl="http://localhost:3000">
      {component}
    </Provider>
  );
};

const helloWidgetHabitat = habitat(HelloWidget);

helloWidgetHabitat.render({
  selector: ".lyket-add-button"
});
