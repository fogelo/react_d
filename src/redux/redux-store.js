import {applyMiddleware, combineReducers, createStore} from 'redux'
import authReducer from './auth-reducer';
import dialogsReducer from './dialogs-reducer';
import profileReducer from './profile-reducer';
import usersReducer from './users-reducer';
//import {thunk as thunkMiddleware} from 'redux-thunk'; // импортируем thunk под именем thunkMiddleware (чтобы не было путаницы)
import thunkMiddleware from 'redux-thunk';



let reducers = combineReducers({
    profilesPage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
})
let store = createStore(reducers,applyMiddleware(thunkMiddleware));

window.store = store
 
export default store


