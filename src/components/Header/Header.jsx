import classes from './Header.module.css'

const Header = () => {
    return (
        <header className = {classes.header}>
            <img className = {classes.headerImg} src ='https://www.lifepng.com/wp-content/uploads/2020/10/580b57fcd9996e24bc43c53e.png'></img>
        </header>
    )
}

export default Header