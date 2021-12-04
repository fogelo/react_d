import { createField, Input, Textarea } from "../../common/FormsControls/FormsControl"
import { reduxForm } from "redux-form";
import classes from './ProfileInfo.module.css'



const ProfileDataForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div><button>save</button></div>
            {props.error && <div className={classes.formSummaryError}>
                {props.error}
            </div>}
            <div>
                <b>full name:</b> {createField('Full name', 'fullName', [], Input)}
            </div>

            <div>
                <b>looking for a job:</b> {createField('', 'lookingForAJob', [], Input, { type: 'checkbox' })}
            </div>

            <div>
                <b>my professional skills: </b>{createField('my professional skills', 'lookingForAJobDescription', [], Textarea)}
            </div>

            <div>
                <b>about me: </b>{createField('about me', 'aboutMe', [], Textarea)}
            </div>
            <div><b>Contacts:</b> {Object.keys(props.profile.contacts).map(key => {
                return <div key={key} className={classes.contacts}>
                    <b>{key}: {createField(key, 'contacts.' + key, [], Input)}</b>
                </div>
            })}</div>

        </form>
    )
}
const ProfileDataFormRedux = reduxForm({ form: "edit-profile" })(ProfileDataForm);
export default ProfileDataFormRedux