import React, {useEffect, useState} from 'react';
import Axios from 'axios';
import CardTarea from '../CardTarea';
import './css.css';

export default function ListaTareas(props) {
    const url = 'https://pure-bayou-88434.herokuapp.com/api/tareas/';
    const [loading, setLoading] = useState(false);
    const handleSetLoading = (value) =>{
        setLoading(value);
    }

    const [tareas, setTareas] = useState([]);
    useEffect(() => {
        const getDatos = async () =>{
            const res = await Axios.get(url);
            setTareas(res);
            handleSetLoading(true);
        }    
        getDatos();
    }, []);

    const getTasks = async () =>{
        const res = await Axios.get(url);
        setTareas(res);
        handleSetLoading(true);
    }
    

    const newTask = async () => {
        handleSetLoading(false);
        await Axios.post(url, {titulo:'', descripcion:'', autor:props.sesion.user,date: new Date()});
        getTasks();
    }

    const handleDeleteTask = async (id) =>{
        handleSetLoading(false);
        await Axios.delete(url + id);
        getTasks();
    }

    if(!loading){
        return(
            <div className="cargando"></div>
        )
    }
    else 
        return (
        <div>
            <div className="content-info-new">
                <p>Bienvenido, <b>{props.sesion.user}</b>.</p>
                <div className="buton-new" onClick={newTask}>+ Crear Tarea</div>
            </div>
            <div className="content-list">
                {tareas.data.length <= 0 
                ? <p className="w100">No hay tareas.</p>
                : tareas.data && tareas.data.map(tarea => <CardTarea delete={handleDeleteTask} data={tarea} key={tarea._id}/>)
                }
            </div>
        </div>
    )
    
}