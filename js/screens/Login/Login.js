import React, { Component } from 'react';
import { View, TextInput, Text, Button } from 'react-native';
import auth from '../../firebase/firebase';

export default class Login extends Component {
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
      this.props.navigation.navigate('Home');
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    return (
      <View>
        <Text>Login</Text>
        <TextInput
          onChangeText={email => this.setState({ email })}
          value={this.state.email}
        />
        <TextInput
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
          secureTextEntry
        />
        <Button onPress={this.login} title="Sign In" />
      </View>
    );
  }
}
