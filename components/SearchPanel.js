import React from 'react'
import { View, Text } from 'react-native'
import { SearchBar } from 'react-native-elements';
import { FlatList } from 'react-native'
import lieux from '../datas/lieux'

class SearchPanel extends React.Component {

    
    state = {
        search: '',
        list: lieux
    };

    updateSearch (){
        this.setState({ search: search });
    };



    SearchFilterFunction(searchedWord, list) {
        //passing the inserted text in textinput
        let listFiltered = [];
        for(let item of list){
            if(item.name.toUpperCase().includes(searchedWord.toUpperCase()))listFiltered.push(item);
        }
        this.setState({
          //setting the filtered newData on datasource
          //After setting the data it will automatically re-render the view
          search: searchedWord,
          list: listFiltered
        });
    }

    render() {
        const { search } = this.state;
        return (
        <View style={{marginTop: 30}}>
            <SearchBar
            placeholder="Rechercher un lieu"
            onChangeText={search => this.SearchFilterFunction(search, list)}
            value={search}
            />
        </View>
        )
    }
}


export default SearchPanel