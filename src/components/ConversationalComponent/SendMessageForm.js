import React from "react";

class SendMessageForm extends React.Component {
    constructor() {
      super()
      this.state = {
        message: ''
      }
      this.handleChange = this.handleChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(e) {
      this.setState({
        message: e.target.value
      })
    }
    handleSubmit(e) {
      e.preventDefault()
      this.props.sendMessage(this.state.message)
      this.setState({
        message: ''
      })
    }
    render() {
      return (
        <form
          style={{fontSize:"17px", borderRadius:"8px"}}
          onSubmit={this.handleSubmit}
          className="send-message-form">
          <input
            style={{backgroundColor:"#1f1f1f", border:"0px solid black", width:"100%", textAlign:"center", padding:"20px 10px", color:"#fff", textAlign:"left"}}
            onChange={this.handleChange}
            value={this.state.message}
            placeholder="Type message here..."
            type="text" />
        </form>
      )
    }
  }

  export default SendMessageForm;