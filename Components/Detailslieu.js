import React from 'react';
import { SectionList,StyleSheet, Text, View, Alert,Div } from 'react-native';
import { Button } from 'react-native-elements';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

export default class DetailslieuScreen extends React.Component {
  static navigationOptions = {
    title: 'Flux App Monitoring',
  };
  render() {
    const {navigation} = this.props;
    var place = JSON.stringify(navigation.getParam('place', 'Place not selected'))
    return (
      <View style={styles.main}>
        <Text style={styles.titleDetail}>Plus de Details pour : {place}</Text>
          <View style={styles.row}>
              <Text style={styles.heure} >08H</Text>
          <View>
             <Text style={styles.primaryText}>
                 information 1
            </Text>
            <Text style={styles.secondaryText}>information 2</Text>
         </View>
        </View>
             </View>
    );
  }
}

const styles = StyleSheet.create({
  main : {
    width: '100%',
    height: '100%',
    paddingLeft:30,
    paddingRight:30,
  },
  btnSize : {

  },
  titleDetail : {
    color: '#fff',
    marginTop: '5%',
    textAlign: 'center',
    fontSize: 25,
    marginBottom:10,
    backgroundColor:'#318ce7',
    
  },

   row: { 
     flexDirection: 'row',
     alignItems: 'center',
     marginTop:10,
     paddingTop:10, 
     paddingBottom:10,
     borderBottomWidth:1, 
     borderTopWidth:1,
     borderLeftWidth:2,
     borderRightWidth:2,
     borderColor:'grey', 
     
},
   heure: { width: 50, height: 50, borderRadius: 25, marginRight: 18, padding:10,},
   primaryText: {
     
     fontSize: 14,
     color: 'black',
     marginBottom: 4,
   },
   secondaryText: { color: 'black',fontSize: 14, },
});
