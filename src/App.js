import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import './App.css';
import Navegacion from './components/Bar';
import ListaTareas from './components/ListaTareas';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';
//import Axios from 'axios';
import Footer from './components/Footer';

window.$url = 'http://localhost:4000';
window.$urlUsers = window.$url + '/api/users';
window.$urlTasks = window.$url + '/api/tareas';

export default function App(){

    const [sesion, setSesion] = useState(null)

    const handleLogin = async (user, password) => {
        setSesion(user, password);
    }

    const handleSignup = async (user, password) => {
        console.log('cuenta creada');
    }

    const handleLogout = async () => {
        setSesion(null);
    }
    
    //if(!loading)
        return(
            <Router>
                <Navegacion sesion={sesion} handleLogout={handleLogout} />
                    {sesion
                    ?<Switch>
                        <Route path="/tareas" component={() =>
                            <ListaTareas
                                sesion={sesion}
                            />} />
                        <Route component={()=>
                            <Redirect to="/tareas"/>} 
                        />
                    </Switch>
                    :<Switch>
                        <Route path="/signup" 
                            component={() => 
                                <SignUp 
                                onClick={handleSignup}
                                />} 
                            />
                        <Route path="/login" 
                            component={() => 
                                <LogIn 
                                onClick={handleLogin}
                                />} 
                        />
                        <Route component={()=>
                            <Redirect to="/login"/>} 
                        />
                    </Switch>
                }
                <Footer />
            </Router>
        )
}