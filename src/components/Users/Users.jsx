import classes from './Users.module.css'



let Users = (props) => {

  if(props.users.length === 0) {
    props.setUsers([
        { id: 1, photoUrl: 'https://www.vokrug.tv/pic/person/4/c/3/8/4c385380340d56acd318cf77d7777924.jpeg', followed: false, fullName: 'Dmitriy', status: 'I am a bose', location: { city: 'Minsk', country: 'Belarus' } },
        { id: 2, photoUrl: 'https://www.vokrug.tv/pic/person/4/c/3/8/4c385380340d56acd318cf77d7777924.jpeg', followed: true, fullName: 'Sasha', status: 'I am a bose too', location: { city: 'Moscow', country: 'Russia' } },
        { id: 3, photoUrl: 'https://www.vokrug.tv/pic/person/4/c/3/8/4c385380340d56acd318cf77d7777924.jpeg', followed: false, fullName: 'Andrew', status: 'I am a bose too', location: { city: 'Kiev', country: 'Ukraine' } },])
  }

    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <div><img className={classes.photo} src={u.photoUrl}></img></div>
                <div>{u.fullName}</div>
                <div>{u.status}</div>
                <div>{u.location.city}</div>
                <div>{u.location.country}</div>
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