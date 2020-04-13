import React, {useState} from 'react';
import Axios from 'axios';
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css';
import {format} from 'timeago.js';

import './css.css';

export default function CardTarea(props) {
    const [edit, setEdit] = useState(false);
    

    const handleSetEdit = () =>{
        if(!edit)
            if(data.edittitle !== data.titulo) //if edittitle is != title, i match it
                setData({...data, edittitle: data.titulo, editdescription: data.descripcion});
        setEdit(!edit);
    }

    const [data, setData] = useState(props.data);
    const handleSetData = (d) =>{
        setData(d);
    }

    if(data.titulo === '' && !edit) //if title is it empty, is new, edit on.
        handleSetEdit();

    const handleInputChange = (e) => {
        const target = e.target;
        const name = target.name;
        setData({...data, [name]: target.value})
    }

    const [loading, setLoading] = useState(false);

    const handleSetLoading = (value) =>{
        setLoading(value);
    }

    const handleOk = async () => {
        if(data.edittitle === '' || data.editdescription === '')
            alert('No pueden quedar campos vacios');
        else
            handleEdit();
    }

    const handleEdit = async () => {
        handleSetLoading(true);
        const res = await Axios.put(window.$urlTasks + '/' + props.data._id, {
            titulo: data.edittitle,
            descripcion: data.editdescription,
            date: data.date
        });
        handleSetData(res.data);
        handleSetEdit();
        handleSetLoading(false);
    }

    const handleDelete = () => {
        props.delete(props.data._id);
    }
    
    const handleDateChange = date => {
        setData({...data, date});
    }
      
    if(loading){
        return(
            <div className="card">
                <div className="cargando"></div>
            </div>
        )
    }
    else if(edit){
        return(
            <div className="card">
                <div className="card-header">
                    <input
                        name="edittitle"
                        className="title input"
                        type="text"
                        placeholder="Titulo"
                        value={data.edittitle}
                        onChange={handleInputChange}
                        required
                        autoComplete="off"
                        spellCheck="false"
                    />
                    <div className="edit" onClick={handleSetEdit}>Cancel</div>
                    <div className="x ok" onClick={handleOk}>Ok</div>
                </div>
                <input
                    name="editdescription"
                    className="description input"
                    type="text"
                    placeholder="Descripcion"
                    value={data.editdescription}
                    onChange={handleInputChange}
                    required
                    autoComplete="off"
                    spellCheck="false"
                />
                <div className="content-dpicker">
                    <DatePicker 
                    selected={new Date(data.date)}
                    onChange={handleDateChange}
                    />
                    </div>
            </div>
        )
    }
    
    else return (
            <div className="card">
                <div className="card-header">
                    <h3 className="title">
                            {data.titulo}
                    </h3>
                    <div className="edit" onClick={handleSetEdit}>Editar</div>
                    <div className="x" onClick={handleDelete}>X</div>
                </div>
                <p className="description">
                    {data.descripcion}
                </p>
                <p className="time">
                    {format(new Date(data.date))}
                </p>
            </div>
    )
}
