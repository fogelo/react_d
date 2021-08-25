import React from 'react';
import classes from './ProfileInfo.module.css'

const ProfileInfo = () => {

  let newPostElement = React.createRef();

  let addPost = () => {
    let text = newPostElement.current.value;
    alert(text);
  }

  return (
    <div className={classes.ProfileInfo}>
      <div>ava+description</div>
      <h3>My Posts</h3>
      <div>
        <textarea ref={newPostElement}></textarea>
        <div><button onClick={addPost}>add</button></div>
      </div>
    </div>
  )
}

export default ProfileInfo