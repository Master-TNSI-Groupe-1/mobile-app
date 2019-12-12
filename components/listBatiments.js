import React, { Component } from 'react';
import { StyleSheet, Text, View, Alert, FlatList } from 'react-native';

  
export default class ListBatiments extends Component {   
    
    constructor(props) {
        super(props);
    }
    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('location'),
          };
    };

    showList = (element) => {
      console.log(element);
    };
        
    
    render() {
        const data = this.props.navigation.getParam('data');
        // const location = this.props.navigation.getParam('location');
        // console.log(data);
        // console.log(location)

            return( <View style={styles.container}>
                        <FlatList
                            data={data.data}
                            renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}/>
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
    },
})