import { NavLink } from 'react-router-dom'
import classes from './Dialogs.module.css'

const DialogsItem = (props) => {
    return (
        <div className={classes.dialog +' '+ classes.active}>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={classes.message}>{props.message}</div>
    )
}

const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <DialogsItem name='Sveta' id='1'></DialogsItem>
                <DialogsItem name='Andrey' id='2'></DialogsItem>
                <DialogsItem name='Anna' id='3'></DialogsItem>
                <DialogsItem name='Dmitriy' id='4'></DialogsItem>
                <DialogsItem name='Vladimir' id='5'></DialogsItem>
            </div>
            <div className={classes.messages}>
                <Message message='What do you do?'></Message>
                <Message message='Where are you?'></Message>
                <Message message='What is your name?'></Message>
            </div>
        </div>
    )
}

export default Dialogs