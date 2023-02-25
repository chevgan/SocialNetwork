import React from 'react';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../utils/validator/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Navigate} from "react-router-dom";
import {mapStateToPropsFactory} from "react-redux/es/connect/mapStateToProps";
const LoginForm = (props) => {
    return (
        <div>
            <LoginOutlinedIcon/>
            <h1>Login</h1>
            <form onSubmit={props.handleSubmit}>
                <div><Field placeholder='Email' name={'email'} component={Input} validate={[required]}/></div>
                <div><Field placeholder='Password' name={'password'} type={"password"} component={Input} validate={[required]}/></div>
                <div><Field type={"checkbox"} name={'rememberMe'} component={Input}/>remember me
                </div>
                <div><button>Отправить</button></div>
            </form>
        </div>
    );
};
const LoginReduxForm = reduxForm({form: 'login'}) (LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }
    if (props.isAuth === true) {
        return <Navigate to="/profile"/>
    }

    return (
        <LoginReduxForm onSubmit={onSubmit}/>
    );
};


const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, {login} ) (Login);