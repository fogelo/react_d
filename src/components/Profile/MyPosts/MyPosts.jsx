import classes from './MyPosts.module.css'
import Post from './Post/Post'


const MyPosts = (props) => {
  let postsElements = props.posts.map(p => <Post className = {classes.post} messages={p.message}  likeCount={p.likeCount}></Post>)

  return (
    <div className = {classes.mainContent}>
      <div className = {classes.posts}>
        {postsElements}
      </div>
    </div>
  )
}

export default MyPosts