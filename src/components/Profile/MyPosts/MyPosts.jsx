import React from 'react';
import classes from './MyPosts.module.css'
import Post from './Post/Post'
import { addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/state';

const MyPosts = (props) => {

  let newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch(addPostActionCreator());
  }  

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.dispatch(updateNewPostTextActionCreator(text))
  }

  let postsElements = props.posts.map(p => <Post className = {classes.post} messages={p.message}  likeCount={p.likeCount}></Post>)

  return (
    <div className = {classes.mainContent}>
      <h3>My Posts</h3>
      <div>
        <textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText}></textarea>
        <div><button onClick={addPost}>add</button></div>
      </div>
      <div className = {classes.posts}>
        {postsElements}
      </div>
    </div>
  )
}

export default MyPosts