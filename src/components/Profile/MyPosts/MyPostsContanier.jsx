import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer';
import StoreContext from '../../../StoreContext';
import MyPosts from './MyPosts';
import { connect } from 'react-redux'



//Создание контейнерной компоненты руками
// const MyPostsContanier = (props) => {

//   return (
//     <StoreContext.Consumer>
//       {
//         (store) => {

//           let state = store.getState();

//           let addPost = () => {
//             store.dispatch(addPostActionCreator());
//           }

//           let onPostChange = (text) => {
//             let action = updateNewPostTextActionCreator(text)
//             store.dispatch(action)
//           }
//           return <MyPosts
//             updateNewPostText={onPostChange}
//             addPost={addPost}
//             posts={state.profilesPage.posts}
//             newPostText={state.profilesPage.newPostText} />
//         }
//       }
//     </StoreContext.Consumer>
//   )
// }

//Создание контейнерной компоненты с помощью функции connect из билиотки RR 
let mapStateToProps = (state) => {
  return {
    posts: state.profilesPage.posts,
    newPostText: state.profilesPage.newPostText
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    updateNewPostText: (text) => {
      let action = updateNewPostTextActionCreator(text)
      dispatch(action)
    },
    addPost: () => {
      dispatch(addPostActionCreator())
    },

  }
}

const MyPostsContanier = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContanier