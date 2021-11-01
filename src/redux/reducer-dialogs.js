let UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT"
let SEND_MESSAGE = "SEND-MESSAGE"

const reducerDialogs = (state, action) => {

    switch (action.type) {
        case "SEND-MESSAGE":
            let newMessage = {
                id: '4',
                message: state.newMessageText,
            }
            state.messages.push(newMessage)
            state.newMessageText = ''
            return state
        case "UPDATE-NEW-MESSAGE-TEXT":
            state.newMessageText = action.newBody
            return state
        default:
            return state
    }
}

export const sendMessageActionCreator = () => {
    return ({ type: SEND_MESSAGE })
}

export const updateNewMessageTextActionCreator = (body) => {
    return ({ type: UPDATE_NEW_MESSAGE_TEXT, newBody: body })
}

export default reducerDialogs