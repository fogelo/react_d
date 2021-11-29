import React from 'react';
import { addPostActionCreator, } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux'


let mapStateToProps = (state) => {
  return {
    posts: state.profilesPage.posts,
    newPostText: state.profilesPage.newPostText
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    addPost: (newPostText) => {
      dispatch(addPostActionCreator(newPostText))
    },

  }
}

const MyPostsContanier = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContanier