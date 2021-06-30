import axios from "axios";
const BASE_URL = "https://fitnesstrac-kr.herokuapp.com/api"
//https://fitnesstrac-kr.herokuapp.com/api
//https://glacial-bayou-64478.herokuapp.com/api
//https://calm-lowlands-92047.herokuapp.com/api
//USERS
// Register a new User
export const registerUser = async (username, password) => {
    try{
        const response = await fetch(`${BASE_URL}/users/register`,{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ 
                  username: username,
                  password: password,
            }),
        });
        const data  = await response.json();
        localStorage.setItem("token", JSON.stringify(data.token));
        return data;
    }catch(error){
        throw error
    }
}

//Login a new User
export const loginUser = async (username, password) => {
    try{
        const response = await fetch(`${BASE_URL}/users/login`,{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: username,
                password: password,
            })
        });
        const data = await response.json();
        localStorage.setItem('token', JSON.stringify(data.token));
        return data
    }catch(error){
        throw error
    }
}

// /user/me
export const me = async () => {
    const token  = localStorage.getItem("token")

    if(!token) return;

    try{
        const response = await fetch(`${BASE_URL}/users/me`,{
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
              },   
        });
        const data = await response.json();
        return data
    }catch(error){
        throw error
    }
}

// GET /:username/routines
export const getPublicRoutinesByUserFrontEnd = async (username) => {
  
    try {
        const response = await fetch(`${BASE_URL}/users/${username}/routines`, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();
    
        return data;
      } catch (error) {
        throw error;
      }
}

//ACTIVITIES
// GET /api/activities
export const fetchActivitiesFrontEnd = async ( ) => {
    try{
        const response = await fetch(`${BASE_URL}/activities`,{
            headers: {
                'Content-Type': 'application/json',
            },
        });
         const data = await response.json();
        return data;
    }catch(error){
         throw error;
    }    
}   


// POST /api/activities
export const createActivityFrontEnd = async (name, description) => {
    try{
        const token = localStorage.getItem("token");
        if(!token) return
        const response = await fetch(`${BASE_URL}/activities`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({
                    name: name,
                    description: description,
                })
            });
            const data = await response.json();
            return data
    }catch(error){
        throw error
    }
}

// PATCH /:activityId
export const updateActivityFronEnd = async(activityID, name, description) => {
    try{
        const token = localStorage.getItem("token");
        if(!token) return   
        const response = await fetch(`${BASE_URL}/activities/${activityID}`,{
            method: "PATCH",
            body:JSON.stringify({
                name: name,
                description: description
            })
        });
        const data = await response.json();
        return data    
    }catch(error){
        throw error
    }

}


// GET /:activityId/routines
export const getPublicRoutinesByActivityFrontEnd = async (activityID)=> {
    try{
        const response = await fetch(`${BASE_URL}/activities/${activityID}/routines`,{
            headers:{
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        return data
    }catch(error){
        throw error
    }
}

// ROUTINES
// GET /api/routines
export const getAllPublicRoutinesFrontEnd = async () => {
    try{
        const response = await fetch(`${BASE_URL}/routines`,{
            headers:{
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        return data;
    }catch(error){
        throw error;
    }    
}

// POST /api/routines
export const createRoutineFrontEnd = async({name, goal, isPublic}) => {
    try{
        const token = JSON.parse(localStorage.getItem("token"));
        
        const response = await fetch(`${BASE_URL}/routines`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({
                    name: name,
                    goal: goal,
                    isPublic: isPublic
                })
            });
            const data = await response.json();
            return data
    }catch(error){
        throw error
    }
}

// PATCH /api/routines/:routineId
export const updateRoutineFrontEnd = async (routineId, name, goal, isPublic) => {
    try{
        const token = localStorage.getItem("token");
        if(!token) return;
        const response = await fetch(`${BASE_URL}/routines/${routineId}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
                name: name,
                goal: goal,
                isPublic: isPublic
            })
        });
        const data = await response.json()
        return data;
    }catch(error){
        throw error
    }
}

// DELETE /api/routines/:routineId
export const deleteRoutineFrontEnd = async (routineId) => {
    try{
        const token = localStorage.getItem("token");
        if(!token) return;
        const response = await fetch(`${BASE_URL}/routines/${routineId}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        });
        const data = await response.json()
        return data;
    }catch(error){
        throw error
    }
}

// POST /api/routines/:routineId/activities

export const addActivityToRoutineFronEnd = async(routineId,  activityId, duration, count) => {
    try{
        const response = await fetch(`${BASE_URL}/routines/${routineId}/activities`,{
            method: "POST",
            body: JSON.stringify({
                activityId: activityId,
                duration: duration,
                count: count 
              })
        });
        const data = await response.json()
        return data;
    }catch(error){
        throw error
    }
}

//ROUTINE_ACTIVITIES
//PATCH /api/routine_activities/:routineActivityId

export const updateRoutineActivityFrontEnd = async(routineActivityId, count, duration) =>{
    try{
        const token = localStorage.getItem("token");
        if(!token) return;
        const response = await fetch(`${BASE_URL}/routine_activities/${routineActivityId}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
                count: count,
                duration: duration,
            })
        });
            const data = await response.json()
            return data;
    }catch(error){
        throw error
    }
}

//DELETE /api/routine_activities/:routineActivityId

export const deleteRoutineActivityFrontEnd = async(routineActivityId) =>{
    try{
        const token = localStorage.getItem("token");
        if(!token) return;
        const response = await fetch(`${BASE_URL}/routine_activities/${routineActivityId}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        });
            const data = await response.json()
            return data;
    }catch(error){
        throw error
    }
}