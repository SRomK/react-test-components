//React
import React, { Component } from "react";
//CSS Styles
import styles from "./Login.module.css";

//MATERIAL MUI components
import { Checkbox, FormControl, TextField, InputAdornment, Alert, Typography } from "@mui/material";

// Inner code Components
import LoadingButton from "../Material/LoadingButton/LoadingButton";

//Constants Global Scope
const EMAIL_REGEX = /[\w.-]+@[\w\.-]+.\w{2,4}/;

export default class Login extends React.Component {
  // State object with property values used along the code
  state = {
		email: "",
		emailError: null, // Text of the error
		password: "",
		passwordError: null,
		rememberMe: false,
		showPassword: false,
		redirect: false,
		isLoading: false,
		error: null,
		emailErrorMessage: "" // WS error
	};

  
/*
  // Make sure that the email and the password are filled
  isFormOk() {
		// Make sure that the email and the password are filled
		const { email, password } = this.state;
		this.setState({ emailError: null, passwordError: null, emailErrorMessage: "" });

    //flag
		let isFormOk = true;
		// Check Email
		if (!this.isEmailOk(email)) {
			this.setState({ emailErrorMessage: "You must input email" });
			isFormOk = false;
		}
		
		// Check Password
		if (password.trim().length < 8) {
			this.setState({ passwordError: "You must input password" });
			isFormOk = false;
		}
		return isFormOk;
	}

  onChange = (e) => {
   this.setState({ [e.target.name]: e.target.value });
   //console.log("event", e);
  };

  // formValidation = () => {
  //   const {email, password} = this.state;
  //   //use a flag
  //   let isValid = true;
  //   const errors = {};

  //   if(!EMAIL_REGEX.test(email)) {
  //     errors.emailerror = "Email is not valid";
  //     isValid = false;
  //   }
  //   if(password.trim().length < 8){
  //     errors.passwordLength = "Password must be of length 8 or higher";
  //     isValid = false;
  //   }

  //   this.setState({errors});
  //     return isValid;
  // }

  onSubmit = (e) => {
    const { email, password } = this.state;
    e.prevenDefault();
    //console.log('event', e);
    const isValid = this.isFormOk();
    
  } */

  //FUNCTIONS/METHODS ob the object class component Login

  //Check if email has the right syntax
  isEmailOk(email) {
		return EMAIL_REGEX.test(email); 
	}

 // this function should be called inside are credentials ok
  isFormOk() {
		// Make sure that the email and the password are ok
    //flag
		let isFormOk = true;
		// Check Email
		if (!this.handleChangeEmail()) {
			isFormOk = false;
		}
		// Check Password
		if (!this.handleChangePassword()) {
			isFormOk = false;
		}
    console.log("form is ok");
		return isFormOk 
	}

  isFormOk() {
		// Make sure that the email and the password are ok
    //flag
		let isFormOk = true;
		// Check Email
		if (!this.handleChangeEmail()) {
			isFormOk = false;
		}
		// Check Password
		if (!this.handleChangePassword()) {
			isFormOk = false;
		}
		return console.log("form is ok", isFormOk);
	}

  //logic for eye icon next to password 
  getEyeIconClassname() {
		let cls = "mdi mdi-eye";
		if (this.state.showPassword) 
			cls += "-off";
		return cls;
	}

  //save token
	saveToken(res) {
		//console.log('[LOGIN] saveToken', res)
		//Services.setToken(res.token, this.state.rememberMe);
		if (res.token) {
			localStorage.setItem(res.token)
		}
	}

  // FETCH
  async areCredentialsOk() {
		const { email, password } = this.state;

		// IF  email and password are not ok, do nothing
		if (!this.isFormOk())
			return;

		// Loading
    this.setState({ isLoading: true });

		// Post CALL ME
		let res //= await Services.postAsync('backoffice2/login', { email, password });

		// End loading
    this.setState({ isLoading: false });

		// Error
    if (res.status !== "success") {		
			this.setState({ error: res.error })
			// console.error(res.error);
			return;
		}

		// Success : redirect to AccountPage + save the token
    this.saveToken();
		//return true;
    // Redirect to accounts page since users credentials have been approved
		this.setState({ redirect: true });
		
	}


  //HANDLES
  //this function is handling validation
  handleChangeEmail = (e) => {
		// Validate email
    console.log('handlechangeemail')
		const email = e.target.value;
		if (!this.isEmailOk(email)) {
			this.setState({emailError: "Please enter a correct email"}); 
		} 
		else {
			this.setState({emailError: ""})
		}
		// Save the value
		this.setState({ email });
	};

	handleChangePassword = (e) => {
		// Save the value
		const password = e.target.value;
    if (password.trim().length < 8) {
			this.setState({passwordError: "Please enter a correct password"}); 
		} 
		else {
			this.setState({passwordError: ""})
		}

		this.setState({ password });
	};
  
  //logic for showing password in InputAndormnt icon 
  handleClickShowPassword = (e) => {
		let showPassword = this.state.showPassword;
		this.setState({ showPassword: !showPassword });
	};

  handleCheckboxChange = (e) => {
		let rememberMe = e.target.checked;
		this.setState({ rememberMe });
	};

  	//implement logout after login and redirect

  render() {
    const { isLoading, email, emailError, password, passwordError, rememberMe, showPassword } = this.state;

    return (
      <div id="loginContainer" className={styles.container}>
      
      {/* redirect and navigate goes here */}
      
      <div className={styles.login}>
			<div className={styles.logo}></div>
      <div className={styles.subtitle}>Back Office</div>
       <FormControl className={styles.form}> 
      
        <TextField
          id="email"
          className={styles.loginEmail}
          name="email"
          type="email"
          error={emailError}
          //error //logic to change state and show error
          helperText={emailError}
          label="Email"
          variant="outlined"
          onChange={this.handleChangeEmail}
        />
        <TextField
          id="component-outlined"
          className={styles.loginPwd}
          name="password"
          type="password"
          error={passwordError}//logic to change state and show error
          helperText={passwordError}
          label="Password"
          variant="outlined"
          value={password}
          onChange={this.handleChangePassword}
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