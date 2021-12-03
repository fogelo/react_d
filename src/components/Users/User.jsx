import classes from './Users.module.css'
import userPhoto from '../../assets/images/photo.jpeg'
import { NavLink } from 'react-router-dom';

const User = ({ user, followingInProgress, unfollow, follow }) => {

    return (<div>
        <span>
            <div>
                <NavLink to={'/profile/' + user.id}>
                    <img className={classes.photo} src={user.photos.small != null ? user.photos.small : userPhoto}></img>
                </NavLink>
            </div>
            <div>
                {user.followed
                    ? <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                        unfollow(user.id)

                    }}>unfollow</button>
                    : <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                        follow(user.id)
                    }}>follow</button>}
            </div>
        </span>
        <span>
            <span>
                <div>{user.name}</div>
                <div>{user.status}</div>
            </span>
            <span>
                <div>{'user.location.city'}</div>
                <div>{'user.location.country'}</div>
            </span>
        </span>




    </div>)
}
export default User