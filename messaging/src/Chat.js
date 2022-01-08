import React from 'react'
import "./Chat.css";
import {Avatar, IconButton} from '@material-ui/core';
import { useEffect, useState } from 'react';
import DonutLargeIcon from "@material-ui/icons/DonutLarge"
import ChatIcon from "@material-ui/icons/Chat"
import MoreIcon from '@material-ui/icons/More';
import { AttachFile, InsertEmoticon, MicOutlined, MoreVert, SearchOutlined } from '@material-ui/icons';


function Chat() {
    const [input, setInput] = useState("");
    const [seed, setSeed] = useState("");

    useEffect(() => {
        setSeed(Math.floor(Math.random()*5000));        
        
    },[]);

const sendMessage = (e) => {
    e.preventDefault();
        console.log('you typed >>>>', input);
    };
    return (
        <div className='chat'>
            <div className='chat__header'>
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
            
                <div className='chat__headerInfo'>

                    <h3>Room name</h3>
                    <p>Last seen at...</p>

                </div>

                <div className='headerRight'>

                    <IconButton>
                        <SearchOutlined/>
                    </IconButton>
            
                    <IconButton>
                      <AttachFile/> 
                   </IconButton>


                     <IconButton>
                         <MoreVert/> 
                      </IconButton>


                </div>
            
            </div>

            <div className='chat__body'>
                {/* <p className='chat__message'><span className='chat__name'>John Rambo</span>Hello world<span className='chat__timestamp'>14:18pm</span>
                </p> */}

                <p className={`chat__message ${true &&'chat__reciever'}`}><span className='chat__name'>John Rambo</span>Hello world<span className='chat__timestamp'>14:18pm</span>
                </p>
                


            </div>

            <div className='chat__footer'>
            <IconButton><InsertEmoticon/></IconButton>
                <form>
                    <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Type a message" type="text" />
{/* hay que meter sd al final de todos los mensajes para el log de la consola */}
                    <button onClick={sendMessage} type='submit'>Send a message</button>
                </form>
                <IconButton><MicOutlined/></IconButton>
                
            </div>

        </div>
    )
}

export default Chat
