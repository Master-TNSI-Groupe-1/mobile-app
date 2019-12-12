<<<<<<< HEAD
import React, {Component} from 'react';
import { StyleSheet, Text, View, Alert, TextInput, FlatList } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { List, ListItem } from 'react-native-elements';
import SearchPanel from './SearchPanel';
=======
import React from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import { Button } from 'react-native-elements';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import ParameterScreen from './ParameterView';
>>>>>>> origin


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
<<<<<<< HEAD
/*export default class App extends React.Component {
=======
class HomeScreen extends React.Component {

  static navigationOptions = {
    title: 'Welcome',
  };
>>>>>>> origin

  constructor(){
    super();
    this.state = {
<<<<<<< HEAD
      dynamicTitle : 'Appli React'
=======
>>>>>>> origin
    };
  }

  static navigationOptions = {
    title: 'Flux App Monitoring',
  };

  render() {
    const {navigate} = this.props.navigation;
    return (
<<<<<<< HEAD
        <View style={styles.main}>
            <Text style={styles.title}>{ this.state.dynamicTitle }</Text>
            <View style={styles.container}>
              <Button
                style={styles.btnSize}
                title="Je suis un bouton"
                onPress={ this.btnOnPress.bind(this) }
              />
            </View>
=======
      <View style={styles.main}>
        <Text style={styles.title}>Liste de vos lieux sélectionnés</Text>
        <View style={styles.list} >
          <Button
            style={styles.buttonSize}
            title="Test UnivValenciennes"
            onPress={() => navigate('Parameter', {place: 'ISTV'})}
          />
          <Button
            style={styles.buttonSize}
            title="Test UnivValenciennes -> ISTV"
            onPress={() => navigate('Parameter', {place: 'ISTV'})}
          />
          <Button
            style={styles.buttonSize}
            title="Test UnivValenciennes -> ISTV -> Parametrage"
            onPress={() => navigate('Parameter', {place: 'ISTV'})}
          />
>>>>>>> origin
        </View>

      </View>
    );
  }
}

<<<<<<< HEAD
  btnOnPress(){
    Alert.alert('C\'est bien t\'as su mettre ton doigt sur le bouton');

    this.setState({ 
      dynamicTitle: 'Vous avez cliqué sur le bouton'
    });
  }
}
=======
//Ajouter sa vue dans le MainNavigator et ajouter un bouton dans HomeScreen pour y acceder
const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  Parameter: {screen: ParameterScreen},
});

const App = createAppContainer(MainNavigator);

export default App;
>>>>>>> origin

const styles = StyleSheet.create({
  main : {
    width: '100%',
    height: '100%'
  },
  list : {
    marginHorizontal: '5%'
  },
  title : {
    color: 'black',
    marginTop: '5%',
    textAlign: 'center',
    fontSize: 25
  },
  buttonSize : {
    paddingTop: '1%'
  },

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});*/
