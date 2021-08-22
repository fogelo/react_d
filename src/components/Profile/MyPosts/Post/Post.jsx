import classes from './Post.module.css'

const Post = (props) => {
    return (
      <div className = {classes.mainContent}>
          <div>
            <img src = 'http://archilab.online/images/1/123.jpg'></img>
            {props.messages}
          </div>
          <div>like</div>
      </div>
    )
}

export default Post