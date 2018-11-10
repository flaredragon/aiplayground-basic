import React from 'react';
//import { render } from "react-dom";
import { connect } from 'react-redux';
import { addTab,updateCode } from './actions/bookActions';
import Tabs from "./components/TabsComponent/Tabs";
import Editor from "./components/EditorComponent/Editor";
import Wrapper from './components/ConversationalComponent/Wrapper';
import Navbar from './components/NavbarComponent/Navbar';
//import * as bookActions from '../../actions/bookActions';
// import { string } from 'prop-types';
//import glamorous from "glamorous";

const styles = {
  fontFamily: "AmericanTypewriter",
  backgroundColor: "#000",
  // textAlign: "center"
};

const stylesEditor = {
  marginTop: "-10",
  fontFamily: "Quicksand",
  marginLeft: "10",
  width: "50%",
  display: "inline-block"
};

const styleMessage = {
  float: "right",
  display: "inline-block",
  width: "50%",
  fontFamily: "Quicksand",
  textAlign: "center",
  // maxHeight:"500px",
  // overflow:'auto',
  
};


class App extends React.Component {

  constructor(props) {
    super(props);
    //console.log(this.props.rdata);
  }

  updateCodeHandler = (new_data) => {
    //this.props.updateCode(new_data);
    console.log(this.props);
    this.setState({ data: new_data });
    //console.log([...this.state.data]);
  }

  addTab = () => {
    //this.props.addTab(this.props.tab_count);
    //this.setState({data:this.props.data,tab_count:this.props.tab_count});
  }

  render() {
    let allTabs = Object.keys(this.props.data)
      .map(tabkey => {
        let string_key = tabkey.toString();
        let title_key = "Tab " + string_key
        return (<Tabs.Tab key={tabkey} id={string_key} title = {title_key} >
                <Editor ids={string_key} onUpdate={this.updateCodeHandler} data={this.props.data} />
               </Tabs.Tab>)
      });

    return (
      
      <div style={styles}>
        <Navbar />
        <div style={stylesEditor}>
          <Tabs
            activeTab={{
              id: "0"
            }}
          >
          {allTabs}
          </Tabs>
        </div>
        <div style={styleMessage}>
        <Wrapper></Wrapper>
        </div>
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
