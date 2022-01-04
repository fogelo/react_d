import React from 'react';
import { useState } from 'react';
import Preloader from '../../common/Preloader/Preloader';
import classes from './ProfileInfo.module.css'
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import ProfileDataForm from './ProfileDataForm'
import { saveProfile } from '../../../redux/profile-reducer';

const ProfileInfo = (props) => {
  let [editMode, setEditMode] = useState(false)

  const goToEditMode = () => {
    setEditMode(true)
  }
  const goOutEditeMode = () => {
    setEditMode(false)
  }

  if (!props.profile) {
    return <Preloader></Preloader>
  }
  const mainPhotoSelected = (e) => {
    if (e.target.files.length) {
      props.savePhoto(e.target.files[0])
    }
  }

  const saveProfile = props.saveProfile
  const onSubmit = (formData) => {
    saveProfile(formData).then(
      () => {
        setEditMode(false)
      }
    )
  }

  return (
    <div>
      <div className={classes.ProfileInfo}>
        <div>{'Имя: ' + props.profile.fullName}</div>
        <img src={props.profile.photos.large != null ? props.profile.photos.large : 'https://socpartnerstvo.org/img/avatar_male.png'}
          className={classes.mainPhoto} />
        {props.isOwner && <input type={'file'} onChange={mainPhotoSelected} />}

        {editMode ? <ProfileDataForm initialValues={props.profile} onSubmit={onSubmit} {...props}></ProfileDataForm> : <ProfileData {...props} goToEditMode={goToEditMode}></ProfileData>}
        <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
      </div>
    </div>
  )
}

const ProfileData = (props) => {
  return (
    <div>
      {props.isOwner && <div><button onClick={props.goToEditMode}>edit</button></div>}
      <div><b>full name:</b> {props.profile.fullName ? props.profile.fullName : 'no'}</div>
      <div><b>looking for a job: </b>{props.profile.lookingForAJob ? 'yes' : 'no'}</div>

      {props.profile.lookingForAJob &&
        <div><b>my professional skills: </b>{props.profile.lookingForAJobDescription}</div>}

      <div><b>about me: </b>{props.profile.aboutMe ? props.profile.aboutMe : 'no'}</div>

      <div><b>Contacts:</b> {Object.keys(props.profile.contacts).map(key => {
        return <Contact key={key} contactTitle={key + ':'} contactValue={props.profile.contacts[key]} />
      })}</div>
      <div>hello</div>
      <div>hello</div>
      <div>hello</div>
      <div>hello</div>
      <div>hello</div>
      <div>hello</div>
      <div>hello</div>
      <div>hello</div>
      <div>hello</div>
    </div>
  )
}


const Contact = ({ contactTitle, contactValue }) => {

  return (
    <div className={classes.contacts}><b>{contactTitle}</b> {contactValue}</div>
  )
}

export default ProfileInfo