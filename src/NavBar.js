import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = () => {
    return(
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
               {/*   
             <li>
                <Link to="/about">About</Link>
                </li>*/}
                <li>
                <Link to="/positions-list">Positions</Link>
                </li>
               {/* <li>
                <Link to="/Contact">Contact</Link>
               </li>*/}
            </ul>
        </nav>
    )
   
}

export default NavBar;