
import React, { Component } from 'react';
import {
  StyleSheet,
  AlertIOS,
  NavigatorIOS,
  TouchableHighlight,
  ScrollView,
  View,
  Text
} from 'react-native';

import CheckButton from '../../components/buttons/CheckButton'

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      checked: false,
      checked2: false
    }
  }

  _isCheckBoxToggle() {
    if(this.state.checked === false) {
      this.setState({checked: true});
    } else {
      this.setState({checked: false});
    }
  }

  _isCheckBoxToggle2() {
    if(this.state.checked2 === false) {
      this.setState({checked2: true});
    } else {
      this.setState({checked2: false});
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          checked btn text area
        </Text>
        <CheckButton onChange={()=>this._isCheckBoxToggle()} checked={this.state.checked} text='checked' />
        <CheckButton onChange={()=>this._isCheckBoxToggle2()} checked={this.state.checked2} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

module.exports = App;
