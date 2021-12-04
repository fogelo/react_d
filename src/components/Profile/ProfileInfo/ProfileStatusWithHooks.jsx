import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import classes from './ProfileStatusWithHooks.module.css'

const ProfileStatusWithHooks = (props) => {

    /*     //useState возвращает массив
        let stateArray = useState(false)
        debugger
        let editMode = stateArray[0] //занчение, которое кидаем в useState
        let setEditMode = stateArray[1] //функция, которое будет менять значение, 
                                        //после того как эта функция изменит значение реакт сделает перерисовку всей компоненты */

    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [])
    const activateEditMode = () => {
        setEditMode(true)
    }
    const deActivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)

    }
    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div> <span>  </span>
            {!editMode &&
                <div>
                    <b>Status:</b><span className={classes.status} onDoubleClick={activateEditMode}>{props.status || '-------'}</span>
                </div>}

            {editMode &&
                <div>
                    <b>Status:</b><input onChange={onStatusChange} onBlur={deActivateEditMode} autoFocus={true} value={status} />
                </div>}

        </div>
    )
}
export default ProfileStatusWithHooks