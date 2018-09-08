import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
    };
  }

  handleEmail = event => {
    this.setState({ email: event.target.value });
  };

  handlePassword = event => {
    this.setState({ password: event.target.value });
  };

  login = async event => {
    const { email, password } = this.state;
    event.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.props.history.push('/');
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    return (
      <View>
        <Text>Login</Text>
      </View>
    );
  }
}
