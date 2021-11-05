import classes from './Users.module.css'
import * as axios from 'axios' // импортируем все(*) что находится в библиотеке 'axios' в обьект axios
import userPhoto from '../../assets/images/photo.jpeg'
import React from 'react'

class Users extends React.Component {


    constructor(props) {
        super(props)
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render() {
        return <div>
            {
                this.props.users.map(u => <div key={u.id}>
                    <div><img className={classes.photo} src={u.photos.small != null ? u.photos.small : userPhoto}></img></div>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                    <div>{'u.location.city'}</div>
                    <div>{'u.location.country'}</div>
                    <div>
                        {u.followed
                            ? <button onClick={() => { this.props.unfollow(u.id) }}>unfollow</button>
                            : <button onClick={() => { this.props.follow(u.id) }}>follow</button>}
                    </div>
                </div>)
            }
        </div>

    }
}

export default Users
