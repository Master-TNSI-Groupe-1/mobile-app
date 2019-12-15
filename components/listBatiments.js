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
        const {navigate} = this.props.navigation;
        const data = this.props.navigation.getParam('data');
        // const location = this.props.navigation.getParam('location');
        // console.log(data);
        // console.log(location)

            return( <View style={styles.container} >
                   
    <Text style={styles.titleDetail}>Batiments</Text>
                        <FlatList
                            data={data.data}
                            renderItem={({item}) => 
                            <View style={styles.row}>
                                <Text style={styles.ni1} onPress={() => {
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
                                <Text style={styles.niv2} >Instantané: 50/100</Text>
                                <Text style={styles.niv2} onPress={() => {navigate('Detailslieu', {location: item.key, data: item})}}>Afficher plus d'horaires</Text>
                                <Text style={styles.niv2} >Etre notifier</Text></View>
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
     //paddingTop: 22
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
      borderBottomWidth: 1
    },
    row: { 
        flexDirection: 'row',
       // alignItems:'baseline',
        //marginTop:5,
        //paddingTop:10, 
        paddingBottom:10,
        borderBottomWidth:0.4, 
        //borderTopWidth:0.2,
        borderLeftWidth:0.2,
        borderRightWidth:0.2,
       // borderColor:'grey', 
        marginHorizontal: 15,
       // shadowOffset:{  width: 1,  height: 1,  },
       // shadowColor: 'white',
        //shadowOpacity: 0.5, 
        borderStyle: 'solid', 
       // justifyContent:"center",
        //borderRadius:7,  
        
        
   },
   titleDetail : {
    color: '#fff',
    //marginTop: '5%',
    padding:20,
    textAlign: 'center',
    fontSize: 20,
   // marginBottom:10,
    backgroundColor: '#52B3D9',
    height:70,
    width:'100%',
    
  },
    niv2:{
      marginTop:13,
      fontSize:14,
    },
})