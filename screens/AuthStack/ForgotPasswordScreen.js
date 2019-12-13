import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  ImageBackground,
  Image,
  View,
  Text
} from 'react-native';
import Styles from '../../constants/Styles';
import Images from '../../constants/Images';
import FloatingLabelInput from '../../components/FloatingLabelInput';
import ButtonRound from '../../components/ButtonRound';
import apis from '../../services/apis';

class ForgotPasswordScreen extends React.Component {
  static navigationOptions = {
    headerTransparent: true
  };

  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    }
  }

  render() {
    return (
      <ImageBackground source={Images.Background} style={Styles.container}>
        <View style={{ width: 300 }}>
          <View style={Styles.logoContainer}>
            <Image source={Images.Logo} style={Styles.logo} />
          </View>
          <View style={Styles.form}>
            <View style={Styles.inputContainer}>
              <FloatingLabelInput
                autoCompleteType="email"
                keyboardType="email-address"
                label="Correo"
                value={this.state.email}
                onChangeText={text => this.setState({ email: text })}
              />
            </View>
          </View>
          <View style={Styles.buttonContainer}>
            <ButtonRound title="Recuperar contraseña" onPress={this._signInAsync} />
          </View>
        </View>



        {/* <View style={Styles.buttonContainer}>
          <ButtonRound title="Registrarse" onPress={this._signInAsync} styleType="bordered" />
        </View> */}
      </ImageBackground>
    );
  }

  _showForgotPasswordScreen = () => {
    this.props.navigation.navigate('ForgotPassword');
  };

  _showSignUpScreen = () => {
    this.props.navigation.navigate('signUp');
  };

  _signInAsync = async () => {
    const { email, password } = this.state
    apis.signInWithEmailAndPassword(email, password).then(async () => {
      await AsyncStorage.setItem('userToken', email);
      this.props.navigation.navigate('App');
    })

  };
}

export default ForgotPasswordScreen;
