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
            title: navigation.getParam('location'),
          };
    };

    showList = (element) => {
      console.log(element);
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
        const data = this.props.navigation.getParam('data');
        // const location = this.props.navigation.getParam('location');
        // console.log(data);
        // console.log(location)

            return( <View style={styles.container} >
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
                            renderItem={({item}) =>
                                <Text onPress={() => {
                                    Alert.alert(`${item.key}`,
                                        'details du batiments',
                                        [
                                            {
                                                text: 'Fermer',
                                                onPress: () => console.log('Cancel Pressed'),
                                                style: 'cancel',
                                            },
                                            {text: 'Voir', onPress: () => console.log('OK Pressed')},
                                        ]
                                    );
                                }}style={styles.item} >{item.key}</Text>
                            }
                        />
                    </View>

            );
    }


}

const styles = StyleSheet.create({
    container: {
     flex: 1,
     paddingTop: 22
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
      borderBottomWidth: 1
    },
})
