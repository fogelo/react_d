import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import classes from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
  if(!props.profile) {
    return <Preloader></Preloader>
  }

  return (
    <div>
      <div className={classes.ProfileInfo}>
        <img src = {props.profile.photos.large}/>
        ava+description
      </div>
    </div>
  )
}

export default ProfileInfo