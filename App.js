import React, {Component} from 'react';
import { StyleSheet, Text, View, Alert, TextInput, FlatList } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { List, ListItem } from 'react-native-elements';
import SearchPanel from './SearchPanel';


export default class App extends React.Component {

  render() {

    return (
      <SearchPanel/>
    );
  }
}

/* 
  Quickstart fonctionnel.
*/
/*export default class App extends React.Component {

  constructor(){
    super();

    this.state = {
      dynamicTitle : 'Appli React'
    };
  }

  render(){
    return (
        <View style={styles.main}>
            <Text style={styles.title}>{ this.state.dynamicTitle }</Text>
            <View style={styles.container}>
              <Button
                style={styles.btnSize}
                title="Je suis un bouton"
                onPress={ this.btnOnPress.bind(this) }
              />
            </View>
        </View>
   
    );
  }

  btnOnPress(){
    Alert.alert('C\'est bien t\'as su mettre ton doigt sur le bouton');

    this.setState({ 
      dynamicTitle: 'Vous avez cliqué sur le bouton'
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

  },

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});*/
