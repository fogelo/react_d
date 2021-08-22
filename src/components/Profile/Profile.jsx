import MyPosts from './MyPosts/MyPosts'
import classes from './Profile.module.css'

const Profile = () => {
    return (
      <div className = {classes.mainContent}>
        <div>ava+description</div>
        <MyPosts></MyPosts>
      </div>
    )
}

export default Profile