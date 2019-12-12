import React from 'react';
import { SafeAreaView,ScrollView,SectionList,StyleSheet, Text, View, Alert,Div } from 'react-native';
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
      <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
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
        <View style={styles.row}>
              <Text style={styles.heure} >08H</Text>
          <View>
             <Text style={styles.primaryText}>
                 information 1
            </Text>
            <Text style={styles.secondaryText}>information 2</Text>
         </View>
        </View>
        <View style={styles.row}>
              <Text style={styles.heure} >08H</Text>
          <View>
             <Text style={styles.primaryText}>
                 information 1
            </Text>
            <Text style={styles.secondaryText}>information 2</Text>
         </View>
        </View>
        <View style={styles.row}>
              <Text style={styles.heure} >08H</Text>
          <View>
             <Text style={styles.primaryText}>
                 information 1
            </Text>
            <Text style={styles.secondaryText}>information 2</Text>
         </View>
        </View>
        <View style={styles.row}>
              <Text style={styles.heure} >08H</Text>
          <View>
             <Text style={styles.primaryText}>
                 information 1
            </Text>
            <Text style={styles.secondaryText}>information 2</Text>
         </View>
        </View>
        <View style={styles.row}>
              <Text style={styles.heure} >08H</Text>
          <View>
             <Text style={styles.primaryText}>
                 information 1
            </Text>
            <Text style={styles.secondaryText}>information 2</Text>
         </View>
        </View>
        <View style={styles.row}>
              <Text style={styles.heure} >08H</Text>
          <View>
             <Text style={styles.primaryText}>
                 information 1
            </Text>
            <Text style={styles.secondaryText}>information 2</Text>
         </View>
        </View>
        <View style={styles.row}>
              <Text style={styles.heure} >08H</Text>
          <View>
             <Text style={styles.primaryText}>
                 information 1
            </Text>
            <Text style={styles.secondaryText}>information 2</Text>
         </View>
        </View>
        <View style={styles.row}>
              <Text style={styles.heure} >08H</Text>
          <View>
             <Text style={styles.primaryText}>
                 information 1
            </Text>
            <Text style={styles.secondaryText}>information 2</Text>
         </View>
        </View>
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
             </ScrollView>
    </SafeAreaView>
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
