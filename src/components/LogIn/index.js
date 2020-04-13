import React, {useState} from 'react';
import Axios from 'axios';
import './css.css';

export default function Sesion(props) {
    const [loading, setLoading] = useState(false);
    const handleSetLoading = (value) =>{
        setLoading(value);
    }

    const [data, setData] = useState({user: '', password: ''});
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
        /*const login = await Axios.post(window.$urlUsers + '/login', 
        {user:data.user, password:data.password});
            if(login.data){
                handleSetErrors(login.data.errors);
                handleSetLoading(false);
            }
            else
                props.onClick(data.user);*/
    }
    return(
        <div className="login-page">
            <span className="title-form">Ingresar</span>
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
                    />
                    <input 
                    type="password" 
                    placeholder="Contraseña"
                    name="password"
                    onChange={handleInputChange}
                    value={data.password}
                    />
                    
                    <button onClick={handleOnClick}>INGRESAR</button>
                </form>
                :<div className="cargando"></div>
                }
            </div>
        </div>
    )
}
