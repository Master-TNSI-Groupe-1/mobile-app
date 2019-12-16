import React from 'react';
import { StyleSheet, Text, View, Slider,Button } from 'react-native';
import RangeSlider from 'react-native-range-slider';

export default class ParameterScreen extends React.Component {
  state = {
    minTimeValue: 10,
    maxTimeValue: 17,
    minFlowValue: 40,
    maxFlowValue: 60
  };
  
  static navigationOptions = {
    title: 'Flux App Monitoring',
  };

  render() {
    const {navigation} = this.props;
    var place = JSON.stringify(navigation.getParam('location', 'Place not selected'))
    return (
      <View style={styles.main}>
        <Text style={styles.title}>Le lieu selectionné est {place}</Text>
        <View style={styles.sliderView}>
          <Text style={styles.sliderTitle}>Heures mini: {this.state.minTimeValue} H:</Text>
          <Slider
              style={styles.slider}
              value={this.state.minTimeValue}
              onValueChange={value => this.setState(previousState => (
                { 
                  minTimeValue: value,
                  maxTimeValue: previousState.maxTimeValue,
                  flowValue: previousState.flowValue 
                }
              ))}
              style={{width: 200, height: 40}}
              minimumValue={0}
              maximumValue={24}
              step={0.25}
              minimumTrackTintColor="#000000"
              maximumTrackTintColor="#000000">
          </Slider>
          <Text style={styles.sliderTitle}>Heures maxi: {this.state.maxTimeValue} H:</Text>
          <Slider
              style={styles.slider}
              value={this.state.maxTimeValue}
              onValueChange={value => this.setState(previousState => (
                { 
                  minTimeValue: previousState.minTimeValue,
                  maxTimeValue: value,
                  flowValue: previousState.flowValue 
                }
                ))}
              style={{width: 200, height: 40}}
              minimumValue={0}
              maximumValue={24}
              step={0.25}
              minimumTrackTintColor="#000000"
              maximumTrackTintColor="#000000">
          </Slider>
          <Text style={styles.sliderTitle}>Flux mini: {this.state.minFlowValue} %</Text>
          <Slider
              style={styles.slider}
              value={this.state.minFlowValue}
              onValueChange={value => { this.setState(previousState => (
                { 
                  minTimeValue: previousState.minTimeValue,
                  maxTimeValue: previousState.maxTimeValue,
                  minFlowValue: value,
                  maxFlowValue: previousState.maxFlowValue
                }
              ))}}
              style={{width: 200, height: 40}}
              minimumValue={0}
              maximumValue={100}
              step={1}
              minimumTrackTintColor="#000000"
              maximumTrackTintColor="#000000">
          </Slider>
          <Text style={styles.sliderTitle}>Flux maxi: {this.state.maxFlowValue} %</Text>
          <Slider
              style={styles.slider}
              value={this.state.maxFlowValue}
              onValueChange={value => { this.setState(previousState => (
                { 
                  minTimeValue: previousState.minTimeValue,
                  maxTimeValue: previousState.maxTimeValue,
                  minFlowValue: previousState.minFlowValue,
                  maxFlowValue: value 
                }
              ))}}
              style={{width: 200, height: 40}}
              minimumValue={0}
              maximumValue={100}
              step={1}
              minimumTrackTintColor="#000000"
              maximumTrackTintColor="#000000">
          </Slider>
        </View>
        <Button
            style={styles.buttonSize}
            title="Validé"
            // onPress={() => navigate('Parameter', {place: 'ISTV'})} A COMPLETER RETOUR
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main : {
    width: '100%',
    height: '100%',
  },
  buttonSize : {

  },
  title : {
    color: 'blue',
    marginTop: '5%',
    textAlign: 'center',
    fontSize: 25
  },
  sliderTitle : {
    color: 'black',
    marginTop: '2%',
    textAlign: 'center',
    fontSize: 16
  },
  sliderView : {
    width: '100%', 
    height: '100%',
    paddingHorizontal: '25%',
    marginTop: '15%'
  },
  slider : {
    width: 300, 
    height: 40
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
