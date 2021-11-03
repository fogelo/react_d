let ADD_POST = "ADD-POST"
let UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"

let initialState = {
    posts: [
        { id: '1', message: 'How are you?', likeCount: '20' },
        { id: '2', message: 'Are you ok?', likeCount: '225' },
        { id: '3', message: 'What is your name?', likeCount: '3' },
        { id: '4', message: 'Where do you live?', likeCount: '45' },
    ],
    newPostText: 'введи текст поста',
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case "ADD-POST": {
            let newPost = {
                id: '5',
                message: state.newPostText,
                likeCount: '0'
            }
            let stateCopy = { ...state }
            stateCopy.posts = [...state.posts]
            stateCopy.posts.push(newPost)
            stateCopy.newPostText = ''
            return stateCopy
        }
        case "UPDATE-NEW-POST-TEXT": {
            let stateCopy = { ...state }
            stateCopy.newPostText = action.newText
            return stateCopy
        }
        default:
            return state
    }
}

export const addPostActionCreator = () => {
    return ({ type: ADD_POST })
}

export const updateNewPostTextActionCreator = (text) => {
    return ({ type: UPDATE_NEW_POST_TEXT, newText: text })
}
export default profileReducer;