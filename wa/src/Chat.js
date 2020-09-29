import React, {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";
import db from "./firebase";
import './Chat.css';
import { Avatar, IconButton } from '@material-ui/core';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import MoreVertOutlinedIcon from '@material-ui/icons/MoreVertOutlined';
import InsertEmoticonOutlinedIcon from '@material-ui/icons/InsertEmoticonOutlined';
import MicIcon from '@material-ui/icons/Mic';
function Chat() {
const [input, setInput] = useState( "" );
const [seed, setSeed] = useState( "" );
const {roomId} = useParams(  );
const [roomName, setRoomName] = useState( "" );
useEffect( (  ) =>{
if (roomId){
db.collection( 'rooms' ).doc( roomId ).onSnapshot( snapshot =>{
setRoomName( snapshot.data(  ).name )
} )
}
}, [roomId])
useEffect( (  ) =>{
setSeed( Math.floor( Math.random(  ) * 5000 ) )
}, []);
const sendMessage = ( e ) =>{
e.preventDefault(  );
setInput( "" );
}
  return (
    <div className="chat">
     <div className="chat_header">
   <Avatar src = {`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
   <div className ="chat_headerInfo">
   <h3>{roomName}</h3>
   <p>Last seen at ...</p>
   </div>
   <div className ="chat_headerRight">
   <IconButton>
   <SearchOutlinedIcon/>
   </IconButton>
      <IconButton>
   <AttachFileIcon/>
   </IconButton>
      <IconButton>
   <MoreVertOutlinedIcon/>
   </IconButton>
   </div>
    </div>
    <div className="chat_body">
   <p className ="chat_message chat_receiver">
   <span className ="chat_name">Rohan Jangle</span>
   hey guys
   <span className ="chat_timestamp">3:52 pm</span>
   </p>
    </div>
     <div className="chat_footer">
   <InsertEmoticonOutlinedIcon/>
   <form>
   <input type = "text" value ={input} onChange ={(e) => setInput( e.target.value )} placeholder ="Type a message"/>
   
   <button type ="submit" onClick = {sendMessage}>Send a message</button>
   </form>
   <MicIcon/>
    </div>
    </div>
    
      
     
  );
}

export default Chat;