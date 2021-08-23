import classes from './Dialogs.module.css'
import DialogsItem from './DialogsItem/DialogsItem'
import Message from './Message/Message'

let dialogs = [
    {name: 'Sveta', id: '1'},
    {name: 'Andrey', id: '2'},
    {name: 'Anna', id: '3'},
    {name: 'Dmitriy', id: '4'},
    {name: 'Vladimir', id: '5'},
]

let messages = [
    {message: 'What do you do?', id: '1'},
    {message: 'Where are you?', id: '2'},
    {message: 'What is your name?', id: '3'},
]

let dialogsElements = dialogs.map(d => <DialogsItem name={d.name} id={d.id}></DialogsItem>) 

let messagesElements = messages.map(m => <Message message={m.message}></Message>) 

const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs