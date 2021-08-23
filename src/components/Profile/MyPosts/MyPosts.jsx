import classes from './MyPosts.module.css'
import Post from './Post/Post'

let postsData = [
  {id: '1', message: 'How are you?', likeCount: '20'},
  {id: '2', message: 'Are you ok?', likeCount: '225'},
  {id: '3', message: 'What is your name?', likeCount: '3'},
]

const MyPosts = () => {
    return (
      <div className = {classes.mainContent}>
        <div className = {classes.posts}>
          <Post className = {classes.post} messages={postsData[0].message}  likeCount={postsData[0].likeCount}></Post>
          <Post className = {classes.post} messages={postsData[1].message}  likeCount={postsData[1].likeCount}></Post>
          <Post className = {classes.post} messages={postsData[2].message}  likeCount={postsData[2].likeCount}></Post>
          <Post className = {classes.post}></Post>
          <Post className = {classes.post}></Post>
        </div>
      </div>
    )
}

export default MyPosts