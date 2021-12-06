import classes from "./../common/FormsControls/FormsControl.module.css";
import { Field, reduxForm } from "redux-form";
import { Input, createField } from "../common/FormsControls/FormsControl";
import { required } from './../../utils/validators/validators';
import { connect } from "react-redux";
import { login } from '../../redux/auth-reducer';
import { Redirect } from "react-router";


const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          placeholder={"Email"}
          name={'email'}
          component={Input}
          validate={[required]}></Field>
      </div>
      <div>
        <Field
          placeholder={"Password"}
          name={'password'}
          component={Input}
          validate={[required]}
          type={'password'}></Field>
      </div>
      <div>
        remeber me
        <Field component={Input} name={'rememberMe'} type={"checkbox"} />
      </div>

      {props.captchaUrl && <img src={props.captchaUrl}></img>}
      {props.captchaUrl && createField('symbols from image', 'captcha',[required],Input, {})}

      {props.error && <div className={classes.formSummaryError}>
        {props.error}
      </div>}
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({ form: "login" })(LoginForm);

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
  }

  if (props.isAuth) {
    return <Redirect to={'/profile'} />
  }

  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}></LoginReduxForm>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth,
  }
}
export default connect(mapStateToProps, { login })(Login);
