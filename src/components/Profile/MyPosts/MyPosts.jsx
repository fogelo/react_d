import classes from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = () => {
    return (
      <div className = {classes.mainContent}>
        <div className = {classes.posts}>
          <Post className = {classes.post} messages = 'How are you?' likeCount = '25'></Post>
          <Post className = {classes.post} messages = 'Are you ok?' likeCount = '15'></Post>
          <Post className = {classes.post}></Post>
          <Post className = {classes.post}></Post>
          <Post className = {classes.post}></Post>
        </div>
      </div>
    )
}

export default MyPosts