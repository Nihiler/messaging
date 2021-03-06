import React from 'react';
import "./Login.css";
import { Button } from '@material-ui/core';
import {auth, provider} from "./firebase";
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';


function Login() {
    const [{user},dispatch]=useStateValue();


    const signIn = ()=> {
        auth.signInWithPopup(provider)
        .then ((result) => {
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            })
        }
        
        
        )
        .catch((error) => console.log(error.message));
    };
    return (
        <div className="login">
           <div className="login__container">
               <img src="https://worksplatform.com/wp-content/uploads/2020/06/34-349739_chat-png-icon-free-download-searchpng-transparent-chat.png" alt=""/> 
                <div className="login__text">
                    <h1>Sign in to Chat</h1>
                </div>
                 <Button type="submit" onClick={signIn}>Sign in With Google</Button> 
           </div>
        </div>
    )
}
export default Login
