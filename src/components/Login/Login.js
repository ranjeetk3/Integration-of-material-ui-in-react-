import React, { Component } from 'react';
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { 
  TextField,
  RaisedButton,
  Dialog,
  Checkbox 
  } from 'material-ui';

import styles from './style'

class Login extends Component {

  state = {
    open: false,
    checked: false,
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  updateCheck() {
    this.setState((oldState) => {
      return {
        checked: !oldState.checked,
      };
    });
  }

  render(){
    const actions = [
      <a href="http://www.webjustify.com">Forget My Password</a>,
      <RaisedButton
        label="Cancel"
        onClick={this.handleClose}
        secondary={true}
        style={styles.buttonStyle}
      />,
      <RaisedButton
        label="Submit"
        onClick={this.handleClose}
        secondary={true}
        style={styles.buttonStyle}
      />,
    ];

    return (
      <MuiThemeProvider>
        <RaisedButton 
          label="Login" 
          onClick={this.handleOpen} 
          secondary={true}
          style={styles.buttonStyle} 
        />      
        <Dialog
          title="Sign In To Webjustify "
          actions={actions}
          modal={true}
          open={this.state.open}
          contentStyle={styles.customContentStyle}
        >
        <TextField
          floatingLabelText="Username or Email"
          floatingLabelStyle={styles.floatingLabelStyle}
          floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
          underlineFocusStyle={styles.underlineStyle}
          fullWidth={true}
        /><br />
        <TextField
          type="password"
          floatingLabelText="Password"
          floatingLabelStyle={styles.floatingLabelStyle}
          floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
          underlineFocusStyle={styles.underlineStyle}
          fullWidth={true}
        /><br />
        <Checkbox
          label="Remember Me"
          checked={this.state.checked}
          onCheck={this.updateCheck.bind(this)}
          style={styles.checkbox}
        />
        <signUp style={styles.signUpStyle}>
        I don't have an account 
          <a href="http://www.webjustify.com"  style={styles.loginLink}> 
          Sign Up Now
          </a>
        </signUp>
        </Dialog>
      </MuiThemeProvider>
    )
  }
}
function mapStateToProps(state){
  return {
    count: state.counterReducer,
  };
}
export default connect(mapStateToProps)(Login);