import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import classes from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader></Preloader>
  }

  return (
    <div>
      <div className={classes.ProfileInfo}>
        <div>{'Имя: ' + props.profile.fullName}</div>
        <img src={props.profile.photos.large != null ? props.profile.photos.large : 'https://socpartnerstvo.org/img/avatar_male.png'} />
        <div>{'Обо мне: ' + props.profile.aboutMe}</div>
        <div>{'Мой инстаграмм: ' + props.profile.contacts.instagram}</div>
        <div>{`Статус: ${props.profile.lookingForAJob ? 'Ищу работу' : "Не ищу работу"}`}</div>
      </div>
    </div>
  )
}

export default ProfileInfo