import classes from './Post.module.css'

const Post = (props) => {
  
  return (

    <div className={classes.mainContent}>
      <div>
        {props && props.profile && <img src={props.profile.photos.large}></img>}
        {props.messages}
      </div>
      <div>{`like ${props.likeCount}`}</div>
    </div>
  )
}

export default Post