import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Login from './Login/Login';
import SignUp from './SignUp/SignUp';

class Home extends Component {

  render(){   
    return (
      <MuiThemeProvider>
        <Login />
        <SignUp />
        <Link to="/counter">Counter</Link>
      </MuiThemeProvider>
    )
  }
}
function mapStateToProps(state){
  return {
    count: state.counterReducer,
  };
}
export default connect(mapStateToProps)(Home);