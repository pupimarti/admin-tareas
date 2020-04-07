import React from 'react';
import './footer.css';

export default function Footer(){
    return(
        <footer className="footer">
            <div className="col-900">
                <div className="copyright">&copy; 2020 - Creado por <a href="http://www.pupimarti.eshost.com.ar" target="_blank" rel="noopener noreferrer">Pupi Marti</a> </div>
                <ul className="menu">
                    <li className="item"><a href="https://github.com/pupimarti" rel="noopener noreferrer" target="_blank">GitHub</a></li>
                    <li className="item"><a href="https://www.linkedin.com/in/pupimarti/" rel="noopener noreferrer" target="_blank">Linkedin</a></li>
                    <li className="item"><a href="https://api.whatsapp.com/send?phone=5492245427854" rel="noopener noreferrer" target="_blank">Whatsapp</a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}