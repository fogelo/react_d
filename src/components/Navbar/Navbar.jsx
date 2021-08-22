import classes from './Navbar.module.css'

const Navbar = () => {
    return (
        <nav className = {classes.navbar}>
        <div><a href="/profile">Profile</a></div>
        <div><a href="/dialogs">Messages</a></div>
        <div><a href="/News">News</a></div>
        <div><a href="/Music">Music</a></div>
        <div><a href="/Settings">Settings</a></div>
      </nav>
    )
}

export default Navbar