import React, { Component } from "react";
import glamorous from "glamorous";
import {connect} from 'react-redux';
import { updateTab } from '../../actions/messageActions';
import { addTab } from '../../actions/bookActions';
import Tab from "./Tab";

const ListTabs = glamorous.ul({
    paddingLeft: 0,
    listStyle: "none",
    margin: 0
});

const TabTitleItem = glamorous.li(
    {
        display: "inline-block",
        paddingRight: 5,
        paddingLeft: 5,
        backgroundColor: "#171717",
        
        transition: "all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
        padding: "13px 20px",
        cursor: "pointer",
        opacity: "0.3",
        ":hover": {
            opacity: "1"
        }
    },
    props => {
        // console.log("ss",props);
        return (
            (props.isActiveTab && {
                transition: "all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
                cursor: "default",
                opacity: 1,
                backgroundColor: "#1e1e1e",
                // borderTop: "#3e3e3e solid 2px",
                borderLeft: "#3e3e3e solid 2px",
                borderRight: "#3e3e3e solid 2px",

            })
        );
    }
);

const ButtonTabTitle = glamorous.li(
    {
        display: "inline-block",
        paddingRight: 5,
        paddingLeft: 5,
        backgroundColor: "#000",
        color: "#fff",
        transition: "all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
        padding: "13px 20px",
        cursor: "pointer",
        opacity: "1",
    }
);

const ApplyChangesItem = glamorous.li(
    {
        display: "inline-block",
        paddingRight: 5,
        paddingLeft: 5,
        backgroundColor: "#000",
        color: "#fff",
        transition: "all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
        padding: "13px 20px",
        cursor: "pointer",
        opacity: "1",
        float: "right"
    }
);

const ActiveTabBorder = glamorous.div(
    {
        height: 4,
        backgroundColor: "#1e1e1e",
        position: "absolute",
        bottom: 0,
        transition: "all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
        willChange: "left, width"
    },
    props => {
        return (
            props.activeTabElement && {
                width: props.activeTabElement.offsetWidth,
                left: props.activeTabElement.offsetLeft
            }
        );
    }
);

const TabAnchorItem = glamorous.a({
    textTransform: "capitalize",
    color: "#fff",
    fontWeight: 600
});

const TabsContainer = glamorous.div({
    position: "relative",
    display: "inline-block",
    backgroundColor: "#3e3e3e",
    borderBottom: "1px solid #000"
});

const ReactTabs = glamorous.div({
    position: "relative"
});

class Tabs extends Component {
    static Tab = Tab;
    
    state = {
        tabs: [],
        prevActiveTab: {},
        activeTab: this.props.activeTab,
        tabsElements: []
    };



    addTab = newTab => {
        let isNewTabFound;

        for (let i in this.state.tabs) {
            let tab = this.state.tabs[i];

            if (tab.id === newTab.id) {
                isNewTabFound = true;
                break;
            }
        }

        if (!isNewTabFound) {
            this.setState((prevState, props) => {
                return {
                    tabs: prevState.tabs.concat(newTab)
                };
            });
        }
    };

    removeTab = tabId => {
        this.setState((prevState, props) => {
            return {
                tabs: prevState.tabs.filter(tab => tab.id !== tabId)
            };
        });
    };

    onClick = tab => event => {
        console.log(tab);
        this.setState((prevState, props) => {
            return {
                prevActiveTab: prevState.activeTab,
                activeTab: tab
            };
        });
        this.props.updateTab(tab.id);
    };

   createTab = () => {
       console.log(this.props);
       this.props.addTab(this.props.children.length);
   }

    render() {
        return (
            <ReactTabs>
                <TabsContainer>
                    <ListTabs>
                        {this.state.tabs.map((tab, index) => (
                            <TabTitleItem
                                key={index}
                                onClick={this.onClick(tab)}
                                id={tab.id}
                                innerRef={tabElement => {
                                    if (!this.state.tabsElements[tab.id]) {
                                        this.setState((prevState, props) => {
                                            const tabsElements = prevState.tabsElements;
                                            tabsElements[tab.id] = tabElement;

                                            return {
                                                tabsElements
                                            };
                                        });
                                    }
                                }}
                                isActiveTab={this.state.activeTab.id === tab.id}
                            >
                                <TabAnchorItem>{tab.title}</TabAnchorItem>
                            </TabTitleItem>
                        ))}
                        <ButtonTabTitle onClick={this.createTab} >
                            <TabAnchorItem>+</TabAnchorItem>
                        </ButtonTabTitle>

                        <ApplyChangesItem >
                            <TabAnchorItem>Apply Changes</TabAnchorItem>
                        </ApplyChangesItem>

                    </ListTabs>

                    

                    {/* <ActiveTabBorder
                        activeTabElement={this.state.tabsElements[this.state.activeTab.id]}
                    /> */}
                </TabsContainer>

                {React.Children.map(this.props.children, child =>
                    React.cloneElement(child, {
                        activeTab: this.state.activeTab,
                        addTab: this.addTab
                    })
                )}
            </ReactTabs>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
      // You can now say this.props.books
      tab:state.messageReducer.tabActive
    }
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
    // You can now say this.props.createBook
      updateTab: tab => dispatch(updateTab(tab)),
      addTab: tab => dispatch(addTab(tab))
    }
  };
  
export default  connect(mapStateToProps, mapDispatchToProps)(Tabs);
