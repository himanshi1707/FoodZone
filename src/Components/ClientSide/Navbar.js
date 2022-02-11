import React from 'react'
import './foodzone.css';
import { Link } from 'react-router-dom';

export default function Navbar(props){
    return (
        <React.Fragment>
            <nav>
                <ul className="list">
                    <Link to={props.pathname} style={{textDecoration: 'none', color:'#000000', letterSpacing:'1px'}}>
                        <li>
                            {props.name}
                        </li>    
                    </Link>
                </ul>
            </nav>
        </React.Fragment>
    )
}