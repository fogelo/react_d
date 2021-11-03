import React from 'react'
import classes from './Dialogs.module.css'
import DialogsItem from './DialogsItem/DialogsItem'
import Message from './Message/Message'

 

const Dialogs = (props) => {
    let state = props.dialogsPage

    let dialogsElements = state.dialogs.map(d => <DialogsItem name={d.name} key={d.id} id={d.id}></DialogsItem>) 
    let messagesElements = state.messages.map(m => <Message message={m.message} key={m.id}></Message>)
    let newMessageElement = React.createRef();

    let onSendMessageClick = ()=>  {
        props.sendMessage()
    }

    let onNewMessageChange =() => {
        let body = newMessageElement.current.value
        props.updateNewMessageBody(body)
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
                <textarea ref={newMessageElement} onChange={onNewMessageChange} value={state.newMessageText}></textarea>
                <div><button onClick={onSendMessageClick}>send</button></div>
            </div>
        </div>
    )
}

export default Dialogs