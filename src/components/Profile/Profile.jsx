import MyPostsContanier from './MyPosts/MyPostsContanier'
import classes from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = (props) => {
  
  return (
    <div>
      <ProfileInfo profile={props.profile}></ProfileInfo>
      <MyPostsContanier></MyPostsContanier>
    </div>
  )
}

export default Profile