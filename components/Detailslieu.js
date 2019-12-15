import React from 'react';
import { FlatList,SafeAreaView,ScrollView,SectionList,StyleSheet, Text, View, Alert,Div } from 'react-native';
import { Button } from 'react-native-elements';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import info_lieu from '../Helpers/info_lieu';
import DetailsItem from './DetailsItem';

export default class DetailslieuScreen extends React.Component {
  constructor() {
    super();

}
/*static navigationOptions = ({ navigation }) => {
    return {
       // title: navigation.getParam('place'),
      };
};*/

  render() {
    const place = this.props.navigation.getParam('location');
    //var place = JSON.stringify(navigation.getParam('location'));
    return (
    <View style={styles.main}>
    <Text style={styles.titleDetail}>Plus de Details pour: {place}</Text>
          <View>
          <FlatList
               data={info_lieu}
               keyExtractor={(item) => item.id.toString()}
               renderItem={({item}) => <DetailsItem Detail={item}/>
               }
          />
              
        </View>
        
             </View>

    );
  }
}

const styles = StyleSheet.create({
  main : {
    width: '100%',
    height: '100%',

  },
  btnSize : {

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

   row: { 
     flexDirection: 'row',
     alignItems: 'center',
     marginTop:5,
     paddingTop:10, 
     paddingBottom:10,
     borderBottomWidth:0.4, 
     borderTopWidth:0,
    // borderLeftWidth:0.2,
     //borderRightWidth:0.2,
     borderColor:'grey', 
     marginHorizontal: 20,
     shadowOffset:{  width: 1,  height: 1,  },
     shadowColor: 'white',
     shadowOpacity: 0.5, 
     borderStyle: 'solid', 
     borderRadius:7,  
     
     
},
   heure: { width: 50, height: 50, borderRadius: 25, marginRight: 18, padding:15,marginLeft:20,},
   primaryText: {
     
     fontSize: 14,
     color: 'black',
     marginBottom: 4,
     textAlign:"center",
     marginLeft:20,
   },
   secondaryText: { color: 'black',fontSize: 14, marginLeft:20,},
   scrollView: {
    //marginHorizontal: 20,
  },
});
