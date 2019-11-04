import styled from "@emotion/styled";
import * as React from "react";
import * as ReactDOM from "react-dom";

import MenuListPage from "./components/pages/MenuListPage";

function App(): React.ReactElement {
  return (
    <>
      <MenuListPage />
    </>
  );
}

ReactDOM.render(<App />, document.querySelector("#app"));
