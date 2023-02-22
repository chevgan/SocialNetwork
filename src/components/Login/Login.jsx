import React from 'react';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../utils/validator/validators";
const LoginForm = (props) => {
    return (
        <div>
            <LoginOutlinedIcon/>
            <h1>Login</h1>
            <form onSubmit={props.handleSubmit}>
                <div><Field placeholder='Login' name={'login'} component={Input} validate={[required]}/></div>
                <div><Field placeholder='Password' name={'password'} component={Input} validate={[required]}/></div>
                <div><Field type={"checkbox"} name={'rememberMe'} component={Input}/>remember me
                </div>
                <div><button>Отправить</button></div>
            </form>
        </div>
    );
};
const LoginReduxForm = reduxForm({form: 'login'}) (LoginForm)

const Login = () => {
    const onSubmit = (formData) => {
        console.log(formData)
    }
    return (
        <LoginReduxForm onSubmit={onSubmit}/>
    );
};


export default Login;