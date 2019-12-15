import React from 'react';
import {StyleSheet, Text, View, Alert} from 'react-native';
import {Button} from 'react-native-elements';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import ParameterScreen from './components/ParameterView';
import ListBatiments from './components/listBatiments';
import DetailslieuScreen from './components/Detailslieu';

import registerForPushNotificationsAsync from './components/notifications';

/*
  Quickstart fonctionnel.
*/
class HomeScreen extends React.Component {
    componentDidMount() {
      registerForPushNotificationsAsync();

    }
    constructor() {
        super();
        this.state = {
            data: [
                {title: "Mont houy", data: [{key: "Batiment 1"}, {key: "Batiment 2"}, {key: "Batiment 3"}]},
                {title: "Tertiale", data: [{key: "Batiment 4"}, {key: "Batiment 5"}, {key: "Batiment 6"}]},
                {title: "Maubeuge", data: [{key: "Batiment 7"}, {key: "Batiment 8"}, {key: "Batiment 9"}, {key: "Batiment 10"}]}
            ]
        };
    }

    static navigationOptions = {
        title: 'Flux Monitoring',
    };

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.main}>
                <View style={styles.titleContainer}>
                  <Text style={styles.title}>Liste des sites !</Text>
                </View>
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

            </View>
        );
    }
}

//Ajouter sa vue dans le MainNavigator et ajouter un bouton dans HomeScreen pour y acceder
const MainNavigator = createStackNavigator({
    Home: {screen: HomeScreen},
    Parameter: {screen: ParameterScreen},
    Batiments: {screen: ListBatiments},
    Detailslieu:{screen:DetailslieuScreen},
});

const App = createAppContainer(MainNavigator);

export default App;

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
        height: '11%'
    },
    title: {
        marginTop: '7%',
        color: 'white',
        textAlign: 'center',
        fontSize: 20
    },
    buttonSize: {
        paddingTop: '5%'
    },

    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
