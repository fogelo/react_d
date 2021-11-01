import React from 'react'
import classes from './Dialogs.module.css'
import DialogsItem from './DialogsItem/DialogsItem'
import Message from './Message/Message'
import { sendMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/state'

 

const Dialogs = (props) => {

    let dialogsElements = props.dialogs.map(d => <DialogsItem name={d.name} id={d.id}></DialogsItem>) 
    let messagesElements = props.messages.map(m => <Message message={m.message}></Message>)
    
    let newMessageElement = React.createRef();

    let onMessageChange =() => {
        let body = newMessageElement.current.value
        props.dispatch(updateNewMessageTextActionCreator(body))
    }

    let sendMessage = ()=>  {
        props.dispatch(sendMessageActionCreator())
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
                <textarea ref={newMessageElement} onChange={onMessageChange} value={props.newMessageText}></textarea>
                <div><button onClick={sendMessage}>send</button></div>
            </div>
        </div>
    )
}

export default Dialogs