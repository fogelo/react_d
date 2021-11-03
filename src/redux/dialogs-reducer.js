let UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT"
let SEND_MESSAGE = "SEND-MESSAGE"

let initialState = {
    dialogs: [
        { name: 'Sveta', id: '1' },
        { name: 'Andrey', id: '2' },
        { name: 'Anna', id: '3' },
        { name: 'Dmitriy', id: '4' },
        { name: 'Vladimir', id: '5' },
    ],
    messages: [
        { message: 'What do you do?', id: '1' },
        { message: 'Where are you?', id: '2' },
        { message: 'What is your name?', id: '3' },
    ],
    newMessageText: 'введите сообщение'
}

const dialogsReducer = (state = initialState, action) => {


    switch (action.type) {
        case "UPDATE-NEW-MESSAGE-TEXT":
            return {
                ...state,
                newMessageText: action.newBody,
            }
            //stateCopy.newMessageText = action.newBody
        case "SEND-MESSAGE":
            let message = state.newMessageText
            return {
                ...state,
                newMessageText: '',
                messages: [...state.messages, {id: '4', message: message}]
            }
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

export default dialogsReducer