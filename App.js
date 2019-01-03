/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Platform,
  Alert
} from 'react-native';
import Interactable from 'react-native-interactable';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu'
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    const snapPoints = [
      { x: -140, y: -250 },
      { x: 140, y: -250 },
      { x: -140, y: -120 },
      { x: 140, y: -120 },
      { x: -140, y: 0 },
      { x: 140, y: 0 },
      { x: -140, y: 120 },
      { x: 140, y: 120 },
      { x: -140, y: 250 },
      { x: 140, y: 250, tension: 50, damping: 0.9 }
    ];
    const blueDestination = snapPoints[2];
    return (
      <View style={styles.container}>
        <Interactable.View
          snapPoints={snapPoints}
          frictionAreas={[{ damping: 0.5, influenceArea: { top: 0 } }]}
          initialPosition={{ x: -140, y: -250 }}
          ref='blue'
          animatedValueX={console.log(this._deltaX)}
        >
          <View
            style={{
              width: 70,
              height: 70,
              backgroundColor: '#EE2C38',
              borderRadius: 35
            }}
          />
        </Interactable.View>
        <TouchableOpacity
          onPress={() => {
            this.refs['blue'].changePosition(blueDestination);
          }}
        >
          <Text
            style={{
              color: '#3182C8',
              borderColor: '#3182C8',
              borderWidth: 1,
              padding: 6,
              borderRadius: 15,
              alignSelf: 'center'
            }}
          >
            change
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  }
});
