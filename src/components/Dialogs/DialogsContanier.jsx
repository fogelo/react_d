import React from 'react'
import Message from './Message/Message'
import { sendMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/reducer-dialogs'
import Dialogs from './Dialogs'


 

const DialogsContanier = (props) => {
    let state = props.store.getState().dialogsPage

    let onSendMessageClick = ()=>  {
        props.store.dispatch(sendMessageActionCreator())
    }

    let onNewMessageChange =(body) => {
        props.store.dispatch(updateNewMessageTextActionCreator(body))
    }



    return (
        <Dialogs updateNewMessageBody = {onNewMessageChange} sendMessage={onSendMessageClick} dialogsPage={state}></Dialogs>
    )
}

export default DialogsContanier