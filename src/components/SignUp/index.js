import React, {useState} from 'react';
import Axios from 'axios';
import './css.css';

export default function SignUp(props) {
    const [loading, setLoading] = useState(false);
    const handleSetLoading = (value) =>{
        setLoading(value);
    }

    const [data, setData] = useState({user: '', password: '', email: ''});
    const handleSetData = (d) =>{
        setData(d);
    }

    const [errors, setErrors] = useState([]);
    const handleSetErrors = (e) => {
        setErrors(e);
    }

    const handleInputChange = (e) => {
        const target = e.target;
        const name = target.name;
        handleSetData({...data, [name]: target.value})
    }

    const handleOnClick = async (e) => {
        e.preventDefault();
        handleSetLoading(true);
        setErrors([]);
        const signup = await Axios.post(window.$urlUsers + '/new', {user:data.user, password:data.password, email:data.email});
        if(signup.data.errors){
            handleSetErrors(signup.data.errors);
            handleSetLoading(false);
        }
        else
            props.login(data.user, data.password);
    }
    return(
        <div className="login-page">
            <span className="title-form">Crear Cuenta</span>
            <div className="errors">
                {errors && errors.map((e, index) => <p key={index}>{e.text}</p> )}
            </div>
            <div className="form">
                {!loading
                ?<form className="login-form" onSubmit={handleOnClick}>
                    <input 
                    type="text" 
                    placeholder="Usuario"
                    name="user"
                    onChange={handleInputChange}
                    value={data.user}
                    required
                    />
                    <input 
                    type="email" 
                    placeholder="E-mail"
                    name="email"
                    onChange={handleInputChange}
                    value={data.email}
                    required
                    />
                    <input 
                    type="password" 
                    placeholder="Contraseña"
                    name="password"
                    onChange={handleInputChange}
                    value={data.password}
                    required
                    />
                    
                    <button className="button" >CREAR CUENTA</button>
                </form>
                :<div className="cargando"></div>
                }
            </div>
        </div>
    )
}
