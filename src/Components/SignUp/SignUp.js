import React, { Component } from 'react';
import { connect } from 'react-redux';
 
import classes from './SignUp.module.css';
import Avatar from '@material-ui/core/Avatar';
import AccountCircleOutlined from '@material-ui/icons/AccountCircleOutlined';
import { getOrDefault } from '../../utils/utilities';
import * as actions from '../../store/actions/index';

export class SignUp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: null,
            email: null,
            password: null,
            confirm_password: null,
            dateOfBirth: null,
            passwordOpen: false,
            errorMessage: {
                username: "",
                email: "",
                confirm_password: "",
                dateOfBirth: ""
            }
        };
    }

    handleSubmit = event => {
        event.preventDefault();
        const usernameError = this.state.errorMessage.username;
        const emailError = this.state.errorMessage.email;
        const passwordError = this.state.errorMessage.password;
        const confirmPswdError = this.state.errorMessage.confirm_password;
        const dateOfBirthError = this.state.errorMessage.dateOfBirth;

        if(!usernameError && !emailError && !passwordError && !confirmPswdError && !dateOfBirthError) {
            const newUser = {
                username: this.state.username,
                email: this.state.email,
                password: this.state.password,
                dateOfBirth: this.state.dateOfBirth
            }
            this.props.signUp(newUser);
        } else {
            alert("Failed Sign Up");
        }
    };

    //USERNAME
    handleUsernameChange = event => {
        const val = event.target.value;
        const errorMessage = {
            ...this.state.errorMessage,
            username: ""
        }
        if(val.length < 5) {
            errorMessage.username = "Username must contain at least 5 characters"
        }
        this.setState({username: val, errorMessage });
    };

    //EMAIL
    handleEmailChange = event => {
        const val = event.target.value;
        const errorMessage = {
            ...this.state.errorMessage,
            email: "Email is invalid!"
        };
        if(val.match(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
            errorMessage.email = ""
        }
        this.setState({ email: val, errorMessage });
    }

    //PASSWORD MATCH
    handleChange = event => {
        const val = event.target.value;
        const errorMessage = {
            ...this.state.errorMessage,
            confirm_password: ""
        };
        if(val !== this.state.confirm_password) {
            errorMessage.confirm_password = "Password doesn't match"
        }
        this.setState({ password: val, errorMessage });
        this.setState({ password: event.target.value });
    };

    //CONFIRM PASSWORD
    handleConfirmPassword = event => {
        const val = event.target.value;
        const errorMessage = {
            ...this.state.errorMessage,
            confirm_password: ""
        }
        if(val !== this.state.password) {
            errorMessage.confirm_password = "Password doesn't match"
        }
        this.setState({confirm_password: val, errorMessage });
    }

    //DATE
    handleDateChange =  event => {
        const val = event.target.value;
        const errorMessage = { 
            ...this.state.errorMessage,
            dateOfBirth: ""
        }
        const year = new Date(val).getFullYear();
        if(year < new Date().getFullYear() - 100 ) {
            errorMessage.dateOfBirth = "You're too old for this app"
        }
        this.setState({dateOfBirth: val, errorMessage });
    };


    handleSwitchBtn = () => {
        this.props.history.push('/login');
    }

    handleCancelBtn = () => {
        this.props.history.push('/');

    }

    togglePasswordMeter(flag = false) {
        this.setState({ passwordOpen : flag })
    };

    render() {
        if(this.props.auth.uid) {
            this.handleCancelBtn();
        }

        const signupErrorMsg = getOrDefault(this.props.signupError);
        return (
            <div className={classes.container}>
                <div className={classes.SignUp}>
                    <form onSubmit={this.handleSubmit} >
                        <div className={classes.SignUpDiv}>
                            <Avatar style={{ marginLeft: "270px", marginBottom: "3px", backgroundColor: "#aaaaaa" }}>
                                <AccountCircleOutlined style={{ width: "34px", height: "100px", color: "#f4acac"}} />
                            </Avatar>
                            <div className={classes.SignUpTitle}>
                                {" "}
                                Create your account
                            {" "}
                            </div>
                        </div>

                        <div>
                            <label>Username</label>
                            <input
                                name="username"
                                type="text"
                                placeholder="Your name"
                                onBlur={event => this.handleUsernameChange(event)}
                                required
                            />
                            <span className={classes.error}>{this.state.errorMessage.username}</span>
                        </div>

                        <div>
                        
                            <label>Email</label>
                            <input
                                name="email"
                                type="email"
                                placeholder="Your email address"
                                onBlur={event => this.handleEmailChange(event)}
                                required
                            />
                            <span className={classes.error}>{this.state.errorMessage.email}</span>
                        </div>

                        <div>
                            <label>Password</label>
                            <input
                                name="password"
                                type="password"
                                placeholder="Enter password"
                                onFocus={(event) => this.togglePasswordMeter(true)}
                                onBlur={(event) => this.togglePasswordMeter()}
                                onChange={(event) => this.handleChange(event)}
                                required
                            />
                        </div>


                        <div>
                            <label>Confirm Password</label>
                            <input
                                name="confirm_password"
                                type="password"
                                placeholder="Confirm your password"
                                onChange={event => this.handleConfirmPassword(event)}
                                required
                            /> 
                             <span className={classes.error}>{this.state.errorMessage.confirm_password}</span>
                        </div>

                        <div>
                            <label>Date of birth</label>
                            <input
                                name="dateOfBirth"
                                type="date"
                                placeholder="Date of birth"
                                onBlur={event => this.handleDateChange(event)}
                                required
                            /> 
                            <span className={classes.error}>{this.state.errorMessage.dateOfBirth}</span>
                        </div>

                        <div>
                            <p>
                                <input
                                    name="check"
                                    type="checkbox"
                                    required />
                                By joining BookStore, you agree to our Terms of Service and Privacy Policy
                            </p>
                        </div>
                        <div>
                            <button
                                name="signup"
                                type="submit"
                                className={classes.SignUpBtn}
                                
                            >
                                Sign Up
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
                                Switch to login
                            </button>
                            <span className={classes.errorFirebase}>{signupErrorMsg}</span>
                        </div>

                    </form>
                </div>
            </div>
        );

    }
}

const mapStateToProps = state => {
    return { 
        auth: state.firebase.auth,
        signupError: state.auth.registerError
    };
}

const mapDispatchToProps = dispatch => {
    return {
        signUp: (newUser) => dispatch(actions.register(newUser))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);