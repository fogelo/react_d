import classes from './Profile.module.css'

const Profile = () => {
    return (
      <div className = {classes.mainContent}>
        <div>ava+description</div>
        <div>
          My Posts
          <div>New post</div>
          <div>Post 1</div>
          <div>Post 2</div>
          <div>Post 3</div>
          <div>Post 4</div>
          <div>Post 5</div>
        </div>
      </div>
    )
}

export default Profile