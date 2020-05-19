import React,{ useContext} from 'react'
import {ThemeContext} from '../context/ThemeContext'
import { AuthContext } from '../context/AuthContext';


function Navbar(){
    const { isLightTheme, light, dark} = useContext(ThemeContext)
    const { isAuthenticated, toggleAuth} = useContext( AuthContext);
    const theme = isLightTheme ? light : dark;

    return(
        <nav style={{background: theme.ui, color: theme.syntax}}>
        <h2>Context App</h2>
        <div onClick={toggleAuth}>
            { isAuthenticated ? 'logged in' : 'logged out'}
        </div>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>


    )
}

export default Navbar