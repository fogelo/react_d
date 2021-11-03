import React from 'react'
import Message from './Message/Message'
import { sendMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialogs-reducer'
import Dialogs from './Dialogs'
import StoreContext from '../../StoreContext'
import { connect } from 'react-redux'

let mapStateToProps = (state) => { //настраивает данные, которые мы возьмем из state
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch) => { //настраивает callback'и которые мы будет отправлять в нашу презентационную компоненту
    return {
        updateNewMessageBody: (body) => { dispatch(updateNewMessageTextActionCreator(body)) },
        sendMessage: () => { dispatch(sendMessageActionCreator()) }
    }
}
// connect создает контейнерную компонунту для Dialogs как мы это делали вручную, 
// f1 и f2 нужны чтобы настраивать то что нужно для презентационной омпоненты Dialogs
const DialogsContanier = connect(mapStateToProps, mapDispatchToProps)(Dialogs)
export default DialogsContanier