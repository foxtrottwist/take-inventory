import React, { Component } from 'react'
import { ScrollView } from 'react-native'
import { FormLabel, FormInput, FormValidationMessage, Button } from 'react-native-elements'
import { LOGIN } from 'react-native-dotenv'
import axios from 'axios'

class LoginForm extends Component {
  state = {
    email: '',
    password: '',
    errorMessage: '',
  }

  onLogin = () => {
    const { email, password } = this.state
    axios
      .post(LOGIN, { email, password })
      .then(res => {
        if (res.status === 200) {
          this.props.navigation.goBack(null)
        }
      })
      .catch(() => this.setState({ errorMessage: 'Incorrect email or passowrd' }))
  }

  render() {
    return (
      <ScrollView>
        <FormLabel>Email</FormLabel>
        <FormInput value={this.state.email} onChangeText={email => this.setState({ email })} />

        <FormLabel>Password</FormLabel>
        <FormInput
          secureTextEntry
          value={this.state.password}
          onChangeText={password => this.setState({ password })}
        />
        <FormValidationMessage>{this.state.errorMessage}</FormValidationMessage>
        <Button
          onPress={() => this.onLogin()}
          buttonStyle={{ marginTop: 20 }}
          containerViewStyle={{ borderRadius: 3 }}
          borderRadius={3}
          raised
          backgroundColor="#1663c7"
          title="Submit"
        />
      </ScrollView>
    )
  }
}

export default LoginForm
