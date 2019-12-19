import React from 'react';
import {SafeAreaView,ScrollView,StyleSheet, Text, View, Alert,Div } from 'react-native';


export default class DetailsItem extends React.Component {
   
  render() {  
    
    const detail = this.props.Detail
    return (
      <SafeAreaView style={styles.container}>
          <ScrollView>
            { 
              detail ? 
              <View style={styles.row}>
                <Text style={styles.heure} >{detail.heure}</Text>
                <View>
                  <Text style={styles.primaryText}>
                    flux estimé à : {detail.estimation}
                  </Text>
                  <Text style={styles.secondaryText}>
                    Capacité : {(parseInt(detail.estimation, 10) * parseInt(detail.user_max, 10)) / 100 }/{detail.user_max}
                  </Text>
                </View>             
              </View> : <Text style={styles.paragraph}> Aucune prévisions pour ce batiment !</Text>
           
            }
            
            
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

  titleDetail : {
    color: '#fff',
    marginTop: '5%',
    marginBottom: '5%',
    padding:20,
    textAlign: 'center',
    fontSize: 20,
    backgroundColor: '#74b9ff',
    height:70,
    width:'100%',
  },
    paragraph: {
      margin: 24,
      fontSize: 22,
      textAlign: 'center',
      color: 'red',
  },
   row: { 
     flexDirection: 'row',
     alignItems: 'center',
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
    },

   heure: { 
     width: 50,
     height: 50, 
     borderRadius: 25, 
     marginRight: 18, 
     padding:15,
     marginLeft:20
   },

   primaryText: {
     fontSize: 14,
     color: 'black',
     marginBottom: 4,
     textAlign:"center",
     marginLeft:20,
   },

   secondaryText: { 
    color: 'black',
    fontSize: 14,
    marginLeft:20,
   },
});