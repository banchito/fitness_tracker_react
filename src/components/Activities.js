import React from "react";
import "./Activities.css";

const Activities = ({currentUser, activities}) => {
    return( 
        <div className="activities">
            <h2>Hi {currentUser.username}, Here are all activities</h2>
            <p>There is a total of {activities.length} activities.</p>
            {
                activities.map(({id, name, description}) =>(
                <div key={id} className="post">
                    <h3>Activity Name: {name}</h3>
                    <p>Description: {description}</p>
                </div>  
                ))}
        </div>
    );
}

export default Activities;