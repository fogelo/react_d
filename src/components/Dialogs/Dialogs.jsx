import { NavLink } from 'react-router-dom'
import classes from './Dialogs.module.css'

const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <div className={classes.dialog +' '+ classes.active}>
                    <NavLink to='/dialogs/1'>Sveta</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to='/dialogs/2'>Andrey</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to='/dialogs/3'>Anna</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to='/dialogs/4'>Dmitriy</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to='/dialogs/5'>Vladimir</NavLink>
                </div>
            </div>
            <div className={classes.messages}>
                <div className={classes.message}>What do you do?</div>
                <div className={classes.message}>Where are you?</div>
                <div className={classes.message}>What is your name?</div>
            </div>
        </div>
    )
}

export default Dialogs