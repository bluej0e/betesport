import React, { Component } from 'react';
import './Account.css'
import { withFirebase } from '../Firebase';
import { AuthUserContext, withAuthorization } from '../Session'
import { PasswordForgetForm } from '../PasswordForget'
import PasswordChangeForm from '../PasswordChange'

class AccountPage extends Component {
  constructor(props){
    super(props);

    this.state = {
      loading: false,
      users:[],
    };
  }

  componentDidMount() {
    this.setState({ loading: true });

    this.props.firebase.users().on('value', snapshot => {
      const usersObject = snapshot.val();

      const usersList = Object.keys(usersObject).map(key => ({
        ...usersObject[key],
        uid: key,
      }));

      this.setState({
        users: usersList,
        loading: false,
      });
    });
  }

  componentWillUnmount() {
    this.props.firebase.users().off();
  }

  render(){
    // console.log(this.props);

    return (
      <AuthUserContext.Consumer>
        {authUser => (
          <div className="form">
          <h1>Hello {authUser.username}</h1>
            <div className="account-inner">
              <PasswordForgetForm />
              <PasswordChangeForm />
            </div>
          </div>
        )}
      </AuthUserContext.Consumer>
    )
  }
}
const condition = authUser => !!authUser

export default withAuthorization(condition)(AccountPage)
