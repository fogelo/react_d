import classes from './Dialogs.module.css'

const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <div className={classes.dialog +' '+ classes.active}>Sveta</div>
                <div className={classes.dialog}>Andrey</div>
                <div className={classes.dialog}>Anna</div>
                <div className={classes.dialog}>Dmitriy</div>
                <div className={classes.dialog}>Vladimir</div>
            </div>
            <div className={classes.messages}>
                <div className={classes.message}>What do you do?</div>
                <div className={classes.message}>Where are you?</div>
                <div className={classes.message}>What is your name?</div>
            </div>
        </div>
    )
}

export default Dialogs