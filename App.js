import React from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import { Button } from 'react-native-elements';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import ParameterScreen from './ParameterView';
import DetailslieuScreen from './src/Components/Detailslieu';


/* 
  Quickstart fonctionnel.
*/
class HomeScreen extends React.Component {

  static navigationOptions = {
    title: 'Welcome',
  };

  constructor(){
    super();
    this.state = {
    };
  }

  static navigationOptions = {
    title: 'Flux App Monitoring',
  };

  render() {
    const {navigate} = this.props.navigation;
    return (
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
          <Button
            style={styles.buttonSize}
            title="Test UnivValenciennes -> ISTV -> Details Lieu"
            onPress={() => navigate('Detailslieu', {place: 'ISTV'})}
          />
        </View>

      </View>
    );
  }
}

//Ajouter sa vue dans le MainNavigator et ajouter un bouton dans HomeScreen pour y acceder
const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  Parameter: {screen: ParameterScreen},
  Detailslieu:{screen:DetailslieuScreen},
});

const App = createAppContainer(MainNavigator);

export default App;

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
});
