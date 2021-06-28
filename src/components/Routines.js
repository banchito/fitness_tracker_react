import React, {useState} from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {createRoutineFrontEnd} from '../api';

import "./Routines.css";

const Routines = ({currentUser, userRoutines}) => {

    const [show, setShow] = useState(false);
    const [newRoutine, setNewRoutine] = useState({name:"", goal:"", isPublic:true})
    const [formButton, setFormButton] = useState();
    console.log(formButton)

    console.log(newRoutine)

    const handleClose = () => {setShow(false);}
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
        if(formButton === 'openModal') { 
            setNewRoutine({name:"", goal:"", isPublic:true})
            console.log(newRoutine)
        };
        if(formButton === 'create'){
            try{
                const result = await createRoutineFrontEnd(newRoutine)
            }catch(error){
                console.log(error);
            }
        }
        
    }

    return( 
        <div className="routines">
            <h2>Hi {currentUser.username}, Here are your Routines &nbsp;|&nbsp; <Button variant="primary" onClick={() =>{setFormButton('openModal');handleShow()}}>Create Routine</Button></h2>
            <>
            
                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>New Routine</Modal.Title>
                  </Modal.Header>
                  <form onSubmit={handleSubmit}>
                  <Modal.Body>
                  
                      <Form.Group controlId="formBasicEmail">
                        <Form.Control type="text" name="name" placeholder="Enter routine name" onChange={handleChange} />
                      </Form.Group>
                      <Form.Group controlId="formBasicPassword">
                        <Form.Control type="text" name="goal" placeholder="Enter routine goal" onChange={handleChange} />
                      </Form.Group>
                      <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Routine Public" />
                      </Form.Group>
                      {/* <Button variant="primary" type="submit">
                        Submit
                      </Button> */}
                   
                            {/* <Form.Control type="text" name="name" placeholder="Enter routine name" onChange={handleChange}/>
                            <br/>
                            <Form.Control type="text" name="goal" placeholder="Enter routine goal" onChange={handleChange}/> */}
                       
                  </Modal.Body>
                  
                  <Modal.Footer>
                     <Button variant="secondary" type="submit" onClick={() =>{setFormButton('close');handleClose()}}>
                      Close
                    </Button>
                    <Button variant="primary" type="submit" onClick={() =>{setFormButton('create');handleClose()}}>
                      Create
                    </Button> 
                  </Modal.Footer>
                  </form>
                </Modal>
                
            </>
            <p>There is a total of {userRoutines.length} routines.</p>
            
            {
                userRoutines.map(({id, name, goal, creatorName, activities}) =>(
                    
                <div key={id} className="post">
                    <h3>Routine Name: {name}</h3>
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