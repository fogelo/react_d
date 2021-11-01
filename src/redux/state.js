let ADD_POST = "ADD-POST"
let UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"

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
        if(action.type === "ADD-POST") {
                let newPost = { id: '5', 
                                message: this._state.profilesPage.newPostText, 
                                likeCount: '0'}
                this._state.profilesPage.posts.push(newPost)
                console.log(this._state.profilesPage.posts)
                this._state.profilesPage.newPostText = ''
                this._callSubscriber(this._state)
        } else if(action.type === "UPDATE-NEW-POST-TEXT") {
                this._state.profilesPage.newPostText = action.newText
                console.log(this._state.profilesPage)
                this._callSubscriber(this._state)
        }

    }
    
}

export const addPostActionCreator =() => { 
    return ({type: ADD_POST})
  }

export const updateNewPostTextActionCreator = (text) => {
    return ({type: UPDATE_NEW_POST_TEXT, newText: text})
  }

export default store