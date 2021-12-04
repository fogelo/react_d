import MyPostsContanier from "./MyPosts/MyPostsContanier";
import classes from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo
        savePhoto={props.savePhoto}
        isOwner={props.isOwner}
        profile={props.profile}
        status={props.status}
        saveProfile={props.saveProfile}
        updateStatus={props.updateStatus}
      ></ProfileInfo>
      <MyPostsContanier profile={props.profile}></MyPostsContanier>
    </div>
  );
};

export default Profile;
