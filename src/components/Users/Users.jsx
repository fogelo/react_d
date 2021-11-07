import classes from './Users.module.css'
import userPhoto from '../../assets/images/photo.jpeg'
import { NavLink } from 'react-router-dom';
import * as axios from 'axios'


const Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return <div>
        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p ? classes.selectedPage : ""}
                    onClick={() => { props.onPageChanged(p) }}>{p}</span>
            })}
        </div>
        {
            props.users.map(u => <div className = {classes.usersInfo} key={u.id}>
                <div>
                    <NavLink to={'/profile/' + u.id}>
                        <img className={classes.photo} src={u.photos.small != null ? u.photos.small : userPhoto}></img>
                    </NavLink>
                </div>
                <div>{u.name}</div>
                <div>{u.status}</div>
                <div>{'u.location.city'}</div>
                <div>{'u.location.country'}</div>
                <div>
                    {u.followed
                        ? <button disabled={props.followingInProgress.some(id=>id === u.id)} onClick={() => {
                            props.toggleFollowingInProgress(true, u.id)
                            axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                withCredentials: true,
                                headers: { "API-KEY": "dbb2362b-785b-4f9a-847a-900f168fe50a" }
                            })
                                .then(response => {
                                    if (response.data.resultCode == 0) {
                                        props.unfollow(u.id)
                                    }
                                    props.toggleFollowingInProgress(false, u.id)

                                })
                        }}>unfollow</button>
                        : <button disabled={props.followingInProgress.some(id=>id === u.id)} onClick={() => {
                            props.toggleFollowingInProgress(true, u.id)
                            axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                withCredentials: true,
                                headers: { "API-KEY": "dbb2362b-785b-4f9a-847a-900f168fe50a" }
                            })
                                .then(response => {
                                    if (response.data.resultCode == 0) {
                                        props.follow(u.id)
                                    }
                                    props.toggleFollowingInProgress(false, u.id)
                                })
                        }}>follow</button>}
                </div>
            </div>)
        }
    </div>
}
export default Users