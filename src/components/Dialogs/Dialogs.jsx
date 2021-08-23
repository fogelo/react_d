import { NavLink } from 'react-router-dom'
import classes from './Dialogs.module.css'

let dialogsData = [
    {name: 'Sveta', id: '1'},
    {name: 'Andrey', id: '2'},
    {name: 'Anna', id: '3'},
    {name: 'Dmitriy', id: '4'},
    {name: 'Vladimir', id: '5'},

]

let messagesData = [
    {message: 'What do you do?', id: '1'},
    {message: 'Where are you?', id: '2'},
    {message: 'What is your name?', id: '3'},
]



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
                <DialogsItem name={dialogsData[0].name} id={dialogsData[0].id}></DialogsItem>
                <DialogsItem name={dialogsData[1].name} id={dialogsData[1].id}></DialogsItem>
                <DialogsItem name={dialogsData[2].name} id={dialogsData[2].id}></DialogsItem>
                <DialogsItem name={dialogsData[3].name} id={dialogsData[3].id}></DialogsItem>
                <DialogsItem name={dialogsData[4].name} id={dialogsData[4].id}></DialogsItem>
            </div>
            <div className={classes.messages}>
                <Message message={messagesData[0].message}></Message>
                <Message message={messagesData[1].message}></Message>
                <Message message={messagesData[2].message}></Message>
            </div>
        </div>
    )
}

export default Dialogs