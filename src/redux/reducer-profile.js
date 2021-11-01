let ADD_POST = "ADD-POST"
let UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"

const reducerProfile = (state, action) => {


    switch (action.type) {
        case "ADD-POST":
            let newPost = {
                id: '5',
                message: state.newPostText,
                likeCount: '0'
            }
            state.posts.push(newPost)
            state.newPostText = ''
            return state
        case "UPDATE-NEW-POST-TEXT": 
            state.newPostText = action.newText
            return state
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
export default reducerProfile;