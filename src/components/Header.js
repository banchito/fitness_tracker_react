import React, {useState} from 'react';
import "./Header.css";
import {registerUser, loginUser} from '../api';
import { NavLink } from 'react-router-dom';
import {storeCurrentUser, clearCurrentUser} from '../auth'

const Header = ({currentUser, setCurrentUser}) => {
    
    const [username, setUsername]  = useState('');
    const [password, setPassword]  = useState('');
    const [apiMessage, setApiMessage] = useState('')
    // console.log(apiMessage);

    const handleSubmit = async(event) =>{
     
        event.preventDefault();
        const result = await loginUser(username, password)
        console.log(result)
        setApiMessage(result.message);
        storeCurrentUser(result.user);  
        setCurrentUser(result.user);
    }

return (
    <header>
        <h1>Welcome to Fitness Tracker</h1>
        <form 
            className="user-select" 
            onSubmit={handleSubmit}>
            {
                currentUser
            ? <>
                <NavLink to="/myroutines" activeClassName="current">My Routines</NavLink>
                <NavLink to="/publicroutines" activeClassName="current">Public Routines</NavLink>
                <NavLink to="/activities" activeClassName="current">Activities</NavLink>
              </>
            : <>
                <input placeholder="username" value={username} onChange={(e)=>{setUsername(e.target.value)}}></input>
                <input placeholder="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}></input>
                <button>REGISTER</button>
                <button>LOG IN</button>
             </>        
            }
        </form>
    </header>
);
}
export default Header;