import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import './App.css';
import Navegacion from './components/Bar';
import ListaTareas from './components/ListaTareas';
import Sesion from './components/Sesion';
import Axios from 'axios';
import Footer from './components/Footer';
const url = 'https://pure-bayou-88434.herokuapp.com/api/users/';


export default function App(){

    
    /*const [loading, setLoading] = useState(false);
    const handleSetLoading = (value) =>{
        setLoading(value);
    }*/

    const [sesion, setSesion] = useState(null)

    const handleLogin = async (user, password) => {
            const login = await Axios.post(url + 'login', {user:user, password:password});
            if(login.data !== null)
                setSesion(login.data);
            else
                return null;
    }

    const handleSignup = async (user, password) => {
        const signup = await Axios.post(url + 'new', {user:user, password:password});
        if(signup.data !== null)
            setSesion(signup.data);
        return signup;
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
                        <Redirect to="/tareas" />
                    </Switch>
                    :<Switch>
                        <Route path="/signup" 
                            component={() => 
                                <Sesion 
                                onClick={handleSignup}
                                text='Crear Cuenta'
                                />} 
                            />
                        <Route path="/login" 
                            component={() => 
                                <Sesion 
                                onClick={handleLogin}
                                text='Ingresar'
                                />} 
                        />
                        <Redirect to="/login" />
                    </Switch>
                }
                <Footer />
            </Router>
        )
    /*else
        return(
            <div className="cargando"></div>
        )*/
}