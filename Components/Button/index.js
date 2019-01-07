import React, { Component } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

class Button extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TouchableOpacity onPress={this.props.onPressOut} style={styles.button}>
        <Text> {this.props.children}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    // flex: 1,
    backgroundColor: "#cbcbcb",
    padding: 10,
    margin: 10,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default Button;
