import classes from './ProfileInfo.module.css'



const ProfileInfo = () => {
  return (
    <div className={classes.ProfileInfo}>
      <div>ava+description</div>
      <h3>My Posts</h3>
      <div>
        <textarea></textarea>
        <div><button>add</button></div>
      </div>
    </div>
  )
}

export default ProfileInfo