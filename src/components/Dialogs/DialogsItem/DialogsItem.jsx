import { NavLink } from 'react-router-dom'
import classes from './DialogsItem.module.css'


const DialogsItem = (props) => {
    return (
        <div className={classes.dialog +' '+ classes.active}>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    )
}

export default DialogsItem