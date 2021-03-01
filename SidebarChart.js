import React, {useEffect, useState} from 'react'
import "./SidebarChat.css"
import { Avatar } from "@material-ui/core"
import db from "./firebase"


function SidebarChart({id,name,addNewChat}) {
    const [seed,setSeed]=useState("");
    useEffect(()=>{
        setSeed(Math.floor(Math.random()*5000));
    },[]);
    const createchat=()=>{
        const roomname=prompt("Please Enter A Room Name:");
        if (roomname){
            //database Stuff
            db.collection("rooms").add({
                name:roomname
            })
        }
        else{
            alert("Enter a room name to create chat area!")
        }
    };
    const RoomName =createchat.roomname;
    return !addNewChat ?(
        <div className="sidebarchart">
            <div className="dp"><Avatar className="Dp" src={`https://avatars.dicebear.com/api/avataaars/${seed}.svg`}/></div>
            <div className="sidebarchatinfo">
                <h1>{RoomName}</h1>
                <p className="lastmessage">Last Message....</p>
            </div>
        </div>
    ):(
        <div className="sidebarchatnew" onClick={createchat}>
            <h2 className="newchat">Add new Chat</h2>
        </div>
    )
}

export default SidebarChart
