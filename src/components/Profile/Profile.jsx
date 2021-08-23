import MyPosts from './MyPosts/MyPosts'
import classes from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = () => {
    return (
      <div>
        <ProfileInfo></ProfileInfo>
        <MyPosts></MyPosts>
      </div>
    )
}

export default Profile