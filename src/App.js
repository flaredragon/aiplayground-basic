import React from 'react';
//import { render } from "react-dom";
import Tabs from "./components/TabsComponent/Tabs";
import Editor from "./components/EditorComponent/Editor";
// import { string } from 'prop-types';
//import glamorous from "glamorous";

const styles = {
  fontFamily: "sans-serif",
  // textAlign: "center"
};

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: 0,
          code: '//type your code...'
        },
        {
          id: 1,
          code: '//type your code.....'
        },
      ],
      tab_count: 2
    }
  }

  updateCodeHandler = (new_data) => {
    this.setState({ data: new_data });
  }

  addTab = () => {
    let new_tab_count = this.state.tab_count;
    
    let new_data = [...this.state.data];
    console.log(new_data);
    new_data.push({
      id: new_tab_count,
      code: '//type your code.....'
    });

    new_tab_count += 1;
    
    this.setState({tab_count: new_tab_count, data: new_data});
  }

  render() {

    let allTabs = Object.keys(this.state.data)
      .map(tabkey => {
        let string_key = tabkey.toString();
        let title_key = "Tab " + string_key
        return (<Tabs.Tab key={tabkey} id={string_key} title = {title_key}>
                <Editor ids={string_key} onUpdate={this.updateCodeHandler} data={this.state.data} />
               </Tabs.Tab>)
      });

    return (
      <div style={styles}>
        <Tabs
          activeTab={{
            id: "0"
          }}
        >
        {/* <Tabs.Tab id="0" title="Tab 1">
          <Editor ids="0" onUpdate={this.updateCodeHandler} data={this.state.data}/>
        </Tabs.Tab>
        <Tabs.Tab id="1" title="Tab 2">
            <Editor ids="1" onUpdate={this.updateCodeHandler} data={this.state.data}/>
        </Tabs.Tab>
        </Tabs> */}
        {allTabs}
        </Tabs>

        <button onClick={this.addTab} >Add Tabs</button>
      </div>
    )
  }

}


//render(<App />, document.getElementById("root"));

export default App;
