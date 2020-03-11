import React, { Component } from "react";

import { View, Image, StyleSheet, Dimensions } from "react-native";
import Animation from 'lottie-react-native';

export default class Splash extends Component {

  componentDidMount() {
    this.animation.play();
  }

  render() {
    const win = Dimensions.get('window');
    const ratio = win.width/1024;

    return (
      <View style={styles.container}>
        {/* <Image
          source={require("../../assets/plane-clouds.png")}
          style={{ width: 400, height: 400 }}
        /> */}
        <Animation
          ref={animation => {
            this.animation = animation;
          }}
          style={{
            width: win.width,
            height: 1024 * ratio
          }}
          loop={true}
          source={require("../../assets/plane-clouds.json")}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
