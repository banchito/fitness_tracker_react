import React from "react";
import "./Routines.css";

const Routines = ({currentUser, userRoutines}) => {

    return( 
        <div className="routines">
            <h2>Hi {currentUser.username}, Here are your Routines</h2>
            <p>There is a total of {userRoutines.length} routines.</p>
            {
                userRoutines.map(({id, name, goal, creatorName, activities}) =>(
                <div key={id} className="post">
                    <h3>Routine Name: {name}</h3>
                    <p>Routine Goal: {goal}</p>
                    <p>Creator Name: {creatorName}</p>
                    <p>Activities: {activities}</p>
                </div>  
                ))}
        </div>

    );
}
export default Routines;