import React from 'react'
import { Redirect } from 'react-router'
import classes from './Dialogs.module.css'
import DialogsItem from './DialogsItem/DialogsItem'
import Message from './Message/Message'
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../utils/validators/validators';
import { Textarea } from './../common/FormsControls/FormsControl.js'


const Dialogs = (props) => {
    let state = props.dialogsPage

    let dialogsElements = state.dialogs.map(d => <DialogsItem name={d.name} key={d.id} id={d.id}></DialogsItem>)
    let messagesElements = state.messages.map(m => <Message message={m.message} key={m.id}></Message>)

    let addNewMessage = (values) => {
        console.log('hello')
        props.sendMessage(values.newMessageElement)
    }

    if (!props.isAuth) return <Redirect to={'/login'} />;

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
                <AddMessageFormRedux onSubmit={addNewMessage} />
            </div>
        </div>
    )
}

const maxLength50 = maxLengthCreator(50)
const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field
                component={Textarea}
                validate={[required, maxLength50]}
                name='newMessageElement'
                placeholder={'Enter your message'}></Field>
            <div><button>send</button></div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({ form: 'dialogsAddMessageForm' })(AddMessageForm)

export default Dialogs