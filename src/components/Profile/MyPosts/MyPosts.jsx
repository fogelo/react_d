import React from 'react';
import classes from './MyPosts.module.css'
import Post from './Post/Post'
import { Field, reduxForm } from 'redux-form'
import { required, maxLengthCreator } from '../../../utils/validators/validators';
import { Textarea } from '../../common/FormsControls/FormsControl';

class MyPosts extends React.Component {

  render() {
    let onAddPost = (values) => {
      this.props.addPost(values.newPostText);
    }

    let postsElements = this.props.posts.map(p => <Post className={classes.post} messages={p.message} likeCount={p.likeCount}></Post>)

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
}


const maxLength10 = maxLengthCreator(10)
const addNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        component={Textarea}
        name='newPostText'
        placeholder={'Enter your post'}
        validate={[required, maxLength10]}></Field>
      <div><button>add</button></div>
    </form>
  )
}

const AddNewPostForm = reduxForm({ form: 'ProfileAddNewPostForm' })(addNewPostForm)

export default MyPosts