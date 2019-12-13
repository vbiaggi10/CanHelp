import { createStackNavigator } from 'react-navigation-stack';
import SignInScreen from '../screens/AuthStack/SignInScreen';
import SignUpScreen from '../screens/AuthStack/SignUpScreen';
import ForgotPasswordScreen from '../screens/AuthStack/ForgotPasswordScreen';

// const AppStack = createStackNavigator({ Home: HomeScreen, Other: OtherScreen });
const AuthStack = createStackNavigator(
  {
    SignIn: SignInScreen,
    SignUp: SignUpScreen,
    ForgotPassword: ForgotPasswordScreen,
  }
);

export default AuthStack