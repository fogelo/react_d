import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let dialogs = [
  {name: 'Sveta', id: '1'},
  {name: 'Andrey', id: '2'},
  {name: 'Anna', id: '3'},
  {name: 'Dmitriy', id: '4'},
  {name: 'Vladimir', id: '5'},
]

let messages = [
  {message: 'What do you do?', id: '1'},
  {message: 'Where are you?', id: '2'},
  {message: 'What is your name?', id: '3'},
]

let posts = [
  {id: '1', message: 'How are you?', likeCount: '20'},
  {id: '2', message: 'Are you ok?', likeCount: '225'},
  {id: '3', message: 'What is your name?', likeCount: '3'},
  {id: '4', message: 'Where do you live?', likeCount: '45'},
]

ReactDOM.render(
  <React.StrictMode>
    <App dialogs={dialogs} messages={messages} posts={posts}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
