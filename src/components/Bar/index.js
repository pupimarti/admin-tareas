import React from 'react'
import {Link} from 'react-router-dom';
import './css.css';

export default function Navegacion(props) {

    return (
        <div className="content-bar">
             <Link className="logo" to="/">
                 Administrador de Tareas
            </Link>
            {props.sesion
                ?<ul className="nav">
                    <li>
                        <Link className="nav-item" to="/">
                            Tareas
                        </Link>
                    </li>
                    <li>
                        <div className="nav-item" onClick={props.handleLogout}>
                            Salir
                        </div>
                    </li>
                </ul>
                :<ul className="nav">
                    <li>
                        <Link className="nav-item" to="/login">
                            Ingresar
                        </Link>
                    </li>
                    <li>
                        <Link className="nav-item" to="/signup">
                            Crear Cuenta
                        </Link>
                    </li>
                </ul>
            }
        </div>
    )
}
