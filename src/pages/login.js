import React, { Component } from "react";

import {
  Keyboard,
  Text,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Alert,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  AsyncStorage
} from "react-native";

function onFbLoginPress() {
  console.log("fb press");
}

export default class Login extends Component {
  submit() {
    AsyncStorage.setItem(
      "loggedUser",
      JSON.stringify({
        user: {
          id: 0,
          name: "Matheus"
        }
      })
    ).done(() => {
      console.log("Storage saved");
    });

    this.props.navigation.navigate("MainTab");
  }

  // async getStorage() {
  //   console.log("Storage get");
  //   AsyncStorage.getItem("loggedUser")
  //     .then(value => {
  //       console.log("value", value);
  //     })
  //     .done();
  // }

  render() {
    return (
      <KeyboardAvoidingView style={styles.containerView} behavior="padding">
        <View style={styles.loginFormView}>
          <Text style={styles.logoText}>AVVA NUV</Text>
          <View style={styles.loginFormContent}>
            <TextInput
              placeholder="Username"
              placeholderColor="#c4c3cb"
              returnKeyType="next"
              onSubmitEditing={() => this.passwordInput.focus()}
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              style={styles.loginFormTextInput}
            />
            <TextInput
              placeholder="Password"
              placeholderColor="#c4c3cb"
              returnKeyType="go"
              secureTextEntry={true}
              ref={input => (this.passwordInput = input)}
              onSubmitEditing={() => {
                this.submit();
                // this.getStorage();
              }}
              style={styles.loginFormTextInput}
            />
            <TouchableOpacity
              style={styles.loginButton}
              onPress={() => {
                this.submit();
              }}
            >
              <Text>Logar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  containerView: {
    flex: 1
  },
  loginFormView: {
    flex: 1,
    justifyContent: "center"
  },
  logoText: {
    fontSize: 40,
    fontWeight: "800",
    marginBottom: 50,
    textAlign: "center"
  },
  loginFormContent: {
    padding: 20
  },
  loginFormTextInput: {
    height: 40,
    fontSize: 14,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#eaeaea",
    backgroundColor: "#fafafa",
    paddingLeft: 10,
    marginTop: 5,
    marginBottom: 5
  },
  loginButton: {
    backgroundColor: "#3897f1",
    color: "#FFF",
    borderRadius: 5,
    height: 45,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  fbLoginButton: {
    height: 45,
    marginTop: 10,
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center"
  }
});
