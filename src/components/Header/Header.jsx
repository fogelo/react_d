import classes from './Header.module.css'
import { NavLink } from 'react-router-dom'




const Header = (props) => {
    
    return (
        <header className={classes.header}>
            <img className={classes.headerImg} src='https://www.lifepng.com/wp-content/uploads/2020/10/580b57fcd9996e24bc43c53e.png'></img>
            <div className={classes.loginBlock}>
                {props.isAuth ? props.login : <NavLink to='/login'>login</NavLink>}
                
            </div>
        </header>
        
    )
}

export default Header