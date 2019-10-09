import * as React from "react";
import * as ReactDOM from "react-dom";

function App(): React.ReactElement {
  return (
    <div>
      <h1>Hello React!</h1>
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector("#app"));
