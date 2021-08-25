import React from 'react'
import classes from './Dialogs.module.css'
import DialogsItem from './DialogsItem/DialogsItem'
import Message from './Message/Message'

 

const Dialogs = (props) => {

    let dialogsElements = props.dialogs.map(d => <DialogsItem name={d.name} id={d.id}></DialogsItem>) 
    let messagesElements = props.messages.map(m => <Message message={m.message}></Message>)
    
    let newMessageElement = React.createRef();
    let addMessage = ()=>  {
        let message = newMessageElement.current.value;
        alert(message);
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
            </div>

            <textarea ref={newMessageElement}></textarea>
            <button onClick={addMessage}>add</button>
        </div>
    )
}

export default Dialogs