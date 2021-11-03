import React from 'react'
import Message from './Message/Message'
import { sendMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialogs-reducer'
import Dialogs from './Dialogs'
import StoreContext from '../../StoreContext'




const DialogsContanier = (props) => {

    return <StoreContext.Consumer> 
        {
        (store) => {
            let state = store.getState().dialogsPage

            let onSendMessageClick = () => {
                store.dispatch(sendMessageActionCreator())
            }

            let onNewMessageChange = (body) => {
                store.dispatch(updateNewMessageTextActionCreator(body))
            }
            return <Dialogs updateNewMessageBody={onNewMessageChange} sendMessage={onSendMessageClick} dialogsPage={state}></Dialogs>
        }
    }
    </StoreContext.Consumer>
}

export default DialogsContanier