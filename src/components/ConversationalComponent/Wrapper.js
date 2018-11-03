import React from "react";
import MessageList from './MessageList';
import SendMessageForm from './SendMessageForm';
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
        var data = this.state.messages;
        var x = eval('console.log("hi")');
        data.push({senderId:"user",text:x});
        console.log(x);
        this.setState({messages:data});
        
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