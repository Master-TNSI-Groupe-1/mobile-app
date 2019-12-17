
import React from 'react';
import {StyleSheet, Text, View, Alert, FlatList, TouchableHighlight, Image} from 'react-native';
import {Button} from 'react-native-elements';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Constants from 'expo-constants';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import * as TaskManager from 'expo-task-manager';
import ParameterScreen from './components/ParameterView';
import ListBatiments from './components/listBatiments';
import DetailslieuScreen from './components/Detailslieu';
import { SearchBar } from 'react-native-elements';


/**constantes */
const LOCATION_TASK_NAME = 'background-location-task';


import registerForPushNotificationsAsync from './components/notifications';

/*
  Quickstart fonctionnel.
*/
class HomeScreen extends React.Component {

    constructor() {
        super();
        this.placeList = [
            {
                title: "Mont houy",
                image: "./monthouy.jpg",
                data: [{key: "Batiment 1", capacityInstant: 10, capacityMax: 300}, {
                    key: "Batiment 2",
                    capacityInstant: 50,
                    capacityMax: 100
                }, {key: "Batiment 3", capacityInstant: 100, capacityMax: 250}]
            },
            {
                title: "Tertiale",
                image: "./monthouy.jpg",
                data: [{key: "Batiment 4", capacityInstant: 200, capacityMax: 200}, {
                    key: "Batiment 5",
                    capacityInstant: 10,
                    capacityMax: 200
                }, {key: "Batiment 6", capacityInstant: 10, capacityMax: 30}]
            },
            {
                title: "Maubeuge",
                image: "./monthouy.jpg",
                data: [{key: "Batiment 7", capacityInstant: 100, capacityMax: 200}, {
                    key: "Batiment 8",
                    capacityInstant: 80,
                    capacityMax: 200
                }, {key: "Batiment 9", capacityInstant: 20, capacityMax: 20}, {
                    key: "Batiment 10",
                    capacityInstant: 50,
                    capacityMax: 100
                }]
            }
        ];

        this.state = {
          location: null,
          errorMessage: null, 
          search: '',
            data: [...this.placeList]
        };
    }


    static navigationOptions = {
        title: 'Lieux',
    }

    // componentDidMount() {
    //   navigator.geolocation.getCurrentPosition(
    //     position => {
    //       const location = JSON.stringify(position);
    //       this.setState({ cords: location });
    //       // console.log(this.state.cords);
    //     },
    //     error => Alert.alert(error.message),
    //     { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    //   );
    // }


    componentDidMount() {
      registerForPushNotificationsAsync();
      if (Platform.OS === 'android' && !Constants.isDevice) {
        this.setState({
          errorMessage: 'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
        });
      } else {
        this.getLocationAsync();
        this.updateLocationBackground();
      }
    }

    getLocationAsync = async () => {
      let { status } = await Permissions.askAsync(Permissions.LOCATION);
      if (status !== 'granted') {
        this.setState({
          errorMessage: 'Permission to access location was denied',
        });
      }
  
      const location = await Location.getCurrentPositionAsync({});
      this.setState({ location: JSON.stringify(location) });
      console.log('location', this.state.location)
    };

    updateLocationBackground = async () => {
      await Location.startLocationUpdatesAsync(LOCATION_TASK_NAME, {
        accuracy: Location.Accuracy.Balanced,
        distanceInterval: 0.5,
        showsBackgroundLocationIndicator: false,
      })
    };

    SearchFilterFunction(searchedWord) {
      let listFiltered = this.placeList.filter((item) => item.title.toUpperCase().includes(searchedWord.toUpperCase()));
      this.setState({
        search: searchedWord,
        data: listFiltered
      });
  }


    render() {
        const {navigate} = this.props.navigation;
        const { search } = this.state;
        return (
            <View style={styles.main}>
                <View style={styles.titleContainer}>
                  <Text style={styles.title}>Liste des sites !</Text>
                </View>
                <SearchBar
                  placeholder="Rechercher un lieu"
                  onChangeText={search => this.SearchFilterFunction(search)}
                  value={search}
                  lightTheme
                />
              <View style={styles.list}>
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
                <View style={styles.container}>
                  {/* <TouchableOpacity onPress={this.onPress}>
                    <Text>Activer la géo-localisation en arrière plan!</Text>
                  </TouchableOpacity> */}
                  <Text style={styles.paragraph}>Cordonnées gps: {this.state.location}</Text>
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
    Detailslieu: {screen: DetailslieuScreen},
});

const App = createAppContainer(MainNavigator);

export default App;


TaskManager.defineTask(LOCATION_TASK_NAME, ({ data: { locations }, error }) => {
  if (error) {
    // Error occurred - check `error.message` for more details.
    console.log('error',error)
    return;
  }
  // this.setState({ location: JSON.stringify(location) });
  console.log('Received new locations ' + new Date(), locations);
});

const styles = StyleSheet.create({
    main: {
        width: '100%',
        height: '100%'
    },
    list: {
        marginHorizontal: '5%'
    },
    titleContainer: {
        backgroundColor: '#74b9ff',
        height: '11%',
        marginBottom: '5%'
    },
    title: {
        marginTop: '7%',
        color: 'white',
        textAlign: 'center',
        fontSize: 20
    },
    button: {
        padding: '0%',
        alignItems: 'center',
        width: '100%',
        height: '30%',
    },
    paragraph: {
      margin: 24,
      fontSize: 18,
      textAlign: 'center',
    },
    item: {  
        padding: 10,  
        fontSize: 18,  
        height: 44,  
    }, 
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonSize: {
        paddingTop: '5%',  
        margin: 5,      
    }
});

/*
                <View style={styles.list}>
                    {
                        this.state.data.map((value, key) => {
                            return <Button key={key}
                              style={styles.button}
                              title={value.title}
                              onPress={() => navigate('Batiments', {location: value.title, data: value})}
                            />
                        })
                    }
                </View>

                 <FlatList data={this.state.data}
                    renderItem={({item}) =>  
                        <Text style={styles.item} onPress={() => navigate('Batiments', {location: item.title, data: item})}> {item.title} </Text>
                    }
                />  

                            <View>{
                this.state.data.map((value, key) => {
                    return  <TouchableHighlight
                    style={styles.button}
                    key={key}
                    onPress={() => navigate('Batiments', {location: value.title, data: value})}
                   >
                        <Image
                   style={styles.button}
                   source={require('./monthouy.jpg')}
                 />
                   </TouchableHighlight>
                })
                }
            </View>
                */