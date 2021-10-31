import { updateNewPostText } from '../../redux/state'
import MyPosts from './MyPosts/MyPosts'
import classes from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = (props) => {
    return (
      <div>
        <ProfileInfo></ProfileInfo>
        <MyPosts posts={props.posts} 
                addPost={props.addPost} 
                newPostText={props.newPostText} 
                updateNewPostText={props.updateNewPostText}></MyPosts>
      </div>
    )
}

export default Profile