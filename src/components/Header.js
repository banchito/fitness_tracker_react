import React, {useState} from 'react';
import "./Header.css";
import {registerUser, loginUser} from '../api';
import { NavLink } from 'react-router-dom';
import {storeCurrentUser, clearCurrentUser} from '../auth'

const Header = ({currentUser, setCurrentUser, setApiMessage}) => {
    
    const [username, setUsername]  = useState('');
    const [password, setPassword]  = useState('');
    
    
    const [formButton, setFormButton] = useState();

    const handleSubmit = async(event) =>{
        
        event.preventDefault();
        
        
        if(formButton === 'logout') return handleUserLogout()

        if (formButton === "login" ){
            try{
                const result = await loginUser(username, password)
                hanldeLoginAndRegister(result)     
            }catch(error){
                console.log(error);
            }   
        }

        if (formButton === "register" ){
           try{
            const result = await registerUser(username, password)
            hanldeLoginAndRegister(result)  
           }catch(error){
             console.log(error);
           }   
        }
    }

    const handleUserLogout = () => {
        clearCurrentUser();
        setCurrentUser(null);
    }

    const hanldeLoginAndRegister = (result) => {
        setApiMessage(result.message);
        storeCurrentUser(result.user); 
        setCurrentUser(result.user);
        setUsername('')
        setPassword('')
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
                <button name="logout" type="submit" value="logout" onClick={ () =>{setFormButton('logout')} }>LOG OUT, { currentUser.username }</button>
              </>
            : <>
                <input placeholder="username" value={username} onChange={(e)=>{setUsername(e.target.value)}}></input>
                <input placeholder="password" type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}></input>
                <button name="register" type="submit" value="register" onClick={() =>{setFormButton('register')}}>REGISTER</button>
                <button name="login" type="submit" value="login" onClick={() =>{setFormButton('login')}}>LOG IN</button>
             </>        
            }
        </form>
    </header>
);
}
export default Header;