import React, { Component } from 'react';
import { FlatList,SafeAreaView,ScrollView,RefreshControl,SectionList,StyleSheet, Text, View, Alert,Div } from 'react-native';
import {SearchBar} from "react-native-elements";


export default class ListBatiments extends Component {

    constructor(props) {
        super(props);
        this.batimentsURL = 'http://3.87.54.32/get/lieux/';
        this.state = {
            isLoading: true,
            isRefreshing: false,
            search: '',
            batiments: [],
        };
        this.arrayholder = [];
    }

    static navigationOptions = ({navigation}) => {
        return {
            title: navigation.getParam('site') + ': bâtiments',
        };
    };

    componentDidMount() {
        const idSite = this.props.navigation.getParam('id');
        this.getBatiments(idSite).then(data => {
            // console.log(data)

            this.arrayholder = data.data;
            this.setState({
                isLoading: false,
                batiments: data.data,
                isRefreshing: false
            });
        });
    }


    SearchFilterFunction(searchedWord) {
        let listFiltered = this.arrayholder.filter((item) => item.name.toUpperCase().includes(searchedWord.toUpperCase()));
        this.setState({
            search: searchedWord,
            batiments: listFiltered
        });
    }

    getBatiments(idSite) {
        return fetch(this.batimentsURL + idSite)
            .then((response) => response.json())
            .catch((error) => console.error(error))
    }

    onRefresh = () => {
        this.setState({isRefreshing: true});
        this.componentDidMount();
    }

    render() {
        const {navigate} = this.props.navigation;
        const bat=this.props.navigation.getParam('site');
        return(
                <View style={styles.container} >
                      <Text style={styles.titleDetail}>Batiments</Text>
                    <SearchBar
                        searchIcon={{ size: 24 }}
                        onChangeText={text => this.SearchFilterFunction(text)}
                        onClear={() => this.SearchFilterFunction('')}
                        placeholder="Rechercher"
                        value={this.state.search}
                        round
                        lightTheme
                    />
                    <SafeAreaView style={{flex: 0}}>
                    {
                         this.state.batiments ?

                        <FlatList
                          contentContainerStyle={styles.scrollView}
                          refreshControl={
                          <RefreshControl refreshing={this.state.isRefreshing} onRefresh={this.onRefresh} />
                          }
                            data={this.state.batiments}
                            keyExtractor={item => item.id_site}
                            renderItem={ ({item}) =>
                                <View style={styles.row}>
                                    <View style={styles.column}>
                                    <Text onPress={() => {
                                        Alert.alert(`${item.name}`,
                                            'details du batiments',
                                            [
                                                {
                                                    text: 'Fermer', onPress: () => console.log('Cancel Pressed'),
                                                    style: 'cancel',
                                                },
                                                {text: 'Voir', onPress: () => navigate('Detailslieu', {location: item.name, data: item})},
                                            ]
                                        );
                                    }}style={styles.item} >{item.name} : </Text>
                                    </View>

                                    <View style={styles.column}>
                                        <Text style={styles.niv2} >Instantané: {item.number_user}/{item.number_places}</Text>
                                        <Text style={styles.link} onPress={() => {navigate('Detailslieu', {location: item.name, data: item})}}>Afficher plus d'horaires</Text>
                                        <Text style={styles.link} onPress={() => {navigate('Parameter', {location: item.name, data: item,id_location: item.id_location})}}>Être notifié</Text>
                                    </View>
                                </View>
                            }
                            keyExtractor={item => item.id_location}
                        />: <Text style={styles.paragraph}>Oups, Il y a aucun Batiments pour {bat}</Text>
                    }

                    </SafeAreaView>
                </View>
        );
    }


}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    column: {
        flex:1,
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
        textDecorationLine: 'underline'
    },
    row: {
        flexDirection: 'row',
        paddingBottom: 10,
        borderBottomWidth: 0.4,
        borderLeftWidth: 0.2,
        borderRightWidth: 0.2,
        marginHorizontal: 15,
        borderStyle: 'solid',
    },
    titleDetail: {
        color: '#fff',
        paddingTop: '7%',
        textAlign: 'center',
        fontSize: 20,
        backgroundColor: '#74b9ff',
        height: '11%',
        width: '100%',
    },
    niv2: {
        marginTop: 12,
        fontSize: 16,
    },
    link: {
        marginTop: 5,
        fontSize: 16,
        color: 'blue',
        textDecorationLine: 'underline'
    },
    paragraph: {
        margin: 24,
        fontSize: 18,
        textAlign: 'center',
        color:'#74b9ff',
      },
})

