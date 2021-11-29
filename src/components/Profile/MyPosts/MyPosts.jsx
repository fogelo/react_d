import React from 'react';
import classes from './MyPosts.module.css'
import Post from './Post/Post'
import {Field, reduxForm} from 'redux-form'

const MyPosts = (props) => {

  let onAddPost = (values) => {
    props.addPost(values.newPostText);
  }

  let postsElements = props.posts.map(p => <Post className={classes.post} messages={p.message} likeCount={p.likeCount}></Post>)

  return (
    <div className={classes.mainContent}>
      <h3>My Posts</h3>
      <AddNewPostForm onSubmit={onAddPost}></AddNewPostForm>
      <div className={classes.posts}>
        {postsElements}
      </div>
    </div>
  )
}


const addNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field component='textarea' name='newPostText' placeholder='Enter your pos'></Field>
      <div><button>add</button></div>
    </form>
  )
}

const AddNewPostForm = reduxForm({ form: 'ProfileAddNewPostForm' })(addNewPostForm)

export default MyPosts