import React from 'react';
import "./Sidebar.css";
import {Avatar, IconButton} from '@material-ui/core';
import MoreIcon from '@material-ui/icons/More';
import DonutLargeIcon from "@material-ui/icons/DonutLarge"
import ChatIcon from "@material-ui/icons/Chat"
import {SearchOutlined} from "@material-ui/icons"
import SidebarChat from './SidebarChat';


function Sidebar() {
    return (
        <div className='sidebar'>
            <div className='sidebar__header'>
                <Avatar/>
                
                <div className='sidebar__headerRight'>
                    <IconButton>
                        <DonutLargeIcon/>
                    </IconButton>
            
                    <IconButton>
                    <ChatIcon/> 
                </IconButton>


                <IconButton>
                    <MoreIcon/> 
                </IconButton>
                
                </div>
            </div>
            <div className='sidebar__search'>


                <div className='sidebar__searchContainer'>
                 <SearchOutlined/>
                    <input placeholder='Search or start a new chat' type="text"/>
                </div>
            </div>



            <div className='sidebar__chats'>

                <SidebarChat/>
                
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>

            </div>
        </div>
    )
}

export default Sidebar
