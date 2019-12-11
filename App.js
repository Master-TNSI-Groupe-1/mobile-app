import React from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import { Button } from 'react-native-elements';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import ParameterScreen from './ParameterView';


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
        <Text style={styles.title}>{ this.state.dynamicTitle }</Text>
        <Button
          title="ParameterView"
          onPress={() => navigate('Parameter', {place: 'ISTV'})}
        />

      </View>
    );
  }
}

//Ajouter sa vue dans le MainNavigator et ajouter un bouton dans HomeScreen pour 
const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  Parameter: {screen: ParameterScreen},
});

const App = createAppContainer(MainNavigator);

export default App;


// export default class App extends React.Component {

//   constructor(){
//     super();

//     this.state = {
//       dynamicTitle : 'Flux App Monitoring'
//     };
//   }

//   static navigationOptions = {
//     title: 'Welcome',
//   };

//   render(){
//     const {navigate} = this.props.navigation;
//     return (
//         <View style={styles.main}>
//             <Text style={styles.title}>{ this.state.dynamicTitle }</Text>
//             <View style={styles.container}>
//               <Button
//                 style={styles.btnSize}
//                 title="Vous étes des champions"
//                 onPress={ this.btnOnPress.bind(this) }
//               />
//               <Button
//                 title="Go to Jane's profile"
//                 onPress={() => navigate('Profile', {name: 'Jane'})}
//               />
//             </View>
//         </View>
   
//     );
//   }

//   btnOnPress(){
//     Alert.alert('Vous étes des champions, bon courage les mecs !!');

//     this.setState({ 
//       dynamicTitle: 'Happy Coding les mecs !'
//     });
//   }
// }

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
});
