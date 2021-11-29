import classes from "./../Login/Login.module.css";
import { Field, reduxForm } from "redux-form";
import { Input } from "../common/FormsControls/FormsControl";
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
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({ form: "login" })(LoginForm);

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe)
  }

  if (props.isAuth) {
    return <Redirect to={'/profile'} />
  }

  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit}></LoginReduxForm>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
  }
}
export default connect(mapStateToProps, { login })(Login);
