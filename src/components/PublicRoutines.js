import React from 'react';
import './PublicRoutines.css';

const PublicRoutines = ({currentUser, routines}) => {
    return( 
        <div className="publicroutines">
            <h2>Hi {currentUser.username}, Here are all public routines with their activities</h2>
            <p>There is a total of {routines.length} public routines.</p>

            {
                routines.map(({id, name, goal, creatorName, activities}) =>(
                <div key={id} className="post">
                    <h3>Routine Name: {name}</h3>
                    <p>Routine Goal: {goal}</p>
                    <p>Creator Name: {creatorName}</p>
                    
                    {activities.map(({id, name, description, duration, count})=> (
                        <div key={id} className="activities">
                            <h3>Routine Activity: {name}</h3>
                            <p>Activity Description: {description}</p>
                            <p>Duration: {duration}</p>
                            <p>Count: {count}</p>
                        </div>
                    ))}
                </div>  
                ))}
        </div>
    );
}
export default PublicRoutines;