import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state from './redux/state'
import {addPost} from './redux/state'
import { updateNewPostText } from './redux/state';

let rerenderEntireTree = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App 
      state={state} 
      addPost={addPost} 
      updateNewPostText={updateNewPostText}
      />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

export default rerenderEntireTree;