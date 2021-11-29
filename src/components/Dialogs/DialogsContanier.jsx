import React from 'react'
import Message from './Message/Message'
import { sendMessageActionCreator } from '../../redux/dialogs-reducer'
import Dialogs from './Dialogs'
import StoreContext from '../../StoreContext'
import { connect } from 'react-redux'
import { withAuthRedirect } from './../../hoc/withAuthRedirect'
import { compose } from 'redux'




let mapStateToProps = (state) => { //настраивает данные, которые мы возьмем из state
    return {
        dialogsPage: state.dialogsPage,
    }
}

let mapDispatchToProps = (dispatch) => { //настраивает callback'и которые мы будет отправлять в нашу презентационную компоненту
    return {
        sendMessage: (newMessageElement) => { dispatch(sendMessageActionCreator(newMessageElement)) }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)