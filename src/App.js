import React from 'react';
//import { render } from "react-dom";
import { connect } from 'react-redux';
import {
  addTab,updateCode
} from './actions/bookActions';
import Tabs from "./components/TabsComponent/Tabs";
import Editor from "./components/EditorComponent/Editor";
import Wrapper from './components/ConversationalComponent/Wrapper';
//import * as bookActions from '../../actions/bookActions';
// import { string } from 'prop-types';
//import glamorous from "glamorous";

const styles = {
  fontFamily: "sans-serif",
  // textAlign: "center"
};

class App extends React.Component {

  constructor(props) {
    super(props);
    //console.log(this.props.rdata);
  }

  updateCodeHandler = (new_data) => {
    //this.props.updateCode(new_data);
    //console.log(new_data);
    this.setState({ data: new_data });
    //console.log([...this.state.data]);
  }

  addTab = () => {
    this.props.addTab(this.props.tab_count);
    //this.setState({data:this.props.data,tab_count:this.props.tab_count});
  }

  render() {
    let allTabs = Object.keys(this.props.data)
      .map(tabkey => {
        let string_key = tabkey.toString();
        let title_key = "Tab " + string_key
        return (<Tabs.Tab key={tabkey} id={string_key} title = {title_key}>
                <Editor ids={string_key} onUpdate={this.updateCodeHandler} data={this.props.data} />
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
        <Wrapper></Wrapper>
      </div>
    )
  }

}
const mapStateToProps = (state, ownProps) => {
  return {
    // You can now say this.props.books
    data:state.addTab.data,
    tab_count:state.addTab.tab_count
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
  // You can now say this.props.createBook
    addTab: tabs => dispatch(addTab(tabs)),
    updateCode: data => dispatch(updateCode(data))
  }
};

//render(<App />, document.getElementById("root"));

export default  connect(mapStateToProps, mapDispatchToProps)(App);
