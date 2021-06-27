import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import { Header, Routines, Activities, PublicRoutines } from "./components";
import {getCurrentUser} from './auth';
import {getPublicRoutinesByUserFrontEnd, fetchActivitiesFrontEnd, getAllPublicRoutinesFrontEnd} from './api'



const App = () => {

    const [currentUser, setCurrentUser] = useState(getCurrentUser());
    const [userRoutines, setUserRoutines] = useState([]);
    const [routines, setRoutines] = useState([]);
    const [activities, setActivities]= useState([]);

    console.log("currentUser", currentUser);

    useEffect(()=> {
        if(!currentUser) {setUserRoutines([]); setRoutines([]); setActivities([]); return;}

        getPublicRoutinesByUserFrontEnd(currentUser.username)
            .then((routines)=>{
                console.log("routines:", routines);
                setUserRoutines(routines)
            })
            .catch((error) => {
                console.log(error);
            });
        
        fetchActivitiesFrontEnd()
            .then((activities)=>{
              console.log("activities:", activities);
              setActivities(activities) 
            })
            .catch((error) => {
              console.log(error);
            });
        
        getAllPublicRoutinesFrontEnd()
            .then((publicRoutines)=>{
                console.log("publicRoutines:", publicRoutines);
                setRoutines(publicRoutines) 
            })
            .catch((error) => {
                console.log(error);
            });
        
    }, [currentUser]);

    return(
        <Router> 
            <div id="App">
                <Header currentUser={currentUser} setCurrentUser={setCurrentUser}/>
                {
                    currentUser ? <>
                        <Switch>
                            <Route path="/myroutines">
                                <Routines currentUser={currentUser} userRoutines={userRoutines}/>
                            </Route>
                            <Route path="/publicroutines">
                                <PublicRoutines currentUser={currentUser} routines={routines}/>
                            </Route>
                            <Route path="/activities">
                                <Activities currentUser={currentUser} activities={activities}  />
                            </Route>
                            <Route exact path="/">
                                <h2 style={{padding: ".5em"}}>Welcome, { currentUser.username }!</h2>
                             </Route>
                                <Redirect to="/" />
                        </Switch>
                </> : <>
                    <Switch>
                        <Route exact path="/">
                        <h2 style={{ padding: ".5em" }}>Please log in, above.</h2>
                        </Route>
                        <Redirect to="/" />
                    </Switch>
                    </>
                }
            </div>
        </Router>    
    );
}

ReactDOM.render(<App/>,  document.getElementById("app"));