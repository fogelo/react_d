import classes from './MyPosts.module.css'
import Post from './Post/Post'

let posts = [
  {id: '1', message: 'How are you?', likeCount: '20'},
  {id: '2', message: 'Are you ok?', likeCount: '225'},
  {id: '3', message: 'What is your name?', likeCount: '3'},
]

let postsElements = posts.map(p => <Post className = {classes.post} messages={p.message}  likeCount={p.likeCount}></Post>)

const MyPosts = (props) => {
    return (
      <div className = {classes.mainContent}>
        <div className = {classes.posts}>
          {postsElements}
        </div>
      </div>
    )
}

export default MyPosts