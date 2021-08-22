import classes from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = () => {
    return (
      <div className = {classes.mainContent}>
        <div>
          My Posts
          <div>
            <textarea></textarea>
            <div><button>add</button></div>
          </div>
          <div className = {classes.posts}>
            <Post messages = 'How are you?'></Post>
            <Post messages = 'Are you ok?'></Post>
            <Post></Post>
            <Post></Post>
            <Post></Post>
          </div>
        </div>
      </div>
    )
}

export default MyPosts