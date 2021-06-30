import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const ModalF = ({show, handleChange, formButton, handleClose, handleSubmit, setFormButton}) => {
return(
    
    <div>
        <Modal show={show} onHide={handleClose}>
            <form onSubmit={handleSubmit}>
                
                
                

                {   formButton === 'create' && ( <>
                        <Modal.Header closeButton>
                           <Modal.Title>New Routine</Modal.Title>
                        </Modal.Header>

                        <Modal.Body>
                            <Form.Group controlId="formBasicEmail">
                              <Form.Control type="text" name="name" placeholder="Enter routine name" onChange={handleChange} />
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                              <Form.Control type="text" name="goal" placeholder="Enter routine goal" onChange={handleChange} />
                            </Form.Group> 
                        </Modal.Body>  

                        <Modal.Footer>
                           <Button variant="secondary" type="submit" onClick={() =>{setFormButton('close');handleClose()}}>
                            Close
                          </Button>
                          <Button variant="primary" type="submit" onClick={() =>{handleClose()}}>
                            Create
                          </Button> 
                        
                        
                        
                        </Modal.Footer>

                </>)}

                    {   formButton === 'update'&& ( <>
                        
                        <Modal.Header closeButton>
                           <Modal.Title>Update Routine</Modal.Title>
                        </Modal.Header>

                         <Modal.Body>
                             <Form.Group controlId="formBasicEmail">
                               <Form.Control type="text" name="name" placeholder="Update routine name" onChange={handleChange} />
                             </Form.Group>
                             <Form.Group controlId="formBasicPassword">
                               <Form.Control type="text" name="goal" placeholder="Update routine goal" onChange={handleChange} />
                             </Form.Group>  
                            <Form.Group controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" name="public" label="Routine public" onChange={handleChange}/>
                            </Form.Group>                     
                         </Modal.Body>  
                         <Modal.Footer>
                            <Button variant="secondary" type="submit" onClick={() =>{setFormButton('close');handleClose()}}>
                             Close
                           </Button>
                           <Button variant="primary" type="submit" onClick={() =>{setFormButton('update'); handleClose()}}>
                             Update
                           </Button> 
                        </Modal.Footer>
                 </>)}

            </form>
        </Modal>
       
    </div>
    );
}

export default ModalF;