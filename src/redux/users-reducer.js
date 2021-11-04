let FOLLOW = "FOLLOW"
let UNFOLLOW = "UNFOLLOW"
let SET_USERS = "SET_ USERS"

let initialState = {
    users: []
}

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                //map делает идентично users: [...state.users]
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true }
                    }
                    return u;
                }
                )
            }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    }
                    return u;
                }
                )
            }

        case SET_USERS:
            return {
                ...state,
                users: [...state.users, ...action.users] // склеиваем юзеров, которые были в state и тех которые пришли из action
            }
        default:
            return state
    }
}

export const followAC = (userId) => {
    return ({ type: FOLLOW, userId })
}

export const unfollowAC = (userId) => {
    return ({ type: UNFOLLOW, userId })
}

export const setUsersAC = (users) => ({ type: SET_USERS, users })

export default usersReducer