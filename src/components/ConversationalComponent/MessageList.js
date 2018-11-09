import React from "react";

const styleBox = {
  backgroundColor: "#404040", 
  display: "inline-block", 
  width: "200px", 
  height: "50px", 
  borderRadius: "8px", 
  color: "#d3d3d3",
  margin: "10px",
  paddingTop:"5px",
  paddingLeft:"4px",
  paddingRight: "4px",
  fontSize: "17px",
  textAlign:"left"
}

class MessageList extends React.Component {
    render() {

        return (
          <ul className="message-list">                 
            {this.props.messages.map(message => {
              console.log(message.senderId)
              if (message.senderId === "Bot"){
                return (
                  <li key={message.senderId} style={{ listStyle: "none", textAlign: "right" }}>
                    <div style={styleBox}>
                      <span style={{ textAlign: "left" }}>{message.text}</span>
                    </div>
                    <div style={{ display: "inline-block", color: "#d3d3d3", marginRight: "12px" }}>
                      <img src="http://tribeappsoft.com/storageImages/news/38.png" width="30px" height="30px" style={{ marginTop: "10px", borderRadius: "15px" }} />
                    </div>
                    <br />
                  </li>
                );
              }
              else{
              return (
               <li key={message.senderId} style={{listStyle:"none", textAlign:"left"}}>
                 <div style={{display:"inline-block", color:"#d3d3d3", marginLeft:"-10px"}}>
                   <img src="http://news.nd.edu/assets/113411/james_brockmole_300.jpg" width="30px" height="30px" style={{marginTop:"10px", borderRadius:"15px"}}/>
                 </div>
                 <div style={styleBox}>
                   <span style={{textAlign:"left"}}>{message.text}</span>
                 </div>
                 <br/>
               </li>
             )
            }
           })}
         </ul>
        )
      }
}

export default MessageList;
