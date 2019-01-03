import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  Image,
  Text,
  Platform,
  Animated
} from 'react-native';
import Interactable from 'react-native-interactable';

const Screen = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height - 75
};

export default class NotifPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 1
    };
    this._deltaX = new Animated.Value(0);
    this._deltaX1 = new Animated.Value(0);
  }

  render() {
    return (
      <View style={styles.container}>
        <Interactable.View
          style={{position: 'absolute', top:40}}
          horizontalOnly={true}
          snapPoints={[
            { x: Screen.width - 10 },
            { x: 0, damping: 0.8 },
            { x: -Screen.width + 10 }
          ]}
          animatedValueX={this._deltaX}
          onSnap={e => this.setState({ index: e.nativeEvent.index })}
        >
          <Animated.View
            style={[
              styles.card,
              {
                transform: [
                  {
                    rotate: this._deltaX.interpolate({
                      inputRange: [-250, 0, 250],
                      outputRange: ['10deg', '0deg', '-10deg']
                    })
                  }
                ]
              }
            ]}
          >
            <Image
              style={styles.contentImage}
              source={require('../../assets/tinder-photo.jpg')}
            />
          </Animated.View>
        </Interactable.View>
        <Interactable.View
          style={{position: 'absolute', top:40}}
          horizontalOnly={true}
          snapPoints={[
            { x: Screen.width - 10 },
            { x: 0, damping: 0.8 },
            { x: -Screen.width + 10 }
          ]}
          animatedValueX={this._deltaX1}
          onSnap={e => this.setState({ index: e.nativeEvent.index })}
        >
          <Animated.View
            style={[
              styles.card,
              {
                transform: [
                  {
                    rotate: this._deltaX1.interpolate({
                      inputRange: [-250, 0, 250],
                      outputRange: ['10deg', '0deg', '-10deg']
                    })
                  }
                ]
              }
            ]}
          >
            <Image
              style={styles.contentImage}
              source={require('../../assets/calendar-body.png')}
            />
          </Animated.View>
        </Interactable.View>

        <View style={styles.panelContainer}>
          <Interactable.View
            verticalOnly={true}
            snapPoints={[
              { y: 0, tension: 0, damping: 1 },
              { y: -Screen.height + 10 }
            ]}
            gravityPoints={[
              {
                y: 0,
                strength: 8000,
                falloff: 40,
                damping: 0.5,
                influenceArea: { top: (-Screen.height + 10) * 0.5 }
              }
            ]}
            initialPosition={{ y: -Screen.height + 10 }}
            boundaries={{
              top: -Screen.height,
              bottom: 0,
              bounce: 2,
              haptics: true
            }}
          >
            <View style={styles.panel}>
              <Text style={styles.panelHeader}>Today</Text>
              <Notification
                title="First Notification"
                body="This is the body of the first notification"
              />
              <Notification
                title="Second Notification"
                body="This is the body of the 2nd notification"
              />
              <Notification
                title="Third Notification"
                body="This is the body of the 3rd notification"
              />
              {Screen.height <= 500 - 75 ? (
                false
              ) : (
                <View>
                  <Text style={styles.panelHeader}>Yesterday</Text>
                  <Notification
                    title="Fourth Notification"
                    body="This is the body of the 4th notification"
                  />
                </View>
              )}
              <View
                style={
                  Platform.OS === 'android'
                    ? styles.panelFooterAndroid
                    : styles.panelFooterIos
                }
              >
                <Text style={styles.panelFooterText}>4 NOTIFICATIONS</Text>
                <View style={styles.panelHandle} />
              </View>
            </View>
          </Interactable.View>
        </View>
      </View>
    );
  }
}

class Notification extends Component {
  render() {
    return (
      <View style={styles.notificationContainer}>
        <View style={styles.notificationHeader}>
          <Text style={styles.notificationTitle}>{this.props.title}</Text>
        </View>
        <Text style={styles.notificationBody}>{this.props.body}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#efefef'
  },
  panelContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },
  panel: {
    height: Screen.height + 2,
    backgroundColor: '#182e43f0',
    padding: 15,
    paddingTop: 30,
    flexDirection: 'column'
  },
  contentTitle: {
    fontSize: 20,
    marginBottom: 10
  },
  card: {
    width: Screen.width - 40,
    marginHorizontal: 20,
    borderColor: 'white',
    borderWidth: 3
  },
  contentImage: {
    width: Screen.width - 50,
    height: Screen.width - 50
  },
  contentBody: {
    fontSize: 18,
    color: 'gray',
    marginTop: 10
  },
  panelHeader: {
    fontSize: 24,
    color: 'white',
    marginTop: 15,
    marginBottom: 10,
    marginLeft: 10,
    justifyContent: 'flex-start'
  },
  panelFooterIos: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  panelFooterAndroid: {
    flex: 1,
    paddingTop: 15,
    alignItems: 'center',
    justifyContent: 'center'
  },
  panelFooterText: {
    fontSize: 13,
    color: '#ffffff80',
    marginBottom: 10
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#ffffff80'
  },
  notificationContainer: {
    backgroundColor: '#b0cbdd',
    borderRadius: 14,
    marginBottom: 10
  },
  notificationHeader: {
    height: 30,
    backgroundColor: '#c3d6e1',
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
    paddingHorizontal: 20
  },
  notificationTitle: {
    marginTop: 5,
    fontSize: 16,
    color: '#1c5675'
  },
  notificationBody: {
    marginVertical: 14,
    marginHorizontal: 20
  }
});
