import { Avatar } from '@material-ui/core'
import React from 'react'
import "./SidebarChat.css"
import { useEffect, useState } from 'react';
import db from './firebase';
import { Link } from 'react-router-dom';

function SidebarChat({id, name, addNewChat}) {
    
    const [seed, setSeed]= useState ('');
    const [messages, setMessages] = useState ("");

    useEffect(() => {
        setSeed(Math.floor(Math.random()*5000));        
        
    },[]);

    const createChat = () => {

        const roomName = prompt ("Please enter name for chat room");
        if(roomName){
            //do Clever Stuff
            db.collection('rooms').add(
                {
                    name: roomName,
                }
            )
        }

    } ;

    return  !addNewChat ? (
        <Link to={ `/rooms/${id}`} >
            {/* <Link to={ `/rooms/${id}`} key={id}> */}

        <div className="sidebarChat">
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>

            <div className='sidebarChat__info'>

                <h2>{name}</h2>
                <p>Hit to enter</p>
                {/* <p>{messages[0]?.message}</p> */}
            </div>
        </div>
        </Link>
        
    ):(
        <div onClick={createChat} className="sidebarChat">
            <h2>Add new Chat</h2>

        </div>

    )
}

export default SidebarChat
