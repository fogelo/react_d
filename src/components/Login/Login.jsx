import classes from "./../Login/Login.module.css";
import { Field, reduxForm } from "redux-form";
import { Input } from "../common/FormsControls/FormsControl";
import { required} from './../../utils/validators/validators';


const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          placeholder={"Login"}
          name={'login'}
          component={Input}
          validate={[required]}></Field>
      </div>
      <div>
        <Field
          placeholder={"Password"}
          name={'password'}
          component={Input}
          validate={[required]}></Field>
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

const Login = () => {
  const onSubmit = (formData) => {
    console.log(formData)
  }
  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit}></LoginReduxForm>
    </div>
  );
};

export default Login;
