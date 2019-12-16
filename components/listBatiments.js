import React, { Component } from 'react';
import { StyleSheet, Text, View, Alert, FlatList } from 'react-native';
import {SearchBar} from "react-native-elements";


export default class ListBatiments extends Component {

    constructor(props) {
        super(props);
        this.state = { isLoading: true, search: '' };
        this.arrayholder = [];
    }

    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('location') + ': bâtiments',
          };
    };

    componentDidMount() {
        const data = this.props.navigation.getParam('data');
        this.setState(
            {
                isLoading: false,
                dataSource: data.data
            },
            function() {
                this.arrayholder = data.data;
            }
        );
    }
    SearchFilterFunction(text) {
        const newData = this.arrayholder.filter(function(item) {
            const itemData = item.key ? item.key.toUpperCase() : ''.toUpperCase();
            const textData = text.toUpperCase();
            return itemData.indexOf(textData) > -1;
        });
        this.setState({
            dataSource: newData,
            search:text,
        });
    }
    render() {
        const {navigate} = this.props.navigation;
        const data = this.props.navigation.getParam('data');

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

                    <FlatList
                        data={this.state.dataSource}
                        renderItem={ ({item}) =>
                            <View style={styles.row}>
                                <Text onPress={() => {
                                    Alert.alert(`${item.key}`,
                                        'details du batiments',
                                        [
                                            {
                                                text: 'Fermer',
                                                onPress: () => console.log('Cancel Pressed'),
                                                style: 'cancel',
                                            },
                                            {text: 'Voir', onPress: () => navigate('Detailslieu', {location: item.key, data: item})},
                                        ]
                                    );
                                }}style={styles.item} >{item.key} : </Text>

                                <View>
                                    <Text style={styles.niv2} >Instantané: {item.capacityInstant}/{item.capacityMax}</Text>
                                    <Text style={styles.link} onPress={() => {navigate('Detailslieu', {location: item.key, data: item})}}>Afficher plus d'horaires</Text>
                                    <Text style={styles.link} >Être notifié</Text>
                                </View>
                            </View>
                        }
                    />
                </View>
        );
    }


}



const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
        borderBottomWidth: 1
    },
    row: {
        flexDirection: 'row',
        paddingBottom:10,
        borderBottomWidth:0.4,
        borderLeftWidth:0.2,
        borderRightWidth:0.2,
        marginHorizontal: 15,
        borderStyle: 'solid',
    },
    titleDetail : {
        color: '#fff',
        paddingTop:'7%',
        textAlign: 'center',
        fontSize: 20,
        backgroundColor: '#74b9ff',
        height: '11%',
        width:'100%',
    },
    niv2:{
        marginTop:12,
        fontSize:16,
    },
    link:{
        marginTop: 5,
        fontSize:16,
        color: 'blue',
        textDecorationLine: 'underline'
    },
})

