import reducerDialogs from "./reducer-dialogs"
import reducerProfile from "./reducer-profile"

let store = {
    _state: {
        dialogsPage: {
        dialogs: [
            {name: 'Sveta', id: '1'},
            {name: 'Andrey', id: '2'},
            {name: 'Anna', id: '3'},
            {name: 'Dmitriy', id: '4'},
            {name: 'Vladimir', id: '5'},
            ],
            messages: [
            {message: 'What do you do?', id: '1'},
            {message: 'Where are you?', id: '2'},
            {message: 'What is your name?', id: '3'},
            ],
        newMessageText: 'введите сообщение'
        },
        profilesPage: {
        posts: [
            {id: '1', message: 'How are you?', likeCount: '20'},
            {id: '2', message: 'Are you ok?', likeCount: '225'},
            {id: '3', message: 'What is your name?', likeCount: '3'},
            {id: '4', message: 'Where do you live?', likeCount: '45'},
            ],
        newPostText: 'введи текст поста',
        }
    },
    getState() {
        return this._state
    },


    _callSubscriber() {
        console.log("state changed")
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },
    
    dispatch(action) {
        this._state.profilesPage = reducerProfile(this._state.profilesPage, action)
        this._state.dialogsPage = reducerDialogs(this._state.dialogsPage, action)
        this._callSubscriber(this._state)
    },
}

export default store

