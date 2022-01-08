import React from 'react';
import "./Sidebar.css";
import {Avatar, IconButton} from '@material-ui/core';
//Fuckin MUI Components not found wtf 41.24 donut,chat y morevert
import MoreIcon from '@material-ui/icons/More';
import DonutLargeIcon from "@material-ui/icons/DonutLarge"
import ChatIcon from "@material-ui/icons/Chat"


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


            </div>
            <div className='sidebar__chats'>



            </div>
        </div>
    )
}

export default Sidebar
