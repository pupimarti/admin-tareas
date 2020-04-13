import React, {useEffect, useState} from 'react';
import Axios from 'axios';
import CardTarea from '../CardTarea';
import './css.css';

export default function ListaTareas(props) {
    const [loading, setLoading] = useState(false);
    const handleSetLoading = (value) =>{
        setLoading(value);
    }

    const [tareas, setTareas] = useState([]);
    useEffect(() => {
        getTasks();
    }, []);

    const getTasks = async () =>{
        const res = await Axios.get(window.$urlTasks+ '/' + props.sesion.user);
        setTareas(res);
        handleSetLoading(true);
    }
    

    const newTask = async () => {
        handleSetLoading(false);
        await Axios.post(window.$urlTasks, {titulo:'', descripcion:'', autor:props.sesion.user,date: new Date()});
        getTasks();
    }

    const handleDeleteTask = async (id) =>{
        handleSetLoading(false);
        await Axios.delete(window.$urlTasks + '/' + id);
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