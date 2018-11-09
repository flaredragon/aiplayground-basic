import React from "react";
import { connect } from "react-redux";
import MessageList from './MessageList';
import SendMessageForm from './SendMessageForm';
import { thunk_action_creator } from "../../actions/messageActions";
const DUMMY_DATA = [
    {
      senderId: "perborgen",
      text: "who'll win?"
    },
    {
      senderId: "janedoe",
      text: "who'll win?"
    }
  ]

  const styleMsg = {
    backgroundColor: "#1f1f1f",
    marginLeft: "40px",
    marginRight: "40px",
    marginTop: "50px"
  };
  
  const styleBtn = {
    backgroundColor: "#1f1f1f",
    marginLeft: "40px",
    marginRight: "40px",
    marginTop: "25px"
  }
  

class Wrapper extends React.Component{
    
    constructor(props) {
        super(props)
      }
      sendMessage(message){
        this.props.dispatch(thunk_action_creator(message));
      }
    render()
    {
        return(
            <div>
            <div style={styleMsg}>
            <MessageList messages={this.props.messages} isFetching={this.props.isFetching} />
            </div>
            <div style={styleBtn}>
            <SendMessageForm sendMessage={this.sendMessage.bind(this)}/>
            </div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
  return {
    // You can now say this.props.books
    //data:state.data
    isFetching:state.asyncReducer.isFetching,
    messages:state.asyncReducer.messages
  }
};




export default connect(mapStateToProps)(Wrapper);