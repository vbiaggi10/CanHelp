import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  AsyncStorage,
  Button,
  View,
} from 'react-native';

import { MonoText } from '../components/StyledText';
import apis from '../services/apis';

class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View>
        <Button title="Show me more of the app" onPress={this._showMoreApp} />
        <Button title="Actually, sign me out :)" onPress={this._signOutAsync} />
      </View>
    );
  }

  _showMoreApp = () => {
    this.props.navigation.navigate('Other');
  };

  _signOutAsync = async () => {
    apis.signOut().then(async () => {
      await AsyncStorage.clear();
      this.props.navigation.navigate('Auth');
    })
  };
}

export default HomeScreen;