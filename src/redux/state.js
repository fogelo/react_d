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
    addPost() {
        let newPost = { id: '5', 
                        message: this._state.profilesPage.newPostText, 
                        likeCount: '0'}
        this._state.profilesPage.posts.push(newPost)
        console.log(this._state.profilesPage.posts)
        this._state.profilesPage.newPostText = ''
        this.rerenderEntireTree(this._state)
    },
    updateNewPostText(newText) {
        this._state.profilesPage.newPostText = newText
        console.log(this._state.profilesPage)
        this.rerenderEntireTree(this._state)
    },
    subscribe(observer) {
        this.rerenderEntireTree = observer
    },
}

export default store