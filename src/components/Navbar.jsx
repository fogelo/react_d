import classes from './Navbar.module.css'

const Navbar = () => {
    return (
        <nav className = {classes.navbar}>
        <div><a>Profile</a></div>
        <div><a>Messages</a></div>
        <div><a>News</a></div>
        <div><a>Music</a></div>
        <div><a>Settings</a></div>
      </nav>
    )
}

export default Navbar