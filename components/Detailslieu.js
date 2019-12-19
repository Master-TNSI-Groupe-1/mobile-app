import React from 'react';
import { FlatList,SafeAreaView,ScrollView,RefreshControl,SectionList,StyleSheet, Text, View, Alert,Div } from 'react-native';
import info_lieu from '../Helpers/info_lieu';
import DetailsItem from './DetailsItem';

export default class DetailslieuScreen extends React.Component {
  constructor() {
    super();
    this.url = 'http://3.87.54.32/get/previsions/';
    this.state = {
      isRefreshing: false,
      data: [],
    }

  }
/*static navigationOptions = ({ navigation }) => {
    return {
       // title: navigation.getParam('place'),
      };
};*/

  componentDidMount() {
    const data = this.props.navigation.getParam('data');
    // console.log('idSite',data.id_location);
    
    this.getPrevisionsByBatiment(data.id_location).then(data => {
        // console.log('previsions', JSON.parse(data.data[0].json_object))
        if (data.data.json_object) {
          const parsedData = JSON.parse(data.data.json_object);
          const updatedData = parsedData.data.map( (e,id) => {
            return {
                heure : e.heure,
                estimation : e.estimation,
                user_max:e.user_max,
                currentId : id
            }
        });
        console.log(updatedData);
          this.arrayholder = parsedData.data;
          this.setState({
              isLoading: false,
              data: updatedData
          });
        }
    });
  }

  getPrevisionsByBatiment(idSite) {
    return fetch(this.url + idSite)
        .then((response) => response.json())
        .catch((error) => console.error(error))
  }

  render() {
    const place = this.props.navigation.getParam('location');
    //var place = JSON.stringify(navigation.getParam('location'));

    const onRefresh = () => {
      this.setState({isRefreshing: true});
      this.componentDidMount();
      setTimeout(() => {
        this.setState({isRefreshing: false});
      }, 2000);
    }

    return (
    <View style={styles.main}>
      <Text style={styles.titleDetail}>Plus de Details pour: {place}</Text>
            <View style={styles.flatListContainer}>
            <SafeAreaView style={{flex: 0}} >
            
                    <FlatList
                    contentContainerStyle={styles.scrollView}
                    refreshControl={
                      <RefreshControl refreshing={this.state.isRefreshing} onRefresh={onRefresh} />
                    }
                        data={this.state.data}
                        keyExtractor={(item) => item.id}
                       //keyExtractor={(item, index) => index}
                        //keyExtractor={item => item.id_location}
                        keyExtractor={(item, index) => ((data.length - index - 1).toString())}
                        renderItem={({item}) => <DetailsItem Detail={item}/>
                        }
                    /> 
             
              </SafeAreaView>  
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
    color: 'white',
    marginBottom: '5%',
    paddingTop:'7%',
    textAlign: 'center',
    fontSize: 20,
    backgroundColor: '#74b9ff',
    height: '11%',
    width:'100%',
  },

  flatListContainer: {
   // paddingTop: '5%'
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
