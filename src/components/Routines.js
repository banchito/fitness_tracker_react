import React, {useState} from "react";
import ModalF from './Modal';
import Button from 'react-bootstrap/Button';
import {createRoutineFrontEnd, deleteRoutineFrontEnd, updateRoutineFrontEnd} from '../api';

import "./Routines.css";

const Routines = ({currentUser, userRoutines, setUserRoutines}) => {

    let initialState = {routineID:"", name:"", goal:"", isPublic:true};
   

    const [show, setShow] = useState(false);
    const [newRoutine, setNewRoutine] = useState({routineID:"", name:"", goal:"", isPublic:true})
    const [routineUpdateDelete, setroutineUpdateDelete] = useState({routineID:"", name:"", goal:"", isPublic:true})
    const [formButton, setFormButton] = useState("");
    
    
                
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const handleChange = (event) => {

        const { name, value } = event.target;

        setNewRoutine((prevNewRoutine)=>{
            return{
                ...prevNewRoutine,
            [name]: value
        }})
    }

    const handleSubmit = async(event) => {
        event.preventDefault()
        if(formButton === 'openModal'||formButton === 'close') { 
            resetNewRoutine()
            setFormButton("")
        };

        if(formButton === 'create'){
            if(!newRoutine.name || !newRoutine.goal ) return 
                
            try{
                const result = await createRoutineFrontEnd(newRoutine)
                resetNewRoutine()
                setFormButton("")
            }catch(error){
                console.log(error);
            }
        }

        if(formButton === 'update'){
           
            try{
                const result = await updateRoutineFrontEnd(routineUpdateDelete)
                resetNewRoutine()
                setFormButton("")
            }catch(error){
                console.log(error);
            }
        }
        
    }

    const findRoutineCrud = (routineId) =>{
        const [routineCrud] = userRoutines.map(routine=>{
            if(routineId === routine.id) {
                return (routine)
            }
        })
        const {id, name, goal, isPublic} = routineCrud
        setroutineUpdateDelete({id, name, goal, isPublic})
        formButton === 'delete' && deleteRoutine(id) 
        
    }

    const deleteRoutine =async(routineId)=> {
       
        try{
            const result = await deleteRoutineFrontEnd(routineId)
        }catch(error){
            console.log(error);
            
        }
        
    }

    const resetNewRoutine = () => {
        setNewRoutine(initialState)
    }

    return( 
        <div className="routines">
            <h2>Hi {currentUser.username}, Here are your Routines &nbsp;|&nbsp; <Button variant="primary" onClick={() =>{setFormButton('create'); handleShow()}}>Create Routine</Button></h2>
            <>
                <ModalF show={show}formButton={formButton} handleClose={handleClose} handleShow={handleShow}  handleChange={handleChange} handleSubmit={handleSubmit} setFormButton={setFormButton}/>   
            </>
            <p>There is a total of {userRoutines.length} routines.</p>
            
            {
                userRoutines.map(({id, name, goal, creatorName, activities}) =>(
                    
                <div key={id } className="post">
                    <h3>Routine Name: {name} &nbsp;|&nbsp; <Button variant="primary" onClick={() =>{setFormButton('update'); handleShow(); findRoutineCrud(id)}}>Update</Button>
                    &nbsp;|&nbsp; <Button variant="primary" onClick={() =>{setFormButton('delete'); findRoutineCrud(id);}}>Delete</Button></h3>
                    <p>Routine Goal: {goal}</p>
                    <p>Creator Name: {creatorName}</p>
                    {
                        activities.length > 0 ? <>
                            {activities.map(({id, name, description, duration, count})=> (
                                <div key={id} className="activities">
                                    <h3>Routine Activity: {name}</h3>
                                    <p>Activity Description: {description}</p>
                                    <p>Duration: {duration}</p>
                                    <p>Count: {count}</p>
                                </div>
                            ))} </>
                        : <> <p>There are {activities.length} Activities</p> </>
                    }                
                </div>  
                ))}
        </div>

    );
}
export default Routines;