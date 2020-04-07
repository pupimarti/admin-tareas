import React, {useState} from 'react';
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

    const handleInputChange = (e) => {
        const target = e.target;
        const name = target.name;
        handleSetData({...data, [name]: target.value})
    }

    const handleOnClick = async (e) => {
        e.preventDefault();
        handleSetLoading(true);
        if(await props.onClick(data.user, data.password) === null){
            alert('Usuario o contraseña incorrectos');
            handleSetLoading(false);
        }
    }
    return(
        <div className="login-page">
            <span className="title-form">{props.text}</span>
            <div className="form">
                {!loading
                ?<form className="login-form">
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
                    
                    <button onClick={handleOnClick}>{props.text}</button>
                </form>
                :<div className="cargando"></div>
                }
            </div>
        </div>
    )
}
