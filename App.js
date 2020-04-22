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
import PropTypes from 'prop-types';
import MyCheckBox from './MyCheckBox';
import Modal from 'react-native-modal';

class SelectedCheckboxes {
  constructor() {
    selectedCheckboxes = [];
  }

  addItem(option) {
    selectedCheckboxes.push(option);
  }

  fetchArray() {
    return selectedCheckboxes;
  }
}
export default class App extends Component {
  state = {
    isVisible: false,  
  }
  toggleModal = () => {
    this.setState({isModalVisible: !this.state.isModalVisible});
    // if (CheckedArrObject.fetchArray().length == 0) {
    //   Alert.alert('No Item Selected');
    // } else {
    //   this.setState(() => {
    //     return {
    //       pickedElements: CheckedArrObject.fetchArray().map(res => res.value).join()
    //     }
    //   });
    // }
  };
  constructor() {
    super();
    CheckedArrObject = new SelectedCheckboxes();
    this.state = { pickedElements: '' }
  }
 
  renderSelectedElements = () => {
    if (CheckedArrObject.fetchArray().length == 0) {
      Alert.alert('No Item Selected');
    } else {
      this.setState(() => {
        return {
          pickedElements: CheckedArrObject.fetchArray().map(res => res.value).join()
        }
      });
    }
  }

  render() {
    return (
      
      <View style={styles.container}>
        
        <MyCheckBox size={25}
          keyValue={1}
          checked={this.state.checked}
          color="#3F50B5"
          labelColor="#000000"
          label=""
          value=""  
          checkedObjArr={CheckedArrObject} />
          
        <Text style={{ fontSize: 22, color: "#000", marginTop: 25 }} onPress={this.renderSelectedElements}> Accept 
         </Text>
         <Button title="Term & Condition" onPress={this.toggleModal} />
        <Text style={{ fontSize: 22, color: "#000", marginTop: 25 }}>from AffinBank </Text>
        
        <View style={styles.CheckboxContainer}>
        
        <Modal isVisible={this.state.isModalVisible}>
          <View style={styles.CheckboxContainer}>
            <Text>Hello!</Text>
            <Text>Agree the policy</Text>
            <Button title="I read" onPress={this.toggleModal} />
          </View>
        </Modal>
      </View>

      </View>
    );
  }
}
 
MyCheckBox.propTypes = {
    keyValue: PropTypes.number.isRequired,
    size: PropTypes.number,
    color: PropTypes.string,
    label: PropTypes.string,
    value: PropTypes.string,
    checked: PropTypes.bool,
    labelColor: PropTypes.string,
    checkedObjArr: PropTypes.object.isRequired
}

MyCheckBox.defaultProps = {
    size: 32,
    checked: false,
    value: 'Default',
    label: 'Default',
    color: '#cecece',
    labelColor: '000000',    
}

const styles = StyleSheet.create( 
  {
    container: {
      flex: 1,
      padding: 40,
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: (Platform.OS === 'ios') ? 50 : 0
    },
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
 
});