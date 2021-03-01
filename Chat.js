import { Avatar, IconButton } from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import "./Chat.css"
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
import SendIcon from '@material-ui/icons/Send';
import SearchIcon from '@material-ui/icons/Search';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AttachFileIcon from '@material-ui/icons/AttachFile';



function Chat() {
    const [seed, setSeed]=useState("");
    const [input, setInput]=useState("");
    useEffect(()=>{
        setSeed(Math.floor(Math.random()*5000));
    },[]);
    
    const sendMessage=(e)=>{
        e.preventDefault();
        console.log("You typed",input)
        setInput("");
    };
    return (
        <div className="Chat">
            <div className="chatheader">
                <Avatar className="usrDp" src={`https://avatars.dicebear.com/api/avataaars/${seed}.svg`}/>
                <div className="chatheaderinfo">
                    <h3>Room Name</h3>
                    <p className="lastseen">Last seen at .....</p>
                </div>
                <div className="chatheaderright">
                    <IconButton><SearchIcon className="searchchat"/></IconButton>
                    <IconButton><AttachFileIcon className="attachchat"/></IconButton>
                    <IconButton><MoreVertIcon className="chatmore"/></IconButton>
                </div>
            </div>
            <div className="chatbody">
                <p className={`chatmessage ${true &&'chatreciever'}`}>
                    <span className="chatname">Gautam</span>
                    Gautam Kabra
                    <span className="chattimestamp">
                        3:23pm
                    </span>
                </p>
            </div>
            <div className="chatfooter">
                <div className="chatfooter1">
                    <IconButton><InsertEmoticonIcon/></IconButton>
                    <form className="msgform">
                        <input value={input} onChange={e => setInput(e.target.value)} spellcheck="false" className="usrmsg" type="text" placeholder="Type a message..." required/>
                        <button className="send" onClick={sendMessage} type="submit"><IconButton><SendIcon className="sendIcon"/></IconButton></button>
                    </form>
                    <IconButton><MicIcon/></IconButton>
                </div>
            </div>
        </div>
    )
}

export default Chat
