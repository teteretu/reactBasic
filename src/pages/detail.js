import React, { Component } from "react";

import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

class List extends React.Component {
  static navigationOptions = {
    title: "Detail"
  };

  render() {
    const { navigation } = this.props;
    var nav = navigation.getParam("detail", "detail");

    return (
      <View>
        <Text style={styles.title}>Detalhe da câmera</Text>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            this.props.navigation.navigate("List", {
              list: " Detail -> List "
            });
          }}
        >
          <Text style={styles.btnText}>List</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default List;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAFAFA",
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    fontSize: 25,
    marginTop: 20,
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
  }
});
