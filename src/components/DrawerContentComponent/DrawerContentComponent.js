import React, { Component } from "react";
import {
  View,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  Image
} from "react-native";

import { DrawerItems } from "react-navigation";

export default class DrawerContentComponent extends Component {
  render() {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.imageView}>
          <Image
            source={require("./../../assets/logo.png")}
            style={styles.image}
          />
        </View>
        <ScrollView>
          <DrawerItems {...this.props} />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1
  },
  imageView: {
    height: 150,
    alignItems: "center",
    justifyContent: "center"
  },
  image: {
    height: 120,
    width: 120,
    borderRadius: 60
  }
});
