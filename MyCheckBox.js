
  import React, { Component } from 'react';
  import CheckBox from '@react-native-community/checkbox';

import { 
  Alert, 
  Image, 
  Platform, 
  StyleSheet, 
  Text, 
  TouchableHighlight, 
  View,
  Linking,
  Button
} from 'react-native';

  export default class MyCheckBox extends Component {
   
    constructor() {
      super();
      this.state = { 
        checked: null 
      }
    }
  
    componentDidMount() {
      if (this.props.checked) {
        this.setState({ checked: true }, () => {
          this.props.checkedObjArr.addItem({
            'key': this.props.keyValue,
            'value': this.props.value,
            'label': this.props.label
          });
        });
      } else {
        this.setState({ 
          checked: false
        });
      }
    }
   
    stateSwitcher(key, label, value) {
      this.setState({ checked: !this.state.checked }, () => {
        if (this.state.checked) {
          this.props.checkedObjArr.addItem({ 
            'key': key,
            'value': value,
            'label': label
          });
        } else {
          this.props.checkedObjArr.fetchArray().splice(
            this.props.checkedObjArr.fetchArray().findIndex(y => y.key == key), 1
          );
        }
      });
    }
  
    render() {
      return (
        <TouchableHighlight
          onPress={this.stateSwitcher.bind(this, this.props.keyValue, this.props.label, this.props.value)} 
          underlayColor="transparent"
          style={{ marginVertical: 20 }}>
  
          <View style={{ 
            flexDirection: 'row', 
            alignItems: 'center' }}>
              <View style={{
                padding: 4, 
                width: this.props.size, 
                height: this.props.size, 
                backgroundColor: this.props.color
              }}>
                {
                  (this.state.checked)
                    ?
                    (<View style={styles.selectedUI}>
                      <Image source={require('./assets/tick.png')} style={styles.checkboxTickImg} />
                    </View>)
                    :
                    (<View style={styles.uncheckedCheckbox} />)
                }
            </View>
            <Text style={[styles.checkboxLabel, { color: this.props.labelColor }]}>
              {this.props.label}
            </Text>
            
          </View>
  
        </TouchableHighlight>
      );
    }
  }


  const styles = StyleSheet.create( 
    {
       modal: {
          flex: 1,
          alignItems: 'center',
          backgroundColor: '#000000',
          padding: 100
       },
       text: {
          color: '#3f2949',
          marginTop: 10
       },
      CheckboxContainer: {
        flex: 1,
        padding: 22,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: (Platform.OS === 'ios') ? 25 : 0
      },
  
      showSelectedButton: {
        padding: 20,
        marginTop: 25,
        alignSelf: 'stretch',
        backgroundColor: '#5D52FF'
      },
  
      buttonText: {
        fontSize: 20,
        color: '#ffffff',
        textAlign: 'center',
        alignSelf: 'stretch'
      },
  
      selectedUI: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      },
  
      checkboxTickImg: {
        width: '85%',
        height: '85%',
        tintColor: '#ffffff',
        resizeMode: 'contain'
      },
  
      uncheckedCheckbox: {
        flex: 1,
        backgroundColor: '#ffffff'
      },
  
      checkboxLabel: {
        fontSize: 18,
        paddingLeft: 15
      }
  });