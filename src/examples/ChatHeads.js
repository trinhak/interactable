import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import Interactable from 'react-native-interactable';

export default class ChatHeads extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Interactable.View
          snapPoints={[
            {x: 1, y: -240, damping: 0.9},
            {x: 140, y: 250, tension: 50, damping: 0.9}
          ]}
          initialPosition={{x: 1, y: -240}}>
          <View style={{width: 70, height: 70, backgroundColor: '#EE2C38', borderRadius: 35, marginHorizontal: 20, marginVertical: 20}} />
        </Interactable.View>

        <Interactable.View
          snapPoints={[
            {x: 1, y: -240, damping: 0.9},
            {x: 140, y: 250, tension: 50, damping: 0.9}
          ]}
          initialPosition={{x: 1, y: -240}}>
          <View style={{width: 70, height: 70, backgroundColor: '#EE2C38', borderRadius: 35, marginHorizontal: 20}} />
        </Interactable.View>

        <Interactable.View
          snapPoints={[
            {x: 1, y: -240, damping: 0.9},
            {x: 140, y: 250, tension: 50, damping: 0.9}
          ]}
          initialPosition={{x: 1, y: -240}}>
          <View style={{width: 70, height: 70, backgroundColor: '#EE2C38', borderRadius: 35, marginHorizontal: 20}} />
        </Interactable.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    flexDirection: 'row'
  }
});
