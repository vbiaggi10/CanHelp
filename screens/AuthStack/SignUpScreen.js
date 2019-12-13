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
import { DatePicker } from 'native-base';
import Styles from '../../constants/Styles';
import Images from '../../constants/Images';
import FloatingLabelInput from '../../components/FloatingLabelInput';
import ButtonRound from '../../components/ButtonRound';
import apis from '../../services/apis';

class SignUpScreen extends React.Component {
  static navigationOptions = {
    headerTransparent: true
  };

  constructor() {
    super();
    this.state = {
      name: '',
      lastName: '',
      email: '',
      password: '',
      passwordRepeated: '',
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
                label="Nombre"
                value={this.state.name}
                onChangeText={text => this.setState({ name: text })}
              />
            </View>
            <View style={Styles.inputContainer}>
              <FloatingLabelInput
                label="Apellidos"
                value={this.state.lastName}
                onChangeText={text => this.setState({ lastName: text })}
              />
            </View>
            <View>
              <DatePicker
                defaultDate={new Date(2018, 4, 4)}
                // minimumDate={new Date(2018, 1, 1)}
                // maximumDate={new Date(2018, 12, 31)}
                locale={"es"}
                // timeZoneOffsetInMinutes={undefined}
                modalTransparent={false}
                animationType={"fade"}
                androidMode={"default"}
                placeHolderText="Select date"
                textStyle={{ color: "green" }}
                placeHolderTextStyle={{ color: "#d3d3d3" }}
                onDateChange={() => this.setDate()}
                // disabled={false}
              />
            </View>
            <View style={Styles.inputContainer}>
              <FloatingLabelInput
                autoCompleteType="email"
                keyboardType="email-address"
                label="Correo"
                value={this.state.email}
                onChangeText={text => this.setState({ email: text })}
              />
            </View>
            <View style={Styles.inputContainer}>
              <FloatingLabelInput
                label="Contraseña"
                value={this.state.password}
                secureTextEntry
                onChangeText={text => this.setState({ password: text })}
              />
            </View>
            <View style={Styles.inputContainer}>
              <FloatingLabelInput
                label="Repetir contraseña"
                value={this.state.password}
                secureTextEntry
                onChangeText={text => this.setState({ password: text })}
              />
            </View>
          </View>

          <View style={Styles.buttonContainer}>
            <ButtonRound title="Registrarse" onPress={this._signInAsync} />
          </View>
        </View>



        {/* <View style={Styles.buttonContainer}>
          <ButtonRound title="Registrarse" onPress={this._signInAsync} styleType="bordered" />
        </View> */}
      </ImageBackground>
    );
  }

  setDate = (newDate) => {
    this.setState({ chosenDate: newDate });
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

export default SignUpScreen;
