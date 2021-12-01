import profileReducer, { addPostActionCreator, deletePostCreator } from './profile-reducer'


test('lenght of posts should be incremented', () => {
    //1 готовим исходные данные
    let action = addPostActionCreator('hello')
    let state = {
        posts: [
            { id: "1", message: "How are you?", likeCount: "20" },
            { id: "2", message: "Are you ok?", likeCount: "225" },
            { id: "3", message: "What is your name?", likeCount: "3" },
            { id: "4", message: "Where do you live?", likeCount: "45" },
        ],
    };
    //2 action
    let newState = profileReducer(state, action)
    //3 проверяем наше ожидаение
    expect(newState.posts.length).toBe(5)
});

test('lenght of posts should be decremented', () => {
    //1 готовим исходные данные
    let action = deletePostCreator(1)
    let state = {
        posts: [
            { id: "1", message: "How are you?", likeCount: "20" },
            { id: "2", message: "Are you ok?", likeCount: "225" },
            { id: "3", message: "What is your name?", likeCount: "3" },
            { id: "4", message: "Where do you live?", likeCount: "45" },
        ],
    };
    //2 action
    let newState = profileReducer(state, action)
    //3 проверяем наше ожидаение
    expect(newState.posts.length).toBe(3)
});
