import React from "react";
import safeEval from 'safe-eval';
import MessageList from './MessageList';
import SendMessageForm from './SendMessageForm';
import store from '../../store/configurestore';
import { addTab } from "../../actions/bookActions";
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
  marginTop: "150px"
};

const styleBtn = {
  backgroundColor: "#1f1f1f",
  marginLeft: "40px",
  marginRight: "40px",
  marginTop: "25px"
}

class Wrapper extends React.Component{
    
    constructor() {
        super()
        this.state = {
           messages: DUMMY_DATA
        }
        
      }
      sendMessage(message){
        const index = store.getState();
        var data = this.state.messages;
        var x = safeEval('('+index.addTab.data[index.messageReducer.tabActive].code+')('+message+')');
        data.push({senderId:"user",text:message});
        console.log(x);
        this.setState({messages:data});
        //console.log(store.getState())
      }
    render()
    {
        return(
            <div>
              <div style={styleMsg}>
                <MessageList messages={this.state.messages} />
              </div>
              <div style={styleBtn}>
                <SendMessageForm sendMessage={this.sendMessage.bind(this)}/>
              </div>
            </div>
        );
    }
}

export default Wrapper;