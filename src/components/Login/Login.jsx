import { ListItemText } from "@mui/material";
import React from "react";

import styles from "./Login.module.css";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const EMAIL_REGEX = /[\w.-]+@[\w\.-]+.\w{2,4}/;

export default class Login extends React.Component {
  state = {
    email: "",
    password: "",
  };

  onChange = (e) => {
   this.setState({ [e.target.name]: e.target.value });
   //console.log("event", e);
  };

  formValidation = () => {
    const {email, password} = this.state;
    //use a flag
    let isValid = true;
    const errors = {};

    if(!EMAIL_REGEX.test(email)) {
      errors.emailerror = "Email is not valid";
      isValid = false;
    }
    if(password.trim().length < 8){
      errors.passwordLength = "Password must be of length 8 or higher";
      isValid = false;
    }

    this.setState({errors});
      return isValid;
  }
  onSubmit = (e) => {
    const { email, password } = this.state;
    e.prevenDefault();
    console.log('evento', e);
    const isValid = this.formValidation();
    
  }

  render() {
    const { email, password, errors } = this.state;

    return (
      <div className="container">
        <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          error
          id="outlined-error"
          label="Error"
          defaultValue="Hello World"
        />
        <TextField
          error
          id="outlined-error-helper-text"
          label="Error"
          defaultValue="Hello World"
          helperText="Incorrect entry."
        />
      </div>
      
    </Box>
      </div>
    );
  }
}
