import classes from './Post.module.css'

const Post = () => {
    return (
      <div className = {classes.mainContent}>
          <div>
            <img src = 'http://archilab.online/images/1/123.jpg'></img>
            Post 1
          </div>
          <div>like</div>
      </div>
    )
}

export default Post