import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/reducer-profile';
import MyPosts from './MyPosts';

const MyPostsContanier = (props) => {
  let state = props.store.getState();
  let addPost = () => {
    props.store.dispatch(addPostActionCreator());
  }
  let onPostChange = (text) => {
    let action = updateNewPostTextActionCreator(text)
    props.store.dispatch(action)
  }
  return (<MyPosts
    updateNewPostText={onPostChange}
    addPost={addPost}
    posts={state.profilesPage.posts}
    newPostText={state.profilesPage.newPostText}>
  </MyPosts>)
}

export default MyPostsContanier