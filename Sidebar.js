import {React, useEffect, useState} from 'react'
import "./Sidebar.css"
import SidebarChart from "./SidebarChart"
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import SearchIcon from '@material-ui/icons/Search';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ChatIcon from '@material-ui/icons/Chat';
import {Avatar, IconButton} from "@material-ui/core"
import db from "./firebase";




function Sidebar() {
    useEffect(() => {
        document.title = "WhatsApp-Clone"
    }, []);


    const [rooms, setRooms]=useState([]);
    useEffect(()=>{
        db.collection("rooms").onSnapshot(snapshot=>(
            setRooms(snapshot.docs.map(doc=>({
                id:doc.id,
                data:doc.data()
                
            })))
        ))
    },[])
    return(
        <div className="sidebar">
            <div className="sidebarheader">
                <Avatar/>
                <div className="sidebarheaderright">
                    <IconButton><DonutLargeIcon className="donut"/></IconButton>
                    <IconButton><ChatIcon className="chat"/></IconButton>
                    <IconButton><MoreVertIcon className="more"/></IconButton>
                </div>
            </div>
            <div className="sidebarsearch">
                <div className="sidebarsearchcontainer">
                    <SearchIcon/>
                    <input type="text" placeholder="Search" className="search"/>
                </div>
            </div>
            <div className="sidebarchat">
                <SidebarChart addNewChat/>
                {rooms.map(room=>(
                    <SidebarChart key={room.id} id={room.id} name={room.data().names}/>
                ))}
            </div>

        </div>
    )
}

export default Sidebar
