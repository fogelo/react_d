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
    ]
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case "SEND-MESSAGE":
            let message = action.newMessageElement
            return {
                ...state,
                messages: [...state.messages, {id: '4', message: message}],
            }
        default:
            return state
    }
}

export const sendMessageActionCreator = (newMessageElement) => {
    return ({ type: SEND_MESSAGE, newMessageElement })
}

export default dialogsReducer