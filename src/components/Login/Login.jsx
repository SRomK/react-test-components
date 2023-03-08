//CSS Styles
import styles from "./Login.module.css";

//React
import React, { Component } from "react";
import { Navigate } from "react-router-dom";

//Material MUI components
import {
  Checkbox,
  TextField,
  InputAdornment,
  FormControl,
  Alert,
  Snackbar,
} from "@mui/material";

// Tools
//import Services from "../../Tools/Services";
//import { KeyCodes } from "../../Tools/Constants";

// Inner code Components
import LoadingButton from "../Material/LoadingButton/LoadingButton";
//import AlertMessage from "../Material/AlertMessage/AlertMessage";

//Constants global scope
const EMAIL_REGEX = /[\w.-]+@[\w\.-]+.\w{2,4}/;

export default class Login extends React.Component {
  // State object with property values used along the code
  // Global values of the Login Component
  state = {
    email: "",
    emailErrorMessage: "",
    password: "",
    passwordErrorMessage: "",
    rememberMe: false,
    showPassword: false,
    redirect: false,
    isLoading: false,
    error: "",
    success: "",
    alertBehaviour: false,
    message: "",
  };

  // Functions

  isFormOk() {
    // Make sure that the email and the password are ok
    //flag
    let isFormOk = true;
    // Check Email
    if (!this.isEmailOk(this.state.email)) isFormOk = false;
    // Check Password
    if (!this.isPasswordOkay(this.state.password)) isFormOk = false;

    return isFormOk;
  }

  //CHECK EMAIL
  isEmailOk(email) {
    return EMAIL_REGEX.test(email);
  }

  //save token
  saveToken(res) {
    //console.log('[LOGIN] saveToken', res)
    // Services.setToken(res.token, this.state.rememberMe);
    // if (res.token) {
    //   localStorage.setItem("token", res.token);
    // }
  }

  //Fetches data and redirects
  async areCredentialsOk() {
    const { email, password } = this.state;

    // IF  email and password are not ok, do nothing
    // if (!this.isFormOk())
    // 	return;

    // Loading
    this.setState({ isLoading: true });

    // Post
    // let res = await Services.postAsync("backoffice2/login", {
    //   email,
    //   password,
    // });

    // End loading
    this.setState({ isLoading: false });

    // Error
    //if (res.status !== "success") {
     // this.setState({ error: res.error });
     // console.log(res);
    //  return;
  //  }

    // SUCCESS
    // Save token
    //this.saveToken(res);
    // Success : redirect to AccountPage + save the token
    // Redirect to accounts page since users credentials have been approved
    this.setState({ redirect: true });
  }

  getEyeIconClassname() {
    let cls = "mdi mdi-eye";
    if (this.state.showPassword) cls += "-off";
    return cls;
  }

  //HANDLES
  // Handling validation ===> Validate email
  handleChangeEmail = (e) => {
    console.log("handlechangeemail");
    const email = e.target.value;
    if (!this.isEmailOk(email)) {
      this.setState({ emailErrorMessage: "Please enter a correct email" });
    } else {
      this.setState({ emailErrorMessage: "" });
    }
    // Save the value
    this.setState({ email });
  };

  // Handling validation ===> Validate password
  handleChangePassword = (e) => {
    const password = e.target.value;
    if (!this.isPasswordOkay(password)) {
      this.setState({
        passwordErrorMessage: "Please enter a correct password",
      });
    } else {
      this.setState({ passwordErrorMessage: "" });
    }

    this.setState({ password });
  };

  isPasswordOkay(password) {
    return password.trim().length > 5;
  }

  handleCheckboxChange = (e) => {
    let rememberMe = e.target.checked;
    this.setState({ rememberMe });
  };

  //logic for showing password in InputAndormnt icon
  handleClickShowPassword = (e) => {
    let showPassword = this.state.showPassword;
    this.setState({ showPassword: !showPassword });
  };

  //Sign in by pressing enter
//   handleKeyUp = (e) => {
//     if (e.keyCode !== KeyCodes.Enter || !e.target.value) return;

//     this.handleLogin(e);
//   };

  //Onclick function
  handleLogin = () => {
    // Check the form
    if (!this.isFormOk()) {
      // AlertMessage
	  this.handleOpenSnack();
    //   this.setState({ error: "Login Failed. Try Again!" });
    //   console.log("error from handle login");

      // return;
    } else {
      this.setState({ error: "" });
    }
	// this.handleOpenSnack();
    // Check password => call the webservice
    this.areCredentialsOk();
  };

  handleOpenSnack = () => {
    this.setState({ alertBehaviour: true, message: 'Login Failed. Try Again!' });
  };

  handleCloseSnack = () => {
    this.setState({ alertBehaviour: false });
  };

  //implement logout after login and redirect
  render() {
    //DESTRUCTURING to be able to call each particular state
    //To do destructuring values must exist inside state object above render()
    const {
      isLoading,
      email,
      password,
      rememberMe,
      showPassword,
      redirect,
      error,
      success,
      emailErrorMessage,
      passwordErrorMessage,
      alertBehaviour, message
    } = this.state;

    return (
      <div id="loginContainer" className={styles.container}>
        {redirect && <Navigate to="/backOffice/" />}

        <div className={styles.login}>
          <div className={styles.logo}></div>
          <div className={styles.subtitle}>Back Office</div>

          {/* LOGIN ERROR ALERT */}

          {/* {error && <AlertMessage onClose={() => {}} message={error}/>} */}
          <Snackbar
            open={alertBehaviour}
            autoHideDuration={5000}
            onClose={this.handleCloseSnack}
          >
            <Alert onClose={this.handleCloseSnack} severity="error">
              {message}
            </Alert>
          </Snackbar>
          {/* EMAIL */}
          <FormControl className={styles.form}>
            <TextField
              id="email"
              name="email"
              type="email"
              error={emailErrorMessage !== ""} //change state and show error
              helperText={emailErrorMessage}
              className={styles.loginEmail}
              label="Email"
              variant="outlined"
              value={email}
              onChange={this.handleChangeEmail}
              onKeyUp={this.handleKeyUp}
            />

            {/* PASSWORD */}
            <TextField
              id="component-outlined"
              name="password"
              type={showPassword ? "text" : "password"}
              error={passwordErrorMessage !== ""} //change state and show error
              helperText={passwordErrorMessage}
              className={styles.loginPwd}
              label="Password"
              variant="outlined"
              value={password}
              onChange={this.handleChangePassword}
              onKeyUp={this.handleKeyUp}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <div className={styles.viewPasswordIcon}>
                      <span
                        id={styles.pointer}
                        className={this.getEyeIconClassname()}
                        onClick={this.handleClickShowPassword}
                      />
                    </div>
                  </InputAdornment>
                ),
              }}
            />

            <label>
              <Checkbox
                color="primary"
                name="rememberMe"
                value={rememberMe}
                checked={rememberMe}
                onChange={this.handleCheckboxChange}
              />
              <span>Remember me</span>
            </label>
            <LoadingButton
              className={styles.loginBtn}
              label="Sign in"
              isLoading={isLoading}
              onClick={this.handleLogin}
            />
          </FormControl>
        </div>
      </div>
    );
  }
}
