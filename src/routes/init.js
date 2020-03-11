import React, { Component } from "react";

import { Text, View, Image } from "react-native";

import Splash from "../pages/splash";

export default class Init extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // Start counting when the page is loaded
    this.timeoutHandle = setTimeout(() => {
      // Add your logic for the transition
      this.props.navigation.navigate("Login");
    }, 2500);
  }

  componentWillUnmount() {
    clearTimeout(this.timeoutHandle);
  }

  render() {
    return <Splash />;
  }
}
