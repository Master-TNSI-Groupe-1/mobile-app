import React from 'react';
import {SafeAreaView,ScrollView,StyleSheet, Text, View, Alert,Div } from 'react-native';


export default class DetailsItem extends React.Component {
   
  render() {  const Detail = this.props.Detail
    return (
      <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>

          <View style={styles.row}>

               <Text style={styles.heure} >{Detail.hour}</Text>
               <View>
                  <Text style={styles.primaryText}>
                  {Detail.information_1}
                 </Text>
                 <Text style={styles.secondaryText}>{Detail.information_2}</Text>
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
     //marginTop:5,
     paddingTop:10, 
     paddingBottom:10,
     borderBottomWidth:0.4, 
     borderTopWidth:0.1,
     borderLeftWidth:0.2,
     borderRightWidth:0.2,
     borderColor:'grey', 
     marginHorizontal: 20,
     shadowOffset:{  width: 1,  height: 1,  },
     shadowColor: 'white',
     shadowOpacity: 0.5, 
     borderStyle: 'solid', 
     //borderRadius:7,  
     
     
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
//export default DetailsItem