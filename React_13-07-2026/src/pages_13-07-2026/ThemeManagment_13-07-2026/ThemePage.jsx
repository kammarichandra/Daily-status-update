import React from "react";
import Theme from "../../components_13-07-2026/Theam Managment_13-07-2026/Theam";
import Theamprovider from "../../components_13-07-2026/Theam Managment_13-07-2026/TheamProvider";

function ThemePage() {
  return (
    <Theamprovider>
      <Theme />
    </Theamprovider>
  );
}

export default ThemePage;