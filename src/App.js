import React from 'react';
//import { render } from "react-dom";
import Tabs from "./components/TabsComponent/Tabs";
import Editor from "./components/EditorComponent/Editor";
//import glamorous from "glamorous";

const styles = {
  fontFamily: "sans-serif",
  // textAlign: "center"
};

class App extends React.Component {

  
  render() {
    return (
      <div style={styles}>
        <Tabs
          activeTab={{
            id: "0"
          }}
        >
        <Tabs.Tab id="0" title="Tab 1">
          <Editor ids="0" />
        </Tabs.Tab>
        <Tabs.Tab id="1" title="Tab 2">
          <Editor ids="1" />
        </Tabs.Tab>
        </Tabs>
      </div>
    )
  }

}


//render(<App />, document.getElementById("root"));

export default App;
