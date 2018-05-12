import React, { Component } from 'react';
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { 
  TextField,
  RaisedButton,
  Dialog,
  Checkbox 
} from 'material-ui';
import {
  Step,
  Stepper,
  StepLabel,
} from 'material-ui/Stepper';

import styles from './style'

class SignUp extends Component {

  state = {
    open: false,
    checked: false,
    finished: false,
    stepIndex: 0,
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

  handleNext = () => {
    const {stepIndex} = this.state;
    if (stepIndex === 2) {
      this.setState({stepIndex: 0, finished: false});
      window.location = "http://www.webjustify.com";
    }
    this.setState({
      stepIndex: stepIndex + 1,
      finished: stepIndex >= 2,
    });
  };

  handlePrev = () => {
    const {stepIndex} = this.state;
    if (stepIndex > 0) {
      this.setState({stepIndex: stepIndex - 1});
    }
  };

  getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return <div>
                <TextField
                  floatingLabelText="First Name"
                  floatingLabelStyle={styles.floatingLabelStyle}
                  floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                  underlineFocusStyle={styles.underlineStyle}
                  fullWidth={true}
                /><br />
                <TextField
                  floatingLabelText="Last Name"
                  floatingLabelStyle={styles.floatingLabelStyle}
                  floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                  underlineFocusStyle={styles.underlineStyle}
                  fullWidth={true}
                /><br />
                <TextField
                  floatingLabelText="Phone Number"
                  floatingLabelStyle={styles.floatingLabelStyle}
                  floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                  underlineFocusStyle={styles.underlineStyle}
                  fullWidth={true}
                />
            </div>;
      case 1:
        return <div><TextField
                      floatingLabelText="Username"
                      floatingLabelStyle={styles.floatingLabelStyle}
                      floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                      underlineFocusStyle={styles.underlineStyle}
                      fullWidth={true}
                    /><br />  
                    <TextField
                      floatingLabelText="Email"
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
              </div>;
      case 2:
        return <TextField
                floatingLabelText="Address"
                floatingLabelStyle={styles.floatingLabelStyle}
                floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                underlineFocusStyle={styles.underlineStyle}
                multiLine={true}
                rows={2}
                fullWidth={true}
              />
      default:
        return 'Your default steper';
    }
  }

  render(){
    const {finished, stepIndex} = this.state;
    const contentStyle = {margin: '0 16px'};
    const actions = [      
      <RaisedButton
        label="Back"
        disabled={stepIndex === 0}
        onClick={this.handlePrev}
        primary={true}
        style={{marginRight: 12}}
      />,
      <RaisedButton
        label={stepIndex === 2 ? 'Submit' : 'Next'}
        value={stepIndex === 2 ? 'Submit' : 'Next'}
        secondary={true}
        onClick={this.handleNext}
      />,
      <RaisedButton
        label="Cancel"
        onClick={this.handleClose}
        secondary={true}
        style={styles.buttonStyle}
      />
    ];

    return (
      <MuiThemeProvider>
        <RaisedButton 
          label="Sign Up" 
          onClick={this.handleOpen} 
          secondary={true}
          style={styles.buttonStyle} 
        />              
        <Dialog
          title="Sign Up To Webjustify "
          actions={actions}
          modal={true}
          open={this.state.open}
          contentStyle={styles.customContentStyle}
        >
        <Stepper activeStep={stepIndex}>
          <Step>
            <StepLabel>
              Basic Info
            </StepLabel>
          </Step>
          <Step>
            <StepLabel>
              Set Login Info
            </StepLabel>
          </Step>
          <Step>
            <StepLabel>
              Address Info
            </StepLabel>
          </Step>
        </Stepper>
        <div style={contentStyle}>
          {finished ? (
            <div>I don't have account 
              <a
                href="http://www.webjustify.com"
                onClick={(event) => {
                  event.preventDefault();
                  this.setState({stepIndex: 0, finished: false});
                }}
                style={styles.loginLink}
              >
                SignUp
              </a>
            </div>
          ) : (
            <div>
              <p>{this.getStepContent(stepIndex)}</p>
            </div>
          )}
        </div>
        <Checkbox
          label="I am agree with Term & Condition"
          checked={this.state.checked}
          onCheck={this.updateCheck.bind(this)}
          style={styles.checkbox}
        />
        <login style={styles.loginStyle}>
        I have an account 
          <a href="http://www.webjustify.com" style={styles.loginLink}> 
            Login
          </a>
        </login>
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
export default connect(mapStateToProps)(SignUp);