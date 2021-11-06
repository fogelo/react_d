import classes from './Users.module.css'
import * as axios from 'axios' // импортируем все(*) что находится в библиотеке 'axios' в обьект axios
import userPhoto from '../../assets/images/photo.jpeg'
import React from 'react'

class Users extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }
    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)

        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

        return <div>
            <div>
                {pages.map(p => {
                    return <span className={this.props.currentPage === p ? classes.selectedPage : ""}
                        onClick={() => {this.onPageChanged(p)}}>{p}</span>
                })}
            </div>

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
