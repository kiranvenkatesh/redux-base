import React from "react";
import cx from "classnames";

import injectTapEventPlugin from "react-tap-event-plugin";

injectTapEventPlugin();

class App extends React.Component {
  constructor(props) {
      super(props);
      this.displayName = "App";
  }

  render() {
    var ctnClasses = cx( {
      "container": true
    } );

    return (<div className={ctnClasses}>
      <h1>Home Page</h1>
    </div>);
  }
}

export default App;