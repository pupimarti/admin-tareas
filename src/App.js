import React from 'react';
import './App.css';
//import Navegacion from './components/Bar';
//import ListaTareas from './components/ListaTareas';
//import Sesion from './components/Sesion';
//import Axios from 'axios';
import Footer from './components/Footer';
//const url = 'https://pure-bayou-88434.herokuapp.com/api/users/';


export default function App(){

    
    /*const [loading, setLoading] = useState(false);
    const handleSetLoading = (value) =>{
        setLoading(value);
    }*/

   /* const [sesion, setSesion] = useState(null)

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
    }*/
    
    //if(!loading)
        return(
            <div>
                <Footer />
            </div>
        )
    /*else
        return(
            <div className="cargando"></div>
        )*/
}