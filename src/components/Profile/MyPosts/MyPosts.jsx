import React from 'react';
import classes from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = (props) => {

  let newPostElement = React.createRef();

  let addPost = () => {
    let text = newPostElement.current.value;
    props.addPost(text);
  }  

  let postsElements = props.posts.map(p => <Post className = {classes.post} messages={p.message}  likeCount={p.likeCount}></Post>)

  return (
    <div className = {classes.mainContent}>
      <h3>My Posts</h3>
      <div>
        <textarea ref={newPostElement}></textarea>
        <div><button onClick={addPost}>add</button></div>
      </div>
      <div className = {classes.posts}>
        {postsElements}
      </div>
    </div>
  )
}

export default MyPosts