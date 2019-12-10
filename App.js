import React from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import { Button } from 'react-native-elements';


/* 
  Quickstart fonctionnel.
*/
export default class App extends React.Component {

  constructor(){
    super();

    this.state = {
      dynamicTitle : 'Flux App Monitoring'
    };
  }

  render(){
    return (
        <View style={styles.main}>
            <Text style={styles.title}>{ this.state.dynamicTitle }</Text>
            <View style={styles.container}>
              <Button
                style={styles.btnSize}
                title="Vous étes des champions"
                onPress={ this.btnOnPress.bind(this) }
              />
            </View>
        </View>
   
    );
  }

  btnOnPress(){
    Alert.alert('Vous étes des champions, bon courage les mecs !!');

    this.setState({ 
      dynamicTitle: 'Happy Coding les mecs !'
    });
  }
}

const styles = StyleSheet.create({
  main : {
    width: '100%',
    height: '100%'
  },

  title : {
    color: 'red',
    marginTop: '5%',
    textAlign: 'center',
    fontSize: 25
  },

  btnSize : {
    height: '200em'
  },

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
