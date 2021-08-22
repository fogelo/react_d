import { NavLink } from 'react-router-dom'
import classes from './Navbar.module.css'

const Navbar = () => {
    return (
        <nav className = {classes.navbar}>
        <div><NavLink to="/profile" activeClassName = {classes.active}>Profile</NavLink></div>
        <div><NavLink to="/dialogs" activeClassName = {classes.active}>Messages</NavLink></div>
        <div><NavLink to="/News" activeClassName = {classes.active}>News</NavLink></div>
        <div><NavLink to="/Music" activeClassName = {classes.active}>Music</NavLink></div>
        <div><NavLink to="/Settings" activeClassName = {classes.active}>Settings</NavLink></div>
      </nav>
    )
}

export default Navbar