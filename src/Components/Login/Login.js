import React, { Component } from 'react';
import { connect } from 'react-redux';

import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import classes from './Login.module.css';
import * as actions from '../../store/actions/index';
import { getOrDefault } from '../../utils/utilities';


export class Login extends Component {
    state = {
        email: '',
        password: '',
        rememberMe: false
    };

    handleEmailChange = (e) => {
        const email = e.target.value;
        this.setState({ email });
    };

    handlePasswordChange = (e) => {
        const password = e.target.value;
        this.setState({ password });
    };

    handleRememberMeChange = () => {
        const rememberMe = this.state.rememberMe;
        this.setState({
            rememberMe: !rememberMe
        });
    };

    handleCancelBtn = () => {
        this.props.history.push('/');
    }

    handleSwitchBtn = () => {
        this.props.history.push('/signup');
    }

    handleLogin = (e) => {
        e.preventDefault();
        const email = this.state.email;
        const password = this.state.password;
        const rememberMe = this.state.rememberMe;
        this.props.login(email, password, rememberMe);
    }

    render() {

        if (this.props.auth.uid) {
            this.handleCancelBtn();
        }

        const loginErrorMsg = getOrDefault(this.props.loginError);
        return (
            <div className={classes.mainDiv}>
                <div className={classes.loginForm}>
                    <form onSubmit={(e) => this.handleLogin(e)}>
                        <div className={classes.loginDiv}>
                            <Avatar style={{ marginLeft: "230px", marginBottom: "3px", marginTop: "60px" }}>
                                <LockOutlinedIcon />
                            </Avatar>
                            <div className={classes.login}>
                                {" "}
                                Sign In
                            {" "}
                            </div>
                        </div>
                        <div>
                            <label>Email</label>
                            <input
                                className={classes.input}
                                type="email"
                                placeholder="Enter your email address"
                                value={this.state.email}
                                onChange={(e) => this.handleEmailChange(e)}
                                required
                            />
                        </div>
                        <div>
                            <label>Password</label>
                            <input
                                className={classes.input}
                                type="password"
                                placeholder="Enter your password"
                                value={this.state.password}
                                onChange={(e) => this.handlePasswordChange(e)}
                                required
                            />
                            <label style={{color: "red"}}> {loginErrorMsg}  </label>
                        </div>
                        <div>
                            <label className={classes.rememberMe}>
                                <input
                                    type="checkbox"
                                    onChange={this.handleRememberMeChange}
                                />
                                Remember me
                        </label>
                        </div>

                        <div>
                            <button
                                name="login"
                                type="submit"
                                className={classes.SubmitBtn}
                            >
                                Login
                            </button>

                            <button
                                name="cancel"
                                type="button"
                                className={classes.cancelLoginBtn}
                                onClick={this.handleCancelBtn}>
                                Cancel
                            </button>

                            <button
                                name="switch"
                                type="button"
                                className={classes.switchToLogin}
                                onClick={this.handleSwitchBtn}
                            >
                                Switch to sign up
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

const mapStateToProps =  state => {
    return {
        auth: state.firebase.auth,
        loginError: state.auth.loginError
    };
};

const mapDispatchToProps = dispatch => {
    return {
        login: (email, password, rememberMe) => dispatch(actions.login(email, password, rememberMe))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);