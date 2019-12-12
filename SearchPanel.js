import React from 'react'
import { View, Text } from 'react-native'
import { SearchBar } from 'react-native-elements';
import { FlatList } from 'react-native'
import lieux from './datas/lieux'

class SearchPanel extends React.Component {

    
    state = {
        search: '',
        lieuList: lieux
    };

    updateSearch (){
        this.setState({ search: search });
    };



    SearchFilterFunction(lieuSearched) {
        //passing the inserted text in textinput
        let lieuFilter = [];
        for(let lieu of lieux){
            if(lieu.name.toUpperCase().includes(lieuSearched.toUpperCase()))lieuFilter.push(lieu);
        }
        this.setState({
          //setting the filtered newData on datasource
          //After setting the data it will automatically re-render the view
          search: lieuSearched,
          lieuList: lieuFilter
        });
    }

    render() {
        const { search } = this.state;
        return (
        <View style={{marginTop: 30}}>
            <SearchBar
            placeholder="Rechercher un lieu"
            onChangeText={search => this.SearchFilterFunction(search)}
            value={search}
            />
            <FlatList
            data = {this.state.lieuList}
            keyExtractor={(item) => item.key.toString()} 
            renderItem = {({item}) => <Text style={{fontSize: 25}}>{item.name}</Text>}
            />
        </View>
        )
    }
}


export default SearchPanel