import classes from './Users.module.css'
import userPhoto from '../../assets/images/photo.jpeg'
import { NavLink } from 'react-router-dom';

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
            props.users.map(u => <div key={u.id}>
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
                        ? <button onClick={() => { props.unfollow(u.id) }}>unfollow</button>
                        : <button onClick={() => { props.follow(u.id) }}>follow</button>}
                </div>
            </div>)
        }
    </div>
}

export default Users