import {combineReducers, createStore} from 'redux'
import authReducer from './auth-reducer';
import dialogsReducer from './dialogs-reducer';
import profileReducer from './profile-reducer';
import usersReducer from './users-reducer';


let reducers = combineReducers({
    profilesPage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
})
let store = createStore(reducers);

window.store = store
 
export default store


