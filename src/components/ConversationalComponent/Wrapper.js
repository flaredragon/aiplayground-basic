import React from "react";
import safeEval from 'safe-eval';
import MessageList from './MessageList';
import SendMessageForm from './SendMessageForm';
import store from '../../store/configurestore';
import { addTab } from "../../actions/bookActions";
import campK12 from "../../class/campk12";
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
        var x = safeEval('('+index.addTab.data[index.messageReducer.tabActive].code+')('+message+')',{add5:campK12.add5,mulRandom:campK12.mulWithRandom});
        data.push({senderId:"user",text:message});
        data.push({senderId:"user",text:x});
        //console.log(x);
        this.setState({messages:data});
        //console.log(store.getState())
      }
    render()
    {
        return(
            <div>
            <MessageList messages={this.state.messages} />
            <SendMessageForm sendMessage={this.sendMessage.bind(this)}/>
            </div>
        );
    }
}

export default Wrapper;