import {combineReducers, createStore} from 'redux'
import reducerDialogs from './reducer-dialogs';
import reducerProfile from './reducer-profile';


let reducers = combineReducers({
    profilesPage: reducerProfile,
    dialogsPage: reducerDialogs,
})

let store = createStore(reducers);

export default store


