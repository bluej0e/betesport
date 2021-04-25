import React, { Component, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { withFirebase } from '../Firebase';
import { AuthUserContext } from '../Session';
import { withAuthentication } from '../Session';

import './App.css';

import Navigation from '../Navigation';
import LandingPage from '../Landing';
import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';
import PasswordForgetPage from '../PasswordForget';
import HomePage from '../Home';
import AccountPage from '../Account';
import AdminPage from '../Admin';

import * as ROUTES from '../../constants/routes';
import Api from '../../Api';



import axios from 'axios';
import betwayXml from '../../betway_soccer.xml';
// const convert = require("xml-js");



// function getBetwayApiAsync() {
//
// }

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      isLoading: true,
      feed: []
    }
  }

  componentDidMount(){
    // axios.get(betwayXml).then((res) => {
    //    const data = JSON.parse(
    //      convert.xml2json(res.data, { })
    //   );
      this.setState({
        // feed: data.elements[0].elements,
        isLoading: false,
      }, function(){
      });
    // });
  }

  render(){
    if(this.state.isLoading){
     return(
       <div style={{flex: 1, padding: 20}}>
         <div> loading ... </div>
       </div>
     )
   }

   // console.log("[index.js] this state feed: " , this.state.feed[2]);


    return (
      <Router>
        <div className="App">
          <Navigation />
          <div className="top-spacer"></div>
          <Route exact path={ROUTES.LANDING} component={LandingPage} />

          <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
          <Route path={ROUTES.SIGN_IN} component={SignInPage} />
          <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
          <Route path={ROUTES.HOME} component={HomePage} />
          <Route path={ROUTES.ACCOUNT} component={AccountPage} />
          <Route path={ROUTES.ADMIN} component={AdminPage} />
        </div>
      </Router>
    );
  }
}

export default withAuthentication(App);
