import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Animated,
  ScrollView,
  Dimensions,
  FlatList,
  Text
} from 'react-native';
import Interactable from 'react-native-interactable';

const Screen = {
  height: Dimensions.get('window').height
};

export default class CollapsingHeaderWithScroll extends Component {
  constructor(props) {
    super(props);
    this._deltaY = new Animated.Value(0);
    this.state = {
      canScroll: false
    };
  }

  renderView = item => {
    return (
      <View style={{ height: 250, backgroundColor:'green', padding:20, margin: 10, justifyContent: 'center', alignItems: 'center' }}>
        <Text>{item.name}</Text>
      </View>
    );
  };
  render() {
    return (
      <View style={styles.container}>
        <View
          style={{
            backgroundColor: '#542790',
            height: 250,
            alignItems: 'center'
          }}
        >
          <Animated.View
            style={{
              transform: [
                {
                  translateY: this._deltaY.interpolate({
                    inputRange: [-150, -150, 0, 0],
                    outputRange: [-58, -58, 0, 0]
                  })
                },
                {
                  scale: this._deltaY.interpolate({
                    inputRange: [-150, -150, 0, 0],
                    outputRange: [0.35, 0.35, 1, 1]
                  })
                }
              ]
            }}
          >
            <View
              style={{
                width: 150,
                height: 150,
                backgroundColor: 'red',
                borderRadius: 75,
                marginTop: 50
              }}
            />
          </Animated.View>
        </View>

        <Interactable.View
          verticalOnly={true}
          snapPoints={[{ y: 0 }, { y: -150, id: 'top' }]}
          boundaries={{ top: -150 }}
          onSnap={this.onSnap.bind(this)}
          animatedValueY={this._deltaY}
          showsVerticalScrollIndicator={false}
          style={{backgroundColor: 'white'}}
        >
          {/* <ScrollView
              bounces={false}
              scrollEnabled={this.state.canScroll}
              onScroll={this.onScroll.bind(this)}
              style={{left: 0, right: 0, height: Screen.height - 100, backgroundColor: '#e0e0e0'}}
            > */}
          {/* <View style={styles.placeholder} />
              <View style={styles.placeholder} />
              <View style={styles.placeholder} />
              <View style={styles.placeholder} />
              <View style={styles.placeholder} />
              <View style={styles.placeholder} />
              <View style={styles.placeholder} /> */}
          <FlatList
            data={[
              { id: 1, name: 'teo' },
              { id: 2, name: 'teo' },
              { id: 3, name: 'teo' },
              { id: 4, name: 'teo' }
            ]}
            scrollEnabled={this.state.canScroll}
            onScroll={this.onScroll.bind(this)}
            // onScrollBeginDrag={this.onScroll.bind(this)}
            // onScrollEndDrag={this.onScroll.bind(this)}
            renderItem={({ item }) => this.renderView(item)}
            keyExtractor={item => item.id.toString()}
          />
          {/* </ScrollView> */}
        </Interactable.View>
      </View>
    );
  }
  onSnap(event) {
    const { id } = event.nativeEvent;
    if (id === 'top') {
      this.setState({ canScroll: true });
    }
  }
  onScroll(event) {
    const { contentOffset } = event.nativeEvent;
    console.log(contentOffset)
    if (contentOffset.y <= 0) {
      this.setState({ canScroll: false });
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e0e0'
  },
  placeholder: {
    backgroundColor: '#65C888',
    flex: 1,
    height: 120,
    marginHorizontal: 20,
    marginTop: 20
  }
});
