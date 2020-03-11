import React, { Component } from "react";

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  AsyncStorage
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

class Home extends Component {
  state = {};

  constructor(props) {
    super(props);
    this.addOneState = this.addOneState.bind(this);
  }

  componentDidMount() {
    AsyncStorage.getItem("loggedUser")
      .then(value => {
        console.log("value", value);
        if (value) this.setState(JSON.parse(value));
      })
      .done();
  }

  addOneState() {
    let ste = this.state;

    if (ste && ste.user && ste.user.id >= 0)
      ste.user.id = this.state.user.id + 1;

    console.log("status Home", ste);
    if (ste) {
      AsyncStorage.setItem(
        "loggedUser",
        JSON.stringify(ste)
      ).done(() => {
        console.log("Storage saved");
      });
      this.setState(ste);
    }
  }

  getStorage() {
    console.log("Storage get");
    AsyncStorage.getItem("loggedUser")
      .then(value => {
        console.log("value", value);
      })
      .done();
  }

  render() {
    return (
      <View>
        <Text
          style={styles.btnExit}
          onPress={() => {
            this.props.navigation.navigate("Login");
          }}
        >
          <Icon name="sign-out" size={30} color="#3897f1" />
        </Text>
        <Text style={styles.title}>Bem vindo ao Avvanuv!</Text>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            this.props.navigation.navigate("List", { list: this.state });
          }}
        >
          <Text style={styles.btnText}>Lista</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            this.addOneState();
          }}
        >
          <Text style={styles.btnText}>Show state</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAFAFA",
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    fontSize: 25,
    marginTop: 80,
    marginBottom: 10,
    textAlign: "center"
  },
  btn: {
    height: 42,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "#3897f1",
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10
  },
  btnText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#3897f1"
  },
  btnExit: {
    height: 40,
    borderColor: "#3897f1",
    backgroundColor: "transparent",
    marginTop: 40,
    textAlign: "center",
    position: "absolute",
    right: 10,
    top: 0
  }
});
