import React from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import { Button } from 'react-native-elements';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import ParameterScreen from './components/ParameterView';
import ListBatiments from './components/listBatiments'


/* 
  Quickstart fonctionnel.
*/
class HomeScreen extends React.Component {

  constructor(){
    super();
    this.state = {
      data:[
        {title :"mont houy", data:[{key :"batiment 1"},{key: "batiment 2"},{key: "batiment 3"}]},
        {title :"tertiale", data:[{key: "batiment 4"},{key: "batiment 5"},{key: "batiment 6"}]},
        {title : "maubeuge", data:[{key: "batiment 7"},{key: "batiment 8"},{key: "batiment 9"}, {key: "batiment 10"}]}
      ]
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
          {
            this.state.data.map((value, key) => {
              return <Button key={key}
                        style={styles.buttonSize}
                        title={value.title}
                        onPress={() => navigate('Batiments', {location: value.title, data: value})}
                      />
            })
          }
        </View>

      </View>
    );
  }
}

//Ajouter sa vue dans le MainNavigator et ajouter un bouton dans HomeScreen pour y acceder
const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  Parameter: {screen: ParameterScreen},
  Batiments: {screen: ListBatiments},
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
    paddingTop: '5%'
  },

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
