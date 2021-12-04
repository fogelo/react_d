import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import classes from './ProfileInfo.module.css'
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader></Preloader>
  }
  const mainPhotoSelected = (e) => {
    if (e.target.files.length) {
      props.savePhoto(e.target.files[0])
    }
  }
  return (
    <div>
      <div className={classes.ProfileInfo}>
        <div>{'Имя: ' + props.profile.fullName}</div>
        <img src={props.profile.photos.large != null ? props.profile.photos.large : 'https://socpartnerstvo.org/img/avatar_male.png'}
          className={classes.mainPhoto} />
        {props.isOwner && <input type={'file'} onChange={mainPhotoSelected} />}
        <div>{'Обо мне: ' + props.profile.aboutMe}</div>
        <div>{'Мой инстаграмм: ' + props.profile.contacts.instagram}</div>
        <div>{`${props.profile.lookingForAJob ? 'Ищу работу' : "Не ищу работу"}`}</div>
        <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
      </div>
    </div>
  )
}

export default ProfileInfo