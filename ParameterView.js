import React from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import { Button } from 'react-native-elements';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

export default class ParameterScreen extends React.Component {
  static navigationOptions = {
    title: 'Flux App Monitoring',
  };
  render() {
    const {navigation} = this.props;
    var place = JSON.stringify(navigation.getParam('place', 'Place not selected'))
    return (
      <View style={styles.main}>
        <Text style={styles.title}>Le lieu selectionné est {place}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main : {
    width: '100%',
    height: '100%'
  },

  title : {
    color: 'blue',
    marginTop: '5%',
    textAlign: 'center',
    fontSize: 25
  },

  btnSize : {

  },

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
